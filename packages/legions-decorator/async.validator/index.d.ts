import 'reflect-metadata';
import { FormRule } from '../../types/api/formRule';
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
export declare function getFormProperty<Form>(target: ClassOf<Form>, propertyKey: string): FormRule.metadata<any, any>;
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
