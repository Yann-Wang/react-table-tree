### intro
- A react table component which supports render tree structure data.
- This package is powered by enable platform team of youzan company.

### Demo
- the table tree is just as follows.
  - ![table tree image](http://okup5z621.bkt.clouddn.com/table-tree-demo.jpeg)

- to achieve the above effect, the code is as follows.

  [![Edit p5nl6lvo5q](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/p5nl6lvo5q)

### table props and columns props
- table props

  | table props | type           | required | default |
  | ----------- | -------------- | -------- | ------- |
  | columns     | array[object]  | true     |         |
  | datasets    | array[object]  | true     |         |
  | rootId      | number         | true     |         |
  | rowKey      | string         | false    |  `'id'` |

- column props

  | column props | type   | required | default    |
  | ----------- | ------- | -------- | ---------- |
  | title       | string  | true     |            |
  | name        | string  | true     |            |
  | bodyRender  | node    | false    | data[name] |


### Contributing
- packaging in dev environment

```shell
  yarn webpack-dev
```

- packaging in prod environment

```shell
  yarn webpack-prod
```
