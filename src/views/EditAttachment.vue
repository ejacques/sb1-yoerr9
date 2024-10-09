<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Edit Attachment</h1>
    <form v-if="attachment" @submit.prevent="handleSubmit" class="max-w-md">
      <!-- ... (rest of the form fields remain unchanged) ... -->
    </form>
    <p v-else>Loading attachment data...</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const attachments = inject('attachments')
const updateAttachment = inject('updateAttachment')

const attachment = ref(null)

onMounted(() => {
  if (attachments && attachments.value) {
    const attachmentId = route.params.id as string
    const foundAttachment = attachments.value.find(a => a.attachment_id === attachmentId)
    if (foundAttachment) {
      attachment.value = { ...foundAttachment }
    } else {
      router.push('/attachments')
    }
  } else {
    console.error('Attachments data is not available')
    router.push('/attachments')
  }
})

const handleSubmit = () => {
  if (attachment.value && updateAttachment) {
    updateAttachment(attachment.value)
    router.push('/attachments')
  }
}
</script>