import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup(props, { emit }) {
    const count = ref(0)
    const childFunc = () => {
      count.value++
    }
    emit('load', childFunc)
    return () => (
      <div>
        <p>{count.value}</p>
        <button onClick={childFunc}>我是子组件</button>
      </div>
    )
  },
})
