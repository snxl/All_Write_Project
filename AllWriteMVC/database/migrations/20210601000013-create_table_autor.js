'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('autors', {
       id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
       },
       acceptContact:{
         type: Sequelize.INTEGER,
         allowNull:true
       },
       register_id:{
         type:Sequelize.INTEGER,
         allowNull:true,
         references:{
           model:"register",
           key:"id"
         }
       }
       });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('autors');
  }
};
