import mongoose from 'mongoose';
import pkg from 'mongoose';
const {Schema} = pkg;
const schema = mongoose.Schema;

let lessonsSchema = new Schema({
    name : {
        type : String
    },
    assignedMonitor : {
        type : String,
    },
    debutDate : {
        type : String
    },
    endDate : {
        type : String
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
