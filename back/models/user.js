import mongoose from 'mongoose';
import pkg from 'mongoose';
const {Schema} = pkg;
import uniqueValidator from 'mongoose-unique-validator';
const schema = mongoose.Schema;

let userSchema = new Schema({
    name : {
        type : String,

    },
    email : {
        type : String,
        unique : true

    },
    password : {
        type : String,

    }
}, {
    collection : 'users'
})


userSchema.plugin(uniqueValidator, {message: 'Email already in use.'});
export default mongoose.model('User', userSchema)