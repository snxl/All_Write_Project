"use strict";

var bcrypt = require("bcryptjs");

var database = require("./index.js");

module.exports = function (sequelize, DataTypes) {
  var Register = sequelize.define("Registro", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true //true enquanto campo de senha virtual existir

    },
    password_hash: {
      type: DataTypes.VIRTUAL,
      allowNull: false
    },
    imageRoute: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    credential: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: "register"
  });
  Register.addHook("beforeSave", function _callee(Registro) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!Registro.password_hash) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return regeneratorRuntime.awrap(bcrypt.hash(Registro.password_hash, 12));

          case 3:
            Registro.password = _context.sent;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  });

  Register.associate = function (model) {
    Register.hasOne(model.Autores, {
      foreignKey: "register_id",
      as: "autors"
    });
  }; // Register.addHook("afterCreate", async Registro =>{
  //   await database.Autores.create({
  //     acceptContact: 0,
  //     register_id: Registro.id
  //   })
  // })


  return Register;
};