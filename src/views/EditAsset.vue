<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Edit Asset</h1>
    <form v-if="asset" @submit.prevent="handleSubmit" class="max-w-md">
      <!-- ... (rest of the form fields remain unchanged) ... -->
    </form>
    <p v-else>Loading asset data...</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const assets = inject('assets')
const updateAsset = inject('updateAsset')

const asset = ref(null)

onMounted(() => {
  if (assets && assets.value) {
    const assetId = route.params.id as string
    const foundAsset = assets.value.find(a => a.asset_id === assetId)
    if (foundAsset) {
      asset.value = { ...foundAsset }
    } else {
      router.push('/assets')
    }
  } else {
    console.error('Assets data is not available')
    router.push('/assets')
  }
})

const handleSubmit = () => {
  if (asset.value && updateAsset) {
    updateAsset(asset.value)
    router.push('/assets')
  }
}
</script>