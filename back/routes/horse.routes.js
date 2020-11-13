// routes/auth.routes.js
import express from 'express'

import  authorize from "../middlewares/auth.js";
import { createHorse, getHorse, getHorseById } from '../controllers/horses.js'

const router = express.Router();


router.route('/createHorse').post(authorize,createHorse)
router.route('/getHorse').get(getHorse)
router.route('/getHorse/:id').get(getHorseById)

export default router;