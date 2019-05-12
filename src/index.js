import http from 'http';
import Koa from 'koa';
import Router from 'koa-router';
import routes from './routes';

const app = new Koa();
const router = new Router();

router.use(routes);

app
  .use(router.routes())
  .listen(5000, console.log(`Server running in https://localhost:${ process.env.PORT || 5000 }`));