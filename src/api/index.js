import { constants } from '../config'
import testRouter from './router/test-router'
import authRouter from './router/auth.router'

export const api = () => {
  return [
    { path: `${constants.BASE_API}/test`, controller: testRouter },
    { path: `${constants.BASE_API}/auth`, controller: authRouter }
  ]
}
