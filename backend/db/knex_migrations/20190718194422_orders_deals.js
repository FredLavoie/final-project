
exports.up = function(knex) {
  return knex.schema.createTable('orders_deals', function(table) { 
  table.increments();
  table.integer('deal_id').unsigned();
  table.foreign('deal_id').references('deals.id').onDelete('CASCADE');
  table.integer('order_id').unsigned();
  table.foreign('order_id').references('orders.id').onDelete('CASCADE');
  table.decimal('deal_price_purchased');
  table.decimal('total_price_purchased');
  table.integer('quantity_purchased');
  table.timestamps(true, true);
  });
}

exports.down = function(knex) {
    return knex.schema.dropTable('orders_deals');
};