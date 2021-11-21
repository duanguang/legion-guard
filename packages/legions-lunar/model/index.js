/**
  * legions-lunar v0.0.9
  * (c) 2021 duanguang
  * @license MIT
  */
/** 下拉选项数据VModel */
var LegionsLabeledValue = /** @class */ (function () {
    function LegionsLabeledValue(params) {
        //@ts-ignore
        this.key = void 0;
        //@ts-ignore
        this.label = void 0;
        /** 扩展字段,即将废弃
         *
         * 新版本组件库将不再支持
         */
        this.keyValue = void 0;
        /** 扩展字段 */
        this.extendedField = void 0;
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
    return LegionsLabeledValue;
}());

export { LegionsLabeledValue };
