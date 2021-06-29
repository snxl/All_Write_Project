"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateRoute = {
  login: function login(req, res, next) {
    var token;
    return regeneratorRuntime.async(function login$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.cookies.token;

            if (token) {
              next();
            } else {
              res.redirect("/");
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
var _default = validateRoute;
exports["default"] = _default;