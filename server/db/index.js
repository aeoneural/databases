var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection(
  { 
    host: 'localhost',
    user: 'student', 
    password: 'student', 
    database: 'chat'
  }

);

connection.connect();

query = connection.query('SELECT * FROM messages', function(error, data, fields) {
     
  if (error) { throw error; }
  // console.log("The result", data);
  // console.log("The result", fields);
  

});

module.exports = connection;
