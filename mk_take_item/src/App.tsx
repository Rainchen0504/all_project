import { defineComponent, ref, Ref, reactive, watchEffect } from 'vue'
import { createUseStyles } from 'vue-jss'

//编辑器组件
import MonacoEditor from './components/MonacoEditor'

//引入左侧三个组件的配置数据
import demos from './demos'

//引入右侧SchemaForm表单组件
import SchemaForm from '../lib'

//在lib中export出的类型变量
type Schema = any
type UISchema = any

//修改后的数据保留数据格式转换
const toJson = (data: any) => {
  return JSON.stringify(data, null, 2)
}

//编写样式
const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '1200px',
    margin: '0 auto',
  },
  menu: {
    marginBottom: 20,
  },
  code: {
    width: 700,
    flexShrink: 0,
  },
  codePanel: {
    minHeight: 380,
    marginBottom: 20,
  },
  uiAndValue: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > *': {
      width: '48%',
    },
  },
  content: {
    display: 'flex',
  },
  form: {
    padding: '0 10px',
    flexGrow: 1,
  },
  menuButton: {
    appearance: 'none',
    borderWidth: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'inline-block',
    padding: 10,
    borderRadius: 5,
    '&:hover': {
      background: '#efefef',
    },
  },
  menuSelected: {
    background: '#337ab7',
    color: '#fff',
    '&:hover': {
      background: '#1890FF',
    },
  },
})

export default defineComponent({
  setup() {
    //当前更改的编辑模块索引
    const selectedRef: Ref<number> = ref(0)

    const demo: {
      schema: Schema | null
      data: any
      uiSchema: UISchema | null
      schemaCode: string
      dataCode: string
      uiSchemaCode: string
    } = reactive({
      schema: null,
      data: {},
      uiSchema: {},
      schemaCode: '',
      dataCode: '',
      uiSchemaCode: '',
    })

    watchEffect(() => {
      const index = selectedRef.value
      const d = demos[index]
      //分别对应左侧三个json编辑器的配置对象和转成json后的数据
      //schema是上面的表单，表示表单的类型和特性
      //uiSchema是下面左侧的表单，表示样式
      //data是下面右侧的表单，表示数据
      demo.schema = d.schema
      demo.data = d.default
      demo.uiSchema = d.uiSchema
      demo.schemaCode = toJson(d.schema)
      demo.dataCode = toJson(d.default)
      demo.uiSchemaCode = toJson(d.uiSchema)
    })

    const methodRef: Ref<any> = ref()

    const classesRef = useStyles()

    const handleChange = (v: any) => {
      demo.data = v
      demo.dataCode = toJson(v)
    }

    function handleCodeChange(filed: 'schema' | 'data' | 'uiSchema', value: string) {
      try {
        const json = JSON.parse(value)
        demo[filed] = json
        ;(demo as any)[`${filed}Code`] = value
      } catch (err) {
        // some thing
      }
    }

    const handleSchemaChange = (v: string) => handleCodeChange('schema', v)
    const handleDataChange = (v: string) => handleCodeChange('data', v)
    const handleUISchemaChange = (v: string) => handleCodeChange('uiSchema', v)

    return () => {
      const classes = classesRef.value
      const selected = selectedRef.value

      return (
        // <StyleThemeProvider>
        // <VJSFThemeProvider theme={theme as any}>
        <div class={classes.container}>
          <div class={classes.menu}>
            <h2>Vue3 JsonSchema Form</h2>
            <div>
              {demos.map((demo, index) => (
                <button
                  class={{
                    [classes.menuButton]: true,
                    [classes.menuSelected]: index === selected,
                  }}
                  onClick={() => (selectedRef.value = index)}
                >
                  {demo.name}
                </button>
              ))}
            </div>
          </div>
          <div class={classes.content}>
            <div class={classes.code}>
              <MonacoEditor
                code={demo.schemaCode}
                class={classes.codePanel}
                onChange={handleSchemaChange}
                title="Schema"
              />
              <div class={classes.uiAndValue}>
                <MonacoEditor
                  code={demo.uiSchemaCode}
                  class={classes.codePanel}
                  onChange={handleUISchemaChange}
                  title="UISchema"
                />
                <MonacoEditor
                  code={demo.dataCode}
                  class={classes.codePanel}
                  onChange={handleDataChange}
                  title="Value"
                />
              </div>
            </div>
            <div class={classes.form}>
              <SchemaForm schema={demo.schema} onChange={handleChange} value={demo.data} />
              {/* <SchemaForm
                schema={demo.schema!}
                uiSchema={demo.uiSchema!}
                onChange={handleChange}
                contextRef={methodRef}
                value={demo.data}
              /> */}
            </div>
          </div>
        </div>
        // </VJSFThemeProvider>
        // </StyleThemeProvider>
      )
    }
  },
})
