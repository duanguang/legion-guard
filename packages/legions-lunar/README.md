# `legions-lunar`

> TODO: 基于 mobx 数据流的 React 库修饰器集合

## Usage

```
npm i legions-lunar/ --save
```

## API

### submittingAutoMessage

```js
import React from 'react';
import { observer, bind } from 'legions/store-react';
import {submittingAutoMessage} from 'legions-lunar/mobx-decorator';

@bind({ store: UserInfoStore })
@observer
export default class CustomsCommodity extends React.Component<IProps, IState> {
    @submittingAutoMessage<CustomsCommodity>({
        state: 'DeleteCustomsCommondity', sideEffect: (that) => {
            that.initData();
        },
    })
    deleteCustomsCommondity(ids: string) {
        this.props.store.deleteCustomsCommondity(ids);
    }
}
```

### confirmAnnotation

```js
import React from 'react';
import { observer, bind } from 'legions/store-react';
import {confirmAnnotation} from 'legions-lunar/mobx-decorator';

@bind({ store: UserInfoStore })
@observer
export default class CustomsCommodity extends React.Component<IProps, IState> {
    @confirmAnnotation<ModalDemo>({
        onCancel: (that) => {
            console.log(that);
        },
        confirmType: 'delete',
    })
    onDeleteConfirm() {
        console.log('444',this);
    }

    @confirmAnnotation<ModalDemo>({
        onCancel: (that) => {
            console.log(that);
        },
        title: (that) => that.renderTitle(),
        content: (that) => that.renderContent(),
        confirmType: 'confirm',
    })
    onConfirmAnnotation() {
        console.log('444',this);
    }

    @confirmAnnotation<ModalDemo>({
        confirmType: 'message',
        type: (that) => 'error',
        /*  title: 'This is a notification message',
         content: 'This is a notification message', */
        title: (that) => that.renderTitle(),
        content: (that) => that.renderContent(),

    })
    onConfirmMesssage() {
        console.log('444',this);
    }
}
```

### loadProgress

```js
import React from 'react';
import { observer, bind } from 'legions/store-react';
import { loadProgress } from 'legions-lunar/mobx-decorator';

@bind({ store: UserInfoStore })
@observer
export default class CustomsCommodity extends React.Component<IProps, IState> {
  @loadProgress({ state: 'driverDetailAfterSave' })
  componentWillMount() {}
}
```

### Moadl

```js
import {
  OpenDeleteConfirm,
  OpenConfirm,
  OpenModal,
} from 'legions-lunar/antd-toolkit';
```

### LabeledValueValidator

> 下拉框开启 labelInValue 时的特殊表单验证规则

```js
import { LabeledValueValidator } from 'legions-lunar/antd-toolkit';
```

### Model

> 数据模型

```js
import { HlLabeledValue, BaseFormFields } from 'legions-lunar/model';

const selectOptionLabel = new HlLabeledValue(); // 下拉选项Lable模型

// BaseFormFields  基于antd form 表单模型基础类

/*
 * @Author:
 * @Date:
 * @describle:
 */

import {
  FormRuleProperty,
  createFormRule,
} from 'legions-lunar/async.validator';
import { IBaseFormFields } from 'legions-lunar/types/model/BaseFormFields';
import { BaseFormFields,HlLabeledValue} from 'legions-lunar/model';

export class FormFields extends BaseFormFields {
    @FormRuleProperty({
        required: true,
        name: 'multiline',
        error: '多行文本格式错误，应输入22',
        desc: '多行文本',
        type: 'string',
        /* regex:/^[1-9]\d*$/, // 自定义验证规则 */
        validator: (value, error, callback) => {
        // 自定义验证规则
        if (value !== '22') {
            callback(new Error(error));
        } else {
            callback();
        }
        },
    })
    multiline: IBaseFormFields<string> = {
        value: '',
    };

    FormRuleProperty({
        required: true,
        name: 'switched',
        error: '格式错误',
        desc: 'switched',
        type:'boolean',
    })
    switched:IBaseFormFields<boolean>= {
        value:false,
    }
    @FormRuleProperty({
        required: true,
        name: 'checkboxs',
        error: '多选框',
        desc: 'checkboxs',
        type:'array',
    })
    checkboxs:IBaseFormFields<string[]>= {
        value:void 0,
    }
    @FormRuleProperty({
        required:true,
        name: 'selectPage',
        error: '下拉分页不能为空',
        desc: '下拉分页',
        type:'object',
    })
    selectPage: IBaseFormFields<HlLabeledValue>= {
        /* value:{key:'101',label:'(101)阿富汗',title:'101',keyValue:'101'}, */
        value:undefined,
    }
  constructor(form?: FormFields) {
    super();
    FormFields.initMapPropsToFields.call(this,form);
  }
}

export class FormInfoRule extends FormFields {
  constructor(form?: FormFields) {
    super(form);
    createFormRule(FormFields, this);
  }
}
```

### shortHash

> 对象生成 hash

```js
import { shortHash } from 'legions-lunar/object-hash';
```

### schedule

> 订阅监听 mobx 数据方法

```js
import { schedule, ISchedule } from 'legions-lunar/schedule';

let subscription: ISchedule = schedule([this.watch.bind(this)]);

// 取消订阅

subscription.unsubscribe();
```
