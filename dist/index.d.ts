export declare class HttpRequestCache {
    static cacheMap: any;
    /**
     * 是否超时
     * @param name 缓存名称
     */
    static isOverTime(name: string): boolean;
    /**
     * 通过名字判断缓存是否存在
     * @param name 缓存名称
     */
    static has(name: string): boolean;
    /**
     * 删除缓存
     * @param name 缓存名称
     */
    static delete(name: string): any;
    /**
     * 通过名称获取缓存数据
     * @param name 缓存名称
     */
    static get(name: string): any;
    /**
     * 设置缓存
     * @param name 缓存名称
     * @param data 缓存数据
     * @param timeout 缓存时间， 默认10分钟
     */
    static set(name: string, data: any, timeout?: number): void;
}
