// routes/auth.routes.js
import express from 'express'

import  authorize from "../middlewares/auth.js";
import { createHorse } from '../controllers/horses.js'

const router = express.Router();

router.route('/').post(authorize,createHorse)

export default router;