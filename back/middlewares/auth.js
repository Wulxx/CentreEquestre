import jwt from 'jsonwebtoken';
import express from 'express';

const router = express.Router();

//connexion
const authTester = (req, res, next) => {
    try {
        const token = req.headers.authoriation.split(" ")[1];
        jwt.verify(token, "longer-secret-is-better");
        next();
    } catch(error) {
        res.status(401).json({
            message: 'AUthentification failed'
        });
    }
}

export default authTester;