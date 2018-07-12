'use strict';

var http = require('http');
var port = 8082;
var fs = require('fs');
var Gun = require('gun');
var server = http.Server();

server.on('request', function (req, res) {
	if(Gun.serve(req, res)){ return }
});

var gun = Gun({
	web: server
});

server.listen(port, function () {
	console.log('\nApp listening on port', port);
});
