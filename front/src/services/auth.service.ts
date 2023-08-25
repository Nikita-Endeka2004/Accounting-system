import { instance } from "../api/axios.api";
import { IResponUserData, IUser, IUserData } from "../types/types";

export const AuthService = {
  async registration(userData: IUserData): Promise<IResponUserData | undefined> {
    const {data} = await instance.post<IResponUserData>('user', userData)
    return data
  },
  async login(userData: IUserData): Promise<IUser | undefined> {
    const {data} = await instance.post<IUser>('auth/login', userData)
    return data
  },
  async getProfile(): Promise<IUser | undefined> {
    const {data} = await instance.get<IUser>('auth/profile')
    if (data) {
      return data
    }
  }
}