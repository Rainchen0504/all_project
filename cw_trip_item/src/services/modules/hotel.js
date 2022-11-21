import YCRequest from '../request'

export function getHotelHotSuggests() {
  return YCRequest.get({
    url: '/home/hotSuggests',
  })
}
