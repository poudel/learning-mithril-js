var m = require("mithril")
var User = require("../models/User")

module.exports = {
	// When mithril loads this component, the function passed
	// to oninit gets called. As defined in loadList, the
	// User.list array gets populated by virtue of that, which
	// in turn can be used inside the view function
	oninit: User.loadList,
	view: function(){
		var renderUser = function(user){
			var userd = m("a", {href: "/user/form/" + user.id, oncreate: m.route.link}, `${user.firstName} ${user.lastName}`)
			return m("div.user-list-item", userd)	
		}
		return m(".user-list", User.list.map(renderUser))
	}
}
