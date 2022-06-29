var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    name:string,
    email:{type:String,lowercase:true},
    age:{type:String,default:0},
    favorites:[String],
    marks:[Number]
},{timestamps:true});

var addressSchema=new Schema({
    village:String,
    city:String,
    state:String,
    pin:Number,
    user:Schema.Types.ObjectId
})

