var m = require("mithril")
var dateFormat = require("dateformat")
var Item = require("../models/Item")


module.exports = {
	oninit: Item.topstories,
	view: function(){
		var renderItem = function(item){
			var comments = item.kids ? item.kids.length : 0
			return m("div.item", [
				m("div", m("a", {href: "/detail/" + item.id, oncreate: m.route.link}, item.title)),
				m("div.item-footer", [
					m("span.ml-10", item.score + " votes"),
					m("span.ml-10", comments + " comments"),
					m("span.ml-10", "by " + item.by),
					m("span.ml-10", "on " + dateFormat(new Date(item.time * 1000)))
				])
			])
		}
		return m(".item-list", Item.list.map(renderItem))
	}
}
