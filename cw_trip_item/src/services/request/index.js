import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

class YCRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })
  }

  request(config) {
    //为了直接返回data数据
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new YCRequest(BASE_URL, TIMEOUT)
