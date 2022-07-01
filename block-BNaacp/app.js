var express=require('express');
var mongoose=require('mongoose');
var User=require('./models/user');

//Connect to mondoDB database
mongoose.connect('mongodb://localhost/MongooseAssTwo',(err)=>{
    console.log(err?err:'Connect to Database');
});

//Mount express on app variable
var app=express();

//Middlewares
app.use(express.json());

//Routes
app.post('/users',(req,res)=>{
    var data=req.body;
    User.create(req.body,(err,user)=>{
        res.json(user);
    })
});

app.get('/users',(req,res)=>{
    User.find({},(err,users)=>{
        res.json({"users":users});
    })
});

app.get('/users/:id',(req,res)=>{
    var id=req.params.id;
    User.findById(id,(err,userById)=>{
        res.json(userById);
    })
});

app.get('/user',(req,res)=>{
    var id=req.params.id;
    User.findOne({_id:"62becdb206de4a547eed32c1"},(err,userById)=>{
        res.json(userById);
    })
});

app.put('/users/:id',(req,res)=>{
    var id=req.params.id;
    User.findByIdAndUpdate(id,req.body,{new:true},(err,updatedUser)=>{
        res.json(updatedUser);
    })
});

app.delete('/users/:id',(req,res)=>{
    var id=req.params.id;
    User.findByIdAndDelete(id,(err,deletedUser)=>{
        if (err) return next(err);
        res.json(deletedUser);
    })
});


//Error Handler
// app.use('/',(err,req,res,next)=>{
//     throw err;
// })


//Listen on server
app.listen(4000,()=>console.log('Server listening on port 4000'));