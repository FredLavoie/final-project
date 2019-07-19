
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Karine', last_name: 'Séguin', email: 'karines@live.ca', password: '1234', phone_number: 6134873203, is_admin: true},
        {first_name: 'Fred', last_name: 'Lavoie', email: 'flavoie@live.ca', password: '1234', phone_number: 6134871234, is_admin: false},
        {first_name: 'Saad', last_name: 'Hafa', email: 'saad@live.ca', password: '1234', phone_number: 5144873203, is_admin: false},
        {first_name: 'Yu', last_name: 'Liang', email: 'yu@live.ca', password: '1234', phone_number: 5144873233, is_admin: false},
        {first_name: 'Rob', last_name: 'Hang', email: 'rob@live.ca', password: '1234', phone_number: 5144113233, is_admin: true},
      ]);
    });
};
