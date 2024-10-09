<template>
  <div class="flex h-screen bg-gray-100">
    <Navigation />
    <div class="flex-1 overflow-auto p-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue'
import Navigation from './components/Navigation.vue'

const items = ref([
  { id: '1', name: 'Item 1', category: 'Category A', color: 'Red' },
  { id: '2', name: 'Item 2', category: 'Category B', color: 'Green' },
  { id: '3', name: 'Item 3', category: 'Category A', color: 'Blue' },
])

const updateItem = (updatedItem) => {
  const index = items.value.findIndex(item => item.id === updatedItem.id)
  if (index !== -1) {
    items.value[index] = updatedItem
  }
}

const addItem = (newItem) => {
  const newId = (parseInt(items.value[items.value.length - 1].id) + 1).toString()
  items.value.push({ ...newItem, id: newId })
}

provide('items', items)
provide('updateItem', updateItem)
provide('addItem', addItem)
</script>