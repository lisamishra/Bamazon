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

insert into products(product_name, department_name, price, stock_qty)
	values('Elder Wand', 'Wands', 1000.00, 2);
insert into products(product_name, department_name, price, stock_qty)
	values('Cloak', 'Attire', 100.00, 100);
insert into products(product_name, department_name, price, stock_qty)
	values('Butter Beer', 'Food & Drink', 5.00, 100);
insert into products(product_name, department_name, price, stock_qty)
	values('Flying Car', 'Transportation', 500.00, 2);
insert into products(product_name, department_name, price, stock_qty)
	values('Owl', 'Pets', 50.00, 50);
insert into products(product_name, department_name, price, stock_qty)
	values('Rat', 'Pets', 15.00, 100);
insert into products(product_name, department_name, price, stock_qty)
	values('Nimbus 2017', 'Transportation', 200.00, 10);
insert into products(product_name, department_name, price, stock_qty)
	values('Bertie Botts Jelly Beans', 'Food & Drink', 5.00, 100);
insert into products(product_name, department_name, price, stock_qty)
	values('Time Turner', 'Gadgets', 1000.00, 1);
insert into products(product_name, department_name, price, stock_qty)
	values('Chocolate Frog', 'Food&Drink', 2.00, 100);








