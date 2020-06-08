// var express = require('express');
// var router = express.Router();
// var mysql = require('mysql');
// var db =require('../database');
// var bodyparser = require('body-parser');
// var totalRec = 0;
// var pageSize  = 6;
// var pageCount = 0;
// var start       = 0;
// var currentPage = 1;
//
//
//
//
//
// //Router to GET specific brand from db
// router.get('/:where/:what?' , (req, res) => {
//   var searchIn = req.query.where.toString();
//   var searchWhat = req.query.what.toString();
//   console.log(searchIn)
//   db.query('SELECT * FROM macdb WHERE searchIn = ? AND WHERE searchWhere = ?', searchIn, searchWhat, (err, rows, fields) => {
//
//   if (err) throw err;
//     else
//
//       res.render('macdb', {title: 'Kraft', userData: rows});
//
//     })
//     } );
//
//
//
//
// module.exports = router;


var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db =require('../database');
var bodyparser = require('body-parser');
var totalRec = 0;
var pageSize  = 6;
var pageCount = 0;
var start       = 0;
var currentPage = 1;





//Router to GET specific brand from db
router.get('/search/:id/:brand' , (req, res) => {
  var newString = req.query.id.toString();
  var brand = req.query.brand.toString();
  console.log(newString);
  console.log(brand);
  var testString = "SELECT * FROM macdb WHERE ? = ?"
  var inserts = [ newString, brand]
  sql = mysql.format(testString, inserts);

  console.log(sql)
  db.query( sql, (err, rows, fields) => {

  if (err) throw err;
    else

      res.render('macdb', {title: 'Kraft', userData: rows});

    })
    } );




module.exports = router;
