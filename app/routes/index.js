App.IndexRoute = Ember.Route.extend({
  model: function() {
	  var tags = [],
	  	  articles = Ember.$.getJSON('data/articles.json');
		  for (var i = 0; i < articles.length; i++) {
			  tags.concat(articles[i].tags);
		  }
		  return {
			  articles : articles,
			  tags : tags
		  }
  }
});