<script lang="ts" setup>
import AmCard from '@/components/AmCard.vue'
import AmIcon from '@/components/AmIcon.vue'
import Button from 'primevue/button'
import Chart from 'primevue/chart'
import Knob from 'primevue/knob'
import { computed } from 'vue'

const chartOptions = computed(() => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')
  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: {
            weight: 500
          }
        },
        grid: {
          display: false,
          drawBorder: false
        }
      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false
        }
      }
    }
  }
})

const chartData = computed(() => {
  return {
    labels: ['17/07', '18/07', '19/07', '20/07', '21/07', '22/07', '23/07'],
    datasets: [
      {
        label: 'Receita',
        backgroundColor: 'rgba(155, 106, 250, .6)',
        borderColor: 'rgba(155, 106, 250, 1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }
})
</script>

<template>
  <h1 class="text-2xl lg:text-3xl font-medium">Bem-vindo(a)</h1>
  <h2 class="text-gray-700">Resumos das vendas</h2>
  <main class="grid lg:grid-cols-6 mt-4 gap-4">
    <AmCard class="col-span-2 space-y-4">
      <h3 class="font-medium">Disponível para Antecipar Hoje</h3>
      <p class="text-2xl font-medium">R$ 9.00,14</p>
      <Button size="small">Antecipar</Button>
    </AmCard>
    <AmCard class="col-span-2 space-y-6">
      <h3 class="font-medium">Formas de pagamento</h3>
      <ul class="space-y-3 text-xs">
        <li class="flex items-center">
          <AmIcon name="credit_card" class="mr-2" />
          <span>Cartão: 0</span>
          <span class="ml-auto">R$ 0,00</span>
        </li>
        <li class="flex items-center">
          <AmIcon name="pix" class="mr-2" />
          <span>Pix: 0</span>
          <span class="ml-auto">R$ 0,00</span>
        </li>
        <li class="flex items-center">
          <AmIcon name="local_atm" class="mr-2" />
          <span>Boleto: 0</span>
          <span class="ml-auto">R$ 0,00</span>
        </li>
      </ul>
    </AmCard>
    <AmCard class="col-span-2 space-y-6">
      <h3 class="font-medium">Reembolsos</h3>
      <ul class="space-y-3 text-xs">
        <li class="flex items-center">
          <AmIcon name="sync_alt" class="mr-2" />
          <span>Estorno: 0</span>
          <span class="ml-auto">R$ 0,00</span>
        </li>
        <li class="flex items-center">
          <AmIcon name="sync_disabled" class="mr-2" />
          <span>Chargebacks: 0</span>
          <span class="ml-auto">R$ 0,00</span>
        </li>
        <li class="flex items-center">
          <AmIcon name="manage_search" class="mr-2" />
          <span>Antifraude: 0</span>
          <span class="ml-auto">R$ 0,00</span>
        </li>
      </ul>
    </AmCard>
    <AmCard class="col-span-2 space-y-4">
      <h3 class="font-medium">Total de vendas</h3>
      <p class="text-2xl font-medium">R$ 0,00</p>
      <p class="text-gray-800 text-xs">Número de vendas: 0</p>
    </AmCard>
    <AmCard class="col-span-2 space-y-6">
      <h3 class="font-medium">Taxa de Aprovação</h3>
      <div class="flex gap-2 justify-between">
        <div class="flex items-center flex-col">
          <Knob :modelValue="10" valueTemplate="{value}%" :strokeWidth="10" :size="64" />
          <span class="text-xs">Cartão</span>
        </div>
        <div class="flex items-center flex-col">
          <Knob :modelValue="55" valueTemplate="{value}%" :strokeWidth="10" :size="64" />
          <span class="text-xs">Pix</span>
        </div>
        <div class="flex items-center flex-col">
          <Knob :modelValue="0" valueTemplate="{value}%" :strokeWidth="10" :size="64" />
          <span class="text-xs">Boleto</span>
        </div>
      </div>
    </AmCard>
    <AmCard class="col-span-2">
      <h3 class="font-medium mb-4">Recuperação com IA</h3>
      <p class="text-2xl font-medium">
        R$ 0,00 <AmIcon name="trending_up" size="xl" class="text-primary-500" />
      </p>
      <div class="flex items-center justify-between">
        <p class="text-gray-800 text-xs flex gap-2 items-center">
          <span class="h-4 w-4 bg-primary-500 inline-block rounded-sm" /> Vendas recuperadas: 0
        </p>
        <div class="flex items-center flex-col">
          <Knob :modelValue="0" valueTemplate="{value}%" :strokeWidth="10" :size="64" />
        </div>
      </div>
    </AmCard>
    <AmCard class="col-span-6 space-y-6">
      <h3 class="font-medium">Gráfico de Receita</h3>
      <p class="text-gray-800 text-xs">Últimos 7 dias</p>
      <Chart type="bar" :data="chartData" :options="chartOptions" class="h-60" />
    </AmCard>
  </main>
</template>
