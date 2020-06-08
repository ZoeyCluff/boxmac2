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
router.get('/test:id?/:brand?' , (req, res) => {
  var column = req.query.id.toString();
  var brand = req.query.brand.toString();
  db.query('SELECT * FROM macdb WHERE store_brand = ?', id, brand, (err, rows, fields) => {

  if (err) throw err;
    else

      res.render('macdb', {title: 'Kraft', userData: rows});

    })
    } );




module.exports = router;
