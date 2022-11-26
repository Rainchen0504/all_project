import YCRequest from '../request'

export function getHotelHotSuggests() {
  return YCRequest.get({
    url: '/home/hotSuggests',
  })
}

export function getHotelCategories() {
  return YCRequest.get({
    url: '/home/categories',
  })
}

export function getHoteHouselList(currentPage) {
  return YCRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage,
    },
  })
}
