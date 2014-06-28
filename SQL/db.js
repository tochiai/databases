var headers = require('./server-util.js').headers;
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we cre

/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/
var db = {};
var mysql      = require('mysql');
var connection = mysql.createConnection({
  user     : 'root',
  password : '',
  database : 'chat'
});
db.init = function(){
  connection.connect();
};
db.end = function(){
  connection.end();
};

db.select = function(tname, cols, where, res, callback){
  var query = "SELECT " + cols + " FROM " + tname;
  if(where){
    query += "WHERE " + where;
  }
  var rows = connection.query(query, function(err, rows){
    console.log(rows);
    res.writeHead(200, headers);
    res.end(JSON.stringify({results: rows}));

    db.end();
  });
};
exports.db = db;
