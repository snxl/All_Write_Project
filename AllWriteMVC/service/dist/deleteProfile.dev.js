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

var destroyProfile =
/*#__PURE__*/
function () {
  function destroyProfile() {
    _classCallCheck(this, destroyProfile);
  }

  _createClass(destroyProfile, [{
    key: "destroy",
    value: function destroy(id) {
      return regeneratorRuntime.async(function destroy$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(id);
              _context.next = 3;
              return regeneratorRuntime.awrap(_index["default"].Registro.destroy({
                where: {
                  id: id
                }
              }));

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return destroyProfile;
}();

var _default = new destroyProfile();

exports["default"] = _default;