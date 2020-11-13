// routes/auth.routes.js
import express from 'express'
import  authorize from "../middlewares/admin.auth.js";
import { signAsAdmin, searchUser, getAdmin, getProfil, getAllAdmin, createTeacher, createAdmin } from '../controllers/admin.js'

const router = express.Router();

router.post('/signIn',signAsAdmin)

router.post('/createTeacher',createTeacher)
router.post('/createAdmin',createAdmin)


router.get('/Admin/:id',getProfil)
router.get('/Admin/',getAllAdmin)
router.get('/searchArdmin', authorize, getAdmin)
router.get('/searchUser', authorize, searchUser)

export default router;