<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-vue-next'
import { useAutoAnimate } from '@formkit/auto-animate/vue'

const { data: customItems, refresh } = await useFetch('/api/custom_items')

const [parent] = useAutoAnimate()
</script>
<template>
  <div class="container pt-8 max-w-6xl @container">
    <div class="flex gap-2 justify-between mb-8 @lg:flex-row flex-col">
      <h1 class="text-2xl font-semibold">MK8DX Custom Items Ranking</h1>
      <SelectCustomItemsModal @customItemsAdded="refresh">
        <Button variant="outline" class="self-end w-fit"
          ><Plus class="w-4 h-4 mr-2" :stroke-width="3" /> Create Custom
          Items</Button
        >
      </SelectCustomItemsModal>
    </div>
    <div class="grid gap-4 mb-8" ref="parent">
      <CustomItemsCard
        v-for="customItem in customItems"
        :custom-item
        @voted="refresh"
      />
    </div>
  </div>
</template>
