<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Add New Item</h1>
    <form @submit.prevent="handleSubmit" class="max-w-md">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          v-model="name"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="category" class="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <input
          type="text"
          id="category"
          v-model="category"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="color" class="block text-gray-700 text-sm font-bold mb-2">Color</label>
        <select
          id="color"
          v-model="color"
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
          Add Item
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
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const addItem = inject('addItem')

const name = ref('')
const category = ref('')
const color = ref('')

const handleSubmit = () => {
  const newItem = {
    name: name.value,
    category: category.value,
    color: color.value
  }
  
  addItem(newItem)
  router.push('/')
}
</script>