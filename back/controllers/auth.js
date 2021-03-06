import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userSchema from '../models/cavalier.js'
import teacherSchema from '../models/teacher.js'
import adminSchema from '../models/admin.js'
import superAdminSchema from '../models/superUser.js'

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
                name : req.body.name,
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
                    sendMail(req.body.email,req.body.name, "", false)
                    console.log("Created")
                    res.status(201).json({
                        message: "User successfully created"
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

export const createAdmin = (req, res, next) => {
    console.log("create")
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new adminSchema({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            });

            user.save()
                .then((responseFromPost) => {
                    console.log("Created")
                    res.status(201).json({
                        message: "Admin successfully created"
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

export const createSuperAdmin = (req, res, next) => {
    console.log("create")
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new superAdminSchema({
                username : req.body.email,
                password: hash
            });

            user.save()
                .then((responseFromPost) => {
                    console.log("Created")
                    res.status(201).json({
                        message: "SUper Admin successfully created"
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

export const createTeacher = (req, res, next) => {
    console.log("create")
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new teacherSchema({
                name : req.body.name,
                lastName : req.body.lastName,
                number : req.body.number,
                licenseNumber : req.body.licenseNumber,
                email : req.body.email,
                password : hash,
                courses : []
            });

            user.save()
                .then((responseFromPost) => {
                    sendMail(req.body.email,req.body.name, "", false)
                    console.log("Created")
                    res.status(201).json({
                        message: "User successfully created"
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

export const signUser = (req, res) => {
    let { email, number, licenseNumber } = req.body;


    if (email){
        let connexionWay = { email: email};
        checkIfExist(req, res, connexionWay)
    }
    if (number){
        let connexionWay = { number: number};
        checkIfExist(req, res, connexionWay)
    }
    if (licenseNumber){
        let connexionWay = { licenseNumber: licenseNumber};
        checkIfExist(req, res, connexionWay)
    }
}
function checkIfExist (req, res, connexionWay) {
    let getUser;
    userSchema.findOne(connexionWay).then(user => {
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
        let jwtToken = jwt.sign(connexionTokenBuilder, "longer-secret-is-better", {
            expiresIn: "1h"
        });
        console.log(jwtToken);
        res.status(200).json({
            id_token: jwtToken,
            expiresIn: 36000,
            msg: 'OK',
            status: 200,
            id: getUser._id
        });
    }).catch(err => {
        console.log(err)
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
}



export const getUser = (req, res) => {
    console.log("get")
    userSchema.find((error, response) => {
        if(error){
            return res.status(401).json({
            message: "Authentication failed"
        });
        } else {
            res.status(200).json(response)
        }
    })
}

export const getUserById = (req, res, next) => {
    console.log("getById")
    userSchema.findById(req.params.id , (error, data) => {
        if(error){
            return res.status(401).json({
            message: "Authentication failed"
        });
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
            return res.status(401).json({
            message: "Authentication failed"
        });
        }else{
            res.json(data)
            console.log("Well deleted")
        }
    })
}

export const superSignIn = (req,res, next) => {
    console.log("Super sign")
    let getUser;
    userSchema.findOne({ status : "superAdmin"}).then(user => {
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
        let jwtToken = jwt.sign(connexionTokenBuilder, "longer-secret-is-better", {
            expiresIn: "1h"
        });
        console.log(jwtToken);
        res.status(200).json({
            id_token: jwtToken,
            expiresIn: 36000,
            msg: 'OK',
            status: 200,
            id: getUser._id
        });
    }).catch(err => {
        console.log(err)
        return res.status(401).json({
            message: "Authentication failed"
        });
    });


}

export const updateUser = (req,res, next) => {
    console.log("update")
    userSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
            message: "Authentication failed"
        });;
        }else {
            res.json(data)
            console.log('user successfully updated !')
        }
    })
}

