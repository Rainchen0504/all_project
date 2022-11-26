import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'

//对于这种滚动设置节流比防抖更好
// const throttle = (fn, delay) => {
//   let valid = true
//   return function (...args) {
//     if (!valid) {
//       return
//     }
//     valid = false
//     setTimeout(() => {
//       fn.apply(this, args)
//       valid = true
//     }, delay)
//   }
// }

export default function useScroll() {
  const isReachBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight //元素高度
    scrollTop.value = document.documentElement.scrollTop //滚动高度
    scrollHeight.value = document.documentElement.scrollHeight //内容总高度，包括不可见内容
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log('滚动到底部了')
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
