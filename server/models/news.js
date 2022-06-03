const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    dateOfPublication: String,
    name: String,
    content: String,
    image: String,
    created:{
        type: Date,
        default: Date.now
    }  
    
    });
    
    module.exports = mongoose.model('News', newsSchema) //!!!!!!!!