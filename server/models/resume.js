const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema({
surname: String,
name: String,
patronymic: String,
phone: String,
email: String,
wantPost: String,
fileResume: String,
created:{
    type: Date,
    default: Date.now
}  

});

module.exports = mongoose.model('Resume', resumeSchema) //!!!!!!!!