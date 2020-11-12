// routes/auth.routes.js
import express from 'express'

import  authorize from "../middlewares/superUser.auth.js";

// import { signAsTeacher } from "../controllers/teacher.js"

const router = express.Router();


// Sign-in
router.post("/signIn",
[
    check('password', 'Password should t be isEmpty')
        .not()
        .isEmpty()
],() => {
    console.log("sign as teacher")
});


export default router;