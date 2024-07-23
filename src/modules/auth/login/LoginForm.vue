<script setup lang="ts">
import { computed, ref, reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import AmIcon from '@/components/AmIcon.vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import AuthService from '@/services/AuthService'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const FAKER_ROUTE_LINK = '/withdraw/bank-accounts'

const router = useRouter()

const isSubmitting = ref(false)
const formTouched = ref(false)

const username = reactive({
  value: ''
})

const password = reactive({
  value: '',
  visible: false
})

const usernameError = computed(() => {
  if (!formTouched.value) return ''
  if (!username.value) return 'Campo obrigatório'
  if (!/.+@.+\..+/.test(username.value)) return 'E-mail inválido'
  return ''
})
const passwordError = computed(() => {
  if (!formTouched.value) return ''
  if (!password.value) return 'Campo obrigatório'
  return ''
})

const isValid = computed(() => {
  if (isSubmitting.value) return false
  if (usernameError.value || passwordError.value) return false
  return true
})

const login = async () => {
  formTouched.value = true
  if (!isValid.value) return
  try {
    isSubmitting.value = true
    await AuthService.login(username.value, password.value)
    router.push({ name: 'dashboard' })
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Não foi possível prosseguir',
      detail: 'Verifique se o e-mail e a senha estão corretos',
      life: 5000
    })
  } finally {
    isSubmitting.value = false
  }
}

const togglePasswordVisibility = () => {
  if (isSubmitting.value) return
  password.visible = !password.visible
}
</script>

<template>
  <form @submit.prevent="login" class="w-[300px] grid gap-6">
    <div class="grid gap-1">
      <label for="username" class="font-medium mb-1">E-mail</label>
      <InputText
        id="username"
        name="username"
        size="small"
        placeholder="Digite seu e-mail"
        :class="{ 'opacity-50': isSubmitting }"
        v-model="username.value"
        :invalid="!!usernameError"
        :disabled="isSubmitting"
      />
      <span v-if="usernameError" id="username-help" class="text-red-600 flex items-center gap-1"
        ><AmIcon name="error" /> <small>{{ usernameError }}</small></span
      >
    </div>
    <div class="grid gap-1">
      <label for="password" class="font-medium mb-1">Senha</label>
      <div class="relative flex items-center justify-end">
        <InputText
          class="w-full"
          id="password"
          name="password"
          size="small"
          placeholder="Digite sua senha"
          v-model="password.value"
          :type="password.visible ? 'text' : 'password'"
          :invalid="!!passwordError"
          :disabled="isSubmitting"
        />
        <AmIcon
          class="absolute text-primary-500 p-4 opacity-50"
          :class="{
            'cursor-pointer hover:opacity-100 transition': !isSubmitting,
            'cursor-not-allowed': isSubmitting
          }"
          :name="password.visible ? 'visibility_off' : 'visibility'"
          @click="togglePasswordVisibility"
        />
      </div>
      <span v-if="passwordError" id="password-help" class="text-red-600 flex items-center gap-1"
        ><AmIcon name="error" /> <small>{{ passwordError }}</small></span
      >
    </div>
    <RouterLink :to="FAKER_ROUTE_LINK" class="mt-2 text-sm text-zinc-500 hover:underline"
      >Esqueci minha senha
    </RouterLink>
    <Button class="w-full mt-2" type="submit" size="small" :disabled="!isValid">
      <span v-if="isSubmitting">
        <AmIcon name="workspaces_filled" size="xl" class="absolute animate-spin" />&nbsp;
      </span>
      <span v-else>Acessar</span>
    </Button>
    <RouterLink
      :to="FAKER_ROUTE_LINK"
      class="mt-2 text-sm font-medium text-primary-500 hover:underline text-center"
      >Criar conta agora</RouterLink
    >
  </form>
</template>
