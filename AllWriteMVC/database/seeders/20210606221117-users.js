'use strict';

const bcrypt = require("bcryptjs")

const moment = require("moment")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('register', [{
      user: "SNXL" ,
      name: "Nicolas Soares Gomes" ,
      email: "nicolas@allwrite.com",
      password: "AdmNicolas00",
      imageRoute: "undefined",
      credential: 1,
      createDate:moment().format("YYYY-MM-DD HH:MM"),
      lastAcess:moment().format("YYYY-MM-DD HH:MM")
      }
      ], {})
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('register', null, {});
  }
};


// ,{
//   user:"Marcelo" ,
//   name: "Marcelo Gamon",
//   email:"marcelo@allwrite.com",
//   password: "admMarcelo01",
//   imageRoute:"undefined",
//   credential:1
// },{
//   user: "Paloma" ,
//   name: "Paloma lima" ,
//   email:"paloma@allwrite.com",
//   password: "AdmPaloma02",
//   imageRoute:"undefined",
//   credential:1
// },{
//   user: "Ariel" ,
//   name:"Ariel Pellegrino" ,
//   email:"ariel@allwrite.com",
//   password: "AdmAriel03",
//   imageRoute:"undefined",
//   credential:1
// },{
//   user: "Barbara" ,
//   name:"Barbara Fernandez" ,
//   email:"barbara@allwrite.com",
//   password: "AdmBarbara04",
//   imageRoute:"undefined",
//   credential:1,
// }
