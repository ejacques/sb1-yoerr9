<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Projects</h1>
    <DataTable :data="projectsData" :columns="columns" editRoute="/edit-project" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DataTable from '../components/DataTable.vue'

const projectsData = ref([
  { id: '1', name: 'Project 1', status: 'In Progress' },
  { id: '2', name: 'Project 2', status: 'Completed' },
  { id: '3', name: 'Project 3', status: 'Planning' },
])

const columns = ref([
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status' },
])
</script>