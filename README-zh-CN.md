### intro
- 一个支持渲染树状结构的table组件
- 有赞赋能平台前端团队出品

### Demo
- 视觉效果图
  - ![table tree image](http://okup5z621.bkt.clouddn.com/react-table-tree.jpeg)

- demo

  [![Edit y2jzr46oz1](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/y2jzr46oz1)

### table 属性

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

该属性用于设置合计数据一行，`visible`控制是否显示，`name`用于自定义该行的名字。

| total props | type    | required | default    |
| ----------- | ------- | -------- | ---------- |
| visible     | boolean | false    |  false     |
| name        | string  | false    |  '合计数据'  |

- header props

该属性用于设置表头固定的功能，`fixed`控制是否开启，`top`表示表头距窗口顶部的距离。

| header props | type    | required | default    |
| ------------ | ------- | -------- | ---------- |
| fixed        | boolean | false    |  false     |
| top          | number  | false    |  0         |

### 开发

- 开始开发

```shell
  yarn webpack-dev
```

- 线上环境打包

```shell
  yarn webpack-prod
```

### 支持

- react 16.3+

### 开发环境

- yarn 1.9.4
- node 8.11.2+
