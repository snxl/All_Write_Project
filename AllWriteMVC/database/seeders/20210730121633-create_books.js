'use strict';
const moment = require("moment")

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('library',[{
      id_user: 1,
      titulo: "vinte mil léguas submarinas",
      sinopse:"livro de teste 01",
      image: "vinte-mil-leguas-submarinas.jpg",
      pdf:"livro1.pdf",
      category:"aventura",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 1,
      titulo: "a arte da guerra",
      sinopse:"livro de teste 02",
      image: "arte-da-guerra.jpg",
      pdf:"livro2.pdf",
      category:"literario",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 2,
      titulo: "a república",
      sinopse:"livro de teste 03",
      image: "a-republica.jpg",
      pdf:"livro3.pdf",
      category:"humanas",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 2,
      titulo: "O banquete",
      sinopse:"livro de teste 04",
      image: "o-banquete.jpg",
      pdf:"livro4.pdf",
      category:"humanas",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 3,
      titulo: "alice no país das maravilhas",
      sinopse:"livro de teste 05",
      image: "image5.jpg",
      pdf:"livro5.pdf",
      category:"aventura",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 3,
      titulo: "Romeu e Julieta",
      sinopse:"livro de teste 06",
      image: "image6.jpg",
      pdf:"livro6.pdf",
      category:"romance",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 4,
      titulo: "Hamlet",
      sinopse:"livro de teste 07",
      image: "image7.jpg",
      pdf:"livro7.pdf",
      category:"literario",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },
    {
      id_user: 4,
      titulo: "A Volta ao Mundo em Oitenta Dias",
      sinopse:"livro de teste 08",
      image: "image8.jpg",
      pdf:"livro8.pdf",
      category:"aventura",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },{
      id_user: 5,
      titulo: "Viagem ao Centro da Terra",
      sinopse:"livro de teste 09",
      image: "image9.jpg",
      pdf:"livro9.pdf",
      category:"aventura",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    },{
      id_user: 5,
      titulo: "A Garota do Penhasco",
      sinopse:"livro de teste 10",
      image: "image10.jpg",
      pdf:"livro10.pdf",
      category:"aventura",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
    }],{})

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('library', null, {});

  }
};
