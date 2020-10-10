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