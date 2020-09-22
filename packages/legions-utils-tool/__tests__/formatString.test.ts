import { formatTrim,formatLocaleString,number,amount,isJSON } from '../src/format.string';
describe('测试公用工具类', () => {
    it('测试字符串去除左右空格', () => {
        expect(formatTrim(' sssss ')).toBe('sssss')
    });
    it('测试千位分割',() => {
        expect(formatLocaleString(1113.23244)).toBe("1,113.23244")
    })
    it('测试保留指定位数小数',() => {
        expect(number(1113.23244,3)).toBe('1,113.232')
    })
    it('测试金额保留两位小数',() => {
        expect(amount(1113.23244)).toBe('1,113.23')
    })
    it('测试判断字符串是否是json',() => {
        expect(isJSON('ceshi')).toBeFalsy()
        expect(isJSON('{"key":"name","value":"xiaojun"}')).toBeTruthy()
    })
});