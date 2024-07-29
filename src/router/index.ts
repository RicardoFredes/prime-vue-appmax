import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const base = 'v3'
const history = createWebHistory(base)

const router = createRouter({ history, routes, scrollBehavior: () => ({ left: 0, top: 0 }) })

export default router
