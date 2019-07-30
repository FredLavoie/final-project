
exports.up = function(knex) {
	return knex.schema.createTable('orders', function(table) {
  table.increments();
  table.integer('user_id').unsigned();
  table.foreign('user_id').references('users.id').onDelete('CASCADE');
  table.integer('merchant_id').unsigned();
  table.foreign('merchant_id').references('merchants.id').onDelete('CASCADE');
  table.text('order_number').unique();
  table.decimal('total');
  table.string('stripe_charge_id');
  table.timestamps(true, true);
	});
}
exports.down = function(knex) {
    return knex.schema.dropTable('orders');
};
