const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
value: {type: String, unique:true},
});

module.exports = mongoose.model('Role', roleSchema) //!!!!!!!!