import { authRoutes } from '@/modules/auth/routes'
import { withdrawRoutes } from '@/modules/withdraw/routes'
import MainLayout from '@/layouts/MainLayout.vue'

export default [
  ...authRoutes,
  {
    path: '/',
    component: MainLayout,
    children: [...withdrawRoutes]
  }
]
