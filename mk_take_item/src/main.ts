import { createApp, defineComponent, createVNode, h, ref } from 'vue'
// import App from './App.vue'
import App from './App'

// import son_com from '../src/components/SonCom.vue'
// h函数开发
// const App = defineComponent({
//   setup() {
//     const numbeef = ref(1)
//     const name = ref('张雨晨')

//     //在这里声明变量会因为闭包的特性在return中任意位置访问到
//     return () => {
//       const number = numbeef.value
//       return h('div', { id: 'app' }, [
//         '哈哈哈',
//         createVNode(son_com, {
//           name: name.value,
//           age: number,
//         }),
//       ])
//     }
//   },
// })

createApp(App).mount('#app')
