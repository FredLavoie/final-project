const faker = require('faker');
let path = 'http://localhost:8080/images/';
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('deals').del(),
    knex.raw('ALTER SEQUENCE deals_id_seq RESTART WITH 1'),
    knex('deals').then(function () {
      // Inserts seed entries
      return knex('deals').insert([
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Cronut', description: 'A croissant-doughnut pastry.' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}cronuts.jpg`, current_price: 2.00, end_date: "2019-08-01T21:30:00.000Z"},
        {merchant_id: 5, name: 'Pasta Salad', description: 'Contains mustard' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}pasta_salad.jpg`, current_price: 3.00, end_date: "2019-08-01T20:00:00.000Z"},
        {merchant_id: 12, name: 'Hot Dogs', description: 'Contains mustard' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}hotdogs.jpg`, current_price: 3.00, end_date: "2019-08-01T20:00:00.000Z"},
        {merchant_id: 3, name: 'Cronut', description: 'Contains mustard' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}nutella_cronut.jpg`, current_price: 2.00, end_date: "2019-08-01T20:00:00.000Z"},
        {merchant_id: 4, name: 'Veg Wrap', description: 'Contains mustard' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}vegetable_wrap.jpg`, current_price: 3.00, end_date: "2019-08-01T20:00:00.000Z"},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Croissant', description: '' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}Croissants.jpg`, current_price: 1.00, end_date: "2019-08-01T21:30:00.000Z"},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Muffin', description: 'Apple muffins' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}muffins.jpg`, current_price: 1.25, end_date: "2019-08-01T20:00:00.000Z"},
        {merchant_id: 7, name: 'Hot Dogs', description: 'Gluten free bread!' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}hotdogs.jpg`, current_price: 4.50, end_date: new Date(2019, 7, 2, 12, 00)},
        {merchant_id: 6, name: 'Salad', description: 'Green Salad' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}green_salad.jpg`, current_price: 5.00, end_date: "2019-08-01T20:00:00.000Z"},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Cookie', description: 'Short bread cookies' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}shortbread_cookies.jpg`, current_price: 0.75, end_date: "2019-08-01T21:30:00.000Z"},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Salad', description: 'Contains onions' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}green_salad.jpg`, current_price: 2.50, end_date: new Date(2019, 7, 2, 17, 00)},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Veggie Wrap', description: 'With avocado and humus.' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}avocado_humus_wrap.jpeg`, current_price: 3.25, end_date: new Date(2019, 7, 2, 12, 00)},
        {merchant_id: 7, name: 'Burger', description: 'Beef 100% AAA' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}hamburgers.jpg`, current_price: 5.25, end_date: new Date(2019, 7, 2, 12, 00)},
        {merchant_id: 7, name: 'Veggie Burger', description: 'Vegetarian burger.' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}veggie_burger.jpg`, current_price: 6.00, end_date: "2019-08-01T21:00:00.000Z"},
        {merchant_id: 9, name: 'Bread', description: '' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}baguette.jpg`, current_price: 0.75, end_date: new Date(2019, 7, 2, 17, 00)},
        {merchant_id: 11, name: 'Chicken Wrap', description: '' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}chicken_wrap.jpg`, current_price: 3.75, end_date: "2019-08-01T21:30:00.000Z"},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Veggie Wrap', description: 'Gluten free' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}vegetable_wrap.jpg`, current_price: 3.00, end_date: new Date(2019, 7, 2, 17, 00)},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Croissant', description: 'Our croissant are butter loved!' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}Croissants.jpg`, current_price: 1.50, end_date: new Date(2019, 7, 2, 17, 00)},
        {merchant_id: 9, name: 'Bread', description: '' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}artisan_bread.jpg`, current_price: 0.75, end_date: new Date(2019, 7, 2, 17, 00)},
        {merchant_id: 6, name: 'Burger', description: 'Pork Burger' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}pork_burger.jpg`, current_price: 3.25, end_date: "2019-08-01T21:30:00.000Z"},
        {merchant_id: 7, name: 'Chicken Burger', description: 'Chicken Burger with mayo.' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}chicken_burger.jpg`, current_price: 3.25, end_date: "2019-08-01T20:00:00.000Z"},
        {merchant_id: 12, name: 'Croissant', description: '' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}croissant.jpeg`, current_price: 1.00, end_date: "2019-08-01T20:00:00.000Z"},
        {merchant_id: 8, name: 'Cronut', description: 'Dairy Free' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}nutella_cronut.jpg`, current_price: 1.75, end_date: "2019-08-01T20:00:00.000Z"},
        {merchant_id: 2, name: 'Salad', description: 'Chickpea Salad' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}chickpea_salad.jpg`, current_price: 5.00, end_date: "2019-08-02T17:00:00.000Z"},
        {merchant_id: 9, name: 'Bread', description: 'Multi Grain Bread' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}multi-grain-bread.jpg`, current_price: 1.00, end_date: "2019-08-01T20:00:00.000Z"},
        {merchant_id: 8, name: 'Muffin', description: 'Carrot muffins' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}muffin.jpeg`, current_price: 1.00, end_date: "2019-08-02T17:00:00.000Z"},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Donut', description: 'Assorted donut, comes with 4.' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}donut.jpeg`, current_price: 2.50, end_date: "2019-08-02T17:00:00.000Z"},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Cronut', description: 'With strawberry flavored icing.' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}pink_cronut.jpeg`, current_price: 3.00, end_date: "2019-08-02T17:00:00.000Z"},
        {merchant_id: 11, name: 'Mac Salad', description: '' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}macaroni_salad.jpg`, current_price: 3.00, end_date: "2019-08-01T20:00:00.000Z"},
        {merchant_id: 14, name: 'Kale Wrap', description: 'Vegetarian' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}kale_egg_wrap.jpg`, current_price: 4.25, end_date: "2019-08-02T17:00:00.000Z"},
        {merchant_id: 1, name: 'Avocado Wrap', description: 'Vegetarian and gluten-free' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}avocado_humus_wrap.jpeg`, current_price: 4.25, end_date: "2019-08-02T17:00:00.000Z"},
        {merchant_id: 13, name: 'Chocolate cookie', description: 'Price for 2 cookies' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}chocolatechip_cookies.jpeg`, current_price: 1.25, end_date: "2019-08-02T17:00:00.000Z"},
        {merchant_id: 15, name: 'Penne', description: 'Arrabiata sauce and vegetables.' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}penne.jpeg`, current_price: 7.00, end_date: "2019-08-02T17:00:00.000Z"},
        {merchant_id: 15, name: 'Lamb Osso Bocco', description: 'Lamb osso bocco plate with tomato sauce and potatoes.' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}lamb_bocco.jpeg`, current_price: 10.00, end_date: "2019-08-02T17:00:00.000Z"},
        {merchant_id: 10, name: 'Flaco Tacos', description: 'Lime, zucchini and almond bechamel sauce. Vegan.' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}flaco_taco.jpeg`, current_price: 5.50, end_date: "2019-08-02T17:00:00.000Z"},
        {merchant_id: 10, name: 'Tacos', description: 'Chicken Tacos, cheddar and bell pepper.' , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}tacos.jpeg`, current_price: 6.00, end_date: "2019-08-02T17:00:00.000Z"},
      ]);
    })
  ]);
};
