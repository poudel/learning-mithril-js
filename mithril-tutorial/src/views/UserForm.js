var m = require("mithril")
var User = require("../models/User")

module.exports = {
	oninit: function(vnode){User.load(vnode.attrs.id)},
	view: function(){
		return m(
			"form",
			{onsubmit: function(e){e.preventDefault(); User.save()}},
			[
				m("label.label", "First Name"),
				m("input.input[type=text][placeholder=First Name]", {
					oninput: m.withAttr("value", function(value){
						User.current.firstName = value
					}),
					value: User.current.firstName
				}),
				m("label.label", "Last Name"),
				m("input.input[placeholder=Last name]", {
					oninput: m.withAttr("value", function(value){
						User.current.lastName = value
					}),
					value: User.current.lastName
				}),
				m("button.button[type=submit]", "Save")
			]
		)
	}
}
