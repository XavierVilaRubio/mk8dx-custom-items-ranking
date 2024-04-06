export default defineEventHandler(async (event) => {
  const { DB } = event.context.cloudflare.env;

  const { title, items } = await readBody(event)

  const stmt = DB.prepare('INSERT INTO custom_items (title, items) VALUES (?1, ?2)').bind(title, items.toString())

  const info = await stmt.run()

  return info
});