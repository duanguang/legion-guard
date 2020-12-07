/**
  * legions-utils-tool v0.0.9-rc.2
  * (c) 2020 duanguang
  * @license MIT
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.legionsUtilsTool = {}));
}(this, (function (exports) { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    //@ts-ignore
    var StateMachine = require('javascript-state-machine');
    var firstUpperCase = function (str) {
        return str.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
            return $1.toUpperCase() + $2.toLowerCase();
        });
    };
    function stateMachine(options) {
        var fsm = new StateMachine(options);
        return __assign(__assign({}, fsm), { exceMethod: function (name) {
                fsm[name] && fsm[name]();
            },
            /**
             * 执行监听订阅函数
             *
             * @param {string} name 传入名称跟 transitions[item].name 一致
             * @param {...any[]} arg
             */
            exceObserver: function (name) {
                var arg = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    arg[_i - 1] = arguments[_i];
                }
                var newName = "on" + firstUpperCase(name);
                fsm[newName] && fsm[newName](arg);
            } });
    }

    exports.stateMachine = stateMachine;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
