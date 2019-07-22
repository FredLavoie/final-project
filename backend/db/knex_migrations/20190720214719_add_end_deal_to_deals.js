
exports.up = function(knex) {
  return knex.schema.table('deals', function(table){
    table.datetime('end_date');  
  });
}

exports.down = function(knex) {
  return knex.schema.table('deals', function(table) {
    table.dropColumn('end_date');  
  });
}
