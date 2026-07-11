import InformationForm from '@/components/InformationForm.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component:InformationForm}
  ],
})

export default router
