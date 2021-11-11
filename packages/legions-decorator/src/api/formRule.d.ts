export declare namespace FormRule {
  type metadata<V,P> = {
    regex?: RegExp;
    /**
     *是否必填
     *
     * @type {Boolean}
     */
    required?: Boolean;

    /**
     * 字段名称
     *
     * @type {string}
     */
    name: string;

    /**
     *
     *
     * @type {string}
     */
    error: string;

    /**
     *描述信息
     *
     * @type {string}
     */
    desc: string;

    /**
     *事件触发器
     *
     * @type {string}
     */
    trigger?: string;

    /**
     *自定义验证
     *
     * @param {V} value 验证的值
     * @param {*} error 错误信息
     * @param {Function} callBack 回调函数
     * @param {P} props 注入到构造函数的对象
     */
    validator?: (value: V, error: string, callBack: Function, props?: P) => any;

    /**
     *
     *校验前转换字段值
     * @memberof IAntdRule
     */
    transform?: (value) => any;

    /**
     * 内建校验类型
     *object: Must be of type object and not Array.isArray.
     * @type {('string'|'number'|'boolean'|'method'|'regexp'|'integer'|'float'|'object'
     *     |'array'|'date'|'upload')}
     * @memberof IAntdRule
     */
    type?:
      | 'string'
      | 'number'
      | 'boolean'
      | 'method'
      | 'regexp'
      | 'integer'
      | 'float'
      | 'object'
      | 'enum'
      | 'url'
      | 'email'
      | 'array'
    | 'date';
    /** 提交接口参数字段名，默认与表单字段名一致 */
    requestKey?: string
    /**
     *服务端数据同步到表单实体模型 之前
     * 执行 dataToFormFields 函数时触发
     */
    beforeDataToFormFields?:(value: V,
      res: any) => V
    
    /**
     * 提交前数据转换
     * 执行formFieldsToData函数时触发
     * 
     */
    submitBeforeTransform?: (value: V,formFields?: any) => any;
     
    /**
     * 提交前转换数据时是否忽略
     * 执行 submitBeforeTransform 函数时生效
     * 转换前过滤掉不需要的表单接口数据
     * 默认不忽略
     * @type {boolean}
     */
     ignore?: boolean;
  };
}
