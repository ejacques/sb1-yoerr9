<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Edit Item</h1>
    <form @submit.prevent="handleSubmit" class="max-w-md">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          v-model="item.name"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="category" class="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <input
          type="text"
          id="category"
          v-model="item.category"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="color" class="block text-gray-700 text-sm font-bold mb-2">Color</label>
        <select
          id="color"
          v-model="item.color"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a color</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </select>
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Item
        </button>
        <router-link
          to="/"
          class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Cancel
        </router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const items = inject('items')
const updateItem = inject('updateItem')

const item = ref({
  id: '',
  name: '',
  category: '',
  color: '',
})

onMounted(() => {
  const itemId = route.params.id as string
  const foundItem = items.value.find(i => i.id === itemId)
  if (foundItem) {
    item.value = { ...foundItem }
  } else {
    router.push('/')
  }
})

const handleSubmit = () => {
  updateItem(item.value)
  router.push('/')
}
</script>