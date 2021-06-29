'use strict';

const bcrypt = require("bcryptjs")

const moment = require("moment")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('register', [{
      user: "SNXL" ,
      name: "Nicolas Soares Gomes" ,
      email: "nicolas@allwrite.com",
      password:  await bcrypt.hash( "AdmNicolas00" ,12),
      imageRoute: "undefined",
      credential: 1,
      createdAt:moment().format("YYYY-MM-DD HH:MM"),
      updatedAt:moment().format("YYYY-MM-DD HH:MM")
      },{
        user:"Marcelo" ,
        name: "Marcelo Gamon",
        email:"marcelo@allwrite.com",
        password: await bcrypt.hash("admMarcelo01",12),
        imageRoute:"undefined",
        credential:1,
        createdAt:moment().format("YYYY-MM-DD HH:MM"),
        updatedAt:moment().format("YYYY-MM-DD HH:MM")
      },{
        user: "Paloma" ,
        name: "Paloma lima" ,
        email:"paloma@allwrite.com",
        password: await bcrypt.hash( "AdmPaloma02" ,12),
        imageRoute:"undefined",
        credential:1,
        createdAt:moment().format("YYYY-MM-DD HH:MM"),
        updatedAt:moment().format("YYYY-MM-DD HH:MM")
      },{
        user: "Ariel" ,
        name:"Ariel Pellegrino" ,
        email:"ariel@allwrite.com",
        password: await bcrypt.hash("AdmAriel03",12) ,
        imageRoute:"undefined",
        credential:1,
        createdAt:moment().format("YYYY-MM-DD HH:MM"),
        updatedAt:moment().format("YYYY-MM-DD HH:MM")
      },{
        user: "Barbara" ,
        name:"Barbara Fernandez" ,
        email:"barbara@allwrite.com",
        password: await bcrypt.hash( "AdmBarbara04" ,12),
        imageRoute:"undefined",
        credential:1,
        createdAt:moment().format("YYYY-MM-DD HH:MM"),
        updatedAt:moment().format("YYYY-MM-DD HH:MM")
      }
      ], {})
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('register', null, {});
  }
};



