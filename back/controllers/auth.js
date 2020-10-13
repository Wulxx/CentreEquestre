import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userSchema from '../models/cavalier.js'

import {v4 as uuidv4 } from 'uuid';
import pkg from 'express';
const { response } = pkg;

import expressValidator from 'express-validator';
const { body } = expressValidator;

import { sendMail } from '../usefulServices/mail.js'

export const createUser = (req, res, next) => {
    console.log("create")
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new userSchema({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                number : req.body.number,
                licenseNumber : req.body.licenseNumber,
                email : req.body.email,
                status: req.body.status,
                password : hash,
                courses : []
            });

            user.save()
                .then((responseFromPost) => {
                    sendMail(req.body.email,req.body.firstName, "", false)
                    console.log("Created")
                    res.status(201).json({
                        message: "User successfully created",
                        result : responseFromPost
                    });
                }).catch(error => {
                    console.log("Not Created")
                    console.log(error)
                    res.status(500).json({
                        error: error
                    });
                });
        });
}
