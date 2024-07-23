<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import AmLogo from '@/components/AmLogo.vue'
import AmIcon from '@/components/AmIcon.vue'

type Item = {
  title: string
  icon: string
  to: string
}

const items: Item[] = [
  { title: 'Página inicial', icon: 'home', to: '/' },
  { title: 'Pedidos', icon: 'shopping_cart', to: '/404' },
  { title: 'Link de pagamentos', icon: 'link', to: '/404' },
  { title: 'Saque', icon: 'local_atm', to: '/withdraw/bank-accounts' },
  { title: 'Recuperar vendas', icon: 'currency_exchange', to: '/404' }
]

const route = useRoute()

const isActive = (item: Item) => {
  return route.path === item.to
}

const closeMenu = () => {
  document.body.dataset.menuOpen = 'false'
}
</script>

<template>
  <div class="am-sideber-backdrop" @click="closeMenu"></div>
  <aside
    :class="[
      'min-w-[220px] bg-white shadow-lg',
      'fixed top-0 left-0 bottom-0 z-50 lg:static lg:z-auto',
      'lg:translate-x-0 translate-x-[-105%] transition-transform ease-in-out duration-300'
    ]"
  >
    <div class="top-0 sticky">
      <RouterLink class="px-4 py-8 block" to="/">
        <AmLogo class="h-7 w-32" />
      </RouterLink>
      <nav>
        <ul>
          <li v-for="item in items" :key="item.title">
            <RouterLink
              :to="item.to"
              :data-active="isActive(item) ? 'active' : 'inactive'"
              :class="[
                'flex items-center p-4 space-x-4 text-sm font-medium text-gray-600 transition',
                'hover:bg-gray-100',
                'data-[active=active]:bg-primary-50 data-[active=active]:text-primary-500'
              ]"
            >
              <AmIcon :name="item.icon" size="xl" />
              <span>{{ item.title }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<style lang="scss">
.am-sideber-backdrop {
  display: none;
}
body[data-menu-open='true'] {
  aside {
    transform: translateX(0);
  }
  .am-sideber-backdrop {
    @apply fixed inset-0 bg-black bg-opacity-50 z-40 block;
  }
}
</style>
