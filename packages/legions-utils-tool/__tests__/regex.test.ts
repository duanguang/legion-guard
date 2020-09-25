import { RegExChk,validatorType,commonRegex } from '../src/regex'
describe('测试公用工具类', () => {
    it('测试正则表达式', () => {
        // @ts-ignore
        expect(RegExChk(validatorType.chinese,'中国，我爱中国')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.required,'中')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.number,'125253535')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.integer,'-1222')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.integer,'1222')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.plusInteger,'1234567890')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.double,'11.3')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.double,'-11.3')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.plusDouble,'122.3')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.english,'abcdef adhg')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.username,'guoxiaojun')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.mobile,'13560516811')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.phone,'000-12312312-1111111')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.email,'13444@qq.com')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.url,'http://183.62.55.90:8010/zentao/my-bug.html')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.path,'/transferOrder')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.ip,'192.168.123.110')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.qq,'1535060321')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.decimal,'1235.63')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.amount,'122222223.12')).toBeTruthy()
        // @ts-ignore
        expect(RegExChk(validatorType.zipCode,'1212121')).toBeFalsy()
        // @ts-ignore
        expect(RegExChk(validatorType.zipCode,'1212')).toBeFalsy()
        expect(RegExChk(commonRegex.PACKBOXNO,'ABCD1234567')).toBeTruthy()
        expect(RegExChk(commonRegex.PRICE,'10000000000.3111111')).toBeFalsy()
    });
})