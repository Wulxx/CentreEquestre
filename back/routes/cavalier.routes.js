// routes/auth.routes.js
import express from 'express'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userSchema from '../models/auth.js'
const router = express.Router();
import  authorize from "../middlewares/auth.js";
import pkg from 'express-validator';
import { createUser, getUser,getUserById,signUser, updateUser, deleteUser, sendPassWord } from '../controllers/auth.js'

const { check, validationResult } = pkg;

// Get Users
router.route('/getCourses').get(authorize, (req, res) => {
    const _id = req.headers.id;
    let user;
    userSchema.findById(_id, (err, rep) => {
        if(err){
            return next(err)
        } else{
            user = rep
        }
    })
})





export default router;