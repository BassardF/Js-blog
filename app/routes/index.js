App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('data/articles.json');
  }
});