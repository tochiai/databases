var url = require('url');
var messages = require('./messages');
var db = require(__dirname + '/db.js').db;

var messageRouter = {
  'POST' : messages.postMessage,
  'GET' : messages.getMessages,
  'OPTIONS': messages.sendOptionsResponse
}

exports.handler = function(request, response) {
  db.init();

  var path = url.parse(request.url).pathname;
  var method = request.method;
  //Only handle GET
  if (method === 'GET') {
    messageRouter[method](request, response, path);
  } else if (method === 'POST'){
    messageRouter[method](request, response, path);
  } else {
    messages.send404(request, response);
  }
};

