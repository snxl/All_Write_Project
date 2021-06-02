'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('library', {
      id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true
      },
      register_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"register",
          key:"id"
        }
      },
    });
 },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('library');
  }
};
