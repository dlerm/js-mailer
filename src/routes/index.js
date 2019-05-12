import Router from 'koa-router';
import mail from './mail';

const router = new Router();

router.use('/mail', mail);

router.get('/', (ctx) => ctx.body = `GET ${ ctx.request.url }`);

module.exports = router.routes();