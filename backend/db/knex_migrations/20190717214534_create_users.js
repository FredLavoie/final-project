
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
  table.increments();
  table.string('first_name');
  table.string('last_name');
  table.string('email').unique();
  table.string('password');
  table.biginteger('phone_number');
  table.boolean('is_admin');
  table.timestamps(true, true);
  });
}

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};