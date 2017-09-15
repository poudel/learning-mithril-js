var m = require("mithril")
var api = require("../api")

var User = {
	list: [],
	loadList: function(){
		return api.request("users").then(function(result){
			User.list = result.data
		})
	},
	current: {},
	load: function(id){
		return api.request("users/" + id).then(function(result){
			User.current = result
		})
	},
	save: function(){
		return api.request("users/" + User.current.id, User.current, "PUT")
	}
}

module.exports = User
