//////////////////////////////
// Dependencies
/////////////////////////////
const mongoose = require('mongoose');




/////////////////////////////
// Create Post Schema
/////////////////////////////
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

module.exports =  postSchema;