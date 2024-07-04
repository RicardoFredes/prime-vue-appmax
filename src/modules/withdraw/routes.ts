export const withdrawRoutes = [
  {
    path: '/withdraw/bank-accounts',
    name: 'bank-accounts',
    component: () => import('./bank-accounts/BankAccountsView.vue'),
    meta: {
      title: 'Contas Bancárias'
    }
  }
]
