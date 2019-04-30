"use strict";

var _http = _interopRequireDefault(require("http"));

var _koa = _interopRequireDefault(require("koa"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = new _koa["default"]();
var router = new _koaRouter["default"]();
router.use(_routes["default"]);
app.use(router.routes()).listen(5000, console.log("Server running in https://localhost:".concat(process.env.PORT || 5000)));