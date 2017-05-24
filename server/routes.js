const router = require('koa-router')();

const event = require('./controllers/events');

router.get('/events', event.getAll);

router.post('/events', event.addEvent);


module.exports = router;
