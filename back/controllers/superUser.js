import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import adminSchema from '../models/admin'

import {v4 as uuidv4 } from 'uuid';
import pkg from 'express';
const { response } = pkg;

import expressValidator from 'express-validator';
const { body } = expressValidator;


export const createAdmin = (req,res, next) => {
    console.log("create")
    const admin = new adminSchema({
        name : req.body.name,
        mail : req.body.mail,
        password : req.body.password
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
export const deleteAdmin = (req, res, next ) => {
    console.log("delete Admin")
    adminSchema.findByIdAndDelete(req.params.id, (error, data) => {
    if(error){
        return next(error)
    }else{
        res.json(data)
        console.log("Well deleted")
    }
})
}

export const getAdmin = (req, res) => {
    console.log("get")
    adminSchema.find((error, response) => {
        if(error){
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
}