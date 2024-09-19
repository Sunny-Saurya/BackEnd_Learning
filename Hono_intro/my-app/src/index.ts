import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hey There!')
})

app.post('/user', async (c) => {
  return c.json({
    message : "Hello Hono !!",
  })
})
export default app
