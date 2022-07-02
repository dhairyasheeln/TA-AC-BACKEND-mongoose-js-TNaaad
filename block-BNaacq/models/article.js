var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var articleSchema= new Schema({
    title:{type:String},
    description:{type:String},
    tags:{type:String},
    likes:{type:String},
    author:{type:Schema.Types.ObjectId},
    comments:{type:String}
},{timestamps:true});

var Article=mongoose.model('Article',articleSchema);

module.exports=Article;