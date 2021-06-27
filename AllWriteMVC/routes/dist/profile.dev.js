"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _profile = _interopRequireDefault(require("../controller/profile.js"));

var _multerMiddleware = _interopRequireDefault(require("../middlewares/multerMiddleware.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET home page. */


router.get('/', _profile["default"].GET);
router.put("/update", _multerMiddleware["default"].single("file"), _profile["default"].PUT);
router["delete"]("/delete", _multerMiddleware["default"].any(), _profile["default"].DELETE);
router.get("/exit", _multerMiddleware["default"].any(), _profile["default"].DELETE);
var _default = router;
exports["default"] = _default;