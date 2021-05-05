/////////////////////////////////////
// Dependencies
////////////////////////////////////
const mongoose = require('mongoose');


///////////////////////////////////
// Create Category Schema
///////////////////////////////////
const tagSchema = mongoose.Schema({
    tag: {
        type: String,
        required: true
    }
});



module.exports = tagSchema;