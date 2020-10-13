// routes/auth.routes.js
import express from 'express'

import  authorize from "../middlewares/superUser.auth.js";

import { superSignIn } from "../controllers/superUser.js"

const router = express.Router();


// Sign-in
router.post("/superSignIn",
[
    check('password', 'Password should t be isEmpty')
        .not()
        .isEmpty()
], authorize,superSignIn);


export default router;