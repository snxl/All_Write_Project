"use strict";

var _app = _interopRequireDefault(require("../app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || '3000';
var portTLS = process.env.PORT_TLS || '3100';

_app["default"].server.listen(port, function () {
  return console.log("server HTTP running: ".concat(port));
});

_app["default"].serverTLS.listen(portTLS, function () {
  return console.log("server HTTPS running: ".concat(portTLS));
});