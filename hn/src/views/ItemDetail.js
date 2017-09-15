var m = require("mithril")
var Item = require("../models/Item")


module.exports = {
	oninit: function(vnode){Item.load(vnode.attrs.id)},
	view: function(){
		return m("div.item-detail", [
			m("h2", Item.current.title),
			Item.current.text ? m("div", Item.current.text) : "",
			m("hr"),
			m("div.kids", [
				
			])
		])
	}
}
