const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors')
const router = require('./routes');

const app = koa();
const port = 3001;

app.use(bodyParser());
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());


app.on('error', (err) => {
  console.error('server error', err);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
