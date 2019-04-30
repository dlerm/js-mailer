import Router from 'koa-router';

const router = new Router();

router.get('/', (ctx, next) => ctx.body = `GET ${ctx.request.url}`);

module.exports = router.routes();