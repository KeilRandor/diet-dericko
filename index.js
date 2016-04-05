var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { 
	extended: true
}));

//var food = require('./food.js')(app);

var server = app.listen( 2000, function(){
	console.log("Server is running on port 2000");
});
