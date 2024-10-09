import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Items from './views/Items.vue'
import Locations from './views/Locations.vue'
import Projects from './views/Projects.vue'
import Settings from './views/Settings.vue'
import AddItem from './views/AddItem.vue'
import EditItem from './views/EditItem.vue'
import Assets from './views/Assets.vue'
import Attachments from './views/Attachments.vue'
import AddAsset from './views/AddAsset.vue'
import EditAsset from './views/EditAsset.vue'
import AddAttachment from './views/AddAttachment.vue'
import EditAttachment from './views/EditAttachment.vue'
import './index.css'

const routes = [
  { path: '/', component: Items },
  { path: '/locations', component: Locations },
  { path: '/projects', component: Projects },
  { path: '/settings', component: Settings },
  { path: '/add-item', component: AddItem },
  { path: '/edit-item/:id', component: EditItem },
  { path: '/assets', component: Assets },
  { path: '/attachments', component: Attachments },
  { path: '/add-asset', component: AddAsset },
  { path: '/edit-asset/:id', component: EditAsset },
  { path: '/add-attachment', component: AddAttachment },
  { path: '/edit-attachment/:id', component: EditAttachment },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')