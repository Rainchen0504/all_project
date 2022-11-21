import YCRequest from '../request'

export function getCityAll() {
  return YCRequest.get({
    url: '/city/all',
  })
}
