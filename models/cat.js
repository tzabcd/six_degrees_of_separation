var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var catSchemas = new Schema({
   age : {type:Number,min:0,max:100},
   name: {type: String,unique: true,index: true},
   friends: {type: Array ,required: true,}
 });
var Cat =  mongoose.model('Cat',catSchemas);
