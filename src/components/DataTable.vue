<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead class="bg-gray-200">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr
          v-for="item in data"
          :key="item.id"
          @click="handleRowClick(item)"
          :class="{ 'bg-blue-100': selectedItem?.id === item.id }"
          class="cursor-pointer hover:bg-gray-50"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
          >
            {{ item[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Column {
  key: string
  label: string
}

interface DataItem {
  id: string
  [key: string]: string
}

const props = defineProps<{
  data: DataItem[]
  columns: Column[]
  editRoute: string
}>()

const router = useRouter()
const selectedItem = ref<DataItem | null>(null)

const handleRowClick = (item: DataItem) => {
  if (selectedItem.value?.id === item.id) {
    // If the clicked row is already selected, navigate to the edit page
    router.push(`${props.editRoute}/${item.id}`)
  } else {
    // Otherwise, highlight the row
    selectedItem.value = item
  }
}
</script>