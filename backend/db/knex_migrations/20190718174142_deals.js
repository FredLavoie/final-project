
exports.up = function(knex) {
  table.increments();
  table.integer('merchant_id').unsigned();
  table.foreign('merchant_id').references('merchants.id');
  table.string('name');
  table.string('description');
  table.integer('quantity_available');
  table.string('image_path').alter();  
  table.decimal('current_price');
  table.timestamp(true, true);
};

exports.down = function(knex) {
    return knex.schema.dropTable('deals');
};
