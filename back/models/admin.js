import mongoose from 'mongoose';
import pkg from 'mongoose';
const {Schema} = pkg;
import uniqueValidator from 'mongoose-unique-validator';
const schema = mongoose.Schema;

let adminSchema = new Schema({
    name : {
        type : String
    },
    mail : {
        type : String,
        unique : true
    },
    password : {
        type : String,
    }
}, {
    collection : 'admin'
})


adminSchema.plugin(uniqueValidator, {message: 'Cette adresse mail est déjà prise'});
export default mongoose.model('Admin', adminSchema)