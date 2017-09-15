var m = require("mithril")
var api = require("../api")

var Item = {
	list: [],
	current: {},
	fetchItem: function(id){
		return api.request("item/" + id + ".json")
	},
	getItems: function(ids, result_list){	
		story_ids = ids.slice(1, 30)
		for (var i = story_ids.length - 1; i >= 0; i--) {
			Item.fetchItem(story_ids[i]).then(function(item) {result_list.push(item)})
		}
	},
	load: function(id){
		Item.fetchItem(id).then(function(item){
			Item.current = item
		})
	},
	topstories: function(){
		Item.list = []

		api.request("topstories.json").then(function(story_ids){
			Item.getItems(story_ids, Item.list)
		})
	},
}

module.exports = Item;
