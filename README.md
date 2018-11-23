# common_vue_ele

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# config/index.js 配置服务代理（开发环境）
  proxyTable: {
    '/api': {
      target: 'http://62.234.104.210:3389', //设置你调用的接口域名和端口号 别忘了加http
      changeOrigin: true,
      pathRewrite: {
        '^/api': '' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
      }
    }
  }
