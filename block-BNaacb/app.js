var express=require('express');
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/sample',(err)=>{
    console.log(err?err:'Connected to Database');
})

var app=express();


app.listen(4000,()=>console.log('Server listening on port 4000'));