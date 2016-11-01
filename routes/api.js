var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('pirates').then((pirates)=> {
    res.json(pirates)
    console.log(pirates);
  })
});

module.exports = router;
