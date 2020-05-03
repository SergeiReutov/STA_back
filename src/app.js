const Koa = require('koa');
const cors = require('@koa/cors');
const router = require('./routes');

const app = new Koa();

app.use(cors());
app.use(router.routes());

app.listen(3001, () => {
  console.log('Server is running');
});
