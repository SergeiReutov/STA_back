import Koa from 'koa';
import cors from '@koa/cors';
import router from './routes/index.js';

const app = new Koa();

app.use(cors());
app.use(router.routes());

app.listen(3001, () => {
  console.log('Server is running');
});
