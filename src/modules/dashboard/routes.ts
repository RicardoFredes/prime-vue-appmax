export const dashboardRoutes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('./DashboardView.vue'),
    meta: {
      title: 'Dashboard'
    }
  }
]
