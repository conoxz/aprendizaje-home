const mongoose = require('mongoose')
const {Schema} = mongoose;

const user = new Schema({
    user: String,
    pass: String,
    name: String,
    school: String,
    description: String,
    type: Number,
    group: Number   
})

module.exports = mongoose.model('user',user)