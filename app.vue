<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-vue-next'

const { data: customItems, refresh } = await useFetch('/api/custom_items')
</script>
<template>
  <div class="container pt-8 max-w-6xl">
    <div class="flex gap-2 justify-between mb-8">
      <h1 class="text-2xl font-semibold">MK8DX Custom Items Ranking</h1>
      <SelectCustomItemsModal @customItemsAdded="refresh">
        <Button variant="outline"
          ><Plus class="w-4 h-4 mr-2" :stroke-width="3" /> Create Custom
          Items</Button
        >
      </SelectCustomItemsModal>
    </div>
    <div class="grid gap-4 mb-8">
      <CustomItemsCard v-for="customItem in customItems" :custom-item />
    </div>
  </div>
</template>
