'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn('library', "category", {
      type: Sequelize.STRING,
      allowNull:false
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn("library", "category")

  }
};
