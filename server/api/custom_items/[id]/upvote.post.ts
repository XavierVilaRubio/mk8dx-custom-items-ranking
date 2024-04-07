import { hashAddress } from '../../../utils'

export default defineEventHandler(async (event) => {
  const { DB } = event.context.cloudflare.env
  const custom_items_id = getRouterParam(event, 'id')

  const hashedAddress = await hashAddress(event.context.clientAddress!)

  try {
    const info = await DB.prepare(
      'INSERT INTO votes (custom_items_id, hashed_ip) VALUES (?1, ?2)'
    )
      .bind(custom_items_id, hashedAddress)
      .run()

    if (info.success) {
      await DB.prepare(
        'UPDATE custom_items SET upvotes = upvotes + 1 WHERE id = ?1'
      )
        .bind(custom_items_id)
        .run()
    }

    return info
  } catch (e: any) {
    return {
      success: false,
      error: e.message
    }
  }

})
