export interface User {
  id: number
  username: string
  is_staff: boolean
}

export interface FetchTokenRequest {
  username: string
  password: string
}

export interface FetchTokenResponse {
  user: User
  token: string
}

export class Token {
  userId: number
  username: string
  exp: number
  email: string

  constructor (rawToken: string) {
    const token = JSON.parse(
      window.atob(
        rawToken.split('.')[1]
          .replace('-', '+')
          .replace('_', '/'),
      ),
    )
    this.userId = token.user_id
    this.username = token.username
    this.exp = token.exp
    this.email = token.email
  }

  isValid (): boolean {
    return Date.now() / 1000 < this.exp
  }
}

// item
export interface Item {
  id: number
  owner: User
  name: string
  price: number
  quantity: number
}

export interface ItemReq {
  owner: number
  name: string
  price: number
  quantity: number
}

export interface MutateItemResponse {
  id: number
  owner: number
  name: string
  price: number
  quantity: number
}

// order
export interface Order {
  id: number
  item: Item
  price: number
  quantity: number
  created_at: Date
}

export interface OrderReq {
  price: number
  quantity: number
  item: number
}

export interface MutateOrderResponse {
  id: number
  item: number
  price: number
  quantity: number
  created_at: Date
}

export interface OrderAggregateResult {
  sales: number
  username: string
}
