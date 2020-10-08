import jwt from 'jsonwebtoken';
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import userSchema from '../models/user.js';
import authorize from '../middlewares/auth.js'

const router = express.Router();

import {check, validationResult} from 'express-validator';

//connexion

router.post("/create",[
    check('name')
        .not()
        .isEmpty()
        .isLength({ min: 3})
        .withMessage('Le nom doit faire au moins trois charactères'),
    check('email')
        .not()
        .isEmpty(),
    check('password', 'Le ode de passe doit faire au moins 5 de longueure')
        .not()
        .apply()
        .isLength({min: 5})
], (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body);

    if(!errors.isEmpty()){
        return res.status(422).jsonp(errors.array());
    }
    else {
        bycrypt.hash(req.body.password, 10).the((hash) => {
            const user = new userSchema({
                name : req.body.name,
                email: req.body.email,
                password: hash
            });
            user.save().then((response) => {
                
            })
        })
    }
})










const authTester = (req, res, next) => {
    try {
        const token = req.headers.authoriation.split(" ")[1];
        jwt.verify(token, "longer-secret-is-better");
        next();
    } catch(error) {
        res.status(401).json({
            message: 'AUthentification failed'
        });
    }
}

export default authTester;