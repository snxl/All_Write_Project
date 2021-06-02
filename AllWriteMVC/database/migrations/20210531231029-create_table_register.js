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
        allowNull:true,
        unique:true
    },
    name:{
        type: Sequelize.STRING(50),
        allowNull:true
    },
    email:{
        type: Sequelize.STRING(90),
        allowNull:true, 
        unique:true
    },
    password:{
        type: Sequelize.STRING(200),
        allowNull:true
    },
    imageRoute:{
        type: Sequelize.STRING(500),
        allowNull:false
    },
    credential:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    createDate:{
        type: Sequelize.DATE,
        allowNull:true
    },
    lastAcess:{
        type: Sequelize.DATE,
        allowNull:true
    }
     });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('register');
  }
};
