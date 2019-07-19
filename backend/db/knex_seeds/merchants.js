
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {business_name: '', email: '', password: '', street_address:'', city:'', province:'', postal_code:'', phone_number:'', type_of_merchant:'', latitude:'', longitude:''},
        {business_name: '', email: '', password: '', street_address:'', city:'', province:'', postal_code:'', phone_number:'', type_of_merchant:'', latitude:'', longitude:''},
        {business_name: '', email: '', password: '', street_address:'', city:'', province:'', postal_code:'', phone_number:'', type_of_merchant:'', latitude:'', longitude:''}
      ]);
    });
};
