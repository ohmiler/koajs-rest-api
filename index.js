const Koa = require('koa')
const koaBody = require('koa-body');

const app = new Koa();

// Middleware
app.use(koaBody())

// Routes

let items = require('./items.js')

// Use the routes

app.use(items.routes())

app.listen(3000);