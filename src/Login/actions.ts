import * as api from '@/models/api'
import { FetchTokenResponse } from '@/models/types'
import { RootState } from '@/store'
import { AxiosError } from 'axios'
import actionCreatorFactory from 'typescript-fsa'
import { asyncFactory } from 'typescript-fsa-redux-thunk'


const actionCreator = actionCreatorFactory('Login')

const createAsync = asyncFactory<RootState>(actionCreator)

export const signIn = createAsync<void, FetchTokenResponse, AxiosError>(
  'signIn',
  async (params, _, getState) => api.fetchToken(getState().login),
)
export const setUsername = actionCreator<string>('setUsername')

export const setPassword = actionCreator<string>('setPassword')
