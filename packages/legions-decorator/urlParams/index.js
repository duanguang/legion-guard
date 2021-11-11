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

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/*
 * @Author: zhaoliang
 * @Date: 2020-12-29 15:08:15
 * @LastEditTime: 2021-07-18 14:13:05
 * @LastEditors: duanguang
 * @Description: In User Settings Edit
 * @FilePath: /legion-guard/packages/legions-decorator/src/urlParams/index.ts
 */
var decoratorProperty = function (target, key, url) {
    return Object.defineProperty(target, key, {
        get: function () {
            var string = url ? url : window.location.href;
            var reg = new RegExp(key + '=([^&]*)', 'i');
            var r = string.match(reg);
            if (r !== null)
                return unescape(r[1]);
            return void 0;
        },
    });
};
// @ts-ignore
var urlParams = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (typeof args[0] === 'string') {
        var _a = __read(args, 1), url_1 = _a[0];
        // @ts-ignore
        return function (target, key, descriptor) {
            decoratorProperty(target, key, url_1);
        };
    }
    else {
        var _b = __read(args, 2), target = _b[0], key = _b[1];
        return decoratorProperty(target, key);
    }
};

export { urlParams };
