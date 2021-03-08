import { LabeledValue } from 'antd/lib/select';
/** 下拉选项数据VModel */
export declare class HlLabeledValue implements LabeledValue {
    key: string;
    label: string;
    /** 扩展字段,即将废弃
     *
     * 新版本组件库将不再支持
     */
    keyValue?: string;
    /** 扩展字段 */
    extendedField?: string;
    constructor(params?: HlLabeledValue);
}
