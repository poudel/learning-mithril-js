var m = require("mithril")
var Layout = require("./views/Layout")
var TopItems = require("./views/TopItems")
var ItemDetail = require("./views/ItemDetail")


m.route(document.body, "/top", {
	"/top": {
		render: function(){
			return m(Layout, m(TopItems))
		}
	},
	'/detail/:id': {
		render: function(vnode){
			return m(Layout, m(ItemDetail, vnode.attrs))
		}
	}
})
