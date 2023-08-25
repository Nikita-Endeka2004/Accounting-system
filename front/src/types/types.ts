export interface IUserData {
  email: string
  password: string
}

export interface IUser {
  id: number
  email: string
  token: string
}

export interface IResponUser {
  email: string
  id: number
  createdAt: string
  updatedAt: string
  password: string
}

export interface IResponUserData {
  token: string
  user: IResponUser
}

export interface ICategory {
  title: string
  id: number
  createdAt: string
  updateAt: string
  wallets: []
}

export interface IResponseWalletLoader {
  categories: ICategory[]
}