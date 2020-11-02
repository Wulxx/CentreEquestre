import mongoose from 'mongoose';
import pkg from 'mongoose';
const {Schema} = pkg;
import uniqueValidator from 'mongoose-unique-validator';
const schema = mongoose.Schema;

let horseSchema = new Schema({
    name : {
        type : String,
        unique : true
    },
    assignedMonitor : {
        type : String,
    },
    courses : {
        type : Array
    }
}, {
    collection : 'horses'
})


horseSchema.plugin(uniqueValidator, {message: 'Ce nom est déjà pris'});
export default mongoose.model('Horse', horseSchema)