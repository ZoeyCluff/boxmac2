var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'boxmac',      // Replace with your database username
  password: 'boxmacdb',      // Replace with your database password
  database: 'boxmac', // // Replace with your database Name
  multipleStatements: true
});
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
