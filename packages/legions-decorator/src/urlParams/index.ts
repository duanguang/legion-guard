/*
 * @Author: zhaoliang
 * @Date: 2020-12-29 15:08:15
 * @LastEditTime: 2021-04-27 16:40:16
 * @LastEditors: zhaoliang
 * @Description: In User Settings Edit
 * @FilePath: /legion-guard/packages/legions-decorator/src/urlParams/index.ts
 */

declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
interface UrlParams extends PropertyDecorator {
    (url?: string): PropertyDecorator;
}
const decoratorProperty = (target: Object | Function, key: string, url?: string) => {
    return Object.defineProperty(target, key, {
        get: function () {
            let string = url ? url : window.location.href
            const reg = new RegExp(key + '=([^&]*)', 'i');
            const r = string.match(reg);
            if (r !== null) return unescape(r[1]);
            return '';
        },
    });
}
export const urlParams: UrlParams = (...args) => {    
    if (typeof args[0] === 'string') {
        let [url] = args
        return function (target: Object | Function, key: string, descriptor?: PropertyDescriptor) {
            decoratorProperty(target, key, url)
        }
    } else {
        let [target, key] = args
        return decoratorProperty(target, key)
    }
}