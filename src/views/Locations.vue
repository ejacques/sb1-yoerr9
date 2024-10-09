<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Locations</h1>
    <DataTable :data="locationsData" :columns="columns" editRoute="/edit-location" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DataTable from '../components/DataTable.vue'

const locationsData = ref([
  { id: '1', name: 'Location 1', type: 'Office' },
  { id: '2', name: 'Location 2', type: 'Warehouse' },
  { id: '3', name: 'Location 3', type: 'Store' },
])

const columns = ref([
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'type', label: 'Type' },
])
</script>