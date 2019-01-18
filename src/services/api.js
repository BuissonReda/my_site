import { HTTP } from '../components/http/index'

export default class Api {
  get () {
    const requestUrl = 'all'

    return HTTP.get(requestUrl)
  }
}