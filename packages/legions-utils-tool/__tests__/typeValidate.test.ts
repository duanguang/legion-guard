import {isArray,isNull,isNullUndefined,isObject,isPromise,isUndefined} from '../src/type.validation'
describe('测试公共工具',()=>{
    it('测试isArray',()=>{
        expect(isArray([])).toBeTruthy()
    })
    it('测试isNull',()=>{
        expect(isNull(null)).toBeTruthy()
        expect(isNull(undefined)).toBeFalsy()
    })
    it('测试isNullUndefined',()=>{
        expect(isNullUndefined(null)).toBeTruthy()
        expect(isNullUndefined(undefined)).toBeTruthy()
        expect(isNullUndefined(void 0)).toBeTruthy()
    })
    it('测试isObject',()=>{
        expect(isObject({})).toBeTruthy()
    })
    it('测试isPromise',()=>{
        const promise = new Promise((resolve, reject) => {
            try {
              resolve();
            } catch (err) {
              reject(err);
            }
          })
        expect(isPromise(promise)).toBeTruthy()
    })
    it('测试isUndefined',()=>{
        expect(isUndefined(undefined)).toBeTruthy()
        expect(isUndefined(null)).toBeFalsy()
    })

})