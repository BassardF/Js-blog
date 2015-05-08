this.App = Ember.Application.create();

Ember.Handlebars.helper('content', function(item, options) {
	var awn = '';
	if(item.type === 'h1'){
		return new Handlebars.SafeString('<h1>' + item.value + '<h1>');
	} else if(item.type === 'h2'){
		return new Handlebars.SafeString('<h2>' + item.value + '<h2>');
	} else if(item.type === 'p'){
		return new Handlebars.SafeString('<p>' + item.value + '<p>');
	}
 
});