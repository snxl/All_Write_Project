"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _serviceRegister = _interopRequireDefault(require("../service/serviceRegister.js"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Registro =
/*#__PURE__*/
function () {
  function Registro() {
    _classCallCheck(this, Registro);
  }

  _createClass(Registro, [{
    key: "GET",
    value: function GET(req, res) {
      return res.render('registro', {
        title: 'all write',
        erro1: false,
        erro2: false,
        erro3: false,
        erro4: false,
        erro5: false,
        erro6: false,
        user: false,
        email: false
      });
    }
  }, {
    key: "POST",
    value: function POST(req, res) {
      var _req$body, user, name, email, password_hash, registerUser, token, stringTeste;

      return regeneratorRuntime.async(function POST$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, user = _req$body.user, name = _req$body.name, email = _req$body.email, password_hash = _req$body.password_hash;
              _context.next = 3;
              return regeneratorRuntime.awrap(_serviceRegister["default"].adiciona({
                user: user,
                name: name,
                email: email,
                password_hash: password_hash
              }));

            case 3:
              registerUser = _context.sent;

              if (!registerUser) {
                _context.next = 12;
                break;
              }

              _context.next = 7;
              return regeneratorRuntime.awrap(_jsonwebtoken["default"].sign({
                id: registerUser.id,
                user: registerUser.user,
                email: registerUser.email
              }, process.env.TOKEN_SECRET, {
                expiresIn: process.env.TOKEN_EXPIRATION
              }));

            case 7:
              token = _context.sent;
              res.cookie("ultimo acesso", new Date(), {
                maxAge: 604900000
              });
              res.cookie("token", token, {
                maxAge: 604900000
              });
              stringTeste = "uma string qualquer";
              return _context.abrupt("return", res.redirect("/profile"));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "PUT",
    value: function PUT(req, res) {
      return;
    }
  }, {
    key: "DELETE",
    value: function DELETE(req, res) {
      return;
    }
  }]);

  return Registro;
}();

var _default = new Registro();

exports["default"] = _default;