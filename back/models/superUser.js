import mongoose from 'mongoose';
import pkg from 'mongoose';
const {Schema} = pkg;
import uniqueValidator from 'mongoose-unique-validator';
const schema = mongoose.Schema;

let superUserSchema = new Schema({
    username : {
        type : String,
        unique : true
    },
    password : {
        type : String,
    }
}, {
    collection : 'superAdmin'
})


superUserSchema.plugin(uniqueValidator, {message: 'Ce nom est déjà pris'});
export default mongoose.model('superAdmin', superUserSchema)