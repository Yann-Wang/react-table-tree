### intro
- A react table component which supports render tree structure data.
- This package is powered by enable platform team of youzan company.

### Demo
- the table tree is just as follows.
  - ![table tree image](http://okup5z621.bkt.clouddn.com/table-tree-demo.jpeg)

- to achieve the above effect, the code is as follows.

  ```javascript
    render() {
      const columns = [
        {
          title: '部门',
          name: 'name',
          width: '400px'
        },
        {
          title: '列一',
          name: 'column1'
        },
        {
          title: '列二',
          name: 'column3'
        },
        {
          title: '列三',
          name: 'column2',
          bodyRender: item => {
            return item.column2
          }
        },
        {
          title: '列四',
          name: 'column4'
        },
        {
          title: '操作',
          name: 'id',
          textAlign: 'right',
          bodyRender: item => {
            return <a>操作1</a>
          }
        }
      ]
      const data = {
          "list": [
              {
                  "id": 9,
                  "parentId": 224,
                  "name": "大部门",
                  "column1": 69,
                  "column3": 49,
                  "column2": 1,
                  "column4": 19
              },
              {
                  "id": 499,
                  "parentId": 9,
                  "name": "直属人员",
                  "column1": 53,
                  "column3": 1,
                  "column2": 1,
                  "column4": 51
              },
              {
                  "id": 330,
                  "parentId": 350,
                  "name": "二级部门1",
                  "column1": 3,
                  "column3": 5,
                  "column2": 0,
                  "column4": -2
              },
              {
                  "id": 349,
                  "parentId": 9,
                  "name": "一级部门2",
                  "column1": 5,
                  "column3": 12,
                  "column2": 0,
                  "column4": -7
              },
              {
                  "id": 350,
                  "parentId": 9,
                  "name": "一级部门3",
                  "column1": 0,
                  "column3": 12,
                  "column2": 0,
                  "column4": -12
              },
              {
                  "id": 362,
                  "parentId": 363,
                  "name": "二级部门2",
                  "column1": 3,
                  "column3": 10,
                  "column2": 0,
                  "column4": -7
              },
              {
                  "id": 363,
                  "parentId": 9,
                  "name": "一级部门4",
                  "column1": 5,
                  "column3": 3,
                  "column2": 0,
                  "column4": 2
              },
              {
                  "id": 364,
                  "parentId": 9,
                  "name": "一级部门5",
                  "column1": 0,
                  "column3": 6,
                  "column2": 0,
                  "column4": -6
              }
          ],
          "root": 9
      }
      const { list, root:rootId } = data
      return (
        <TableTree
          datasets={list}
          columns={columns}
          rootId={rootId}
        />
      )
    }
  ```

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
