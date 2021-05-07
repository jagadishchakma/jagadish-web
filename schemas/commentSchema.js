/////////////////////////////////
// Dependencies
////////////////////////////////
const mongoose = require('mongoose');


////////////////////////////////
// Create a Schema
///////////////////////////////
const commentSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    photoURL: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true
    }
});

module.exports = commentSchema;