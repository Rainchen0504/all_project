import YCRequest from '../request'

export function getDetailInfos(id) {
  return YCRequest.get({
    url: '/detail/infos',
    params: {
      houseId: id,
    },
  })
}
