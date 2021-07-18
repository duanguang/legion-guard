# `legions-decorator`

> TODO: 常用修饰器集合

## Usage

```
npm i legions-decorator --save
```

## API

### async.validator

```js
import {
  FormRuleProperty,
  createFormRule,
} from 'legions-decorator/async.validator';

class FormInfo {
  @FormRuleProperty({
    required: true,
    name: 'billNo',
    error: '收付单号格式不正确',
    desc: '收付单号',
    type: 'number',
    trigger: 'blur,change', //默认blur,change
    regex: /^[1-9]\d*$/, //自定义验证规则
  })
  billNo = '112';

  @FormRuleProperty({
    required: true,
    name: 'bussinessMan',
    error: '业务员格式不正确',
    desc: '业务员',
    type: 'string',
    validator: (value, error, callback) => {
      //自定义验证规则
      if (typeof value !== 'string') {
        callBack('不是字符串格式');
      } else {
        callBack();
      }
    },
  })
  bussinessMan = void 0;

  @FormRuleProperty({
    required: true,
    name: 'saleDate',
    error: '交易日期格式不正确',
    desc: '交易日期',
    type: 'array',
  })
  saleDate = void 0;

  @FormRuleProperty({
    required: true,
    name: 'amount',
    error: '总金额格式不正确',
    desc: '总金额',
  })
  amount = void 0;

  @FormRuleProperty({
    required: true,
    name: 'filePath',
    desc: '附件',
  })
  filePath = void 0;
}

class FormInfoRule extends FormInfo {
  constructor() {
    super();
    createFormRule(FormInfo, this);
  }
}
```

### enumerate

```js
import {
  EnumDesc,
  EnumMember,
  AbstractEnumDeclaration,
} from 'legions-decorator/enumerate';
import {
  fullProvider,
  lazyInject,
  legionsContainer,
} from 'legions-control-container';
/** 简单枚举测试类 */
class SimpleEnums {
  /** 销售出货 */
  @EnumDesc(1, '销售出货')
  test1: EnumMember;

  /** 货物调拨 */
  @EnumDesc(2, '货物调拨')
  test2: EnumMember;

  /** 空指针测试1 */
  @EnumDesc(3, '')
  OTHER1: EnumMember;

  /** 空指针测试2 */
  @EnumDesc('', 4)
  OTHER2: EnumMember;

  /** 空指针测试3 */
  @EnumDesc('', '')
  OTHER3: EnumMember;

  /** 非枚举属性测试 */
  OTHER4: number = 1;
}

/** 拓展枚举测试类 */
class FromSourceEnums extends AbstractEnumDeclaration {
  /** 销售出货 */
  @EnumDesc(1, '销售出货')
  test1: EnumMember;

  /** 货物调拨 */
  @EnumDesc(2, '货物调拨')
  test2: EnumMember;

  /** 相同key测试 */
  @EnumDesc(2, '销售出货')
  test3: EnumMember;

  /** 相同value测试 */
  @EnumDesc(3, '货物调拨')
  test4: EnumMember;

  /** 空指针测试1 */
  @EnumDesc(3, '')
  OTHER1: EnumMember;

  /** 空指针测试2 */
  @EnumDesc('', 4)
  OTHER2: EnumMember;

  /** 空指针测试3 */
  @EnumDesc('', '')
  OTHER3: EnumMember;

  /** 非枚举属性测试 */
  OTHER4: number = 1;
}
/** 空枚举拓展测试类 */
class EmptyEnums extends AbstractEnumDeclaration {}
/** 拓展枚举测试类 */
/* @EnumDeclaration */
@fullProvider(FromWrapperSourceEnums)
class FromWrapperSourceEnums extends AbstractEnumDeclaration {
  /** 销售出货 */
  @EnumDesc(1, '销售出货')
  test1: EnumMember;

  /** 货物调拨 */
  @EnumDesc(2, '货物调拨')
  test2: EnumMember;

  /** 相同key测试 */
  @EnumDesc(2, '销售出货')
  test3: EnumMember;

  /** 相同value测试 */
  @EnumDesc(3, '货物调拨')
  test4: EnumMember;

  /** 空指针测试1 */
  @EnumDesc(3, '')
  OTHER1: EnumMember;

  /** 空指针测试2 */
  @EnumDesc('', 4)
  OTHER2: EnumMember;

  /** 空指针测试3 */
  @EnumDesc('', '')
  OTHER3: EnumMember;

  /** 非枚举属性测试 */
  OTHER4: number = 1;
}
const simpleEnums = new SimpleEnums();
const fromSourceEnums = new FromSourceEnums();
const emptyEnums = new EmptyEnums();

describe('枚举类测试', () => {
  it('枚举类声明修饰器', () => {
    let ninja: FromWrapperSourceEnums =
      legionsContainer.get < FromWrapperSourceEnums > FromWrapperSourceEnums;
    expect(ninja['findValue'](1)).toEqual('销售出货');
    expect(ninja['findValue'](2)).toEqual('货物调拨');
  });
  it('简单枚举：成员变量测试', () => {
    expect(simpleEnums.test1.getCode()).toEqual(1);
    expect(simpleEnums.test1.getValue()).toEqual('销售出货');
    expect(simpleEnums.test2.getCode()).toEqual(2);
    expect(simpleEnums.test2.getValue()).toEqual('货物调拨');
  });
  it('拓展枚举：成员变量测试', () => {
    expect(fromSourceEnums.test1.getCode()).toEqual(1);
    expect(fromSourceEnums.test1.getValue()).toEqual('销售出货');
    expect(fromSourceEnums.test2.getCode()).toEqual(2);
    expect(fromSourceEnums.test2.getValue()).toEqual('货物调拨');
  });
  it('拓展枚举：拓展方法测试(findCode)', () => {
    expect(fromSourceEnums.findCode('销售出货')).toEqual(1);
    expect(fromSourceEnums.findCode('货物调拨')).toEqual(2);
  });
  it('拓展枚举：拓展方法测试(findValue)', () => {
    expect(fromSourceEnums.findValue(1)).toEqual('销售出货');
    expect(fromSourceEnums.findValue(2)).toEqual('货物调拨');
  });
  it('拓展枚举：拓展方法测试(createOptions)', () => {
    expect(fromSourceEnums.createOptions()).toHaveLength(4);
    expect(fromSourceEnums.createOptions()).toMatchObject([
      { key: '1', value: '销售出货' },
      { key: '2', value: '货物调拨' },
      { key: '2', value: '销售出货' },
      { key: '3', value: '货物调拨' },
    ]);
    expect(
      fromSourceEnums.createOptions({
        excludeKey: [fromSourceEnums.test1.getCode()],
      })
    ).toMatchObject([
      { key: '2', value: '货物调拨' },
      { key: '2', value: '销售出货' },
      { key: '3', value: '货物调拨' },
    ]);
    expect(
      fromSourceEnums.createOptions({
        excludeKey: [fromSourceEnums.test2.getCode()],
      })
    ).toMatchObject([
      { key: '1', value: '销售出货' },
      { key: '3', value: '货物调拨' },
    ]);
    expect(fromSourceEnums.createOptions({ format: 'K-V' })[0].value).toEqual(
      '1-销售出货'
    );
    expect(
      fromSourceEnums.createOptions({ format: 'KKKK-V' })[0].value
    ).toEqual('1111-销售出货');
    expect(
      fromSourceEnums.createOptions({ format: 'K-V-K-V' })[0].value
    ).toEqual('1-销售出货-1-销售出货');
    expect(
      fromSourceEnums.createOptions({ format: 'test-V' })[0].value
    ).toEqual('test-销售出货');
    expect(
      fromSourceEnums.createOptions({ format: 'K-test' })[0].value
    ).toEqual('1-test');
  });
  it('空拓展测试', () => {
    expect(emptyEnums.findValue(0)).toEqual(void 0);
    expect(emptyEnums.findCode(0)).toEqual(void 0);
    expect(emptyEnums.createOptions()).toHaveLength(0);
  });
});
```

## urlParams

通过该修饰器可以自动对url传参进行截取

- 不设置url
  > 当没有设置URL，自动获取window.location.href

```ts
// http://localhost:8080/main.html?name=zhaoliang&age=18
import { urlParams } from 'legions-decorator/urlParams';
class A {
    @urlParams
    name: string

    @urlParams
    age: string

    @urlParams
    sex: string
}
let a = new A()
expect(b.name).toEqual('张三');
expect(b.age).toEqual('5');
expect(b.sex).toEqual(void 0);
```
- 指定url

```ts
import { urlParams } from 'legions-decorator/urlParams';
 class C {
    @urlParams('http://localhost:8004/main.html?name=李四/#/admin?age=10')
    name: string

    @urlParams('http://localhost:8004/main.html?name=李四/#/admin?age=10')
    age: string

    @urlParams('http://localhost:8004/main.html?name=李四/#/admin?age=10')
    sex: string
}
let c = new C()
expect(c.name).toEqual('李四/#/admin?age=10');
expect(c.age).toEqual('10');
expect(c.sex).toEqual(void 0);
```
