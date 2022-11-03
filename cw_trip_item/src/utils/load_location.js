const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        console.log('获取位置', res)
        resolve(res)
      },
      (err) => {
        reject(err)
      },
      {
        timeout: 10000,
        maximumAge: 0,
        enableHighAccuracy: true,
      },
    )
  })
}

export { getLocation }
