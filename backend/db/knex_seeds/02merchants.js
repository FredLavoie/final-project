
const faker = require('faker');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
  knex('merchants').del(),
  knex.raw('ALTER SEQUENCE merchants_id_seq RESTART WITH 1'),
    knex('merchants').then(function () {
      // Inserts seed entries
      return knex('merchants').insert([
        {
          business_name: 'Café Gaspé',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '5455 Gaspe Ave',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H2T 2A4',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Café',
          latitude:45.5274268,
          longitude:-73.5966822
        },
        {
          business_name: 'Café 100%',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '5445 Gaspe Ave',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H2T 3B2',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Café',
          latitude: 45.5270228,
          longitude: -73.5954185
        },
        {
          business_name: 'Café Névé',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '160 St Viateur St E #105',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H2T 1A8',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Café',
          latitude: 45.5270602,
          longitude: -73.599105
        },
        {
          business_name: 'District Café',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '83 Rue Saint Viateur E',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H2T 1A7',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Café',
          latitude: 45.5270479,
          longitude: -73.6002239
        },
        {
          business_name: 'Brooklyn MTL',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '71 Rue Saint Viateur E',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H2T 1A7',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Café',
          latitude: 45.5269371,
          longitude: -73.6003491
        },
        {
          business_name: 'Free time Mile End',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '5605 Avenue de Gaspé #106',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H2T 2A4',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Café',
          latitude: 45.5283088,
          longitude: -73.6002345
        },
        {
          business_name: 'Le Falco',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '5605 Gaspe Ave',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H2T 2M1',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Restaurant',
          latitude: 45.5282104,
          longitude: -73.598093
        },
        {
          business_name: 'Le mini sucré',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '5705 Gaspe Ave',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H2T 2A3',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Bakery',
          latitude: 45.5283047,
          longitude:-73.5988173
        },
        {
          business_name: 'Guillaume', email: 'g@live.ca',
          password: 123456,
          street_address: '5134 St Laurent Blvd',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H2T 1R8',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Café',
          latitude:45.5232838,
          longitude: -73.5936706
        }, 
        {
          business_name: 'Maria Bonita',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '5163 St Laurent Blvd',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H2T 1R9',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Restaurant',
          latitude:45.5236883,
          longitude:-73.5939921
        },
        {
          business_name: 'Art Café',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '201 Avenue Fairmount O',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H2T 2M8',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Café',
          latitude:45.5214612,
          longitude:-73.5970907
        },
        {
          business_name: 'Café Kafta',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '209 Avenue Fairmount O',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H2T 2M8',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Café',
          latitude:45.5212944,
          longitude: -73.5970973
        }, 
        {
          business_name: 'Brioche Doré',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '1000 Rue de la Gauchetière O',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H3B 4W5',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Café',
          latitude:45.4984253,
          longitude: -73.566044
        },
        {
          business_name: 'La fabrique de Bagel de Montreal',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '1000 Rue de la Gauchetière O',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H3B 4W5',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Bakery',
          latitude:45.4985283,
          longitude: -73.5662526
        }, 
        {
          business_name: 'Ros&Lina',
          email: faker.internet.email(),
          password: faker.internet.password(),
          street_address: '1000 Rue de la Gauchetière O',
          city: 'Montreal',
          province: 'QC',
          postal_code: 'H3B 4W5',
          phone_number: faker.phone.phoneNumberFormat().replace(/-/g, ""),
          type_of_merchant:'Restaurant',
          latitude:45.4981793,
          longitude:-73.5666755
        },
      ]);
    })
  ]);
};
