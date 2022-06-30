var express=require('express');
var mongoose=require('mongoose');

//Connect DB
mongoose.connect('mongodb://localhost/user',(err)=>{
    console.log(err?err:'Connected to database');
});

//Mount app
var app=express();

app.get('/',(req,res)=>{
    res.send('Welcome!');
});

app.listen(4000,()=>console.log('Serevr listening at port 4000'));