const db = require("../models");

module.exports = {
	// Creates new users
	newUser: function(req, res) {
		db.Users.create({
			username: req.body.username,
			password: req.body.password
		})
		.then(data => {
			res.json(data);
		})
	},

	// Retrieves uses based on username and password
	logIn: function(req, res) {
		db.Users.findOne({
			attributes: ["user_id", "username"],
			where: {
				username: req.params.username,
				password: req.params.password 
			}
		})
		.then(data => {
			res.json(data);
		})
	},

	// Save lists 
	saveList: function(req, res) {
		db.Saved_List.create({
			title: req.body.title,
			link: req.body.link,
			company: req.body.company,
			user_id: req.body.userId
		})
		.then(data => {
			res.json(data);
		})
	},

	// Retrieves saved lists based on user ID
	getSavedLists: function(req, res) {
		db.Saved_List.findAll({
			attributes: ["list_id"],
			where: {
				user_id: req.params.id
			}
		})
		.then(data => 
			res.json(data));
	}
}