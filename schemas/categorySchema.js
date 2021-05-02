/////////////////////////////////////
// Dependencies
////////////////////////////////////
const mongoose = require('mongoose');


///////////////////////////////////
// Create Category Schema
///////////////////////////////////
const categoySchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    }
});



module.exports = categoySchema;