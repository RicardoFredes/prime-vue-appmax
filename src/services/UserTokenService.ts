const USER_TOKEN_KEY = 'user_token'

const UserTokenService = {
  get() {
    return localStorage.getItem(USER_TOKEN_KEY)
  },
  set(token: string) {
    localStorage.setItem(USER_TOKEN_KEY, token)
  },
  clear() {
    localStorage.removeItem(USER_TOKEN_KEY)
  }
}

export default UserTokenService
