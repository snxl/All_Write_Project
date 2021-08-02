'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn('register', "bio", {
      type: Sequelize.STRING(1000),
      allowNull:true
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn("register", "bio")

  }
};
