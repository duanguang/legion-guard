/**
  *  legions-decorator v0.0.7
  * (c) 2021 duanguang
  * @license MIT
  */
import 'legions-utils-tool/regex';
import 'reflect-metadata';

var FORM_META_DATA_KEY = 'JsonProperty';
/**
 * 属性规则描述信息修饰器
 *
 * @export
 * @param {any} metadata
 * @returns
 */
function FormRuleProperty(metadata) {
    var decoratorMetaData;
    if (metadata && typeof metadata === 'object') {
        decoratorMetaData = metadata;
    }
    else {
        throw new Error('meta data in FormRule property is undefined. meta data: ' + metadata);
    }
    return Reflect.metadata(FORM_META_DATA_KEY, decoratorMetaData);
}

export { FormRuleProperty };
