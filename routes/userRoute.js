////////////////////////////
// Dependencies
///////////////////////////
const express = require('express');
const userSchema = require('../schemas/userSchema');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


///////////////////////////
// Create a schema model
///////////////////////////
const Users = new mongoose.model('user', userSchema);



///////////////////////////
// Create a router
///////////////////////////
const router = express.Router();

router.post('/signup', (req, res) => {
    const privateKey = process.env.JWT_SECRET;
    
    // check
    Users.find({email: req.body.email}, (err, result) => {
        if(result.length !== 1){
            jwt.sign(req.body, privateKey, (err, token) => {
                if(err){
                    res.status(400).json({error: 'OOPS! error'});
                }else{
                    // data insert
                    const newUser = new Users({...req.body, token});
                    newUser.save({}, (err, result) => {
                        if(err){
                            res.status(400).json({error: 'OOPS! error'});
                        }else{
                            res.status(200).json({...req.body, token});
                        }
                    })
                }
            });
        }else{
            jwt.sign(req.body, privateKey, (err, token) => {
                if(err){
                    res.status(400).json({error: 'OOPS! error'});
                }else{
                    res.status(200).json({...req.body, token});
                }
            });
        }
    })

});

module.exports = router;