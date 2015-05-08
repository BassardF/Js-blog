App.ArticleController = Ember.Controller.extend({
	
	
	
	test: function() {
		console.log(this);
	 	return true;
	}.property('model')
	
});