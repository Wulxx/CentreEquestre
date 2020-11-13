import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userSchema from '../models/cavalier.js'
import lessonsSchema from '../models/lessons.js'

export const signAsCav = (req,res ) => {
    console.log("signak")

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
        if (user === undefined || user === null) {
            return res.json({
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
        res.cookie("SESSIONID", jwtToken, {httpOnly:true, secure:true});
        res.status(200).json({
            id_token: jwtToken,
            expiresIn: 36000,
            msg: 'OK',
            status: 'User',
            id: getUser._id
        });
    }).catch(err => {
        console.log(err)
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
}


export const getUser = (req, res) => {
    console.log("get")
    userSchema.find((error, response) => {
        if(error){
            return res.status(401).json({
            message: "Authentication failed"
        });
        } else {
            res.status(200).json(response)
        }
    })
}

export const sendPassWord = (req,res) => {
    console.log(req.body.email)
    userSchema.findOne({email : req.body.email},(error, response) => {
        if(error){
            return res.status(401).json({
            message: "Authentication failed"
        });
        } else {
            sendMail(response.email,response.name, response.password, true)
            res.status(200).json({ status : "well sent"})
        }
    })
}

export const getUserById = (req, res, next) => {
    console.log("getById")
    userSchema.findById(req.params.id , (error, data) => {
        if(error){
            return res.status(401).json({
            message: "Authentication failed"
        });
        } else {
            res.status(200).json(data)
        }
    })
}
export const deleteUser = (req,res) => {
    console.log("Delete")
        userSchema.findByIdAndDelete(req.params.id, (error, data) => {
        if(error){
            return res.status(401).json({
            message: "Authentication failed"
        });
        }else{
            res.json(data)
            console.log("Well deleted")
        }
    })
}

export const registerToCourse = (req,res, next) => {
    console.log("addCourse")
    console.log(req.body)
    userSchema.findByIdAndUpdate({ _id: req.body.user }, {
        $push: { courses: req.body.lessonsId}
    }, (error, data) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
            message: "Authentication failed"
        });
        }else {
            res.json(data)
            console.log('user successfully updated !')
        }
    })
}

export const suppressFromCourse = (req,res, next) => {
    console.log("addCourse")
    console.log(req.body)
    userSchema.findByIdAndUpdate({ _id: req.body.user }, {
        $pull: { courses: req.body.lessonsId}
    }, (error, data) => {
        if (error) {
            console.log(error)
            return res.status(401).json({
            message: "Authentication failed"
        });
        }else {
            res.json(data)
            console.log('user successfully updated !')
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
            return res.status(401).json({
            message: "Authentication failed"
        });;
        }else {
            res.json(data)
            console.log('user successfully updated !')
        }
    })
}