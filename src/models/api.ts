import { getUserData } from '@/lib/auth'
import {
  FetchTokenRequest,
  FetchTokenResponse,
  Item,
  ItemReq,
  MutateItemResponse,
  MutateOrderResponse,
  Order,
  OrderAggregateResult,
  OrderReq,
} from '@/models/types'
import axios from 'axios'

// auth

export async function fetchToken (req: FetchTokenRequest): Promise<FetchTokenResponse> {
  const res = await axios.post('/api/auth/token',
    JSON.stringify(req), {
      headers: {'Content-Type': 'application/json'},
    },
  )
  return res.data
}

const client = axios.create({
  baseURL: '/api/',
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

// item

export async function fetchMyItems (): Promise<Item[]> {
  const user = getUserData()
  const resp = await client.get('items/', {
    params: {
      owner: user.id,
    },
  })
  return resp.data
}

export async function fetchAllItems (): Promise<Item[]> {
  const resp = await client.get('items/')
  return resp.data
}

export async function fetchItem (id: number): Promise<Item> {
  const resp = await client.get(`items/${id}/`)
  return resp.data
}

export async function addItem (data: ItemReq): Promise<MutateItemResponse> {
  const resp = await client.post('items/', JSON.stringify(data))
  return resp.data
}

export async function updateItem (id: number, data: ItemReq): Promise<MutateItemResponse> {
  const resp = await client.put(`items/${id}/`, JSON.stringify(data))
  return resp.data
}

export async function deleteItem (id: number): Promise<void> {
  await client.delete(`items/${id}/`)
}

// order

export async function fetchMyOrders (): Promise<Order[]> {
  const user = getUserData()
  const resp = await client.get('orders/', {
    params: {
      item__owner: user.id,
    },
  })
  return resp.data
}

export async function fetchAllOrders (): Promise<Order[]> {
  const resp = await client.get('orders/')
  return resp.data
}

export async function fetchOrdersAggregation (from: Date, to: Date): Promise<OrderAggregateResult> {
  const resp = await client.get('orders/aggregate/', {
    params: {
      from: dateTimeToStr(from),
      to: dateTimeToStr(to),
    },
  })
  return resp.data
}

export async function addOrder (data: OrderReq): Promise<MutateOrderResponse> {
  const resp = await client.post('orders/', JSON.stringify(data))
  return resp.data
}

// helper func

function dateTimeToStr (dt: Date) {
  return `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`
}
