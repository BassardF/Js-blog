App.ArticleController = Ember.Controller.extend({
	
	init: function () {
		this._super();
		SyntaxHighlighter.all();
		SyntaxHighlighter.defaults.toolbar = false;
	  }
	
});