var m = require("mithril")


module.exports = {
	view: function(vnode){
		return m("main.layout", [
			m("nav.menu", [
				m("a[href='/user/list']", {oncreate: m.route.link}, "Users")
			]),
			m("section", vnode.children)
		])
	}
}