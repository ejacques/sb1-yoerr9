<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Add New Attachment</h1>
    <form @submit.prevent="handleSubmit" class="max-w-md">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          v-model="attachment.name"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="compatible_machines" class="block text-gray-700 text-sm font-bold mb-2">Compatible Machines</label>
        <input
          type="text"
          id="compatible_machines"
          v-model="attachment.compatible_machines"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="status" class="block text-gray-700 text-sm font-bold mb-2">Status</label>
        <select
          id="status"
          v-model="attachment.status"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Available">Available</option>
          <option value="In Use">In Use</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="assigned_to" class="block text-gray-700 text-sm font-bold mb-2">Assigned To</label>
        <input
          type="text"
          id="assigned_to"
          v-model="attachment.assigned_to"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Attachment
        </button>
        <router-link
          to="/attachments"
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
const addAttachment = inject('addAttachment')

const attachment = ref({
  name: '',
  compatible_machines: '',
  status: 'Available',
  assigned_to: '',
})

const handleSubmit = () => {
  addAttachment(attachment.value)
  router.push('/attachments')
}
</script>