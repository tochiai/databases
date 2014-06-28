
/* You already know how to create an http server from the previous
 * assignment; you can re-use most of that code here. */


var mysql = require('mysql');
var http = require('http');
var handler = require('./requesthandler.js').handler;
var headers = [];
var address = '127.0.0.1';
var port = 8080;

var server = http.createServer(handler).listen(port, address);
console.log('Listening at address:' + address + ' and port: ' + port);

