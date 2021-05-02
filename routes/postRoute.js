////////////////////////////////
// Dependencies
///////////////////////////////
const express = require('express');
const mongoose =  require('mongoose');
const postSchema = require('../schemas/postSchema');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


///////////////////////////////
// Create Router
//////////////////////////////
const router = express.Router();



//////////////////////////////
// Create a Model
/////////////////////////////
const Posts = new mongoose.model('post', postSchema);



///////////////////////////////
// Create HTTP Requests
//////////////////////////////

        // post inserted
router.post('/', (req, res) => {
    const newPost = new Posts(req.body);
    newPost.save((err, result) => {
        if(err){
            res.status(401).json({error: 'Error Occured Post Submit'});
        }else{
            res.status(200).json({result: 'Sucessfully Post Inserted'});
            
        }
    });
});

            // get posts
router.get('/', (req, res) => {
    Posts.find({}, (err, result) => {
        if(err){
            res.status(401).json({error: 'Error Occured Getting Post'});
        }else{
            res.status(200).json(result);
            
        }
    })
});

            // get posts limit
router.get('/limit', (req, res) => {
    Posts.find({}, (err, result) => {
        if(err){
            res.status(401).json({error: 'Error Occured Getting Post'});
        }else{
            res.status(200).json(result);
            
        }
    }).limit(3);
})

                    // get posts single
router.get('/:id', (req, res) => {
    const {id} = req.params;
    Posts.find({_id: id}, (err, result) => {
        if(err){
            res.status(401).json({error: 'Error Occured Getting Post'});
        }else{
            res.status(200).json(result);
            
        }
    });
})

module.exports = router;