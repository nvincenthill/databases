CREATE DATABASE chatterbox_db;

USE chatterbox_db;

CREATE TABLE users (
  /* Describe your table here.*/
  user_id INT(10) NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(25) DEFAULT NULL,
  last_name VARCHAR(25) DEFAULT NULL,
  user_name VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id INT(10) NOT NULL AUTO_INCREMENT,
  user_id INT(10) NOT NULL,
  room_name VARCHAR(50) DEFAULT NULL,
  message_text VARCHAR(300) DEFAULT NULL,
  time_stamp TIMESTAMP,
  PRIMARY KEY (message_id),
  FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE
);

/* Create other tables and define schemas for them here! */

      -- initialize db
      -- mysql -u student < server/schema.sql

      -- enter interface
      -- mysql -u student -p

      -- drop db
      -- DROP DATABASE chatterbox_db;

      -- clear table
      -- TRUNCATE TABLE users;

      -- insert sample DATABASE
      -- INSERT INTO messages(user_name, room_name, message_text)
      -- VALUES ('Cal ', 'Nicks Room', 'This will work');


