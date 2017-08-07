var mysql = require("mysql");
var inquirer = require("inquirer");

//Connect to mysql database for bamazon
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazondb"
});
//function to connect to mysql database
connection.connect(function(err) {
	if (err) throw err;
	else runEntry();
});

function runEntry(){
	var query = "SELECT * from products";
	connection.query(query, function(err, res){
		if (err) {
			throw err;
		}
		else {
			for (var i = 0; i < res.length; i++) {
				console.log("ID#:" + res[i].item_id + " | Item: " + res[i].product_name + " | Price: $" + res[i].price + " | Item Quantity: " + res[i].stock_qty);
				console.log("------------------------------------------")
			}
				}
			//Place order
			placeOrder();
	});
}

//Item and Quantity Variables

var item = "";
var quant = "";

function placeOrder(){
//Message Prompts
	inquirer.prompt([
		{name: "itemID",
		type: "input", 
		message: "Enter the ID of the product you would like to buy: "
		}, 
		{name: "itemAmount", 
		type: "input", 
		message: "Enter how many units of the product you would like to buy: "
		}
		])
	.then(function(answer){
		item = answer.itemID;
		quant = answer.itemAmount;
	//Check Availability
		connection.query("SELECT * from products WHERE ?",
			{item_id: item}, function(err, res) {
				if (err){
					throw err;
				}
			//Out of Item Msg
			for (var i = 0; i < res.length; i++) {
				if (res[i].stock_qty < answer.itemAmount){
					console.log("We apologize. That is out of stock.");
					console.log("---------------------------------------------------");
					placeOrder();
				}
			//Item Available
				else {
					console.log(
						"ID#: " + res[i].item_id + " " + 
						"Item: " + res[i].product_name + " " + 
						"Price: " + res[i].price + " " +
						"Quantity Purchased: " + quant + " " + 
						"Total Price: $" + res[i].price*quant) + " "
			//Inventory Query
						connection.query(
							"UPDATE products SET? WHERE ?", 
							[
								{
									stock_qty: res[i].stock_qty - quant
								},
								{
									item_id: res[i].item_id
								}
							],
							function(err) {
								if(err)
									throw err;
								console.log('Thanks for shopping with us!');
								console.log("---------------------------------------------------");

							}	
							);
				}
			}	
			});
	});
}// End of function


//Scott in-class
//function createProduct(){
//	var query = connection.query(
//		'insert into products set?',
//		{
//			product_name: '',
//			department_name: 'fitness', 
//			price: 19.99, 
//			stock_qty: 999
//		},
//		{
//			product_name: 
//		}
//		function(err, res) {
//			console.log(err);
//			console.log(res.affectedRows + ' product inserted');
//		}
//	)
//}
//