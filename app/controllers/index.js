App.IndexController = Ember.Controller.extend({
	
	actions: {
	    toggleTag: function(tag) {
			console.log(tag);
	    	tag.selected = !tag.selected;
	    }
	  }
});