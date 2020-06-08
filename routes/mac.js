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





// show full list of macs

router.get('/macdb/' , (req, res) => {
  db.query('SELECT * FROM macdb', (err, rows, fields) => {

  if (err) throw err;
    else

      res.render('macdb', {title: 'macs', userData: rows});

    })
    } );

    //Router to GET specific brand from db
    router.get('/brands/:id' , (req, res) => {
      db.query('SELECT * FROM macdb WHERE store_brand = ?',[req.params.id], (err, rows, fields) => {

      if (err) throw err;
        else

          res.render('macdb', {title: 'Kraft', userData: rows});

        })
        } );




module.exports = router;
