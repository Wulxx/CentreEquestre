import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import horseSchema from '../models/horse.js'
import lessonsSchema from '../models/lessons.js'

import {v4 as uuidv4 } from 'uuid';
import pkg from 'express';
const { response } = pkg;

import expressValidator from 'express-validator';
const { body } = expressValidator;

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

export const getHorse = (req, res, next) => {
    horseSchema.find({}, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        }else {
            res.json(data)
            console.log('list founded')
        }
    })
}
