// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"getType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getType;
function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
},{}],"getRandom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRandom;
function getRandom() {
  return Math.floor(Math.random() * 10);
  // ??????????????? ?????? ?????????
  // ceil() : ????????? ????????? ????????? ????????? ????????? ??????
  // floor() : ????????? ????????? ????????? ?????? 
  // round() : ????????? ??????
}
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _getType = _interopRequireDefault(require("./getType"));
var _getRandom = _interopRequireDefault(require("./getRandom"));
var _this2 = void 0;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
console.log(_typeof('Hello Ey')); // String ?????? ??????
console.log(_typeof(123)); // number?????? ??????

console.log(_typeof(true)); // boolean
console.log(typeof undefined === "undefined" ? "undefined" : _typeof(undefined)); // undefined
console.log(_typeof(null)); // object
console.log(_typeof({})); // object
console.log(_typeof([])); // object
console.log((0, _getType.default)(123)); //Number
console.log((0, _getType.default)(false)); // Boolean
console.log((0, _getType.default)(null)); // Null
console.log((0, _getType.default)({})); // Object
console.log((0, _getType.default)([])); // Array

//----------------------------
// ??????????????? (arithmetic operator)

console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

//----------------------------
// ?????? ????????? (assignment operator)

var u = 2; // = ??? ???????????????. 
// const : ??? ????????? ?????????

var z = 2;
//b = b + 1
//b += 1
//b *= 2
//b /= 2
console.log(z);

//----------------------------
// ?????? ????????? (comparison operator)

var a = 1;
var b = 7;
console.log(a === b);
function isEqual(x, y) {
  return x === y;
}
console.log(isEqual(1, 1));
console.log(isEqual(2, '2'));
console.log(a !== b);
console.log(a < b);
console.log(a > b);
console.log(a >= b); // ????????? ??????

//----------------------------
// ?????? ????????? (logical operator)

var c = 1 === 123;
var d = 'AB' === 'AB';
var e = false;
console.log(c);
console.log(d);
console.log(e);
console.log('&&: ', c && e); // && false ?????? ?????? ???????????? false
console.log('||: ', c || d || e); // || true??? ?????? ???????????? true
console.log('!: ', !c); // ! ?????? ?????????(????????? ????????? ???????????? ?????????)

//----------------------------
// ?????? ????????? (ternary operator)

var f = 1 < 2;
if (a) {
  console.log('???');
} else {
  console.log('??????');
}
console.log(f ? '??????' : '??????');

//----------------------------
// ????????? (IF statement)

var a1 = (0, _getRandom.default)();
switch (a1) {
  case 0:
    console.log('a is 0');
    break;
  case 2:
    console.log('a is 2');
    break;
  case 4:
    console.log('a is 4');
    break;
  default:
    console.log('rest...');
}
if (a1 === 0) {
  console.log('a is 0');
} else if (a1 === 2) {
  console.log('a is 2');
} else if (a1 === 4) {
  console.log('a is 4');
} else {
  console.log('rest...');
}

//----------------------------
// ????????? (For statement)
// for (????????????; ????????????; ????????????) {}

var ulEl = document.querySelector('ul');
console.log(ulEl);
var _loop = function _loop() {
  var li = document.createElement('li');
  li.textContent = "list-".concat(i + 1);
  if ((i + 1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
};
for (var i = 0; i < 5; i += 1) {
  _loop();
}

//----------------------------
// ?????? ???????????? (Variable Scope)
// var, let, const

function scope() {
  if (true) {
    var m = 123;
    console.log('in: ', m); // ?????? a??? ?????? ??????

    var g = 234;
    console.log('in: ', g);
  }
}
scope();

//----------------------------
// ??? ?????? (Type conversion)

var hi = 1;
var bye = '1';
console.log(hi === bye); // ???????????????
console.log(hi == bye); // ???????????? ???????????? ????????? ?????? ??????????????? ????????????. ????????? ???????????? ??????

// Truthy(??? ?????? ???)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(?????? ?????? ???)
// false, '', null, undefined, 0, -0, NaN(Not a Number)

if (undefined) {
  console.log(123);
}

//----------------------------
// ?????? ??????

function sum() {
  // console.log(x)
  // return x+y
  console.log(arguments); // ?????? ????????? ????????? ?????? ???????????????, ????????? ????????? ??????. 
  return arguments[0] + arguments[1];
}
var su = sum(1, 3);
var di = sum(4, 12);
console.log(su);
console.log(su + di);

//----------------------------
// ????????? ??????
// () => {} vs function () {}

var double = function double(x) {
  return x * 2;
};
console.log('double: ', double(7));

// const doubleArrow = (x) => {
//   return x * 2
// }

var doubleArrow = function doubleArrow(x) {
  return {
    name: 'EY'
  };
};
console.log('doubleArrow: ', doubleArrow(7));

//----------------------------
// ???????????? ??????
// IIFE, Immediately-Invoked Function Expression

var aa = 7;
function doublE() {
  console.log(aa * 2);
}
doublE();
(function () {
  console.log(aa * 2);
})(); // ?????? ?????? ?????? 

(function () {
  console.log(aa * 2);
})(); // ?????? ?????? ?????? 

//----------------------------
// ????????????(Hoisting)
// ?????? ???????????? ???????????? ??????????????? ?????????????????? ??????

var bb = 7;
doubleE();
function doubleE() {
  console.log(bb * 2);
}

//----------------------------
// ????????? ??????
// setTimeout(??????, ??????) : ?????? ?????? ??? ?????? ??????
// setInterval(??????, ??????) : ?????? ???????????? ?????? ??????
// clearTimeout() :  ????????? Timeout ????????? ??????
// clearInterval() : ????????? Interval ????????? ??????

//????????? ???????????? ????????? ms 1??? = 1,000
// setTimeout(function () {
//   console.log('hi ey')
// }, 3000)

//????????? ?????? 
// const timer = setTimeout(() => {
//   console.log('hi ey')
// }, 3000)

var timer = setInterval(function () {
  console.log('hi ey');
}, 3000);
var h1El = document.querySelector('h1');
h1El.addEventListener('click', function () {
  clearTimeout(timer);
});

//----------------------------
// ?????? (Callback)
// ????????? ????????? ???????????? ??????

// setTimeout(??????, ??????)

function timeout(cb) {
  setTimeout(function () {
    console.log('EUEUEU');
    cb();
  }, 3000);
}
timeout(function () {
  console.log('Done');
});

//----------------------------
// ?????????????????? ?????????

var ey = {
  firstName: 'Zoey',
  lastName: 'Park',
  getFulName: function getFulName() {
    return "".concat(this.firstName, " ").concat(this.lastName);
  }
};
console.log(ey.getFulName());
var amy = {
  firstName: 'Amy',
  lastName: 'Clarke',
  getFulName: function getFulName() {
    return "".concat(this.firstName, " ").concat(this.lastName);
  }
};
console.log(amy.getFulName());
var neo = {
  firstName: 'Neo',
  lastName: 'Smith',
  getFulName: function getFulName() {
    return "".concat(this.firstName, " ").concat(this.lastName);
  }
};
console.log(neo.getFulName());
var heropy = {};
// ?????????
// ?????? ????????? {...} ??? ???????????? ????????? ?????? ?????? ??? ????????????. 
// ????????? ????????? ?????? ?????? ????????? ????????? ?????? ??? ???????????? ??? ?????? ????????? ?????????. 
// ????????? ?????????, ?????? ??? ????????? ???????????? ????????? ??????????????? ?????? ????????? ?????????.

// 'new' ???????????? ????????? ????????? ???????????? ????????? ?????? ?????? ?????? ?????? ?????? ??? ????????????.

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {
  return "".concat(this.firstName, ", ").concat(this.lastName);
};

// ????????? ??????
// ????????? ??????(constructor function)??? ?????? ????????? ???????????? ????????? ????????????. 
// ?????? ????????? ????????? ?????? ??? ????????? ????????????.

// 1. ?????? ????????? ??? ????????? ???????????? ???????????????.
// 2. ????????? 'new' ???????????? ?????? ???????????????.

var son = new User('min', 'Son');
var zoe = new User('zoe', 'Park');
console.log(son.getFullName());
console.log(zoe.getFullName());

//----------------------------
// this
// ??????(Normal) ????????? '?????? ??????'?????? ?????? this ??????!
// ?????????(Arrow) ????????? ????????? ????????? '?????? ??????'?????? this ??????!

var heropy2 = {
  name: 'Heropy',
  normal: function normal() {
    console.log(this.name);
  },
  arrow: function arrow() {
    // console.log(this.name)
  }
};
heropy2.normal(); // Heropy
heropy2.arrow(); // undefined

var amy2 = {
  name: 'Amy',
  normal: heropy2.normal,
  arrow: heropy2.arrow
};
amy2.normal(); // Amy
amy2.arrow(); // undefined

function User2(name) {
  this.name = name;
}
User2.prototype.normaL = function () {
  console.log(this.name);
};

// User2.prototype.arroW = () => {
//   console.log(this.name)
// }

var mona = new User2('monamo');
mona.normaL();
// mona.arroW()

var timer2 = {
  name: 'monamoZ',
  timeout: function timeout() {
    var _this = this;
    setTimeout(function () {
      console.log(_this.name);
    }, 2000);
  }
};
timer2.timeout();

//----------------------------
// ES6 Classes
// ES6??? ????????? Classes ?????? ??????

var zoepark = {
  name: 'zoey',
  normal: function normal() {
    console.log(this.name);
  },
  arrow: function arrow() {
    console.log(_this2.name);
  }
};
zoepark.normal();
zoepark.arrow();
var User3 = /*#__PURE__*/function () {
  function User3(first, last) {
    _classCallCheck(this, User3);
    //????????????
    this.firstName = first;
    this.lastName = last;
  }
  _createClass(User3, [{
    key: "getFullName",
    value: function getFullName() {}
  }]);
  return User3;
}();
var mina = new User3('mina', 'kim');
console.log(mina, getFullName());
},{"./getType":"getType.js","./getRandom":"getRandom.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56932" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map