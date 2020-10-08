import jwt from 'jsonwebtoken';
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import userSchema from '../models/user.js';
import authorize from '../middlewares/auth.js'

const router = express.Router();

import {check, validationResult} from 'express-validator';

//connexion 

router.post("/")










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