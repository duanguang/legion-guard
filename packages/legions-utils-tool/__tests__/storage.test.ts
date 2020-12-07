import {setStorageItems,getStorageItem} from '../src/storage'
import { JSDOM } from 'jsdom';
import 'jest-localstorage-mock';
describe('storage', () => {
    const orignalImpGlobsl = {};

    const setupGloabls = (restore = false) => {
        [
            '_localStorage',
            'localStorage'
        ].forEach(globalKey => {
            if (restore) {
                delete global[globalKey];
                global[globalKey] = orignalImpGlobsl[globalKey];
            } else {
                orignalImpGlobsl[globalKey] = global[globalKey];
                delete global[globalKey];
            }
        });
    };

    const restoreGlobals = () => setupGloabls(true);

    beforeEach(() => {
        setupGloabls();
        jest.resetModuleRegistry();
    });

    afterEach(() => {
        restoreGlobals();
    });
    it('should set value into storage',  () => {
        const KEY = 'foo',
        VALUE = 'bar';
        orignalImpGlobsl['localStorage'].setItem(KEY,VALUE)
        expect(orignalImpGlobsl['localStorage'].getItem(KEY)).toBe(VALUE)
    });
    it('测试设置 获取cookie', () => {
        setStorageItems('username', 'iloveu');
        expect(getStorageItem('username','')).toBe('iloveu');
    });
})
  