import { defineComponent, Ref, ref } from 'vue'

// 引入开源项目，用js写css
import { createUseStyles } from 'vue-jss'

//引入用monaco写的组件
import MonacoEditor from './components/MonacoEditor'

const toJson = (params: any) => {
  //保留格式的json转换
  return JSON.stringify(params, null, 2)
}

const schema = {
  // schema规则
  type: 'string',
}

const useStyles = createUseStyles({
  // 写样式
  editor: {
    minHeight: 400,
  },
})

// h函数开发
export default defineComponent({
  setup() {
    //获取响应式的schema
    const schemaRef: Ref<any> = ref(schema)

    const handleCodeChange = (code: string) => {
      // 当在页面修改了code后会触发
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (e) {
        schemaRef.value = schema
      }
    }

    const classesRef = useStyles()
    const classes = classesRef.value
    const code = toJson(schemaRef.value)
    return () => (
      <div id="app">
        <div>这是首页</div>
        <MonacoEditor
          code={code}
          onChange={handleCodeChange}
          title="Schema"
          class={classes.editor}
        />
      </div>
    )
  },
})
