"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _multer2 = _interopRequireDefault(require("../config/multer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var upload = (0, _multer["default"])({
  storage: _multer2["default"]
});
var _default = upload;
exports["default"] = _default;