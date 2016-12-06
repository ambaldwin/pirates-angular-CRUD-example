var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
   knex('pirates').then((pirates) => {
       res.json(pirates)
   })
});

router.get('/:id', (req, res, next) => {
   if (Number.parseInt(req.params.id)) {
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
   knex('pirates').insert(newPirate, '*')
       .then((newPirate) => {
           res.json(newPirate);
       })
});

router.put('/:id', function(req, res, next) {
   knex('pirates').where('id', req.body.id).first()
       .update(req.body)
       .then(function(pirate) {
           res.json('pirate updated')
       })
})

router.delete('/:id', (req, res, next) => {
   knex('pirates')
       .where('pirates.id', req.params.id).delete()
       .then(() => {
           res.json({
               'response': 'post deleted'
           })
       })
})


module.exports = router;
