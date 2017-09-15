var m = require("mithril")


module.exports = {
	api_root: "https://hacker-news.firebaseio.com/v0/",
	api: function(suffix){
		return this.api_root + suffix
	},
	request: function(api_suffix, data, method){
		var url = this.api(api_suffix)
		return m.request({
			method: method || "GET",
			url: url,
			data: data || {},
			// withCredentials: true,
		})
	},
}
