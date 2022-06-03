const mongoose = require('mongoose');

const vacancySchema = mongoose.Schema({
name: String,
salary: String,
description: String,
education: String,
experience: String,
created:{
    type: Date,
    default: Date.now
}  

});

module.exports = mongoose.model('Vacancy', vacancySchema) //!!!!!!!!