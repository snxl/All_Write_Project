'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userBook', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_user:{
        type: Sequelize.INTEGER,
        references: {model: "register", key: "id"},
        allowNull:false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "id_user"
      },
      id_library: {
        type: Sequelize.INTEGER,
        references: {model: "library", key: "id"},
        allowNull:false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "id_library"
      },
   
      
    });
 },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userBook');
  }
};