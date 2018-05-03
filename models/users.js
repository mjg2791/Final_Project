const mongoose = require("mongoose");
const sequelizeInstance = require("../config/connection.js");

const Users = new Schema({
	user_id : { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true }
});

const Users = mongoose.model("Users", ListSchema);

module.exports = Users;
