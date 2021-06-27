"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var yup = _interopRequireWildcard(require("yup"));

var _index = _interopRequireDefault(require("../database/models/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var email = false;
var user = false;
var erro1 = undefined;
var erro2 = undefined;
var erro3 = undefined;
var erro4 = undefined;
var erro5 = undefined;
var erro6 = undefined;

var Validation =
/*#__PURE__*/
function () {
  function Validation() {
    _classCallCheck(this, Validation);
  }

  _createClass(Validation, [{
    key: "register",
    value: function register(req, res, next) {
      var schema, checkEmail, checkUser, allError, checkPassword;
      return regeneratorRuntime.async(function register$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              schema = yup.object().shape({
                user: yup.string().required("inserir usuario"),
                name: yup.string().required("inserir nome"),
                email: yup.string().required("inesir e-mail"),
                password_hash: yup.string().required("Deve inserir a senha").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, "Deve conter 1 maiúculo 1 minúsculo e 8 digitos"),
                checkPassword: yup.string().oneOf([yup.ref('password_hash'), null], 'senhas incorretas')
              });
              _context.next = 3;
              return regeneratorRuntime.awrap(_index["default"].Registro.findOne({
                where: {
                  email: req.body.email
                }
              }));

            case 3:
              checkEmail = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(_index["default"].Registro.findOne({
                where: {
                  user: req.body.user
                }
              }));

            case 6:
              checkUser = _context.sent;
              checkUser != null ? user = "usuário existente" : user = false;
              checkEmail != null ? email = "email existente" : email = false;

              if (!(user && email)) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", res.render("registro", {
                erro1: erro1,
                erro2: erro2,
                erro3: erro3,
                erro4: erro4,
                erro5: erro5,
                erro6: erro6,
                email: email,
                user: user
              }));

            case 11:
              _context.prev = 11;
              _context.next = 14;
              return regeneratorRuntime.awrap(schema.validate(req.body, {
                abortEarly: false
              }));

            case 14:
              if (!(checkEmail === null && checkUser === null)) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return", next());

            case 16:
              _context.next = 24;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](11);
              allError = _context.t0.errors;
              checkPassword = allError.forEach(function (element) {
                if (element === "Deve inserir a senha") return true;
              });
              allError.forEach(function (element) {
                if (element == "inserir usuario") erro1 = element;
                if (element == "inserir nome") erro2 = element;
                if (element == "inesir e-mail") erro3 = element;
                if (element == "Deve inserir a senha") erro4 = element;

                if (element == "Senha deve conter 1 maiúculo 1 minúsculo e 8 digitos" && checkPassword) {
                  erro5 = false;
                } else {
                  erro5 = element;
                }

                if (element == "senhas incorretas") erro6 = element;
              });
              return _context.abrupt("return", res.render("registro", {
                erro1: erro1,
                erro2: erro2,
                erro3: erro3,
                erro4: erro4,
                erro5: erro5,
                erro6: erro6,
                email: email,
                user: user
              }));

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[11, 18]]);
    }
  }, {
    key: "login",
    value: function login(req, res, next) {
      var schema, checkEmail, allError, checkPassword;
      return regeneratorRuntime.async(function login$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              schema = yup.shape.object({
                email: yup.string().required("inserir e-mail"),
                password: yup.string().required("inserir senha")
              });
              _context2.next = 3;
              return regeneratorRuntime.awrap(_index["default"].Registro.findOne({
                where: {
                  email: req.body.email
                }
              }));

            case 3:
              checkEmail = _context2.sent;
              checkEmail != null ? email = "email existente" : email = false;

              if (checkEmail) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", res.render("login", {
                erro1: erro1,
                erro2: erro2,
                erro3: erro3,
                erro4: erro4,
                erro5: erro5,
                erro6: erro6,
                email: email,
                user: user
              }));

            case 7:
              _context2.prev = 7;
              _context2.next = 10;
              return regeneratorRuntime.awrap(schema.validate(req.body, {
                abortEarly: false
              }));

            case 10:
              if (!(checkEmail === null && checkUser === null)) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return", next());

            case 12:
              _context2.next = 20;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](7);
              allError = results.errors;
              checkPassword = allError.forEach(function (element) {
                if (element === "Deve inserir a senha") return true;
              });
              allError.forEach(function (element) {
                if (element == "inserir usuario") erro1 = element;
                if (element == "inserir nome") erro2 = element;
              });
              return _context2.abrupt("return", res.render("registro", {
                erro1: erro1,
                erro2: erro2,
                erro3: erro3,
                erro4: erro4,
                erro5: erro5,
                erro6: erro6,
                email: email,
                user: user
              }));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[7, 14]]);
    }
  }]);

  return Validation;
}();

var _default = new Validation();

exports["default"] = _default;