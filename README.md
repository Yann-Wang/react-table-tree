### intro
- This package is used to download file, like pdf, zip, image and so on. The important feature is that the callbacks can be used and the cors situation is supported.
- This package is powered by enable platform team of youzan company.


### use
- aerolite(url, data, options)
- url: string
- data: object
- options: object

  | `options field` | `data type` |
  | --------- | ------------- |
  | successCallback | `function` |
  | failCallback | `function` |
  | fileName | `string` |
  | cors | `boolean` |

  - options.successCallback: it will be called when the file has been downloaded.
  - options.failCallback: it will be called when there are something wrong with downloading.
  - options.fileName: the default file name.(Normally the file name is defined by backend)
  - options.cors: when the cors is opened, the field `withCredentials` will be set. To be attention, a `Access-Control-Expose-Headers` http header should be set to `Content-Disposition` in the response from server. About the http header setting in cors, you can find in the examples folders.

### Demo

```javascript
  aerolite('/url/to/download.pdf', null, {
    successCallback: function () {
      alert('success');
    },
    failCallback: function () {
      alert('fail');
    },
    fileName: 'result.pdf',
    cors: true
  })
```

### compatibility

| browser | chrome | safari | firefox | edge | ie | other |
| ------- | ------ | ------ | ------- | ---- | -- | ----- |
| support |   ✔    | 10.1+  |    ✔    |   ?  | ?  |   ?   |


### Contributing
- packaging in dev environment

```shell
  yarn webpack-dev
```

- packaging in prod environment

```shell
  yarn webpack-prod
```

- test
  - in the examples, there are two servers. One (spray.com:5656) is in cors architecture. The other one (spray.com:5658) is not.

```shell
  yarn test
```


