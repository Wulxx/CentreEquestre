// routes/auth.routes.js
import express from 'express'

import  authorize from "../middlewares/superUser.auth.js";
import pkg from 'express-validator';

const { check, validationResult } = pkg;
import { signAsTeacher, assingHorse, updateTeacher, getTeachers, getTeacher, createLesson } from "../controllers/teacher.js"
import { createHorse } from "../controllers/horses.js"

const router = express.Router();
router.get("/teachers",getTeachers);
router.get("/teachers/:id",getTeacher);

router.post("/create/:id",
[
    check('password', 'Password should t be isEmpty')
        .not()
        .isEmpty()
],createLesson);

// Sign-in
router.post("/signIn",
[
    check('password', 'Password should t be isEmpty')
        .not()
        .isEmpty()
],signAsTeacher);


router.post("/assignHorse",
[
    check('horse_id', 'should t be isEmpty')
        .not()
        .isEmpty(),
    check('cavalier_id', 'should t be isEmpty')
    .not()
    .isEmpty(),
    check('lesson_id', 'should t be isEmpty')
    .not()
    .isEmpty()
],assingHorse);

router.put("/updateProfil",
[
    check('name')
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
],updateTeacher);



export default router;