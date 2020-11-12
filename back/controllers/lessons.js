import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import horseSchema from '../models/horse.js'
import lessonsSchema from '../models/lessons.js'

import {v4 as uuidv4 } from 'uuid';
import pkg from 'express';
const { response } = pkg;

import expressValidator from 'express-validator';
import { sendMail } from '../usefulServices/mail.js'
const { body } = expressValidator;

export const getLessons = (req, res) => {
    lessonsSchema.find({}, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        }else {
            res.json(data)
            console.log('list founded')
        }
    })
}

export const addLesson = (req, res) => {
    console.log("Add Course")
    const course = new lessonsSchema({
        name : req.body.name,
        assignedMonitor : req.body.assignedMonitor,
        debutDate : req.body.debutDate,
        endDate : req.body.endDate,
        horses : [],
        students : []
    });

    course.save()
        .then((responseFromPost) => {
            console.log("Created")
            res.status(201).json({
                message: "Lesson successfully created",
                result : responseFromPost
            });
        }).catch(error => {
            console.log("Not Created")
            console.log(error)
            res.status(500).json({
                error: error
            });
        });
}