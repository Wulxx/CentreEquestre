import mongoose from 'mongoose';
import pkg from 'mongoose';
const {Schema} = pkg;
import uniqueValidator from 'mongoose-unique-validator';
const schema = mongoose.Schema;

let lessonsSchema = new Schema({
    name : {
        type : String
    },
    assignedMonitor : {
        type : String,
    },
    debutDate : {
        type : Date
    },
    enddate : {
        type : Date
    },
    horses : {
        type : Array
    },
    students : {
        type : Array
    }
}, {
    collection : 'lessons'
})

export default mongoose.model('Lessons', lessonsSchema)