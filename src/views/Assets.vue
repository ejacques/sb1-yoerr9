<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Assets (Machines)</h1>
      <router-link
        to="/add-asset"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add New
      </router-link>
    </div>
    <DataTable :data="assetsData" :columns="columns" editRoute="/edit-asset" />
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import DataTable from '../components/DataTable.vue'

const assetsData = ref([
  {
    asset_id: '1',
    name: 'Excavator XL2000',
    type: 'Excavator',
    location: 'Site A',
    status: 'Available',
    hours_used: '1200',
    last_maintenance_date: '2023-05-15',
    next_maintenance_due: '2023-08-15',
    attachments: 'Bucket, Hammer'
  },
  {
    asset_id: '2',
    name: 'Bulldozer BD500',
    type: 'Bulldozer',
    location: 'Site B',
    status: 'In Use',
    hours_used: '800',
    last_maintenance_date: '2023-06-01',
    next_maintenance_due: '2023-09-01',
    attachments: 'Blade, Ripper'
  },
])

const columns = ref([
  { key: 'asset_id', label: 'Asset ID' },
  { key: 'name', label: 'Name' },
  { key: 'type', label: 'Type' },
  { key: 'location', label: 'Location' },
  { key: 'status', label: 'Status' },
  { key: 'hours_used', label: 'Hours Used' },
  { key: 'last_maintenance_date', label: 'Last Maintenance' },
  { key: 'next_maintenance_due', label: 'Next Maintenance Due' },
  { key: 'attachments', label: 'Attachments' },
])

const updateAsset = (updatedAsset) => {
  const index = assetsData.value.findIndex(asset => asset.asset_id === updatedAsset.asset_id)
  if (index !== -1) {
    assetsData.value[index] = updatedAsset
  }
}

const addAsset = (newAsset) => {
  const newId = (parseInt(assetsData.value[assetsData.value.length - 1].asset_id) + 1).toString()
  assetsData.value.push({ ...newAsset, asset_id: newId })
}

provide('assets', assetsData)
provide('updateAsset', updateAsset)
provide('addAsset', addAsset)
</script>