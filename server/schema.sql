CREATE DATABASE chatterbox_db;

USE chatterbox_db;

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id INT(10) NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(50) DEFAULT NULL,
  room_name VARCHAR(50) DEFAULT NULL,
  message_text VARCHAR(300) DEFAULT NULL,
  -- time_stamp TIMESTAMP DEFAULT NULL,
  PRIMARY KEY (message_id)
);

CREATE TABLE users (
  /* Describe your table here.*/
  user_id INT(10) NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(25) DEFAULT NULL,
  last_name VARCHAR(25) DEFAULT NULL,
  user_name VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (user_id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

