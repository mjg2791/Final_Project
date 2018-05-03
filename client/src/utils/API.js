import axios from "axios";

export default {
	// Create new user route
	newUser: (username, password) => {
		const data = {
			username, 
			password
		};
		
		return axios.post("/api/newUser", data);
	},

	logIn: (username, password) => {
		return axios.get(`/api/logIn/${username}/${password}`);
	},

	saveList(data) {
		return axios.post("/api/saveList", data);
	},

	getSavedLists: (id) => {
		return axios.get(`/api/getSavedLists/${id}`);
	}
} 