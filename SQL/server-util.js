exports.headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

exports.sendResponse = function(response, data, statusCode){
  statusCode = statusCode || 200;
  response.writeHead(statusCode, exports.headers);
  response.end(JSON.stringify(data));
};

exports.collectData = function(request, cb){
  var data = "";

  request.on("data", function(chunk){
    data += chunk;
  });
  request.on("end", function(){
    console.log(data + " this is the data we get");
    cb(null, JSON.parse(data));
    //make the call to the db.

  });
};

