	// File service -- Used to read files from directories
var fs = require("fs");
var express = require('express'),	// Express initialization
app = express(),
server = require('http').createServer(app); // Create a server for us to host our files locally
var port = process.env.PORT || 5000;  // Which port are we running on? Use ENV port or 5000 if not found.

	// Declare ./todo-src as our default directory for our site files
app.use(express.static(__dirname + '/todo-src'));

	// Routing -- given no additional sub-domain, aka '/'.
 app.get('/', function(express, res) {
        fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
            res.send(text);	// Send index.html
        });
    });

	// Console log to verify the server is up and running
server.listen(port, function() {
  console.log('Node app is running on port', port);
});	

