// routes/auth.routes.js
import express from 'express'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userSchema from '../models/user.js'
const router = express.Router();
import  authorize from "../middlewares/auth.js";
import pkg from 'express-validator';
import { createUser, getUser,getUserById,signUser, updateUser, deleteUser } from '../controllers/users.js'

const { check, validationResult } = pkg;


// Sign-up
router.post("/create",
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
        check('status', 'Veuilliez choisir un status')
            .not()
            .isEmpty(),
        check('password', 'Password should be between 5 to 8 characters long')
            .not()
            .isEmpty()
            .isLength({ min: 5, max: 8 })
    ],createUser);
// Sign-in
router.post("/signin",
[
    check('password', 'Password should t be isEmpty')
        .not()
        .isEmpty()
], signUser);

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

// Get Single User
router.route('/:id').get(getUserById)

// Update User
router.route('/:id').put(updateUser)

// Delete User
router.route('/:id').delete(deleteUser)

export default router;