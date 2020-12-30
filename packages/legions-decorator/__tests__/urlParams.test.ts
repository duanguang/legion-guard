/*
 * @Author: zhaoliang
 * @Date: 2020-12-30 09:56:48
 * @LastEditTime: 2020-12-30 15:54:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /legion-guard/packages/legions-decorator/__tests__/urlParams.test.ts
 */

import { urlParams } from '../src/urlParams';

describe('start Test urlParams Decorator', () => {
    it('无参数', () => {
        class A {
            @urlParams()
            name: string

            @urlParams()
            age: string

            @urlParams()
            sex: string
        }
        let a = new A()
        expect(a.name).toEqual('zhaoliang');
        expect(a.age).toEqual('18');
        expect(a.sex).toEqual(null);
    });

    it('参数为标准url', () => {
        class B {
            @urlParams('http://localhost:8004/main.html?name=张三&age=5')
            name: string

            @urlParams('http://localhost:8004/main.html?name=张三&age=5')
            age: string

            @urlParams('http://localhost:8004/main.html?name=张三&age=5')
            sex: string
        }
        let b = new B()
        expect(b.name).toEqual('张三');
        expect(b.age).toEqual('5');
        expect(b.sex).toEqual(null);
    });

    it('参数为非标准url', () => {
        class C {
            @urlParams('http://localhost:8004/main.html?name=李四/#/admin?age=10')
            name: string

            @urlParams('http://localhost:8004/main.html?name=李四/#/admin?age=10')
            age: string

            @urlParams('http://localhost:8004/main.html?name=李四/#/admin?age=10')
            sex: string
        }
        let c = new C()
        expect(c.name).toEqual('李四');
        expect(c.age).toEqual('10');
        expect(c.sex).toEqual(null);
    });
});