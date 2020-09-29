import { Report } from './report'; 
import { MicroApps } from './app';
import { BrowserMatch, checkBrowser, onloadScript } from './utils';
import { PostMessageUtils } from './postMessage';

/* export class legionsReport{
    test() {
       console.log(22)
    }
} */
export const DataOrigin = {
    add: (key,value) => {
        if (DataOrigin.hasOwnProperty(key)) {
            console.warn(`DataOrigin:对象已存在 ${key} 属性`);
            return;
        }
        if (!key && typeof key !== 'string') {
            console.warn(`DataOrigin:${key} 不能为空或只能为字符串`);
            return;
        }
        DataOrigin[key] = value;
    },
    has: (key) => {
        if (!key && typeof key !== 'string') {
            console.warn(`DataOrigin:${key} 不能为空或只能为字符串`);
            return false;
        }
        if (DataOrigin.hasOwnProperty(key)) {
            return true;
        }
    },
    get: (key) => {
        if (!key && typeof key !== 'string') {
            console.warn(`DataOrigin:${key} 不能为空或只能为字符串`);
            return null;
        }
        if (!DataOrigin.hasOwnProperty(key)) {
            console.warn(`DataOrigin:对象找不到 ${key} 属性`);
            return null;
        }
        return DataOrigin[key];
    },
    update: (key,value) => {
        if (!key && typeof key !== 'string') {
            console.warn(`DataOrigin:${key} 不能为空或只能为字符串`);
            return;
        }
        if (!DataOrigin.hasOwnProperty(key)) {
            console.warn(`DataOrigin:对象找不到 ${key} 属性`);
            return;
        }
        DataOrigin[key] = value;
    }
}
export { Report,MicroApps,BrowserMatch,checkBrowser,onloadScript,PostMessageUtils}