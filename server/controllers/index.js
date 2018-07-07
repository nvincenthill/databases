var models = require('../models');
var db = require('../db');

module.exports = {
  messages: {

    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(function(err, data) {
        if (err) {
          console.log('Failed to get messages from model', err);
        } else {
          console.log(data);
          res.send(data);
        }
      });
    },


    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log(req);
      let queryData = {
        userName: req.body.username,
        roomName: req.body.roomname,
        messageText: req.body.text
      };

      models.messages.post(queryData, function(err, data) {
        if (err) {
          console.log('Failed to post messages to model', err);
        } else {
          res.send(data);
        }
      });
    } 
  },

  users: {

    // a function which handles a get request for all users
    get: function (req, res) {
      models.users.get(function(err, data) {
        if (err) {
          console.log('Failed to get users from model', err);
        } else {
          console.log(data);
          res.send(data);
        }
      });
    },

    // a function which handles posting a user to the database
    post: function (req, res) {
      let username = req.body.username;
      models.users.post(username, function(err, data) {
        if (err) {
          console.log('Failed to get from model', err);
        } else {
          res.send(data);
        }
      });
    }
  }
};
