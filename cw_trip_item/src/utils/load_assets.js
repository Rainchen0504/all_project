//vite环境下动态加载本地资源方法
const getAssetURL = (image) => {
  //new URL参数一表示要获取资源的相对路径，参数二表示当前路径的URL
  return new URL(`../assets/img/${image}`, import.meta.url).href
}

export { getAssetURL }
