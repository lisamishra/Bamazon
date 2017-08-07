drop database if exists bamazondb;

create database bamazondb; 

use bamazondb;

create table products(
	item_id INT NOT NULL auto_increment,
	product_name varchar(100) NULL,
	department_name varchar (100) NULL,
	price decimal (10,2) NULL,
	stock_qty int NULL,
	primary key (item_id)
);
