import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import horseSchema from '../models/horse.js'
import teacherSchema from '../models/teacher.js'
import lessonSchema from '../models/lessons.js'

import {v4 as uuidv4 } from 'uuid';
import pkg from 'express';
const { response } = pkg;

import expressValidator from 'express-validator';
const { body } = expressValidator;

export const signAsTeacher = (req,res ) => {
    let { email, number, licenseNumber } = req.body;

    if (email){
        let connexionWay = { email: email };
        checkIfExist(req, res, connexionWay)
    }
    else if (number){
        let connexionWay = { number: number };
        checkIfExist(req, res, connexionWay)
    } else {
        res.status(403).json();
    }
}
function checkIfExist (req, res, connexionWay) {
    let getUser;
    teacherSchema.findOne(connexionWay).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(response => {
        if (!response) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        let connexionTokenBuilder = {... connexionWay, userId: getUser._id}
        let jwtToken = jwt.sign(connexionTokenBuilder, "b5qPOVdICiko9MGzI9YOX2gv5o_wjA6Ys5_epn_kTh8Teacher", {
            expiresIn: "1h"
        });
        console.log(jwtToken);
        res.status(200).json({
            id_token: jwtToken,
            expiresIn: 36000,
            msg: 'OK',
            status: 'Monitor',
            id: getUser._id
        });
    }).catch(err => {
        console.log(err)
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
}
export const assingHorse = (req, res, next) => {
    let currentHorse = req.body;
    currentHorse.courses.push({debut : "2020-10-10T19:30:00", end : "2020-10-10T20:30:00"})
     horseSchema.findByIdAndUpdate(horseId, {
        $set: currentHorse
        }, (error, data) => {
        if (error) {
            console.log(error)
        return res.status(401).json({
            message: "Authentication failed"
        });
        }else {
            res.json(data)
            console.log('user successfully updated !')
        }
    })
}

export const getTeachers = (req,res, next) => {
    console.log("get")
    teacherSchema.find((error, response) => {
        if(error){
            console.log(error)
        return res.status(401).json({
            message: "Authentication failed"
        });
        } else {
            res.status(200).json(response)
        }
    })
}

export const getTeacher = (req,res, next) => {
    console.log("get"+req.params.id)
    teacherSchema.findOne({_id: req.params.id},(error, response) => {
        if(error){
            return res.status(401).json({
            message: "Authentication failed"
        });
        } else {
            res.status(200).json(response)
        }
    })
}

export const createHorse = (req, res, next) => {
    console.log("create")
    const horse = new horseSchema({
        name : req.body.name,
        assignedMonitor : req.body.assignedMonitor,
    });

    horse.save()
        .then((responseFromPost) => {
            res.status(201).json({
                message: "User successfully created",
                result : responseFromPost
            });
            res.send("Ok");
        }).catch(error => {
            res.status(500).json({
                error: error
            });
            res.send("Pas Ok");
        });
}

export const createLesson = (req, res, next) => {
    console.log("create")
    const lesson = new lessonSchema({
        name: req.body.name,
        assignedMonitor : req.body.assignedMonitor,
        debutDate : req.body.debutDate,
        endDate : req.body.endDate,
        horses : [],
        students : [],
    });
    lesson.save()
        .then((responseFromPost) => {
            res.status(201).json({
                message: "User successfully created",
                result : responseFromPost
            });
            res.send("Ok");
        }).catch(error => {
            res.status(500).json({
                error: error
            });
            res.send("Pas Ok");
        });
}

export const updateTeacher = (req,res, next) => {
    console.log("update")
    teacherSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
            message: "Authentication failed"
        });;
        }else {
            res.json(data)
            console.log('user successfully updated !')
        }
    })
}
