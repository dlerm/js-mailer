import Router from 'koa-router';
import bodyparser from 'koa-bodyparser';
import _post from './post';
const router = new Router()

router.post('/', bodyparser(), _post);

router.get('/', (ctx, next) => ctx.body = `GET ${ ctx.request.url }`);

module.exports = router.routes();