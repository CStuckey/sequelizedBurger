-- Create the database taco_db and specify it for use.
CREATE DATABASE taco_db;
USE taco_db;

-- Create the table plans.
CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT,
	taco_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);