"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateRoute = {
  login: function login(req, res, next) {
    var tokenJWT, dataToken, id, email, user;
    return regeneratorRuntime.async(function login$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tokenJWT = req.cookies.token;

            if (tokenJWT) {
              _context.next = 5;
              break;
            }

            res.status(401).redirect("/");
            _context.next = 11;
            break;

          case 5:
            _context.next = 7;
            return regeneratorRuntime.awrap(_jsonwebtoken["default"].verify(tokenJWT, process.env.TOKEN_SECRET));

          case 7:
            dataToken = _context.sent;
            id = dataToken.id, email = dataToken.email, user = dataToken.user;
            console.log("\n\n\n ".concat(id, ", \n").concat(email, ", \n").concat(user, " \n\n\n"));
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
var _default = validateRoute;
exports["default"] = _default;