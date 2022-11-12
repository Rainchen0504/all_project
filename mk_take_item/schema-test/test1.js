const Ajv = require('ajv').default
const ajv = new Ajv({ allErrors: true }) // options can be passed, e.g. {allErrors: true}
//增加错误提示
const localize = require('ajv-i18n')
//自定义错误信息
require('ajv-errors')(ajv /*, {singleError: true} */)

//这是要实现的目标格式
const schema = {
  type: 'object', //是一个对象
  properties: {
    //具有两个属性，分别是数组格式和字符串格式
    foo: {
      type: 'integer',
    },
    // bar: { type: 'string' },
    name: {
      type: 'string',
      //   test: false,
      errorMessage: '必须是一个字符串',
      minLength: 10,
    },
  },
  //必须有foo属性
  required: ['foo'],
  additionalProperties: false,
  errorMessage: '这是一个只有数字的对象',
}

//自定义校验规则
// format:test
// ajv.addFormat('test', (data) => {
//   return typeof data === 'string'
// })

//自定义关键字
ajv.addKeyword('test', {
  macro() {
    return {
      minLength: 10,
    }
  },
})

// ajv.addKeyword({
//   keyword: 'range',
//   type: 'number',
//   compile([min, max], parentSchema) {
//     return parentSchema.exclusiveRange === true
//       ? (data) => data > min && data < max
//       : (data) => data >= min && data <= max
//   },
//   errors: false,
//   metaSchema: {
//     // schema to validate keyword value
//     type: 'array',
//     items: [{ type: 'number' }, { type: 'number' }],
//     minItems: 2,
//     additionalItems: false,
//   },
// })
// const schema = {
//   range: [2, 4],
// }

const validate = ajv.compile(schema)
//校验内容
const valid = validate({
  foo: '4',
  name: '5313',
})

console.log('73', validate.errors)

//不符合条件提示错误的点
if (!valid) {
  // ru for Russian
  localize.zh(validate.errors)
  // string with all errors and data paths
  console.log(ajv.errorsText(validate.errors, { separator: '\n' }))
}
