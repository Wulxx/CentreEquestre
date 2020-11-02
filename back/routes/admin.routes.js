// routes/auth.routes.js
import express from 'express'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import lessonsSchema from '../models/lessons.js'
const router = express.Router();
import  authorize from "../middlewares/admin.auth.js";
import pkg from 'express-validator';
import { signAsAdmin, searchUser, getAdmin } from '../controllers/admin.js'

router.post('/signIn',authorize,signAsAdmin)
router.get('/searchArdmin', authorize, getAdmin)
router.get('/searchUser', authorize, searchUser)