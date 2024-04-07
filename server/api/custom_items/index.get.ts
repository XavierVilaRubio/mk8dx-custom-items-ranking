import { CustomItem } from '../../../lib/types'
import { hashAddress } from '../../utils'

export default defineEventHandler(async ({ context }) => {
  const { DB } = context.cloudflare.env

  const hashedAddress = await hashAddress(context.clientAddress)

  const { results } = await DB.prepare(
    `
    SELECT custom_items.*,
      CASE
          WHEN votes.upvote = 1 THEN 1
          ELSE 0
      END AS upvoted,
      CASE
          WHEN votes.upvote = 0 THEN 1
          ELSE 0
      END AS downvoted
    FROM custom_items
    LEFT JOIN votes ON custom_items.id = votes.custom_items_id AND votes.hashed_ip = ?1
  `
  )
    .bind(hashedAddress)
    .all<CustomItem>()

  return results
})
