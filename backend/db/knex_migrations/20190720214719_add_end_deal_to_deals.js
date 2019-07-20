
exports.up = function(knex) {
  knex.schema.table('deals', function(table){
    table.datetime('end_date');  
  });
}

exports.down = function(knex) {
  knex.schema.table('deals', function(table) {
    table.dropColumn('end_date');  
  });
}
