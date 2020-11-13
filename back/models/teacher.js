import mongoose from 'mongoose';
import pkg from 'mongoose';
const {Schema} = pkg;
import uniqueValidator from 'mongoose-unique-validator';
const schema = mongoose.Schema;

let teacherSchema = new Schema({
    name : {
        type : String,

    },
    lastName : {
        type : String,
    },
    number : {
        type : String,
    }
    ,
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,

    },courses : {
        type : Array
    }
}, {
    collection : 'teachers'
})


teacherSchema.plugin(uniqueValidator, {message: 'Email already in use.'});
export default mongoose.model('Teacher', teacherSchema)