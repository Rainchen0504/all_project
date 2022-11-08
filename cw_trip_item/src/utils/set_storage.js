//封装sessionStorage和localStorage
class Storage {
  constructor(type) {
    if (type === 'localStorage') {
      this.memory = window.localStorage
    } else {
      this.memory = window.seesionStorage
    }
  }

  //设置缓存
  setItem(param) {
    const defaultParams = {
      name: '', //键
      value: '', //值
      expired: '', //过期时间
      startTime: new Date().getTime(), //记录传入的时间戳
    }
    const options = {}
    Object.assign(options, defaultParams, param)
    if (options.expired) {
      //如果设置过期时间就把整个options存进去
      this.memory.setItem(options.name, JSON.stringify(options))
    } else {
      //如果没设置过期时间就正常保存
      const type = Object.prototype.toString.call(options.value)
      //如果类型是对象或者数组，先转成字符串
      if (type === '[object Object]' || type === '[object Array]') {
        options.value = JSON.stringify(options.value)
      }
      this.memory.setItem(options.name, options.value)
    }
  }

  //取值
  getItem(name) {
    let item = this.memory.getItem(name)
    if (!item || item == 'null' || item == 'undefined') return
    try {
      item = JSON.parse(item)
    } catch {
      item = item
    }
    //判断过期时间
    if (item.startTime) {
      const now = new Date().getTime()
      if (now - item.startTime > item.expired) {
        this.memory.removeItem(name)
        return false
      } else {
        return item.value
      }
    } else {
      return item
    }
  }

  //清除缓存
  removeItem(name) {
    this.memory.removeItem(name)
  }

  //清除所有缓存
  clear() {
    this.memory.clear()
  }
}

const localMemory = new Storage('localStorage')
const sessionMemory = new Storage('seesionStorage')

export { localMemory, sessionMemory }
