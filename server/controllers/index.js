var models = require('../models');
var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {

    // a function which handles a get request for all messages
    get: function (req, res) {
      let queryString = 'SELECT * FROM messages';
      let result = db.connection.query(queryString, function(err, results, fields) {
        if (err) {
          console.log('Error Message Is: ', err);
        }
        // console.log('results are : ', results);
        // console.log(fields);
      });
      // console.log('Result Message Is: ', result);

    },


    // a function which handles posting a message to the database
    post: function (req, res) {

      let data = req.body;
      console.log(req);
      let userName = data.username;
      // To Do - replace user_name in messages to user_id in users. 
      // let username = data.username;
      let roomName = data.roomname;
      let messageText = data.messagetext; 
      console.log('The username is: ', userName)
      console.log('The roomName is: ', roomName)
      console.log('The messageText is: ', messageText)
      // console.log('**************************************');

      // insert into query string
      
      let queryString = `INSERT INTO messages (user_name, room_name, message_text) VALUES ('${userName}', '${roomName}', '${messageText}')`;

      let result = db.connection.query(queryString, function(err) {
        if (err) {
          // console.log('Error Message Is: ', err);
        }
      });
      // console.log('Result Message Is: ', result);
    } 
  },

  users: {

    // a function which handles a get request for all users
    get: function (req, res) {


    },

    // a function which handles posting a user to the database
    post: function (req, res) {
      // get data from req

      // console.log(req.body);
      let data = req.body;
      let username = data.username;
      // console.log('The username is: ', username)
      // console.log('**************************************');


      // insert into query string
      
      let queryString = `INSERT INTO users (user_name) VALUES ('${username}')`;

      let result = db.connection.query(queryString, function(err) {
        if (err) {
          // console.log('Error Message Is: ', err);
        }
      });
      // console.log('Result Message Is: ', result);
    }
  }
};

