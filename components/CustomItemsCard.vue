<script lang="ts" setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { CustomItem } from '@/lib/types'
import { items } from '@/lib/items'
import { ThumbsDown, ThumbsUp } from 'lucide-vue-next'

const props = defineProps<{ customItem: CustomItem }>()
const emit = defineEmits<{
  (e: 'voted'): void
}>()

async function upvote() {
  try {
    await $fetch(`/api/custom_items/${props.customItem.id}/upvote`, {
      method: 'POST',
    })
    emit('voted')
  } catch (error) {
    console.error(error)
  }
}
async function downvote() {
  try {
    await $fetch(`/api/custom_items/${props.customItem.id}/downvote`, {
      method: 'POST',
    })
    emit('voted')
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <Card class="gap-4 @container">
    <CardHeader>
      <CardTitle>{{ customItem.title }}</CardTitle>
    </CardHeader>
    <CardContent
      class="flex justify-between flex-col @lg:flex-row @lg:items-end gap-4"
    >
      <div class="flex gap-2 flex-wrap">
        <Card v-for="item in customItem.items.split(',')" class="p-2">
          <img
            :src="items.find((i) => i.name == item)?.img"
            :alt="`${item} image`"
            class="aspect-square object-contain"
            width="40"
          />
        </Card>
      </div>
      <div class="flex items-center justify-end @lg:justify-start">
        <p class="text-lg px-2 tabular-nums">{{ customItem.votes }}</p>
        <Button variant="ghost" size="icon" @click="upvote">
          <ThumbsUp :fill="customItem.upvoted ? 'black' : 'white'" />
        </Button>
        <Button variant="ghost" size="icon" @click="downvote">
          <ThumbsDown :fill="customItem.downvoted ? 'black' : 'white'" />
        </Button>
      </div>
    </CardContent>
  </Card>
</template>
<style scoped></style>
