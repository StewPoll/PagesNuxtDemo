import { defineEventHandler, readBody } from 'h3'
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return { body, context: event.context }
})
