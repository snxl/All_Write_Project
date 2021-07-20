"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../database/models/index.js"));

var _serviceLogin = _interopRequireDefault(require("../service/serviceLogin.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Login =
/*#__PURE__*/
function () {
  function Login() {
    _classCallCheck(this, Login);
  }

  _createClass(Login, [{
    key: "GET",
    value: function GET(req, res) {
      res.status(200).render("login", {
        invalidData: false
      });
    }
  }, {
    key: "POST",
    value: function POST(req, res) {
      var _req$body, email, password, responseUser, responseInvalidData;

      return regeneratorRuntime.async(function POST$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              responseInvalidData = function _ref() {
                res.render("login", {
                  invalidData: true
                });
              };

              _req$body = req.body, email = _req$body.email, password = _req$body.password;
              _context.next = 4;
              return regeneratorRuntime.awrap(_serviceLogin["default"].searchUser(email));

            case 4:
              responseUser = _context.sent;

              if (responseUser == null) {//return responseInvalidData()
              }

              console.log(email, responseUser);
              res.json(responseUser);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return Login;
}();

var _default = new Login();

exports["default"] = _default;