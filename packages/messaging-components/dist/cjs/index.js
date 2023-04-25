'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var React = require('react');

var styled = require('styled-components');

var create = require('zustand');

var createContext = require('zustand/context');

var hooksV2 = require('@prifina/hooks-v2');

var IM = require('@prifina/messaging');

var core = require('@material-ui/core');

var SendIcon = require('@material-ui/icons/Send');

var MicIcon = require('@material-ui/icons/Mic');

var ArrowBackIosIcon = require('@material-ui/icons/ArrowBackIos');

var shallow = require('zustand/shallow');

var SearchIcon = require('@material-ui/icons/Search');

var timeago = require('timeago.js');

function _interopDefaultLegacy(e) {
  return e && _typeof(e) === 'object' && 'default' in e ? e : {
    'default': e
  };
}

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);

  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function get() {
            return e[k];
          }
        });
      }
    });
  }

  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var create__default = /*#__PURE__*/_interopDefaultLegacy(create);

var createContext__default = /*#__PURE__*/_interopDefaultLegacy(createContext);

var IM__default = /*#__PURE__*/_interopDefaultLegacy(IM);

var SendIcon__default = /*#__PURE__*/_interopDefaultLegacy(SendIcon);

var MicIcon__default = /*#__PURE__*/_interopDefaultLegacy(MicIcon);

var ArrowBackIosIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowBackIosIcon);

var shallow__default = /*#__PURE__*/_interopDefaultLegacy(shallow);

var SearchIcon__default = /*#__PURE__*/_interopDefaultLegacy(SearchIcon);

var timeago__namespace = /*#__PURE__*/_interopNamespace(timeago);

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
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
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _createContext = createContext__default["default"](null),
    Provider = _createContext.Provider,
    useStore = _createContext.useStore; //mport { subscribeWithSelector } from 'zustand/middleware'
//const useStore = create(subscribeWithSelector(() => ({ paw: true, snout: true, fur: true })))


var shortId = function shortId() {
  // this is unique enough...
  return Math.random().toString(36).slice(-10);
};

var StoreProvider = function StoreProvider(_ref) {
  var componentProps = _ref.componentProps,
      children = _ref.children; //const { client } = useGraphQLContext();
  // console.log("PROVIDER CLIENT ", client);

  console.log("PRIFINA HOOK USER ", hooksV2.usePrifina());

  var _usePrifina = hooksV2.usePrifina(),
      currentUser = _usePrifina.currentUser,
      onUpdate = _usePrifina.onUpdate,
      API = _usePrifina.API,
      registerDataConnector = _usePrifina.registerDataConnector;

  _usePrifina.unSubscribe;
  var _check = _usePrifina.check;
  console.log("PRIFINA HOOK USER ", currentUser);

  var _notify = React.useRef(null);

  var _notifySidebar = React.useRef(null);

  return /*#__PURE__*/React__default["default"].createElement(Provider, {
    createStore: function createStore() {
      return create__default["default"](function (set, get, subscribe) {
        return {
          /*   storeSubscribe: () => {
              return subscribe;
            }, */
          mode: 0,
          appType: "",
          appId: "",
          currentUser: currentUser,
          loading: true,
          onUpdateID: "",
          chatInfo: {},
          chats: [],
          newChats: 0,
          currentChat: {},
          messages: [],
          changeMode: function changeMode() {
            set({
              mode: 2
            });
          },
          notify: function notify(callback) {
            _notify.current = callback;
          },
          notifySidebar: function notifySidebar(callback) {
            _notifySidebar.current = callback;
          },
          createMessage: function () {
            var _createMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(msg) {
              var appID, sender, receiver, chatId, msgRes, currentMessages, newMsg;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      appID = get().appId;
                      sender = get().currentUser.uuid;
                      receiver = get().currentChat.chatId;
                      chatId = get().currentChat.chatId;
                      _context.next = 6;
                      return API[appID].Messaging.mutationCreateMessage({
                        variables: {
                          body: JSON.stringify(msg),
                          receiver: receiver,
                          sender: sender,
                          chatId: chatId,
                          owner: sender
                        }
                      });

                    case 6:
                      msgRes = _context.sent;
                      console.log("NEW MSG ", msgRes);
                      currentMessages = get().messages;
                      newMsg = {
                        id: msgRes.data.createMessage.messageId,
                        data: {
                          timestamp: msgRes.data.createMessage.createdAt,
                          message: JSON.stringify(msg),
                          receiver: receiver,
                          sender: sender,
                          chatId: chatId
                        }
                      };
                      currentMessages.push(newMsg);
                      set({
                        messages: currentMessages
                      });
                      console.log("STORE NEW MESSAGES ", currentMessages); //get().update({ addMessage: msgRes.data.createMessage });
                      //console.log("UPDATE NOTIFICATION");
                      //return msgRes.data.createMessage;

                      return _context.abrupt("return", newMsg);

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function createMessage(_x) {
              return _createMessage.apply(this, arguments);
            }

            return createMessage;
          }(),
          createTestMessage: function () {
            var _createTestMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(msg, msgSender, msgReceiver, msgChatId) {
              var appID, sender, receiver, chatId, msgRes, currentMessages;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      appID = get().appId;
                      sender = msgSender || get().currentUser.uuid;
                      receiver = msgReceiver || get().currentChat.chatId;
                      chatId = msgChatId || get().currentChat.chatId;
                      _context2.next = 6;
                      return API[appID].Messaging.mutationCreateTestMessage({
                        variables: {
                          body: JSON.stringify(msg),
                          receiver: receiver,
                          sender: sender,
                          chatId: chatId,
                          owner: sender
                        }
                      });

                    case 6:
                      msgRes = _context2.sent;
                      console.log("NEW TEST MSG ", msgRes); //console.log("NEW TEST MSG ",msgRes);

                      currentMessages = get().messages;
                      currentMessages.push({
                        id: msgRes.data.createMessage.messageId,
                        data: {
                          timestamp: msgRes.data.createMessage.createdAt,
                          message: JSON.stringify(msg),
                          receiver: receiver,
                          sender: sender,
                          chatId: chatId
                        }
                      }); //console.log("NEW MESSAGES ",currentMessages);

                      set({
                        messages: currentMessages
                      });

                    /*  
                    set((state) => {
                      const foundTodo = state.todos.find((t) => t.id === id);
                      foundTodo && (foundTodo.score += by);
                      console.log(state.todos);
                      return { todos: state.todos };
                    })
                    */

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            function createTestMessage(_x2, _x3, _x4, _x5) {
              return _createTestMessage.apply(this, arguments);
            }

            return createTestMessage;
          }(),
          initChat: function () {
            var _initChat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(receiver) {
              var newChats, appID, filter, chatMsgs, msgs, sortedMsgs, mode;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      newChats = get().newChats;
                      console.log("CHAT ", receiver, newChats);
                      appID = get().appId; //const chatId=get().currentUser.uuid;

                      get().currentUser.uuid;
                      /*
                      const filter = {
                        [Op.and]: {
                        ["receiver"]: {
                          [Op.eq]: receiver.chatId,
                        },
                        ["sender"]: {
                          [Op.eq]: chatUser,
                        },
                      }
                      };
                      */

                      filter = _defineProperty({}, "chatId", _defineProperty({}, hooksV2.Op.eq, receiver.chatId));
                      _context3.next = 7;
                      return API[appID].Messaging.queryGetMessages({
                        filter: filter
                      });

                    case 7:
                      chatMsgs = _context3.sent;
                      console.log("MSGS ", chatMsgs);
                      msgs = [];
                      sortedMsgs = chatMsgs.data.getMsgs.sort(function (a, b) {
                        return a.createdAt > b.createdAt ? 1 : -1;
                      });
                      sortedMsgs.forEach(function (msg) {
                        msgs.push({
                          id: msg.messageId,
                          data: {
                            timestamp: msg.createdAt,
                            message: msg.body,
                            receiver: msg.receiver,
                            sender: msg.sender,
                            chatId: msg.chatId,
                            owner: msg.owner
                          }
                        });
                      });
                      mode = get().appType === "widget" ? 3 : 1;
                      set({
                        mode: mode,
                        messages: msgs,
                        currentChat: receiver,
                        newChats: newChats + 1
                      });

                    /*
                    API[appID].Messaging.queryGetUnreadMessages({}).then((m) => {
                      console.log("UNREAD ", m);
                      const msgs=[];
                      m.data.getUnreadMsgs.forEach(msg=>{
                        if (msg.receiver===chatUser) {
                        msgs.push(
                          {
                            id: msg.messageId,
                            data: {
                              timestamp: msg.createdAt,
                              message: msg.body,
                              receiver: msg.receiver,
                              sender: msg.sender,
                              chatId: msg.chatId
                          
                            },
                          },
                        );
                        }
                      });
                      
                      set({messages:msgs,currentChat:receiver,newChats: newChats+ 1});
                       });  
                    */

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            function initChat(_x6) {
              return _initChat.apply(this, arguments);
            }

            return initChat;
          }(),

          /*
          data:
          getUnreadMsgs:
          body: "\"answer\""
          chatId: "tero"
          createdAt: 1661517471939
          messageId: "mnl543"
          receiver: "Testing-uuid"
          sender: "tero"
          */

          /*
          onUpdate:(cb)=>{
            const id=onUpdate(componentProps.appId, cb);
            set({onUpdateID:id});
          },
          */
          check: function check() {
            console.log("CHECK ", _check());
          },
          getUnreadMessages: function () {
            var _getUnreadMessages = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var appID;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      appID = get().appId;
                      API[appID].Messaging.queryGetUnreadMessages({
                        filter: {}
                      }).then(function (m) {
                        console.log("UNREAD ", m);
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));

            function getUnreadMessages() {
              return _getUnreadMessages.apply(this, arguments);
            }

            return getUnreadMessages;
          }(),
          getMessages: function () {
            var _getMessages = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(receiver) {
              var _Op$and;

              var appID, filter, msgs;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      appID = get().appId;
                      console.log("CHAT SELECTED...", receiver); // sender currentUser, receiver 

                      filter = _defineProperty({}, hooksV2.Op.and, (_Op$and = {}, _defineProperty(_Op$and, "receiver", _defineProperty({}, hooksV2.Op.eq, receiver.chatId)), _defineProperty(_Op$and, "sender", _defineProperty({}, hooksV2.Op.eq, get().APIcurrentUser.uuid)), _Op$and));
                      /*
                          const filter = {
                            [Op.and]: {
                              [year]: {
                                [Op.eq]: { fn: "YEAR", field: "p_datetime", opts: null },
                              },
                              [month]: {
                                [Op.eq]: { fn: "MONTH", field: "p_datetime", opts: null },
                              },
                              100: { [Op.eq]: { fn: "CAST", field: "p_confidence", opts: "int" } },
                            },
                          };
                      */
                      //{ chatId: receiver.chatId }

                      _context5.next = 5;
                      return API[appID].Messaging.queryGetMessages({
                        filter: filter
                      });

                    case 5:
                      msgs = _context5.sent;
                      console.log("MSGS XXX", msgs);
                    //{ id,user, contents: { timestamp, message,sender} },

                    /*
                            // sort createdAt...
                            const sortedMsgs = msgs.data.getMsgs.sort((a, b) =>
                              a.createdAt > b.createdAt ? 1 : -1
                            );
                    
                            setMessages(
                              sortedMsgs.map((m) => ({
                                id: m.messageId,
                    
                                data: {
                                  timestamp: m.createdAt,
                                  message: JSON.parse(m.body),
                                  sender: m.sender,
                                  receiver: m.receiver,
                                  chatId: m.chatId,
                                },
                              }))
                            );
                            //setChatId(receiver.chatId);
                            setChatSelected(true);
                          });
                          */

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));

            function getMessages(_x7) {
              return _getMessages.apply(this, arguments);
            }

            return getMessages;
          }(),
          updateMsgStatus: function () {
            var _updateMsgStatus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
              var appID;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      appID = get().appId;
                      _context6.next = 3;
                      return API[appID].Messaging.mutationUpdateMessageStatus({
                        variables: {
                          messageId: id,
                          status: 1
                        }
                      });

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));

            function updateMsgStatus(_x8) {
              return _updateMsgStatus.apply(this, arguments);
            }

            return updateMsgStatus;
          }(),
          update: function update(payload) {
            console.log("UPDATE STORE ", payload);
            var appID = get().appId;
            /*
            if (payload?.messagingStatus) {
              const statusRes = JSON.parse(payload.messagingStatus);
              if (statusRes.cnt > 0) {
               
                API[appID].Messaging.queryGetUnreadMessages({}).then((m) => {
                  console.log("UNREAD ", m);
                });  
              }
                      }*/

            if (payload !== null && payload !== void 0 && payload.addMessage) {
              var msgStatus = JSON.parse(payload.addMessage.result);
              console.log("MSG STATUS ", msgStatus);

              if (msgStatus.cnt > 0) {
                API[appID].Messaging.queryGetUnreadMessages({}).then(function (m) {
                  console.log("UNREAD ", m);

                  if (_notify.current) {
                    console.log("UPDATE SUBS");

                    _notify.current(m.data);
                  }

                  if (_notifySidebar.current) {
                    console.log("UPDATE SIDEBAR SUBS");

                    _notifySidebar.current(m.data);
                  }
                });
              }
            }
            /*    
            if (subscribe.current) {
              console.log("UPDATE SUBS")
              subscribe.current();
            }
            */

            /*
               console.log("NEW TEST MSG ",msgRes);
               const currentMessages=get().messages;
               currentMessages.push(
                 {
                   id: msgRes.data.createMessage.messageId,
                   data: {
                     timestamp: msgRes.data.createMessage.createdAt,
                     message: JSON.stringify(msg),
                     receiver: receiver,
                     sender: sender,
                     chatId: chatId
                 
                   },
                 },
               );
               set({messages:currentMessages});
               */

          },
          init: function init(appType) {
            var appId = componentProps.appId;
            console.log(appId, appType);
            console.log(currentUser);
            var id = onUpdate(appId, get().update);
            registerDataConnector(appId, [IM__default["default"]]);
            var tasks = [];
            tasks.push(API[appId].Messaging.subscribeMessagingStatus({
              variables: {
                receiver: currentUser.uuid,
                appHandler: shortId()
              }
            }));
            tasks.push(API[appId].Messaging.queryUserAddressBook({}));
            tasks.push(API[appId].Messaging.queryGetUnreadMessages({
              filter: {}
            }));
            Promise.all(tasks).then(function (res) {
              var userAddressBook = res[1];
              var unreadMsgs = res[2];
              var chatInfo = {};
              unreadMsgs.data.getUnreadMsgs.forEach(function (m) {
                //console.log("UNREAD MSG ", m);
                if (!(chatInfo !== null && chatInfo !== void 0 && chatInfo[m.sender])) {
                  chatInfo[m.sender] = [];
                }

                chatInfo[m.sender].push({
                  message: m.body,
                  timestamp: m.createdAt,
                  id: m.messageId
                });
              });
              var chats = userAddressBook.data.getAddressBook.map(function (u) {
                return {
                  chatId: u.uuid,
                  name: u.name
                };
              });
              var mode = appType === "widget" ? 2 : 1;
              set({
                appType: appType,
                mode: mode,
                appId: appId,
                onUpdateID: id,
                loading: false,
                chatInfo: chatInfo,
                chats: chats
              });
            });
            /*
            setTimeout(() => {
              
              //set({ schema: currentSchema });
              //set(state => ({ schema: { ...state.schema, ...entry } })),
              set({loading:false});
            }, 5000);
            */
          }
        };
      });
    }
  }, children);
};

var _templateObject$4;

var MsgDiv = styled__default["default"].div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  /* */\n  .message {\n    display: flex;\n    align-items: center;\n    position: relative;\n    width: fit-content;\n    justify-content: space-between;\n    margin: 15px;\n    min-width:80px;\n  }\n  .message > p {\n    background-color: #f3f3f5;\n    font-size: medium;\n    padding: 15px;\n    border-radius: 20px;\n    margin: 10px;\n    margin-right: auto;\n  }\n  .message > small {\n    color: gray;\n    position: absolute;\n    font-size: 8px;\n    bottom: -7px;\n    right: 0;\n  }\n  .message__sender {\n    margin-left: auto;\n  }\n\n  .message__sender > .message__photo {\n    order: 1;\n    margin: 15px;\n  }\n\n  .message__photo {\n    order: 0;\n  }\n\n  .message__sender > p {\n    background-color: #3cabfa;\n    color: white;\n  }\n"])));
/*
const Form = styled(Message)`
  .message {
    display: flex;
    align-items: center;
    position: relative;
    width: fit-content;
    justify-content: space-between;
    margin: 15px;
  }

  .message > p {
    background-color: #f3f3f5;
    font-size: medium;
    padding: 15px;
    border-radius: 20px;
    margin: 10px;
    margin-right: auto;
  }

  .message > small {
    color: gray;
    position: absolute;
    font-size: 8px;
    bottom: -5px;
    right: 0;
  }

  .message__sender {
    margin-left: auto;
  }

  .message__sender > .message__photo {
    order: 1;
    margin: 15px;
  }

  .message__photo {
    order: 0;
  }

  .message__sender > p {
    background-color: #3cabfa;
    color: white;
  }
`;
*/

/*
const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, message, photo, uid } },
    ref
  ) => {
*/

/*
function ChatMessage({
  user,
  contents: { timestamp, message, sender, photo },
  className,
}) {
  */

function Message(_ref) {
  var user = _ref.user;
  _ref.chat;
  var contents = _ref.contents;
  var timestamp = contents.timestamp,
      message = contents.message,
      sender = contents.sender;
  contents.chatId; //contents: { timestamp, message, sender, chatId },  //photo ???
  // console.log("PROPS ", props);

  /* 
  console.log("CHAT ", user,);
  console.log("CHAT ", chat,);
  console.log("CHAT ", sender,);
  console.log("CHAT ", message,);
  console.log("CHAT ", chatId); */

  console.log("CHAT ", user.uuid === sender);
  return /*#__PURE__*/React__default["default"].createElement(MsgDiv, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "message ".concat(user.uuid === sender ? "message__sender" : "")
  }, user.uuid !== sender && /*#__PURE__*/React__default["default"].createElement(core.Avatar, {
    className: "message__photo"
  }), /*#__PURE__*/React__default["default"].createElement("p", null, JSON.parse(message)), /*#__PURE__*/React__default["default"].createElement("small", null, new Date(timestamp).toLocaleString())));
}

var ChatMessage = function ChatMessage(props, ref) {
  console.log("PROPS HERE ", props); //sender: 'hamza-id', receiver: 'tero-id'

  if (props.chat === props.contents.chatId || props.contents.sender === props.chat && props.contents.receiver === props.user.uuid || props.contents.receiver === props.chat && props.contents.sender === props.user.uuid) {
    return /*#__PURE__*/React__default["default"].createElement(Message, _extends({}, props, {
      ref: ref
    }));
  } else {
    return null;
  }
};

var ChatMessage$1 = /*#__PURE__*/React.forwardRef(ChatMessage);

var _templateObject$3, _templateObject2$1;

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
var usrlang = navigator.language || navigator.userLanguage;
var ChatContainer = styled__default["default"].div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  /* */\n  width: ", ";\n"])), function (props) {
  return props.width;
});
var Form$2 = styled__default["default"](Chat)(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  .chat {\n    display: flex;\n    flex-direction: column;\n    flex: 0.65;\n    /* height: 100vh; */\n    height:100%;\n    background-color: white;\n  }\n  .chat__nav {\n    height:20px;\n    background-color: #f5f5f5;\n  }\n  .nav__icon {\n    padding:0px;\n  }\n  .chat__header {\n    padding: 10px;\n    padding-top:0px;\n    padding-bottom:0px;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid lightgray;\n    background-color: #f5f5f5;\n  }\n\n  .chat__header > h4 {\n    font-weight: 500;\n    color: gray;\n  }\n\n  .chat__name {\n    color: black;\n  }\n\n  .chat__input {\n    display: flex;\n    align-items: center;\n    padding: 10px 20px;\n    border-top: 1px solid lightgray;\n    background-color: #f5f5f5;\n  }\n/* \n  .chat__input > form {\n    flex: 1;\n  }\n */\n  .chat__messages {\n    flex: 1;\n    overflow: scroll;\n  }\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  .chat__messages::-webkit-scrollbar {\n    display: none;\n  }\n\n  /* Hide scrollbar for IE, Edge and Firefox */\n  .chat__messages {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n\n  .chat__mic.rec {\n    color:red;\n  }\n  .chat__input >  input {\n    width: 98%;\n    outline-width: 0;\n    border: 1px solid lightgray;\n    border-radius: 999px;\n    padding: 5px;\n  } \n/* \n  .chat__input > form > input {\n    width: 98%;\n    outline-width: 0;\n    border: 1px solid lightgray;\n    border-radius: 999px;\n    padding: 5px;\n  } */\n/* \n  .chat__input > form > button {\n    display: none;\n  } */\n"])));

function Chat(_ref) {
  var newChats = _ref.newChats,
      className = _ref.className; //const user = useSelector(selectUser);

  var _useStore = useStore(function (state) {
    return {
      mode: state.mode,
      changeMode: state.changeMode,
      getUnreadMessages: state.getUnreadMessages,
      messages: state.messages,
      notify: state.notify,
      updateMsgStatus: state.updateMsgStatus,
      currentUser: state.currentUser,
      currentChat: state.currentChat,
      createMessage: state.createMessage
    };
  }, shallow__default["default"]),
      mode = _useStore.mode,
      changeMode = _useStore.changeMode,
      currentUser = _useStore.currentUser,
      currentChat = _useStore.currentChat,
      messages = _useStore.messages,
      createMessage = _useStore.createMessage,
      updateMsgStatus = _useStore.updateMsgStatus,
      notify = _useStore.notify;

  _useStore.getUnreadMessages; //const messages=useStore((state)=>state.messages); 

  /*
  // Object pick, re-renders the component when either state.nuts or state.honey change
  const { nuts, honey } = useBearStore(
    (state) => ({ nuts: state.nuts, honey: state.honey }),
    shallow
  )
  */
  //  const { appID, API, receiver, sender, newChatMessage } = useAppContext();

  var _useState = React.useState(messages),
      _useState2 = _slicedToArray(_useState, 2),
      msgList = _useState2[0],
      setMsgList = _useState2[1];

  var _useState3 = React.useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      input = _useState4[0],
      setInput = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      mic = _useState6[0],
      setMic = _useState6[1];

  var speech = React.useRef("");

  var _useState7 = React.useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      scrollTop = _useState8[0],
      setScrollTop = _useState8[1]; //const [language, setLang] = useState(usrlang);


  var scrollTimer = React.useRef(null);
  var msgTimer = React.useRef([]);
  var effectCalled = React.useRef(false);
  notify(function (payload) {
    /*currentMessages.push(
      {
        id: msgRes.data.createMessage.messageId,
        data: {
          timestamp: msgRes.data.createMessage.createdAt,
          message: JSON.stringify(msg),
          receiver: receiver,
          sender: sender,
          chatId: chatId
      
        },
      },
    );
    0:
    body: "\"hi6\""
    chatId: "tero"
    createdAt: 1661708045251
    messageId: "sgh939"
    owner: "Testing-uuid"
    receiver: "Testing-uuid"
    sender: "tero"
    */
    console.log("TESTING ", payload);
    var msg = [];

    if (msgTimer.current.length > 0) {
      msgTimer.current.forEach(function (t) {
        clearTimeout(t);
      });
    }

    msgTimer.current = [];

    if ((payload === null || payload === void 0 ? void 0 : payload.getUnreadMsgs) !== undefined) {
      msg = payload.getUnreadMsgs.map(function (m) {
        console.log("NEW MESSAGE ", m);
        return {
          id: m.messageId,
          data: {
            timestamp: m.createdAt,
            message: m.body,
            receiver: m.receiver,
            sender: m.sender,
            chatId: m.chatId
          }
        };
      });
    }

    console.log("NEW MESSAGES ", msg);

    if (msg.length > 0) {
      var sentMessages = [];
      msg.forEach(function (m) {
        if (m.data.receiver === currentUser.uuid && m.data.sender === currentChat.chatId) {
          sentMessages.push(m);
        }
      });
      console.log("UPDATE3 MSG STATUS ", sentMessages);
      msgTimer.current = sentMessages.map(function (m) {
        return setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return updateMsgStatus(m.id);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })), 500);
      });
      setMsgList(msgList.concat(msg));
    } //setMsgList([...msgList], [...msg]);
    // scrollChat();

  }); // const chatName = receiver.name;
  //const chatId = useSelector(selectChatId);
  //const [chatId, setChatId] = useState("");

  /*
     const filter = {
       ["chatId"]: {
         [Op.eq]: receiver.chatId,
       },
     };
     */

  /*
    useEffect(() => {
      if (newChatMessage.length) {
        console.log("CHAT NEW MSG from Context ", newChatMessage);
        const msgList = newChatMessage.map((m) => ({
          id: m.messageId,
          data: {
            timestamp: m.createdAt,
            message: m.body,
            sender: m.sender,
            receiver: m.receiver,
            chatId: m.chatId,
          },
        }));
        setMessages((messages) => [...messages, ...msgList]);
      }
    }, [newChatMessage]);
  
    useEffect(() => {
      console.log("CHAT SELECTED...", receiver);
      if (receiver?.chatId !== undefined && receiver.chatId !== "") {
       
        const filter = {
          ["sender"]: {
            [Op.eq]: receiver.chatId,
          },
        };
  
        //{ chatId: receiver.chatId }
  
        API[appID].Messaging.queryGetMessages({
          filter: filter,
        }).then((msgs) => {
          console.log("MSGS ", msgs);
          //{ id,user, contents: { timestamp, message,sender} },
  
          // sort createdAt...
          const sortedMsgs = msgs.data.getMsgs.sort((a, b) =>
            a.createdAt > b.createdAt ? 1 : -1
          );
  
          setMessages(
            sortedMsgs.map((m) => ({
              id: m.messageId,
  
              data: {
                timestamp: m.createdAt,
                message: JSON.parse(m.body),
                sender: m.sender,
                receiver: m.receiver,
                chatId: m.chatId,
              },
            }))
          );
          //setChatId(receiver.chatId);
          setChatSelected(true);
        });
      }
    }, [receiver?.chatId, newChat]);
  
   
    useEffect(() => {
      let scrollTimer = null;
      let msgTimer = [];
      //if (isMountedRef.current) {
      let chatDiv = document.getElementsByClassName("chat");
      let msgDiv = document.getElementsByClassName("chat__messages");
      //let msgDiv = document.getElementsByClassName("chat__input");
  
      //console.log("CHATS ", msgDiv);
      if (msgDiv.length > 0) {
        //console.log("CHATS ", chatDiv[0].scrollHeight);
        scrollTimer = setTimeout(() => {
          //console.log("SCROLL ");
          msgDiv[0].scrollTop = chatDiv[0].scrollHeight;
          //console.log("SCROLL ", chatDiv[0].scrollHeight);
        }, 200);
  
        //let msg = { messageId: variables.messageId, status: variables.status };
        //mutationUpdateMessageStatus
      
        let sentMessages = [];
        messages.forEach((m) => {
          if (
            m.data.receiver === sender.uuid &&
            m.data.sender === receiver.chatId
          ) {
            sentMessages.push(m);
          }
        });
        console.log("UPDATE MSG STATUS ", sentMessages);
        msgTimer = sentMessages.map((m) => {
          return setTimeout(async () => {
            await API[appID].Messaging.mutationUpdateMessageStatus({
              variables: { messageId: m.id, status: 1 },
            });
          }, 500);
        });
      }
      // }
      return () => {
        if (scrollTimer !== null) {
          clearTimeout(scrollTimer);
  
          msgTimer.forEach((t) => {
            clearTimeout(t);
          });
        }
      };
    });
    // }, [isMountedRef, receiver]);
    //console.log("MESSAGES ", messages);
  */

  var scrollChat = function scrollChat() {
    var chatDiv = document.getElementsByClassName("chat");
    var msgDiv = document.getElementsByClassName("chat__messages"); //console.log("SCROLLS CHATS... ", chatDiv, msgDiv);
    //console.log("CHATS ", msgDiv);

    if (msgDiv.length > 0) {
      //console.log("CHATS ", chatDiv[0].scrollHeight);
      scrollTimer.current = setTimeout(function () {
        msgDiv[0].scrollTop = chatDiv[0].scrollHeight; //console.log("SCROLL ", chatDiv[0].scrollHeight);
      }, 500); // clearTimeout(scrollTimer);
    }
  };

  React.useLayoutEffect(function () {
    if (scrollTop > 0) {
      scrollChat();
    }

    return function () {
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
        scrollTimer.current = null;
      }
    }; // }
  }, [scrollTop]);
  React.useEffect(function () {
    if (msgTimer.current.length > 0) {
      msgTimer.current.forEach(function (t) {
        clearTimeout(t);
      });
    }

    msgTimer.current = [];

    function init() {
      //effectCalled.current = true;
      // scrollChat();
      var sentMessages = [];
      messages.forEach(function (m) {
        if (m.data.receiver === currentUser.uuid && m.data.sender === currentChat.chatId) {
          sentMessages.push(m);
        }
      });
      console.log("UPDATE MSG STATUS ", sentMessages);
      msgTimer.current = sentMessages.map(function (m) {
        return setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return updateMsgStatus(m.id);

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        })), 500);
      });
      setMsgList(messages);
      setScrollTop(function (prev) {
        return prev + 1;
      });
    }

    if (messages.length > 0) {
      console.log("CHAT INIT ");
      init();
    }
    /*
    return () => {
      if (msgTimer.length > 0) {
         msgTimer.forEach((t) => {
          clearTimeout(t);
        });
      }
    };
    */

  }, [newChats]);

  var updateMsgList = function updateMsgList() {
    var msgTimer = [];
    var sentMessages = [];
    messages.forEach(function (m) {
      if (m.data.receiver === currentUser.uuid && m.data.sender === currentChat.chatId) {
        sentMessages.push(m);
      }
    });
    console.log("UPDATE2 MSG STATUS ", sentMessages);
    msgTimer = sentMessages.map(function (m) {
      return setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return updateMsgStatus(m.id);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })), 500);
    });
    setMsgList(messages);
    setScrollTop(function (prev) {
      return prev + 1;
    });

    if (msgTimer.length > 0) {
      msgTimer.forEach(function (t) {
        clearTimeout(t);
      });
    }
  };

  var sendMessage = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e, micInput) {
      var currentInput, newMsg;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // currentUser == sender
              // currentChat == receiver
              currentInput = micInput || input;
              console.log("SEND MSG ", currentInput, currentUser, currentChat);

              if (!(currentInput !== "")) {
                _context4.next = 7;
                break;
              }

              _context4.next = 5;
              return createMessage(currentInput);

            case 5:
              newMsg = _context4.sent;

              if (msgList.length === 0) {
                updateMsgList();
              } else {
                if (newMsg.id !== msgList[msgList.length - 1].id) {
                  console.log("NEW MSG ", newMsg); //console.log("LAST MSG ", msgList[msgList.length - 1]);

                  setMsgList(msgList.concat([newMsg]));
                }
                /*
                return {
                  id: m.messageId, data: {
                    timestamp: m.createdAt,
                    message: m.body,
                    receiver: m.receiver,
                    sender: m.sender,
                    chatId: m.chatId
                  }
                }
                */

              }

            // console.log("NEW MESSAGE2 ", newMsg);
            //console.log("NEW MESSAGE22 ", messages);

            case 7:
              /*
                API[appID].Messaging.mutationCreateMessage({
                  variables: {
                    body: JSON.stringify(input),
                    receiver: receiver.chatId,
                    sender: sender.uuid,
                    chatId: receiver.chatId,
                  },
                }).then((res) => {
                  console.log("CREATE MSG ", res);
              
                  setMessages((messages) => [
                    ...messages,
                    {
                      id: res.data.createMessage.messageId,
                      data: {
                        timestamp: res.data.createMessage.createdAt,
                        message: input,
                        sender: sender.uuid,
                        receiver: res.data.createMessage.receiver,
                        chatId: receiver.chatId,
                      },
                    },
                  ]);
              
                  setInput("");
                });
              */
              // scrollChat();
              speech.current = "";
              setInput("");
              setScrollTop(function (prev) {
                return prev + 1;
              });

              if (e) {
                e.preventDefault();
              }

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function sendMessage(_x, _x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  React.useEffect(function () {
    var recognition;

    if (mic) {
      console.log("RECORDING ");
      recognition = new window.SpeechRecognition(); // does this support all browser languages?

      recognition.lang = usrlang;

      recognition.onresult = function (event) {
        var speechToText = event.results[0][0].transcript; //console.log("TEXT ", speechToText);

        speech.current = speechToText;
        setMic(false);
      };

      recognition.start();
    } else {
      if (speech.current !== "") {
        //recognition.stop();  recording stops automatically....
        console.log("SEND", speech.current);
        setInput(speech.current);
        sendMessage(null, speech.current);
      }
    }
  }, [mic]);
  React.useEffect(function () {
    if (!effectCalled.current) {
      effectCalled.current = true;
    }

    return function () {
      if (msgTimer.current.length > 0) {
        msgTimer.current.forEach(function (t) {
          clearTimeout(t);
        });
      }
    };
  }, []);
  console.log("CHAT MSGS ", messages, msgList);
  return /*#__PURE__*/React__default["default"].createElement(ChatContainer, {
    width: mode === 1 ? "60%" : "100%"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: className,
    style: {
      "height": "100%"
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "chat"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "chat__nav"
  }, mode === 3 && /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    onClick: changeMode
  }, /*#__PURE__*/React__default["default"].createElement(ArrowBackIosIcon__default["default"], {
    className: "nav__icon"
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "chat__header"
  }, /*#__PURE__*/React__default["default"].createElement("h4", null, "To: ", /*#__PURE__*/React__default["default"].createElement("span", {
    className: "chat__name"
  }, currentChat === null || currentChat === void 0 ? void 0 : currentChat.name))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "chat__messages"
  }, msgList.map(function (m) {
    console.log("EXTRA ", currentChat, m); //if (receiver.chatId !== m.data.chatId) return null;
    // if empty currentChat,... return null

    return /*#__PURE__*/React__default["default"].createElement(ChatMessage$1, {
      key: m.id,
      user: currentUser,
      chat: currentChat.chatId,
      contents: m.data
    });
  })), (currentChat === null || currentChat === void 0 ? void 0 : currentChat.chatId) !== undefined && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "chat__input"
  }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    onClick: function onClick() {
      setMic(true);
    }
  }, /*#__PURE__*/React__default["default"].createElement(MicIcon__default["default"], {
    className: "chat__mic ".concat(mic ? "rec" : "")
  })), /*#__PURE__*/React__default["default"].createElement("input", {
    value: input,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    placeholder: "iMessage",
    type: "text",
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    }
  }), /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    onClick: sendMessage
  }, /*#__PURE__*/React__default["default"].createElement(SendIcon__default["default"], {
    className: "chat__send"
  })))))));
}
/*
data:
chatId: "hamza-id"
message: "hi"
receiver: "hamza-id"
sender: "tero-id"
timestamp: 1652248162416
[[Prototype]]: Object
id: "0eec23f8-7994-42ce-ab08-aa3ca7ebf12a"
*/


var _templateObject$2;

var Form$1 = styled__default["default"](SidebarChat)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  .sidebarChat {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    border-bottom: 1px solid lightgray;\n    cursor: pointer;\n  }\n\n  .sidebarChat:hover {\n    background-color: #3e93fd;\n    color: white;\n  }\n\n  .sidebarChat__info {\n    margin-left: 15px;\n    position: relative;\n    width: 100%;\n  }\n\n  .sidebarChat__info > small {\n    position: absolute;\n    top: 5px;\n    right: 0;\n  }\n"])));

function SidebarChat(_ref) {
  var _info$, _info$2, _info$3, _info$4;

  var id = _ref.id,
      chatName = _ref.chatName,
      info = _ref.info,
      className = _ref.className;
  /*
    const { currentUser,chats,chatInfo } = useStore(
      (state) => ({ currentUser: state.currentUser, chats: state.chats,chatInfo:state.chatInfo }),
      shallow
    )
  
    const { appID, API, receiver, initChat, newMessage } = useAppContext();
    //console.log("RECEIVER ", receiver);
    const [chatInfo, setChatInfo] = useState([]);
  */

  /*
      if (id !== "") {
       
        const filter = {
          ["chatId"]: {
            [Op.eq]: id,
          },
        };
        
        //const filter = {};
        const unreadMsgs = await API[appID].Messaging.queryGetUnreadMessages({
          filter: filter,
        });
        setChatInfo(
          unreadMsgs.data.getUnreadMsgs.map((m) => ({
            message: m.body,
            timestamp: m.createdAt,
          }))
        );
      }
      */

  /*      
    useEffect(() => {
      if (newMessage.length === 0) {
        
        setChatInfo([info]);
      } else {
        console.log("SIDEBAR NEW MSGS from Context", id, newMessage);
        let newMessages = [];
        newMessage.forEach((m) => {
          if (m.sender === id) {
            const mIdx = newMessages.findIndex((mi) => mi.sender === m.sender);
  
            if (mIdx === -1) {
              newMessages.push(m);
            } else {
              //newMessages[mIdx] = m;
            }
          }
        });
        const lastIndex = newMessages.length - 1;
        console.log("MSG IDX ", lastIndex, newMessages[lastIndex]);
        if (lastIndex > -1) {
          setChatInfo([
            {
              message: newMessages[lastIndex].body,
              timestamp: newMessages[lastIndex].createdAt,
            },
          ]);
        }
      }
    }, [id, newMessage]);
  
     // onClick={() => initChat({ chatId: id, name: chatName })}
    */

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sidebarChat",
    "data-chatid": id,
    style: {
      "height": "100%"
    }
  }, /*#__PURE__*/React__default["default"].createElement(core.Avatar, {
    src: (_info$ = info[0]) === null || _info$ === void 0 ? void 0 : _info$.photo
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sidebarChat__info"
  }, /*#__PURE__*/React__default["default"].createElement("h3", null, chatName), info.length > 0 && ((_info$2 = info[0]) === null || _info$2 === void 0 ? void 0 : _info$2.message) !== undefined && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("p", null, (_info$3 = info[0]) === null || _info$3 === void 0 ? void 0 : _info$3.message, "..."), /*#__PURE__*/React__default["default"].createElement("small", null, timeago__namespace.format(new Date((_info$4 = info[0]) === null || _info$4 === void 0 ? void 0 : _info$4.timestamp)))))));
}

var _templateObject$1, _templateObject2;

var SideContainer = styled__default["default"].div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  /* */\n  width: ", ";\n"])), function (props) {
  return props.width;
});
var Form = styled__default["default"](Sidebar)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nheight:100;\n\n  .sidebar {\n    flex: 0.35;\n    /* height: 100vh; */\n    height:100%;\n    display: flex;\n    flex-direction: column;\n    background-color: #f5f5f5;\n    border-right: 1px solid lightgray;\n  }\n\n  .sidebar__header {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    height: 50px;\n  }\n\n  .sidebar__avatar {\n    cursor: pointer;\n    margin: 10px;\n  }\n\n  .sidebar__input {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    background-color: #e1e1e1;\n    color: gray;\n    border-radius: 5px;\n  }\n\n  .sidebar__input > input {\n    border: none;\n    background: transparent;\n    outline-width: 0;\n  }\n\n  .sidebar__chats {\n    overflow: scroll;\n  }\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  .sidebar__chats::-webkit-scrollbar {\n    display: none;\n  }\n\n  /* Hide scrollbar for IE, Edge and Firefox */\n  .sidebar__chats {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n"])));

function Sidebar(_ref) {
  var className = _ref.className;

  var _useStore = useStore(function (state) {
    return {
      notifySidebar: state.notifySidebar,
      mode: state.mode,
      currentUser: state.currentUser,
      chats: state.chats,
      chatInfo: state.chatInfo,
      initChat: state.initChat
    };
  }, shallow__default["default"]),
      mode = _useStore.mode,
      currentUser = _useStore.currentUser,
      chats = _useStore.chats,
      chatInfo = _useStore.chatInfo,
      initChat = _useStore.initChat,
      notifySidebar = _useStore.notifySidebar;

  var _useState = React.useState(chatInfo),
      _useState2 = _slicedToArray(_useState, 2),
      info = _useState2[0],
      setInfo = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      chatCnt = _useState4[0],
      setChatCnt = _useState4[1];

  notifySidebar(function (payload) {
    // console.log("SIDEBAR ", payload);
    // console.log("SIDEBAR CHATINFO ", chatInfo);
    if ((payload === null || payload === void 0 ? void 0 : payload.getUnreadMsgs) !== undefined) {
      var msgs = info;
      payload.getUnreadMsgs.forEach(function (m) {
        var mBody = m.body.substring(0, 40);
        var msg = {
          message: mBody,
          timestamp: m.createdAt,
          id: m.messageId
        };

        if ((msgs === null || msgs === void 0 ? void 0 : msgs[m.sender]) !== undefined) {
          var mIdx = msgs[m.sender].findIndex(function (mm) {
            return mm.id === m.messageId;
          });

          if (mIdx === -1) {
            msgs[m.sender].unshift(msg);
          }
        } else {
          msgs[m.sender] = [msg];
        }
      });
      console.log("NEW SIDEBAR CHATS ", msgs);
      setInfo(msgs);
      setChatCnt(function (prev) {
        return prev + 1;
      });
    }
  });
  console.log("SIDEBAR 1", chats, chatInfo);
  /*
    const addChat = () => {
      const chatName = prompt("Please enter a chat name");
      
      // if (chatName) {
      //   db.collection("chats").add({
      //     chatName: chatName,
      //   });
      // }
      
    };
  */

  return /*#__PURE__*/React__default["default"].createElement(SideContainer, {
    width: mode === 1 ? "40%" : "100%"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: className,
    style: {
      "height": "100%"
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sidebar"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sidebar__header"
  }, /*#__PURE__*/React__default["default"].createElement(core.Avatar, {
    src: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.image) || "",
    className: "sidebar__avatar"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sidebar__input"
  }, /*#__PURE__*/React__default["default"].createElement(SearchIcon__default["default"], null), /*#__PURE__*/React__default["default"].createElement("input", {
    placeholder: "Search"
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sidebar__chats",
    "chat-idx": chatCnt
  }, chats.map(function (_ref2, i) {
    var chatId = _ref2.chatId,
        name = _ref2.name;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: chatId + "-" + i,
      onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return initChat({
                  chatId: chatId,
                  name: name
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))
    }, /*#__PURE__*/React__default["default"].createElement(Form$1, {
      key: "chat-id-" + chatId + '-' + i,
      id: chatId,
      info: info[chatId] || [],
      chatName: name
    }));
  })))));
}

var _templateObject;

var AppContainer = styled__default["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /* */\n  display: flex;\n  height:100%;\n"])));

var IMessage = function IMessage(props) {
  var data = props.data,
      appType = props.appType;
  console.log("DATA PROPS ", data, appType); // Object pick, re-renders the component when either state.nuts or state.honey change

  var _useStore = useStore(function (state) {
    return {
      mode: state.mode,
      currentUser: state.currentUser,
      createTestMessage: state.createTestMessage,
      currentChat: state.currentChat,
      loading: state.loading,
      init: state.init,
      check: state.check,
      chats: state.chats,
      newChats: state.newChats
    };
  }, shallow__default["default"]),
      mode = _useStore.mode,
      loading = _useStore.loading,
      init = _useStore.init,
      check = _useStore.check,
      chats = _useStore.chats,
      newChats = _useStore.newChats;

  _useStore.currentChat;
  _useStore.createTestMessage;
  _useStore.currentUser;
  var initRef = React.useRef(false); // const datamodels = [];
  // init();

  React.useEffect(function () {
    console.log("Strict mode RENDERING twice...");

    if (!initRef.current) {
      init(appType);
    }

    initRef.current = true;
  }, []);
  React.useEffect(function () {
    if (!loading) {
      console.log("CALL CHECK ", check());
      console.log("CHATS ", chats);
    }
  }, [loading]);
  React.useEffect(function () {
    console.log("NEW CHATS ", newChats);
  }, [newChats]);
  console.log("CHATS MODE ", mode);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, !loading && /*#__PURE__*/React__default["default"].createElement(AppContainer, null, (mode === 1 || mode === 2) && /*#__PURE__*/React__default["default"].createElement(Form, null), (mode === 1 || mode === 3) && /*#__PURE__*/React__default["default"].createElement(Form$2, {
    newChats: newChats
  })), loading && /*#__PURE__*/React__default["default"].createElement("div", null, "Loading"));
};

IMessage.displayName = "IMessage";
exports.IMessage = IMessage;
exports.StoreProvider = StoreProvider;
exports.useStore = useStore;
