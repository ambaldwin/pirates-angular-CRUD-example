exports.up = function(knex) {
  return knex.schema.createTable('pirates', (table) => {
    table.increments();
    table.string('name')
    table.string('poison')
    table.string('accessory')
    table.string('image')
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pirates');
};
