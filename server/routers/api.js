const Router = require('koa-router')
const apiRouter = new Router({ prefix: '/api' })

const successResponse = (data) => {
  return {
    success: true,
    code: 0,
    data
  }
}

apiRouter.get('/todo', async (ctx) => {
  const todos = await ctx.db.getAllTodos()
  ctx.body = successResponse(todos)
})

module.exports = apiRouter
