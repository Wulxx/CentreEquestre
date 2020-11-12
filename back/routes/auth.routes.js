// routes/auth.routes.js
import express from 'express'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userSchema from '../models/cavalier.js'
const router = express.Router();
import  authorize from "../middlewares/auth.js";
import pkg from 'express-validator';
import { createUser, createAdmin, createSuperAdmin, createTeacher } from '../controllers/auth.js'

const { check, validationResult } = pkg;


// Sign-up
router.post("/createUser",
    [
        check('firstName')
            .not()
            .isEmpty()
            .isLength({ min: 3 })
            .withMessage('Name must be atleast 3 characters long'),
        check('lastName')
            .not()
            .isEmpty()
            .withMessage('Le nom doit être au moins long de deux caractères'),
        check('email', 'Email is required')
            .not()
            .isEmpty(),
        check('password', 'Password should be between 5 to 8 characters long')
            .not()
            .isEmpty()
            .isLength({ min: 5, max: 8 })
    ],createUser);



router.post("/createTeacher",
    [
        check('firstName')
            .not()
            .isEmpty()
            .isLength({ min: 3 })
            .withMessage('Name must be atleast 3 characters long'),
        check('lastName')
            .not()
            .isEmpty()
            .withMessage('Le nom doit être au moins long de deux caractères'),
        check('password', 'Password should be between 5 to 8 characters long')
            .not()
            .isEmpty()
            .isLength({ min: 5, max: 8 })
    ],createTeacher);

router.post("/createAdmin",
    [
        check('firstName')
            .not()
            .isEmpty()
            .isLength({ min: 3 })
            .withMessage('Name must be atleast 3 characters long'),
        check('lastName')
            .not()
            .isEmpty()
            .withMessage('Le nom doit être au moins long de deux caractères'),
        check('email', 'Email is required')
            .not()
            .isEmpty(),
        check('password', 'Password should be between 5 to 8 characters long')
            .not()
            .isEmpty()
            .isLength({ min: 5, max: 8 })
    ],createAdmin);

router.post("/createSuperAdmin",
    [
        check('firstName')
            .not()
            .isEmpty()
            .isLength({ min: 3 })
            .withMessage('Name must be atleast 3 characters long'),
        check('lastName')
            .not()
            .isEmpty()
            .withMessage('Le nom doit être au moins long de deux caractères'),
        check('email', 'Email is required')
            .not()
            .isEmpty(),
        check('password', 'Password should be between 5 to 8 characters long')
            .not()
            .isEmpty()
            .isLength({ min: 5, max: 8 })
    ],createSuperAdmin);
// Get Users
router.route('/').get(authorize, (req, res) => {
    userSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

export default router;