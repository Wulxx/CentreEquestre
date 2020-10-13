import jwt from 'jsonwebtoken';
import express from 'express';

const router = express.Router();

//connexion
export default (req, res, next) => {
    try {
        const token = req.headers.authorisazion;
        jwt.verify(token, "0BCw5fO_SY6ieWRN8XwmZUenJTFbA7OQCctpRIfbTU-dN-g0U60CXV6pPckIKCCq1skBZenkew-kMULnPQztSz9FtZyUYUwfpgnF8_h_4Hf8tde5fFLgg5t1OB8WdEmAZwSZuX4cCgeFHAgjv_MuLY392OvRRQWSa5oRSehHQpEUser");
        next();
    } catch(error) {
        res.status(401).json({
            message: 'Authentification failed'
        });
    }
}