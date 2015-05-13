this.App = Ember.Application.create();

Ember.Handlebars.helper('content', function(item, options) {
	var awn = '';
	if(item.type === 'h1'){
		return new Handlebars.SafeString('<h1>' + item.value + '<h1>');
	} else if(item.type === 'h2'){
		return new Handlebars.SafeString('<h2>' + item.value + '<h2>');
	} else if(item.type === 'p'){
		return new Handlebars.SafeString('<p>' + item.value + '<p>');
	} else if(item.type === 'img'){
		return new Handlebars.SafeString('<img src="assets/img/' + item.value + '">');
	} else if(item.type === 'quote'){
		return new Handlebars.SafeString('<div class="quote"><div class="inner"> "' + item.value + '"</div><div class="author"> -- ' + item.author + '</div></div>');
	} else if(item.type === 'code'){
		return new Handlebars.SafeString('<pre class="brush: ' + item.syntax + '">' + item.value +'</pre>');
	} else if(item.type === 'list'){
		var ul = '<ul>#</ul>',
			li = '<li>#</li>',
			lis = '';
			
		for (var i = 0; i < item.value.length; i++) {
			lis += li.replace('#', item.value[i]);
		}
		
		lis = ul.replace('#', lis);
		return new Handlebars.SafeString('<div>' + item.line + lis + '<div>');
	}
 
});