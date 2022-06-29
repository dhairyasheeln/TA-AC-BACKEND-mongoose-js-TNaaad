var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var articlesSchema=new Schema({
    articleName:String,
    category:String
});