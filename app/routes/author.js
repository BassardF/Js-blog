App.AuthorRoute = Ember.Route.extend({
  model: function(params) {
	  return Ember.$.getJSON('data/authors.json').then(function(authors) {
		  for (var i = 0; i < authors.length; i++) {
			  if(authors[i].author_id == params.author_id){
				  return authors[i];
			  }
		  }
	  });
  }
});