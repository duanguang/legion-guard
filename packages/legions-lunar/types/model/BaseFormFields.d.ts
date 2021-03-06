import { ClassOf } from '../../types/api/typescript';
import { IAntdRule } from '../../types/antd/form';
/**
 *
 *
 * @export
 * @interface IBaseFormFields
 * @template T 表单属性数据类型, 一般指value 数据类型
 * @template JsonMap submitBeforeTransform 提交前调用此函数返回的数据结构
 * @template formFields 表单数据源数据类型
 */
export interface IBaseFormFields<T, JsonMap = {}, formFields = {}> {
    value: T;
    /**
     * 请求参数key 对应后端表单接口所传参数名称
     *
     * @type {string}
     * @memberof IFormFields
     */
    requestParamKey?: string;
    /**
     * 提交前转换数据时是否忽略
     * 执行 submitBeforeTransform 函数时生效
     * 转换前过滤掉不需要的表单接口数据
     * 默认不忽略
     * @type {boolean}
     * @memberof IBaseFormFields
     */
    ignore?: boolean;
    isSave?: boolean;
    /**
     * 提交前数据转换
     * 执行formFieldsToData函数时触发
     * @memberof IBaseFormFields
     */
    submitBeforeTransform?: (value: T, formFields?: formFields) => JsonMap;
    /**
     * 服务端数据同步到表单实体模型 之前
     * 执行 dataToFormFields 函数时触发
     * @memberof IBaseFormFields
     */
    beforeDataToFormFields?: <ResData>(value: T, resData: ResData) => JsonMap;
}
declare type IFormRules<FormRules> = {
    [P in keyof FormRules]: IAntdRule[];
};
/** 表单字段基础类
 *
 * 包含字段常用方法，如服务端接口数据同步到表单实体；表单vmodel数据映射到表单接口数据模型
 */
export declare class BaseFormFields {
    /**
     *
     * 服务端数据同步到表单实体模型
     *
     * @static
     * @template Form
     * @template ResData
     * @param {Form} formFields 表单实体模型
     * @param {ResData} data 服务端实体模型
     * @memberof BaseFormFields
     */
    static dataToFormFields<Form, ResData>(formFields: Form, data: ResData): Form;
    /**
     * 表单UI数据同步到表单接口
     *
     *
     * @static
     * @template Form 表单实体模型
     * @template FormPrams 表单接口参数结构
     * @param {Form} formFields 前端UI表单实体模型
     * @param {Form} values 映射的数据源
     * @returns {FormPrams} 返回数据结构
     * @memberof BaseFormFields
     */
    static formFieldsToData<Form, FormPrams>(formFields: Function, values?: Form): FormPrams;
    /**
     *
     * 把父组件的属性映射到表单项上
     * @protected
     * @static
     * @template Form
     * @param {Form} form
     * @param {ClassOf<Form>} formClass
     * @returns {Form}
     * @memberof BaseFormFields
     */
    /**
     *
     * 初始表单数据结构 父级构造函数中使用,其他地方请勿调用
     * @static
     * @template Form
     * @param {Form} form
     * @memberof BaseFormFields
     */
    static initMapPropsToFields<Form>(form: Form): void;
    /**
     *
     * 生成表单规则
     * @static
     * @template Form
     * @param {ClassOf<Form>} formClass
     * @returns {IFormRules<Form>}
     * @memberof BaseFormFields
     */
    static createFormRules<Form>(formClass: ClassOf<Form>, structparame?: any): IFormRules<Form>;
}
export {};
