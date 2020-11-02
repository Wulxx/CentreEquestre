import jwt from 'jsonwebtoken';
import express from 'express';

const router = express.Router();

//connexion
export default (req, res, next) => {
    try {
        const token = req.headers.authorisazion;
        jwt.verify(token, "longer-secret-is-better");
        next();
    } catch(error) {
        res.status(401).json({
            message: 'Authentification failed'
        });
    }
}