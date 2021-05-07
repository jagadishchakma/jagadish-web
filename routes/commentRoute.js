////////////////////////////////
// Dependencies
///////////////////////////////
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const commentSchema = require('../schemas/commentSchema');



//////////////////////////////
// Create a schema model
//////////////////////////////
const Comments = new mongoose.model('comment', commentSchema);




/////////////////////////////
// Create a route
////////////////////////////
const router = express.Router();



///////////////////////////
// Http request 
//////////////////////////

         // Comment post
router.post('/', (req, res) => {
    const {comment, id, token} = req.body;
    const privateKey = process.env.JWT_SECRET;
    jwt.verify(token, privateKey, (error, decode) => {
        if(decode){
            const {displayName, email, photoURL} = decode;
            const newComment = new Comments({displayName, email, photoURL, comment, postId: id});
            newComment.save({}, (err, result) => {
                if(err){
                    res.status(401).json({error: 'OOPS! Authentication Failed'});
                }else{
                    res.status(200).json({message: 'Successfully Commented'});
                }
            })
           
        }else{
            res.status(401).json({error: 'OOPS! Authentication Failed'})
        }
    });
   
});


        // Get post
router.get('/:id', (req, res) => {
    const {id} = req.params;
    // const postId = id.toString();
    // console.log(postId);
    Comments.find({postId: id}, (err, result) => {
        if(err){
            res.status(401).json({error: 'OOPS! Authentication Failed'});
        }else{
            res.status(200).json(result);
        }
    }).sort({$natural:-1});

})        

module.exports = router;