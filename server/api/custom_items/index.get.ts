export default defineEventHandler(async ({ context }) => {
  const { DB } = context.cloudflare.env;

  const stmt = DB.prepare("SELECT * FROM custom_items")

  const { results } = await stmt.all()

  return results
});