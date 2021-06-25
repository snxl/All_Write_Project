"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../database/models/index.js"));

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
      res.status(200).render("login");
    }
  }, {
    key: "POST",
    value: function POST(req, res) {
      var _req$body = req.body,
          email = _req$body.email,
          password = _req$body.password;
      res.json({
        url: "",
        email: email,
        password: password
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

  return Login;
}();

var _default = new Login();

exports["default"] = _default;