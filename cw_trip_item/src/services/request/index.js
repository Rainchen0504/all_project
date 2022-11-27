import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

import useMainStore from '@/stores/modules/main'
const mainStore = useMainStore()

class YCRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })

    this.instance.interceptors.request.use(
      (config) => {
        mainStore.isLoading = true
        return config
      },
      (err) => {
        return err
      },
    )
    this.instance.interceptors.response.use(
      (res) => {
        mainStore.isLoading = false
        return res
      },
      (err) => {
        mainStore.isLoading = false
        return err
      },
    )
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
