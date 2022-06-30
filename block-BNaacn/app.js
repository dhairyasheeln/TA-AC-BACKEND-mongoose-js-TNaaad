var express=require('express');
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/assOne',(err)=>{
    console.log(err?err:'Connected to Database');
});

var app=express();

app.get('/',(req,res)=>{
    res.send('Welcome!');
})

app.listen(4000,()=>console.log('Server listening on port 4000'));