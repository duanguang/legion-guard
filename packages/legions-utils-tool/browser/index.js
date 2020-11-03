/**
  * legions-utils-tool v0.0.8
  * (c) 2020 duanguang
  * @license MIT
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.legionsUtilsTool = {}));
}(this, (function (exports) { 'use strict';

  function getNetworkType() {
      var ua = navigator.userAgent;
      var networkStr = ua.match(/NetType\/\w+/)
          ? //@ts-ignore
              ua.match(/NetType\/\w+/)[0]
          : 'NetType/other';
      networkStr = networkStr.toLowerCase().replace('nettype/', '');
      var networkType = '';
      switch (networkType) {
          case 'wifi':
              networkType = 'wifi';
              break;
          case '4g':
              networkType = '4g';
              break;
          case '3g':
              networkType = '3g';
              break;
          case '3gnet':
              networkType = '3g';
              break;
          case '2g':
              networkType = '2g';
              break;
          default:
              networkType = 'other';
      }
      return networkType;
  }
  function getBrowser() {
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      var isIE11 = userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/); // IE 11中userAgent已经不包含'msie'所以用'msie'不能判断IE 11
      var isOpera = userAgent.indexOf('Opera') > -1; //判断是否Opera浏览器
      var isIE = (userAgent.indexOf('compatible') > -1 &&
          userAgent.indexOf('MSIE') > -1 &&
          !isOpera) ||
          isIE11; //判断是否IE浏览器
      var isEdge = userAgent.indexOf('Edge') > -1; //判断是否IE的Edge浏览器
      var isFF = userAgent.indexOf('Firefox') > -1; //判断是否Firefox浏览器
      var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1; //判断是否Safari浏览器
      var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1; //判断Chrome浏览器
      if (isIE) {
          var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
          reIE.test(userAgent);
          var fIEVersion = parseFloat(RegExp['$1']);
          if (fIEVersion == 7) {
              return 'IE7';
          }
          else if (fIEVersion == 8) {
              return 'IE8';
          }
          else if (fIEVersion == 9) {
              return 'IE9';
          }
          else if (fIEVersion == 10) {
              return 'IE10';
          }
          else if (isIE11) {
              // IE 11中userAgent已经不包含'msie'所以用'msie'不能判断IE 11
              return 'IE11';
          }
          else {
              return 'IE';
          } //IE版本过低
      }
      if (isOpera) {
          return 'Opera';
      }
      if (isEdge) {
          return 'Edge';
      }
      if (isFF) {
          return 'Firefox';
      }
      if (isSafari) {
          return 'Safari';
      }
      if (isChrome) {
          return 'Chrome';
      }
      return '--';
  }
  var BrowserMatch = {
      browser: '',
      version: '',
      OS: '',
      init: function () {
          //@ts-ignore
          this.browser = this.getBrowser().browser || '未知浏览器'; //获取浏览器名
          //@ts-ignore
          this.version = this.getBrowser().version || '未知浏览器版本号'; //获取浏览器版本
          //@ts-ignore
          this.OS = this.getOS() + ' ' + this.getDigits() || '未知操作系统'; //系统版本号
      },
      getOS: function () {
          //判断所处操作系统
          var sUserAgent = navigator.userAgent.toLowerCase();
          var isWin = navigator.platform == 'Win32' ||
              navigator.platform == 'Win64' ||
              navigator.platform == 'wow64';
          var isMac = navigator.platform == 'Mac68K' ||
              navigator.platform == 'MacPPC' ||
              navigator.platform == 'Macintosh' ||
              navigator.platform == 'MacIntel';
          if (isMac)
              return 'Mac';
          var isUnix = navigator.platform == 'X11' && !isWin && !isMac;
          if (isUnix)
              return 'Unix';
          var isLinux = String(navigator.platform).indexOf('Linux') > -1;
          //@ts-ignore
          var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) == 'android';
          if (isLinux) {
              if (bIsAndroid)
                  return 'Android';
              else
                  return 'Linux';
          }
          if (isWin) {
              var isWin2K = sUserAgent.indexOf('Windows nt 5.0') > -1 ||
                  sUserAgent.indexOf('Windows 2000') > -1;
              if (isWin2K)
                  return 'Win2000';
              var isWinXP = sUserAgent.indexOf('Windows nt 5.1') > -1 ||
                  sUserAgent.indexOf('Windows XP') > -1;
              sUserAgent.indexOf('Windows XP') > -1;
              if (isWinXP)
                  return 'WinXP';
              var isWin2003 = sUserAgent.indexOf('Windows nt 5.2') > -1 ||
                  sUserAgent.indexOf('Windows 2003') > -1;
              if (isWin2003)
                  return 'Win2003';
              var isWinVista = sUserAgent.indexOf('Windows nt 6.0') > -1 ||
                  sUserAgent.indexOf('Windows Vista') > -1;
              if (isWinVista)
                  return 'WinVista';
              var isWin7 = sUserAgent.indexOf('windows nt 6.1') > -1 ||
                  sUserAgent.indexOf('Windows 7') > -1;
              if (isWin7)
                  return 'Win7';
              var isWin8 = sUserAgent.indexOf('windows nt 6.2') > -1 ||
                  sUserAgent.indexOf('Windows 8') > -1;
              if (isWin8)
                  return 'Win8';
              var isWin10 = sUserAgent.indexOf('windows nt 10.0') > -1 ||
                  sUserAgent.indexOf('Windows 10') > -1;
              if (isWin10)
                  return 'Win10';
          }
          return '其他';
      },
      getDigits: function () {
          //判断当前操作系统的版本号
          var sUserAgent = navigator.userAgent.toLowerCase();
          var is64 = sUserAgent.indexOf('win64') > -1 || sUserAgent.indexOf('wow64') > -1;
          var rSafari = /mac os x ([\w.]+).*()\)/;
          if (is64) {
              return '64位';
          }
          else {
              var matchBS = rSafari.exec(sUserAgent);
              if (matchBS !== null) {
                  return matchBS[1];
              }
              return '32位';
          }
      },
      getBrowser: function () {
          // 获取浏览器名
          var rEdge = /(chrome)\/([\w.]+)/; //IE
          var rFirefox = /(firefox)\/([\w.]+)/; //火狐
          var rOpera = /(opera).+version\/([\w.]+)/; //旧Opera
          var rNewOpera = /(opr)\/(.+)/; //新Opera 基于谷歌
          var rChrome = /(chrome)\/([\w.]+)/; //谷歌
          //let rMetasr =  /(metasr)\/([\w.]+)/;//搜狗
          var rSafari = /version\/([\w.]+).*(safari)/;
          var ua = navigator.userAgent.toLowerCase();
          var matchBS, matchBS2;
          var browserVersion = getBrowser();
          //IE 低版
          if (browserVersion.indexOf('IE') > -1) {
              switch (browserVersion) {
                  case 'IE7':
                      return {
                          browser: 'Microsoft IE',
                          desc: 'IE: 7',
                          version: 7,
                      };
                  case 'IE8':
                      return {
                          browser: 'Microsoft IE',
                          desc: 'IE: 8',
                          version: 8,
                      };
                  case 'IE9':
                      return {
                          browser: 'Microsoft IE',
                          desc: 'IE: 9',
                          version: 9,
                      };
                  case 'IE10':
                      return {
                          browser: 'Microsoft IE',
                          version: 10,
                          desc: 'IE: 10',
                      };
                  case 'IE11':
                      return {
                          browser: 'Microsoft IE',
                          desc: 'IE: 11',
                          version: 11,
                      };
                  default:
                      return {
                          browser: 'Microsoft IE',
                          desc: 'Undefined',
                          version: 11,
                      };
              }
          }
          if (browserVersion === 'Chrome') {
              matchBS = rChrome.exec(ua);
              //@ts-ignore
              if (matchBS != null && !window.attachEvent) {
                  matchBS2 = rNewOpera.exec(ua);
                  if (matchBS2 == null) {
                      return {
                          browser: '谷歌',
                          desc: 'Chrome/' + matchBS[2] || '0',
                          version: matchBS[2],
                      };
                  }
                  else {
                      return {
                          browser: 'Opera',
                          desc: 'opr/' + matchBS2[2] || '0',
                          version: matchBS2[2],
                      };
                  }
              }
          }
          if (browserVersion === 'Opera') {
              //Oper浏览器
              matchBS = rOpera.exec(ua);
              //@ts-ignore
              if (matchBS != null && !window.attachEvent) {
                  return {
                      browser: 'Opera',
                      desc: 'Chrome/' + matchBS[2] || '0',
                      version: matchBS[2],
                  };
              }
          }
          //IE最新版
          if (browserVersion === 'Edge') {
              matchBS = rEdge.exec(ua);
              //@ts-ignore
              if (matchBS != null && !window.attachEvent) {
                  return {
                      browser: 'Microsoft Edge',
                      desc: 'Chrome/' + matchBS[2] || '0',
                      version: matchBS[2],
                  };
              }
          }
          //火狐浏览器
          if (browserVersion === 'Firefox') {
              matchBS = rFirefox.exec(ua);
              //@ts-ignore
              if (matchBS != null && !window.attachEvent) {
                  return {
                      browser: '火狐',
                      desc: 'Firefox/' + matchBS[2] || '0',
                      version: matchBS[2],
                  };
              }
          }
          if (browserVersion === 'Safari') {
              matchBS = rSafari.exec(ua);
              if (matchBS != null &&
                  //@ts-ignore
                  !window.attachEvent &&
                  //@ts-ignore
                  !window.chrome &&
                  //@ts-ignore
                  !window.opera) {
                  return {
                      browser: 'Safari',
                      desc: 'Safari/' + matchBS[1] || '0',
                      version: matchBS[1],
                  };
              }
          }
          return {
              browser: '',
              version: null,
          };
      },
  };
  function checkBrowser(openBrowserUpdateMessage) {
      /**浏览器升级提示**/
      var d = document.createElement('div');
      d.innerHTML =
          '<style>.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px;} a.btn {display: inline-block;background-color: #0885f2;color: #ffffff;line-height:16px;border: 1px solid #0885f2;outline: none;cursor: pointer;border-radius: 2px;cursor:pointer;} a.btn:hover {color:#fff;}</style> <div  id = "updateBrowseBoxVersion" style = "position: fixed;top: 0;left:0px;width: 100%;color: red;border-bottom: 1px solid #b1b4b9;padding-left: 10px;" class="update-browse-tips" > 您的浏览器版本过低，可能无法正常使用部分功能，请升级。推荐使用谷歌，火狐浏览器<a class="btn btn-update" target="_blank" href="http://browsehappy.osfipin.com/">立即升级</a></div > ';
      var func = function () {
          if (openBrowserUpdateMessage &&
              typeof openBrowserUpdateMessage === 'function') {
              openBrowserUpdateMessage();
              return;
          }
          var updateBrowseBoxVersion = document.getElementById('updateBrowseBoxVersion');
          if (updateBrowseBoxVersion !== null) {
              return;
          }
          var s = document.getElementsByTagName('body')[0];
          if ('undefined' == typeof s) {
              //@ts-ignore
              setTimeout(f, 10);
          }
          else {
              s.insertBefore(d, s.firstChild);
          }
      };
      var BrowserMatchObject = BrowserMatch.getBrowser();
      var version = parseFloat(BrowserMatchObject.version);
      /**IE10及其以下提示*/
      if (!('WebSocket' in window && 2 === window.WebSocket.CLOSING) ||
          window.navigator.userAgent.indexOf('MSIE') >= 1) {
          /* if('continue' == window.sessionStorage.getItem('UPDATE_BROWSE_TIPS')) return;
              let handlerContinue = "document.getElementById('updateBrowseBox').parentNode.removeChild(document.getElementById('updateBrowseBox'));window.sessionStorage.setItem('UPDATE_BROWSE_TIPS', 'continue')"; */
          func();
          return false;
      }
      if (BrowserMatchObject.browser === '谷歌' && version < 60) {
          func();
          return false;
      }
      return true;
  }

  exports.BrowserMatch = BrowserMatch;
  exports.checkBrowser = checkBrowser;
  exports.getNetworkType = getNetworkType;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
