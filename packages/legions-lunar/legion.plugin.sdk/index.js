/**
 * legions-lunar v0.0.4
 * (c) 2020 duanguang
 * @license MIT
 */
import { notification } from 'antd';
import React from 'react';
import {
  legionsPlugins as legionsPlugins$1,
  LegionsPluginsExecute as LegionsPluginsExecute$1,
} from 'legions-thirdparty-plugin';

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

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

/** 公共SDK方法，包含用户浏览器信息,写入公共方法 */
//@ts-ignore
/* export const legionsPlugins: (onLoaded?: () => void,src?: string) => IlegionsPlugin = _LegionsPlugins(); */
//@ts-ignore
var legionsPlugins = function (onLoaded, src) {
  return legionsPlugins$1({
    onLoaded: onLoaded,
    src: src,
    notification: function () {
      var key = 'open' + Date.now();
      notification.warning({
        btn: React.createElement(
          'a',
          { href: 'http://browsehappy.osfipin.com/' },
          '\u7ACB\u5373\u5347\u7EA7'
        ),
        duration: void 0,
        key: key,
        className: key,
        message: React.createElement(
          'span',
          { style: { color: 'red' } },
          '\u6D4F\u89C8\u5668\u5347\u7EA7\u901A\u77E5'
        ),
        description: React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            '\u60A8\u7684\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u53EF\u80FD\u65E0\u6CD5\u4F7F\u7528\u90E8\u5206\u529F\u80FD\u3002'
          ),
          React.createElement(
            'p',
            null,
            '\u4E3A\u4E86\u83B7\u5F97\u66F4\u597D\u7684\u4F7F\u7528\u4F53\u9A8C\uFF0C\u8BF7\u60A8\u5347\u7EA7\u3002'
          ),
          React.createElement(
            'p',
            { style: { color: 'red' } },
            '\u63A8\u8350\u4F7F\u7528\u8C37\u6B4C\uFF0C\u706B\u72D0\u6D4F\u89C8\u5668!'
          )
        ),
      });
      var closeDom = document.getElementsByClassName(key);
      if (closeDom && closeDom.length > 0) {
        closeDom = closeDom[0].getElementsByClassName(
          'ant-notification-notice-close'
        );
        if (closeDom && closeDom.length > 0) {
          var closeDoms = closeDom[0];
          closeDoms.setAttribute('style', 'display:none');
        }
      }
    },
  });
};
/**全局变量LegionsPlugins执行函数
 * 回调函数执行时机，如果SDK资源未加载，则在资源加载完成时执行。如果资源已经准备妥当，则直接执行回调
 *
 */
var LegionsPluginsExecute = LegionsPluginsExecute$1;
/** 日志记录 */
var LoggerManager = {
  consoleLog: function (options) {
    LegionsPluginsExecute(function (legions) {
      var logConent = options.logConent || {};
      // @ts-ignore
      if (
        legions.DataOrigin.has(options.methodsName) &&
        //@ts-ignore
        typeof legions.DataOrigin.get(options.methodsName) === 'function'
      ) {
        // @ts-ignore
        var func = legions.DataOrigin.get(options.methodsName);
        // @ts-ignore
        func(__assign({}, logConent), options.type);
      }
    });
  },
  report: function (options, reportApi) {
    var logConent = options.content || {};
    var methodsName = 'loggerReport';
    LegionsPluginsExecute(function (legions) {
      if (
        legions.DataOrigin.has(methodsName) &&
        typeof legions.DataOrigin.get(methodsName) === 'function'
      ) {
        //@ts-ignore
        legions.DataOrigin.get(methodsName)(
          __assign({}, logConent),
          options.type
        );
      } else {
        legions.DataOrigin.add(methodsName, function (value, type) {
          var user = void 0;
          if (legions.DataOrigin.has('sysUserInfos')) {
            user = legions.DataOrigin.get('sysUserInfos');
          }
          legions.BrowserMatch.init();
          var params = __assign(__assign({}, options), {
            userInfo: JSON.stringify(user ? user : {}),
            browserEnvironment: JSON.stringify({
              platform: navigator.platform,
              OS: legions.BrowserMatch.OS,
              browser: legions.BrowserMatch.browser,
              version: legions.BrowserMatch.version,
            }),
          });
          /// 上报代码   实时上报
          if (typeof reportApi === 'function') {
            reportApi && reportApi(params);
          }
        });
        //@ts-ignore
        legions.DataOrigin.get(methodsName)(
          __assign({}, logConent),
          options.type
        );
      }
    });
  },
};

export { LegionsPluginsExecute, LoggerManager, legionsPlugins };
