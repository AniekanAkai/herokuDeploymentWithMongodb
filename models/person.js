var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PersonSchema= new Schema({
	name:String,
	email:String,
	createdAt:{type:Date, default:Date.now}
});
mongoose.model("person", PersonSchema);