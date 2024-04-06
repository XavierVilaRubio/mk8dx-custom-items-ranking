<script lang="ts" setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { CustomItem } from '@/lib/types'
import { items } from '@/lib/items'

defineProps<{ customItem: CustomItem }>()
</script>
<template>
  <Card class="gap-4">
    <CardHeader>
      <CardTitle>{{ customItem.title }}</CardTitle>
    </CardHeader>
    <CardContent class="flex justify-between">
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
    </CardContent>
  </Card>
</template>
<style scoped></style>
