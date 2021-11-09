import 'reflect-metadata';
import { FormRule } from '../api/formRule';
interface ClassOf<T> {
    new (...args: any[]): T;
}
/**
 * 属性规则描述信息修饰器
 *
 * @export
 * @param {any} metadata
 * @returns
 */
export declare function FormRuleProperty<P = {}, V = {}>(metadata: FormRule.metadata<P, V>): any;
/**
 * 获取表单字段元属性数据
 *
 * @export
 * @template Form
 * @param {ClassOf<Form>} target
 * @param {string} propertyKey
 * @returns
 */
export declare function getFormMetaProperty<Form>(target: ClassOf<Form> | Form, propertyKey: string): FormRule.metadata<any, any>;
/**
 * 生成表单验证规则
 *
 * @export
 * @param {any} Clazz
 * @param {any} that
 *  @param {any} extendRuleClazz
 * @returns
 */
export declare function createFormRule<T>(Clazz: {
    new (): T;
}, that: T, extendRuleClazz?: Function | {
    ruleClazz?: Function;
    props?: Object;
}): (T & undefined) | (T & Function) | (T & {
    ruleClazz?: Function | undefined;
    props?: Object | undefined;
});
export {};
