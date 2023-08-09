# mk_take_item

# 一个使用 JSON 配置生成表单的组件项目

# API 设计

```jsx
<JsonSchemaForm
  schema={schame}
  value={value}
  onChange={handleChange}
  locale={locale}
  contextRef={someRef}
  uiSchema={uiSchema}
/>
```

## schema

json schema 对象，用来定义数据，同时也是定义表单的依据

## value

表单的数据结果，可以从外部改变 value，在表单被编辑时通过`onChange`改变

因为 vue 使用的是响应式数据，如果每次数据变化都去改变`value`对象地址，那么会重新渲染表单，导致性能问题。
从实践中看，传入的对象在内部修改基本没有副作用，如果`value`是一个对象，那么从`JsonSchemaForm`内部修改的值并不会改变`value`对象本身，但仍会触发`onChange`事件，因为可能在表单变化之后使用者需要进行一些操作

## onChange

在表单值有变化时候会触发该回调方法，并把新的值进行返回

## locale

语言，使用`ajv-i18n`指定错误信息用的语言

## contextRef

传入的 vue3 的`ref`对象，在这个对象上挂载`doValidate`方法，可以通过

```
//在组件外部声明一个ref对象传入组件中
const yourRef = ref(null)
//在组件外部就可以使用该组件实例的方法，执行校验
onMounted(() => {
  yourRef.value.doValidate()
})


//将ref对象传入组件中
<JsonSchemaForm contextRef={yourRef} />
```

## uiSchema

对表单的展现进行一些定制，类型如下：

```ts
exprot interface VueJsonSchemaConfig {
  title?:string
  description?:string
  component?:string
  additionProps?:{
    [key:string]:any
  }
  withFormItem?:boolean
  widget?:'checkbox'|'textarea'|'select'|'radio'|'range'|string
  items?:UISchema | UISchema[]
}

export interface UISchema extends VueJsonSchemaConfig {
  properties?:{
    [property:string]:UISchema
  }
}
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```
