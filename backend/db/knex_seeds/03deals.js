const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('deals').del(),
    knex.raw('ALTER SEQUENCE deals_id_seq RESTART WITH 1'),
    knex('deals').then(function () {
      // Inserts seed entries
      return knex('deals').insert([
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
        {merchant_id: faker.random.number({'min': 1,'max': 15}), name: faker.commerce.productName(), description: faker.lorem.sentence() , quantity_available: faker.random.number({'min': 1,'max': 10}), image_path: faker.image.food(), current_price: faker.commerce.price()},
      ]);
    })
  ]);
};
