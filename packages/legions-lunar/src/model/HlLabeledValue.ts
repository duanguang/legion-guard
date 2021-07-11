import { LabeledValue } from 'antd/lib/select';
/** 下拉选项数据VModel */
export class HlLabeledValue implements LabeledValue {
  //@ts-ignore
  key: string = void 0;
  //@ts-ignore
  label: string = void 0;
  /** 扩展字段,即将废弃
   * 
   * 新版本组件库将不再支持
   */
  keyValue?: string = void 0;
  /** 扩展字段 */
  extendedField?: string = void 0;
  constructor(params?: HlLabeledValue) {
    if (params) {
      this.key = params.key;
      this.label = params.label;
      if (this.keyValue) {
        this.keyValue = params.keyValue;
      }
      if (this.extendedField) {
        this.extendedField = params.extendedField;
      }
    }
  }
}
