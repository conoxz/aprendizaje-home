const mongoose = require('mongoose')
const {Schema} = mongoose;

const student = new Schema({
    name: String,
    born: Date,
    school: String,
    teacher: String,
    grade: Number,
    pass: String
})

module.exports = mongoose.model('student',student)