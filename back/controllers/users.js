import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userSchema from '../models/user.js'

import {v4 as uuidv4 } from 'uuid';
import pkg from 'express';
const { response } = pkg;

export const createUser = (req, res, next) => {
    console.log("create")
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new userSchema({
                name : req.body.name,
                email : req.body.email,
                status: req.body.status,
                password : hash
            });

            user.save()
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
        });
}

export const signUser = (req, res, next) => {
    let getUser;
    userSchema.findOne({
        email: req.body.email
    }).then(user => {
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
        let jwtToken = jwt.sign({
            email: getUser.email,
            userId: getUser._id
        }, "longer-secret-is-better", {
            expiresIn: "1h"
        });
        res.status(200).json({
            token: jwtToken,
            expiresIn: 3600,
            msg: getUser
        });
    }).catch(err => {
        console.log("Erreur creation")
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
}
export const getUser = (req, res) => {
    console.log("get")
    userSchema.find((error, response) => {
        if(error){
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
}

export const getUserById = (req, res, next) => {
    console.log("getById")
    userSchema.findById(req.params.id , (error, data) => {
        if(error){
            return next(error)
        } else {
            res.status(200).json({
                msg : data
            })
        }
    })
}

export const deleteUser = (req,res) => {
    console.log("Delete")
        userSchema.findByIdAndDelete(req.params.id, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
            console.log("Well deleted")
        }
    })
}

export const updateUser = (req,res, next) => {
    console.log("update")
    userSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
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