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

  function isObject(value) {
      return Object.prototype.toString.call(value) === '[object Object]';
  }
  var postMessage = {
      receiveMessage: function (receive) {
          window.addEventListener('message', function (e) {
              if (receive && typeof receive === 'function') {
                  receive(e);
              }
          }, false);
      },
      /**
       * 发送消息到子窗口
       *
       * @param {*} options
       * @memberof PostMessageUtils
       */
      sendMessageToChildrenWin: function (options) {
          options = options || {};
          if (!isObject(options)) {
              options = {};
          }
          options.data = options.data || '';
          options.origin = options.origin || '*';
          options.childrenId = options.childrenId || '';
          if (!options.childrenId) {
              console.error('请传入子窗口DOM元素id');
              return;
          }
          var iframeWin = document.getElementById(options.childrenId);
          if (!iframeWin) {
              console.error('找不到子窗口DOM元素,请检查id 是否正确');
              return;
          }
          //@ts-ignore
          iframeWin.contentWindow.postMessage(options.data, options.origin);
      },
      /**
       * 发送消息到父窗口
       *
       * @param {*} options
       * @memberof PostMessageUtils
       */
      sendMessageToParentWin: function (options) {
          options = options || {};
          if (!isObject(options)) {
              options = {};
          }
          options.data = options.data || '';
          options.origin = options.origin || '*';
          var parentWin = window.parent || window.top;
          if (!parentWin) {
              console.error('找不到子窗口DOM元素,请检查id 是否正确');
              return;
          }
          parentWin.postMessage(options.data, options.origin);
      },
  };

  /** DOM节点绑定事件 */
  var on = (function () {
      //@ts-ignore
      if (document.addEventListener) {
          return function (element, event, handler, useCapture) {
              if (useCapture === void 0) { useCapture = false; }
              if (element && event && handler) {
                  element.addEventListener(event, handler, useCapture);
              }
          };
      }
      else {
          return function (element, event, handler) {
              if (element && event && handler) {
                  //@ts-ignore
                  element.attachEvent('on' + event, handler);
              }
          };
      }
  })();
  /** 卸载DOM元素节点事件 */
  var off = (function () {
      // @ts-ignore
      if (document.removeEventListener) {
          return function (element, event, handler, useCapture) {
              if (useCapture === void 0) { useCapture = false; }
              if (element && event) {
                  element.removeEventListener(event, handler, useCapture);
              }
          };
      }
      else {
          return function (element, event, handler) {
              if (element && event) {
                  // @ts-ignore
                  element.detachEvent('on' + event, handler);
              }
          };
      }
  })();

  exports.off = off;
  exports.on = on;
  exports.postMessage = postMessage;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
