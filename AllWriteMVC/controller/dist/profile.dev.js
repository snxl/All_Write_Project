"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _deleteProfile = _interopRequireDefault(require("../service/deleteProfile.js"));

var _updateProfile = _interopRequireDefault(require("../service/updateProfile.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Profile =
/*#__PURE__*/
function () {
  function Profile() {
    _classCallCheck(this, Profile);
  }

  _createClass(Profile, [{
    key: "GET",
    value: function GET(req, res) {
      return res.render('profile', {
        title: 'all write'
      });
    }
  }, {
    key: "PUT",
    value: function PUT(req, res) {
      var token, file, dataJwt, _req$body, name, password_hash, old_password, checkPassword;

      return regeneratorRuntime.async(function PUT$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = req.cookies.token;
              file = req.file;
              _context.next = 4;
              return regeneratorRuntime.awrap(_jsonwebtoken["default"].verify(token, process.env.TOKEN_SECRET));

            case 4:
              dataJwt = _context.sent;
              _req$body = req.body, name = _req$body.name, password_hash = _req$body.password_hash, old_password = _req$body.old_password;
              _context.next = 8;
              return regeneratorRuntime.awrap(_updateProfile["default"].oldPassword(dataJwt.id, old_password));

            case 8:
              checkPassword = _context.sent;
              res.status(200).json({
                name: name,
                password_hash: password_hash,
                old_password: old_password,
                checkPassword: checkPassword,
                file: file
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "DELETE",
    value: function DELETE(req, res) {
      var tokenJwt, dataJwt;
      return regeneratorRuntime.async(function DELETE$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              tokenJwt = req.cookies.token;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_jsonwebtoken["default"].verify(tokenJwt, process.env.TOKEN_SECRET));

            case 3:
              dataJwt = _context2.sent;
              _context2.next = 6;
              return regeneratorRuntime.awrap(_deleteProfile["default"].destroy(dataJwt.id));

            case 6:
              res.cookie("token", null, {
                maxAge: 0
              });
              return _context2.abrupt("return", res.redirect("/"));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "EXIT",
    value: function EXIT() {
      return regeneratorRuntime.async(function EXIT$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              res.cookie("token", null, {
                maxAge: 0
              });
              return _context3.abrupt("return", res.redirect("/"));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return Profile;
}();

var _default = new Profile();

exports["default"] = _default;