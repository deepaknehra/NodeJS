const express = require('express');
const Post = require('../models/Post');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

router.post('/', async (req,res) => {
    const npost = new Post({
        title:req.body.title,
        description:req.body.description
    });
    try{
        const savePost = await npost.save();
        res.json(savePost);
    }catch(err){
        res.json({message:err});
    }
});

router.get('/:postid', async (req,res) => {
    try{
        console.log(req.params.postid);
        const posts = await Post.findById(req.params.postid);
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//Delete
router.delete('/:postid', async (req,res) => {
    try{
        console.log(req.params.postid);
        const removeposts = await Post.remove({_id:req.params.postid});
        res.json(removeposts);
    }catch(err){
        res.json({message:err});
    }
});


//Update
router.patch('/:postid', async (req,res) => {
    try{
        console.log(req.params.postid);
        const updatePost = await Post.updateOne(
            {_id:req.params.postid},
            {$set: {title:req.body.title}}
            );
        res.json(updatePost);
    }catch(err){
        res.json({message:err});
    }
});


module.exports = router;