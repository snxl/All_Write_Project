"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../database/models/index.js"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default = new (
/*#__PURE__*/
function () {
  function updateProfile() {
    _classCallCheck(this, updateProfile);
  }

  _createClass(updateProfile, [{
    key: "oldPassword",
    value: function oldPassword(id, passwordOld) {
      var selectCheck, compareHash;
      return regeneratorRuntime.async(function oldPassword$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_index["default"].Registro.findOne({
                where: {
                  id: id
                }
              }));

            case 2:
              selectCheck = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(_bcryptjs["default"].compare(passwordOld, selectCheck.password));

            case 5:
              compareHash = _context.sent;

              if (!compareHash) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", true);

            case 8:
              return _context.abrupt("return", false);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "updateData",
    value: function updateData(updateObj, id) {
      return regeneratorRuntime.async(function updateData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_index["default"].Registro.update(_objectSpread({}, updateObj), {
                where: {
                  id: id
                }
              }));

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return updateProfile;
}())();

exports["default"] = _default;