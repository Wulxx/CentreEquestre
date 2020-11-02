import jwt from 'jsonwebtoken';
import express from 'express';

const router = express.Router();

//connexion
export default (req, res, next) => {
    try {
        const token = req.headers.authorisazion;
        jwt.verify(token, "b5qPOVdICiko9MGzI9YOX2gv5o_wjA6Ys5_epn_kTh8Teacher");
        next();
    } catch(error) {
        res.status(401).json({
            message: 'Authentification failed'
        });
    }
}