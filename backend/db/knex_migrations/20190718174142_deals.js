
exports.up = function(knex) {
  return knex.schema.createTable('deals', function(table) {
  table.increments();
  table.integer('merchant_id').unsigned();
  table.foreign('merchant_id').references('merchants.id').onDelete('CASCADE');
  table.string('name');
  table.string('description');
  table.integer('quantity_available');
  table.string('image_path');  
  table.decimal('current_price');
  table.timestamp(true, true);
  });
}

exports.down = function(knex) {
    return knex.schema.dropTable('deals');
};