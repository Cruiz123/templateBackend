import { constants } from '../config'
import testRouter from './router/test-router'

export const api = () => {
  return [{ path: `${constants.BASE_API}/test`, controller: testRouter }]
}
