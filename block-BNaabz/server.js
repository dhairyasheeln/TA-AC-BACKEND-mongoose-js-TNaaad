var express=require('express');
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/sample',(err)=>{
    console.log(err?err:"Connected to Databasee");
})
var app=express();

app.listen(5000,()=>console.log('Server listening on port 5000'));