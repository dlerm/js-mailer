"use strict";

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _mail = _interopRequireDefault(require("./mail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _koaRouter["default"]();
router.use('/mail', _mail["default"]);
router.get('/', function (ctx) {
  return ctx.body = "GET ".concat(ctx.request.url);
});
module.exports = router.routes();