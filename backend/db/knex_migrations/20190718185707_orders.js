
exports.up = function(knex) {
  table.increments();
  table.integer('user_id').unsigned();
  table.foreign('user_id').references('users.id');
  table.integer('merchant_id').unsigned();
  table.foreign('merchant_id').references('merchants.id');
  table.decimal('total');
  table.string('stripe_charge_id');
  table.timestamp(true, true);
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders');
  
};
