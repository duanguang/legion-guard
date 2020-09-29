/**
 * legions-plugin-sdk v0.0.11
 * (c) 2020 duanguang
 * @license MIT
 */
var legionsPlugins = (function (exports) {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

'use strict';



function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}




function getNetworkType() {
  var ua = navigator.userAgent;
  var networkStr = ua.match(/NetType\/\w+/) ? ua.match(/NetType\/\w+/)[0] : 'NetType/other';
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
function assignObject(obj1, obj2) {
  for (var name in obj2) {
    if (obj2.hasOwnProperty(name)) {
      obj1[name] = obj2[name];
    }
  }
  return obj1;
  for (var _name in obj2) {
    if (obj2.hasOwnProperty(_name)) {
      obj1[_name] = obj2[_name];
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
  var t = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  if (t != 'object' || obj === null) {
    // simple data type
    if (t == 'string') { obj = '"' + obj + '"'; }
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
        t = typeof v === 'undefined' ? 'undefined' : _typeof(v);
        if (obj.hasOwnProperty(n)) {
          if (t == 'string') { v = '"' + v + '"'; }else if (t == 'object' && v !== null)
            // v = jQuery.stringify(v);
            { v = self(v); }
          json.push((arr ? '' : '"' + n + '":') + String(v));
        }
      }
    }
    return (arr ? '[' : '{') + String(json) + (arr ? ']' : '}');
  }
}
function serializeObj(obj) {
  var parames = '';
  Object.keys(obj).forEach(function (name) {
    if (typeDecide(obj[name], 'Object')) {
      parames += name + '=' + stringify(obj[name]);
    } else {
      parames += name + '=' + obj[name] + '^';
    }
  });
  return encodeURIComponent(parames.substr(0, parames.length - 1));
}

function _getBrowser() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

  var isIE11 = userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/); // IE 11中userAgent已经不包含'msie'所以用'msie'不能判断IE 11
  var isOpera = userAgent.indexOf('Opera') > -1; //判断是否Opera浏览器
  var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera || isIE11; //判断是否IE浏览器
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

var BrowserMatch = {
  init: function init() {
    this.browser = this.getBrowser().browser || '未知浏览器'; //获取浏览器名
    this.version = this.getBrowser().version || '未知浏览器版本号'; //获取浏览器版本
    this.OS = this.getOS() + ' ' + this.getDigits() || '未知操作系统'; //系统版本号
  },
  getOS: function getOS() {
    //判断所处操作系统
    var sUserAgent = navigator.userAgent.toLowerCase();

    var isWin = navigator.platform == 'Win32' || navigator.platform == 'Win64' || navigator.platform == 'wow64';

    var isMac = navigator.platform == 'Mac68K' || navigator.platform == 'MacPPC' || navigator.platform == 'Macintosh' || navigator.platform == 'MacIntel';
    if (isMac) { return 'Mac'; }
    var isUnix = navigator.platform == 'X11' && !isWin && !isMac;
    if (isUnix) { return 'Unix'; }
    var isLinux = String(navigator.platform).indexOf('Linux') > -1;
    var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) == 'android';
    if (isLinux) {
      if (bIsAndroid) { return 'Android'; }else { return 'Linux'; }
    }
    if (isWin) {
      var isWin2K = sUserAgent.indexOf('Windows nt 5.0') > -1 || sUserAgent.indexOf('Windows 2000') > -1;
      if (isWin2K) { return 'Win2000'; }
      var isWinXP = sUserAgent.indexOf('Windows nt 5.1') > -1 || sUserAgent.indexOf('Windows XP') > -1;
      sUserAgent.indexOf('Windows XP') > -1;
      if (isWinXP) { return 'WinXP'; }
      var isWin2003 = sUserAgent.indexOf('Windows nt 5.2') > -1 || sUserAgent.indexOf('Windows 2003') > -1;
      if (isWin2003) { return 'Win2003'; }
      var isWinVista = sUserAgent.indexOf('Windows nt 6.0') > -1 || sUserAgent.indexOf('Windows Vista') > -1;
      if (isWinVista) { return 'WinVista'; }
      var isWin7 = sUserAgent.indexOf('windows nt 6.1') > -1 || sUserAgent.indexOf('Windows 7') > -1;
      if (isWin7) { return 'Win7'; }
      var isWin8 = sUserAgent.indexOf('windows nt 6.2') > -1 || sUserAgent.indexOf('Windows 8') > -1;
      if (isWin8) { return 'Win8'; }
      var isWin10 = sUserAgent.indexOf('windows nt 10.0') > -1 || sUserAgent.indexOf('Windows 10') > -1;
      if (isWin10) { return 'Win10'; }
    }
    return '其他';
  },
  getDigits: function getDigits() {
    //判断当前操作系统的版本号
    var sUserAgent = navigator.userAgent.toLowerCase();
    var is64 = sUserAgent.indexOf('win64') > -1 || sUserAgent.indexOf('wow64') > -1;
    var rSafari = /mac os x ([\w.]+).*()\)/;
    if (is64) {
      return '64位';
    } else {
      var matchBS = rSafari.exec(sUserAgent);
      if (matchBS !== null) {
        return matchBS[1];
      }
      return '32位';
    }
  },
  getBrowser: function getBrowser() {
    // 获取浏览器名
    var rEdge = /(chrome)\/([\w.]+)/; //IE

    var rFirefox = /(firefox)\/([\w.]+)/; //火狐
    var rOpera = /(opera).+version\/([\w.]+)/; //旧Opera
    var rNewOpera = /(opr)\/(.+)/; //新Opera 基于谷歌
    var rChrome = /(chrome)\/([\w.]+)/; //谷歌
    //let rMetasr =  /(metasr)\/([\w.]+)/;//搜狗
    var rSafari = /version\/([\w.]+).*(safari)/;

    var ua = navigator.userAgent.toLowerCase();

    var matchBS = void 0,
        matchBS2 = void 0;
    var browserVersion = _getBrowser();
    //IE 低版
    if (browserVersion.indexOf('IE') > -1) {
      switch (browserVersion) {
        case 'IE7':
          return {
            browser: 'Microsoft IE',
            desc: 'IE: 7', //内核版本号
            version: 7 };
          break;
        case 'IE8':
          return {
            browser: 'Microsoft IE',
            desc: 'IE: 8',
            version: 8
          };
          break;
        case 'IE9':
          return {
            browser: 'Microsoft IE',
            desc: 'IE: 9',
            version: 9
          };
          break;
        case 'IE10':
          return {
            browser: 'Microsoft IE',
            version: 10,
            desc: 'IE: 10'
          };
          break;
        case 'IE11':
          return {
            browser: 'Microsoft IE',
            desc: 'IE: 11',
            version: 11
          };
          break;
        default:
          return {
            browser: 'Microsoft IE',
            desc: 'Undefined',
            version: 11
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
            version: matchBS[2]
          };
        } else {
          return {
            browser: 'Opera',
            desc: 'opr/' + matchBS2[2] || '0',
            version: matchBS2[2]
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
          version: matchBS[2]
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
          version: matchBS[2]
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
          version: matchBS[2]
        };
      }
    }
    if (browserVersion === 'Safari') {
      matchBS = rSafari.exec(ua);
      if (matchBS != null && !window.attachEvent && !window.chrome && !window.opera) {
        return {
          browser: 'Safari',
          desc: 'Safari/' + matchBS[1] || '0',
          version: matchBS[1]
        };
      }
    }
    return {
      browser: '',
      version: null
    };
  }
};
function checkBrowser() {
  /**浏览器升级提示**/
  var DataOrigin = legionsPlugins.DataOrigin;
  var d = document.createElement('div');
  d.innerHTML = '<style>.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px;} a.btn {display: inline-block;background-color: #0885f2;color: #ffffff;line-height:16px;border: 1px solid #0885f2;outline: none;cursor: pointer;border-radius: 2px;cursor:pointer;} a.btn:hover {color:#fff;}</style> <div  id = "updateBrowseBoxVersion" style = "position: fixed;top: 0;left:0px;width: 100%;color: red;border-bottom: 1px solid #b1b4b9;padding-left: 10px;" class="update-browse-tips" > 您的浏览器版本过低，可能无法正常使用部分功能，请升级。推荐使用谷歌，火狐浏览器<a class="btn btn-update" target="_blank" href="http://browsehappy.osfipin.com/">立即升级</a></div > ';
  var func = function func() {
    if (DataOrigin && DataOrigin.openBrowserUpdateMessage && typeof DataOrigin.openBrowserUpdateMessage === 'function') {
      DataOrigin.openBrowserUpdateMessage && DataOrigin.openBrowserUpdateMessage();
      return;
    }
    var updateBrowseBoxVersion = document.getElementById('updateBrowseBoxVersion');
    if (updateBrowseBoxVersion !== null) {
      return;
    }
    var s = document.getElementsByTagName('body')[0];
    if ('undefined' == typeof s) {
      setTimeout(f, 10);
    } else {
      s.insertBefore(d, s.firstChild);
    }
  };
  var BrowserMatchObject = BrowserMatch.getBrowser();
  var version = parseFloat(BrowserMatchObject.version);
  /**IE10及其以下提示*/
  if (!('WebSocket' in window && 2 === window.WebSocket.CLOSING) || window.navigator.userAgent.indexOf('MSIE') >= 1) {
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
function onloadScript() {
  var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var onLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (src) {
    var script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload = script.onreadystatechange = function () {
      if (!this.readyState || /^(loaded|complete)$/.test(this.readyState)) {
        onLoad && onLoad();
      }
    };
  }
}

var Events = function () {
    function Events() {
        classCallCheck(this, Events);

        this.handlers = {};
    }

    createClass(Events, [{
        key: "on",
        value: function on(event, handler) {
            this.handlers[event] = this.handlers[event] || [];
            this.handlers[event].push(handler);
            return this.handlers[event];
        }
    }, {
        key: "off",
        value: function off(event) {
            if (this.handlers[event]) {
                delete this.handlers[event];
            }
        }
    }, {
        key: "trigger",
        value: function trigger(event, args) {
            var _this = this;

            var arg = args || [];
            var funcs = this.handlers[event];
            if (funcs) {
                return funcs.every(function (f) {
                    var ret = f.apply(_this, arg);
                    return ret === false ? false : true;
                });
            }
            return true;
        }
    }]);
    return Events;
}();

var Report = function (_Events) {
    inherits(Report, _Events);

    function Report(options) {
        classCallCheck(this, Report);

        var _this = possibleConstructorReturn(this, (Report.__proto__ || Object.getPrototypeOf(Report)).call(this));

        var config = {
            dataKey: '', //上报数据的属性名，用于服务器获取数据
            mergeReport: true, // mergeReport 是否合并上报， false 关闭， true 启动（默认）
            delay: 1000, // 当 mergeReport 为 true 可用，延迟多少毫秒，合并缓冲区中的上报（默认）
            url: '', // 指定错误上报地址
            getPath: '', // get请求路径
            postPath: '', // post请求路径
            random: 1 };
        _this.config = assignObject(config, options);
        _this.queue = {
            get: [],
            post: []
        };
        _this.getUrl = _this.config.url + _this.config.getPath;
        _this.postUrl = _this.config.url + _this.config.postPath;
        _this.isRegisterMonitoring = false;
        BrowserMatch.init();

        return _this;
    }

    createClass(Report, [{
        key: 'reportByGet',
        value: function reportByGet(data) {
            this.sendData('get', data);
        }
    }, {
        key: 'reportByPost',
        value: function reportByPost(data) {
            this.sendData('post', data);
        }
    }, {
        key: 'sendData',
        value: function sendData(type, data) {
            if (this.catchData(type, data)) {
                this.delayReport();
            }
        }
    }, {
        key: 'delayReport',
        value: function delayReport(cb) {
            var _this2 = this;

            if (!this.trigger('beforeReport')) { return; }
            var delay = this.config.mergeReport ? this.config.delay : 0;
            setTimeout(function () {
                if (!_this2.trigger('beforeSend')) { return; }
                _this2.report(cb);
            }, delay);
        }
        // push数据到pool

    }, {
        key: 'catchData',
        value: function catchData(type, data) {
            var rnd = Math.random();
            if (rnd >= this.config.random) {
                return false;
            }
            this.queue[type].push(data);
            return this.queue[type];
        }
    }, {
        key: 'postRequest',
        value: function postRequest() {
            var _this3 = this;

            return new Promise(function (resolve) {
                if (_this3.queue.post.length === 0) {
                    resolve();
                } else {
                    var parames = _this3._postParames('post');
                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.onreadystatechange = function () {
                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                            resolve(parames);
                        }
                    };
                    xmlhttp.open("POST", _this3.postUrl, true);
                    xmlhttp.setRequestHeader("Content-Type", "application/json");
                    /* const data = {};
                    data[this.config.dataKey] = parames; */
                    xmlhttp.send(JSON.stringify(parames));
                }
            });
        }
    }, {
        key: '_getParames',
        value: function _getParames(type) {
            var queue = this.queue[type];
            var mergeReport = this.config.mergeReport;
            var curQueue = mergeReport ? queue : [queue.shift()];
            if (mergeReport) { this.queue[type] = []; }

            var parames = curQueue.map(function (obj) {
                return serializeObj(obj);
            }).join('|');
            return parames;
        }
    }, {
        key: '_postParames',
        value: function _postParames(type) {
            var queue = this.queue[type];
            var mergeReport = this.config.mergeReport;
            var curQueue = mergeReport ? queue : [queue.shift()];

            if (mergeReport) { this.queue[type] = []; }

            var parames = curQueue.map(function (obj) {
                return obj;
            });
            return parames[0];
        }
    }, {
        key: 'report',
        value: function report(cb) {
            var _this4 = this;

            Promise.all([this.postRequest()]).then(function (urls) {
                _this4.trigger('afterReport');
                cb && cb.call(_this4, urls);
            });
        }
    }, {
        key: 'watch',
        value: function watch() {
            var appSystem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var environment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var that = this;
            window.onerror = function (event, source, lineno, colno, error) {
                if (!error) {
                    return;
                }
                var prams = {
                    errorType: 'onerror',
                    errorFilename: source,
                    errorLineNo: lineno,
                    errorColNo: colno,
                    errorStack: error.stack,
                    errorLevel: '1',
                    path: window.location.href,
                    errorMessage: error.message,
                    errorTimeStamp: new Date().getTime(),
                    network: getNetworkType(),
                    userAgent: navigator.userAgent,
                    device: navigator.appName + ';' + navigator.appVersion,
                    system: JSON.stringify({ platform: navigator.platform, OS: BrowserMatch.OS, browser: BrowserMatch.browser, version: BrowserMatch.version }),
                    environment: environment,
                    appSystem: appSystem
                };
                that.reportByPost(prams, function (data) {
                    console.log(data);
                });
            };
            window.addEventListener("unhandledrejection", function (e) {
                // Promise Catch 捕获异常
                e.preventDefault(); // 控制台不显示错误信息
                console.log('捕获到异常：', e);
                /* return true; */
            });
            /* performance.getEntries().forEach(function(item){console.log(item.name)}) */
            window.addEventListener('error', function (error) {
                // 图片资源及脚本请求异常上报
                var errorTarget = event.target;
                if (errorTarget && errorTarget['baseURI'] && error && error.error) {
                    var prams = {
                        errorType: 'error',
                        errorFilename: error.filename,
                        errorLineNo: error.lineno,
                        errorColNo: error.colno,
                        errorStack: error.error.stack,
                        errorLevel: '1',
                        path: window.location.href,
                        errorMessage: error.message + ';;;' + errorTarget['outerHTM'] + ';;;' + errorTarget['baseURI'],
                        errorTimeStamp: new Date().getTime(),
                        network: getNetworkType(),
                        userAgent: navigator.userAgent,
                        device: navigator.appName + ';' + navigator.appVersion,
                        system: JSON.stringify({ platform: navigator.platform, OS: BrowserMatch.OS, browser: BrowserMatch.browser, version: BrowserMatch.version }),
                        environment: environment,
                        appSystem: appSystem
                    };
                    that.reportByPost(prams, function (data) {
                        console.log('捕获到异常资源请求：', error + data);
                    });
                }
            }, true);
            /**  监控崩溃
             * 在页面加载时（load 事件）在 sessionStorage 
             * 记录 good_exit 状态为 pending，如果用户正常退出（beforeunload 事件）状态改为 true，
             * 如果 crash 了，状态依然为 pending，在用户第2次访问网页的时候（第2个load事件），
             * 查看 good_exit 的状态，如果仍然是 pending 就是可以断定上次访问网页崩溃了！
             * 
             */
            window.addEventListener('load', function () {
                sessionStorage.setItem('good_exit', 'pending');
                setInterval(function () {
                    sessionStorage.setItem('time_before_crash', new Date().toString());
                }, 1000);
            });

            window.addEventListener('beforeunload', function () {
                sessionStorage.setItem('good_exit', 'true');
            });

            if (sessionStorage.getItem('good_exit') && sessionStorage.getItem('good_exit') !== 'true') {
                /*
                   insert crash logging code here
                */
                /* alert('Hey, welcome back from your crash, looks like you crashed on: ' + sessionStorage.getItem('time_before_crash')); */
            }

            this.isRegisterMonitoring = true;
        }
    }]);
    return Report;
}(Events);

var microApps = []; // {name:'',entry:'url',container:'DOMid',appId:'',styleId:'',loading:true}
var scriptResources = {}; // {'entry':{scripts:[],scriptCache:[],sandbox:[],excludeSandboxFiles:[]}}
var isImportHTML = false;
var externalOnloadScript = []; // [{url:'',code:''}] 已加载过外部资源列表
var isPassCheckBrowser = false;
var currentEnvironment = 'normal'; // 'normal'|'sandbox'  正常环境或沙盒
var MicroApps = function () {

    /**
     *Creates an instance of MicroApps.
     * @param {*} options  {
                excludeFiles:['vendor.dll.65dbcc8352253775138423bdeb0f0cdf.js'],
                importHTML:'',
    isMerge:false}
     * @memberof MicroApps
     */
    function MicroApps(options) {
        classCallCheck(this, MicroApps);

        this.importHTML = 'https://qa-zy.hoolinks.com/static/plugin/import-html-entry.min.js?version=' + new Date().getTime();
        if (options && isObject(options)) {
            if (options['importHTML']) {
                this.importHTML = options['importHTML'];
                delete options['importHTML'];
            }
            this.importHTMLOptions = {
                excludeFiles: options['excludeFiles'] || [],
                isMerge: options['isMerge'] || false
            };
        }
    }

    createClass(MicroApps, [{
        key: 'getApps',
        value: function getApps() {
            return {
                apps: microApps,
                scriptResources: scriptResources,
                currentEnvironment: currentEnvironment,
                externalOnloadScript: externalOnloadScript
            };
        }
    }, {
        key: 'isRegister',
        value: function isRegister(apps) {
            var unregisteredApps = microApps.filter(function (item) {
                return item.name === apps.name;
            });
            if (unregisteredApps.length > 0) {
                return unregisteredApps;
            }
            return null;
        }
    }, {
        key: 'register',
        value: function register(apps) {
            if (Array.isArray(apps)) {
                var unregisteredApps = apps.filter(function (app) {
                    return !microApps.some(function (registeredApp) {
                        return registeredApp.name === app.name;
                    });
                });
                microApps = [].concat(toConsumableArray(microApps), toConsumableArray(unregisteredApps));
                /* unregisteredApps.forEach((app) => {
                    this.mounted(app)
                }) */
            }
        }
    }, {
        key: 'addRender',
        value: function addRender(app) {
            microApps.forEach(function (item) {
                if (item.name === app.name && !item.render) {
                    item.render = app.render;
                }
            });
        }
    }, {
        key: 'mounted',
        value: function mounted() {
            var apps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var that = this;
            if (!isPassCheckBrowser) {
                isPassCheckBrowser = checkBrowser();
            }
            var sourceUrl = apps['entry'];
            var appId = apps.appId;
            var container = apps.container || 'reactSandboxWrap';
            if (!appId) {
                console.error('请先设置应用appId信息');
                return;
            }
            if (!sourceUrl) {
                console.error('请先设置应用入口地址entry信息');
                return;
            }
            var styleId = apps.styleId;
            var isCheckRegister = function isCheckRegister() {
                var oldApps = this.isRegister(apps);
                if (!oldApps) {
                    microApps = [].concat(toConsumableArray(microApps), [apps]);
                } else {
                    apps = oldApps[0];
                }
            };
            isCheckRegister.call(that);
            function renderStyles() {
                var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                styles.forEach(function (item) {
                    var style = document.createElement('style');
                    var styleWrap = document.getElementById(styleId);
                    style.innerHTML = item;
                    styleWrap.appendChild(style);
                });
            }
            function main() {
                /* if (reactSandboxList && reactSandboxList.indexOf(sourceUrl)>-1) return; */
                if (scriptResources && scriptResources.hasOwnProperty(sourceUrl)) {
                    currentEnvironment = 'sandbox';
                    apps.render && apps.render();
                    renderStyles(scriptResources[sourceUrl]['styles']);
                    return;
                }
                importHTML(sourceUrl, /* {
                                      excludeFiles:['vendor.dll.js'],
                                      isMerge:false,
                                      } */this.importHTMLOptions || {}).then(function (res) {
                    /** 添加标记，防止重复加载 */
                    res.getExternalScripts().then(function (exports) {
                        if (res.getScripts) {
                            /** // {excludeFiles:{url:['']},
                             * scripts:{url:[]}} */
                            var scriptList = res.getScripts();
                            var excludeFiles = [];
                            var _scripts = scriptList['scripts'];
                            var scriptCache = [];
                            if (exports && Object.prototype.toString.call(exports) === '[object Array]') {
                                exports.forEach(function (item) {
                                    scriptCache.push({ key: item.scripts, code: item['scriptsText'] });
                                });
                            }
                            if (scriptList['excludeFiles'].hasOwnProperty(sourceUrl)) {
                                scriptList['excludeFiles'][sourceUrl].forEach(function (item) {
                                    scriptCache.forEach(function (entity) {
                                        var _index = entity.key.indexOf(item);
                                        if (_index > -1) {
                                            excludeFiles.push({ url: entity.key, code: entity.code });
                                        }
                                    });
                                });
                            }

                            scriptResources[sourceUrl] = {
                                scripts: scriptList['scripts'][sourceUrl],
                                scriptCache: scriptCache, //[{key:'',code:''}]
                                excludeSandboxFiles: excludeFiles, // [{url:'',code:''}]
                                sandbox: [], //['url']
                                styles: []
                            };
                            if (_scripts.hasOwnProperty(sourceUrl)) {
                                _scripts[sourceUrl].forEach(function (item) {
                                    excludeFiles.forEach(function (entity) {
                                        if (entity) {
                                            var _index = entity.url.indexOf(item);
                                            if (_index < 0) {
                                                scriptResources[sourceUrl]['sandbox'].push(item);
                                            }
                                        }
                                    });
                                });
                            }
                            var promiseLoadScript = [];
                            excludeFiles.forEach(function (item) {
                                var fn = function fn() {
                                    var p = new Promise(function (resolve, reject) {
                                        onloadScript(item.url, function () {
                                            scriptResources[sourceUrl].scriptCache.forEach(function (s) {
                                                if (s.key === item.url) {
                                                    externalOnloadScript.push({ url: item.url, code: s.code });
                                                    resolve(externalOnloadScript);
                                                }
                                            });
                                        });
                                    });
                                    promiseLoadScript.push(p);
                                };
                                if (!externalOnloadScript.length) {
                                    // 如果外部加载资源项为空，则直接加载资源
                                    fn();
                                } else {
                                    externalOnloadScript.forEach(function (entry) {
                                        var _index = entry.url.indexOf(item.url); // 判定资源名称及资源代码字符串是否一致，如果一样，则表示资源已经加载过，不需要重复加载
                                        if (_index < 0 && entry.code !== item.code) {
                                            fn();
                                        }
                                    });
                                }
                            });
                            Promise.all(promiseLoadScript).then(function (values) {
                                res.execScripts().then(function () {
                                    isCheckRegister.call(that);
                                    currentEnvironment = 'sandbox';
                                    apps.render && apps.render();
                                });
                                res.getExternalStyleSheets().then(function (exports) {
                                    if (scriptResources[sourceUrl]['styles'].length) {
                                        scriptResources[sourceUrl]['styles'] = [];
                                    }
                                    exports.forEach(function (item) {
                                        scriptResources[sourceUrl]['styles'].push(item);
                                        var style = document.createElement('style');
                                        var styleWrap = document.getElementById(styleId);
                                        style.innerHTML = item;
                                        styleWrap.appendChild(style);
                                    });
                                });
                            });
                        }
                    });
                });
            }
            /** 环境准备，加载import-html-entry.js，创建模块渲染节点，创建样式节点 */

            var wrap = document.getElementById(container) || document.getElementsByClassName(container);
            var style = document.createElement('div');
            var app = document.createElement('div');
            /* script.src = 'https://hoolinks.com/static/common/plugins/import-html-entry.js'; */

            style.id = styleId;
            app.id = appId;
            if (app.loading) {
                app.innerHTML = '<div class="preloader"><div class="cs-loader"><div class="cs-loader-inner"><label> ●</label><label> ●</label><label> ●</label><label> ●</label><label> ●</label><label> ●</label></div></div></div><style type="text/css">.reactSandboxWrap{position:relative;min-height: 100%;}.tab-right{padding: 0!important;}.preloader{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:#1890ff;z-index:9999;transition:opacity .65s}.preloader-hidden-add{opacity:1;display:block}.preloader-hidden-add-active{opacity:0}.preloader-hidden{display:none}.cs-loader{position:absolute;top:0;left:0;height:100%;width:100%}.cs-loader-inner{transform:translateY(-50%);top:50%;position:absolute;width:100%;color:#fff;text-align:center}.cs-loader-inner label{font-size:20px;opacity:0;display:inline-block}@keyframes lol{0%{opacity:0;transform:translateX(-300px)}33%{opacity:1;transform:translateX(0)}66%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(300px)}}.cs-loader-inner label:nth-child(6){animation:lol 3s infinite ease-in-out}.cs-loader-inner label:nth-child(5){animation:lol 3s .1s infinite ease-in-out}.cs-loader-inner label:nth-child(4){animation:lol 3s .2s infinite ease-in-out}.cs-loader-inner label:nth-child(3){animation:lol 3s .3s infinite ease-in-out}.cs-loader-inner label:nth-child(2){animation:lol 3s .4s infinite ease-in-out}.cs-loader-inner label:nth-child(1){animation:lol 3s .5s infinite ease-in-out}</style>';
            }
            /** 插入app节点和样式节点 */
            if (wrap) {
                if (wrap instanceof HTMLCollection) {
                    if (wrap[0]) {
                        !document.getElementById(style.id) && wrap[0].appendChild(style);
                        !document.getElementById(app.id) && wrap[0].appendChild(app);
                    } else {
                        !document.getElementById(style.id) && document.body.appendChild(style);
                        !document.getElementById(app.id) && document.body.appendChild(app);
                    }
                } else {
                    !document.getElementById(style.id) && wrap.appendChild(style);
                    !document.getElementById(app.id) && wrap.appendChild(app);
                }
            } else {
                !document.getElementById(style.id) && document.body.appendChild(style);
                !document.getElementById(app.id) && document.body.appendChild(app);
            }

            if (window.importHTML && isImportHTML) {
                main.call(that);
            } else {
                if (window.importHTML) {
                    var scripts = document.getElementsByTagName("script");
                    for (var i = 0; i < scripts.length; i++) {
                        var _script = scripts[i];
                        if (_script && _script.getAttribute("src") && _script.getAttribute("src").indexOf("https://hoolinks.com/static/common/plugins/import-html-entry.js") > -1) {
                            var url = _script.getAttribute("src");
                            _script.parentNode.removeChild(_script);
                            delete window.importHTML;
                        }
                    }
                }
                var script = document.createElement('script');
                script.src = this.importHTML;
                document.getElementsByTagName('head')[0].appendChild(script);
                /* document.body.appendChild(script); */
                /** 等待js加载完毕后执行主体脚本 */
                script.onload = script.onreadystatechange = function () {
                    if (!this.readyState || /^(loaded|complete)$/.test(this.readyState)) {
                        isImportHTML = true;
                        main.call(that);
                    }
                };
            }
        }
    }], [{
        key: 'getStore',
        value: function getStore() {
            return {
                apps: microApps,
                scriptResources: scriptResources,
                currentEnvironment: currentEnvironment,
                externalOnloadScript: externalOnloadScript
            };
        }
    }]);
    return MicroApps;
}();

var PostMessageUtils = {
    receiveMessage: function receiveMessage(receive) {
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
    sendMessageToChildrenWin: function sendMessageToChildrenWin(options) {
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
        iframeWin.contentWindow.postMessage(options.data, options.origin);
    },

    /**
     * 发送消息到父窗口
     *
     * @param {*} options
     * @memberof PostMessageUtils
     */
    sendMessageToParentWin: function sendMessageToParentWin(options) {
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
    }
};

/* export class legionsReport{
    test() {
       console.log(22)
    }
} */
var DataOrigin = {
    add: function add(key, value) {
        if (DataOrigin.hasOwnProperty(key)) {
            console.warn('DataOrigin:\u5BF9\u8C61\u5DF2\u5B58\u5728 ' + key + ' \u5C5E\u6027');
            return;
        }
        if (!key && typeof key !== 'string') {
            console.warn('DataOrigin:' + key + ' \u4E0D\u80FD\u4E3A\u7A7A\u6216\u53EA\u80FD\u4E3A\u5B57\u7B26\u4E32');
            return;
        }
        DataOrigin[key] = value;
    },
    has: function has(key) {
        if (!key && typeof key !== 'string') {
            console.warn('DataOrigin:' + key + ' \u4E0D\u80FD\u4E3A\u7A7A\u6216\u53EA\u80FD\u4E3A\u5B57\u7B26\u4E32');
            return false;
        }
        if (DataOrigin.hasOwnProperty(key)) {
            return true;
        }
    },
    get: function get(key) {
        if (!key && typeof key !== 'string') {
            console.warn('DataOrigin:' + key + ' \u4E0D\u80FD\u4E3A\u7A7A\u6216\u53EA\u80FD\u4E3A\u5B57\u7B26\u4E32');
            return null;
        }
        if (!DataOrigin.hasOwnProperty(key)) {
            console.warn('DataOrigin:\u5BF9\u8C61\u627E\u4E0D\u5230 ' + key + ' \u5C5E\u6027');
            return null;
        }
        return DataOrigin[key];
    },
    update: function update(key, value) {
        if (!key && typeof key !== 'string') {
            console.warn('DataOrigin:' + key + ' \u4E0D\u80FD\u4E3A\u7A7A\u6216\u53EA\u80FD\u4E3A\u5B57\u7B26\u4E32');
            return;
        }
        if (!DataOrigin.hasOwnProperty(key)) {
            console.warn('DataOrigin:\u5BF9\u8C61\u627E\u4E0D\u5230 ' + key + ' \u5C5E\u6027');
            return;
        }
        DataOrigin[key] = value;
    }
};

exports.DataOrigin = DataOrigin;
exports.Report = Report;
exports.MicroApps = MicroApps;
exports.BrowserMatch = BrowserMatch;
exports.checkBrowser = checkBrowser;
exports.onloadScript = onloadScript;
exports.PostMessageUtils = PostMessageUtils;

return exports;

}({}));
