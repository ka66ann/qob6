var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target2) => __defProp(target2, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target2, all) => {
  __markAsModule(target2);
  for (var name in all)
    __defProp(target2, name, { get: all[name], enumerable: true });
};
var __reExport = (target2, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target2, key) && key !== "default")
        __defProp(target2, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target2;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// node_modules/typeson/dist/typeson.js
var require_typeson = __commonJS({
  "node_modules/typeson/dist/typeson.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = global2 || self, global2.Typeson = factory());
    })(exports, function() {
      "use strict";
      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self2 = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self2, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target2, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target2, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function ownKeys(object, enumerableOnly) {
        var keys2 = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys2.push.apply(keys2, symbols);
        }
        return keys2;
      }
      function _objectSpread2(target2) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target2, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target2, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target2;
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)
            arr2[i] = arr[i];
          return arr2;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _iterableToArrayLimit(arr, i) {
        if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
          return;
        }
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
      var TypesonPromise = function TypesonPromise2(f) {
        _classCallCheck(this, TypesonPromise2);
        this.p = new Promise(f);
      };
      TypesonPromise.__typeson__type__ = "TypesonPromise";
      if (typeof Symbol !== "undefined") {
        TypesonPromise.prototype[Symbol.toStringTag] = "TypesonPromise";
      }
      TypesonPromise.prototype.then = function(onFulfilled, onRejected) {
        var _this = this;
        return new TypesonPromise(function(typesonResolve, typesonReject) {
          _this.p.then(function(res) {
            typesonResolve(onFulfilled ? onFulfilled(res) : res);
          })["catch"](function(res) {
            return onRejected ? onRejected(res) : Promise.reject(res);
          }).then(typesonResolve, typesonReject);
        });
      };
      TypesonPromise.prototype["catch"] = function(onRejected) {
        return this.then(null, onRejected);
      };
      TypesonPromise.resolve = function(v) {
        return new TypesonPromise(function(typesonResolve) {
          typesonResolve(v);
        });
      };
      TypesonPromise.reject = function(v) {
        return new TypesonPromise(function(typesonResolve, typesonReject) {
          typesonReject(v);
        });
      };
      ["all", "race"].forEach(function(meth) {
        TypesonPromise[meth] = function(promArr) {
          return new TypesonPromise(function(typesonResolve, typesonReject) {
            Promise[meth](promArr.map(function(prom) {
              return prom && prom.constructor && prom.constructor.__typeson__type__ === "TypesonPromise" ? prom.p : prom;
            })).then(typesonResolve, typesonReject);
          });
        };
      });
      var _ref = {}, toStr = _ref.toString, hasOwn = {}.hasOwnProperty, getProto = Object.getPrototypeOf, fnToString = hasOwn.toString;
      function isThenable(v, catchCheck) {
        return isObject(v) && typeof v.then === "function" && (!catchCheck || typeof v["catch"] === "function");
      }
      function toStringTag(val) {
        return toStr.call(val).slice(8, -1);
      }
      function hasConstructorOf(a, b) {
        if (!a || _typeof(a) !== "object") {
          return false;
        }
        var proto = getProto(a);
        if (!proto) {
          return b === null;
        }
        var Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        if (typeof Ctor !== "function") {
          return b === null;
        }
        if (b === Ctor) {
          return true;
        }
        if (b !== null && fnToString.call(Ctor) === fnToString.call(b)) {
          return true;
        }
        if (typeof b === "function" && typeof Ctor.__typeson__type__ === "string" && Ctor.__typeson__type__ === b.__typeson__type__) {
          return true;
        }
        return false;
      }
      function isPlainObject(val) {
        if (!val || toStringTag(val) !== "Object") {
          return false;
        }
        var proto = getProto(val);
        if (!proto) {
          return true;
        }
        return hasConstructorOf(val, Object);
      }
      function isUserObject(val) {
        if (!val || toStringTag(val) !== "Object") {
          return false;
        }
        var proto = getProto(val);
        if (!proto) {
          return true;
        }
        return hasConstructorOf(val, Object) || isUserObject(proto);
      }
      function isObject(v) {
        return v && _typeof(v) === "object";
      }
      function escapeKeyPathComponent(keyPathComponent) {
        return keyPathComponent.replace(/~/g, "~0").replace(/\./g, "~1");
      }
      function unescapeKeyPathComponent(keyPathComponent) {
        return keyPathComponent.replace(/~1/g, ".").replace(/~0/g, "~");
      }
      function getByKeyPath(obj, keyPath) {
        if (keyPath === "") {
          return obj;
        }
        var period = keyPath.indexOf(".");
        if (period > -1) {
          var innerObj = obj[unescapeKeyPathComponent(keyPath.slice(0, period))];
          return innerObj === void 0 ? void 0 : getByKeyPath(innerObj, keyPath.slice(period + 1));
        }
        return obj[unescapeKeyPathComponent(keyPath)];
      }
      function setAtKeyPath(obj, keyPath, value) {
        if (keyPath === "") {
          return value;
        }
        var period = keyPath.indexOf(".");
        if (period > -1) {
          var innerObj = obj[unescapeKeyPathComponent(keyPath.slice(0, period))];
          return setAtKeyPath(innerObj, keyPath.slice(period + 1), value);
        }
        obj[unescapeKeyPathComponent(keyPath)] = value;
        return obj;
      }
      function getJSONType(value) {
        return value === null ? "null" : Array.isArray(value) ? "array" : _typeof(value);
      }
      var keys = Object.keys, isArray = Array.isArray, hasOwn$1 = {}.hasOwnProperty, internalStateObjPropsToIgnore = ["type", "replaced", "iterateIn", "iterateUnsetNumeric"];
      function nestedPathsFirst(a, b) {
        if (a.keypath === "") {
          return -1;
        }
        var as = a.keypath.match(/\./g) || 0;
        var bs = b.keypath.match(/\./g) || 0;
        if (as) {
          as = as.length;
        }
        if (bs) {
          bs = bs.length;
        }
        return as > bs ? -1 : as < bs ? 1 : a.keypath < b.keypath ? -1 : a.keypath > b.keypath;
      }
      var Typeson2 = /* @__PURE__ */ function() {
        function Typeson3(options) {
          _classCallCheck(this, Typeson3);
          this.options = options;
          this.plainObjectReplacers = [];
          this.nonplainObjectReplacers = [];
          this.revivers = {};
          this.types = {};
        }
        _createClass(Typeson3, [{
          key: "stringify",
          value: function stringify(obj, replacer, space, opts) {
            opts = _objectSpread2({}, this.options, {}, opts, {
              stringification: true
            });
            var encapsulated = this.encapsulate(obj, null, opts);
            if (isArray(encapsulated)) {
              return JSON.stringify(encapsulated[0], replacer, space);
            }
            return encapsulated.then(function(res) {
              return JSON.stringify(res, replacer, space);
            });
          }
        }, {
          key: "stringifySync",
          value: function stringifySync(obj, replacer, space, opts) {
            return this.stringify(obj, replacer, space, _objectSpread2({
              throwOnBadSyncType: true
            }, opts, {
              sync: true
            }));
          }
        }, {
          key: "stringifyAsync",
          value: function stringifyAsync(obj, replacer, space, opts) {
            return this.stringify(obj, replacer, space, _objectSpread2({
              throwOnBadSyncType: true
            }, opts, {
              sync: false
            }));
          }
        }, {
          key: "parse",
          value: function parse(text, reviver, opts) {
            opts = _objectSpread2({}, this.options, {}, opts, {
              parse: true
            });
            return this.revive(JSON.parse(text, reviver), opts);
          }
        }, {
          key: "parseSync",
          value: function parseSync(text, reviver, opts) {
            return this.parse(text, reviver, _objectSpread2({
              throwOnBadSyncType: true
            }, opts, {
              sync: true
            }));
          }
        }, {
          key: "parseAsync",
          value: function parseAsync(text, reviver, opts) {
            return this.parse(text, reviver, _objectSpread2({
              throwOnBadSyncType: true
            }, opts, {
              sync: false
            }));
          }
        }, {
          key: "specialTypeNames",
          value: function specialTypeNames(obj, stateObj) {
            var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            opts.returnTypeNames = true;
            return this.encapsulate(obj, stateObj, opts);
          }
        }, {
          key: "rootTypeName",
          value: function rootTypeName(obj, stateObj) {
            var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            opts.iterateNone = true;
            return this.encapsulate(obj, stateObj, opts);
          }
        }, {
          key: "encapsulate",
          value: function encapsulate(obj, stateObj, opts) {
            opts = _objectSpread2({
              sync: true
            }, this.options, {}, opts);
            var _opts = opts, sync = _opts.sync;
            var that = this, types = {}, refObjs = [], refKeys = [], promisesDataRoot = [];
            var cyclic = "cyclic" in opts ? opts.cyclic : true;
            var _opts2 = opts, encapsulateObserver = _opts2.encapsulateObserver;
            var ret = _encapsulate("", obj, cyclic, stateObj || {}, promisesDataRoot);
            function finish(ret2) {
              var typeNames = Object.values(types);
              if (opts.iterateNone) {
                if (typeNames.length) {
                  return typeNames[0];
                }
                return Typeson3.getJSONType(ret2);
              }
              if (typeNames.length) {
                if (opts.returnTypeNames) {
                  return _toConsumableArray(new Set(typeNames));
                }
                if (!ret2 || !isPlainObject(ret2) || hasOwn$1.call(ret2, "$types")) {
                  ret2 = {
                    $: ret2,
                    $types: {
                      $: types
                    }
                  };
                } else {
                  ret2.$types = types;
                }
              } else if (isObject(ret2) && hasOwn$1.call(ret2, "$types")) {
                ret2 = {
                  $: ret2,
                  $types: true
                };
              }
              if (opts.returnTypeNames) {
                return false;
              }
              return ret2;
            }
            function checkPromises(_x, _x2) {
              return _checkPromises.apply(this, arguments);
            }
            function _checkPromises() {
              _checkPromises = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2(ret2, promisesData) {
                var promResults;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return Promise.all(promisesData.map(function(pd) {
                          return pd[1].p;
                        }));
                      case 2:
                        promResults = _context2.sent;
                        _context2.next = 5;
                        return Promise.all(promResults.map(/* @__PURE__ */ function() {
                          var _ref2 = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(promResult) {
                            var newPromisesData, _promisesData$splice, _promisesData$splice2, prData, _prData, keyPath, cyclic2, stateObj2, parentObj, key, detectedType, encaps, isTypesonPromise, encaps2;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    newPromisesData = [];
                                    _promisesData$splice = promisesData.splice(0, 1), _promisesData$splice2 = _slicedToArray(_promisesData$splice, 1), prData = _promisesData$splice2[0];
                                    _prData = _slicedToArray(prData, 7), keyPath = _prData[0], cyclic2 = _prData[2], stateObj2 = _prData[3], parentObj = _prData[4], key = _prData[5], detectedType = _prData[6];
                                    encaps = _encapsulate(keyPath, promResult, cyclic2, stateObj2, newPromisesData, true, detectedType);
                                    isTypesonPromise = hasConstructorOf(encaps, TypesonPromise);
                                    if (!(keyPath && isTypesonPromise)) {
                                      _context.next = 11;
                                      break;
                                    }
                                    _context.next = 8;
                                    return encaps.p;
                                  case 8:
                                    encaps2 = _context.sent;
                                    parentObj[key] = encaps2;
                                    return _context.abrupt("return", checkPromises(ret2, newPromisesData));
                                  case 11:
                                    if (keyPath) {
                                      parentObj[key] = encaps;
                                    } else if (isTypesonPromise) {
                                      ret2 = encaps.p;
                                    } else {
                                      ret2 = encaps;
                                    }
                                    return _context.abrupt("return", checkPromises(ret2, newPromisesData));
                                  case 13:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));
                          return function(_x3) {
                            return _ref2.apply(this, arguments);
                          };
                        }()));
                      case 5:
                        return _context2.abrupt("return", ret2);
                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
              return _checkPromises.apply(this, arguments);
            }
            function _adaptBuiltinStateObjectProperties(stateObj2, ownKeysObj, cb) {
              Object.assign(stateObj2, ownKeysObj);
              var vals = internalStateObjPropsToIgnore.map(function(prop) {
                var tmp = stateObj2[prop];
                delete stateObj2[prop];
                return tmp;
              });
              cb();
              internalStateObjPropsToIgnore.forEach(function(prop, i) {
                stateObj2[prop] = vals[i];
              });
            }
            function _encapsulate(keypath, value, cyclic2, stateObj2, promisesData, resolvingTypesonPromise, detectedType) {
              var ret2;
              var observerData = {};
              var $typeof = _typeof(value);
              var runObserver = encapsulateObserver ? function(obj2) {
                var type = detectedType || stateObj2.type || Typeson3.getJSONType(value);
                encapsulateObserver(Object.assign(obj2 || observerData, {
                  keypath,
                  value,
                  cyclic: cyclic2,
                  stateObj: stateObj2,
                  promisesData,
                  resolvingTypesonPromise,
                  awaitingTypesonPromise: hasConstructorOf(value, TypesonPromise)
                }, {
                  type
                }));
              } : null;
              if (["string", "boolean", "number", "undefined"].includes($typeof)) {
                if (value === void 0 || $typeof === "number" && (isNaN(value) || value === -Infinity || value === Infinity)) {
                  if (stateObj2.replaced) {
                    ret2 = value;
                  } else {
                    ret2 = replace(keypath, value, stateObj2, promisesData, false, resolvingTypesonPromise, runObserver);
                  }
                  if (ret2 !== value) {
                    observerData = {
                      replaced: ret2
                    };
                  }
                } else {
                  ret2 = value;
                }
                if (runObserver) {
                  runObserver();
                }
                return ret2;
              }
              if (value === null) {
                if (runObserver) {
                  runObserver();
                }
                return value;
              }
              if (cyclic2 && !stateObj2.iterateIn && !stateObj2.iterateUnsetNumeric && value && _typeof(value) === "object") {
                var refIndex = refObjs.indexOf(value);
                if (refIndex < 0) {
                  if (cyclic2 === true) {
                    refObjs.push(value);
                    refKeys.push(keypath);
                  }
                } else {
                  types[keypath] = "#";
                  if (runObserver) {
                    runObserver({
                      cyclicKeypath: refKeys[refIndex]
                    });
                  }
                  return "#" + refKeys[refIndex];
                }
              }
              var isPlainObj = isPlainObject(value);
              var isArr = isArray(value);
              var replaced = (isPlainObj || isArr) && (!that.plainObjectReplacers.length || stateObj2.replaced) || stateObj2.iterateIn ? value : replace(keypath, value, stateObj2, promisesData, isPlainObj || isArr, null, runObserver);
              var clone;
              if (replaced !== value) {
                ret2 = replaced;
                observerData = {
                  replaced
                };
              } else {
                if (keypath === "" && hasConstructorOf(value, TypesonPromise)) {
                  promisesData.push([keypath, value, cyclic2, stateObj2, void 0, void 0, stateObj2.type]);
                  ret2 = value;
                } else if (isArr && stateObj2.iterateIn !== "object" || stateObj2.iterateIn === "array") {
                  clone = new Array(value.length);
                  observerData = {
                    clone
                  };
                } else if (!["function", "symbol"].includes(_typeof(value)) && !("toJSON" in value) && !hasConstructorOf(value, TypesonPromise) && !hasConstructorOf(value, Promise) && !hasConstructorOf(value, ArrayBuffer) || isPlainObj || stateObj2.iterateIn === "object") {
                  clone = {};
                  if (stateObj2.addLength) {
                    clone.length = value.length;
                  }
                  observerData = {
                    clone
                  };
                } else {
                  ret2 = value;
                }
              }
              if (runObserver) {
                runObserver();
              }
              if (opts.iterateNone) {
                return clone || ret2;
              }
              if (!clone) {
                return ret2;
              }
              if (stateObj2.iterateIn) {
                var _loop = function _loop3(key2) {
                  var ownKeysObj = {
                    ownKeys: hasOwn$1.call(value, key2)
                  };
                  _adaptBuiltinStateObjectProperties(stateObj2, ownKeysObj, function() {
                    var kp = keypath + (keypath ? "." : "") + escapeKeyPathComponent(key2);
                    var val = _encapsulate(kp, value[key2], Boolean(cyclic2), stateObj2, promisesData, resolvingTypesonPromise);
                    if (hasConstructorOf(val, TypesonPromise)) {
                      promisesData.push([kp, val, Boolean(cyclic2), stateObj2, clone, key2, stateObj2.type]);
                    } else if (val !== void 0) {
                      clone[key2] = val;
                    }
                  });
                };
                for (var key in value) {
                  _loop(key);
                }
                if (runObserver) {
                  runObserver({
                    endIterateIn: true,
                    end: true
                  });
                }
              } else {
                keys(value).forEach(function(key2) {
                  var kp = keypath + (keypath ? "." : "") + escapeKeyPathComponent(key2);
                  var ownKeysObj = {
                    ownKeys: true
                  };
                  _adaptBuiltinStateObjectProperties(stateObj2, ownKeysObj, function() {
                    var val = _encapsulate(kp, value[key2], Boolean(cyclic2), stateObj2, promisesData, resolvingTypesonPromise);
                    if (hasConstructorOf(val, TypesonPromise)) {
                      promisesData.push([kp, val, Boolean(cyclic2), stateObj2, clone, key2, stateObj2.type]);
                    } else if (val !== void 0) {
                      clone[key2] = val;
                    }
                  });
                });
                if (runObserver) {
                  runObserver({
                    endIterateOwn: true,
                    end: true
                  });
                }
              }
              if (stateObj2.iterateUnsetNumeric) {
                var vl = value.length;
                var _loop2 = function _loop22(i2) {
                  if (!(i2 in value)) {
                    var kp = keypath + (keypath ? "." : "") + i2;
                    var ownKeysObj = {
                      ownKeys: false
                    };
                    _adaptBuiltinStateObjectProperties(stateObj2, ownKeysObj, function() {
                      var val = _encapsulate(kp, void 0, Boolean(cyclic2), stateObj2, promisesData, resolvingTypesonPromise);
                      if (hasConstructorOf(val, TypesonPromise)) {
                        promisesData.push([kp, val, Boolean(cyclic2), stateObj2, clone, i2, stateObj2.type]);
                      } else if (val !== void 0) {
                        clone[i2] = val;
                      }
                    });
                  }
                };
                for (var i = 0; i < vl; i++) {
                  _loop2(i);
                }
                if (runObserver) {
                  runObserver({
                    endIterateUnsetNumeric: true,
                    end: true
                  });
                }
              }
              return clone;
            }
            function replace(keypath, value, stateObj2, promisesData, plainObject, resolvingTypesonPromise, runObserver) {
              var replacers = plainObject ? that.plainObjectReplacers : that.nonplainObjectReplacers;
              var i = replacers.length;
              while (i--) {
                var replacer = replacers[i];
                if (replacer.test(value, stateObj2)) {
                  var type = replacer.type;
                  if (that.revivers[type]) {
                    var existing = types[keypath];
                    types[keypath] = existing ? [type].concat(existing) : type;
                  }
                  Object.assign(stateObj2, {
                    type,
                    replaced: true
                  });
                  if ((sync || !replacer.replaceAsync) && !replacer.replace) {
                    if (runObserver) {
                      runObserver({
                        typeDetected: true
                      });
                    }
                    return _encapsulate(keypath, value, cyclic && "readonly", stateObj2, promisesData, resolvingTypesonPromise, type);
                  }
                  if (runObserver) {
                    runObserver({
                      replacing: true
                    });
                  }
                  var replaceMethod = sync || !replacer.replaceAsync ? "replace" : "replaceAsync";
                  return _encapsulate(keypath, replacer[replaceMethod](value, stateObj2), cyclic && "readonly", stateObj2, promisesData, resolvingTypesonPromise, type);
                }
              }
              return value;
            }
            return promisesDataRoot.length ? sync && opts.throwOnBadSyncType ? function() {
              throw new TypeError("Sync method requested but async result obtained");
            }() : Promise.resolve(checkPromises(ret, promisesDataRoot)).then(finish) : !sync && opts.throwOnBadSyncType ? function() {
              throw new TypeError("Async method requested but sync result obtained");
            }() : opts.stringification && sync ? [finish(ret)] : sync ? finish(ret) : Promise.resolve(finish(ret));
          }
        }, {
          key: "encapsulateSync",
          value: function encapsulateSync(obj, stateObj, opts) {
            return this.encapsulate(obj, stateObj, _objectSpread2({
              throwOnBadSyncType: true
            }, opts, {
              sync: true
            }));
          }
        }, {
          key: "encapsulateAsync",
          value: function encapsulateAsync(obj, stateObj, opts) {
            return this.encapsulate(obj, stateObj, _objectSpread2({
              throwOnBadSyncType: true
            }, opts, {
              sync: false
            }));
          }
        }, {
          key: "revive",
          value: function revive(obj, opts) {
            var types = obj && obj.$types;
            if (!types) {
              return obj;
            }
            if (types === true) {
              return obj.$;
            }
            opts = _objectSpread2({
              sync: true
            }, this.options, {}, opts);
            var _opts3 = opts, sync = _opts3.sync;
            var keyPathResolutions = [];
            var stateObj = {};
            var ignore$Types = true;
            if (types.$ && isPlainObject(types.$)) {
              obj = obj.$;
              types = types.$;
              ignore$Types = false;
            }
            var that = this;
            function executeReviver(type, val) {
              var _ref2 = that.revivers[type] || [], _ref3 = _slicedToArray(_ref2, 1), reviver = _ref3[0];
              if (!reviver) {
                throw new Error("Unregistered type: " + type);
              }
              if (sync && !("revive" in reviver)) {
                return val;
              }
              return reviver[sync && reviver.revive ? "revive" : !sync && reviver.reviveAsync ? "reviveAsync" : "revive"](val, stateObj);
            }
            function revivePlainObjects() {
              var plainObjectTypes = [];
              Object.entries(types).forEach(function(_ref4) {
                var _ref5 = _slicedToArray(_ref4, 2), keypath = _ref5[0], type = _ref5[1];
                if (type === "#") {
                  return;
                }
                [].concat(type).forEach(function(type2) {
                  var _ref6 = that.revivers[type2] || [null, {}], _ref7 = _slicedToArray(_ref6, 2), plain = _ref7[1].plain;
                  if (!plain) {
                    return;
                  }
                  plainObjectTypes.push({
                    keypath,
                    type: type2
                  });
                  delete types[keypath];
                });
              });
              if (!plainObjectTypes.length) {
                return void 0;
              }
              return plainObjectTypes.sort(nestedPathsFirst).reduce(function reducer(possibleTypesonPromise2, _ref8) {
                var keypath = _ref8.keypath, type = _ref8.type;
                if (isThenable(possibleTypesonPromise2)) {
                  return possibleTypesonPromise2.then(function(val2) {
                    return reducer(val2, {
                      keypath,
                      type
                    });
                  });
                }
                var val = getByKeyPath(obj, keypath);
                val = executeReviver(type, val);
                if (hasConstructorOf(val, TypesonPromise)) {
                  return val.then(function(v) {
                    var newVal2 = setAtKeyPath(obj, keypath, v);
                    if (newVal2 === v) {
                      obj = newVal2;
                    }
                    return void 0;
                  });
                }
                var newVal = setAtKeyPath(obj, keypath, val);
                if (newVal === val) {
                  obj = newVal;
                }
                return void 0;
              }, void 0);
            }
            var revivalPromises = [];
            function _revive(keypath, value, target2, clone, key) {
              if (ignore$Types && keypath === "$types") {
                return void 0;
              }
              var type = types[keypath];
              var isArr = isArray(value);
              if (isArr || isPlainObject(value)) {
                var _clone = isArr ? new Array(value.length) : {};
                keys(value).forEach(function(k2) {
                  var val2 = _revive(keypath + (keypath ? "." : "") + escapeKeyPathComponent(k2), value[k2], target2 || _clone, _clone, k2);
                  var set = function set2(v) {
                    if (hasConstructorOf(v, Undefined)) {
                      _clone[k2] = void 0;
                    } else if (v !== void 0) {
                      _clone[k2] = v;
                    }
                    return v;
                  };
                  if (hasConstructorOf(val2, TypesonPromise)) {
                    revivalPromises.push(val2.then(function(ret2) {
                      return set(ret2);
                    }));
                  } else {
                    set(val2);
                  }
                });
                value = _clone;
                while (keyPathResolutions.length) {
                  var _keyPathResolutions$ = _slicedToArray(keyPathResolutions[0], 4), _target = _keyPathResolutions$[0], keyPath = _keyPathResolutions$[1], _clone2 = _keyPathResolutions$[2], k = _keyPathResolutions$[3];
                  var val = getByKeyPath(_target, keyPath);
                  if (val !== void 0) {
                    _clone2[k] = val;
                  } else {
                    break;
                  }
                  keyPathResolutions.splice(0, 1);
                }
              }
              if (!type) {
                return value;
              }
              if (type === "#") {
                var _ret = getByKeyPath(target2, value.slice(1));
                if (_ret === void 0) {
                  keyPathResolutions.push([target2, value.slice(1), clone, key]);
                }
                return _ret;
              }
              return [].concat(type).reduce(function reducer(val2, typ) {
                if (hasConstructorOf(val2, TypesonPromise)) {
                  return val2.then(function(v) {
                    return reducer(v, typ);
                  });
                }
                return executeReviver(typ, val2);
              }, value);
            }
            function checkUndefined(retrn) {
              return hasConstructorOf(retrn, Undefined) ? void 0 : retrn;
            }
            var possibleTypesonPromise = revivePlainObjects();
            var ret;
            if (hasConstructorOf(possibleTypesonPromise, TypesonPromise)) {
              ret = possibleTypesonPromise.then(function() {
                return obj;
              });
            } else {
              ret = _revive("", obj, null);
              if (revivalPromises.length) {
                ret = TypesonPromise.resolve(ret).then(function(r) {
                  return TypesonPromise.all([
                    r
                  ].concat(revivalPromises));
                }).then(function(_ref9) {
                  var _ref10 = _slicedToArray(_ref9, 1), r = _ref10[0];
                  return r;
                });
              }
            }
            return isThenable(ret) ? sync && opts.throwOnBadSyncType ? function() {
              throw new TypeError("Sync method requested but async result obtained");
            }() : hasConstructorOf(ret, TypesonPromise) ? ret.p.then(checkUndefined) : ret : !sync && opts.throwOnBadSyncType ? function() {
              throw new TypeError("Async method requested but sync result obtained");
            }() : sync ? checkUndefined(ret) : Promise.resolve(checkUndefined(ret));
          }
        }, {
          key: "reviveSync",
          value: function reviveSync(obj, opts) {
            return this.revive(obj, _objectSpread2({
              throwOnBadSyncType: true
            }, opts, {
              sync: true
            }));
          }
        }, {
          key: "reviveAsync",
          value: function reviveAsync(obj, opts) {
            return this.revive(obj, _objectSpread2({
              throwOnBadSyncType: true
            }, opts, {
              sync: false
            }));
          }
        }, {
          key: "register",
          value: function register(typeSpecSets, opts) {
            opts = opts || {};
            [].concat(typeSpecSets).forEach(function R(typeSpec) {
              var _this = this;
              if (isArray(typeSpec)) {
                return typeSpec.map(function(typSpec) {
                  return R.call(_this, typSpec);
                });
              }
              typeSpec && keys(typeSpec).forEach(function(typeId) {
                if (typeId === "#") {
                  throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");
                } else if (Typeson3.JSON_TYPES.includes(typeId)) {
                  throw new TypeError("Plain JSON object types are reserved as type names");
                }
                var spec = typeSpec[typeId];
                var replacers = spec && spec.testPlainObjects ? this.plainObjectReplacers : this.nonplainObjectReplacers;
                var existingReplacer = replacers.filter(function(r) {
                  return r.type === typeId;
                });
                if (existingReplacer.length) {
                  replacers.splice(replacers.indexOf(existingReplacer[0]), 1);
                  delete this.revivers[typeId];
                  delete this.types[typeId];
                }
                if (typeof spec === "function") {
                  var Class = spec;
                  spec = {
                    test: function test2(x) {
                      return x && x.constructor === Class;
                    },
                    replace: function replace2(x) {
                      return _objectSpread2({}, x);
                    },
                    revive: function revive2(x) {
                      return Object.assign(Object.create(Class.prototype), x);
                    }
                  };
                } else if (isArray(spec)) {
                  var _spec = spec, _spec2 = _slicedToArray(_spec, 3), test = _spec2[0], replace = _spec2[1], revive = _spec2[2];
                  spec = {
                    test,
                    replace,
                    revive
                  };
                }
                if (!spec || !spec.test) {
                  return;
                }
                var replacerObj = {
                  type: typeId,
                  test: spec.test.bind(spec)
                };
                if (spec.replace) {
                  replacerObj.replace = spec.replace.bind(spec);
                }
                if (spec.replaceAsync) {
                  replacerObj.replaceAsync = spec.replaceAsync.bind(spec);
                }
                var start = typeof opts.fallback === "number" ? opts.fallback : opts.fallback ? 0 : Infinity;
                if (spec.testPlainObjects) {
                  this.plainObjectReplacers.splice(start, 0, replacerObj);
                } else {
                  this.nonplainObjectReplacers.splice(start, 0, replacerObj);
                }
                if (spec.revive || spec.reviveAsync) {
                  var reviverObj = {};
                  if (spec.revive) {
                    reviverObj.revive = spec.revive.bind(spec);
                  }
                  if (spec.reviveAsync) {
                    reviverObj.reviveAsync = spec.reviveAsync.bind(spec);
                  }
                  this.revivers[typeId] = [reviverObj, {
                    plain: spec.testPlainObjects
                  }];
                }
                this.types[typeId] = spec;
              }, this);
            }, this);
            return this;
          }
        }]);
        return Typeson3;
      }();
      var Undefined = function Undefined2() {
        _classCallCheck(this, Undefined2);
      };
      Undefined.__typeson__type__ = "TypesonUndefined";
      Typeson2.Undefined = Undefined;
      Typeson2.Promise = TypesonPromise;
      Typeson2.isThenable = isThenable;
      Typeson2.toStringTag = toStringTag;
      Typeson2.hasConstructorOf = hasConstructorOf;
      Typeson2.isObject = isObject;
      Typeson2.isPlainObject = isPlainObject;
      Typeson2.isUserObject = isUserObject;
      Typeson2.escapeKeyPathComponent = escapeKeyPathComponent;
      Typeson2.unescapeKeyPathComponent = unescapeKeyPathComponent;
      Typeson2.getByKeyPath = getByKeyPath;
      Typeson2.getJSONType = getJSONType;
      Typeson2.JSON_TYPES = ["null", "boolean", "number", "string", "array", "object"];
      return Typeson2;
    });
  }
});

// node_modules/typeson-registry/dist/presets/structured-cloning-throwing.js
var require_structured_cloning_throwing = __commonJS({
  "node_modules/typeson-registry/dist/presets/structured-cloning-throwing.js"(exports, module) {
    !function(e, t) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : ((e = typeof globalThis != "undefined" ? globalThis : e || self).Typeson = e.Typeson || {}, e.Typeson.presets = e.Typeson.presets || {}, e.Typeson.presets.structuredCloningThrowing = t());
    }(exports, function() {
      "use strict";
      function _typeof$1(e2) {
        return (_typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      function _classCallCheck$1(e2, t2) {
        if (!(e2 instanceof t2))
          throw new TypeError("Cannot call a class as a function");
      }
      function _defineProperties$1(e2, t2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          var n2 = t2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
        }
      }
      function _defineProperty$1(e2, t2, r2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
      }
      function ownKeys$1(e2, t2) {
        var r2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var n2 = Object.getOwnPropertySymbols(e2);
          t2 && (n2 = n2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), r2.push.apply(r2, n2);
        }
        return r2;
      }
      function _toConsumableArray$1(e2) {
        return function _arrayWithoutHoles$1(e3) {
          if (Array.isArray(e3))
            return _arrayLikeToArray$1(e3);
        }(e2) || function _iterableToArray$1(e3) {
          if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
            return Array.from(e3);
        }(e2) || function _unsupportedIterableToArray$1(e3, t2) {
          if (!e3)
            return;
          if (typeof e3 == "string")
            return _arrayLikeToArray$1(e3, t2);
          var r2 = Object.prototype.toString.call(e3).slice(8, -1);
          r2 === "Object" && e3.constructor && (r2 = e3.constructor.name);
          if (r2 === "Map" || r2 === "Set")
            return Array.from(e3);
          if (r2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2))
            return _arrayLikeToArray$1(e3, t2);
        }(e2) || function _nonIterableSpread$1() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function _arrayLikeToArray$1(e2, t2) {
        (t2 == null || t2 > e2.length) && (t2 = e2.length);
        for (var r2 = 0, n2 = new Array(t2); r2 < t2; r2++)
          n2[r2] = e2[r2];
        return n2;
      }
      function _typeof(e2) {
        return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function _typeof2(e3) {
          return typeof e3;
        } : function _typeof2(e3) {
          return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      function _classCallCheck(e2, t2) {
        if (!(e2 instanceof t2))
          throw new TypeError("Cannot call a class as a function");
      }
      function _defineProperties(e2, t2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          var n2 = t2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
        }
      }
      function _defineProperty(e2, t2, r2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
      }
      function ownKeys(e2, t2) {
        var r2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var n2 = Object.getOwnPropertySymbols(e2);
          t2 && (n2 = n2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), r2.push.apply(r2, n2);
        }
        return r2;
      }
      function _objectSpread2(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var r2 = arguments[t2] != null ? arguments[t2] : {};
          t2 % 2 ? ownKeys(Object(r2), true).forEach(function(t3) {
            _defineProperty(e2, t3, r2[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : ownKeys(Object(r2)).forEach(function(t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
          });
        }
        return e2;
      }
      function _slicedToArray(e2, t2) {
        return function _arrayWithHoles(e3) {
          if (Array.isArray(e3))
            return e3;
        }(e2) || function _iterableToArrayLimit(e3, t3) {
          if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(e3)))
            return;
          var r2 = [], n2 = true, i2 = false, o2 = void 0;
          try {
            for (var a2, c2 = e3[Symbol.iterator](); !(n2 = (a2 = c2.next()).done) && (r2.push(a2.value), !t3 || r2.length !== t3); n2 = true)
              ;
          } catch (e4) {
            i2 = true, o2 = e4;
          } finally {
            try {
              n2 || c2.return == null || c2.return();
            } finally {
              if (i2)
                throw o2;
            }
          }
          return r2;
        }(e2, t2) || _unsupportedIterableToArray(e2, t2) || function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function _toConsumableArray(e2) {
        return function _arrayWithoutHoles(e3) {
          if (Array.isArray(e3))
            return _arrayLikeToArray(e3);
        }(e2) || function _iterableToArray(e3) {
          if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
            return Array.from(e3);
        }(e2) || _unsupportedIterableToArray(e2) || function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function _unsupportedIterableToArray(e2, t2) {
        if (e2) {
          if (typeof e2 == "string")
            return _arrayLikeToArray(e2, t2);
          var r2 = Object.prototype.toString.call(e2).slice(8, -1);
          return r2 === "Object" && e2.constructor && (r2 = e2.constructor.name), r2 === "Map" || r2 === "Set" ? Array.from(e2) : r2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? _arrayLikeToArray(e2, t2) : void 0;
        }
      }
      function _arrayLikeToArray(e2, t2) {
        (t2 == null || t2 > e2.length) && (t2 = e2.length);
        for (var r2 = 0, n2 = new Array(t2); r2 < t2; r2++)
          n2[r2] = e2[r2];
        return n2;
      }
      var e = function TypesonPromise(e2) {
        _classCallCheck(this, TypesonPromise), this.p = new Promise(e2);
      };
      e.__typeson__type__ = "TypesonPromise", typeof Symbol != "undefined" && (e.prototype[Symbol.toStringTag] = "TypesonPromise"), e.prototype.then = function(t2, r2) {
        var n2 = this;
        return new e(function(e2, i2) {
          n2.p.then(function(r3) {
            e2(t2 ? t2(r3) : r3);
          }).catch(function(e3) {
            return r2 ? r2(e3) : Promise.reject(e3);
          }).then(e2, i2);
        });
      }, e.prototype.catch = function(e2) {
        return this.then(null, e2);
      }, e.resolve = function(t2) {
        return new e(function(e2) {
          e2(t2);
        });
      }, e.reject = function(t2) {
        return new e(function(e2, r2) {
          r2(t2);
        });
      }, ["all", "race"].forEach(function(t2) {
        e[t2] = function(r2) {
          return new e(function(e2, n2) {
            Promise[t2](r2.map(function(e3) {
              return e3 && e3.constructor && e3.constructor.__typeson__type__ === "TypesonPromise" ? e3.p : e3;
            })).then(e2, n2);
          });
        };
      });
      var t = {}.toString, r = {}.hasOwnProperty, n = Object.getPrototypeOf, i = r.toString;
      function isThenable(e2, t2) {
        return isObject(e2) && typeof e2.then == "function" && (!t2 || typeof e2.catch == "function");
      }
      function toStringTag(e2) {
        return t.call(e2).slice(8, -1);
      }
      function hasConstructorOf(e2, t2) {
        if (!e2 || _typeof(e2) !== "object")
          return false;
        var o2 = n(e2);
        if (!o2)
          return t2 === null;
        var a2 = r.call(o2, "constructor") && o2.constructor;
        return typeof a2 != "function" ? t2 === null : t2 === a2 || (t2 !== null && i.call(a2) === i.call(t2) || typeof t2 == "function" && typeof a2.__typeson__type__ == "string" && a2.__typeson__type__ === t2.__typeson__type__);
      }
      function isPlainObject(e2) {
        return !(!e2 || toStringTag(e2) !== "Object") && (!n(e2) || hasConstructorOf(e2, Object));
      }
      function isObject(e2) {
        return e2 && _typeof(e2) === "object";
      }
      function escapeKeyPathComponent(e2) {
        return e2.replace(/~/g, "~0").replace(/\./g, "~1");
      }
      function unescapeKeyPathComponent(e2) {
        return e2.replace(/~1/g, ".").replace(/~0/g, "~");
      }
      function getByKeyPath(e2, t2) {
        if (t2 === "")
          return e2;
        var r2 = t2.indexOf(".");
        if (r2 > -1) {
          var n2 = e2[unescapeKeyPathComponent(t2.slice(0, r2))];
          return n2 === void 0 ? void 0 : getByKeyPath(n2, t2.slice(r2 + 1));
        }
        return e2[unescapeKeyPathComponent(t2)];
      }
      function setAtKeyPath(e2, t2, r2) {
        if (t2 === "")
          return r2;
        var n2 = t2.indexOf(".");
        return n2 > -1 ? setAtKeyPath(e2[unescapeKeyPathComponent(t2.slice(0, n2))], t2.slice(n2 + 1), r2) : (e2[unescapeKeyPathComponent(t2)] = r2, e2);
      }
      function _await(e2, t2, r2) {
        return r2 ? t2 ? t2(e2) : e2 : (e2 && e2.then || (e2 = Promise.resolve(e2)), t2 ? e2.then(t2) : e2);
      }
      var o = Object.keys, a = Array.isArray, c = {}.hasOwnProperty, u = ["type", "replaced", "iterateIn", "iterateUnsetNumeric"];
      function _async(e2) {
        return function() {
          for (var t2 = [], r2 = 0; r2 < arguments.length; r2++)
            t2[r2] = arguments[r2];
          try {
            return Promise.resolve(e2.apply(this, t2));
          } catch (e3) {
            return Promise.reject(e3);
          }
        };
      }
      function nestedPathsFirst(e2, t2) {
        if (e2.keypath === "")
          return -1;
        var r2 = e2.keypath.match(/\./g) || 0, n2 = t2.keypath.match(/\./g) || 0;
        return r2 && (r2 = r2.length), n2 && (n2 = n2.length), r2 > n2 ? -1 : r2 < n2 ? 1 : e2.keypath < t2.keypath ? -1 : e2.keypath > t2.keypath;
      }
      var s = function() {
        function Typeson2(e2) {
          _classCallCheck(this, Typeson2), this.options = e2, this.plainObjectReplacers = [], this.nonplainObjectReplacers = [], this.revivers = {}, this.types = {};
        }
        return function _createClass(e2, t2, r2) {
          return t2 && _defineProperties(e2.prototype, t2), r2 && _defineProperties(e2, r2), e2;
        }(Typeson2, [{ key: "stringify", value: function stringify(e2, t2, r2, n2) {
          n2 = _objectSpread2(_objectSpread2(_objectSpread2({}, this.options), n2), {}, { stringification: true });
          var i2 = this.encapsulate(e2, null, n2);
          return a(i2) ? JSON.stringify(i2[0], t2, r2) : i2.then(function(e3) {
            return JSON.stringify(e3, t2, r2);
          });
        } }, { key: "stringifySync", value: function stringifySync(e2, t2, r2, n2) {
          return this.stringify(e2, t2, r2, _objectSpread2(_objectSpread2({ throwOnBadSyncType: true }, n2), {}, { sync: true }));
        } }, { key: "stringifyAsync", value: function stringifyAsync(e2, t2, r2, n2) {
          return this.stringify(e2, t2, r2, _objectSpread2(_objectSpread2({ throwOnBadSyncType: true }, n2), {}, { sync: false }));
        } }, { key: "parse", value: function parse(e2, t2, r2) {
          return r2 = _objectSpread2(_objectSpread2(_objectSpread2({}, this.options), r2), {}, { parse: true }), this.revive(JSON.parse(e2, t2), r2);
        } }, { key: "parseSync", value: function parseSync(e2, t2, r2) {
          return this.parse(e2, t2, _objectSpread2(_objectSpread2({ throwOnBadSyncType: true }, r2), {}, { sync: true }));
        } }, { key: "parseAsync", value: function parseAsync(e2, t2, r2) {
          return this.parse(e2, t2, _objectSpread2(_objectSpread2({ throwOnBadSyncType: true }, r2), {}, { sync: false }));
        } }, { key: "specialTypeNames", value: function specialTypeNames(e2, t2) {
          var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return r2.returnTypeNames = true, this.encapsulate(e2, t2, r2);
        } }, { key: "rootTypeName", value: function rootTypeName(e2, t2) {
          var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return r2.iterateNone = true, this.encapsulate(e2, t2, r2);
        } }, { key: "encapsulate", value: function encapsulate(t2, r2, n2) {
          var i2 = _async(function(t3, r3) {
            return _await(Promise.all(r3.map(function(e2) {
              return e2[1].p;
            })), function(n3) {
              return _await(Promise.all(n3.map(_async(function(n4) {
                var o2 = false, a2 = [], c2 = _slicedToArray(r3.splice(0, 1), 1), u2 = _slicedToArray(c2[0], 7), s3 = u2[0], f3 = u2[2], l3 = u2[3], p3 = u2[4], y3 = u2[5], v3 = u2[6], b3 = _encapsulate(s3, n4, f3, l3, a2, true, v3), d3 = hasConstructorOf(b3, e);
                return function _invoke(e2, t4) {
                  var r4 = e2();
                  return r4 && r4.then ? r4.then(t4) : t4(r4);
                }(function() {
                  if (s3 && d3)
                    return _await(b3.p, function(e2) {
                      return p3[y3] = e2, o2 = true, i2(t3, a2);
                    });
                }, function(e2) {
                  return o2 ? e2 : (s3 ? p3[y3] = b3 : t3 = d3 ? b3.p : b3, i2(t3, a2));
                });
              }))), function() {
                return t3;
              });
            });
          }), s2 = (n2 = _objectSpread2(_objectSpread2({ sync: true }, this.options), n2)).sync, f2 = this, l2 = {}, p2 = [], y2 = [], v2 = [], b2 = !("cyclic" in n2) || n2.cyclic, d2 = n2.encapsulateObserver, h2 = _encapsulate("", t2, b2, r2 || {}, v2);
          function finish(e2) {
            var t3 = Object.values(l2);
            if (n2.iterateNone)
              return t3.length ? t3[0] : Typeson2.getJSONType(e2);
            if (t3.length) {
              if (n2.returnTypeNames)
                return _toConsumableArray(new Set(t3));
              e2 && isPlainObject(e2) && !c.call(e2, "$types") ? e2.$types = l2 : e2 = { $: e2, $types: { $: l2 } };
            } else
              isObject(e2) && c.call(e2, "$types") && (e2 = { $: e2, $types: true });
            return !n2.returnTypeNames && e2;
          }
          function _adaptBuiltinStateObjectProperties(e2, t3, r3) {
            Object.assign(e2, t3);
            var n3 = u.map(function(t4) {
              var r4 = e2[t4];
              return delete e2[t4], r4;
            });
            r3(), u.forEach(function(t4, r4) {
              e2[t4] = n3[r4];
            });
          }
          function _encapsulate(t3, r3, i3, u2, s3, v3, b3) {
            var h3, g2 = {}, m2 = _typeof(r3), O2 = d2 ? function(n3) {
              var o2 = b3 || u2.type || Typeson2.getJSONType(r3);
              d2(Object.assign(n3 || g2, { keypath: t3, value: r3, cyclic: i3, stateObj: u2, promisesData: s3, resolvingTypesonPromise: v3, awaitingTypesonPromise: hasConstructorOf(r3, e) }, { type: o2 }));
            } : null;
            if (["string", "boolean", "number", "undefined"].includes(m2))
              return r3 === void 0 || Number.isNaN(r3) || r3 === Number.NEGATIVE_INFINITY || r3 === Number.POSITIVE_INFINITY ? (h3 = u2.replaced ? r3 : replace(t3, r3, u2, s3, false, v3, O2)) !== r3 && (g2 = { replaced: h3 }) : h3 = r3, O2 && O2(), h3;
            if (r3 === null)
              return O2 && O2(), r3;
            if (i3 && !u2.iterateIn && !u2.iterateUnsetNumeric && r3 && _typeof(r3) === "object") {
              var _2 = p2.indexOf(r3);
              if (!(_2 < 0))
                return l2[t3] = "#", O2 && O2({ cyclicKeypath: y2[_2] }), "#" + y2[_2];
              i3 === true && (p2.push(r3), y2.push(t3));
            }
            var j2, S2 = isPlainObject(r3), T2 = a(r3), w2 = (S2 || T2) && (!f2.plainObjectReplacers.length || u2.replaced) || u2.iterateIn ? r3 : replace(t3, r3, u2, s3, S2 || T2, null, O2);
            if (w2 !== r3 ? (h3 = w2, g2 = { replaced: w2 }) : t3 === "" && hasConstructorOf(r3, e) ? (s3.push([t3, r3, i3, u2, void 0, void 0, u2.type]), h3 = r3) : T2 && u2.iterateIn !== "object" || u2.iterateIn === "array" ? (j2 = new Array(r3.length), g2 = { clone: j2 }) : (["function", "symbol"].includes(_typeof(r3)) || "toJSON" in r3 || hasConstructorOf(r3, e) || hasConstructorOf(r3, Promise) || hasConstructorOf(r3, ArrayBuffer)) && !S2 && u2.iterateIn !== "object" ? h3 = r3 : (j2 = {}, u2.addLength && (j2.length = r3.length), g2 = { clone: j2 }), O2 && O2(), n2.iterateNone)
              return j2 || h3;
            if (!j2)
              return h3;
            if (u2.iterateIn) {
              var A2 = function _loop(n3) {
                var o2 = { ownKeys: c.call(r3, n3) };
                _adaptBuiltinStateObjectProperties(u2, o2, function() {
                  var o3 = t3 + (t3 ? "." : "") + escapeKeyPathComponent(n3), a2 = _encapsulate(o3, r3[n3], Boolean(i3), u2, s3, v3);
                  hasConstructorOf(a2, e) ? s3.push([o3, a2, Boolean(i3), u2, j2, n3, u2.type]) : a2 !== void 0 && (j2[n3] = a2);
                });
              };
              for (var P2 in r3)
                A2(P2);
              O2 && O2({ endIterateIn: true, end: true });
            } else
              o(r3).forEach(function(n3) {
                var o2 = t3 + (t3 ? "." : "") + escapeKeyPathComponent(n3);
                _adaptBuiltinStateObjectProperties(u2, { ownKeys: true }, function() {
                  var t4 = _encapsulate(o2, r3[n3], Boolean(i3), u2, s3, v3);
                  hasConstructorOf(t4, e) ? s3.push([o2, t4, Boolean(i3), u2, j2, n3, u2.type]) : t4 !== void 0 && (j2[n3] = t4);
                });
              }), O2 && O2({ endIterateOwn: true, end: true });
            if (u2.iterateUnsetNumeric) {
              for (var C2 = r3.length, I2 = function _loop2(n3) {
                if (!(n3 in r3)) {
                  var o2 = t3 + (t3 ? "." : "") + n3;
                  _adaptBuiltinStateObjectProperties(u2, { ownKeys: false }, function() {
                    var t4 = _encapsulate(o2, void 0, Boolean(i3), u2, s3, v3);
                    hasConstructorOf(t4, e) ? s3.push([o2, t4, Boolean(i3), u2, j2, n3, u2.type]) : t4 !== void 0 && (j2[n3] = t4);
                  });
                }
              }, N2 = 0; N2 < C2; N2++)
                I2(N2);
              O2 && O2({ endIterateUnsetNumeric: true, end: true });
            }
            return j2;
          }
          function replace(e2, t3, r3, n3, i3, o2, a2) {
            for (var c2 = i3 ? f2.plainObjectReplacers : f2.nonplainObjectReplacers, u2 = c2.length; u2--; ) {
              var p3 = c2[u2];
              if (p3.test(t3, r3)) {
                var y3 = p3.type;
                if (f2.revivers[y3]) {
                  var v3 = l2[e2];
                  l2[e2] = v3 ? [y3].concat(v3) : y3;
                }
                return Object.assign(r3, { type: y3, replaced: true }), !s2 && p3.replaceAsync || p3.replace ? (a2 && a2({ replacing: true }), _encapsulate(e2, p3[s2 || !p3.replaceAsync ? "replace" : "replaceAsync"](t3, r3), b2 && "readonly", r3, n3, o2, y3)) : (a2 && a2({ typeDetected: true }), _encapsulate(e2, t3, b2 && "readonly", r3, n3, o2, y3));
              }
            }
            return t3;
          }
          return v2.length ? s2 && n2.throwOnBadSyncType ? function() {
            throw new TypeError("Sync method requested but async result obtained");
          }() : Promise.resolve(i2(h2, v2)).then(finish) : !s2 && n2.throwOnBadSyncType ? function() {
            throw new TypeError("Async method requested but sync result obtained");
          }() : n2.stringification && s2 ? [finish(h2)] : s2 ? finish(h2) : Promise.resolve(finish(h2));
        } }, { key: "encapsulateSync", value: function encapsulateSync(e2, t2, r2) {
          return this.encapsulate(e2, t2, _objectSpread2(_objectSpread2({ throwOnBadSyncType: true }, r2), {}, { sync: true }));
        } }, { key: "encapsulateAsync", value: function encapsulateAsync(e2, t2, r2) {
          return this.encapsulate(e2, t2, _objectSpread2(_objectSpread2({ throwOnBadSyncType: true }, r2), {}, { sync: false }));
        } }, { key: "revive", value: function revive(t2, r2) {
          var n2 = t2 && t2.$types;
          if (!n2)
            return t2;
          if (n2 === true)
            return t2.$;
          var i2 = (r2 = _objectSpread2(_objectSpread2({ sync: true }, this.options), r2)).sync, c2 = [], u2 = {}, s2 = true;
          n2.$ && isPlainObject(n2.$) && (t2 = t2.$, n2 = n2.$, s2 = false);
          var l2 = this;
          function executeReviver(e2, t3) {
            var r3 = _slicedToArray(l2.revivers[e2] || [], 1)[0];
            if (!r3)
              throw new Error("Unregistered type: " + e2);
            return i2 && !("revive" in r3) ? t3 : r3[i2 && r3.revive ? "revive" : !i2 && r3.reviveAsync ? "reviveAsync" : "revive"](t3, u2);
          }
          var p2 = [];
          function checkUndefined(e2) {
            return hasConstructorOf(e2, f) ? void 0 : e2;
          }
          var y2, v2 = function revivePlainObjects() {
            var r3 = [];
            if (Object.entries(n2).forEach(function(e2) {
              var t3 = _slicedToArray(e2, 2), i3 = t3[0], o2 = t3[1];
              o2 !== "#" && [].concat(o2).forEach(function(e3) {
                _slicedToArray(l2.revivers[e3] || [null, {}], 2)[1].plain && (r3.push({ keypath: i3, type: e3 }), delete n2[i3]);
              });
            }), r3.length)
              return r3.sort(nestedPathsFirst).reduce(function reducer(r4, n3) {
                var i3 = n3.keypath, o2 = n3.type;
                if (isThenable(r4))
                  return r4.then(function(e2) {
                    return reducer(e2, { keypath: i3, type: o2 });
                  });
                var a2 = getByKeyPath(t2, i3);
                if (hasConstructorOf(a2 = executeReviver(o2, a2), e))
                  return a2.then(function(e2) {
                    var r5 = setAtKeyPath(t2, i3, e2);
                    r5 === e2 && (t2 = r5);
                  });
                var c3 = setAtKeyPath(t2, i3, a2);
                c3 === a2 && (t2 = c3);
              }, void 0);
          }();
          return hasConstructorOf(v2, e) ? y2 = v2.then(function() {
            return t2;
          }) : (y2 = function _revive(t3, r3, i3, u3, l3) {
            if (!s2 || t3 !== "$types") {
              var y3 = n2[t3], v3 = a(r3);
              if (v3 || isPlainObject(r3)) {
                var b2 = v3 ? new Array(r3.length) : {};
                for (o(r3).forEach(function(n3) {
                  var o2 = _revive(t3 + (t3 ? "." : "") + escapeKeyPathComponent(n3), r3[n3], i3 || b2, b2, n3), a2 = function set(e2) {
                    return hasConstructorOf(e2, f) ? b2[n3] = void 0 : e2 !== void 0 && (b2[n3] = e2), e2;
                  };
                  hasConstructorOf(o2, e) ? p2.push(o2.then(function(e2) {
                    return a2(e2);
                  })) : a2(o2);
                }), r3 = b2; c2.length; ) {
                  var d2 = _slicedToArray(c2[0], 4), h2 = d2[0], g2 = d2[1], m2 = d2[2], O2 = d2[3], _2 = getByKeyPath(h2, g2);
                  if (_2 === void 0)
                    break;
                  m2[O2] = _2, c2.splice(0, 1);
                }
              }
              if (!y3)
                return r3;
              if (y3 === "#") {
                var j2 = getByKeyPath(i3, r3.slice(1));
                return j2 === void 0 && c2.push([i3, r3.slice(1), u3, l3]), j2;
              }
              return [].concat(y3).reduce(function reducer(t4, r4) {
                return hasConstructorOf(t4, e) ? t4.then(function(e2) {
                  return reducer(e2, r4);
                }) : executeReviver(r4, t4);
              }, r3);
            }
          }("", t2, null), p2.length && (y2 = e.resolve(y2).then(function(t3) {
            return e.all([t3].concat(p2));
          }).then(function(e2) {
            return _slicedToArray(e2, 1)[0];
          }))), isThenable(y2) ? i2 && r2.throwOnBadSyncType ? function() {
            throw new TypeError("Sync method requested but async result obtained");
          }() : hasConstructorOf(y2, e) ? y2.p.then(checkUndefined) : y2 : !i2 && r2.throwOnBadSyncType ? function() {
            throw new TypeError("Async method requested but sync result obtained");
          }() : i2 ? checkUndefined(y2) : Promise.resolve(checkUndefined(y2));
        } }, { key: "reviveSync", value: function reviveSync(e2, t2) {
          return this.revive(e2, _objectSpread2(_objectSpread2({ throwOnBadSyncType: true }, t2), {}, { sync: true }));
        } }, { key: "reviveAsync", value: function reviveAsync(e2, t2) {
          return this.revive(e2, _objectSpread2(_objectSpread2({ throwOnBadSyncType: true }, t2), {}, { sync: false }));
        } }, { key: "register", value: function register(e2, t2) {
          return t2 = t2 || {}, [].concat(e2).forEach(function R(e3) {
            var r2 = this;
            if (a(e3))
              return e3.map(function(e4) {
                return R.call(r2, e4);
              });
            e3 && o(e3).forEach(function(r3) {
              if (r3 === "#")
                throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");
              if (Typeson2.JSON_TYPES.includes(r3))
                throw new TypeError("Plain JSON object types are reserved as type names");
              var n2 = e3[r3], i2 = n2 && n2.testPlainObjects ? this.plainObjectReplacers : this.nonplainObjectReplacers, o2 = i2.filter(function(e4) {
                return e4.type === r3;
              });
              if (o2.length && (i2.splice(i2.indexOf(o2[0]), 1), delete this.revivers[r3], delete this.types[r3]), typeof n2 == "function") {
                var c2 = n2;
                n2 = { test: function test(e4) {
                  return e4 && e4.constructor === c2;
                }, replace: function replace(e4) {
                  return _objectSpread2({}, e4);
                }, revive: function revive(e4) {
                  return Object.assign(Object.create(c2.prototype), e4);
                } };
              } else if (a(n2)) {
                var u2 = _slicedToArray(n2, 3);
                n2 = { test: u2[0], replace: u2[1], revive: u2[2] };
              }
              if (n2 && n2.test) {
                var s2 = { type: r3, test: n2.test.bind(n2) };
                n2.replace && (s2.replace = n2.replace.bind(n2)), n2.replaceAsync && (s2.replaceAsync = n2.replaceAsync.bind(n2));
                var f2 = typeof t2.fallback == "number" ? t2.fallback : t2.fallback ? 0 : Number.POSITIVE_INFINITY;
                if (n2.testPlainObjects ? this.plainObjectReplacers.splice(f2, 0, s2) : this.nonplainObjectReplacers.splice(f2, 0, s2), n2.revive || n2.reviveAsync) {
                  var l2 = {};
                  n2.revive && (l2.revive = n2.revive.bind(n2)), n2.reviveAsync && (l2.reviveAsync = n2.reviveAsync.bind(n2)), this.revivers[r3] = [l2, { plain: n2.testPlainObjects }];
                }
                this.types[r3] = n2;
              }
            }, this);
          }, this), this;
        } }]), Typeson2;
      }(), f = function Undefined() {
        _classCallCheck(this, Undefined);
      };
      f.__typeson__type__ = "TypesonUndefined", s.Undefined = f, s.Promise = e, s.isThenable = isThenable, s.toStringTag = toStringTag, s.hasConstructorOf = hasConstructorOf, s.isObject = isObject, s.isPlainObject = isPlainObject, s.isUserObject = function isUserObject(e2) {
        if (!e2 || toStringTag(e2) !== "Object")
          return false;
        var t2 = n(e2);
        return !t2 || (hasConstructorOf(e2, Object) || isUserObject(t2));
      }, s.escapeKeyPathComponent = escapeKeyPathComponent, s.unescapeKeyPathComponent = unescapeKeyPathComponent, s.getByKeyPath = getByKeyPath, s.getJSONType = function getJSONType(e2) {
        return e2 === null ? "null" : Array.isArray(e2) ? "array" : _typeof(e2);
      }, s.JSON_TYPES = ["null", "boolean", "number", "string", "array", "object"];
      for (var l = { userObject: { test: function test(e2, t2) {
        return s.isUserObject(e2);
      }, replace: function replace(e2) {
        return function _objectSpread2$1(e3) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2] != null ? arguments[t2] : {};
            t2 % 2 ? ownKeys$1(Object(r2), true).forEach(function(t3) {
              _defineProperty$1(e3, t3, r2[t3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r2)) : ownKeys$1(Object(r2)).forEach(function(t3) {
              Object.defineProperty(e3, t3, Object.getOwnPropertyDescriptor(r2, t3));
            });
          }
          return e3;
        }({}, e2);
      }, revive: function revive(e2) {
        return e2;
      } } }, p = [{ arrayNonindexKeys: { testPlainObjects: true, test: function test(e2, t2) {
        return !!Array.isArray(e2) && (Object.keys(e2).some(function(e3) {
          return String(Number.parseInt(e3)) !== e3;
        }) && (t2.iterateIn = "object", t2.addLength = true), true);
      }, replace: function replace(e2, t2) {
        return t2.iterateUnsetNumeric = true, e2;
      }, revive: function revive(e2) {
        if (Array.isArray(e2))
          return e2;
        var t2 = [];
        return Object.keys(e2).forEach(function(r2) {
          var n2 = e2[r2];
          t2[r2] = n2;
        }), t2;
      } } }, { sparseUndefined: { test: function test(e2, t2) {
        return e2 === void 0 && t2.ownKeys === false;
      }, replace: function replace(e2) {
        return 0;
      }, revive: function revive(e2) {
      } } }], y = { undef: { test: function test(e2, t2) {
        return e2 === void 0 && (t2.ownKeys || !("ownKeys" in t2));
      }, replace: function replace(e2) {
        return 0;
      }, revive: function revive(e2) {
        return new s.Undefined();
      } } }, v = { StringObject: { test: function test(e2) {
        return s.toStringTag(e2) === "String" && _typeof$1(e2) === "object";
      }, replace: function replace(e2) {
        return String(e2);
      }, revive: function revive(e2) {
        return new String(e2);
      } }, BooleanObject: { test: function test(e2) {
        return s.toStringTag(e2) === "Boolean" && _typeof$1(e2) === "object";
      }, replace: function replace(e2) {
        return Boolean(e2);
      }, revive: function revive(e2) {
        return new Boolean(e2);
      } }, NumberObject: { test: function test(e2) {
        return s.toStringTag(e2) === "Number" && _typeof$1(e2) === "object";
      }, replace: function replace(e2) {
        return Number(e2);
      }, revive: function revive(e2) {
        return new Number(e2);
      } } }, b = [{ nan: { test: function test(e2) {
        return Number.isNaN(e2);
      }, replace: function replace(e2) {
        return "NaN";
      }, revive: function revive(e2) {
        return Number.NaN;
      } } }, { infinity: { test: function test(e2) {
        return e2 === Number.POSITIVE_INFINITY;
      }, replace: function replace(e2) {
        return "Infinity";
      }, revive: function revive(e2) {
        return Number.POSITIVE_INFINITY;
      } } }, { negativeInfinity: { test: function test(e2) {
        return e2 === Number.NEGATIVE_INFINITY;
      }, replace: function replace(e2) {
        return "-Infinity";
      }, revive: function revive(e2) {
        return Number.NEGATIVE_INFINITY;
      } } }], d = { date: { test: function test(e2) {
        return s.toStringTag(e2) === "Date";
      }, replace: function replace(e2) {
        var t2 = e2.getTime();
        return Number.isNaN(t2) ? "NaN" : t2;
      }, revive: function revive(e2) {
        return e2 === "NaN" ? new Date(Number.NaN) : new Date(e2);
      } } }, h = { regexp: { test: function test(e2) {
        return s.toStringTag(e2) === "RegExp";
      }, replace: function replace(e2) {
        return { source: e2.source, flags: (e2.global ? "g" : "") + (e2.ignoreCase ? "i" : "") + (e2.multiline ? "m" : "") + (e2.sticky ? "y" : "") + (e2.unicode ? "u" : "") };
      }, revive: function revive(e2) {
        var t2 = e2.source, r2 = e2.flags;
        return new RegExp(t2, r2);
      } } }, g = { map: { test: function test(e2) {
        return s.toStringTag(e2) === "Map";
      }, replace: function replace(e2) {
        return _toConsumableArray$1(e2.entries());
      }, revive: function revive(e2) {
        return new Map(e2);
      } } }, m = { set: { test: function test(e2) {
        return s.toStringTag(e2) === "Set";
      }, replace: function replace(e2) {
        return _toConsumableArray$1(e2.values());
      }, revive: function revive(e2) {
        return new Set(e2);
      } } }, O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _ = new Uint8Array(256), j = 0; j < O.length; j++)
        _[O.charCodeAt(j)] = j;
      var S = function encode3(e2, t2, r2) {
        r2 == null && (r2 = e2.byteLength);
        for (var n2 = new Uint8Array(e2, t2 || 0, r2), i2 = n2.length, o2 = "", a2 = 0; a2 < i2; a2 += 3)
          o2 += O[n2[a2] >> 2], o2 += O[(3 & n2[a2]) << 4 | n2[a2 + 1] >> 4], o2 += O[(15 & n2[a2 + 1]) << 2 | n2[a2 + 2] >> 6], o2 += O[63 & n2[a2 + 2]];
        return i2 % 3 == 2 ? o2 = o2.slice(0, -1) + "=" : i2 % 3 == 1 && (o2 = o2.slice(0, -2) + "=="), o2;
      }, T = function decode3(e2) {
        var t2, r2, n2, i2, o2 = e2.length, a2 = 0.75 * e2.length, c2 = 0;
        e2[e2.length - 1] === "=" && (a2--, e2[e2.length - 2] === "=" && a2--);
        for (var u2 = new ArrayBuffer(a2), s2 = new Uint8Array(u2), f2 = 0; f2 < o2; f2 += 4)
          t2 = _[e2.charCodeAt(f2)], r2 = _[e2.charCodeAt(f2 + 1)], n2 = _[e2.charCodeAt(f2 + 2)], i2 = _[e2.charCodeAt(f2 + 3)], s2[c2++] = t2 << 2 | r2 >> 4, s2[c2++] = (15 & r2) << 4 | n2 >> 2, s2[c2++] = (3 & n2) << 6 | 63 & i2;
        return u2;
      }, w = { arraybuffer: { test: function test(e2) {
        return s.toStringTag(e2) === "ArrayBuffer";
      }, replace: function replace(e2, t2) {
        t2.buffers || (t2.buffers = []);
        var r2 = t2.buffers.indexOf(e2);
        return r2 > -1 ? { index: r2 } : (t2.buffers.push(e2), S(e2));
      }, revive: function revive(e2, t2) {
        if (t2.buffers || (t2.buffers = []), _typeof$1(e2) === "object")
          return t2.buffers[e2.index];
        var r2 = T(e2);
        return t2.buffers.push(r2), r2;
      } } }, A = typeof self == "undefined" ? global : self, P = {};
      ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"].forEach(function(e2) {
        var t2 = e2, r2 = A[t2];
        r2 && (P[e2.toLowerCase()] = { test: function test(e3) {
          return s.toStringTag(e3) === t2;
        }, replace: function replace(e3, t3) {
          var r3 = e3.buffer, n2 = e3.byteOffset, i2 = e3.length;
          t3.buffers || (t3.buffers = []);
          var o2 = t3.buffers.indexOf(r3);
          return o2 > -1 ? { index: o2, byteOffset: n2, length: i2 } : (t3.buffers.push(r3), { encoded: S(r3), byteOffset: n2, length: i2 });
        }, revive: function revive(e3, t3) {
          t3.buffers || (t3.buffers = []);
          var n2, i2 = e3.byteOffset, o2 = e3.length, a2 = e3.encoded, c2 = e3.index;
          return "index" in e3 ? n2 = t3.buffers[c2] : (n2 = T(a2), t3.buffers.push(n2)), new r2(n2, i2, o2);
        } });
      });
      var C = { dataview: { test: function test(e2) {
        return s.toStringTag(e2) === "DataView";
      }, replace: function replace(e2, t2) {
        var r2 = e2.buffer, n2 = e2.byteOffset, i2 = e2.byteLength;
        t2.buffers || (t2.buffers = []);
        var o2 = t2.buffers.indexOf(r2);
        return o2 > -1 ? { index: o2, byteOffset: n2, byteLength: i2 } : (t2.buffers.push(r2), { encoded: S(r2), byteOffset: n2, byteLength: i2 });
      }, revive: function revive(e2, t2) {
        t2.buffers || (t2.buffers = []);
        var r2, n2 = e2.byteOffset, i2 = e2.byteLength, o2 = e2.encoded, a2 = e2.index;
        return "index" in e2 ? r2 = t2.buffers[a2] : (r2 = T(o2), t2.buffers.push(r2)), new DataView(r2, n2, i2);
      } } }, I = { IntlCollator: { test: function test(e2) {
        return s.hasConstructorOf(e2, Intl.Collator);
      }, replace: function replace(e2) {
        return e2.resolvedOptions();
      }, revive: function revive(e2) {
        return new Intl.Collator(e2.locale, e2);
      } }, IntlDateTimeFormat: { test: function test(e2) {
        return s.hasConstructorOf(e2, Intl.DateTimeFormat);
      }, replace: function replace(e2) {
        return e2.resolvedOptions();
      }, revive: function revive(e2) {
        return new Intl.DateTimeFormat(e2.locale, e2);
      } }, IntlNumberFormat: { test: function test(e2) {
        return s.hasConstructorOf(e2, Intl.NumberFormat);
      }, replace: function replace(e2) {
        return e2.resolvedOptions();
      }, revive: function revive(e2) {
        return new Intl.NumberFormat(e2.locale, e2);
      } } };
      function string2arraybuffer(e2) {
        for (var t2 = new Uint8Array(e2.length), r2 = 0; r2 < e2.length; r2++)
          t2[r2] = e2.charCodeAt(r2);
        return t2.buffer;
      }
      var N = { file: { test: function test(e2) {
        return s.toStringTag(e2) === "File";
      }, replace: function replace(e2) {
        var t2 = new XMLHttpRequest();
        if (t2.overrideMimeType("text/plain; charset=x-user-defined"), t2.open("GET", URL.createObjectURL(e2), false), t2.send(), t2.status !== 200 && t2.status !== 0)
          throw new Error("Bad File access: " + t2.status);
        return { type: e2.type, stringContents: t2.responseText, name: e2.name, lastModified: e2.lastModified };
      }, revive: function revive(e2) {
        var t2 = e2.name, r2 = e2.type, n2 = e2.stringContents, i2 = e2.lastModified;
        return new File([string2arraybuffer(n2)], t2, { type: r2, lastModified: i2 });
      }, replaceAsync: function replaceAsync(e2) {
        return new s.Promise(function(t2, r2) {
          var n2 = new FileReader();
          n2.addEventListener("load", function() {
            t2({ type: e2.type, stringContents: n2.result, name: e2.name, lastModified: e2.lastModified });
          }), n2.addEventListener("error", function() {
            r2(n2.error);
          }), n2.readAsBinaryString(e2);
        });
      } } }, k = { bigint: { test: function test(e2) {
        return typeof e2 == "bigint";
      }, replace: function replace(e2) {
        return String(e2);
      }, revive: function revive(e2) {
        return BigInt(e2);
      } } }, E = { bigintObject: { test: function test(e2) {
        return _typeof$1(e2) === "object" && s.hasConstructorOf(e2, BigInt);
      }, replace: function replace(e2) {
        return String(e2);
      }, revive: function revive(e2) {
        return new Object(BigInt(e2));
      } } }, B = { cryptokey: { test: function test(e2) {
        return s.toStringTag(e2) === "CryptoKey" && e2.extractable;
      }, replaceAsync: function replaceAsync(e2) {
        return new s.Promise(function(t2, r2) {
          crypto.subtle.exportKey("jwk", e2).catch(function(e3) {
            r2(e3);
          }).then(function(r3) {
            t2({ jwk: r3, algorithm: e2.algorithm, usages: e2.usages });
          });
        });
      }, revive: function revive(e2) {
        var t2 = e2.jwk, r2 = e2.algorithm, n2 = e2.usages;
        return crypto.subtle.importKey("jwk", t2, r2, true, n2);
      } } };
      return [l, y, p, v, b, d, h, { imagedata: { test: function test(e2) {
        return s.toStringTag(e2) === "ImageData";
      }, replace: function replace(e2) {
        return { array: _toConsumableArray$1(e2.data), width: e2.width, height: e2.height };
      }, revive: function revive(e2) {
        return new ImageData(new Uint8ClampedArray(e2.array), e2.width, e2.height);
      } } }, { imagebitmap: { test: function test(e2) {
        return s.toStringTag(e2) === "ImageBitmap" || e2 && e2.dataset && e2.dataset.toStringTag === "ImageBitmap";
      }, replace: function replace(e2) {
        var t2 = document.createElement("canvas");
        return t2.getContext("2d").drawImage(e2, 0, 0), t2.toDataURL();
      }, revive: function revive(e2) {
        var t2 = document.createElement("canvas"), r2 = t2.getContext("2d"), n2 = document.createElement("img");
        return n2.addEventListener("load", function() {
          r2.drawImage(n2, 0, 0);
        }), n2.src = e2, t2;
      }, reviveAsync: function reviveAsync(e2) {
        var t2 = document.createElement("canvas"), r2 = t2.getContext("2d"), n2 = document.createElement("img");
        return n2.addEventListener("load", function() {
          r2.drawImage(n2, 0, 0);
        }), n2.src = e2, createImageBitmap(t2);
      } } }, N, { file: N.file, filelist: { test: function test(e2) {
        return s.toStringTag(e2) === "FileList";
      }, replace: function replace(e2) {
        for (var t2 = [], r2 = 0; r2 < e2.length; r2++)
          t2[r2] = e2.item(r2);
        return t2;
      }, revive: function revive(e2) {
        return new (function() {
          function FileList() {
            _classCallCheck$1(this, FileList), this._files = arguments[0], this.length = this._files.length;
          }
          return function _createClass$1(e3, t2, r2) {
            return t2 && _defineProperties$1(e3.prototype, t2), r2 && _defineProperties$1(e3, r2), e3;
          }(FileList, [{ key: "item", value: function item(e3) {
            return this._files[e3];
          } }, { key: Symbol.toStringTag, get: function get() {
            return "FileList";
          } }]), FileList;
        }())(e2);
      } } }, { blob: { test: function test(e2) {
        return s.toStringTag(e2) === "Blob";
      }, replace: function replace(e2) {
        var t2 = new XMLHttpRequest();
        if (t2.overrideMimeType("text/plain; charset=x-user-defined"), t2.open("GET", URL.createObjectURL(e2), false), t2.send(), t2.status !== 200 && t2.status !== 0)
          throw new Error("Bad Blob access: " + t2.status);
        return { type: e2.type, stringContents: t2.responseText };
      }, revive: function revive(e2) {
        var t2 = e2.type, r2 = e2.stringContents;
        return new Blob([string2arraybuffer(r2)], { type: t2 });
      }, replaceAsync: function replaceAsync(e2) {
        return new s.Promise(function(t2, r2) {
          var n2 = new FileReader();
          n2.addEventListener("load", function() {
            t2({ type: e2.type, stringContents: n2.result });
          }), n2.addEventListener("error", function() {
            r2(n2.error);
          }), n2.readAsBinaryString(e2);
        });
      } } }].concat(typeof Map == "function" ? g : [], typeof Set == "function" ? m : [], typeof ArrayBuffer == "function" ? w : [], typeof Uint8Array == "function" ? P : [], typeof DataView == "function" ? C : [], typeof Intl != "undefined" ? I : [], typeof crypto != "undefined" ? B : [], typeof BigInt != "undefined" ? [k, E] : []).concat({ checkDataCloneException: { test: function test(e2) {
        var t2 = {}.toString.call(e2).slice(8, -1);
        if (["symbol", "function"].includes(_typeof$1(e2)) || ["Arguments", "Module", "Error", "Promise", "WeakMap", "WeakSet", "Event", "MessageChannel"].includes(t2) || e2 && _typeof$1(e2) === "object" && typeof e2.nodeType == "number" && typeof e2.insertBefore == "function")
          throw new DOMException("The object cannot be cloned.", "DataCloneError");
        return false;
      } } });
    });
  }
});

// node_modules/base64-encoding/base64-js.js
var base64_js_exports = {};
__export(base64_js_exports, {
  decode: () => toByteArray,
  encode: () => fromByteArray,
  fromByteArray: () => fromByteArray,
  toByteArray: () => toByteArray
});
var b64lookup = [];
var urlLookup = [];
var revLookup = [];
var CODE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var CODE_B64 = CODE + "+/";
var CODE_URL = CODE + "-_";
var PAD = "=";
var MAX_CHUNK_LENGTH = 16383;
for (let i = 0, len = CODE_B64.length; i < len; ++i) {
  b64lookup[i] = CODE_B64[i];
  urlLookup[i] = CODE_URL[i];
  revLookup[CODE_B64.charCodeAt(i)] = i;
}
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
  const len = b64.length;
  let validLen = b64.indexOf(PAD);
  if (validLen === -1)
    validLen = len;
  const placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
}
function _byteLength(validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(str) {
  let tmp;
  switch (str.length % 4) {
    case 2:
      str += "==";
      break;
    case 3:
      str += "=";
      break;
  }
  const [validLen, placeHoldersLen] = getLens(str);
  const arr = new Uint8Array(_byteLength(validLen, placeHoldersLen));
  let curByte = 0;
  const len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  let i;
  for (i = 0; i < len; i += 4) {
    tmp = revLookup[str.charCodeAt(i)] << 18 | revLookup[str.charCodeAt(i + 1)] << 12 | revLookup[str.charCodeAt(i + 2)] << 6 | revLookup[str.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 255;
    arr[curByte++] = tmp >> 8 & 255;
    arr[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 2) {
    tmp = revLookup[str.charCodeAt(i)] << 2 | revLookup[str.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 1) {
    tmp = revLookup[str.charCodeAt(i)] << 10 | revLookup[str.charCodeAt(i + 1)] << 4 | revLookup[str.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 255;
    arr[curByte++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(lookup, num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(lookup, view, start, end) {
  let tmp;
  const output = new Array((end - start) / 3);
  for (let i = start, j = 0; i < end; i += 3, j++) {
    tmp = (view.getUint8(i) << 16 & 16711680) + (view.getUint8(i + 1) << 8 & 65280) + (view.getUint8(i + 2) & 255);
    output[j] = tripletToBase64(lookup, tmp);
  }
  return output.join("");
}
var bs2dv = (bs) => bs instanceof ArrayBuffer ? new DataView(bs) : new DataView(bs.buffer, bs.byteOffset, bs.byteLength);
function fromByteArray(bufferSource, urlFriendly = false) {
  const view = bs2dv(bufferSource);
  const len = view.byteLength;
  const extraBytes = len % 3;
  const len2 = len - extraBytes;
  const parts = new Array(Math.floor(len2 / MAX_CHUNK_LENGTH) + Math.sign(extraBytes));
  const lookup = urlFriendly ? urlLookup : b64lookup;
  const pad = urlFriendly ? "" : PAD;
  let j = 0;
  for (let i = 0; i < len2; i += MAX_CHUNK_LENGTH) {
    parts[j++] = encodeChunk(lookup, view, i, i + MAX_CHUNK_LENGTH > len2 ? len2 : i + MAX_CHUNK_LENGTH);
  }
  if (extraBytes === 1) {
    let tmp = view.getUint8(len - 1);
    parts[j] = lookup[tmp >> 2] + lookup[tmp << 4 & 63] + pad + pad;
  } else if (extraBytes === 2) {
    let tmp = (view.getUint8(len - 2) << 8) + view.getUint8(len - 1);
    parts[j] = lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + pad;
  }
  return parts.join("");
}

// node_modules/base64-encoding/base64.js
var WASM = `AGFzbQEAAAABFwRgAX8Bf2AAAGACf38Bf2AEf39/fwF/AwYFAQACAAMFAwEAAgYkBn8AQYAIC38AQZELC38AQYAIC38AQaCLBAt/AEEAC38AQQELB7sBDAZtZW1vcnkCABFfX3dhc21fY2FsbF9jdG9ycwAAEEJhc2U2NGRlY29kZV9sZW4AAQxCYXNlNjRkZWNvZGUAAhBCYXNlNjRlbmNvZGVfbGVuAAMMQmFzZTY0ZW5jb2RlAAQMX19kc29faGFuZGxlAwAKX19kYXRhX2VuZAMBDV9fZ2xvYmFsX2Jhc2UDAgtfX2hlYXBfYmFzZQMDDV9fbWVtb3J5X2Jhc2UDBAxfX3RhYmxlX2Jhc2UDBQreBgUDAAELNwEDfyAAIQEDQCABLQAAIAFBAWoiAyEBQYAIai0AAEHAAEkNAAsgAyAAa0ECakEEbUEDbEEBaguXAwEDfyABIQIDQCACLQAAIAJBAWoiAyECQYAIai0AAEHAAEkNAAsgAyABQX9zaiICQQNqQQRtIAJBBU4EQCADIAFrQQNqIQIDQCAAIAEtAABBgAhqLQAAQQJ0IAFBAWoiAy0AAEGACGotAABBBHZyOgAAIABBAWogAy0AAEGACGotAABBBHQgAUECaiIDLQAAQYAIai0AAEECdnI6AAAgAEECaiABQQNqLQAAQYAIai0AACADLQAAQYAIai0AAEEGdHI6AAAgAEEDaiEAIAFBBGohASACQXxqIgJBCEoNAAsgAkF8aiECC0EDbAJAIAJBAkgNACAAIAEtAABBgAhqLQAAQQJ0IAEtAAFBgAhqLQAAQQR2cjoAACACQQJGBEAgAEEBaiEADAELIAAgAS0AAUGACGotAABBBHQgAS0AAkGACGotAABBAnZyOgABIAJBBEgEQCAAQQJqIQAMAQsgACABLQADQYAIai0AACABLQACQYAIai0AAEEGdHI6AAIgAEEDaiEACyAAQQA6AABBACACa0EDcWsLEAAgAEECakEDbUECdEEBcgv1AgEGf0GACkHQCiADQQFGGyEFIAAhBCACQQNOBEAgAkF+aiEIA0AgBCAFIAEgB2oiBi0AAEECdmotAAA6AAAgBEEBaiAFIAYtAABBBHRBMHEgBkEBaiIJLQAAQQR2cmotAAA6AAAgBEECaiAFIAktAABBAnRBPHEgBkECaiIGLQAAQQZ2cmotAAA6AAAgBEEDaiAFIAYtAABBP3FqLQAAOgAAIARBBGohBCAHQQNqIgcgCEgNAAsLAkAgByACTg0AIAQgBSABIAdqIgEtAABBAnZqLQAAOgAAIAEtAABBBHRBMHEhBgJAAkAgAkF/aiAHRgRAIAQgBSAGai0AADoAASADRQ0BIARBAmohBAwDCyAEIAUgAUEBaiIBLQAAQQR2IAZyai0AADoAASAEIAUgAS0AAEECdEE8cWotAAA6AAIgA0UNASAEQQNqIQQMAgsgBEE9OgACCyAEQT06AAMgBEEEaiEECyAEQQA6AAAgBCAAa0EBagsLjgMCAEGACAvAAkBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEA+QD5APzQ1Njc4OTo7PD1AQEBAQEBAAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBlAQEBAP0AaGxwdHh8gISIjJCUmJygpKissLS4vMDEyM0BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OS1fAEHQCgtAQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLwAmCXByb2R1Y2VycwEMcHJvY2Vzc2VkLWJ5AQVjbGFuZwYxMC4wLjA=`;
var BYTES_PER_PAGE = 64 * 1024;
function ensureMemory(memory, pointer, targetLength) {
  const availableMemory = memory.buffer.byteLength - pointer;
  if (availableMemory < targetLength) {
    const nPages = Math.ceil((targetLength - availableMemory) / BYTES_PER_PAGE);
    memory.grow(nPages);
  }
}
var textEncodeInto = "encodeInto" in TextEncoder.prototype ? (encoder, uint8, str) => (encoder.encodeInto(str, uint8), uint8) : (encoder, uint8, str) => (uint8.set(encoder.encode(str)), uint8);
function textEncodeIntoMemory(instance, memory, str, encoder) {
  const pBufCoded = instance.exports.__heap_base.value;
  const bufCodedLen = str.length;
  ensureMemory(memory, pBufCoded, bufCodedLen);
  const bufCoded = new Uint8Array(memory.buffer, pBufCoded, bufCodedLen + 1);
  textEncodeInto(encoder, bufCoded, str);
  bufCoded[bufCodedLen] = 0;
  return [pBufCoded, bufCodedLen];
}
function decode(instance, str, encoder) {
  const { exports } = instance;
  const memory = exports.memory;
  const c_Base64decode_len = exports.Base64decode_len;
  const c_Base64decode = exports.Base64decode;
  const [pBufCoded, bufCodedLen] = textEncodeIntoMemory(instance, memory, str, encoder);
  const pBufPlain = pBufCoded + bufCodedLen;
  const bufPlainLen = c_Base64decode_len(pBufCoded);
  ensureMemory(memory, pBufPlain, bufPlainLen);
  const lenReal = c_Base64decode(pBufPlain, pBufCoded);
  const bufPlain = new Uint8Array(memory.buffer, pBufPlain, lenReal);
  const ret = bufPlain.slice();
  return ret;
}
var bs2u8 = (bs) => bs instanceof ArrayBuffer ? new Uint8Array(bs) : new Uint8Array(bs.buffer, bs.byteOffset, bs.byteLength);
function writeIntoMemory(instance, memory, bufferSource) {
  const pString = instance.exports.__heap_base.value;
  const stringLen = bufferSource.byteLength;
  ensureMemory(memory, pString, stringLen);
  const string = new Uint8Array(memory.buffer, pString, stringLen + 1);
  string.set(bs2u8(bufferSource));
  string[stringLen] = 0;
  return [pString, stringLen];
}
function encode(instance, bufferSource, urlFriendly) {
  const { exports } = instance;
  const memory = exports.memory;
  const c_Base64encode_len = exports.Base64encode_len;
  const c_Base64encode = exports.Base64encode;
  const [pString, stringLen] = writeIntoMemory(instance, memory, bufferSource);
  const pEncoded = pString + stringLen;
  const encodedLen = c_Base64encode_len(stringLen);
  ensureMemory(memory, pEncoded, encodedLen);
  const encodedLenReal = c_Base64encode(pEncoded, pString, stringLen, urlFriendly ? 1 : 0);
  const encoded = new Uint8Array(memory.buffer, pEncoded, encodedLenReal - 1);
  const str = new TextDecoder().decode(encoded);
  return str;
}
var decodedWASM = null;
var WASMImpl = class {
  constructor() {
    this.encoder = new TextEncoder();
  }
  async init() {
    decodedWASM = decodedWASM || toByteArray(WASM);
    const { instance } = await WebAssembly.instantiate(decodedWASM);
    this.instance = instance;
    return this;
  }
  encode(bufferSource, urlFriendly) {
    return encode(this.instance, bufferSource, urlFriendly);
  }
  decode(input) {
    return decode(this.instance, input, this.encoder);
  }
};

// node_modules/base64-encoding/index.js
var __classPrivateFieldSet = function(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
};
var __classPrivateFieldGet = function(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
};
var _provider;
var _urlFriendly;
var _provider_1;
var Base64Provider = class {
  constructor() {
    if (typeof Uint8Array === "undefined" || typeof DataView === "undefined") {
      throw Error("Platform unsupported. Make sure Uint8Array and DataView exist.");
    }
    this.impl = base64_js_exports;
  }
  async init() {
    if (typeof WebAssembly !== "undefined") {
      try {
        this.impl = await new WASMImpl().init();
      } catch (err) {
        throw new Error("WASM instantiation failed: " + err.message);
      }
    } else {
      throw new Error("WebAssembly missing in global scope.");
    }
  }
  encode(input, url) {
    return this.impl.encode(input, url);
  }
  decode(input) {
    return this.impl.decode(input);
  }
};
var Base64Encoder = class {
  constructor(options = {}) {
    var _a;
    _provider.set(this, new Base64Provider());
    _urlFriendly.set(this, void 0);
    const { url, urlFriendly } = options;
    __classPrivateFieldSet(this, _urlFriendly, (_a = url !== null && url !== void 0 ? url : urlFriendly) !== null && _a !== void 0 ? _a : false);
  }
  get url() {
    return __classPrivateFieldGet(this, _urlFriendly);
  }
  get urlFriendly() {
    return this.url;
  }
  async optimize() {
    await __classPrivateFieldGet(this, _provider).init();
    return this;
  }
  encode(input) {
    return __classPrivateFieldGet(this, _provider).encode(input, this.url);
  }
};
_provider = new WeakMap(), _urlFriendly = new WeakMap();
var Base64Decoder = class {
  constructor() {
    _provider_1.set(this, new Base64Provider());
  }
  async optimize() {
    await __classPrivateFieldGet(this, _provider_1).init();
    return this;
  }
  decode(input) {
    return __classPrivateFieldGet(this, _provider_1).decode(input);
  }
};
_provider_1 = new WeakMap();

// node_modules/idb-key-to-string/index.js
var encodeKey = (key) => keyToKeyString(valueToKey(key));
var decodeKey = (key) => keyStringToKey(key);
var TYPED_REP = /^\w:/;
var ARRAY_DELIMITERS = /[\<\|\>]/;
var keyToKeyString = (key) => {
  if (typeof key === "string") {
    return key === "" || key.match(TYPED_REP) || key.match(ARRAY_DELIMITERS) ? `s:${encodeURIComponent(key)}` : key;
  }
  if (typeof key === "number") {
    return `n:${key}`;
  }
  if (key instanceof Date) {
    return `d:${key.toISOString()}`;
  }
  if (key instanceof Uint8Array) {
    return `b:${new Base64Encoder({ url: true }).encode(key)}`;
  }
  if (Array.isArray(key)) {
    return "<" + key.map(keyToKeyString).join("|") + ">";
  }
  throw Error("Key not allowed");
};
var keyStringToKey = (key) => {
  const re = new RegExp(ARRAY_DELIMITERS, "g");
  let match = re.exec(key);
  if (!match) {
    return partToKey(key);
  }
  const stack = [];
  let prev = 0;
  do {
    const char = match[0];
    const index = match.index;
    if (char === "<") {
      stack.unshift([]);
    }
    if (char === "|" || char === ">") {
      if (prev !== index) {
        stack[0].push(partToKey(key.substring(prev, index)));
      }
    }
    if (char === ">") {
      const res = stack.shift();
      if (stack.length)
        stack[0].push(res);
      else
        return res;
    }
    prev = index + 1;
  } while (match = re.exec(key));
  throw Error("Malformed key");
};
var partToKey = (part) => {
  const m = part.match(TYPED_REP);
  if (m) {
    const type = part.charAt(0);
    const data = part.substring(2);
    switch (type) {
      case "n":
        return Number(data);
      case "d":
        return new Date(data);
      case "b":
        return new Base64Decoder().decode(data).buffer;
      case "s":
        return decodeURIComponent(data);
    }
  }
  return part;
};
var valueToKey = (input, seen = new Set()) => {
  if (typeof input === "number") {
    if (isNaN(input)) {
      throw new Error();
    }
    return input;
  } else if (input instanceof Date) {
    const ms = input.valueOf();
    if (isNaN(ms)) {
      throw new Error();
    }
    return new Date(ms);
  } else if (typeof input === "string") {
    return input;
  } else if (input instanceof ArrayBuffer || typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView && ArrayBuffer.isView(input)) {
    if (input instanceof ArrayBuffer) {
      return new Uint8Array(input);
    }
    return new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
  } else if (Array.isArray(input)) {
    if (seen.has(input)) {
      throw new Error();
    }
    seen.add(input);
    const keys = [];
    for (let i = 0; i < input.length; i++) {
      const hop = input.hasOwnProperty(i);
      if (!hop) {
        throw new Error();
      }
      const entry = input[i];
      const key = valueToKey(entry, seen);
      keys.push(key);
    }
    return keys;
  } else {
    throw new Error();
  }
};
function throwForDisallowedKey(key) {
  if (!isAllowedAsAKey(key)) {
    throw Error("kv-storage: The given value is not allowed as a key: " + key);
  }
}
function isAllowedAsAKey(value) {
  if (typeof value === "number" || typeof value === "string") {
    return true;
  }
  if (typeof value === "object" && value) {
    if (Array.isArray(value)) {
      return true;
    }
    if (value instanceof Date) {
      return true;
    }
    if (ArrayBuffer.isView(value)) {
      return true;
    }
    if (value instanceof ArrayBuffer) {
      return true;
    }
  }
  return false;
}

// node_modules/@worker-tools/cloudflare-kv-storage/packer.js
var import_typeson = __toModule(require_typeson());
var import_structured_cloning_throwing = __toModule(require_structured_cloning_throwing());

// node_modules/msgpackr/unpack.js
"use strict";
var decoder;
try {
  decoder = new TextDecoder();
} catch (error) {
}
var src;
var srcEnd;
var position = 0;
var EMPTY_ARRAY = [];
var strings = EMPTY_ARRAY;
var stringPosition = 0;
var currentUnpackr = {};
var currentStructures;
var srcString;
var srcStringStart = 0;
var srcStringEnd = 0;
var referenceMap;
var currentExtensions = [];
var dataView;
var defaultOptions = {
  useRecords: false,
  mapsAsObjects: true
};
var C1Type = class {
};
var C1 = new C1Type();
C1.name = "MessagePack 0xC1";
var sequentialMode = false;
var Unpackr = class {
  constructor(options) {
    if (options) {
      if (options.useRecords === false && options.mapsAsObjects === void 0)
        options.mapsAsObjects = true;
      if (options.structures)
        options.structures.sharedLength = options.structures.length;
      else if (options.getStructures) {
        (options.structures = []).uninitialized = true;
        options.structures.sharedLength = 0;
      }
    }
    Object.assign(this, options);
  }
  unpack(source, end) {
    if (src) {
      return saveState(() => {
        clearSource();
        return this ? this.unpack(source, end) : Unpackr.prototype.unpack.call(defaultOptions, source, end);
      });
    }
    srcEnd = end > -1 ? end : source.length;
    position = 0;
    stringPosition = 0;
    srcStringEnd = 0;
    srcString = null;
    strings = EMPTY_ARRAY;
    src = source;
    dataView = source.dataView || (source.dataView = new DataView(source.buffer, source.byteOffset, source.byteLength));
    if (this) {
      currentUnpackr = this;
      if (this.structures) {                          ёёёёёё  
        currentStructures = this.structures;
        return checkedRead();
      } else if (!currentStructures || currentStructures.length > 0) {
        currentStructures = [];
      }
    } else {
      currentUnpackr = defaultOptions;
      if (!currentStructures || currentStructures.length > 0)
        currentStructures = [];
    }
    return checkedRead();
  }
  unpackMultiple(source, forEach) {
    let values, lastPosition = 0;
    try {
      sequentialMode = true;
      let size = source.length;
      let value = this ? this.unpack(source, size) : defaultUnpackr.unpack(source, size);
      if (forEach) {
        forEach(value);
        while (position < size) {
          lastPosition = position;
          if (forEach(checkedRead()) === false) {
            return;
          }
        }
      } else {
        values = [value];
        while (position < size) {
          lastPosition = position;
          values.push(checkedRead());
        }
        return values;
      }
    } catch (error) {
      error.lastPosition = lastPosition;
      error.values = values;
      throw error;
    } finally {
      sequentialMode = false;
      clearSource();
    }
  }
  _mergeStructures(loadedStructures, existingStructures) {
    loadedStructures = loadedStructures || [];
    for (let i = 0, l = loadedStructures.length; i < l; i++) {
      let structure = loadedStructures[i];
      if (structure) {
        structure.isShared = true;
        if (i >= 32)
          structure.highByte = i - 32 >> 5;
      }
    }
    loadedStructures.sharedLength = loadedStructures.length;
    for (let id in existingStructures || []) {
      if (id >= 0) {
        let structure = loadedStructures[id];
        let existing = existingStructures[id];
        if (existing) {
          if (structure)
            (loadedStructures.restoreStructures || (loadedStructures.restoreStructures = []))[id] = structure;
          loadedStructures[id] = existing;
        }
      }
    }
    return this.structures = loadedStructures;
  }
  decode(source, end) {
    return this.unpack(source, end);
  }
};
function checkedRead() {
  try {
    if (!currentUnpackr.trusted && !sequentialMode) {
      let sharedLength = currentStructures.sharedLength || 0;
      if (sharedLength < currentStructures.length)
        currentStructures.length = sharedLength;
    }
    let result = read();
    if (position == srcEnd) {
      if (currentStructures.restoreStructures)
        restoreStructures();
      currentStructures = null;
      src = null;
      if (referenceMap)
        referenceMap = null;
    } else if (position > srcEnd) {
      let error = new Error("Unexpected end of MessagePack data");
      error.incomplete = true;
      throw error;
    } else if (!sequentialMode) {
      throw new Error("Data read, but end of buffer not reached");
    }
    return result;
  } catch (error) {
    if (currentStructures.restoreStructures)
      restoreStructures();
    clearSource();
    if (error instanceof RangeError || error.message.startsWith("Unexpected end of buffer")) {
      error.incomplete = true;
    }
    throw error;
  }
}
function restoreStructures() {
  for (let id in currentStructures.restoreStructures) {
    currentStructures[id] = currentStructures.restoreStructures[id];
  }
  currentStructures.restoreStructures = null;
}
function read() {
  let token = src[position++];
  if (token < 160) {
    if (token < 128) {
      if (token < 64)
        return token;
      else {
        let structure = currentStructures[token & 63] || currentUnpackr.getStructures && loadStructures()[token & 63];
        if (structure) {
          if (!structure.read) {
            structure.read = createStructureReader(structure, token & 63);
          }
          return structure.read();
        } else
          return token;
      }
    } else if (token < 144) {
      token -= 128;
      if (currentUnpackr.mapsAsObjects) {
        let object = {};
        for (let i = 0; i < token; i++) {
          object[readKey()] = read();
        }
        return object;
      } else {
        let map = new Map();
        for (let i = 0; i < token; i++) {
          map.set(read(), read());
        }
        return map;
      }
    } else {
      token -= 144;
      let array = new Array(token);
      for (let i = 0; i < token; i++) {
        array[i] = read();
      }
      return array;
    }
  } else if (token < 192) {
    let length = token - 160;
    if (srcStringEnd >= position) {
      return srcString.slice(position - srcStringStart, (position += length) - srcStringStart);
    }
    if (srcStringEnd == 0 && srcEnd < 140) {
      let string = length < 16 ? shortStringInJS(length) : longStringInJS(length);
      if (string != null)
        return string;
    }
    return readFixedString(length);
  } else {
    let value;
    switch (token) {
      case 192:
        return null;
      case 193:
        return C1;
      case 194:
        return false;
      case 195:
        return true;
      case 196:
        return readBin(src[position++]);
      case 197:
        value = dataView.getUint16(position);
        position += 2;
        return readBin(value);
      case 198:
        value = dataView.getUint32(position);
        position += 4;
        return readBin(value);
      case 199:
        return readExt(src[position++]);
      case 200:
        value = dataView.getUint16(position);
        position += 2;
        return readExt(value);
      case 201:
        value = dataView.getUint32(position);
        position += 4;
        return readExt(value);
      case 202:
        value = dataView.getFloat32(position);
        if (currentUnpackr.useFloat32 > 2) {
          let multiplier = mult10[(src[position] & 127) << 1 | src[position + 1] >> 7];
          position += 4;
          return (multiplier * value + (value > 0 ? 0.5 : -0.5) >> 0) / multiplier;
        }
        position += 4;
        return value;
      case 203:
        value = dataView.getFloat64(position);
        position += 8;
        return value;
      case 204:
        return src[position++];
      case 205:
        value = dataView.getUint16(position);
        position += 2;
        return value;
      case 206:
        value = dataView.getUint32(position);
        position += 4;
        return value;
      case 207:
        if (currentUnpackr.uint64AsNumber)
          return src[position++] * 72057594037927940 + src[position++] * 281474976710656 + src[position++] * 1099511627776 + src[position++] * 4294967296 + src[position++] * 16777216 + (src[position++] << 16) + (src[position++] << 8) + src[position++];
        value = dataView.getBigUint64(position);
        position += 8;
        return value;
      case 208:
        return dataView.getInt8(position++);
      case 209:
        value = dataView.getInt16(position);
        position += 2;
        return value;
      case 210:
        value = dataView.getInt32(position);
        position += 4;
        return value;
      case 211:
        value = dataView.getBigInt64(position);
        position += 8;
        return value;
      case 212:
        value = src[position++];
        if (value == 114) {
          return recordDefinition(src[position++] & 63);
        } else {
          let extension = currentExtensions[value];
          if (extension) {
            if (extension.read) {
              position++;
              return extension.read(read());
            } else if (extension.noBuffer) {
              position++;
              return extension();
            } else
              return extension(src.subarray(position, ++position));
          } else
            throw new Error("Unknown extension " + value);
        }
      case 213:
        value = src[position];
        if (value == 114) {
          position++;
          return recordDefinition(src[position++] & 63, src[position++]);
        } else
          return readExt(2);
      case 214:
        return readExt(4);
      case 215:
        return readExt(8);
      case 216:
        return readExt(16);
      case 217:
        value = src[position++];
        if (srcStringEnd >= position) {
          return srcString.slice(position - srcStringStart, (position += value) - srcStringStart);
        }
        return readString8(value);
      case 218:
        value = dataView.getUint16(position);
        position += 2;
        if (srcStringEnd >= position) {
          return srcString.slice(position - srcStringStart, (position += value) - srcStringStart);
        }
        return readString16(value);
      case 219:
        value = dataView.getUint32(position);
        position += 4;
        if (srcStringEnd >= position) {
          return srcString.slice(position - srcStringStart, (position += value) - srcStringStart);
        }
        return readString32(value);
      case 220:
        value = dataView.getUint16(position);
        position += 2;
        return readArray(value);
      case 221:
        value = dataView.getUint32(position);
        position += 4;
        return readArray(value);
      case 222:
        value = dataView.getUint16(position);
        position += 2;
        return readMap(value);
      case 223:
        value = dataView.getUint32(position);
        position += 4;
        return readMap(value);
      default:
        if (token >= 224)
          return token - 256;
        if (token === void 0) {
          let error = new Error("Unexpected end of MessagePack data");
          error.incomplete = true;
          throw error;
        }
        throw new Error("Unknown MessagePack token " + token);
    }
  }
}
var validName = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
function createStructureReader(structure, firstId) {
  function readObject() {
    if (readObject.count++ > 2) {
      let readObject2 = structure.read = new Function("r", "return function(){return {" + structure.map((key) => validName.test(key) ? key + ":r()" : "[" + JSON.stringify(key) + "]:r()").join(",") + "}}")(read);
      if (structure.highByte === 0)
        structure.read = createSecondByteReader(firstId, structure.read);
      return readObject2();
    }
    let object = {};
    for (let i = 0, l = structure.length; i < l; i++) {
      let key = structure[i];
      object[key] = read();
    }
    return object;
  }
  readObject.count = 0;
  if (structure.highByte === 0) {
    return createSecondByteReader(firstId, readObject);
  }
  return readObject;
}
var createSecondByteReader = (firstId, read0) => {
  return function() {
    let highByte = src[position++];
    if (highByte === 0)
      return read0();
    let id = firstId < 32 ? -(firstId + (highByte << 5)) : firstId + (highByte << 5);
    let structure = currentStructures[id] || loadStructures()[id];
    if (!structure) {
      throw new Error("Record id is not defined for " + id);
    }
    if (!structure.read)
      structure.read = createStructureReader(structure, firstId);
    return structure.read();
  };
};
function loadStructures() {
  let loadedStructures = saveState(() => {
    src = null;
    return currentUnpackr.getStructures();
  });
  return currentStructures = currentUnpackr._mergeStructures(loadedStructures, currentStructures);
}
var readFixedString = readStringJS;
var readString8 = readStringJS;
var readString16 = readStringJS;
var readString32 = readStringJS;
function readStringJS(length) {
  let result;
  if (length < 16) {
    if (result = shortStringInJS(length))
      return result;
  }
  if (length > 64 && decoder)
    return decoder.decode(src.subarray(position, position += length));
  const end = position + length;
  const units = [];
  result = "";
  while (position < end) {
    const byte1 = src[position++];
    if ((byte1 & 128) === 0) {
      units.push(byte1);
    } else if ((byte1 & 224) === 192) {
      const byte2 = src[position++] & 63;
      units.push((byte1 & 31) << 6 | byte2);
    } else if ((byte1 & 240) === 224) {
      const byte2 = src[position++] & 63;
      const byte3 = src[position++] & 63;
      units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
    } else if ((byte1 & 248) === 240) {
      const byte2 = src[position++] & 63;
      const byte3 = src[position++] & 63;
      const byte4 = src[position++] & 63;
      let unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
      if (unit > 65535) {
        unit -= 65536;
        units.push(unit >>> 10 & 1023 | 55296);
        unit = 56320 | unit & 1023;
      }
      units.push(unit);
    } else {
      units.push(byte1);
    }
    if (units.length >= 4096) {
      result += fromCharCode.apply(String, units);
      units.length = 0;
    }
  }
  if (units.length > 0) {
    result += fromCharCode.apply(String, units);
  }
  return result;
}
function readArray(length) {
  let array = new Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = read();
  }
  return array;
}
function readMap(length) {
  if (currentUnpackr.mapsAsObjects) {
    let object = {};
    for (let i = 0; i < length; i++) {
      object[readKey()] = read();
    }
    return object;
  } else {
    let map = new Map();
    for (let i = 0; i < length; i++) {
      map.set(read(), read());
    }
    return map;
  }
}
var fromCharCode = String.fromCharCode;
function longStringInJS(length) {
  let start = position;
  let bytes = new Array(length);
  for (let i = 0; i < length; i++) {
    const byte = src[position++];
    if ((byte & 128) > 0) {
      position = start;
      return;
    }
    bytes[i] = byte;
  }
  return fromCharCode.apply(String, bytes);
}
function shortStringInJS(length) {
  if (length < 4) {
    if (length < 2) {
      if (length === 0)
        return "";
      else {
        let a = src[position++];
        if ((a & 128) > 1) {
          position -= 1;
          return;
        }
        return fromCharCode(a);
      }
    } else {
      let a = src[position++];
      let b = src[position++];
      if ((a & 128) > 0 || (b & 128) > 0) {
        position -= 2;
        return;
      }
      if (length < 3)
        return fromCharCode(a, b);
      let c = src[position++];
      if ((c & 128) > 0) {
        position -= 3;
        return;
      }
      return fromCharCode(a, b, c);
    }
  } else {
    let a = src[position++];
    let b = src[position++];
    let c = src[position++];
    let d = src[position++];
    if ((a & 128) > 0 || (b & 128) > 0 || (c & 128) > 0 || (d & 128) > 0) {
      position -= 4;
      return;
    }
    if (length < 6) {
      if (length === 4)
        return fromCharCode(a, b, c, d);
      else {
        let e = src[position++];
        if ((e & 128) > 0) {
          position -= 5;
          return;
        }
        return fromCharCode(a, b, c, d, e);
      }
    } else if (length < 8) {
      let e = src[position++];
      let f = src[position++];
      if ((e & 128) > 0 || (f & 128) > 0) {
        position -= 6;
        return;
      }
      if (length < 7)
        return fromCharCode(a, b, c, d, e, f);
      let g = src[position++];
      if ((g & 128) > 0) {
        position -= 7;
        return;
      }
      return fromCharCode(a, b, c, d, e, f, g);
    } else {
      let e = src[position++];
      let f = src[position++];
      let g = src[position++];
      let h = src[position++];
      if ((e & 128) > 0 || (f & 128) > 0 || (g & 128) > 0 || (h & 128) > 0) {
        position -= 8;
        return;
      }
      if (length < 10) {
        if (length === 8)
          return fromCharCode(a, b, c, d, e, f, g, h);
        else {
          let i = src[position++];
          if ((i & 128) > 0) {
            position -= 9;
            return;
          }
          return fromCharCode(a, b, c, d, e, f, g, h, i);
        }
      } else if (length < 12) {
        let i = src[position++];
        let j = src[position++];
        if ((i & 128) > 0 || (j & 128) > 0) {
          position -= 10;
          return;
        }
        if (length < 11)
          return fromCharCode(a, b, c, d, e, f, g, h, i, j);
        let k = src[position++];
        if ((k & 128) > 0) {
          position -= 11;
          return;
        }
        return fromCharCode(a, b, c, d, e, f, g, h, i, j, k);
      } else {
        let i = src[position++];
        let j = src[position++];
        let k = src[position++];
        let l = src[position++];
        if ((i & 128) > 0 || (j & 128) > 0 || (k & 128) > 0 || (l & 128) > 0) {
          position -= 12;
          return;
        }
        if (length < 14) {
          if (length === 12)
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l);
          else {
            let m = src[position++];
            if ((m & 128) > 0) {
              position -= 13;
              return;
            }
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m);
          }
        } else {
          let m = src[position++];
          let n = src[position++];
          if ((m & 128) > 0 || (n & 128) > 0) {
            position -= 14;
            return;
          }
          if (length < 15)
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n);
          let o = src[position++];
          if ((o & 128) > 0) {
            position -= 15;
            return;
          }
          return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
        }
      }
    }
  }
}
function readBin(length) {
  return currentUnpackr.copyBuffers ? Uint8Array.prototype.slice.call(src, position, position += length) : src.subarray(position, position += length);
}
function readExt(length) {
  let type = src[position++];
  if (currentExtensions[type]) {
    return currentExtensions[type](src.subarray(position, position += length));
  } else
    throw new Error("Unknown extension type " + type);
}
var keyCache = new Array(4096);
function readKey() {
  let length = src[position++];
  if (length >= 160 && length < 192) {
    length = length - 160;
    if (srcStringEnd >= position)
      return srcString.slice(position - srcStringStart, (position += length) - srcStringStart);
    else if (!(srcStringEnd == 0 && srcEnd < 180))
      return readFixedString(length);
  } else {
    position--;
    return read();
  }
  let key = (length << 5 ^ (length > 1 ? dataView.getUint16(position) : length > 0 ? src[position] : 0)) & 4095;
  let entry = keyCache[key];
  let checkPosition = position;
  let end = position + length - 3;
  let chunk;
  let i = 0;
  if (entry && entry.bytes == length) {
    while (checkPosition < end) {
      chunk = dataView.getUint32(checkPosition);
      if (chunk != entry[i++]) {
        checkPosition = 1879048192;
        break;
      }
      checkPosition += 4;
    }
    end += 3;
    while (checkPosition < end) {
      chunk = src[checkPosition++];
      if (chunk != entry[i++]) {
        checkPosition = 1879048192;
        break;
      }
    }
    if (checkPosition === end) {
      position = checkPosition;
      return entry.string;
    }
    end -= 3;
    checkPosition = position;
  }
  entry = [];
  keyCache[key] = entry;
  entry.bytes = length;
  while (checkPosition < end) {
    chunk = dataView.getUint32(checkPosition);
    entry.push(chunk);
    checkPosition += 4;
  }
  end += 3;
  while (checkPosition < end) {
    chunk = src[checkPosition++];
    entry.push(chunk);
  }
  let string = length < 16 ? shortStringInJS(length) : longStringInJS(length);
  if (string != null)
    return entry.string = string;
  return entry.string = readFixedString(length);
}
var recordDefinition = (id, highByte) => {
  var structure = read();
  let firstByte = id;
  if (highByte !== void 0) {
    id = id < 32 ? -((highByte << 5) + id) : (highByte << 5) + id;
    structure.highByte = highByte;
  }
  let existingStructure = currentStructures[id];
  if (existingStructure && existingStructure.isShared) {
    (currentStructures.restoreStructures || (currentStructures.restoreStructures = []))[id] = existingStructure;
  }
  currentStructures[id] = structure;
  structure.read = createStructureReader(structure, firstByte);
  return structure.read();
};
var glbl = typeof self == "object" ? self : global;
currentExtensions[0] = () => {
};
currentExtensions[0].noBuffer = true;
currentExtensions[101] = () => {
  let data = read();
  return (glbl[data[0]] || Error)(data[1]);
};
currentExtensions[105] = (data) => {
  let id = dataView.getUint32(position - 4);
  if (!referenceMap)
    referenceMap = new Map();
  let token = src[position];
  let target2;
  if (token >= 144 && token < 160 || token == 220 || token == 221)
    target2 = [];
  else
    target2 = {};
  let refEntry = { target: target2 };
  referenceMap.set(id, refEntry);
  let targetProperties = read();
  if (refEntry.used)
    return Object.assign(target2, targetProperties);
  refEntry.target = targetProperties;
  return targetProperties;
};
currentExtensions[112] = (data) => {
  let id = dataView.getUint32(position - 4);
  let refEntry = referenceMap.get(id);
  refEntry.used = true;
  return refEntry.target;
};
currentExtensions[115] = () => new Set(read());
var typedArrays = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((type) => type + "Array");
currentExtensions[116] = (data) => {
  let typeCode = data[0];
  let typedArrayName = typedArrays[typeCode];
  if (!typedArrayName)
    throw new Error("Could not find typed array for code " + typeCode);
  return new glbl[typedArrayName](Uint8Array.prototype.slice.call(data, 1).buffer);
};
currentExtensions[120] = () => {
  let data = read();
  return new RegExp(data[0], data[1]);
};
currentExtensions[255] = (data) => {
  if (data.length == 4)
    return new Date((data[0] * 16777216 + (data[1] << 16) + (data[2] << 8) + data[3]) * 1e3);
  else if (data.length == 8)
    return new Date(((data[0] << 22) + (data[1] << 14) + (data[2] << 6) + (data[3] >> 2)) / 1e6 + ((data[3] & 3) * 4294967296 + data[4] * 16777216 + (data[5] << 16) + (data[6] << 8) + data[7]) * 1e3);
  else if (data.length == 12)
    return new Date(((data[0] << 24) + (data[1] << 16) + (data[2] << 8) + data[3]) / 1e6 + ((data[4] & 128 ? -281474976710656 : 0) + data[6] * 1099511627776 + data[7] * 4294967296 + data[8] * 16777216 + (data[9] << 16) + (data[10] << 8) + data[11]) * 1e3);
  else
    throw new Error("Invalid timestamp length");
};
function saveState(callback) {
  let savedSrcEnd = srcEnd;
  let savedPosition = position;
  let savedStringPosition = stringPosition;
  let savedSrcStringStart = srcStringStart;
  let savedSrcStringEnd = srcStringEnd;
  let savedSrcString = srcString;
  let savedStrings = strings;
  let savedReferenceMap = referenceMap;
  let savedSrc = new Uint8Array(src.slice(0, srcEnd));
  let savedStructures = currentStructures;
  let savedStructuresContents = currentStructures.slice(0, currentStructures.length);
  let savedPackr = currentUnpackr;
  let savedSequentialMode = sequentialMode;
  let value = callback();
  srcEnd = savedSrcEnd;
  position = savedPosition;
  stringPosition = savedStringPosition;
  srcStringStart = savedSrcStringStart;
  srcStringEnd = savedSrcStringEnd;
  srcString = savedSrcString;
  strings = savedStrings;
  referenceMap = savedReferenceMap;
  src = savedSrc;
  sequentialMode = savedSequentialMode;
  currentStructures = savedStructures;
  currentStructures.splice(0, currentStructures.length, ...savedStructuresContents);
  currentUnpackr = savedPackr;
  dataView = new DataView(src.buffer, src.byteOffset, src.byteLength);
  return value;
}
function clearSource() {
  src = null;
  referenceMap = null;
  currentStructures = null;
}
var mult10 = new Array(147);
for (let i = 0; i < 256; i++) {
  mult10[i] = +("1e" + Math.floor(45.15 - i * 0.30103));
}
var defaultUnpackr = new Unpackr({ useRecords: false });
var unpack = defaultUnpackr.unpack;
var unpackMultiple = defaultUnpackr.unpackMultiple;
var decode2 = defaultUnpackr.unpack;

// node_modules/msgpackr/pack.js
"use strict";
var textEncoder;
try {
  textEncoder = new TextEncoder();
} catch (error) {
}
var extensions;
var extensionClasses;
var hasNodeBuffer = typeof Buffer !== "undefined";
var ByteArrayAllocate = hasNodeBuffer ? Buffer.allocUnsafeSlow : Uint8Array;
var ByteArray = hasNodeBuffer ? Buffer : Uint8Array;
var MAX_BUFFER_SIZE = hasNodeBuffer ? 4294967296 : 2144337920;
var target;
var targetView;
var position2 = 0;
var safeEnd;
var RECORD_SYMBOL = Symbol("record-id");
var Packr = class extends Unpackr {
  constructor(options) {
    super(options);
    this.offset = 0;
    let typeBuffer;
    let start;
    let sharedStructures;
    let hasSharedUpdate;
    let structures;
    let referenceMap2;
    let lastSharedStructuresLength = 0;
    let encodeUtf8 = ByteArray.prototype.utf8Write ? function(string, position3, maxBytes) {
      return target.utf8Write(string, position3, maxBytes);
    } : textEncoder && textEncoder.encodeInto ? function(string, position3) {
      return textEncoder.encodeInto(string, target.subarray(position3)).written;
    } : false;
    let packr = this;
    if (!options)
      options = {};
    let isSequential = options && options.sequential;
    let hasSharedStructures = options.structures || options.saveStructures;
    let maxSharedStructures = options.maxSharedStructures ? options.maxSharedStructures : hasSharedStructures ? 32 : 0;
    if (maxSharedStructures > 8160)
      throw new Error("Maximum maxSharedStructure is 8160");
    let maxOwnStructures = options.maxOwnStructures ? options.maxOwnStructures : hasSharedStructures ? 32 : 64;
    if (isSequential && !options.saveStructures)
      this.structures = [];
    let useTwoByteRecords = maxSharedStructures > 32 || maxOwnStructures + maxSharedStructures > 64;
    let sharedLimitId = maxSharedStructures + 64;
    let maxStructureId = maxSharedStructures + maxOwnStructures + 64;
    if (maxStructureId > 8256) {
      throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
    }
    let recordIdsToRemove = [];
    let transitionsCount = 0;
    let serializationsSinceTransitionRebuild = 0;
    this.pack = this.encode = function(value) {
      if (!target) {
        target = new ByteArrayAllocate(8192);
        targetView = new DataView(target.buffer, 0, 8192);
        position2 = 0;
      }
      safeEnd = target.length - 10;
      if (safeEnd - position2 < 2048) {
        target = new ByteArrayAllocate(target.length);
        targetView = new DataView(target.buffer, 0, target.length);
        safeEnd = target.length - 10;
        position2 = 0;
      } else
        position2 = position2 + 7 & 2147483640;
      start = position2;
      referenceMap2 = packr.structuredClone ? new Map() : null;
      sharedStructures = packr.structures;
      if (sharedStructures) {
        if (sharedStructures.uninitialized)
          sharedStructures = packr._mergeStructures(packr.getStructures());
        let sharedLength = sharedStructures.sharedLength || 0;
        if (sharedLength > maxSharedStructures) {
          throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + sharedStructures.sharedLength);
        }
        if (!sharedStructures.transitions) {
          sharedStructures.transitions = Object.create(null);
          for (let i = 0; i < sharedLength; i++) {
            let keys = sharedStructures[i];
            if (!keys)
              continue;
            let nextTransition, transition = sharedStructures.transitions;
            for (let j = 0, l = keys.length; j < l; j++) {
              let key = keys[j];
              nextTransition = transition[key];
              if (!nextTransition) {
                nextTransition = transition[key] = Object.create(null);
              }
              transition = nextTransition;
            }
            transition[RECORD_SYMBOL] = i + 64;
          }
          lastSharedStructuresLength = sharedLength;
        }
        if (!isSequential) {
          sharedStructures.nextId = sharedLength + 64;
        }
      }
      if (hasSharedUpdate)
        hasSharedUpdate = false;
      structures = sharedStructures || [];
      try {
        pack2(value);
        packr.offset = position2;
        if (referenceMap2 && referenceMap2.idsToInsert) {
          position2 += referenceMap2.idsToInsert.length * 6;
          if (position2 > safeEnd)
            makeRoom(position2);
          packr.offset = position2;
          let serialized = insertIds(target.subarray(start, position2), referenceMap2.idsToInsert);
          referenceMap2 = null;
          return serialized;
        }
        return target.subarray(start, position2);
      } finally {
        if (sharedStructures) {
          if (serializationsSinceTransitionRebuild < 10)
            serializationsSinceTransitionRebuild++;
          if (transitionsCount > 1e4) {
            sharedStructures.transitions = null;
            serializationsSinceTransitionRebuild = 0;
            transitionsCount = 0;
            if (recordIdsToRemove.length > 0)
              recordIdsToRemove = [];
          } else if (recordIdsToRemove.length > 0 && !isSequential) {
            for (let i = 0, l = recordIdsToRemove.length; i < l; i++) {
              recordIdsToRemove[i][RECORD_SYMBOL] = 0;
            }
            recordIdsToRemove = [];
          }
          if (hasSharedUpdate && packr.saveStructures) {
            let sharedLength = sharedStructures.sharedLength || maxSharedStructures;
            if (sharedStructures.length > sharedLength) {
              sharedStructures = sharedStructures.slice(0, sharedLength);
            }
            if (packr.saveStructures(sharedStructures, lastSharedStructuresLength) === false) {
              packr._mergeStructures(packr.getStructures());
              return packr.pack(value);
            }
            lastSharedStructuresLength = sharedLength;
          }
        }
      }
    };
    const pack2 = (value) => {
      if (position2 > safeEnd)
        target = makeRoom(position2);
      var type = typeof value;
      var length;
      if (type === "string") {
        let strLength = value.length;
        let headerSize;
        if (strLength < 32) {
          headerSize = 1;
        } else if (strLength < 256) {
          headerSize = 2;
        } else if (strLength < 65536) {
          headerSize = 3;
        } else {
          headerSize = 5;
        }
        let maxBytes = strLength * 3;
        if (position2 + maxBytes > safeEnd)
          target = makeRoom(position2 + maxBytes);
        if (strLength < 64 || !encodeUtf8) {
          let i, c1, c2, strPosition = position2 + headerSize;
          for (i = 0; i < strLength; i++) {
            c1 = value.charCodeAt(i);
            if (c1 < 128) {
              target[strPosition++] = c1;
            } else if (c1 < 2048) {
              target[strPosition++] = c1 >> 6 | 192;
              target[strPosition++] = c1 & 63 | 128;
            } else if ((c1 & 64512) === 55296 && ((c2 = value.charCodeAt(i + 1)) & 64512) === 56320) {
              c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
              i++;
              target[strPosition++] = c1 >> 18 | 240;
              target[strPosition++] = c1 >> 12 & 63 | 128;
              target[strPosition++] = c1 >> 6 & 63 | 128;
              target[strPosition++] = c1 & 63 | 128;
            } else {
              target[strPosition++] = c1 >> 12 | 224;
              target[strPosition++] = c1 >> 6 & 63 | 128;
              target[strPosition++] = c1 & 63 | 128;
            }
          }
          length = strPosition - position2 - headerSize;
        } else {
          length = encodeUtf8(value, position2 + headerSize, maxBytes);
        }
        if (length < 32) {
          target[position2++] = 160 | length;
        } else if (length < 256) {
          if (headerSize < 2) {
            target.copyWithin(position2 + 2, position2 + 1, position2 + 1 + length);
          }
          target[position2++] = 217;
          target[position2++] = length;
        } else if (length < 65536) {
          if (headerSize < 3) {
            target.copyWithin(position2 + 3, position2 + 2, position2 + 2 + length);
          }
          target[position2++] = 218;
          target[position2++] = length >> 8;
          target[position2++] = length & 255;
        } else {
          if (headerSize < 5) {
            target.copyWithin(position2 + 5, position2 + 3, position2 + 3 + length);
          }
          target[position2++] = 219;
          targetView.setUint32(position2, length);
          position2 += 4;
        }
        position2 += length;
      } else if (type === "number") {
        if (value >>> 0 === value) {
          if (value < 64) {
            target[position2++] = value;
          } else if (value < 256) {
            target[position2++] = 204;
            target[position2++] = value;
          } else if (value < 65536) {
            target[position2++] = 205;
            target[position2++] = value >> 8;
            target[position2++] = value & 255;
          } else {
            target[position2++] = 206;
            targetView.setUint32(position2, value);
            position2 += 4;
          }
        } else if (value >> 0 === value) {
          if (value >= -32) {
            target[position2++] = 256 + value;
          } else if (value >= -128) {
            target[position2++] = 208;
            target[position2++] = value + 256;
          } else if (value >= -32768) {
            target[position2++] = 209;
            targetView.setInt16(position2, value);
            position2 += 2;
          } else {
            target[position2++] = 210;
            targetView.setInt32(position2, value);
            position2 += 4;
          }
        } else {
          let useFloat32;
          if ((useFloat32 = this.useFloat32) > 0 && value < 4294967296 && value >= -2147483648) {
            target[position2++] = 202;
            targetView.setFloat32(position2, value);
            let xShifted;
            if (useFloat32 < 4 || (xShifted = value * mult10[(target[position2] & 127) << 1 | target[position2 + 1] >> 7]) >> 0 === xShifted) {
              position2 += 4;
              return;
            } else
              position2--;
          }
          target[position2++] = 203;
          targetView.setFloat64(position2, value);
          position2 += 8;
        }
      } else if (type === "object") {
        if (!value)
          target[position2++] = 192;
        else {
          if (referenceMap2) {
            let referee = referenceMap2.get(value);
            if (referee) {
              if (!referee.id) {
                let idsToInsert = referenceMap2.idsToInsert || (referenceMap2.idsToInsert = []);
                referee.id = idsToInsert.push(referee);
              }
              target[position2++] = 214;
              target[position2++] = 112;
              targetView.setUint32(position2, referee.id);
              position2 += 4;
              return;
            } else
              referenceMap2.set(value, { offset: position2 - start });
          }
          let constructor = value.constructor;
          if (constructor === Object) {
            writeObject(value, true);
          } else if (constructor === Array) {
            length = value.length;
            if (length < 16) {
              target[position2++] = 144 | length;
            } else if (length < 65536) {
              target[position2++] = 220;
              target[position2++] = length >> 8;
              target[position2++] = length & 255;
            } else {
              target[position2++] = 221;
              targetView.setUint32(position2, length);
              position2 += 4;
            }
            for (let i = 0; i < length; i++) {
              pack2(value[i]);
            }
          } else if (constructor === Map) {
            length = value.size;
            if (length < 16) {
              target[position2++] = 128 | length;
            } else if (length < 65536) {
              target[position2++] = 222;
              target[position2++] = length >> 8;
              target[position2++] = length & 255;
            } else {
              target[position2++] = 223;
              targetView.setUint32(position2, length);
              position2 += 4;
            }
            for (let [key, entryValue] of value) {
              pack2(key);
              pack2(entryValue);
            }
          } else {
            for (let i = 0, l = extensions.length; i < l; i++) {
              let extensionClass = extensionClasses[i];
              if (value instanceof extensionClass) {
                let extension = extensions[i];
                if (extension.write) {
                  if (extension.type) {
                    target[position2++] = 212;
                    target[position2++] = extension.type;
                    target[position2++] = 0;
                  }
                  pack2(extension.write.call(this, value));
                  return;
                }
                let currentTarget = target;
                let currentTargetView = targetView;
                let currentPosition = position2;
                target = null;
                let result;
                try {
                  result = extension.pack.call(this, value, (size) => {
                    target = currentTarget;
                    currentTarget = null;
                    position2 += size;
                    if (position2 > safeEnd)
                      makeRoom(position2);
                    return {
                      target,
                      targetView,
                      position: position2 - size
                    };
                  }, pack2);
                } finally {
                  if (currentTarget) {
                    target = currentTarget;
                    targetView = currentTargetView;
                    position2 = currentPosition;
                    safeEnd = target.length - 10;
                  }
                }
                if (result) {
                  if (result.length + position2 > safeEnd)
                    makeRoom(result.length + position2);
                  position2 = writeExtensionData(result, target, position2, extension.type);
                }
                return;
              }
            }
            writeObject(value, !value.hasOwnProperty);
          }
        }
      } else if (type === "boolean") {
        target[position2++] = value ? 195 : 194;
      } else if (type === "bigint") {
        if (value < BigInt(1) << BigInt(63) && value >= -(BigInt(1) << BigInt(63))) {
          target[position2++] = 211;
          targetView.setBigInt64(position2, value);
        } else if (value < BigInt(1) << BigInt(64) && value > 0) {
          target[position2++] = 207;
          targetView.setBigUint64(position2, value);
        } else {
          if (this.largeBigIntToFloat) {
            target[position2++] = 203;
            targetView.setFloat64(position2, Number(value));
          } else {
            throw new RangeError(value + " was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");
          }
        }
        position2 += 8;
      } else if (type === "undefined") {
        if (this.encodeUndefinedAsNil)
          target[position2++] = 192;
        else {
          target[position2++] = 212;
          target[position2++] = 0;
          target[position2++] = 0;
        }
      } else if (type === "function") {
        pack2(this.writeFunction && this.writeFunction());
      } else {
        throw new Error("Unknown type: " + type);
      }
    };
    const writeObject = this.useRecords === false ? this.variableMapSize ? (object) => {
      let keys = Object.keys(object);
      let length = keys.length;
      if (length < 16) {
        target[position2++] = 128 | length;
      } else if (length < 65536) {
        target[position2++] = 222;
        target[position2++] = length >> 8;
        target[position2++] = length & 255;
      } else {
        target[position2++] = 223;
        targetView.setUint32(position2, length);
        position2 += 4;
      }
      let key;
      for (let i = 0; i < length; i++) {
        pack2(key = keys[i]);
        pack2(object[key]);
      }
    } : (object, safePrototype) => {
      target[position2++] = 222;
      let objectOffset = position2 - start;
      position2 += 2;
      let size = 0;
      for (let key in object) {
        if (safePrototype || object.hasOwnProperty(key)) {
          pack2(key);
          pack2(object[key]);
          size++;
        }
      }
      target[objectOffset++ + start] = size >> 8;
      target[objectOffset + start] = size & 255;
    } : (object) => {
      let keys = Object.keys(object);
      let nextTransition, transition = structures.transitions || (structures.transitions = Object.create(null));
      let newTransitions = 0;
      for (let i = 0, l = keys.length; i < l; i++) {
        let key = keys[i];
        nextTransition = transition[key];
        if (!nextTransition) {
          nextTransition = transition[key] = Object.create(null);
          newTransitions++;
        }
        transition = nextTransition;
      }
      let recordId = transition[RECORD_SYMBOL];
      if (recordId) {
        if (recordId >= 96 && useTwoByteRecords) {
          target[position2++] = ((recordId -= 96) & 31) + 96;
          target[position2++] = recordId >> 5;
        } else
          target[position2++] = recordId;
      } else {
        recordId = structures.nextId;
        if (!recordId)
          recordId = 64;
        if (recordId < sharedLimitId && this.shouldShareStructure && !this.shouldShareStructure(keys)) {
          recordId = structures.nextOwnId;
          if (!(recordId < maxStructureId))
            recordId = sharedLimitId;
          structures.nextOwnId = recordId + 1;
        } else {
          if (recordId >= maxStructureId)
            recordId = sharedLimitId;
          structures.nextId = recordId + 1;
        }
        let highByte = keys.highByte = recordId >= 96 && useTwoByteRecords ? recordId - 96 >> 5 : -1;
        transition[RECORD_SYMBOL] = recordId;
        structures[recordId - 64] = keys;
        if (recordId < sharedLimitId) {
          keys.isShared = true;
          structures.sharedLength = recordId - 63;
          hasSharedUpdate = true;
          if (highByte >= 0) {
            target[position2++] = (recordId & 31) + 96;
            target[position2++] = highByte;
          } else {
            target[position2++] = recordId;
          }
        } else {
          if (highByte >= 0) {
            target[position2++] = 213;
            target[position2++] = 114;
            target[position2++] = (recordId & 31) + 96;
            target[position2++] = highByte;
          } else {
            target[position2++] = 212;
            target[position2++] = 114;
            target[position2++] = recordId;
          }
          if (newTransitions)
            transitionsCount += serializationsSinceTransitionRebuild * newTransitions;
          if (recordIdsToRemove.length >= maxOwnStructures)
            recordIdsToRemove.shift()[RECORD_SYMBOL] = 0;
          recordIdsToRemove.push(transition);
          pack2(keys);
        }
      }
      for (let i = 0, l = keys.length; i < l; i++)
        pack2(object[keys[i]]);
    };
    const makeRoom = (end) => {
      let newSize;
      if (end > 16777216) {
        if (end - start > MAX_BUFFER_SIZE)
          throw new Error("Packed buffer would be larger than maximum buffer size");
        newSize = Math.min(MAX_BUFFER_SIZE, Math.round(Math.max((end - start) * (end > 67108864 ? 1.25 : 2), 16777216) / 4096) * 4096);
      } else
        newSize = (Math.max(end - start << 2, target.length - 1) >> 12) + 1 << 12;
      let newBuffer = new ByteArrayAllocate(newSize);
      targetView = new DataView(newBuffer.buffer, 0, newSize);
      if (target.copy)
        target.copy(newBuffer, 0, start, end);
      else
        newBuffer.set(target.slice(start, end));
      position2 -= start;
      start = 0;
      safeEnd = newBuffer.length - 10;
      return target = newBuffer;
    };
  }
  useBuffer(buffer) {
    target = buffer;
    targetView = new DataView(target.buffer, target.byteOffset, target.byteLength);
    position2 = 0;
  }
};
extensionClasses = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, C1Type];
extensions = [{
  pack(date, allocateForWrite) {
    let seconds = date.getTime() / 1e3;
    if ((this.useTimestamp32 || date.getMilliseconds() === 0) && seconds >= 0 && seconds < 4294967296) {
      let { target: target2, targetView: targetView2, position: position3 } = allocateForWrite(6);
      target2[position3++] = 214;
      target2[position3++] = 255;
      targetView2.setUint32(position3, seconds);
    } else if (seconds > 0 && seconds < 17179869184) {
      let { target: target2, targetView: targetView2, position: position3 } = allocateForWrite(10);
      target2[position3++] = 215;
      target2[position3++] = 255;
      targetView2.setUint32(position3, date.getMilliseconds() * 4e6 + (seconds / 1e3 / 4294967296 >> 0));
      targetView2.setUint32(position3 + 4, seconds);
    } else {
      let { target: target2, targetView: targetView2, position: position3 } = allocateForWrite(15);
      target2[position3++] = 199;
      target2[position3++] = 12;
      target2[position3++] = 255;
      targetView2.setUint32(position3, date.getMilliseconds() * 1e6);
      targetView2.setBigInt64(position3 + 4, BigInt(Math.floor(seconds)));
    }
  }
}, {
  pack(set, allocateForWrite, pack2) {
    let array = Array.from(set);
    let { target: target2, position: position3 } = allocateForWrite(this.structuredClone ? 3 : 0);
    if (this.structuredClone) {
      target2[position3++] = 212;
      target2[position3++] = 115;
      target2[position3++] = 0;
    }
    pack2(array);
  }
}, {
  pack(error, allocateForWrite, pack2) {
    let { target: target2, position: position3 } = allocateForWrite(this.structuredClone ? 3 : 0);
    if (this.structuredClone) {
      target2[position3++] = 212;
      target2[position3++] = 101;
      target2[position3++] = 0;
    }
    pack2([error.name, error.message]);
  }
}, {
  pack(regex, allocateForWrite, pack2) {
    let { target: target2, position: position3 } = allocateForWrite(this.structuredClone ? 3 : 0);
    if (this.structuredClone) {
      target2[position3++] = 212;
      target2[position3++] = 120;
      target2[position3++] = 0;
    }
    pack2([regex.source, regex.flags]);
  }
}, {
  pack(arrayBuffer, allocateForWrite) {
    if (this.structuredClone)
      writeExtBuffer(arrayBuffer, 16, allocateForWrite);
    else
      writeBuffer(hasNodeBuffer ? Buffer.from(arrayBuffer) : new Uint8Array(arrayBuffer), allocateForWrite);
  }
}, {
  pack(typedArray, allocateForWrite) {
    let constructor = typedArray.constructor;
    if (constructor !== ByteArray && this.structuredClone)
      writeExtBuffer(typedArray, typedArrays.indexOf(constructor.name), allocateForWrite);
    else
      writeBuffer(typedArray, allocateForWrite);
  }
}, {
  pack(c1, allocateForWrite) {
    let { target: target2, position: position3 } = allocateForWrite(1);
    target2[position3] = 193;
  }
}];
function writeExtBuffer(typedArray, type, allocateForWrite, encode3) {
  let length = typedArray.byteLength;
  if (length + 1 < 256) {
    var { target: target2, position: position3 } = allocateForWrite(4 + length);
    target2[position3++] = 199;
    target2[position3++] = length + 1;
  } else if (length + 1 < 65536) {
    var { target: target2, position: position3 } = allocateForWrite(5 + length);
    target2[position3++] = 200;
    target2[position3++] = length + 1 >> 8;
    target2[position3++] = length + 1 & 255;
  } else {
    var { target: target2, position: position3, targetView: targetView2 } = allocateForWrite(7 + length);
    target2[position3++] = 201;
    targetView2.setUint32(position3, length + 1);
    position3 += 4;
  }
  target2[position3++] = 116;
  target2[position3++] = type;
  target2.set(new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength), position3);
}
function writeBuffer(buffer, allocateForWrite) {
  let length = buffer.byteLength;
  var target2, position3;
  if (length < 256) {
    var { target: target2, position: position3 } = allocateForWrite(length + 2);
    target2[position3++] = 196;
    target2[position3++] = length;
  } else if (length < 65536) {
    var { target: target2, position: position3 } = allocateForWrite(length + 3);
    target2[position3++] = 197;
    target2[position3++] = length >> 8;
    target2[position3++] = length & 255;
  } else {
    var { target: target2, position: position3, targetView: targetView2 } = allocateForWrite(length + 5);
    target2[position3++] = 198;
    targetView2.setUint32(position3, length);
    position3 += 4;
  }
  target2.set(buffer, position3);
}
function writeExtensionData(result, target2, position3, type) {
  let length = result.length;
  switch (length) {
    case 1:
      target2[position3++] = 212;
      break;
    case 2:
      target2[position3++] = 213;
      break;
    case 4:
      target2[position3++] = 214;
      break;
    case 8:
      target2[position3++] = 215;
      break;
    case 16:
      target2[position3++] = 216;
      break;
    default:
      if (length < 256) {
        target2[position3++] = 199;
        target2[position3++] = length;
      } else if (length < 65536) {
        target2[position3++] = 200;
        target2[position3++] = length >> 8;
        target2[position3++] = length & 255;
      } else {
        target2[position3++] = 201;
        target2[position3++] = length >> 24;
        target2[position3++] = length >> 16 & 255;
        target2[position3++] = length >> 8 & 255;
        target2[position3++] = length & 255;
      }
  }
  target2[position3++] = type;
  target2.set(result, position3);
  position3 += length;
  return position3;
}
function insertIds(serialized, idsToInsert) {
  let nextId;
  let distanceToMove = idsToInsert.length * 6;
  let lastEnd = serialized.length - distanceToMove;
  idsToInsert.sort((a, b) => a.offset > b.offset ? 1 : -1);
  while (nextId = idsToInsert.pop()) {
    let offset = nextId.offset;
    let id = nextId.id;
    serialized.copyWithin(offset + distanceToMove, offset, lastEnd);
    distanceToMove -= 6;
    let position3 = offset + distanceToMove;
    serialized[position3++] = 214;
    serialized[position3++] = 105;
    serialized[position3++] = id >> 24;
    serialized[position3++] = id >> 16 & 255;
    serialized[position3++] = id >> 8 & 255;
    serialized[position3++] = id & 255;
    lastEnd = offset;
  }
  return serialized;
}
var defaultPackr = new Packr({ useRecords: false });
var pack = defaultPackr.pack;
var encode2 = defaultPackr.pack;

// node_modules/@worker-tools/cloudflare-kv-storage/packer.js
var TSON = new import_typeson.default().register(import_structured_cloning_throwing.default);
var TypesonPacker = class {
  async set(kv, key, value, opts) {
    await kv.put(key, JSON.stringify(TSON.encapsulate(value)), opts);
  }
  async get(kv, key) {
    return TSON.revive(await kv.get(key, "json"));
  }
};

// node_modules/@worker-tools/cloudflare-kv-storage/index.js
var __classPrivateFieldSet2 = function(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
};
var __classPrivateFieldGet2 = function(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
};
var _kv;
var _packer;
var _encodeKey;
var _decodeKey;
var _paginationHelper;
var DEFAULT_KV_NAMESPACE_KEY = "CF_STORAGE_AREA__DEFAULT_KV_NAMESPACE";
var DEFAULT_STORAGE_AREA_NAME = "default";
var DIV = "/";
var getProcessEnv = (k) => Reflect.get(Reflect.get(Reflect.get(self, "process") || {}, "env") || {}, k);
var CloudflareStorageArea = class {
  constructor(name = DEFAULT_STORAGE_AREA_NAME, options = {}) {
    _kv.set(this, void 0);
    _packer.set(this, void 0);
    _encodeKey.set(this, void 0);
    _decodeKey.set(this, void 0);
    _paginationHelper.set(this, void 0);
    let { namespace, packer = new TypesonPacker() } = options;
    namespace = namespace || CloudflareStorageArea.defaultKVNamespace || Reflect.get(self, Reflect.get(self, DEFAULT_KV_NAMESPACE_KEY)) || Reflect.get(self, getProcessEnv(DEFAULT_KV_NAMESPACE_KEY));
    __classPrivateFieldSet2(this, _kv, namespace ? namespace : typeof name === "string" ? Reflect.get(self, name) : name);
    if (!__classPrivateFieldGet2(this, _kv)) {
      throw Error("KV binding missing. Consult Workers documentation for details");
    }
    __classPrivateFieldSet2(this, _encodeKey, !namespace ? encodeKey : (k) => `${name}${DIV}${encodeKey(k)}`);
    __classPrivateFieldSet2(this, _decodeKey, !namespace ? decodeKey : (k) => decodeKey(k.substring(name.length + 1)));
    __classPrivateFieldSet2(this, _paginationHelper, !namespace ? paginationHelper : (kv, { prefix, ...opts } = {}) => paginationHelper(kv, {
      prefix: `${name}${DIV}${prefix !== null && prefix !== void 0 ? prefix : ""}`,
      ...opts
    }));
    __classPrivateFieldSet2(this, _packer, packer);
  }
  async get(key, opts) {
    throwForDisallowedKey(key);
    return __classPrivateFieldGet2(this, _packer).get(__classPrivateFieldGet2(this, _kv), __classPrivateFieldGet2(this, _encodeKey).call(this, key), opts);
  }
  async set(key, value, opts) {
    throwForDisallowedKey(key);
    if (value === void 0)
      await __classPrivateFieldGet2(this, _kv).delete(__classPrivateFieldGet2(this, _encodeKey).call(this, key));
    else {
      await __classPrivateFieldGet2(this, _packer).set(__classPrivateFieldGet2(this, _kv), __classPrivateFieldGet2(this, _encodeKey).call(this, key), value, opts);
    }
  }
  async delete(key) {
    throwForDisallowedKey(key);
    return __classPrivateFieldGet2(this, _kv).delete(__classPrivateFieldGet2(this, _encodeKey).call(this, key));
  }
  async clear(opts) {
    for await (const key of __classPrivateFieldGet2(this, _paginationHelper).call(this, __classPrivateFieldGet2(this, _kv), opts)) {
      await __classPrivateFieldGet2(this, _kv).delete(key);
    }
  }
  async *keys(opts) {
    for await (const key of __classPrivateFieldGet2(this, _paginationHelper).call(this, __classPrivateFieldGet2(this, _kv), opts)) {
      yield __classPrivateFieldGet2(this, _decodeKey).call(this, key);
    }
  }
  async *values(opts) {
    for await (const key of __classPrivateFieldGet2(this, _paginationHelper).call(this, __classPrivateFieldGet2(this, _kv), opts)) {
      yield __classPrivateFieldGet2(this, _packer).get(__classPrivateFieldGet2(this, _kv), key, opts);
    }
  }
  async *entries(opts) {
    for await (const key of __classPrivateFieldGet2(this, _paginationHelper).call(this, __classPrivateFieldGet2(this, _kv), opts)) {
      yield [__classPrivateFieldGet2(this, _decodeKey).call(this, key), await __classPrivateFieldGet2(this, _packer).get(__classPrivateFieldGet2(this, _kv), key, opts)];
    }
  }
  backingStore() {
    return __classPrivateFieldGet2(this, _kv);
  }
};
_kv = new WeakMap(), _packer = new WeakMap(), _encodeKey = new WeakMap(), _decodeKey = new WeakMap(), _paginationHelper = new WeakMap();
async function* paginationHelper(kv, opts = {}) {
  let keys;
  let done;
  let cursor;
  do {
    ({ keys, list_complete: done, cursor } = await kv.list({ ...cursor ? { ...opts, cursor } : opts }));
    for (const { name } of keys)
      yield name;
  } while (!done);
}
export {
  CloudflareStorageArea as StorageArea
};
