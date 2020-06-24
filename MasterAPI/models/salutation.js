var mongoose = require('mongoose');


//Salutation Schema 
var salutationSchema = new mongoose.Schema({
    Name: String,
    Code: String,
    Language: String,
    CreatedOn: { 
        type:Date, 
        default: Date.now}
  }, {timestamps: true});

//Salutation Schema
var Salutation = module.exports = mongoose.model('Salutation',salutationSchema);



//Get Salutation
module.exports.getSalutations = function(callback, limit){
    //console.log(Salutation.findById('5ee9082301229085d6805183'));

    Salutation.findById('5ee9082301229085d6805183').then(function(salutation){
        if(!salutation){ return res.sendStatus(401); }
        //console.log(salutation);
        return res.json({salutation: salutation.toAuthJSON()});
      }).catch(next);

    //Salutation.find(callback).limit(limit);
}

