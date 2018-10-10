import { FetchTokenResponse, Token, User } from '@/models/types'
import axios from 'axios'
import { unwrap } from './util'

const LOCAL_STORAGE_JWT_KEY = 'regisys_api_key'
const LOCAL_STORAGE_USER_KEY = 'regisys_user_key'

export function parseToken (rawToken: string | null): Token | null {
  if (!rawToken) { return null }
  return new Token(rawToken)
}

export function getToken (): Token | null {
  const rawToken = localStorage.getItem(LOCAL_STORAGE_JWT_KEY)
  return parseToken(rawToken)
}

function getRawToken (): string | null {
  return localStorage.getItem(LOCAL_STORAGE_JWT_KEY)
}

export function getUserData (): User {
  return JSON.parse(unwrap(localStorage.getItem(LOCAL_STORAGE_USER_KEY)))
}

export function setAuthData ({ token, user }: FetchTokenResponse): void {
  localStorage.setItem(LOCAL_STORAGE_JWT_KEY, token)
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user))
}

export function removeAuthData (): void {
  localStorage.removeItem(LOCAL_STORAGE_JWT_KEY)
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
}

export function setTokenIntoApiClient (): void {
  axios.defaults.headers.Authorization = 'JWT ' + getRawToken()
}
