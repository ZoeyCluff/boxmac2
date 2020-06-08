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
router.get('/origins/:id' , (req, res) => {
  db.query('SELECT * FROM macdb WHERE origin_country = ?',[req.params.id], (err, rows, fields) => {

  if (err) throw err;
    else

      res.render('origins', {title: 'macs', userData: rows});

    })
    } );
module.exports = router;
