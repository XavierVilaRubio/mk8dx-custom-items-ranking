<script setup lang="ts">
import type { CustomItem } from '@/lib/types'

const { data: customItems } = await useFetch<CustomItem[]>('/api/custom_items')
</script>
<template>
  <div class="container pt-8 max-w-6xl">
    <div class="flex gap-2 justify-between mb-8">
      <h1 class="text-2xl font-semibold">MK8DX Custom Items Ranking</h1>
    </div>
    <div class="grid gap-4">
      <CustomItemsCard v-for="customItem in customItems" :custom-item />
    </div>
  </div>
</template>
