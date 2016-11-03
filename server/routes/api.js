var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('pirates route');
  knex('pirates').then((pirates)=> {
    res.json(pirates)
  })
});

router.get('/:id', (req, res, next) => {
  console.log('pirates/:id route', req.params.id);
  if (Number.parseInt(req.params.id)){
    knex('pirates').where('pirates.id', req.params.id).first()
    .then((pirate) => {
      res.json(pirate);
    })
  }

});

router.post('/', (req, res, next) => {
  let newPirate = {
    name: req.body.name,
    poison: req.body.poison,
    image: req.body.image,
    accessory: req.body.accessory
  }
  knex('pirates').insert(newPirate,'*')
    .then((newPirate) => {
    res.json(newPirate);
  })
});

module.exports = router;
