import { defineComponent, ref } from 'vue'
import Add from './Add'

// h函数开发
const App = defineComponent({
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const addFunc = ref(() => {})
    const getChildFunc = (add: any) => {
      addFunc.value = add
      console.log('获取子组件报漏的方法', addFunc)
    }
    return () => (
      <div>
        父组件
        <Add onLoad={getChildFunc} />
        <hr></hr>
        <button onClick={addFunc.value}>父组件调用子组件方法</button>
      </div>
    )
  },
})

export default App
