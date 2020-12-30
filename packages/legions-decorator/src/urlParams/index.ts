/*
 * @Author: zhaoliang
 * @Date: 2020-12-29 15:08:15
 * @LastEditTime: 2020-12-30 15:55:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /legion-guard/packages/legions-decorator/src/urlParams/index.ts
 */
/** 获取url参数 */
export function urlParams(url?: string) {
    return function (target: Object | Function, key: string, descriptor?: PropertyDescriptor) {
        let string = url ? url : window.location.href
        Object.defineProperty(target, key, {
            get: function () {
                const reg = new RegExp(key + '=([^&|^/]*)', 'i');
                const r = string.match(reg);
                if (r !== null) return unescape(r[1]);
                return null;
            },
        });
    }


}