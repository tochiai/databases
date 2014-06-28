var mysql = require('mysql');
//start a dbConnection on persistence server when the server starts
var dbConnection = mysql.createConnection(
  {
    user: "root",
    password: "",
    database: "chat"
  });
dbConnection.connect();
console.log('connected');
dbConnection.end();//DONT DO THIS!!!!!!!!!!!
//DONT!

//{text: '', name: '', roomname: ''}
//the JSON is already parsed
var getUserID = function(data, callback){
  var user = data.user;
  dbConnection.query('SELECT Id from Users where name = ?', [user], function(err, result){
    if(err){
      throw err;
    };
    dbConnection.query('SELECT Id from Users where name = ?')
    callback(result);
  });
};
