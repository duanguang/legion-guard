/**
  * legions-decorator v0.0.2
  * (c) 2020 duanguang
  * @license MIT
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.legionsDecorator = {}));
}(this, (function (exports) { 'use strict';

    /*
     * 枚举
     * @Author: linzeqin
     * @Date: 2019-06-28 10:18:13
     * @Last Modified by: linzeqin
     * @Last Modified time: 2020-09-25 11:18:52
     */
    var EnumMemberClass = /** @class */ (function () {
        function EnumMemberClass(code, value) {
            this.code = code;
            this.value = value;
        }
        /**
         * 获取枚举成员的code
         * @returns {C}
         * @memberof EnumMemberClass
         */
        EnumMemberClass.prototype.getCode = function () {
            return this.code;
        };
        /**
         *
         * 获取枚举成员的value
         * @returns {V}
         * @memberof EnumMemberClass
         */
        EnumMemberClass.prototype.getValue = function () {
            return this.value;
        };
        return EnumMemberClass;
    }());
    /** 枚举成员修饰器 */
    function EnumDesc(code, value) {
        return function (target, key) {
            Object.defineProperty(target, key, {
                enumerable: true,
                configurable: true,
                value: new EnumMemberClass(code, value),
            });
        };
    }
    /**
     * 枚举类拓展，提供一些枚举类的便捷操作方法
     * @export
     * @class EnumPlus
     */
    var EnumPlus = /** @class */ (function () {
        function EnumPlus() {
        }
        /**
         * 根据传入的value获取code
         * @static
         * @param {EnumType} value
         * @returns
         * @memberof EnumPlus
         */
        EnumPlus.prototype.findCode = function (value) {
            for (var key in this) {
                var member = this[key];
                if (member instanceof EnumMemberClass && member.getValue() === value) {
                    return member.getCode();
                }
            }
            return;
        };
        /**
         * 根据传入的code获取value
         * @static
         * @param {EnumType} code
         * @returns
         * @memberof EnumPlus
         */
        EnumPlus.prototype.findValue = function (value) {
            for (var key in this) {
                var member = this[key];
                if (member instanceof EnumMemberClass && member.getCode() === value) {
                    return member.getValue();
                }
            }
            return;
        };
        /**
         * 将可枚举成员转为options选项集合,多用于下拉选择框赋值
         * @static
         * @param {EnumCreateOptionsParams} [params]
         * @returns {SelectOptions[]}
         * @memberof EnumPlus
         */
        EnumPlus.prototype.createOptions = function (params) {
            var arr = [];
            var _loop_1 = function (key) {
                var member = this_1[key];
                if (!(member instanceof EnumMemberClass)) {
                    return "continue";
                }
                /** 过滤取不到code的成员 */
                if (member.getCode() === null || member.getCode() === undefined || member.getCode() === '') {
                    return "continue";
                }
                /** 过滤取不到value的成员 */
                if (member.getValue() === null || member.getValue() === undefined || member.getValue() === '') {
                    return "continue";
                }
                /** 过滤需要移除的成员 */
                if (params && params.excludeKey && params.excludeKey.indexOf(member.getCode()) >= 0) {
                    return "continue";
                }
                var code = member.getCode().toString();
                var value = member.getValue().toString();
                /** 判断是否需要格式化 */
                if (params && params.format) {
                    arr.push({
                        key: code,
                        value: params.format.split('').map(function (item) {
                            if (item === 'K')
                                return code;
                            if (item === 'V')
                                return value;
                            return item;
                        }).join(''),
                    });
                }
                else {
                    arr.push({
                        key: code,
                        value: value,
                    });
                }
            };
            var this_1 = this;
            for (var key in this) {
                _loop_1(key);
            }
            return arr;
        };
        return EnumPlus;
    }());

    exports.EnumDesc = EnumDesc;
    exports.EnumPlus = EnumPlus;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
