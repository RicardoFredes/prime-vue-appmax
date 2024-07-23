import MainLayout from '@/layouts/MainLayout.vue'
import type { RouteRecordRaw } from 'vue-router'

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: () => import('./DashboardView.vue'),
        meta: {
          title: 'Dashboard'
        }
      }
    ]
  }
]
