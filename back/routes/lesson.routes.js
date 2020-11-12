import express from 'express'

import pkg from 'express-validator';

const { check, validationResult } = pkg;
import { getLessons, addLesson } from "../controllers/lessons.js"

const router = express.Router();


router.get("/lessons",getLessons)


router.post("/createLesson",
[
    check('debut-date', 'Il faut une date de début')
        .not()
        .isEmpty(),
    check('end-date', 'Il faut une date de fin')
        .not()
        .isEmpty(),
    check('name', 'Il faut une date de fin')
        .not()
        .isEmpty()
],addLesson);


export default router;