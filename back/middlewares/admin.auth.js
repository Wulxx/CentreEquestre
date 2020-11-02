import jwt from 'jsonwebtoken';
import express from 'express';

const router = express.Router();

//connexion
export default (req, res, next) => {
    try {
        const token = req.headers.authorisazion;
        jwt.verify(token, "2I3PgCH6EdCg1WNTtX62_QhHedax3UIShzfbYJHWx63zeeQkzQojwQltK486thuXwcOJq_AKTEELvrhAyd0cXK5FGg-3qC-eoWy2hKDhsO630cSsM3Bb8MMeGYRFa8DbSDEuFFO9jZfrEZWk5jx85ZtqamTuqvnyvBtwIMIs_i8Admin");
        next();
    } catch(error) {
        res.status(401).json({
            message: 'Authentification failed'
        });
    }
}