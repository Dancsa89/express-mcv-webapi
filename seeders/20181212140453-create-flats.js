'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flats', [{
      title: 'Big',
      price: 30000000,
      floorArea: 2,
      country: 'Hungary',
      zip: 6720,
      city: 'Szeged',
      street: 'Feketesas',
      createdA: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Small',
      price: 10000000,
      floorArea: 8,
      country: 'Hungary',
      zip: 6724,
      city: 'Szeged',
      street: 'Kunigunga',
      createdA: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Medium',
      price: 19000000,
      floorArea: 1,
      country: 'Hungary',
      zip: 6725,
      city: 'Szeged',
      street: 'Pasztor',
      createdA: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
