const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Salutation = require('./models/salutation');

//Connect to mongoose
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;

//Check connection with MongoDB
db.once('open',function(){
    console.log('Connecting to mongo db....');
});

//Check DB Error
db.on('error', function(err){
    console.log(err);
});



//Get Hello World
app.get('/', function(req, res){
    res.send('Hello World')
});

//Get salutation
app.get('/api/salutation', function(req, res){
    console.log('call function');
    Salutation.getSalutation(function(err, salutations){
        if(err){
            throw err;
        }
        //console.log(res);
        res.json(salutations);
    });
});

app.listen(3000);
console.log('Running on port 3000....');





