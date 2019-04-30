"use strict";

var _koaRouter = _interopRequireDefault(require("koa-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _koaRouter["default"]();
router.get('/', function (ctx, next) {
  return ctx.body = "GET ".concat(ctx.request.url);
});
module.exports = router.routes();