//////////////////////////////////////
// Dependencies
/////////////////////////////////////
const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const categoySchema = require('../schemas/categorySchema');

////////////////////////////////////
// Create category Sub Route
////////////////////////////////////
const router = express.Router();


////////////////////////////////////
// Create a Schema Model
///////////////////////////////////
const Categories = new mongoose.model('category', categoySchema);

///////////////////////////////////
// HTTP Request Routes
///////////////////////////////////

        // create a category
router.post('/', (req, res) => {
    const newCategory = new Categories(req.body);
    newCategory.save((err) => {
        if(err){
            res.status(401).json({error: err});
        }else{
            res.status(200).json({message: 'Successfully Category Created'});
        }
    })
});
        // get category
router.get('/', (req, res) => {
    Categories.find({}, (err, categories) => {
        if(err){
            res.status(401).json({error: err});
        }else{
            res.status(200).json(categories);
        }
    })
});
        // delete category
router.delete('/:id', (req, res) => {
    Categories.deleteOne({_id: req.params.id}, (err, result) => {
        if(err){
            res.status(401).json({error: err});
        }else{
            res.status(200).json({result: 'Sucessfully Category Deleted'});
        }
    });
});


module.exports = router;