/*
 * @Author: zhaoliang
 * @Date: 2020-12-29 15:08:15
 * @LastEditTime: 2021-01-04 16:33:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /legion-guard/packages/legions-decorator/src/urlParams/index.ts
 */

declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

interface UrlParams extends PropertyDecorator {
    (url?: string): PropertyDecorator;
}

const getURLParams = (target: Object | Function, key: string, url?: string) => {
    return Object.defineProperty(target, key, {
        get: function () {
            let string = url ? url : window.location.href
            const reg = new RegExp(key + '=([^&|^/]*)', 'i');
            const r = string.match(reg);
            if (r !== null) return unescape(r[1]);
            return null;
        },
    });
}

export const urlParams: UrlParams = (...args) => {    
    if (typeof args[0] === 'string') {
        let [url] = args
        return function (target: Object | Function, key: string, descriptor?: PropertyDescriptor) {
            getURLParams(target, key, url)
        }
    } else {
        let [target, key] = args
        return getURLParams(target, key)
    }
}