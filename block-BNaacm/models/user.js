var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    name:{type:String,required:true},
    age:{type:Number,default:18},
    email:{type:String,trim:true,match:/@/},
    password:{type:String,minlength:5},
    createdAt:{type:Date,default:new Date()}
});

var User=mongoose.model('User',userSchema);

module.exports=User;