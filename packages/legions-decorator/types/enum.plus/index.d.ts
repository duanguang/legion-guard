/** 基础枚举数据类型 */
declare type EnumType = string | number;
/** 下拉框Options属性 */
interface SelectOptions {
    key: string;
    value: string;
}
/** 枚举数据转下拉数据配置参数 */
interface EnumCreateOptionsParams {
    /** 需要过滤的成员，不在下拉框中显示的 */
    excludeKey?: EnumType[];
    /** value格式化 K = key, V = value */
    format?: string;
}
/** 枚举类成员类型 */
export interface EnumMember {
    /**
     * 获取枚举成员的code
     * @returns {C}
     * @memberof EnumMember
     */
    readonly getCode: () => EnumType;
    /**
     *
     * 获取枚举成员的value
     * @returns {V}
     * @memberof EnumMember
     */
    readonly getValue: () => EnumType;
}
/** 枚举成员修饰器 */
export declare function EnumDesc(code: EnumType, value: EnumType): (target: Object, key: string) => void;
/**
 * 枚举类拓展，提供一些枚举类的便捷操作方法
 * @export
 * @class EnumPlus
 */
export declare class EnumPlus {
    /**
     * 根据传入的value获取code
     * @static
     * @param {EnumType} value
     * @returns
     * @memberof EnumPlus
     */
    findCode(value: EnumType): string | undefined;
    /**
     * 根据传入的code获取value
     * @static
     * @param {EnumType} code
     * @returns
     * @memberof EnumPlus
     */
    findValue(value: EnumType): string | undefined;
    /**
     * 将可枚举成员转为options选项集合,多用于下拉选择框赋值
     * @static
     * @param {EnumCreateOptionsParams} [params]
     * @returns {SelectOptions[]}
     * @memberof EnumPlus
     */
    createOptions(params?: EnumCreateOptionsParams): SelectOptions[];
}
export {};
