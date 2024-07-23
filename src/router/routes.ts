import type { RouteRecordRaw } from 'vue-router'
import { authRoutes } from '@/modules/auth/routes'
import { withdrawRoutes } from '@/modules/withdraw/routes'
import MainLayout from '@/layouts/MainLayout.vue'
import { authGuard } from './AuthGuard'
import { dashboardRoutes } from '@/modules/dashboard/routes'

const routes: RouteRecordRaw[] = [
  ...authRoutes,
  {
    path: '/',
    component: MainLayout,
    children: [...dashboardRoutes, ...withdrawRoutes]
  }
]

const GUARDS = [authGuard]

const applyGuards = (route: RouteRecordRaw) => ({
  ...route,
  beforeEnter: GUARDS.concat(route.beforeEnter || [])
})

export default routes.map(applyGuards)
