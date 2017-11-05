var db = require('../db');

var usernames = {};
var usernameCounter = 0;
var rooms = {};
var roomCounter = 0;
var messageCounter = 0;

module.exports = {
  messages: {
    
    // get: function (callback) { read data from db, callback(output) }, // a function which produces all the messages
    get: function (callback) {
      var result = {
        results: []
      };

      query = db.query('select users.user_name, messages.content, rooms.room_name from users, messages, rooms where users.id = messages.user_id AND messages.room_id = rooms.id', function(error, data, fields) {
        if (error) { throw error; }
        
        result.results.push(data);
        callback(result);

      });
      
    }, // a function which can be used to insert a message into the database
    post: function (callback, userName, roomName, message) {
      
      if (!usernames[userName]) {
        query = db.query(
          
          ` insert into users (id, user_name) values ('${usernameCounter}', '${userName}'); `, 
          function(error, data, fields) {
            if (error) { throw error; }
            usernames[userName] = usernameCounter;
            usernameCounter++;
          });    
      } else {
        userName = usernames[userName];
      }    

      if (!rooms[roomName]) {
        query = db.query(
        `insert into rooms (id, room_name) values ('${roomCounter}', '${roomName}');`, 
        function(error, data, fields) {
          if (error) { throw error; }
          rooms[roomName] = roomCounter;
          roomCounter++;
        });
      } else {
        roomName = rooms[roomName];
      }

      query = db.query(
        `insert into messages (id, content, user_id, room_id) values ('${messageCounter}', ${message}', '${usernames[userName]}' , '${rooms[roomName]}');`
        , 
        function(error, data, fields) {
          if (error) { throw error; } else { 
            callback();
          }
          

        });
      
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};



