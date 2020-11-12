// routes/auth.routes.js
import express from 'express'
import  authorize from "../middlewares/admin.auth.js";
import { signAsAdmin, searchUser, getAdmin } from '../controllers/admin.js'

const router = express.Router();

router.post('/signIn',signAsAdmin)
router.get('/searchArdmin', authorize, getAdmin)
router.get('/searchUser', authorize, searchUser)

export default router;