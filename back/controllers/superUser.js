import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import superUserSchema from '../models/superUser.js'

import {v4 as uuidv4 } from 'uuid';
import pkg from 'express';
const { response } = pkg;

import expressValidator from 'express-validator';
const { body } = expressValidator;

export const signAsSUperAdmin = (req,res ) => {
    let { username } = req.body;
    console.log(username)
    let connexionWay = { username: username };
    checkIfExist(req, res, connexionWay)

}
function checkIfExist (req, res, connexionWay) {
    let getUser;
    superUserSchema.findOne(connexionWay).then(user => {
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
        let jwtToken = jwt.sign(connexionTokenBuilder, "2I3PgCH6EdCg1WNTtX62_QhHedax3UIShzfbYJHWx63zeeQkzQojwQltK486thuXwcOJq_AKTEELvrhAyd0cXK5FGg-3qC-eoWy2hKDhsO630cSsM3Bb8MMeGYRFa8DbSDEuFFO9jZfrEZWk5jx85ZtqamTuqvnyvBtwIMIs_i8SUperAdmin", {
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

export const getAllAdmin = (req, res) => {
    console.log("get")
    adminSchema.find((error, response) => {
        if(error){
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
}

export const getAdmin = (req, res) => {
    console.log("get")
    adminSchema.find({name : req.body.search},(error, response) => {
        if(error){
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
}