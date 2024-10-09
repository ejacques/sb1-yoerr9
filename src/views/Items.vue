<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Items</h1>
      <router-link
        to="/add-item"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add New
      </router-link>
    </div>
    <DataTable :data="items" :columns="columns" editRoute="/edit-item" />
  </div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import DataTable from '../components/DataTable.vue'

const items = inject('items')

const columns = ref([
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'category', label: 'Category' },
  { key: 'color', label: 'Color' },
])
</script>