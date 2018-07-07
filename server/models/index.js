var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {

    // a function which produces all the messages
    get: function () {
      // let queryString = 'SELECT * FROM messages';
      // let test = db.connection.query(queryString, function(err) {
      //   if (err) {
      //     console.log(err);
      //   }
      // });
      // console.log(test);
    }, 

    // a function which can be used to insert a message into the database
    post: function () {
      // console.log('this is a post');

    } 
  },

  users: {
    // a function which produces all the users
    get: function () {
      // let queryString = 'SELECT * FROM users';
      // let test = db.connection.query(queryString, function(err) {
      //   if (err) {
      //     console.log(err);
      //   }
      // });
      // console.log(test);

    },

    // a function which can be used to insert a user into the database
    post: function () {


    }
  }
};

