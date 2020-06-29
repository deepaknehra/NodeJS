const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
// Get All Post
const json2csv = require('json2csv');


const csvData = [
	{
		"id":"126047", 
		"customerId":"18248497",
		"FirstName":"fibre",
		"LastName":"bamboo",
		"City":"belle vue maurel-rivière du rempart",
		"email":"bamboo@test.com",
		"title":"Mr",
		"BirthDate":"1936-10-16 00:00:00.000",
		"status":"",
		"children":"",
		"gsm":"52010033",
		"points":"0",
		"tier":"consumer",  
		"Enrollment_Date":"2020-06-26 00:00:00.000",
		"is_subscribed":"0",
		"notification_token":"",
		"LastLoginTime":"",
		"LastTransactionDate":""				
	},
	{
		"id":"126046", 
		"customerId":"18253469",
		"FirstName":"Test",
		"LastName":"Test",
		"City":"bon accueil-flacq",
		"email":"rishabh6541@yopmail.com",
		"title":"Mr",
		"BirthDate":"1990-10-16 00:00:00.000",
		"status":"Single",
		"children":"1",
		"gsm":"54354344",
		"points":"300",
		"tier":"consumer",  
		"Enrollment_Date":"2020-06-26 00:00:00.000",
		"is_subscribed":"0",
		"notification_token":"",
		"LastLoginTime":"2020-06-26 11:37:57.533",
		"LastTransactionDate":"2020-06-26 12:06:50.580"				
	}
];

router.get('/', async (req,res) => {
    try{
        const csv = json2csv.parse(csvData);
        res.attachment('data.csv');
        res.set('Content-Type', 'application/octet-stream');
        res.send(Buffer.from(csv));
    }catch(err){
        res.json({message:err});
    }
});



module.exports = router;