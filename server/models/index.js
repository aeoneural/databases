var db = require('../db');

module.exports = {
  messages: {
    
    // get: function (callback) { read data from db, callback(output) }, // a function which produces all the messages
    get: function (callback) {
      var result = {
        results: []
      };

      query = db.query('select users.user_name, messages.content, rooms.room_name from users, messages, rooms where users.id = messages.user_id AND messages.room_id = rooms.id', function(error, data, fields) {
        if (error) { throw error; }
        
        
        console.log("The result in model", data);
        callback(data);

      });
      
    }, // a function which can be used to insert a message into the database
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


