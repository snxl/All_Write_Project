'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('register',{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user: {
        type: Sequelize.STRING(50),
        allowNull:false,
        unique:true
    },
    name:{
        type: Sequelize.STRING(50),
        allowNull:false
    },
    email:{
        type: Sequelize.STRING(200),
        allowNull:false,
        unique:true
    },
    password:{
        type: Sequelize.STRING(200),
        allowNull:false
    },
    imageRoute:{
        type: Sequelize.STRING(200),
        allowNull:true,
        defaultValue:null
    },
    credential:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:0
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
     await queryInterface.dropTable('register');
  }
};
