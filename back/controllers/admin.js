import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import horseSchema from '../models/horse.js'
import userSchema from '../models/auth.js'
import adminSchema from '../models/admin.js'
import teacherSchema from '../models/teacher.js'

import {v4 as uuidv4 } from 'uuid';
import pkg from 'express';
const { response } = pkg;

import expressValidator from 'express-validator';
const { body } = expressValidator;


export const signAsAdmin = (res,rep ) => {
    let { email } = req.body;

    let connexionWay = { email: email };
    checkIfExist(req, res, connexionWay)

}
function checkIfExist (req, res, connexionWay) {
    let getUser;
    adminSchema.findOne(connexionWay).then(user => {
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
        let jwtToken = jwt.sign(connexionTokenBuilder, "2I3PgCH6EdCg1WNTtX62_QhHedax3UIShzfbYJHWx63zeeQkzQojwQltK486thuXwcOJq_AKTEELvrhAyd0cXK5FGg-3qC-eoWy2hKDhsO630cSsM3Bb8MMeGYRFa8DbSDEuFFO9jZfrEZWk5jx85ZtqamTuqvnyvBtwIMIs_i8Admin", {
            expiresIn: "1h"
        });
        console.log(jwtToken);
        res.status(200).json({
            token: jwtToken,
            expiresIn: 3600,
            msg: getUser
        });
    }).catch(err => {
        console.log(err)
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
}

export const createTeacher = (req, res, next) => {
    console.log("create Teacher")
    const teacher = new teacherSchema({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        number : req.body.number,
        email : req.body.email,
        password : req.body.password,
    });
    teacher.save()
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

export const createHorse = (req, res, next) => {
    console.log("create Teacher")
    const horse = new horseSchema({
        name : req.body.name,
        assignedMonitor : req.body.assignedMonitor,
        courses : []
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

export const createAdmin = (req, res, next) => {
    console.log("create Teacher")
    const admin = new adminSchema({
        name : req.body.name,
        mail: req.body.mail,
        password: req.body.password,
    });
    admin.save()
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

export const searchUser = (req, res) => {
    console.log("get")
    var reg = new RegExp(req.body.searchInput,"i")
    await userSchema.find({name : reg }, (error, response) => {
        if(error){
            return next(error)
        } else {
            res.status(200).json(response)
        }
    }).exec()
}

export const getAdmin = (req, res) => {
    console.log("get")
    var reg = new RegExp(req.body.searchInput,"i")
    await adminSchema.find({name : reg }, (error, response) => {
        if(error){
            return next(error)
        } else {
            res.status(200).json(response)
        }
    }).exec()
}

export const getProfil = (req,res) => {
    console.log("getProfil")
    var getProfil = adminSchema.findById(req.body._id, (err, res) => {
        if(error){
            res.status(403).json(response)
        }else{
            res.send(getProfil)
        }
    })
}

export const updateAdmin = (req,res, next) => {
    console.log("update")
    adminSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return next(error);
        }else {
            res.json(data)
            console.log('user successfully updated !')
        }
    })
}