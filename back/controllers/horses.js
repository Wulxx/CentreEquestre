import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import horseSchema from '../models/horse.js'

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
    const { cavalierId } = req.body;
    let user;
    horseSchema.find().all({ cavaliers : cavalierId }, (err, rep) => {
        if(err){
            return next(err)
        } else{
            user = rep
        }
    })
}
