var express = require('express');
var router = express.Router();
const db = require('../config/DBConnect');        

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createtable', function(req, res, next) {
  
});

module.exports = router;
