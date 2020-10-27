# `legions-utils-tool`

> TODO: 常用工具类函数

## Usage

```md
npm install --save legions-utils-tool
```

## API

### cookie

> 设置cookie值

```js
import {setCookie} from 'legions-utils-tool/cookie'
```

> 获取cookie值

```js
import { getCookie } from 'legions-utils-tool/cookie';
```

> 移除cookie

```js
import { removeCookie } from 'legions-utils-tool/cookie';
```

> 清空cookie

```js
import { clearAllCookie } from 'legions-utils-tool/cookie';
```

### debounce防抖函数

```js
import {debounce} from 'legions-utils-tool/debounce';
debounce(()=>{
    //doSth
},1000)
```

### DOM节点事件

> DOM节点绑定事件

```js
import {on} from 'legions-utils-tool/dom'
```

> 卸载DOM元素节点事件

```js
import {off} from 'legions-utils-tool/dom'
```

### download

> 支持一次下载多份文件

```js
import {download} from 'legions-utils-tool/download'
download([文件链接数组])
```

### format-date日期格式化

> 将日期格式化成指定格式的字符串

```js
import {formatDate} from 'legions-utils-tool/format.date'
```

> 将字符串解析成日期

```js
import {parseDate} from 'legions-utils-tool/format.date'
```

> 将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”, 当天的返回时分，当年的返回月日，否则，返回年月日

```js
import {formatDateToFriendly} from 'legions-utils-tool/format.date'
```

> 将一段时长转换成友好格式,如：1581->“26分21秒”

```js
import {formatDurationToFriendly} from 'legions-utils-tool/format.date'
```

> 将时间转换成MM:SS形式

```js
import {formatTimeToFriendly} from 'legions-utils-tool/format.date'
```

> 判断某一年是否是闰年

```js
import {isLeapYear} from 'legions-utils-tool/format.date'
```

> 获取某一年某一月的总天数，没有任何参数时获取当前月份的

```js
import {getMonthDays} from 'legions-utils-tool/format.date'
```

> 计算2日期之间的天数，用的是比较毫秒数的方法

```js
import {countDays} from 'legions-utils-tool/format.date'
```

> 获取指定日期月数最后一天

```js
import {getLastDay} from 'legions-utils-tool/format.date'
```

### fomate-string字符串格式化

> 字符串去除空格

```js
import {formatTrim} from 'legions-utils-tool/format.string'
```

> 千位分割

```js
import {formatLocaleString} from 'legions-utils-tool/format.string'
```

> 保留指定位数小数

```js
import {number} from 'legions-utils-tool/format.string'
```

> 金额保留两位小数

```js
import {amount} from 'legions-utils-tool/format.string'
```

>  判断字符串是否是json

```js
import {isJSON} from 'legions-utils-tool/format.string'
```

>  获取字符串长度

```js
import {getStringLen} from 'legions-utils-tool/format.string'
```

### object-utils对象的操作方法

> 对数组或对象进行自然排序

```js
import {sort} from 'legions-utils-tool/object.utils'
// 升序
sort([3,2,4]) === [2, 3, 4]
// 根据指定的属性值进行排序
sort([{age:1,name:'jucy'},{age:4,name:'cody'},{age:2,name:'cinlo'}],'name') === [{age:2,name:'cinlo'},{age:4,name:'cody'},{age:1,name:'jucy'}]
```

> 通用排序

```js
import {compare} from 'legions-utils-tool/object.utils'
compare('4','2') === 1
compare('2','2') === 0
compare('1','2') === -1
```

> 排除指定对象属性

```js
import {excludeObj} from 'legions-utils-tool/object.utils'
excludeObj({age:1,name:'jucy',grade:2},{age:1,name:'jucy',sex:'girl',like:'football'}) === {sex:'girl',like:'football'}
```

> promiseTry

```js
import {promiseTry} from 'legions-utils-tool/object.utils'
promiseTry(()=>'xixi').then(res=>res === 'xixi')
```

> proxyGetters

```js
import {proxyGetters} from 'legions-utils-tool/object.utils'
let objTest = {}
proxyGetters(objTest,{'age':1,'name':'cici','sex':'girl'},['name'])
console.log(objTest['name'])//'cici'
```

### regex常用正则表达式校验

```js
import {RegExChk,commonRegex,validatorType} from 'legions-utils-tool/regex'
RegExChk(commonRegex.PRICE,'10000000000.3111111')//使用已封装好的正则表达式或者自己书写的正则表达式
RegExChk(validatorType.chinese,'中国，我爱中国')//使用已有的正则表达式类型
```

### type-validation数据基本类型判断

```js
import {isObject,isUndefined,isNull,isPromise,isNullUndefined} from 'legions-utils-tool/type.validation'
```

### storage

> 设置相应键值缓存信息

```js
import {setStorageItems} from 'legions-utils-tool/storage'
```

> 获取相应键值缓存信息

```js
import {getStorageItem} from 'legions-utils-tool/storage'
```



