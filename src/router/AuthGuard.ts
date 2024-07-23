import type { NavigationGuard, RouteLocation } from 'vue-router'
import AuthService from '@/services/AuthService'

const SKIPED_ROUTE_NAMES = ['login', 'register']

const shouldSkipRoute = (to: RouteLocation) => SKIPED_ROUTE_NAMES.includes(String(to.name))

export const authGuard: NavigationGuard = (to, _from, next) => {
  const isAuthenticated = AuthService.isAuthenticated()
  if (shouldSkipRoute(to)) return isAuthenticated ? next({ name: 'dashboard' }) : next()
  return isAuthenticated ? next() : next({ name: 'login' })
}
