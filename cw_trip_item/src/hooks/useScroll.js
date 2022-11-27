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

export default function useScroll(elRef) {
  let el = window
  const isReachBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log('滚动到底部了')
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener('scroll', scrollListenerHandler)
  })

  onUnmounted(() => {
    el.removeEventListener('scroll', scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
