var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    name:{type:String},
    email:{types:String,lowercase:true},
    age:{type:Number,default:0},
    password:{type:String,minlength:5},
    createdAt:{types:Date,default:new Date()},
    favourites:{types:[String]}
},{timestamps:true});

var User=mongoose.model('User',userSchema);
module.exports=User;