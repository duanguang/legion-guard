import {normalize} from '../src/utils/utils'
describe('测试公共工具',()=>{
    it('normalize',()=>{
        expect(normalize('10:30 PM')).toBe('10:30 PM')
        expect(normalize('1.11.12 PM')).toBe('13:11:12')
        expect(normalize('12.11.12 PM')).toBe('12:11:12')
        expect(normalize('12.11.12 AM')).toBe('00:11:12')
        expect(normalize('')).toBe('')
    })
})