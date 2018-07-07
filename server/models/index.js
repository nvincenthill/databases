var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {

    // a function which produces all the messages
    get: function (cb) {
      let queryString = 'SELECT messages.message_id, messages.room_name, messages.message_text, messages.time_stamp, users.user_name FROM messages INNER JOIN users ON messages.user_id = users.user_id';
      db.connection.query(queryString, function(err, data, fields) {
        cb(err, data);
      });
    }, 

    // a function which can be used to insert a message into the database
    post: function (data, cb) {
      // console.log(data);
      let userName = data.userName;
      let userCreationQueryString = `INSERT INTO users (user_name) VALUES ("${userName}")`;
      db.connection.query(userCreationQueryString, function(err, userCreationData, fields) {
        let userQueryString = `SELECT user_id FROM users WHERE user_name = "${userName}"`;

        // call db to get userId
        db.connection.query(userQueryString, function(err, userIdData, fields) {
          let userId = userIdData[0].user_id;
          let queryString = `INSERT INTO messages (user_id, room_name, message_text) VALUES ("${userId}", "${data.roomName}", "${data.messageText}")`;
          
          // call db to insert a message
          db.connection.query(queryString, function(err, data, fields) {
            cb(err, data);
          });
        });
      });
    } 
  },

  users: {
    // a function which produces all the users
      get: function () {
        let queryString = 'SELECT * FROM users';
        let data = db.connection.query(queryString, function(err, data, fields) {
        if (err) {
          console.log(err);
        }
        console.log("The user results are: ", data);
      });
    },

    // a function which can be used to insert a user into the database
    post: function (data, cb) {
      console.log('posting to users');
      let callback = cb;
      let queryString = `INSERT INTO users (user_name) VALUES ("${data}")`;
      db.connection.query(queryString, function(err, data, fields) {
        console.log(err)
        callback(err, data);
      });
    }
  }
};

