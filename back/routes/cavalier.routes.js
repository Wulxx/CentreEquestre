// routes/auth.routes.js
import express from 'express'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import lessonsSchema from '../models/lessons.js'
const router = express.Router();
import  authorize from "../middlewares/user.auth.js";
import pkg from 'express-validator';
import { getUser,getUserById,signAsCav, updateUser, deleteUser, sendPassWord, registerToCourse, suppressFromCourse } from '../controllers/cavalier.js'

const { check, validationResult } = pkg;

// Sign-in
router.post("/signIn",
[
    check('password', 'Password should t be isEmpty')
        .not()
        .isEmpty()
], signAsCav);

router.route('/passwordForgotten').post(sendPassWord)
router.route('/register/:id').post(registerToCourse)
router.route('/suppress/:id').post(suppressFromCourse)



// Get Users
router.route('/cavaliers').get(authorize, getUser)

// Get Single User
router.route('/:id').get( getUserById)

// Update User
router.route('/:id').put(authorize, updateUser)

// Delete User
router.route('/:id').delete(authorize, deleteUser)


export default router;