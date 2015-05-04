App.IndexRoute = Ember.Route.extend({
  model: function() {
	  var fetched =  Ember.$.getJSON('data/articles.json').then(function(articles) {
		  var tags = [];
		  for (var i = 0; i < articles.length; i++) {
			  tags = tags.concat(articles[i].tags);
		  }
		  return {
			  articles : articles,
			  tags : tags
		  };
	  });
	  return fetched;
  }
});