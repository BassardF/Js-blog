App.ArticleView = Ember.View.extend({
    didInsertElement : function(){
		SyntaxHighlighter.all();
    }
});