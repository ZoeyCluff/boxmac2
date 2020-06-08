var mysql = require('mysql');



var con = mysql.createConnection({
host: "localhost",
user: "boxmac",
password: "boxmacdb",
database: "boxmac"
});

con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
con.query("SELECT product_name FROM macdb", function(err, result, fields) {
  if (err) throw err;
  console.log(result[1]);
});

});
