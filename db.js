const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://simon:0BOWIiQ3NTWLz1oz@cluster0.bbyg6.mongodb.net/CaseRooms';  //这里是database, 不是collections fix MongoDB

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose