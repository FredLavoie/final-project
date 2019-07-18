
exports.up = function(knex) {
  table.increments();
  table.integer('deal_id').unsigned();
  table.foreign('deal_id').references('deals.id');
  table.integer('order_id').unsigned();
  table.foreign('order_id').references('orders.id');
  table.decimal('deal_price_purchased')
  table.decimal('total_price_purchased');
  table.integer('quantity_purchased');
  table.timestamp(true, true);
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders_deals');  
};
