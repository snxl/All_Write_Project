"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _login = _interopRequireDefault(require("../controller/login.js"));

var _multerMiddleware = _interopRequireDefault(require("../middlewares/multerMiddleware.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET home page. */


router.get('/', _login["default"].GET);
router.post("/", _multerMiddleware["default"].any(), _login["default"].POST); //router.put("/", login.POST)
//router.delete("/", login.DELETE)

var _default = router;
exports["default"] = _default;