<template>
  <nav class="w-64 bg-white shadow-lg">
    <div class="p-4">
      <h1 class="text-2xl font-bold text-gray-800">Enterprise App</h1>
    </div>
    <ul class="space-y-2 py-4">
      <li v-for="item in navItems" :key="item.name">
        <router-link
          :to="item.path"
          class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
          :class="{ 'bg-gray-200': $route.path === item.path }"
        >
          <component :is="item.icon" class="mr-3 h-5 w-5" />
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <div class="absolute bottom-0 w-64 border-t border-gray-200">
      <router-link
        to="/settings"
        class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
        :class="{ 'bg-gray-200': $route.path === '/settings' }"
      >
        <Settings class="mr-3 h-5 w-5" />
        Settings
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Box, MapPin, Briefcase, Settings, Truck, Wrench } from 'lucide-vue-next'

const navItems = ref([
  { name: 'Items', path: '/', icon: Box },
  { name: 'Locations', path: '/locations', icon: MapPin },
  { name: 'Projects', path: '/projects', icon: Briefcase },
  { name: 'Assets', path: '/assets', icon: Truck },
  { name: 'Attachments', path: '/attachments', icon: Wrench },
])
</script>