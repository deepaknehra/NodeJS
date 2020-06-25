const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    Salutation:{
        type: String,
        required: true
    },
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    Gender:{
        type: String,
        required: true
    },
    BirthDate:{
        type: Date,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    Mobile:{
        type: Number,
        required: true
    },
    AlternateMobile:Number,
    Country:String,
    State:String,
    City:String,
    ZipCode:Number,
    Address:String,
    Skills:[
        {
            Skill: String,
        }
     ],
    EducationDocuments:[
       {
           DocumentName: String,
           DocumentFile: String,
       }
    ],
    EnrollmentDate:{
        type: Date,
        default: Date.now
    },
    Enable:{
        type: Boolean,
        default: true
    },
});

module.exports = mongoose.model('Member', MemberSchema);