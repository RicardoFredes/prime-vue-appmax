import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://bff-main.sandboxappmax.com.br/'

const BffService = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Api-Key': API_KEY,
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default BffService
