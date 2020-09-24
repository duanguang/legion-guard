import { formatDate,parseDate,formatDateToFriendly,formatDurationToFriendly,formatTimeToFriendly,isLeapYear,getMonthDays,countDays,getLastDay } from '../src/format.date';

describe('测试公用工具类', () => {
    it('测试将日期格式化成指定格式的字符串', () => {
        global['__DEV__'] = process.env.NODE_ENV !== 'production'
        // Tue May 04 1976 03:32:03 GMT+0800 (中国标准时间)
        let date = 199999923423
        // Sun Sep 27 2020 12:14:12:22 GMT+0800 (中国标准时间)
        let date2 = 1601180052022
        // @ts-ignore
        expect(formatDate('','yyyy-MM-dd')).toBe(`${new Date().getFullYear()}-${new Date().getMonth()>9?new Date().getMonth()+1:'0'+(new Date().getMonth()+1)}-${new Date().getDate()}`)
        expect(formatDate(date,'yyyy-MM-dd HH:mm:ss')).toBe('1976-05-04 03:32:03')
        expect(formatDate(date,'')).toBe('1976-05-04 03:32:03')
        expect(formatDate(date,'yyyy-MM-dd hh:mm:ss')).toBe('1976-05-04 03:32:03')
        expect(formatDate(date,'yyyy-MM-dd hh:mm:ss q')).toBe('1976-05-04 03:32:03 2')
        expect(formatDate(date,'yyyy-MM-dd hh:mm:ss:SS 第q季 w')).toBe('1976-05-04 03:32:03:23 第2季 周二')
        expect(formatDate(date2,'yyyy-MM-dd hh:mm:ss:SS 第q季 www')).toBe('2020-09-27 12:14:12:22 第3季 星期天')
    });
    it('测试将字符串解析成日期', () => {
        global['__DEV__'] = process.env.NODE_ENV !== 'production'
        // Tue May 04 1976 03:32:03 GMT+0800 (中国标准时间)
        const date = '2020-09-24'
        // @ts-ignore
        expect(parseDate(date,'')).toStrictEqual(new Date('2020-09-23T16:00:00.000Z'))
        expect(parseDate(date,'yyyy-MM-dd')).toStrictEqual(new Date('2020-09-23T16:00:00.000Z'))
        expect(parseDate('2020-09-24 12:10:10:10','yyyy-MM-dd')).toStrictEqual(new Date('2020-09-23T16:00:00.000Z'))
        // @ts-ignore
        expect(parseDate('2020-09-24 12:10:10:10','yyyy-MM-dd HH:mm:ss:SS')).toStrictEqual(new Date('2020-09-24T04:10:10.010Z'))
    });
    it('测试将一个日期格式化成友好格式', () => {
        global['__DEV__'] = process.env.NODE_ENV !== 'production'
        // Tue May 04 1976 03:32:03 GMT+0800 (中国标准时间)
        const date = '2020-09-24 10:30:12'
        // @ts-ignore
        expect(formatDateToFriendly(date)).toStrictEqual('10:30')
        // @ts-ignore
        expect(formatDateToFriendly()).toStrictEqual('刚刚')
        expect(formatDateToFriendly(new Date(date))).toStrictEqual('10:30')
        expect(formatDateToFriendly(new Date())).toStrictEqual('刚刚')
        expect(formatDateToFriendly(new Date('2020-09-23 10:30:12'))).toStrictEqual('9月23日')
        expect(formatDateToFriendly(new Date(new Date().getFullYear()))).toStrictEqual('1970年1月1')
    });
    it('测试将一段时长转换成友好格式', () => {
        global['__DEV__'] = process.env.NODE_ENV !== 'production'
        expect(formatDurationToFriendly(1)).toBe('1秒')
        expect(formatDurationToFriendly(1)).toBe('1秒')
        expect(formatDurationToFriendly(100)).toBe('1分40秒')
        expect(formatDurationToFriendly(60*60*3)).toBe('3小时0分')
        expect(formatDurationToFriendly(60*60*24*3.1)).toBe('3.1天')
    });
    it('测试将时间转换成MM:SS形式', () => {
        expect(formatTimeToFriendly(1)).toBe('00:01')
        expect(formatTimeToFriendly(100)).toBe('01:40')
        expect(formatTimeToFriendly(60*10)).toBe('10:00')
    });
    it('测试判断某一年是否是闰年', () => {
        let year = new Date().getFullYear();
        let received = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
        // @ts-ignore
        expect(isLeapYear()).toEqual(received)
        expect(isLeapYear(2020)).toEqual(true)
        expect(isLeapYear(1600)).toEqual(true)
        expect(isLeapYear(1601)).toEqual(false)
    });
    it('测试获取某一年某一月的总天数', () => {
        expect(getMonthDays()).toEqual(30)
        expect(getMonthDays(new Date('2020-10-10'))).toEqual(31)
        expect(getMonthDays(new Date('2020-2-1'))).toEqual(29)
        expect(getMonthDays(2020,2)).toEqual(29)
    });
    it('测试计算日期之间的天数', () => {
        expect(countDays(new Date('2020-10-10'),new Date('2020-09-10'))).toEqual(30)
        expect(countDays('2020-10-10','2020-09-10')).toEqual(30)
        expect(countDays(new Date('2020-10-10'),'2020-09-10')).toEqual(0)
    });
    it('测试获取指定日期月数最后一天', () => {
        // @ts-ignore
        expect(getLastDay()).toEqual('2020/09/30')
        expect(getLastDay(new Date('2020-10-10'))).toEqual('2020/10/31')
        expect(getLastDay('2020-02-10')).toEqual('2020/02/29')
        expect(getLastDay('2021-02-10')).toEqual('2021/02/28')
        expect(getLastDay('2020-04-10')).toEqual('2020/04/30')
    });
    
});