var m = require("mithril")


module.exports = {
	view: function(vnode){
		return m("main.layout", [
			m("nav.menu", [
				m("a[href='/top']", {oncreate: m.route.link}, "Macker News")
			]),
			m("section", vnode.children)
		])
	}
}