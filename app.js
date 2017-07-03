const koa = require('koa')
const app = new koa()

app.use(async ctx => {
	ctx.body = 'hello world!'
	console.log('hello world sent')
})

app.listen(3000)