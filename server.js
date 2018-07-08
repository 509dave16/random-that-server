'use strict';

var http = require('http');
var port = process.env.PORT || 8081;
var fs = require('fs');
var Gun = require('gun');
require('gun-level');

// Import the required libraries
const levelup = require('levelup');
const encode = require('encoding-down');
const leveldown = require('leveldown');

// Create a new level instance which saves
// to the `data/` folder.
const levelDB = levelup(
	encode(
		leveldown('data'),
		{ valueEncoding: 'json' }
	)
)

// Listens on /gun.js route.
var server = http.Server();

// Serves up /index.html
server.on('request', function (req, res) {
	if(Gun.serve(req, res)){ return }
});

var gun = Gun({
	// file: 'data.json', // Saves all data to `data.json`.
	level: levelDB,
	web: server // Handles real-time requests and updates.
});

server.listen(port, function () {
	console.log('\nApp listening on port', port);
});
