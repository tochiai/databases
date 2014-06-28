var _ = require('underscore');
var db = require(__dirname + '/db.js').db

var utils = require('./server-util.js');

// exports.getMessages = getMessages = function(req, res){
//   utils.sendResponse(res, {results: messages});
// };
exports.getMessages = function(req, res, path){
  var arr = path.split('/');
  arr = _.filter(arr, function(str){ return str !== ''; });
  var table = arr[0];
  var id = arr[1];
  if (id === undefined){
    db.select(table, '*', '', res);
  }
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
