import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import superUserSchema from '../models/superUser.js'

import {v4 as uuidv4 } from 'uuid';
import pkg from 'express';
const { response } = pkg;

import expressValidator from 'express-validator';
const { body } = expressValidator;

export const superSignIn = (req,res) => {
    console.log("Super sign")
    let getUser;
    superUserSchema.findOne({ status : "superAdmin"}).then(user => {
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
        let connexionTokenBuilder = {userId: getUser._id}
        let jwtToken = jwt.sign(connexionTokenBuilder, "f2qPmyRjN4UKmVwSD0ADvVcl64Vj4zWhK1hwr_DXJxm2mIbvECSBO0MzpueRsr32bGYO0e00ZtGt9b0Gr-OlJX3BS6MX-gxdLn0rsRtHlL4OM0YnxdrMW50Bb4xtZ1ZK3CzJVhvJtL042c6ujOon9zOQ0q2ApJnaELnUD727lv0MSFT3Zqf99e4Uegpa9XMLhenE38OrIk57A0S6_Q1awZrrQr_hl4fklnaiqjcDIqNfMYGaqrtUWnGWPXeYKhoph0PWRpEclIAGjU8w5TjYDlFETp8chrxWoa_40ZTYXW7-MRBqd0CPWCI1zQu9cIi6yBOXVUUf9B_WJ2a0MwGTHQSuperUser", {
            expiresIn: "1h"
        });
        console.log(jwtToken);
        res.status(200).json({
            id_token: jwtToken,
            expiresIn: 36000,
            msg: 'OK',
            status: 200
        });
    }).catch(err => {
        console.log(err)
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
}


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