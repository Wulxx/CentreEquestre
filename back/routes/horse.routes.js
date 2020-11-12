// routes/auth.routes.js
import express from 'express'

import  authorize from "../middlewares/auth.js";
import { createHorse } from '../controllers/horses.js'

const router = express.Router();


router.route('/createHorse').post(authorize,createHorse)
router.route('/getHorse').post(authorize,createHorse)

export default router;