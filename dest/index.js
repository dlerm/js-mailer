"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = new _koa["default"]();
app.use(function (ctx) {
  ctx.body = 'Hello World';
}).listen(5000, console.log("Server running in https://localhost:".concat(process.env.PORT || 5000)));