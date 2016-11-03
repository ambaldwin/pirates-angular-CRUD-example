
exports.seed = function(knex) {
  return knex('pirates').del()
    .then(() => {
      return knex('pirates').insert([{
        name: 'Jack Sparrow',
        poison: 'Rum',
        accessory: 'revolver',
        image: 'http://vignette3.wikia.nocookie.net/pirates/images/8/8a/Jack_Sparrow.jpg/revision/latest/scale-to-width-down/230?cb=20060705091420'
      },
      {
        name: 'Blackbeard',
        poison: 'Whiskey',
        accessory: 'black beard',
        image: 'http://vignette1.wikia.nocookie.net/pirates/images/e/e3/Ineedthosechalices.jpg/revision/latest?cb=20111019055841'
      },
      {
        name: 'Anne Bonny',
        poison: 'Wine',
        accessory: 'sword',
        image: 'http://vignette1.wikia.nocookie.net/pirateslove/images/9/9a/Annebonny2.jpg/revision/latest?cb=20120916235508'
      }]);
    });
};
