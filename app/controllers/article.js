App.ArticleController = Ember.Controller.extend({
	
	init: function () {
		this._super();
		SyntaxHighlighter.defaults.toolbar = false;
	  }
	
});