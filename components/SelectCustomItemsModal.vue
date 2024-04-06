<script lang="ts" setup>
import { items } from '@/lib/items'
import { Plus } from 'lucide-vue-next'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const title = ref('')
const selectedItems = ref<string[]>([])
const selectRandomItems = () => {
  const randomItems = items
    .map(({ name }) => name)
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.floor(Math.random() * items.length))
  selectedItems.value = randomItems
}
const selectAllItems = () => {
  selectedItems.value = items.map(({ name }) => name)
}
const deselectAllItems = () => {
  selectedItems.value = []
}

const emit = defineEmits<{
  (e: 'customItemsAdded'): void
}>()
async function saveSelectedItems() {
  console.log(title.value)
  console.log(selectedItems.value)
  try {
    const response = await $fetch('/api/custom_items', {
      method: 'POST',
      body: {
        title: title.value,
        items: selectedItems.value,
      },
    })
    if (response.success) {
      title.value = ''
      selectedItems.value = []
      console.log(response)
      emit('customItemsAdded')
    }
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent class="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Create Custom Items</DialogTitle>
        <DialogDescription>
          Create a new Custom Items set. Click save when you're done.
        </DialogDescription>
      </DialogHeader>

      <div class="grid w-full max-w-sm gap-1.5">
        <Label for="title">Title</Label>
        <Input id="title" type="text" placeholder="Title" v-model="title" />
      </div>
      <div class="space-y-2">
        <div class="grid w-full gap-1.5">
          <Label for="custom_items">Custom items</Label>
          <ToggleGroup
            v-model:model-value="selectedItems"
            type="multiple"
            variant="outline"
            class="grid grid-cols-6 gap-2"
            id="custom_items"
          >
            <ToggleGroupItem
              v-for="{ img, name } in items"
              :key="name"
              :value="name"
              :aria-label="name"
              class="h-fit w-full aspect-square group relative overflow-hidden"
            >
              <img
                :src="img"
                :alt="name"
                :width="150"
                :height="150"
                class="aspect-square object-contain select-none pointer-events-none group-data-[state=on]:opacity-100 opacity-25 group-hover:opacity-100 transition-opacity"
              />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div class="flex *:flex-1 gap-4">
          <Button variant="outline" @click="selectRandomItems">Random</Button>
          <Button variant="outline" @click="selectAllItems">All On</Button>
          <Button variant="outline" @click="deselectAllItems">All Off</Button>
        </div>
      </div>

      <DialogFooter>
        <DialogClose as-child>
          <Button variant="outline" @click="saveSelectedItems">Save</Button>
        </DialogClose>
        <!-- Save changes -->
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
<style scoped></style>
