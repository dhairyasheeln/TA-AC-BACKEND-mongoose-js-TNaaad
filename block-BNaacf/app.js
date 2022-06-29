var express=require('express');
var mongoose=require('mongoose');

//Connect to database
mongoose.connect('mongodb://localhost/user',(err)=>{
    console.log(err?err:'Connected true');
});

//Mount expres on app
var app=express();

app.get('/',(req,res)=>{
    res.send('Welcome!');
})

app.listen(4000,()=>console.log('Server listening on port 4000'));