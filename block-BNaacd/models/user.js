var mongoose=require('mongoose');

//Connect to Database using mongoose

var Schema=mongoose.Schema;
var userSchema=new Schema({
    name:String,
    email:{type:String,lowercase:true,default:0},
    age:Number
});
