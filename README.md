English | [简体中文](https://github.com/Yann-Wang/react-table-tree/blob/master/README-zh_CN.md)

### intro
- A react table component which supports render tree structure data.
- Powered by enable platform team of youzan company.

### Demo
- the table tree is just as follows.
  - ![table tree image](http://okup5z621.bkt.clouddn.com/react-table-tree-v2.jpeg)

- to achieve the above effect, the code is as follows.

  [![Edit y2jzr46oz1](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/y2jzr46oz1)

### table props and columns props
- table props

| table props | type           | required | default |
| ----------- | -------------- | -------- | ------- |
| columns     | array[object]  | true     |         |
| datasets    | array[object]  | true     |         |
| rootId      | number         | true     |         |
| rowKey      | string         | false    |  `'id'` |
| loading     | element        | false    |         |
| total       | object         | false    |         |
| header      | object         | false    |         |
| className   | string         | false    |    ''   |
| style       | object         | false    |   {}    |

- column props

| column props | type   | required | default    |
| ----------- | ------- | -------- | ---------- |
| title       | string  | true     |            |
| name        | string  | true     |            |
| bodyRender  | node    | false    | data[name] |

- total props

this property can be set the total row in the last row.

| total props | type    | required | default    |
| ----------- | ------- | -------- | ---------- |
| visible     | boolean | false    |  false     |
| name        | string  | false    |  '合计数据'  |

- header props

this property can be set table header fixed, the field of top is the distance to window top. When `fixed` is true, the feature is open.

| header props | type    | required | default    |
| ------------ | ------- | -------- | ---------- |
| fixed        | boolean | false    |  false     |
| top          | number  | false    |  0         |

### Contributing
- start the project

```shell
  yarn webpack-dev
```

- packaging for prod environment

```shell
  yarn webpack-prod
```

### Support

- react 16.3+

### development Environment

- yarn 1.9.4
- node 8.11.2+
