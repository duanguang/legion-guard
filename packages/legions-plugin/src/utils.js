'use strict';

export function isUdefined(value) {
  return value === undefined;
}
export function isFunction(value) {
  return typeof value === 'function';
}
export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}
export function isString(value) {
  return typeof value === 'string';
}
export function isBoolean(value) {
  return typeof value === 'boolean';
}
export function isJSON(str) {
  if (typeof str === 'string') {
    try {
      let obj = JSON.parse(str);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log('error：' + str + '!!!' + e);
      return false;
    }
  }
}

export function getNetworkType() {
  let ua = navigator.userAgent;
  let networkStr = ua.match(/NetType\/\w+/)
    ? ua.match(/NetType\/\w+/)[0]
    : 'NetType/other';
  networkStr = networkStr.toLowerCase().replace('nettype/', '');
  let networkType = '';
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
export function assignObject(obj1, obj2) {
  for (let name in obj2) {
    if (obj2.hasOwnProperty(name)) {
      obj1[name] = obj2[name];
    }
  }
  return obj1;
  for (let name in obj2) {
    if (obj2.hasOwnProperty(name)) {
      obj1[name] = obj2[name];
    }
  }
  return obj1;
}
function typeDecide(o, type) {
  return Object.prototype.toString.call(o) === '[object ' + type + ']';
}
function stringify(obj) {
  if (window.JSON && window.JSON.stringify) {
    return JSON.stringify(obj);
  }
  var t = typeof obj;
  if (t != 'object' || obj === null) {
    // simple data type
    if (t == 'string') obj = '"' + obj + '"';
    return String(obj);
  } else {
    // recurse array or object
    var n,
      v,
      json = [],
      arr = obj && obj.constructor == Array;

    // fix.
    var self = arguments.callee;

    for (n in obj) {
      if (obj.hasOwnProperty(n)) {
        v = obj[n];
        t = typeof v;
        if (obj.hasOwnProperty(n)) {
          if (t == 'string') v = '"' + v + '"';
          else if (t == 'object' && v !== null)
            // v = jQuery.stringify(v);
            v = self(v);
          json.push((arr ? '' : '"' + n + '":') + String(v));
        }
      }
    }
    return (arr ? '[' : '{') + String(json) + (arr ? ']' : '}');
  }
}
export function serializeObj(obj) {
  let parames = '';
  Object.keys(obj).forEach((name) => {
    if (typeDecide(obj[name], 'Object')) {
      parames += name + '=' + stringify(obj[name]);
    } else {
      parames += name + '=' + obj[name] + '^';
    }
  });
  return encodeURIComponent(parames.substr(0, parames.length - 1));
}

function IEVersion() {
  let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  let isIE =
    userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1; //判断是否IE<11浏览器
  let isEdge = userAgent.indexOf('Edge') > -1 && !isIE; //判断是否IE的Edge浏览器
  let isIE11 =
    userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (isIE) {
    let reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    let fIEVersion = parseFloat(RegExp['$1']);
    if (fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6; //IE版本<=7
    }
  } else if (isEdge) {
    return 'edge'; //edge
  } else if (isIE11) {
    return 11; //IE11
  } else {
    return -1; //不是ie浏览器
  }
}
function getBrowser() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

  var isIE11 = userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/); // IE 11中userAgent已经不包含'msie'所以用'msie'不能判断IE 11
  var isOpera = userAgent.indexOf('Opera') > -1; //判断是否Opera浏览器
  var isIE =
    (userAgent.indexOf('compatible') > -1 &&
      userAgent.indexOf('MSIE') > -1 &&
      !isOpera) ||
    isIE11; //判断是否IE浏览器
  var isEdge = userAgent.indexOf('Edge') > -1; //判断是否IE的Edge浏览器
  var isFF = userAgent.indexOf('Firefox') > -1; //判断是否Firefox浏览器
  var isSafari =
    userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1; //判断是否Safari浏览器
  var isChrome =
    userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1; //判断Chrome浏览器

  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp['$1']);
    if (fIEVersion == 7) {
      return 'IE7';
    } else if (fIEVersion == 8) {
      return 'IE8';
    } else if (fIEVersion == 9) {
      return 'IE9';
    } else if (fIEVersion == 10) {
      return 'IE10';
    } else if (isIE11) {
      // IE 11中userAgent已经不包含'msie'所以用'msie'不能判断IE 11
      return 'IE11';
    } else {
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

export const BrowserMatch = {
  init: function () {
    this.browser = this.getBrowser().browser || '未知浏览器'; //获取浏览器名
    this.version = this.getBrowser().version || '未知浏览器版本号'; //获取浏览器版本
    this.OS = this.getOS() + ' ' + this.getDigits() || '未知操作系统'; //系统版本号
  },
  getOS: function () {
    //判断所处操作系统
    let sUserAgent = navigator.userAgent.toLowerCase();

    let isWin =
      navigator.platform == 'Win32' ||
      navigator.platform == 'Win64' ||
      navigator.platform == 'wow64';

    let isMac =
      navigator.platform == 'Mac68K' ||
      navigator.platform == 'MacPPC' ||
      navigator.platform == 'Macintosh' ||
      navigator.platform == 'MacIntel';
    if (isMac) return 'Mac';
    let isUnix = navigator.platform == 'X11' && !isWin && !isMac;
    if (isUnix) return 'Unix';
    let isLinux = String(navigator.platform).indexOf('Linux') > -1;
    let bIsAndroid = sUserAgent.toLowerCase().match(/android/i) == 'android';
    if (isLinux) {
      if (bIsAndroid) return 'Android';
      else return 'Linux';
    }
    if (isWin) {
      let isWin2K =
        sUserAgent.indexOf('Windows nt 5.0') > -1 ||
        sUserAgent.indexOf('Windows 2000') > -1;
      if (isWin2K) return 'Win2000';
      let isWinXP =
        sUserAgent.indexOf('Windows nt 5.1') > -1 ||
        sUserAgent.indexOf('Windows XP') > -1;
      sUserAgent.indexOf('Windows XP') > -1;
      if (isWinXP) return 'WinXP';
      let isWin2003 =
        sUserAgent.indexOf('Windows nt 5.2') > -1 ||
        sUserAgent.indexOf('Windows 2003') > -1;
      if (isWin2003) return 'Win2003';
      let isWinVista =
        sUserAgent.indexOf('Windows nt 6.0') > -1 ||
        sUserAgent.indexOf('Windows Vista') > -1;
      if (isWinVista) return 'WinVista';
      let isWin7 =
        sUserAgent.indexOf('windows nt 6.1') > -1 ||
        sUserAgent.indexOf('Windows 7') > -1;
      if (isWin7) return 'Win7';
      let isWin8 =
        sUserAgent.indexOf('windows nt 6.2') > -1 ||
        sUserAgent.indexOf('Windows 8') > -1;
      if (isWin8) return 'Win8';
      let isWin10 =
        sUserAgent.indexOf('windows nt 10.0') > -1 ||
        sUserAgent.indexOf('Windows 10') > -1;
      if (isWin10) return 'Win10';
    }
    return '其他';
  },
  getDigits: function () {
    //判断当前操作系统的版本号
    let sUserAgent = navigator.userAgent.toLowerCase();
    let is64 =
      sUserAgent.indexOf('win64') > -1 || sUserAgent.indexOf('wow64') > -1;
    let rSafari = /mac os x ([\w.]+).*()\)/;
    if (is64) {
      return '64位';
    } else {
      let matchBS = rSafari.exec(sUserAgent);
      if (matchBS !== null) {
        return matchBS[1];
      }
      return '32位';
    }
  },
  getBrowser: function () {
    // 获取浏览器名
    let rEdge = /(chrome)\/([\w.]+)/; //IE

    let rFirefox = /(firefox)\/([\w.]+)/; //火狐
    let rOpera = /(opera).+version\/([\w.]+)/; //旧Opera
    let rNewOpera = /(opr)\/(.+)/; //新Opera 基于谷歌
    let rChrome = /(chrome)\/([\w.]+)/; //谷歌
    //let rMetasr =  /(metasr)\/([\w.]+)/;//搜狗
    let rSafari = /version\/([\w.]+).*(safari)/;

    let ua = navigator.userAgent.toLowerCase();

    let matchBS, matchBS2;
    const browserVersion = getBrowser();
    //IE 低版
    if (browserVersion.indexOf('IE') > -1) {
      switch (browserVersion) {
        case 'IE7':
          return {
            browser: 'Microsoft IE',
            desc:'IE: 7', //内核版本号
            version: 7, //内核版本号
          };
          break;
        case 'IE8':
          return {
            browser: 'Microsoft IE',
            desc: 'IE: 8',
            version: 8,
          };
          break;
        case 'IE9':
          return {
            browser: 'Microsoft IE',
            desc: 'IE: 9',
            version: 9,
          };
          break;
        case 'IE10':
          return {
            browser: 'Microsoft IE',
            version: 10,
            desc:'IE: 10',
          };
          break;
        case 'IE11':
          return {
            browser: 'Microsoft IE',
            desc: 'IE: 11',
            version: 11,
          };
          break;
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
      if (matchBS != null && !window.attachEvent) {
        matchBS2 = rNewOpera.exec(ua);
        if (matchBS2 == null) {
          return {
            browser: '谷歌',
            desc: 'Chrome/' + matchBS[2] || '0',
            version: matchBS[2],
          };
        } else {
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
      if (matchBS != null && !window.attachEvent) {
        return {
          browser: 'Opera',
          desc: 'Chrome/' + matchBS[2] || '0',
          version:  matchBS[2] ,
        };
      }
    }
    //IE最新版
    if (browserVersion === 'Edge') {
      matchBS = rEdge.exec(ua);
      if (matchBS != null && !window.attachEvent) {
        return {
          browser: 'Microsoft Edge',
          desc: 'Chrome/' + matchBS[2] || '0',
          version:  matchBS[2] ,
        };
      }
    }
    //火狐浏览器
    if (browserVersion === 'Firefox') {
      matchBS = rFirefox.exec(ua);
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
      if (
        matchBS != null &&
        !window.attachEvent &&
        !window.chrome &&
        !window.opera
      ) {
        return {
          browser: 'Safari',
          desc: 'Safari/' + matchBS[1] || '0',
          version:  matchBS[1],
        };
      }
    }
    return {
      browser: '',
      version: null,
    };
  },
};
export function checkBrowser() {
  /**浏览器升级提示**/
  const DataOrigin = legionsPlugins.DataOrigin
  let d = document.createElement('div');
  d.innerHTML =
    '<style>.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px;} a.btn {display: inline-block;background-color: #0885f2;color: #ffffff;line-height:16px;border: 1px solid #0885f2;outline: none;cursor: pointer;border-radius: 2px;cursor:pointer;} a.btn:hover {color:#fff;}</style> <div  id = "updateBrowseBoxVersion" style = "position: fixed;top: 0;left:0px;width: 100%;color: red;border-bottom: 1px solid #b1b4b9;padding-left: 10px;" class="update-browse-tips" > 您的浏览器版本过低，可能无法正常使用部分功能，请升级。推荐使用谷歌，火狐浏览器<a class="btn btn-update" target="_blank" href="http://browsehappy.osfipin.com/">立即升级</a></div > ';
  let func = function () {
    if (DataOrigin && DataOrigin.openBrowserUpdateMessage && typeof DataOrigin.openBrowserUpdateMessage === 'function') {
      DataOrigin.openBrowserUpdateMessage&&DataOrigin.openBrowserUpdateMessage()
      return;
    }
    const updateBrowseBoxVersion = document.getElementById(
      'updateBrowseBoxVersion'
    );
    if (updateBrowseBoxVersion !== null) {
      return;
    }
    let s = document.getElementsByTagName('body')[0];
    if ('undefined' == typeof s) {
      setTimeout(f, 10);
    } else {
      s.insertBefore(d, s.firstChild);
    }
  };
  const BrowserMatchObject = BrowserMatch.getBrowser();
  const version = parseFloat(BrowserMatchObject.version)
  /**IE10及其以下提示*/
  if (!('WebSocket' in window && 2 === window.WebSocket.CLOSING) ||window.navigator.userAgent.indexOf('MSIE') >= 1){
    /* if('continue' == window.sessionStorage.getItem('UPDATE_BROWSE_TIPS')) return;
      let handlerContinue = "document.getElementById('updateBrowseBox').parentNode.removeChild(document.getElementById('updateBrowseBox'));window.sessionStorage.setItem('UPDATE_BROWSE_TIPS', 'continue')"; */
    func();
    return false;
  }
  if (BrowserMatchObject.browser === '谷歌'&&version<60) {
    func();
    return false
  }
  return true;
}
export function onloadScript(src = '',onLoad=function(){}) {
  if (src) {
      let script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script);
      script.onload = script.onreadystatechange = function () {
          if (!this.readyState || /^(loaded|complete)$/.test(this.readyState)) {
              onLoad&&onLoad()
          }
      };
  }
  
}
