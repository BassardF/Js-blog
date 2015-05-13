App.IndexController = Ember.Controller.extend({
	
	actions: {
	    toggleTag: function(tag) {
			Ember.set(tag, 'selected', !tag.selected);
			
			var articles = this.get('model.articles');
			var tags = this.get('model.tags');
			var count = 0, tagCount = 0;
			
			for (var ind = 0; ind < tags.length; ind++) {
				tagCount += tags[ind].selected ? 1 : 0;
			}
			
			for (var i = 0; i < articles.length; i++) {
				if(tagCount === 0){
					Ember.set(articles[i], 'visible', true);
				} else {
					Ember.set(articles[i], 'visible', false);		
					for (var j = 0; j < articles[i].tags.length; j++) {
						for (var k = 0; k <tags.length; k++) {
							if(tags[k].tag == articles[i].tags[j] && tags[k].selected && count < 20){
								Ember.set(articles[i], 'visible', true);
								count ++;
							}
						}
					}
				}
			}
			
	    }
	  }
});