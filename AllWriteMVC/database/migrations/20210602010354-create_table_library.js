'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('library', {
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
      titulo: {
          type: Sequelize.STRING,
          allowNull:false,
      },
      sinopse: {
          type: Sequelize.STRING(5000),
      },
      image:{
          type: Sequelize.STRING,
          allowNull:false
      },
      pdf:{
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull:false
      }
    });
 },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('library');
  }
};
