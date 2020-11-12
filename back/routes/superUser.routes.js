import express from 'express'

import  authorize from "../middlewares/superUser.auth.js";

import { superSignIn, createAdmin, deleteAdmin,getAllAdmin, getAdmin  } from "../controllers/superUser.js"

import pkg from 'express-validator';

const { check, validationResult } = pkg;

const router = express.Router();


// Sign-in
router.post("/signIn",
[
    check('password', 'Password should t be isEmpty')
        .not()
        .isEmpty()
],superSignIn);

router.get("/getAdmin/",
[
    check('password', 'Password should t be isEmpty')
        .not()
        .isEmpty()
],getAdmin);

router.get("/getAllAdmin/",
[
    check('password', 'Password should t be isEmpty')
        .not()
        .isEmpty()
],getAllAdmin);


router.post("/createAdmin/:id",
[
    check('password', 'Password should t be isEmpty')
        .not()
        .isEmpty()
],createAdmin);

router.delete("/deleteAdmin/:id",
[
    check('password', 'Password should t be isEmpty')
        .not()
        .isEmpty()
],deleteAdmin);


export default router;