/**
  * legions-decorator v0.0.9
  * (c) 2021 duanguang
  * @license MIT
  */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/*
 * 枚举
 * @Author: linzeqin
 * @Date: 2019-06-28 10:18:13
 * @Last Modified by: duanguang
 * @Last Modified time: 2020-09-29 15:38:32
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
    var globalClassProperty = ['findCode', 'findValue', 'createOptions'];
    return function (target, key) {
        globalClassProperty.map(function (item) {
            if (!target[item]) {
                target[item] = EnumPlus['prototype'][item];
            }
        });
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
            if (member.getCode() === null ||
                member.getCode() === undefined ||
                member.getCode() === '') {
                return "continue";
            }
            /** 过滤取不到value的成员 */
            if (member.getValue() === null ||
                member.getValue() === undefined ||
                member.getValue() === '') {
                return "continue";
            }
            /** 过滤需要移除的成员 */
            if (params &&
                params.excludeKey &&
                params.excludeKey.indexOf(member.getCode()) >= 0) {
                return "continue";
            }
            var code = member.getCode().toString();
            var value = member.getValue().toString();
            /** 判断是否需要格式化 */
            if (params && params.format) {
                arr.push({
                    key: code,
                    value: params.format
                        .split('')
                        .map(function (item) {
                        if (item === 'K')
                            return code;
                        if (item === 'V')
                            return value;
                        return item;
                    })
                        .join(''),
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
/** 枚举类声明扩展接口
 *
 * 如果需要在全局遍历整个枚举成员时，可以继续此抽象接口 */
var AbstractEnumDeclaration = /** @class */ (function (_super) {
    __extends(AbstractEnumDeclaration, _super);
    function AbstractEnumDeclaration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AbstractEnumDeclaration;
}(EnumPlus));

export { AbstractEnumDeclaration, EnumDesc };
