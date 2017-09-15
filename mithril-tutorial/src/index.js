var m = require("mithril")
var UserList = require("./views/UserList")
var UserDetail = require('./views/UserDetail')
var UserForm = require('./views/UserForm')
var Layout = require("./views/Layout")


m.route(
	document.body, "/user/list", {
		"/user/list": {
			render: function(){
				return m(Layout, m(UserList))
			}
		},
		"/user/form/:id": {
			render: function(vnode){
				return m(Layout, m(UserForm, vnode.attrs))
			},
		},
		"/user/detail/:id": UserDetail,
	}
)
