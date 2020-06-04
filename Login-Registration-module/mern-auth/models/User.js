const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creation of the schema

const UserSchema = new Schema({
	name : {
		type : String,
		required : true
},
	email : {
		type : String,
		required : true
},
	password : {
		type : String,
		required : true
},
	phone : {
		type : String,
		required : true
},
	aadhar : {
		type : String,
		required : true
},
	address : {
		type : String,
		required : true
},
	farmerid : {
		type : String,
		required : true
},
	date : {
		type : Date,
		default : Date.now
}
});

module.exports = User = mongoose.model("users", UserSchema);
