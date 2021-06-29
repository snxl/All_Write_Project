"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dashboard =
/*#__PURE__*/
function () {
  function Dashboard() {
    _classCallCheck(this, Dashboard);
  }

  _createClass(Dashboard, [{
    key: "GET",
    value: function GET(req, res) {
      res.render("dashboard", {
        title: "all write",
        imagePerfil: req.cookies.imagePerfil
      });
    }
  }, {
    key: "POST",
    value: function POST(req, res) {
      return;
    }
  }, {
    key: "PUT",
    value: function PUT(req, res) {
      return;
    }
  }, {
    key: "DELETE",
    value: function DELETE(req, res) {
      return;
    }
  }]);

  return Dashboard;
}();

var _default = new Dashboard();

exports["default"] = _default;