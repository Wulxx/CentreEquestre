import jwt from 'jsonwebtoken';
import express from 'express';

const router = express.Router();

//connexion
export default (req, res, next) => {
    try {
        const token = req.headers.authorisazion;
        jwt.verify(token, "f2qPmyRjN4UKmVwSD0ADvVcl64Vj4zWhK1hwr_DXJxm2mIbvECSBO0MzpueRsr32bGYO0e00ZtGt9b0Gr-OlJX3BS6MX-gxdLn0rsRtHlL4OM0YnxdrMW50Bb4xtZ1ZK3CzJVhvJtL042c6ujOon9zOQ0q2ApJnaELnUD727lv0MSFT3Zqf99e4Uegpa9XMLhenE38OrIk57A0S6_Q1awZrrQr_hl4fklnaiqjcDIqNfMYGaqrtUWnGWPXeYKhoph0PWRpEclIAGjU8w5TjYDlFETp8chrxWoa_40ZTYXW7-MRBqd0CPWCI1zQu9cIi6yBOXVUUf9B_WJ2a0MwGTHQSuperUser");
        next();
    } catch(error) {
        res.status(401).json({
            message: 'Authentification failed'
        });
    }
}