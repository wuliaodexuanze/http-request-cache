# http-cache
http请求数据缓存

- [http-cache](#http-cache)
  - [use](#use)
  - [example](#example)


## use
```shell
npm i http-cache
```

## example
```javascript
// 引入包
const { HttpRequestCache } = require('http-cache')
/**
 * 设置缓存
 * @param name 缓存名称，建议url加参数生成特殊字符串
 * @param data 缓存数据
 * @param timeout 缓存时间， 默认10分钟
 */
HttpRequestCache.set(name, data, timeout)

/**
 * 通过名称获取缓存数据
 * @param name 缓存名称
 */
HttpRequestCache.get(name)

/**
 * 删除缓存
 * @param name 缓存名称
 */
HttpRequestCache.delete(name)

/**
 * 通过名字判断缓存是否存在
 * @param name 缓存名称
 */
HttpRequestCache.delete(name)
```
