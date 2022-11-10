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

  //   setup() {
  //     const count = ref(0)
  //     const inc = () => {
  //       count.value++
  //     }
  //     return () => <div onClick={withModifiers(inc, ['self'])}>{count.value}</div>
  //   },
})

export default App

import childProps from './ChildProps'
export default defineComponent({
  name: 'parent',
  components: { childProps },
  setup() {
    return () => (
      <child-props
        num={5}
        msg={'这里是msg'}
        isIfBool={true}
        isShowBool={true}
        // list={['one', 'two', 'three']}
        list={[{ name: 'one' }, { name: 'two' }, { name: 'three' }]}
        obj={{ name: '张三', age: 16, gender: '男生' }}
      />
    )
  },
})
