// Include file service -- used to read/send files to route requests
var fs = require("fs"); 

// Include express -- Routing
var express = require('express'),
app = express(),
server = require('http').createServer(app);

// Initialize hosting port to ENV provided port, or 5000 if not provided.
var port = process.env.PORT || 5000;

// Declare ./todo-src as our main working directory for client-side files.
app.use(express.static(__dirname + '/todo-src'));

	// Default route via express -- '/' indicates no sub-domain.
 app.get('/', function(express, res) {
        fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
            res.send(text);
        });
    });
	
	// Console display for validation that our server is running locally.
server.listen(port, function() {
  console.log('Node app is running on port', port);
});	

