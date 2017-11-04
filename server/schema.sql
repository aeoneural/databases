CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT(11), 
  name VARCHAR(20),  
  PRIMARY KEY(id)
);
CREATE TABLE rooms (
  id INT(11), 
  name VARCHAR(11),  
  PRIMARY KEY(id)  
);

CREATE TABLE messages (
  id INT(11), 
  content varchar(100),
  user_id INT(11), 
  room_id INT(11), 
  PRIMARY KEY(id), 
  FOREIGN KEY(user_id) REFERENCES users(id), 
  FOREIGN KEY(room_id) REFERENCES rooms(id) 
);

CREATE TABLE user_rooms (
  id INT(11),
  user_id INT(11),
  room_id INT(11),
  PRIMARY KEY(id), 
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(room_id) REFERENCES rooms(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u student < schema.sql
 *  to create the database and the tables.*/

