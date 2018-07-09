'use strict';

var http = require('http');
var port = process.env.PORT || 8080;
var fs = require('fs');
var Gun = require('gun');
var server = http.Server();

server.on('request', function (req, res) {
	if(Gun.serve(req, res)){ return }
});

var gun = Gun({
	localStorage: false,
	web: server
});

server.listen(port, function () {
	console.log('\nApp listening on port', port);
});
