App.IndexRoute = Ember.Route.extend({
  model: function() {
	  return Ember.$.getJSON('data/articles.json').then(function(articles) {
		  var tags = [];
		  for (var i = 0; i < articles.length; i++) {
			  for (var j = 0; j < articles[i].tags.length; j++) {
				  tags.push({
					  tag : articles[i].tags[j],
					  selected : false
				  })
			  }
		  }
		  return {
			  articles : articles,
			  tags : tags
		  };
	  });
  }
});