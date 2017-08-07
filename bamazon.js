var mysql = require("mysql");
//connect to mysql database for bamazon
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazondb"
});
//function to connect to mysql database
connection.connect(function(err) {
	console.log(err);
    createProduct();
});

function createProduct(){
	var query = connection.query(
		'insert into products set?',
		{
			product_name: 'shake weight',
			department_name: 'fitness', 
			price: 19.99, 
			stock_qty: 999
		},
		function(err, res) {
			console.log(err);
			console.log(res.affectedRows + ' product inserted');
		}
	)
}
