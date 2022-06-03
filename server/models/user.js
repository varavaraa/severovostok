const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
username: {type: String, unique:true, required:true},
password: {type: String, required:true},
roles: [{type: String, ref:'role'}]
});

module.exports = mongoose.model('User', userSchema) //!!!!!!!!