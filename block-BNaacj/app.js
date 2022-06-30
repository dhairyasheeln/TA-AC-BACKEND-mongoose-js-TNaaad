var express=require('express');
var mongoose=require('mongoose');

//Connect to MongoDB

mongoose.connect('mongodb://localhost/user',(err)=>{
    console.log(err?err:'Connected to Database');
});

//Mount the express
var app=express();

app.get('/',(req,res)=>{
    res.send('Welcome!');
})

app.listen(4000,()=>console.log('Server listening on port 4000'));