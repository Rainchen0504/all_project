export default {
  // 定义三个monaco组件
  name: '转换',
  //schema部分
  schema: {
    description: 'A simple form example.',
    type: 'string',
    required: ['firstName', 'lastName'],
    properties: {
      firstName: {
        type: 'string',
        default: 'Chuck',
      },
      lastName: {
        type: 'string',
      },
      telephone: {
        type: 'string',
        minLength: 10,
      },
    },
  },
  //写样式的部分
  uiSchema: {
    title: 'A registration form',
    properties: {
      firstName: {
        title: 'First name',
      },
      lastName: {
        title: 'Last name',
      },
      telephone: {
        title: 'Telephone',
      },
    },
  },
  //写值的地方
  default: {
    firstName: 'Chuck',
    lastName: 'Norris',
    age: 75,
    bio: 'Roundhouse kicking asses since 1940',
    password: 'noneed',
  },
}
