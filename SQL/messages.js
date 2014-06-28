var utils = require('./server-util.js');

exports.getMessages = getMessages = function(req, res){
  utils.sendResponse(res, {results: messages});
};

exports.postMessage = postMessage = function(req, res){
  utils.collectData(req, function(err, data){
    if (err){
      throw err;
    }
    //writeToDb(data);
    utils.sendResponse(res, {message : message}, 201);
  });
};

exports.send404 = send404 = function(req, res){
  utils.sendResponse(res, 'Not Found', 404);
};
