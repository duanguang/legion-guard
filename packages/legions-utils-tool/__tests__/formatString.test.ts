import { formatTrim,formatLocaleString,number,amount,isJSON,getStringLen } from '../src/format.string';
describe('测试公用工具类', () => {
    it('测试字符串去除左右空格', () => {
        expect(formatTrim('')).toBe('')
        expect(formatTrim(' sssss ')).toBe('sssss')
    });
    it('测试千位分割',() => {
        expect(formatLocaleString('')).toBe(0)
        expect(formatLocaleString(111.23244)).toBe("111.23244")
        expect(formatLocaleString(1113.23244)).toBe("1,113.23244")
    })
    it('测试保留指定位数小数',() => {
        expect(number(null,0)).toBe(null)
        expect(number(112.11,0)).toBe('112')
        expect(number(1113.23244,3)).toBe('1,113.232')
        expect(number({},0)).toBe('')
        expect(number(-1.11,0)).toBe('-1')
        expect(number(Infinity,0)).toBe('\u221e')
        expect(number(Infinity,1)).toBe('\u221e')
        expect(number(-Infinity,1)).toBe('-\u221e')
        expect(number(10*Math.E,1)).toBe('27.2')
        expect(number(-10*Math.E,1)).toBe('-27.2')
        expect(number(0,1)).toBe('0.0')
        expect(number(0,0)).toBe('0')
        expect(number('f',0)).toBe('')
        expect(number('e',0)).toBe('')
        expect(number('10e',1)).toBe('')
        expect(number(1e-1,1)).toBe('0.1')
        expect(number(3e-7,1)).toBe('0.0')
        // @ts-ignore
        expect(number(3e-7,undefined)).toBe('3e-7')
        expect(number(3e-7,7)).toBe('0.0000003')
        expect(number(100e+4,3)).toBe('1,000,000.000')
        expect(number(-100e+4,0)).toBe('-1,000,000')
        // @ts-ignore
        expect(number(-100e+4,undefined)).toBe('-1,000,000')
    })
    it('测试金额保留两位小数',() => {
        expect(amount(1113.23244)).toBe('1,113.23')
    })
    it('测试判断字符串是否是json',() => {
        expect(isJSON('ceshi')).toBe(false)
        expect(isJSON('{"key":"name","value":"xiaojun"}')).toBe(true)
        // @ts-ignore
        expect(isJSON(null)).toBe(false)
        expect(isJSON('null')).toBe(false)
        // @ts-ignore
        expect(isJSON({})).toBe(false)
        expect(isJSON('{}')).toBe(true)
    })
    it('测试获取字符串长度',() => {
        expect(getStringLen('')).toEqual(0)
        expect(getStringLen('ceshi')).toEqual(5)
        expect(getStringLen('中文测试')).toEqual(8)
        expect(getStringLen(' ')).toEqual(1)
        expect(getStringLen('test,')).toEqual(5)
        expect(getStringLen('0')).toEqual(1)
        expect(getStringLen('A')).toEqual(1)
        expect(getStringLen('中文，')).toEqual(6)
    })
});