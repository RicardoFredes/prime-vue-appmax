import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const basename = 'v3'
const base = import.meta.env.BASE_URL + basename + '/'

const history = createWebHistory(base)

const router = createRouter({ history, routes, scrollBehavior: () => ({ left: 0, top: 0 }) })

export default router
