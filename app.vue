<script setup lang="ts">

const { data: customItems, refresh } = await useFetch('/api/custom_items')
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
