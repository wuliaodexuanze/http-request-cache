"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestCache = void 0;
var ItemCache = /** @class */ (function () {
    function ItemCache(data, timeout) {
        this.data = data;
        this.timeout = timeout;
        this.cacheTime = (new Date()).getTime();
    }
    return ItemCache;
}());
var HttpRequestCache = /** @class */ (function () {
    function HttpRequestCache() {
    }
    /**
     * 是否超时
     * @param name 缓存名称
     */
    HttpRequestCache.isOverTime = function (name) {
        var data = HttpRequestCache.cacheMap.get(name);
        if (!data)
            return true;
        var currentTime = (new Date()).getTime();
        var overTime = (currentTime - data.cacheTime) / 1000;
        if (Math.abs(overTime) > data.timeout) {
            HttpRequestCache.cacheMap.delete(name);
            return true;
        }
        return false;
    };
    /**
     * 通过名字判断缓存是否存在
     * @param name 缓存名称
     */
    HttpRequestCache.has = function (name) {
        return !HttpRequestCache.isOverTime(name);
    };
    /**
     * 删除缓存
     * @param name 缓存名称
     */
    HttpRequestCache.delete = function (name) {
        return HttpRequestCache.cacheMap.delete(name);
    };
    /**
     * 通过名称获取缓存数据
     * @param name 缓存名称
     */
    HttpRequestCache.get = function (name) {
        var isDataOverTiem = HttpRequestCache.isOverTime(name);
        //如果数据超时，返回null，但是没有超时，返回数据，而不是 ItemCache 对象
        return isDataOverTiem ? null : HttpRequestCache.cacheMap.get(name).data;
    };
    /**
     * 设置缓存
     * @param name 缓存名称
     * @param data 缓存数据
     * @param timeout 缓存时间， 默认10分钟
     */
    HttpRequestCache.set = function (name, data, timeout) {
        if (timeout === void 0) { timeout = 600; }
        // 创建缓存对象
        var itemCache = new ItemCache(data, timeout);
        // 设置缓存
        HttpRequestCache.cacheMap.set(name, itemCache);
    };
    HttpRequestCache.cacheMap = new Map();
    return HttpRequestCache;
}());
exports.HttpRequestCache = HttpRequestCache;
