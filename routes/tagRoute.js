//////////////////////////////////////
// Dependencies
/////////////////////////////////////
const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const categoySchema = require('../schemas/tagSchema');

////////////////////////////////////
// Create category Sub Route
////////////////////////////////////
const router = express.Router();


////////////////////////////////////
// Create a Schema Model
///////////////////////////////////
const Tags = new mongoose.model('tag', tagSchema);

///////////////////////////////////
// HTTP Request Routes
///////////////////////////////////

        // create a tag
router.post('/', (req, res) => {
    const newTag = new Tags(req.body);
    newTag.save((err) => {
        if(err){
            res.status(401).json({error: err});
        }else{
            res.status(200).json({message: 'Successfully Tag Created'});
        }
    })
});
        // get tags
router.get('/', (req, res) => {
    Tags.find({}, (err, tags) => {
        if(err){
            res.status(401).json({error: err});
        }else{
            res.status(200).json(tags);
        }
    })
});
        // delete tag
router.delete('/:id', (req, res) => {
    Tags.deleteOne({_id: req.params.id}, (err, result) => {
        if(err){
            res.status(401).json({error: err});
        }else{
            res.status(200).json({result: 'Sucessfully Tag Deleted'});
        }
    });
});


module.exports = router;