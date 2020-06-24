const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

require("dotenv/config");

app.use(bodyparser.json());

//Import Routes
const postRoute = require('./routes/post');

app.use('/post', postRoute);

//Request
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Connect to database
mongoose.connect(
    'mongodb://localhost/test', //process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    ()=> console.log('connected to db')
);


//Lsitening to the server
app.listen(3000);
