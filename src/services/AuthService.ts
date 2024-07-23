import { snakeToCamelCase } from '@/helpers/obj'
import ApiService from './ApiService'
import BffService from './BFFService'
import UserTokenService from './UserTokenService'

type SidebarItem = { label: string; href: string; icon: string }
type NavbarItem = { name: string }
type Profile = { id: number; name: string }
type Role = { id: number; name: string }

type FacematchResponse = {
  completed: boolean
  unico_disabled: boolean
  validating: boolean
  expired_validation: boolean
}

type Facematch = {
  completed: boolean
  unicoDisabled: boolean
  validating: boolean
  expiredValidation: boolean
}

type UserPermissionsResponse = {
  permissions: string[]
  navbar_available_options: NavbarItem[]
  sidebar_menu_list: SidebarItem[]
  profile: Profile
  roles: Role[]
  has_appcall: boolean
  facematch: FacematchResponse
  new_dashboard_allowed: boolean
  international_feature_allowed: boolean
}

type UserPermissionsApiResponse = {
  data: UserPermissionsResponse
}

type UserPermissions = {
  permissions: string[]
  navbarAvailableOptions: NavbarItem[]
  sidebarMenuList: SidebarItem[]
  profile: Profile
  roles: Role[]
  hasAppcall: boolean
  facematch: Facematch
  newDashboardAllowed: boolean
  internationalFeatureAllowed: boolean
}

type Me = {
  id: number
  referrerCommissionSetupId: null | number
  name: string
  nickname: string
  email: string
  phone: string | null
  cpf: string | null
  evoluxLogin: string
  cashoutCurrencyId: number
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  affiliateId: number | null
  configCommissionGroupId: number | null
  locale: string
  typeId: number
  currencyId: number
  isEmployee: number
  pageLimit: number
  limitRefundRequestPerHour: number
  limitRefundRequestPerDay: number
  isSalesRecovery: number
  activeSaleProfileId: number | null
  squadId: number | null
  intercomEnabled: number
  multiCompanyBalance: number
  createdBy: number
  userDepartmentId: number
  useNewWithdraw: boolean
  withdrawMigratedAt: string | null
  producerSinceDate: string | null
  showNpsWidget: number
  firstBalanceDate: string | null
  dateOfBirth: string | null
  dateAutoPermission: string | null
  firstWithdrawalDate: string | null
  approvedPricing: number
  businessModel: string | null
  businessModelOther: string | null
  withdrawV2Enabled: boolean
}

type User = UserPermissions & Me

export class AuthService {
  private accessToken: string | null = null
  user: User | null = null

  constructor(
    private readonly apiService = ApiService,
    private readonly bffService = BffService
  ) {
    // this.initialize()
  }

  async login(email: string, password: string) {
    const { data } = await this.bffService.post('/api/auth/login', { email, password })
    this.accessToken = data.accessToken
    UserTokenService.set(data.accessToken)
    return await this.logged()
  }

  async logged() {
    const promises = [this.permissions(), this.me()]
    const [permissions, me] = await Promise.all(promises)
    const user = { ...permissions, ...me }
    this.user = user
    return user
  }

  async logout() {
    await this.bffService.post('/auth/logout')
    this.accessToken = null
    UserTokenService.clear()
  }

  async initialize() {
    const accessToken = UserTokenService.get()
    if (accessToken) {
      this.accessToken = accessToken
      this.logged()
    }
  }

  isAuthenticated() {
    return true
    // return !!this.accessToken
  }

  getAccessToken() {
    return this.accessToken
  }

  private async permissions(): Promise<UserPermissions> {
    const route = '/api/users/permissions'
    const response = await this.apiService.get<UserPermissionsApiResponse>(route)
    return snakeToCamelCase(response.data.data)
  }

  private async me() {
    // const route = "/api/users/authenticated";
    const route = '/api/auth-jwt/me'
    const response = await this.apiService.get(route)
    return snakeToCamelCase(response.data)
  }
}

export default new AuthService()
