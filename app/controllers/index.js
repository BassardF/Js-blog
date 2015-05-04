App.IndexController = Ember.Controller.extend({
  actions: {
    query: function() {
      var query = this.get('search');
      this.transitionToRoute('search', { query: query });
    }
  }
});