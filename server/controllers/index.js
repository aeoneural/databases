var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('request body', req);
      // model ..(function(input) { res.write(input)} )
      models.messages.get(function(data) { 
        res.send(data); 
      
      });
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      console.log('REQ.BODY', req.body);
      // var body = '';
      // var tempcall = function(input) { 
        
      // };
      // req.on('data', function (data) {
      //   body += data;
      //   console.log('body of message', body.split('&'));
        
      // });
      // req.on('end', function (err) {
      //   console.log('body --> ', body)
      //   // tempcall(body);
      //   if (err) { throw err; }
      // });
      models.messages.post(function() { console.log("DONE ______ > "); }, req.body.username, req.body.roomname, req.body.roomname);
    

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  }
};

