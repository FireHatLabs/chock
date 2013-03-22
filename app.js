var express = require('express'); 
var app = express(); 
var config = require('./config.json');

app.set('view engine', 'jade');
app.set('view options', {layout: true});
app.set('views', __dirname + '/views');

app.use(express.static(__dirname+'/public'));

app.get('/?', function(req, res){ 
	res.render('parked', {
		site: req.host,
		name: config.owner.name,
        url: config.owner.url,		
        copyright_year: config.owner.copyright_year,
        copyright_name: config.owner.copyright_name,
		title: config.site.title,
		header: config.site.header,
		message: config.site.message
	});
}); 

var port = 8000; 
app.listen(port); 