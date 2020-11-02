import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import horseSchema from '../models/horse.js'

import {v4 as uuidv4 } from 'uuid';
import pkg from 'express';
const { response } = pkg;

import expressValidator from 'express-validator';
const { body } = expressValidator;

export const asingHorse = (req, res) => {
    let currentHorse = req.body;
    currentHorse.courses.push({debut : "2020-10-10T19:30:00", end : "2020-10-10T20:30:00"})
    await horseSchema.findByIdAndUpdate(horseId, {
        $set: currentHorse
        }, (error, data) => {
        if (error) {
            return next(error); 
            console.log(error)
        }else {
            res.json(data)
            console.log('user successfully updated !')
        }
    })
}
export const getHorses = (req,res) => {
    console.log("get")
    horseSchema.find((error, response) => {
        if(error){
            return next(error)
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
