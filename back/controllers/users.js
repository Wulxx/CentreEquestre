import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userSchema from '../models/user.js'

import {v4 as uuidv4 } from 'uuid';
import pkg from 'express';
const { response } = pkg;
var users = [];

export const createUser = (req, res, next) => {
    console.log("create")
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new userSchema({
                name : req.body.name,
                email : req.body.email,
                password : hash
            });

            user.save()
                .then((response) => {
                    res.status(201).json({
                        message: "User successfully created",
                        result : response
                    });
                    res.send("Ok");
                }).catch(error => {
                    res.status(500).json({
                        error: error
                    });
                    res.send("Pas Ok");
                });
        });
    // const {email, pseudo, password } = req.body;

    //     if (email && pseudo && password){
    //         const user = {};
    //         const userId = uuidv4();
    //         const userWithid = { ... user, id: userId, email: email, pseudo: pseudo, password : password};
    //         users.push(userWithid);
    //     }
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
    // const { id } = req.params;
    // let currentUser = users.find((user) => user.id === id);
    // console.log(currentUser)
    // res.send(currentUser)
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
    // const { id } = req.params;
    // let currentUser = users.find((user) => user.id === id);
    // console.log(currentUser)
    // res.send(currentUser)
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

    // const { id } = req.params;

    // users = users.filter((user) => user.id !== id)
    // res.send(users)
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

    // const { id } = req.params;
    // const { firstName, lastName, age } = req.body;

    // var currentUser = users.find((user) => user.id === id);

    // if (firstName) currentUser.firstName = firstName;
    // if (lastName) currentUser.lastName = lastName;
    // if (age) currentUser.age = age;

    // res.send(users)
}