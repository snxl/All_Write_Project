"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var button = document.querySelector("[data-sendBtn]");
var user = document.querySelector("[data-user]");
var name = document.querySelector("[data-name]");
var email = document.querySelector("[data-user]");
var password_hash = document.querySelector("[data-password_hash]");
var checkPassword = document.querySelector("[data-checkPassword]");

var route = _axios["default"].create({
  baseURL: "http://localhost:3500/register",
  timeout: 5000
});

button.addEventListener("click", function (data) {
  data.preventDefault();

  _axios["default"].post(route, {
    data: {
      user: user,
      name: name,
      email: email,
      password_hash: password_hash,
      checkPassword: checkPassword
    }
  });
});