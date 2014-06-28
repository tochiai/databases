var mysql = require('mysql');

var dbConnection = mysql.createConnection({
      user: "root",
      password: "",
      database: "chat"
    });
    dbConnection.connect();

    var tablenames = ["Rooms", "Messages", "Users"]; // TODO: fill this out

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    for(var i = 0; i < tablenames.length; i++){
      dbConnection.query("DELETE FROM " + tablenames[i], done);
    }
  });
