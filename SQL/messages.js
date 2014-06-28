var utils = require('./server-util.js');
var idCounter = 1;
var messages = [];

exports.getMessages = getMessages = function(req, res){
  utils.sendResponse(res, {results: messages});
};

exports.postMessage = postMessage = function(req, res){
  console.log('POST REQUEST RECEIVED')
  utils.collectData(req, function(err, data){
    if (err){
      throw err;
    }
    var message = data;
    message.objectId = idCounter;
    idCounter += 1;
    messages.unshift(message);
    utils.sendResponse(res, {message : message}, 201);
  });
};

exports.send404 = send404 = function(req, res){
  utils.sendResponse(res, 'Not Found', 404);
};
