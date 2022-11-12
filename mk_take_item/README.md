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
/>
```

### schema

json schema 对象，用来定义数据，同时也是定义表单的依据

### value

表单的数据结果，可以从外部改变 value，在表单被编辑时通过`onChange`改变

因为 vue 使用的是响应式数据，如果每次数据变化都去改变`value`对象地址，那么会重新渲染表单，导致性能问题。
所以

### handleChange

json schema 对象，用来定义数据，同时也是定义表单的依据

### locale

json schema 对象，用来定义数据，同时也是定义表单的依据

### someRef

json schema 对象，用来定义数据，同时也是定义表单的依据

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
