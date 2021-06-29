"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../database/models/index.js"));

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var teste = {
  findAll: function findAll(req, res) {
    var data, Decrypt;
    return regeneratorRuntime.async(function findAll$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_index["default"].Autores.findAll({
              include: [{
                model: _index["default"].Registro,
                as: "Registros_register",
                required: true
              }, {
                model: _index["default"].Biblioteca,
                as: "Registros_library",
                required: true
              }]
            }));

          case 2:
            data = _context.sent;
            Decrypt = _crypto["default"].Decipher();
            res.json(data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  findOne: function findOne(req, res) {
    var data;
    return regeneratorRuntime.async(function findOne$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_index["default"].Registro.findOne({
              where: {
                id: 1
              },
              include: [{
                model: _index["default"].Autores,
                required: true,
                as: "autors"
              }]
            }));

          case 2:
            data = _context2.sent;
            res.json(data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var _default = teste;
exports["default"] = _default;