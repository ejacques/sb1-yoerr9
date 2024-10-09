<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Add New Asset</h1>
    <form @submit.prevent="handleSubmit" class="max-w-md">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          v-model="asset.name"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="type" class="block text-gray-700 text-sm font-bold mb-2">Type</label>
        <input
          type="text"
          id="type"
          v-model="asset.type"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="location" class="block text-gray-700 text-sm font-bold mb-2">Location</label>
        <input
          type="text"
          id="location"
          v-model="asset.location"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="status" class="block text-gray-700 text-sm font-bold mb-2">Status</label>
        <select
          id="status"
          v-model="asset.status"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Available">Available</option>
          <option value="In Use">In Use</option>
          <option value="Under Maintenance">Under Maintenance</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="hours_used" class="block text-gray-700 text-sm font-bold mb-2">Hours Used</label>
        <input
          type="number"
          id="hours_used"
          v-model="asset.hours_used"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="last_maintenance_date" class="block text-gray-700 text-sm font-bold mb-2">Last Maintenance Date</label>
        <input
          type="date"
          id="last_maintenance_date"
          v-model="asset.last_maintenance_date"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="next_maintenance_due" class="block text-gray-700 text-sm font-bold mb-2">Next Maintenance Due</label>
        <input
          type="date"
          id="next_maintenance_due"
          v-model="asset.next_maintenance_due"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="attachments" class="block text-gray-700 text-sm font-bold mb-2">Attachments</label>
        <input
          type="text"
          id="attachments"
          v-model="asset.attachments"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Asset
        </button>
        <router-link
          to="/assets"
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
const addAsset = inject('addAsset')

const asset = ref({
  name: '',
  type: '',
  location: '',
  status: 'Available',
  hours_used: '',
  last_maintenance_date: '',
  next_maintenance_due: '',
  attachments: '',
})

const handleSubmit = () => {
  addAsset(asset.value)
  router.push('/assets')
}
</script>