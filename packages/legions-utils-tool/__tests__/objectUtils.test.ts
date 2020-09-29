import {sort,compare,excludeObj,get,proxyGetters,promiseTry} from '../src/object.utils'
describe('测试公用工具类', () => {
    it('测试对字符串进行自然排序', () => {
        expect(sort([3,2,4])).toEqual([2, 3, 4])
        expect(sort([{age:1,name:'jucy'},{age:4,name:'cody'},{age:2,name:'cinlo'}],'name')).toEqual([{age:2,name:'cinlo'},{age:4,name:'cody'},{age:1,name:'jucy'}])
    })
    it('测试通用排序', () => {
        expect(compare('4','2')).toEqual(1)
        expect(compare('2','2')).toEqual(0)
        expect(compare('1','2')).toEqual(-1)
    })
    it('测试排除指定对象属性', () => {
        expect(excludeObj({age:1,name:'jucy',grade:2},{age:1,name:'jucy',sex:'girl',like:'football'})).toEqual({sex:'girl',like:'football'})
    })
    it('测试获取指定对象属性', () => {
        expect(get(['age'])({'age':1,'name':'cici','sex':'girl'})).toEqual(1)
        expect(get(['age','name'])({'age':1,'name':'cici','sex':'girl'})).toEqual(null)
    })
    it('测试promiseTry', () => {
        promiseTry(()=>'xixi').then(res=>expect(res).toEqual('xixi'),err=>expect(err).toEqual(''))
        promiseTry(()=>0).then(res=>{throw new Error('error 1')}).then(res=>res,err=>expect(err).toEqual(new Error('error 1')))
        promiseTry(()=>{throw new Error('error 1')}).then(res=>res,err=>expect(err).toEqual(new Error('error 1')))
    })
    it('测试proxyGetters', () => {
        let objTest = {}
        proxyGetters(objTest,{'age':1,'name':'cici','sex':'girl'},['name'])
        expect(objTest['name']).toEqual('cici')
    })
})