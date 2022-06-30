var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var addressSchema=new Schema({
    village:{types:String},
    city:{type:String,required:true},
    state:{types:String,required:true},
    pin:{types:Number},
    user:{type:Schema.Types.ObjectId}
},{timestamps:true});

var Address=mongoose.model('Address',addressSchema);
module.exports=Address;