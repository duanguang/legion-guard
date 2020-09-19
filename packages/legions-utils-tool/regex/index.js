/**
  * legions-utils-tool v0.0.7
  * (c) 2020 duanguang
  * @license MIT
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.legionsUtilsTool = {}));
}(this, (function (exports) { 'use strict';

  function RegExChk(type, value) {
      var $pintu = value;
      var regex;
      switch (type) {
          //@ts-ignore
          case type instanceof RegExp:
              regex = type;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.required:
              regex = /[^(^\s*)|(\s*$)]/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.chinese:
              regex = /^[\u0391-\uFFE5]+$/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.number:
              regex = /^[\d]+$/; //或者/^\d+$/
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.integer:
              regex = /^[-\+]?\d$/; //正负整数
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.plusInteger:
              regex = /^[1-9]\d*$/;
              //regex=/^[+]?\d$/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.double:
              regex = /^[-\+]?\d+(\.\d+)?$/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.plusDouble:
              regex = /[+]?\d+(\.\d+)?$/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.english:
              regex = /^[A-Z a-z]+$/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.username:
              regex = /^[a-z]\w{3,}$/i;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.mobile:
              regex = /^1[3|4|5|7|8][0-9]\d{8}$/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.phone:
              regex = /^\d{3}-\d{8}|\d{4}-\d{7,8}$/; //手机号
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.email:
              regex = /^[\w\.]+([-]\w+)*@\w+[\.]\w*$/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.url:
              regex = /^http|https:\/\/\w+\.\w+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.path:
              regex = commonRegex.PATH;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.ip:
              regex = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.qq:
              regex = /^[1-9]\d{4,10}$/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.decimal:
              //regex=/^\d+(\.\d+)*$/;
              regex = /^\d+(\.\d{0,2})*$/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.amount:
              regex = /^\d{1,12}(\.\d{1,2})?$/;
              return regex.test($pintu);
          //@ts-ignore
          case exports.validatorType.zipCode:
              regex = /^[1-9]\d{5}$/;
              return regex.test($pintu);
          default:
              return false;
      }
  }
  (function (validatorType) {
      validatorType[(validatorType['required'] = 0)] = 'required';
      validatorType[(validatorType['chinese'] = 1)] = 'chinese';
      validatorType[(validatorType['number'] = 2)] = 'number';
      validatorType[(validatorType['integer'] = 3)] = 'integer';
      validatorType[(validatorType['plusInteger'] = 4)] = 'plusInteger';
      validatorType[(validatorType['double'] = 5)] = 'double';
      validatorType[(validatorType['plusDouble'] = 6)] = 'plusDouble';
      validatorType[(validatorType['english'] = 7)] = 'english';
      validatorType[(validatorType['username'] = 8)] = 'username';
      validatorType[(validatorType['mobile'] = 9)] = 'mobile';
      validatorType[(validatorType['phone'] = 10)] = 'phone';
      validatorType[(validatorType['email'] = 11)] = 'email';
      validatorType[(validatorType['url'] = 12)] = 'url';
      validatorType[(validatorType['ip'] = 13)] = 'ip';
      validatorType[(validatorType['qq'] = 14)] = 'qq';
      validatorType[(validatorType['decimal'] = 15)] = 'decimal';
      validatorType[(validatorType['zipCode'] = 16)] = 'zipCode';
      validatorType[(validatorType['amount'] = 17)] = 'amount';
      validatorType[(validatorType['path'] = 18)] = 'path';
      //@ts-ignore
  })(exports.validatorType || (exports.validatorType = {}));
  var commonRegex = {
      REQUIRED: /[^(^\s*)|(\s*$)]/,
      CHINESE: /^[\u0391-\uFFE5]+$/,
      NUMBER: /^[\d]+$/,
      INTEGER: /^[-\+]?\d$/,
      PLUSINTEGER: /^[+]?\d$/,
      DOUBLE: /^[-\+]?\d+(\.\d+)?$/,
      PLUSDOUBLE: /[+]?\d+(\.\d+)?$/,
      ENGLISH: /^[A-Z a-z]+$/,
      USERNAME: /^[a-z]\w{3,}$/i,
      MOBILE: /^1[3|4|5|7|8][0-9]\d{8}$/,
      PHONE: /^\d{3}-\d{8}|\d{4}-\d{7,8}$/,
      EMAIL: /^[\w\.]+([-]\w+)*@\w+[\.]\w*$/,
      URL: /^http|https:\/\/\w+\.\w+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
      PATH: /^#|\/(.*)\/?$/i,
      IP: /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/,
      QQ: /^[1-9]\d{4,10}$/,
      DECIMAL: /^\d+(\.\d+)*$/,
      ZIPCODE: /^[1-9]\d{5}$/,
      /** 集装箱号 */
      PACKBOXNO: /^[A-Z]{4}[0-9]{7}$/,
      /** 价格，整数位10位，小数位4位 */
      PRICE: /^\d{1,10}(\.\d{0,4})?$/,
      /** 单位转化率，整数位10位，小数位6位 */
      RATE: /^\d{1,10}(\.\d{0,6})?$/,
      /** 重量，整数位9位，小数位9位 */
      WEIGHT: /^\d{1,9}(\.\d{0,9})?$/,
  };

  exports.RegExChk = RegExChk;
  exports.commonRegex = commonRegex;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
