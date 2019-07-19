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
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Cronut', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}cronuts.jpg`, current_price: 2.00},
        {merchant_id: 5, name: 'Pasta Salad', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}pasta_salad.jpg`, current_price: 3.00},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Croissant', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}Croissants.jpg`, current_price: 1.00},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Muffin', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}muffins.jpg`, current_price: 1.25},
        {merchant_id: 7, name: 'Hot Dogs', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}hotdogs.jpg`, current_price: 4.50},
        {merchant_id: 6, name: 'Salad', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}green_salad.jpg`, current_price: 5.00},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Cookie', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}shortbread_cookies.jp`, current_price: 0.75},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Salad', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}green_salad.jpg`, current_price: 2.50},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Veggie Wrap', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}avocado_humus_wrap.jpeg`, current_price: 3.25},
        {merchant_id: 7, name: 'Burger', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}hamburgers.jpg`, current_price: 5.25},
        {merchant_id: 7, name: 'Veggie Burger', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}veggie_burger.jpg`, current_price: 6.00},
        {merchant_id: 9, name: 'Bread', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}bagette.jpg`, current_price: 3.75},
        {merchant_id: 11, name: 'Chicken Wrap', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}chicken_wrap.jpg`, current_price: 3.75},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Veggie Wrap', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}vegetable_wrap.jpg`, current_price: 3.00},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Croissant', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}Croissants.jpg`, current_price: 1.50},
        {merchant_id: 9, name: 'Bread', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}artisan_bread.jpg`, current_price: 0.75},
        {merchant_id: 6, name: 'Burger', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}pork_burger.jpg`, current_price: 3.25},
        {merchant_id: 7, name: 'Chicken Burger', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}chicken_burger.jpg`, current_price: 3.25},
        {merchant_id: 12, name: 'Croissant', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}croissant.jpeg`, current_price: 1.00},
        {merchant_id: 8, name: 'Cronut', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}nutella_cronut.jpg`, current_price: 1.75},
        {merchant_id: 8, name: 'Salad', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}chickpea_salad.jpg`, current_price: 5.00},
        {merchant_id: 9, name: 'Bread', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}multi-grain-bread.jpg`, current_price: 1.00},
        {merchant_id: 8, name: 'Muffin', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}muffin.jpeg`, current_price: 1.00},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Donut', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}donut.jpeg`, current_price: 1.00},
        {merchant_id: faker.random.number({'min': 1,'max': 4}), name: 'Cronut', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}pink_cronut.jpeg`, current_price: 3.00},
        {merchant_id: 11, name: 'Mac Salad', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}macaroni_salad.jpg`, current_price: 3.00},
        {merchant_id: 14, name: 'Kale Wrap', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}kale_egg_wrap.jpg`, current_price: 1.25},
        {merchant_id: 14, name: 'Avocado Wrap', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}avocado_humus_wrap.jpeg`, current_price: 1.25},
        {merchant_id: 13, name: 'Chocolate cookie', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}chocolatechip_cookies.jpeg`, current_price: 1.25},
        {merchant_id: 15, name: 'Penne', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}penne.jpeg`, current_price: 8.00},
        {merchant_id: 15, name: 'Lamb Osso Bocco', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}lamb_bocco.jpeg`, current_price: 11.00},
        {merchant_id: 10, name: 'Flaco Tacos', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}flaco_taco.jpeg`, current_price: 5.50},
        {merchant_id: 10, name: 'Tacos', description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: `${path}tacos.jpeg`, current_price: 6.00},
      ]);
    })
  ]);
};
