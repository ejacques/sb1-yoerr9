<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Attachments</h1>
      <router-link
        to="/add-attachment"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add New
      </router-link>
    </div>
    <DataTable :data="attachmentsData" :columns="columns" editRoute="/edit-attachment" />
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import DataTable from '../components/DataTable.vue'

const attachmentsData = ref([
  {
    attachment_id: '1',
    name: 'Excavator Bucket',
    compatible_machines: 'Excavator',
    status: 'Available',
    assigned_to: '-'
  },
  {
    attachment_id: '2',
    name: 'Bulldozer Blade',
    compatible_machines: 'Bulldozer',
    status: 'In Use',
    assigned_to: 'BD500'
  },
])

const columns = ref([
  { key: 'attachment_id', label: 'Attachment ID' },
  { key: 'name', label: 'Name' },
  { key: 'compatible_machines', label: 'Compatible Machines' },
  { key: 'status', label: 'Status' },
  { key: 'assigned_to', label: 'Assigned To' },
])

const updateAttachment = (updatedAttachment) => {
  const index = attachmentsData.value.findIndex(attachment => attachment.attachment_id === updatedAttachment.attachment_id)
  if (index !== -1) {
    attachmentsData.value[index] = updatedAttachment
  }
}

const addAttachment = (newAttachment) => {
  const newId = (parseInt(attachmentsData.value[attachmentsData.value.length - 1].attachment_id) + 1).toString()
  attachmentsData.value.push({ ...newAttachment, attachment_id: newId })
}

provide('attachments', attachmentsData)
provide('updateAttachment', updateAttachment)
provide('addAttachment', addAttachment)
</script>