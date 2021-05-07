/////////////////////////////
// Dependencies
////////////////////////////
const mongoose = require('mongoose');


////////////////////////////
// Create A userSchema
////////////////////////////
const userSchema = new mongoose.Schema({
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
    token: {
        type: String,
        required: true,
    }
});

module.exports = userSchema;