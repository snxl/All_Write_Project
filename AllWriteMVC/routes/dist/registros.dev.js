"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _yup = _interopRequireDefault(require("../middlewares/yup.js"));

var _registro = _interopRequireDefault(require("../controller/registro.js"));

var _multerMiddleware = _interopRequireDefault(require("../middlewares/multerMiddleware.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", _registro["default"].GET);
router.post("/", _multerMiddleware["default"].any(), _yup["default"].register, _registro["default"].POST);
var _default = router;
exports["default"] = _default;