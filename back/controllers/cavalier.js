import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userSchema from '../models/cavalier.js'

export const signAsCav = (res,rep ) => {
    let { email, number, licenseNumber } = req.body;

    if (email){
        let connexionWay = { email: email };
        checkIfExist(req, res, connexionWay)
    }
    if (number){
        let connexionWay = { number: number };
        checkIfExist(req, res, connexionWay)
    }
    if (licenseNumber){
        let connexionWay = { licenseNumber: licenseNumber };
        checkIfExist(req, res, connexionWay)
    }

}
function checkIfExist (req, res, connexionWay) {
    let getUser;
    userSchema.findOne(connexionWay).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(response => {
        if (!response) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        let connexionTokenBuilder = {... connexionWay, userId: getUser._id}
        let jwtToken = jwt.sign(connexionTokenBuilder, "0BCw5fO_SY6ieWRN8XwmZUenJTFbA7OQCctpRIfbTU-dN-g0U60CXV6pPckIKCCq1skBZenkew-kMULnPQztSz9FtZyUYUwfpgnF8_h_4Hf8tde5fFLgg5t1OB8WdEmAZwSZuX4cCgeFHAgjv_MuLY392OvRRQWSa5oRSehHQpEUser", {
            expiresIn: "1h"
        });
        console.log(jwtToken);
        res.status(200).json({
            token: jwtToken,
            expiresIn: 3600,
            msg: getUser
        });
    }).catch(err => {
        console.log(err)
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
}

export const getCourses = (req, res) => {
    const { cavalierId } = req.body;
    let user;
    lessonsSchema.find({ cavaliers : cavalierId }, (err, rep) => {
        if(err){
            return next(err)
        } else{
            user = rep
        }
    })
}

export const getUser = (req, res) => {
    console.log("get")
    userSchema.find((error, response) => {
        if(error){
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
}

export const sendPassWord = (req,res) => {
    console.log(req.body.email)
    userSchema.findOne({email : req.body.email},(error, response) => {
        if(error){
            return next(error)
        } else {
            sendMail(response.email,response.firstName, response.password, true)
            res.status(200).json({ status : "well sent"})
        }
    })
}

export const getUserById = (req, res, next) => {
    console.log("getById")
    userSchema.findById(req.params.id , (error, data) => {
        if(error){
            return next(error)
        } else {
            res.status(200).json({
                msg : data
            })
        }
    })
}
export const deleteUser = (req,res) => {
    console.log("Delete")
        userSchema.findByIdAndDelete(req.params.id, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
            console.log("Well deleted")
        }
    })
}


export const updateUser = (req,res, next) => {
    console.log("update")
    userSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return next(error);
        }else {
            res.json(data)
            console.log('user successfully updated !')
        }
    })
}