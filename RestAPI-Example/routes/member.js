const express = require('express');
const Member = require('../models/Member');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/enrollment', async (req,res) => {
    const member = new Member({
        Salutation:req.body.Salutation,
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Gender:req.body.Gender,
        BirthDate:req.body.BirthDate,
        Email:req.body.Email,
        Password:req.body.Password,
        Mobile:req.body.Mobile,
        AlternateMobile:req.body.AlternateMobile,
        Country:req.body.Country,
        State:req.body.State,
        City:req.body.City,
        ZipCode:req.body.ZipCode,
        Address:req.body.Address,
        Skills:req.body.Skills,
        EducationDocuments:req.body.EducationDocuments
    });
    try{
        const saveMember = await member.save();
        res.json(saveMember);
    }catch(err){
        res.json({message:err});
    }
});

//Login
router.post('/login', (req,res) => {

    try{
        //console.log(req.body.Email);
        //console.log(req.body.Password);

        const member = Member.find().limit(1);
        console.log(member.FirstName);
        if(member){
            jwt.sign({member},'secreatkey', {expiresIn: '30s'}, (err,token)=>{
                res.json({token});
            });

        }else{
            res.sendStatus(403);
        }

    }catch(err){
        res.json({message:err});
    }

   
    
   
});


router.get('/memberinfo', verifyToken, (req,res) => {
    try{

        jwt.verify(req.token, 'secreatkey', (err, authdata)=>{
            if(err){
                res.sendStatus(403);
            }
            else
            {
                const memberinfo =  Member.findById(req.body._id);
                res.json(memberinfo);
            }
        });      
    }catch(err){
        res.json({message:err});
    }
});

function verifyToken(req,res,next){
    //get auth header value
    const bearerHeader = req.headers['authorization'];
    
    console.log(bearerHeader);
    //check if bearer is undefined
    if(typeof bearerHeader !== 'undefined')
    {
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        //Set the Token
        req.token = bearerToken;
        //next middleware
        next();
    }else{
        res.sendStatus(403);
    }
}

module.exports = router;