
exports.up = function(knex) {
  table.increments();
  table.string('business_name');
  table.string('email').unique();
  table.string('password');
  table.string('street_address');
  table.string('city');
  table.string('province');
  table.string('postal_code');
  table.biginteger('phone_number');
  table.string('type_of_merchant');
  table.timestamp(true, true);
};

exports.down = function(knex) {
    return knex.schema.dropTable('merchants');
};
