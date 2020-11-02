import mongoose from 'mongoose';
import pkg from 'mongoose';
const {Schema} = pkg;
import uniqueValidator from 'mongoose-unique-validator';
const schema = mongoose.Schema;

let userSchema = new Schema({
    firstName : {
        type : String,
    },
    lastName : {
        type : String,
    },
    number : {
        type : String,
    },
    licenseNumber : {
        type : String
        },
    email : {
        type : String,
        unique : true
    },
    courses : {
        type : Array
    },
    status : {
        type: String,
    },
    password : {
        type : String,

    }
}, {
    collection : 'users'
})


userSchema.plugin(uniqueValidator, {message: 'Email already in use.'});
export default mongoose.model('User', userSchema)