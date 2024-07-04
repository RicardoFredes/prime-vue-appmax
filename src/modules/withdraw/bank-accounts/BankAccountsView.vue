<script setup lang="ts">
import AmIcon from '@/components/AmIcon.vue'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Paginator from 'primevue/paginator'

const bankAccounts = [
  {
    id: '1',
    pixKey: '00.000.000/0001-00',
    pixType: 'Pix (PJ)',
    bank: '000 - Nome do banco',
    companyName: 'Nome da empresa',
    document: '00.000.000/0001-00'
  },
  {
    id: '2',
    pixKey: '00.000.000/0001-00',
    pixType: 'Pix (PJ)',
    bank: '000 - Nome do banco',
    companyName: 'Nome da empresa',
    document: '00.000.000/0001-00'
  }
]
</script>

<template>
  <section class="space-y-4">
    <header class="flex flex-col-reverse md:flex-row gap-8 md:items-center justify-between">
      <h3 class="flex items-center gap-1 text-primary-500 font-medium">
        <AmIcon name="place" size="xl" />Contas Nacionais
      </h3>
      <Button size="small"><AmIcon name="add" />Cadastrar nova conta</Button>
    </header>
    <div class="space-y-4 bg-white rounded-lg shadow-sm lg:shadow-none pt-2">
      <DataTable :value="bankAccounts">
        <Column field="pixKey" header="Chave Pix"></Column>
        <Column field="pixType" header="Tipo"></Column>
        <Column field="bank" header="Banco"></Column>
        <Column field="companyName" header="Empresa"></Column>
        <Column field="document" header="CNPJ/CPF"></Column>
        <Column header="">
          <template #body>
            <Button text rounded title="Editar" style="padding: 0.75rem">
              <AmIcon name="edit" />
            </Button>
          </template>
        </Column>
      </DataTable>
      <Paginator :rows="2" :totalRecords="1" />
    </div>
  </section>
</template>
