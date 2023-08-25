export function getTokenFromLocalstorage(): string {
  const data = localStorage.getItem('token')
  const token: string = data ? JSON.parse(data) : ''
  
  return token
}

export function setTokenToLocalstorage(key: string, token: string): void {
  localStorage.setItem(key, JSON.stringify(token))

}

export function removeTokenFromLocalstorage(key: string): void {
  localStorage.removeItem(key)
}