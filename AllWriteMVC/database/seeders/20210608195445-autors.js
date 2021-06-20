'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('autors', [{
        acceptContact: 1,
        register_id: 1
      },{
        acceptContact: 1,
        register_id: 2
      },{
        acceptContact: 1,
        register_id: 3
      },{
        acceptContact: 1,
        register_id: 4
      },{
        acceptContact: 1,
        register_id: 5
      }], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('autors', null, {});

  }
};
