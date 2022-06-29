var express=require('express');
var mongoose=require('mongoose');

//Connect to Database using mongoose

mongoose.connect('mongodb://localhost/user',(err)=>{
    console.log(err?err:'Connection true');
});

//Mount the Express App
var app=express();


app.listen(4000,()=>console.log('Serevr listening on port 4000'));