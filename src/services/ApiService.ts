import axios from 'axios'
import UserTokenService from './UserTokenService'

const IS_LOCAL = true

const BFF_API_FORWARD = 'https://bff-main.sandboxappmax.com.br/api/forward/'
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://dev-sandbox.appmax.com.br/'
const baseURL = IS_LOCAL ? BFF_API_FORWARD : import.meta.env.VITE_API_BASE_URL

const apiKey = import.meta.env.VITE_API_KEY

const ApiService = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Api-Key': apiKey,
    'X-Requested-With': 'XMLHttpRequest'
  }
})

ApiService.interceptors.request.use((config) => {
  const userToken = UserTokenService.get()
  if (userToken) {
    config.headers.setAuthorization(`Bearer ${userToken}`)
  }

  if (IS_LOCAL) {
    config.headers['X-Forward-Url'] = API_BASE_URL
  }

  return config
})

export default ApiService
