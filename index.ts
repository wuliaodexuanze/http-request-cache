class ItemCache {
  data: any;
  timeout: number;
  cacheTime: number;
  
  constructor(data: any, timeout: number) {
    this.data = data;
    this.timeout = timeout;
    this.cacheTime = (new Date()).getTime();
  }
}

export class HttpRequestCache {
  private static cacheMap = new Map();

  private constructor() {
    // do nothing
  }

  /**
   * 是否超时
   * @param name 缓存名称
   */
  private static isOverTime(name: string) {
    const data = HttpRequestCache.cacheMap.get(name);
    if (!data) return true;
    const currentTime = (new Date()).getTime();
    const overTime = (currentTime - data.cacheTime) / 1000;
    if (Math.abs(overTime) > data.timeout) {
        HttpRequestCache.cacheMap.delete(name)
        return true
    }
    return false
  }

  /**
   * 通过名字判断缓存是否存在
   * @param name 缓存名称
   */
  static has(name: string) {
    return !HttpRequestCache.isOverTime(name)
  }

  /**
   * 删除缓存
   * @param name 缓存名称
   */
  static delete(name: string) {
    return HttpRequestCache.cacheMap.delete(name) 
  }

  /**
   * 通过名称获取缓存数据
   * @param name 缓存名称
   */
  static get(name: string) {
    const isDataOverTiem = HttpRequestCache.isOverTime(name)
    //如果数据超时，返回null，但是没有超时，返回数据，而不是 ItemCache 对象
    return isDataOverTiem ? null : HttpRequestCache.cacheMap.get(name).data
  }

  /**
   * 设置缓存
   * @param name 缓存名称
   * @param data 缓存数据
   * @param timeout 缓存时间， 默认10分钟
   */
  static set(name: string, data: any, timeout = 600) {
    // 创建缓存对象
    const itemCache = new ItemCache(data, timeout)
    // 设置缓存
    HttpRequestCache.cacheMap.set(name, itemCache)
  }
}
