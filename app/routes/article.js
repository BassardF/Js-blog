App.ArticleRoute = Ember.Route.extend({
  model: function(params) {
	  return Ember.$.getJSON('data/articles.json').then(function(articles) {
		  for (var i = 0; i < articles.length; i++) {
			  if(articles[i].article_id == params.article_id){
				  return articles[i];
			  }
		  }
	  });
  }
});