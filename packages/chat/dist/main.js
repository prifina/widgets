/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithHoles)\n/* harmony export */ });\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);\n}\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArrayLimit)\n/* harmony export */ });\nfunction _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableRest)\n/* harmony export */ });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _slicedToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ \"../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ \"../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ \"../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\n\nfunction _slicedToArray(arr, i) {\n  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n}\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n}\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);\n}\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/regenerator/index.js":
/*!**************************************************************!*\
  !*** ../../node_modules/@babel/runtime/regenerator/index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"../../node_modules/regenerator-runtime/runtime.js\");\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ \"../../node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js\");\n\n\nvar reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23\n\nvar index = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function (prop) {\n  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111\n  /* o */\n  && prop.charCodeAt(1) === 110\n  /* n */\n  && prop.charCodeAt(2) < 91;\n}\n/* Z+1 */\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js?");

/***/ }),

/***/ "../../node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!***********************************************************************************************************!*\
  !*** ../../node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction memoize(fn) {\n  var cache = {};\n  return function (arg) {\n    if (cache[arg] === undefined) cache[arg] = fn(arg);\n    return cache[arg];\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js?");

/***/ }),

/***/ "../../node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction stylis_min (W) {\n  function M(d, c, e, h, a) {\n    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {\n      g = e.charCodeAt(l);\n      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);\n\n      if (0 === b + n + v + m) {\n        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {\n          switch (g) {\n            case 32:\n            case 9:\n            case 59:\n            case 13:\n            case 10:\n              break;\n\n            default:\n              f += e.charAt(l);\n          }\n\n          g = 59;\n        }\n\n        switch (g) {\n          case 123:\n            f = f.trim();\n            q = f.charCodeAt(0);\n            k = 1;\n\n            for (t = ++l; l < B;) {\n              switch (g = e.charCodeAt(l)) {\n                case 123:\n                  k++;\n                  break;\n\n                case 125:\n                  k--;\n                  break;\n\n                case 47:\n                  switch (g = e.charCodeAt(l + 1)) {\n                    case 42:\n                    case 47:\n                      a: {\n                        for (u = l + 1; u < J; ++u) {\n                          switch (e.charCodeAt(u)) {\n                            case 47:\n                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {\n                                l = u + 1;\n                                break a;\n                              }\n\n                              break;\n\n                            case 10:\n                              if (47 === g) {\n                                l = u + 1;\n                                break a;\n                              }\n\n                          }\n                        }\n\n                        l = u;\n                      }\n\n                  }\n\n                  break;\n\n                case 91:\n                  g++;\n\n                case 40:\n                  g++;\n\n                case 34:\n                case 39:\n                  for (; l++ < J && e.charCodeAt(l) !== g;) {\n                  }\n\n              }\n\n              if (0 === k) break;\n              l++;\n            }\n\n            k = e.substring(t, l);\n            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));\n\n            switch (q) {\n              case 64:\n                0 < r && (f = f.replace(N, ''));\n                g = f.charCodeAt(1);\n\n                switch (g) {\n                  case 100:\n                  case 109:\n                  case 115:\n                  case 45:\n                    r = c;\n                    break;\n\n                  default:\n                    r = O;\n                }\n\n                k = M(c, r, k, g, a + 1);\n                t = k.length;\n                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));\n                if (0 < t) switch (g) {\n                  case 115:\n                    f = f.replace(da, ea);\n\n                  case 100:\n                  case 109:\n                  case 45:\n                    k = f + '{' + k + '}';\n                    break;\n\n                  case 107:\n                    f = f.replace(fa, '$1 $2');\n                    k = f + '{' + k + '}';\n                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;\n                    break;\n\n                  default:\n                    k = f + k, 112 === h && (k = (p += k, ''));\n                } else k = '';\n                break;\n\n              default:\n                k = M(c, X(c, f, I), k, h, a + 1);\n            }\n\n            F += k;\n            k = I = r = u = q = 0;\n            f = '';\n            g = e.charCodeAt(++l);\n            break;\n\n          case 125:\n          case 59:\n            f = (0 < r ? f.replace(N, '') : f).trim();\n            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\\x00\\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {\n              case 0:\n                break;\n\n              case 64:\n                if (105 === g || 99 === g) {\n                  G += f + e.charAt(l);\n                  break;\n                }\n\n              default:\n                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));\n            }\n            I = r = u = q = 0;\n            f = '';\n            g = e.charCodeAt(++l);\n        }\n      }\n\n      switch (g) {\n        case 13:\n        case 10:\n          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\\x00');\n          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);\n          z = 1;\n          D++;\n          break;\n\n        case 59:\n        case 125:\n          if (0 === b + n + v + m) {\n            z++;\n            break;\n          }\n\n        default:\n          z++;\n          y = e.charAt(l);\n\n          switch (g) {\n            case 9:\n            case 32:\n              if (0 === n + m + b) switch (x) {\n                case 44:\n                case 58:\n                case 9:\n                case 32:\n                  y = '';\n                  break;\n\n                default:\n                  32 !== g && (y = ' ');\n              }\n              break;\n\n            case 0:\n              y = '\\\\0';\n              break;\n\n            case 12:\n              y = '\\\\f';\n              break;\n\n            case 11:\n              y = '\\\\v';\n              break;\n\n            case 38:\n              0 === n + b + m && (r = I = 1, y = '\\f' + y);\n              break;\n\n            case 108:\n              if (0 === n + b + m + E && 0 < u) switch (l - u) {\n                case 2:\n                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);\n\n                case 8:\n                  111 === K && (E = K);\n              }\n              break;\n\n            case 58:\n              0 === n + b + m && (u = l);\n              break;\n\n            case 44:\n              0 === b + v + n + m && (r = 1, y += '\\r');\n              break;\n\n            case 34:\n            case 39:\n              0 === b && (n = n === g ? 0 : 0 === n ? g : n);\n              break;\n\n            case 91:\n              0 === n + b + v && m++;\n              break;\n\n            case 93:\n              0 === n + b + v && m--;\n              break;\n\n            case 41:\n              0 === n + b + m && v--;\n              break;\n\n            case 40:\n              if (0 === n + b + m) {\n                if (0 === q) switch (2 * x + 3 * K) {\n                  case 533:\n                    break;\n\n                  default:\n                    q = 1;\n                }\n                v++;\n              }\n\n              break;\n\n            case 64:\n              0 === b + v + n + m + u + k && (k = 1);\n              break;\n\n            case 42:\n            case 47:\n              if (!(0 < n + m + v)) switch (b) {\n                case 0:\n                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {\n                    case 235:\n                      b = 47;\n                      break;\n\n                    case 220:\n                      t = l, b = 42;\n                  }\n\n                  break;\n\n                case 42:\n                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);\n              }\n          }\n\n          0 === b && (f += y);\n      }\n\n      K = x;\n      x = g;\n      l++;\n    }\n\n    t = p.length;\n\n    if (0 < t) {\n      r = c;\n      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;\n      p = r.join(',') + '{' + p + '}';\n\n      if (0 !== w * E) {\n        2 !== w || L(p, 2) || (E = 0);\n\n        switch (E) {\n          case 111:\n            p = p.replace(ha, ':-moz-$1') + p;\n            break;\n\n          case 112:\n            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;\n        }\n\n        E = 0;\n      }\n    }\n\n    return G + p + F;\n  }\n\n  function X(d, c, e) {\n    var h = c.trim().split(ia);\n    c = h;\n    var a = h.length,\n        m = d.length;\n\n    switch (m) {\n      case 0:\n      case 1:\n        var b = 0;\n\n        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {\n          c[b] = Z(d, c[b], e).trim();\n        }\n\n        break;\n\n      default:\n        var v = b = 0;\n\n        for (c = []; b < a; ++b) {\n          for (var n = 0; n < m; ++n) {\n            c[v++] = Z(d[n] + ' ', h[b], e).trim();\n          }\n        }\n\n    }\n\n    return c;\n  }\n\n  function Z(d, c, e) {\n    var h = c.charCodeAt(0);\n    33 > h && (h = (c = c.trim()).charCodeAt(0));\n\n    switch (h) {\n      case 38:\n        return c.replace(F, '$1' + d.trim());\n\n      case 58:\n        return d.trim() + c.replace(F, '$1' + d.trim());\n\n      default:\n        if (0 < 1 * e && 0 < c.indexOf('\\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());\n    }\n\n    return d + c;\n  }\n\n  function P(d, c, e, h) {\n    var a = d + ';',\n        m = 2 * c + 3 * e + 4 * h;\n\n    if (944 === m) {\n      d = a.indexOf(':', 9) + 1;\n      var b = a.substring(d, a.length - 1).trim();\n      b = a.substring(0, d).trim() + b + ';';\n      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;\n    }\n\n    if (0 === w || 2 === w && !L(a, 1)) return a;\n\n    switch (m) {\n      case 1015:\n        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;\n\n      case 951:\n        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;\n\n      case 963:\n        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;\n\n      case 1009:\n        if (100 !== a.charCodeAt(4)) break;\n\n      case 969:\n      case 942:\n        return '-webkit-' + a + a;\n\n      case 978:\n        return '-webkit-' + a + '-moz-' + a + a;\n\n      case 1019:\n      case 983:\n        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;\n\n      case 883:\n        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;\n        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;\n        break;\n\n      case 932:\n        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {\n          case 103:\n            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;\n\n          case 115:\n            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;\n\n          case 98:\n            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;\n        }\n        return '-webkit-' + a + '-ms-' + a + a;\n\n      case 964:\n        return '-webkit-' + a + '-ms-flex-' + a + a;\n\n      case 1023:\n        if (99 !== a.charCodeAt(8)) break;\n        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');\n        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;\n\n      case 1005:\n        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;\n\n      case 1e3:\n        b = a.substring(13).trim();\n        c = b.indexOf('-') + 1;\n\n        switch (b.charCodeAt(0) + b.charCodeAt(c)) {\n          case 226:\n            b = a.replace(G, 'tb');\n            break;\n\n          case 232:\n            b = a.replace(G, 'tb-rl');\n            break;\n\n          case 220:\n            b = a.replace(G, 'lr');\n            break;\n\n          default:\n            return a;\n        }\n\n        return '-webkit-' + a + '-ms-' + b + a;\n\n      case 1017:\n        if (-1 === a.indexOf('sticky', 9)) break;\n\n      case 975:\n        c = (a = d).length - 10;\n        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();\n\n        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {\n          case 203:\n            if (111 > b.charCodeAt(8)) break;\n\n          case 115:\n            a = a.replace(b, '-webkit-' + b) + ';' + a;\n            break;\n\n          case 207:\n          case 102:\n            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;\n        }\n\n        return a + ';';\n\n      case 938:\n        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {\n          case 105:\n            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;\n\n          case 115:\n            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;\n\n          default:\n            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;\n        }\n        break;\n\n      case 973:\n      case 989:\n        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;\n\n      case 931:\n      case 953:\n        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;\n        break;\n\n      case 962:\n        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;\n    }\n\n    return a;\n  }\n\n  function L(d, c) {\n    var e = d.indexOf(1 === c ? ':' : '{'),\n        h = d.substring(0, 3 !== c ? e : 10);\n    e = d.substring(e + 1, d.length - 1);\n    return R(2 !== c ? h : h.replace(na, '$1'), e, c);\n  }\n\n  function ea(d, c) {\n    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));\n    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';\n  }\n\n  function H(d, c, e, h, a, m, b, v, n, q) {\n    for (var g = 0, x = c, w; g < A; ++g) {\n      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {\n        case void 0:\n        case !1:\n        case !0:\n        case null:\n          break;\n\n        default:\n          x = w;\n      }\n    }\n\n    if (x !== c) return x;\n  }\n\n  function T(d) {\n    switch (d) {\n      case void 0:\n      case null:\n        A = S.length = 0;\n        break;\n\n      default:\n        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {\n          T(d[c]);\n        } else Y = !!d | 0;\n    }\n\n    return T;\n  }\n\n  function U(d) {\n    d = d.prefix;\n    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);\n    return U;\n  }\n\n  function B(d, c) {\n    var e = d;\n    33 > e.charCodeAt(0) && (e = e.trim());\n    V = e;\n    e = [V];\n\n    if (0 < A) {\n      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);\n      void 0 !== h && 'string' === typeof h && (c = h);\n    }\n\n    var a = M(O, e, c, 0, 0);\n    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));\n    V = '';\n    E = 0;\n    z = D = 1;\n    return a;\n  }\n\n  var ca = /^\\0+/g,\n      N = /[\\0\\r\\f]/g,\n      aa = /: */g,\n      ka = /zoo|gra/,\n      ma = /([,: ])(transform)/g,\n      ia = /,\\r+?/g,\n      F = /([\\t\\r\\n ])*\\f?&/g,\n      fa = /@(k\\w+)\\s*(\\S*)\\s*/,\n      Q = /::(place)/g,\n      ha = /:(read-only)/g,\n      G = /[svh]\\w+-[tblr]{2}/,\n      da = /\\(\\s*(.*)\\s*\\)/g,\n      oa = /([\\s\\S]*?);/g,\n      ba = /-self|flex-/g,\n      na = /[^]*?(:[rp][el]a[\\w-]+)[^]*/,\n      la = /stretch|:\\s*\\w+\\-(?:conte|avail)/,\n      ja = /([^-])(image-set\\()/,\n      z = 1,\n      D = 1,\n      E = 0,\n      w = 1,\n      O = [],\n      S = [],\n      A = 0,\n      R = null,\n      Y = 0,\n      V = '';\n  B.use = T;\n  B.set = U;\n  void 0 !== W && U(W);\n  return B;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylis_min);\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@emotion/stylis/dist/stylis.browser.esm.js?");

/***/ }),

/***/ "../../node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar unitlessKeys = {\n  animationIterationCount: 1,\n  borderImageOutset: 1,\n  borderImageSlice: 1,\n  borderImageWidth: 1,\n  boxFlex: 1,\n  boxFlexGroup: 1,\n  boxOrdinalGroup: 1,\n  columnCount: 1,\n  columns: 1,\n  flex: 1,\n  flexGrow: 1,\n  flexPositive: 1,\n  flexShrink: 1,\n  flexNegative: 1,\n  flexOrder: 1,\n  gridRow: 1,\n  gridRowEnd: 1,\n  gridRowSpan: 1,\n  gridRowStart: 1,\n  gridColumn: 1,\n  gridColumnEnd: 1,\n  gridColumnSpan: 1,\n  gridColumnStart: 1,\n  msGridRow: 1,\n  msGridRowSpan: 1,\n  msGridColumn: 1,\n  msGridColumnSpan: 1,\n  fontWeight: 1,\n  lineHeight: 1,\n  opacity: 1,\n  order: 1,\n  orphans: 1,\n  tabSize: 1,\n  widows: 1,\n  zIndex: 1,\n  zoom: 1,\n  WebkitLineClamp: 1,\n  // SVG-related properties\n  fillOpacity: 1,\n  floodOpacity: 1,\n  stopOpacity: 1,\n  strokeDasharray: 1,\n  strokeDashoffset: 1,\n  strokeMiterlimit: 1,\n  strokeOpacity: 1,\n  strokeWidth: 1\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@emotion/unitless/dist/unitless.browser.esm.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-component/dist/components/RemoteComponent.js":
/*!****************************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-component/dist/components/RemoteComponent.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nexports.__esModule = true;\nexports.RemoteComponent = void 0;\nvar createRemoteComponent_1 = __webpack_require__(/*! ../createRemoteComponent */ \"../../node_modules/@paciolan/remote-component/dist/createRemoteComponent.js\");\nvar createRequires_1 = __webpack_require__(/*! ../createRequires */ \"../../node_modules/@paciolan/remote-component/dist/createRequires.js\");\nvar getDependencies_1 = __webpack_require__(/*! ../getDependencies */ \"../../node_modules/@paciolan/remote-component/dist/getDependencies.js\");\nvar requires = createRequires_1.createRequires(getDependencies_1.getDependencies);\nexports.RemoteComponent = createRemoteComponent_1.createRemoteComponent({ requires: requires });\n//# sourceMappingURL=RemoteComponent.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-component/dist/components/RemoteComponent.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-component/dist/createRemoteComponent.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-component/dist/createRemoteComponent.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nexports.createRemoteComponent = void 0;\n/* eslint-disable @typescript-eslint/no-explicit-any */\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\nvar useRemoteComponent_1 = __webpack_require__(/*! ./hooks/useRemoteComponent */ \"../../node_modules/@paciolan/remote-component/dist/hooks/useRemoteComponent.js\");\nvar createRemoteComponent = function (props) {\n    var useRemoteComponent = useRemoteComponent_1.createUseRemoteComponent(props);\n    var remoteComponent = function (_a) {\n        var url = _a.url, _b = _a.fallback, fallback = _b === void 0 ? null : _b, render = _a.render, props = __rest(_a, [\"url\", \"fallback\", \"render\"]);\n        var _c = useRemoteComponent(url), loading = _c[0], err = _c[1], Component = _c[2];\n        if (loading) {\n            return fallback;\n        }\n        if (render) {\n            return render({ err: err, Component: Component });\n        }\n        if (err || !Component) {\n            return react_1[\"default\"].createElement(\"div\", null,\n                \"Unknown Error: \",\n                (err || \"UNKNOWN\").toString());\n        }\n        return react_1[\"default\"].createElement(Component, __assign({}, props));\n    };\n    return remoteComponent;\n};\nexports.createRemoteComponent = createRemoteComponent;\n//# sourceMappingURL=createRemoteComponent.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-component/dist/createRemoteComponent.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-component/dist/createRequires.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-component/dist/createRequires.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nexports.__esModule = true;\nexports.createRequires = void 0;\nvar sanitizeDependencies = function (dependencies) {\n    return typeof dependencies === \"function\" ? dependencies() : dependencies || {};\n};\nvar createRequires = function (dependencies) {\n    var isSanitized = false;\n    return function (name) {\n        if (!isSanitized) {\n            // note: needs to happen inside the inner function for the laziness to work.\n            dependencies = sanitizeDependencies(dependencies);\n            isSanitized = true;\n        }\n        if (!(name in dependencies)) {\n            throw new Error(\"Could not require '\" + name + \"'. '\" + name + \"' does not exist in dependencies.\");\n        }\n        return dependencies[name];\n    };\n};\nexports.createRequires = createRequires;\n//# sourceMappingURL=createRequires.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-component/dist/createRequires.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-component/dist/fetchRemoteComponent.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-component/dist/fetchRemoteComponent.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nexports.fetchRemoteComponent = void 0;\nvar remote_module_loader_1 = __importDefault(__webpack_require__(/*! @paciolan/remote-module-loader */ \"../../node_modules/@paciolan/remote-module-loader/dist/index.js\"));\nvar fetchRemoteComponent = function (_a) {\n    var requires = _a.requires, url = _a.url, _b = _a.imports, imports = _b === void 0 ? \"default\" : _b;\n    var loadRemoteModule = remote_module_loader_1[\"default\"]({ requires: requires });\n    return loadRemoteModule(url).then(function (module) {\n        var Component = module && module[imports];\n        if (!Component) {\n            throw new Error(\"Could not load '\" + imports + \"' from '\" + url + \"'.\");\n        }\n        return Component;\n    });\n    // suppressHydrationWarning={true}\n};\nexports.fetchRemoteComponent = fetchRemoteComponent;\n//# sourceMappingURL=fetchRemoteComponent.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-component/dist/fetchRemoteComponent.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-component/dist/getDependencies.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-component/dist/getDependencies.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n/* eslint-disable @typescript-eslint/no-explicit-any */\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nexports.getDependencies = exports.ensureRemoteComponentConfig = void 0;\nvar cannotFindModule = function (err) {\n    return err &&\n        typeof err.message === \"string\" &&\n        err.message.indexOf(\"Cannot find module\") > -1;\n};\nvar isConfigInResolve = function (config) {\n    return typeof config === \"object\" && \"remote-component.config.js\" in config;\n};\n/**\n * Makes sure the config contains remote-component.config.js.\n * If not, then it adds it.\n */\nvar ensureRemoteComponentConfig = function (_a) {\n    var resolve = _a.resolve;\n    if (isConfigInResolve(resolve)) {\n        return resolve;\n    }\n    // add remote-component.config.js recursively\n    var newResolve = __assign({}, resolve);\n    newResolve[\"remote-component.config.js\"] = { resolve: newResolve };\n    return newResolve;\n};\nexports.ensureRemoteComponentConfig = ensureRemoteComponentConfig;\nvar getDependencies = function () {\n    try {\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        return exports.ensureRemoteComponentConfig(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'remote-component.config.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\n    }\n    catch (err) {\n        // istanbul ignore next: This is just too impossible to test\n        if (!cannotFindModule(err)) {\n            throw err;\n        }\n        return {};\n    }\n};\nexports.getDependencies = getDependencies;\n//# sourceMappingURL=getDependencies.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-component/dist/getDependencies.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-component/dist/getServerSideProps.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-component/dist/getServerSideProps.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nexports.getServerSideProps = void 0;\nvar remote_module_loader_1 = __importDefault(__webpack_require__(/*! @paciolan/remote-module-loader */ \"../../node_modules/@paciolan/remote-module-loader/dist/index.js\"));\nvar getServerSideProps = function (_a) {\n    var url = _a.url, requires = _a.requires, context = _a.context, _b = _a.imports, imports = _b === void 0 ? \"default\" : _b;\n    var loadRemoteModule = remote_module_loader_1[\"default\"]({ requires: requires });\n    return loadRemoteModule(url).then(function (module) {\n        var func = module && module[imports] && module[imports].getServerSideProps;\n        return typeof func === \"function\" ? func(context) : {};\n    });\n};\nexports.getServerSideProps = getServerSideProps;\n//# sourceMappingURL=getServerSideProps.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-component/dist/getServerSideProps.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-component/dist/hooks/useRemoteComponent.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-component/dist/hooks/useRemoteComponent.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nexports.createUseRemoteComponent = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\nvar remote_module_loader_1 = __importDefault(__webpack_require__(/*! @paciolan/remote-module-loader */ \"../../node_modules/@paciolan/remote-module-loader/dist/index.js\"));\nvar createUseRemoteComponent = function (args) {\n    var loadRemoteModule = remote_module_loader_1[\"default\"](args);\n    var useRemoteComponent = function (url) {\n        var _a = react_1.useState({\n            loading: true,\n            err: undefined,\n            component: undefined\n        }), _b = _a[0], loading = _b.loading, err = _b.err, component = _b.component, setState = _a[1];\n        react_1.useEffect(function () {\n            var update = setState;\n            update({ loading: true, err: undefined, component: undefined });\n            loadRemoteModule(url)\n                .then(function (module) {\n                return update({ loading: false, err: undefined, component: module[\"default\"] });\n            })[\"catch\"](function (err) { return update({ loading: false, err: err, component: undefined }); });\n            return function () {\n                // invalidate update function for stale closures\n                update = function () {\n                    // this function is left intentionally blank\n                };\n            };\n        }, [url]);\n        return [loading, err, component];\n    };\n    return useRemoteComponent;\n};\nexports.createUseRemoteComponent = createUseRemoteComponent;\n//# sourceMappingURL=useRemoteComponent.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-component/dist/hooks/useRemoteComponent.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-component/dist/index.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-component/dist/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nexports.__esModule = true;\nexports.getServerSideProps = exports.fetchRemoteComponent = exports.RemoteComponent = exports.createRemoteComponent = exports.getDependencies = exports.createRequires = exports.createUseRemoteComponent = void 0;\nvar useRemoteComponent_1 = __webpack_require__(/*! ./hooks/useRemoteComponent */ \"../../node_modules/@paciolan/remote-component/dist/hooks/useRemoteComponent.js\");\n__createBinding(exports, useRemoteComponent_1, \"createUseRemoteComponent\");\nvar createRequires_1 = __webpack_require__(/*! ./createRequires */ \"../../node_modules/@paciolan/remote-component/dist/createRequires.js\");\n__createBinding(exports, createRequires_1, \"createRequires\");\nvar getDependencies_1 = __webpack_require__(/*! ./getDependencies */ \"../../node_modules/@paciolan/remote-component/dist/getDependencies.js\");\n__createBinding(exports, getDependencies_1, \"getDependencies\");\nvar createRemoteComponent_1 = __webpack_require__(/*! ./createRemoteComponent */ \"../../node_modules/@paciolan/remote-component/dist/createRemoteComponent.js\");\n__createBinding(exports, createRemoteComponent_1, \"createRemoteComponent\");\nvar RemoteComponent_1 = __webpack_require__(/*! ./components/RemoteComponent */ \"../../node_modules/@paciolan/remote-component/dist/components/RemoteComponent.js\");\n__createBinding(exports, RemoteComponent_1, \"RemoteComponent\");\nvar fetchRemoteComponent_1 = __webpack_require__(/*! ./fetchRemoteComponent */ \"../../node_modules/@paciolan/remote-component/dist/fetchRemoteComponent.js\");\n__createBinding(exports, fetchRemoteComponent_1, \"fetchRemoteComponent\");\nvar getServerSideProps_1 = __webpack_require__(/*! ./getServerSideProps */ \"../../node_modules/@paciolan/remote-component/dist/getServerSideProps.js\");\n__createBinding(exports, getServerSideProps_1, \"getServerSideProps\");\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-component/dist/index.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-module-loader/dist/index.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-module-loader/dist/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nexports.__esModule = true;\nexports.createRequires = exports.default = void 0;\nvar loadRemoteModule_1 = __webpack_require__(/*! ./lib/loadRemoteModule */ \"../../node_modules/@paciolan/remote-module-loader/dist/lib/loadRemoteModule.js\");\n__createBinding(exports, loadRemoteModule_1, \"createLoadRemoteModule\", \"default\");\nvar createRequires_1 = __webpack_require__(/*! ./lib/createRequires */ \"../../node_modules/@paciolan/remote-module-loader/dist/lib/createRequires.js\");\n__createBinding(exports, createRequires_1, \"createRequires\");\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-module-loader/dist/index.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-module-loader/dist/lib/createRequires.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-module-loader/dist/lib/createRequires.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nexports.__esModule = true;\nexports.createRequires = void 0;\nvar createRequires = function (dependencies) { return function (name) {\n    var _dependencies = dependencies || {};\n    if (!(name in _dependencies)) {\n        throw new Error(\"Could not require '\" + name + \"'. '\" + name + \"' does not exist in dependencies.\");\n    }\n    return _dependencies[name];\n}; };\nexports.createRequires = createRequires;\n//# sourceMappingURL=createRequires.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-module-loader/dist/lib/createRequires.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-module-loader/dist/lib/loadRemoteModule.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-module-loader/dist/lib/loadRemoteModule.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nexports.__esModule = true;\nexports.createLoadRemoteModule = void 0;\nvar memoize_1 = __webpack_require__(/*! ./memoize */ \"../../node_modules/@paciolan/remote-module-loader/dist/lib/memoize.js\");\nvar index_1 = __webpack_require__(/*! ./xmlHttpRequestFetcher/index */ \"../../node_modules/@paciolan/remote-module-loader/dist/lib/xmlHttpRequestFetcher/index.js\");\nvar nodeFetcher_1 = __webpack_require__(/*! ./nodeFetcher */ \"../../node_modules/@paciolan/remote-module-loader/dist/lib/nodeFetcher.js\");\nvar isBrowser = typeof window !== \"undefined\" && typeof window.document !== \"undefined\";\n/* istanbul ignore next - difficult to test */\nvar defaultFetcher = isBrowser ? index_1[\"default\"] : nodeFetcher_1[\"default\"];\nvar defaultRequires = function (name) {\n    throw new Error(\"Could not require '\" + name + \"'. The 'requires' function was not provided.\");\n};\nvar createLoadRemoteModule = function (_a) {\n    var _b = _a === void 0 ? {} : _a, requires = _b.requires, fetcher = _b.fetcher;\n    var _requires = requires || defaultRequires;\n    var _fetcher = fetcher || defaultFetcher;\n    return memoize_1[\"default\"](function (url) {\n        return _fetcher(url).then(function (data) {\n            var exports = {};\n            var module = { exports: exports };\n            var func = new Function(\"require\", \"module\", \"exports\", data);\n            func(_requires, module, exports);\n            return module.exports;\n        });\n    });\n};\nexports.createLoadRemoteModule = createLoadRemoteModule;\n//# sourceMappingURL=loadRemoteModule.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-module-loader/dist/lib/loadRemoteModule.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-module-loader/dist/lib/memoize.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-module-loader/dist/lib/memoize.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nexports.__esModule = true;\n/**\n * Memoizes a 1-arity function\n *\n * @param {Function} func Function to memoize\n * @returns {Function} Memoized version of func.\n */\nvar memoize = function (func) {\n    var cache = {};\n    return function (key) {\n        if (key in cache == false) {\n            cache[key] = func(key);\n        }\n        return cache[key];\n    };\n};\nexports.default = memoize;\n//# sourceMappingURL=memoize.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-module-loader/dist/lib/memoize.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-module-loader/dist/lib/nodeFetcher.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-module-loader/dist/lib/nodeFetcher.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nexports.__esModule = true;\nvar http = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'http'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar https = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'https'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n/**\n * Get's a url. Compatible with http and https.\n */\nvar get = function (url) {\n    var args = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        args[_i - 1] = arguments[_i];\n    }\n    if (typeof url !== \"string\") {\n        return {\n            on: function (eventName, callback) {\n                callback(new Error(\"URL must be a string.\"));\n            }\n        };\n    }\n    return url.indexOf(\"https://\") === 0\n        ? https.get.apply(https, __spreadArrays([url], args)) : http.get.apply(http, __spreadArrays([url], args));\n};\n/**\n * Get's a URL and returns a Promise\n */\nvar nodeFetcher = function (url) {\n    return new Promise(function (resolve, reject) {\n        get(url, function (res) {\n            var data = null;\n            // called when a data chunk is received.\n            res.on(\"data\", function (chunk) {\n                if (data === null) {\n                    data = chunk;\n                    return;\n                }\n                data += chunk;\n            });\n            // called when the complete response is received.\n            res.on(\"end\", function () { return resolve(data); });\n        }).on(\"error\", reject);\n    });\n};\nexports.default = nodeFetcher;\n//# sourceMappingURL=nodeFetcher.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-module-loader/dist/lib/nodeFetcher.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-module-loader/dist/lib/xmlHttpRequestFetcher/index.js":
/*!*************************************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-module-loader/dist/lib/xmlHttpRequestFetcher/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nexports.__esModule = true;\nvar readyState_1 = __webpack_require__(/*! ./readyState */ \"../../node_modules/@paciolan/remote-module-loader/dist/lib/xmlHttpRequestFetcher/readyState.js\");\nvar status_1 = __webpack_require__(/*! ./status */ \"../../node_modules/@paciolan/remote-module-loader/dist/lib/xmlHttpRequestFetcher/status.js\");\nvar xmlHttpRequestFetcher = function (url) {\n    return new Promise(function (resolve, reject) {\n        var xhr = new XMLHttpRequest();\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState !== readyState_1.DONE)\n                return;\n            xhr.status === status_1.OK\n                ? resolve(xhr.responseText)\n                : reject(xhr.status + \" \" + xhr.statusText);\n        };\n        xhr.open(\"GET\", url, true);\n        xhr.send();\n    });\n};\nexports.default = xmlHttpRequestFetcher;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-module-loader/dist/lib/xmlHttpRequestFetcher/index.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-module-loader/dist/lib/xmlHttpRequestFetcher/readyState.js":
/*!******************************************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-module-loader/dist/lib/xmlHttpRequestFetcher/readyState.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nexports.__esModule = true;\nexports.DONE = exports.OPENED = exports.UNSENT = void 0;\nexports.UNSENT = 0; //\tClient has been created. open() not called yet.\nexports.OPENED = 1; //\topen() has been called.\n// export const HEADERS_RECEIVED = 2; //\tsend() has been called, and headers and status are available.\n// export const LOADING = 3; //\tDownloading; responseText holds partial data.\nexports.DONE = 4; //\tThe operation is complete.\n//# sourceMappingURL=readyState.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-module-loader/dist/lib/xmlHttpRequestFetcher/readyState.js?");

/***/ }),

/***/ "../../node_modules/@paciolan/remote-module-loader/dist/lib/xmlHttpRequestFetcher/status.js":
/*!**************************************************************************************************!*\
  !*** ../../node_modules/@paciolan/remote-module-loader/dist/lib/xmlHttpRequestFetcher/status.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nexports.__esModule = true;\nexports.InternalServerError = exports.OK = void 0;\n// export const Continue = 100;\n// export const Switchingprotocols = 101;\nexports.OK = 200;\n// export const Created = 201;\n// export const Accepted = 202;\n// export const NonAuthoritativeInformation = 203;\n// export const NoContent = 204;\n// export const ResetContent = 205;\n// export const PartialContent = 206;\n// export const MultipleChoices = 300;\n// export const MovedPermanently = 301;\n// export const Found = 302;\n// export const SeeOther = 303;\n// export const NotModified = 304;\n// export const UseProxy = 305;\n// export const TemporaryRedirect = 307;\n// export const BadRequest = 400;\n// export const Unauthorized = 401;\n// export const PaymentRequired = 402;\n// export const Forbidden = 403;\n// export const NotFound = 404;\n// export const MethodNotAllowed = 405;\n// export const NotAcceptable = 406;\n// export const ProxyAuthenticationRequired = 407;\n// export const RequestTimeout = 408;\n// export const Conflict = 409;\n// export const Gone = 410;\n// export const LengthRequired = 411;\n// export const PreconditionFailed = 412;\n// export const RequestEntityTooLarge = 413;\n// export const RequestURITooLong = 414;\n// export const UnsupportedMediaType = 415;\n// export const RequestedRangeNotSuitable = 416;\n// export const ExpectationFailed = 417;\nexports.InternalServerError = 500;\n// export const NotImplemented = 501;\n// export const BadGateway = 502;\n// export const ServiceUnavailable = 503;\n// export const GatewayTimeout = 504;\n// export const HTTPVersionNotSupported = 505;\n//# sourceMappingURL=status.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@paciolan/remote-module-loader/dist/lib/xmlHttpRequestFetcher/status.js?");

/***/ }),

/***/ "../../node_modules/@prifina/hooks/dist/esm/PrifinaProvider.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/@prifina/hooks/dist/esm/PrifinaProvider.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = exports.usePrifina = exports.PrifinaContext = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\n\nvar _RemoteComponent = __webpack_require__(/*! ./RemoteComponent */ \"../../node_modules/@prifina/hooks/dist/esm/RemoteComponent.js\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n//const short = require(\"short-uuid\");\nvar PrifinaContext = /*#__PURE__*/(0, _react.createContext)({});\nexports.PrifinaContext = PrifinaContext;\n\nvar PrifinaContextProvider = function PrifinaContextProvider(_ref) {\n  var _ref$stage = _ref.stage,\n      stage = _ref$stage === void 0 ? \"dev\" : _ref$stage,\n      children = _ref.children,\n      props = _objectWithoutProperties(_ref, [\"stage\", \"children\"]);\n\n  return /*#__PURE__*/_react[\"default\"].createElement(_RemoteComponent.RemoteComponent, _extends({\n    url: \"https://raw.githubusercontent.com/prifina/prifina-components/main/packages/remote-hooks/dist/main.bundle.js\",\n    Context: PrifinaContext,\n    stage: stage\n  }, props), children);\n};\n/* Hook */\n// ==============================\n\n\nvar usePrifina = function usePrifina() {\n  var prifinaContext = (0, _react.useContext)(PrifinaContext);\n  var prifina = (0, _react.useMemo)(function () {\n    return prifinaContext.current;\n  }, [prifinaContext]);\n  return prifina;\n};\n/*\nexport const usePrifina = ({ Context, appID = \"\", connectors = [] }) => {\n  let contextExists = false;\n  if (typeof Context !== \"undefined\") {\n    Context = createContext(Context);\n    contextExists = true;\n  }\n  const prifinaContext = useContext(Context || PrifinaContext);\n  const stage = \"dev\";\n  //console.log(\"HOOK \", prifinaContext);\n  //console.log(\"HOOK2 \", prifinaContext.current);\n\n  if (appID === \"\" && stage === \"dev\") {\n    appID = short.generate();\n  }\n  const prifina = useMemo(() => {\n    if (\n      prifinaContext === null ||\n      typeof prifinaContext.current === \"undefined\"\n    ) {\n      if (contextExists) {\n        prifinaContext.init.apps[appID] = {\n          connectors: connectors,\n        };\n      } else {\n        throw new Error(\"Invalid Prifina context provider\");\n      }\n      return prifinaContext;\n    } else {\n      //   console.log(\"MEMO 2.0 \", prifinaContext.current.init);\n      if (appID === \"WIDGETS\" || appID == \"APP\") {\n        prifinaContext.current.init = {\n          stage: stage,\n          apps: {},\n        };\n      } else {\n        prifinaContext.current.init.apps[appID] = {\n          connectors: connectors,\n        };\n      }\n      // console.log(\"MEMO 2 \", contextExists, prifinaContext);\n      return prifinaContext.current;\n    }\n  }, [prifinaContext]);\n  return prifina;\n};\n*/\n\n/* @component */\n\n\nexports.usePrifina = usePrifina;\nPrifinaContextProvider.__docgenInfo = {\n  \"description\": \"\",\n  \"methods\": [],\n  \"displayName\": \"PrifinaContextProvider\",\n  \"props\": {\n    \"stage\": {\n      \"defaultValue\": {\n        \"value\": \"\\\"dev\\\"\",\n        \"computed\": false\n      },\n      \"required\": false\n    }\n  }\n};\nvar _default = PrifinaContextProvider;\nexports.default = _default;\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@prifina/hooks/dist/esm/PrifinaProvider.js?");

/***/ }),

/***/ "../../node_modules/@prifina/hooks/dist/esm/RemoteComponent.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/@prifina/hooks/dist/esm/RemoteComponent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.RemoteComponent = void 0;\n\nvar _remoteComponent = __webpack_require__(/*! @paciolan/remote-component */ \"../../node_modules/@paciolan/remote-component/dist/index.js\");\n\nvar _remoteComponentConfig = __webpack_require__(/*! ./remote-component.config.js */ \"../../node_modules/@prifina/hooks/dist/esm/remote-component.config.js\");\n\n//import axios from \"axios\";\n//const fetcher = (url) => axios.get(url).then((request) => request.data);\nvar requires = (0, _remoteComponent.createRequires)(_remoteComponentConfig.resolve);\nvar RemoteComponent = (0, _remoteComponent.createRemoteComponent)({\n  requires: requires\n}); //export const RemoteComponent = createRemoteComponent({ requires, fetcher });\n\nexports.RemoteComponent = RemoteComponent;\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@prifina/hooks/dist/esm/RemoteComponent.js?");

/***/ }),

/***/ "../../node_modules/@prifina/hooks/dist/esm/index.js":
/*!***********************************************************!*\
  !*** ../../node_modules/@prifina/hooks/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"PrifinaProvider\", ({\n  enumerable: true,\n  get: function get() {\n    return _PrifinaProvider[\"default\"];\n  }\n}));\nObject.defineProperty(exports, \"PrifinaContext\", ({\n  enumerable: true,\n  get: function get() {\n    return _PrifinaProvider.PrifinaContext;\n  }\n}));\nObject.defineProperty(exports, \"usePrifina\", ({\n  enumerable: true,\n  get: function get() {\n    return _PrifinaProvider.usePrifina;\n  }\n}));\nObject.defineProperty(exports, \"Op\", ({\n  enumerable: true,\n  get: function get() {\n    return _queryBuilder.Op;\n  }\n}));\nObject.defineProperty(exports, \"_fn\", ({\n  enumerable: true,\n  get: function get() {\n    return _queryBuilder._fn;\n  }\n}));\nObject.defineProperty(exports, \"buildFilter\", ({\n  enumerable: true,\n  get: function get() {\n    return _queryBuilder.buildFilter;\n  }\n}));\n\nvar _PrifinaProvider = _interopRequireWildcard(__webpack_require__(/*! ./PrifinaProvider */ \"../../node_modules/@prifina/hooks/dist/esm/PrifinaProvider.js\"));\n\nvar _queryBuilder = __webpack_require__(/*! ./queryBuilder */ \"../../node_modules/@prifina/hooks/dist/esm/queryBuilder.js\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@prifina/hooks/dist/esm/index.js?");

/***/ }),

/***/ "../../node_modules/@prifina/hooks/dist/esm/queryBuilder.js":
/*!******************************************************************!*\
  !*** ../../node_modules/@prifina/hooks/dist/esm/queryBuilder.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports._fn = _fn;\nexports.buildFilter = buildFilter;\nexports.Op = void 0;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar Op = {\n  eq: Symbol[\"for\"](\"=\"),\n  ne: Symbol[\"for\"](\"!=\"),\n  gte: Symbol[\"for\"](\">=\"),\n  gt: Symbol[\"for\"](\">\"),\n  lte: Symbol[\"for\"](\"<=\"),\n  lt: Symbol[\"for\"](\"<\"),\n  and: Symbol[\"for\"](\" and \"),\n  or: Symbol[\"for\"](\" or \"),\n  not: Symbol[\"for\"](\" not \"),\n  like: Symbol[\"for\"](\" like \"),\n  \"in\": Symbol[\"for\"](\" in \"),\n  between: Symbol[\"for\"](\" between \")\n  /*\n    is: Symbol.for(\"is\"),\n    notIn: Symbol.for(\"notIn\"),\n    \n    notLike: Symbol.for(\"notLike\"),\n    iLike: Symbol.for(\"iLike\"),\n    notILike: Symbol.for(\"notILike\"),\n    startsWith: Symbol.for(\"startsWith\"),\n    endsWith: Symbol.for(\"endsWith\"),\n    substring: Symbol.for(\"substring\"),\n    regexp: Symbol.for(\"regexp\"),\n    notRegexp: Symbol.for(\"notRegexp\"),\n    iRegexp: Symbol.for(\"iRegexp\"),\n    notIRegexp: Symbol.for(\"notIRegexp\"),\n    \n    notBetween: Symbol.for(\"notBetween\"),\n    overlap: Symbol.for(\"overlap\"),\n    contains: Symbol.for(\"contains\"),\n    contained: Symbol.for(\"contained\"),\n    adjacent: Symbol.for(\"adjacent\"),\n    strictLeft: Symbol.for(\"strictLeft\"),\n    strictRight: Symbol.for(\"strictRight\"),\n    noExtendRight: Symbol.for(\"noExtendRight\"),\n    noExtendLeft: Symbol.for(\"noExtendLeft\"),\n    \n    any: Symbol.for(\"any\"),\n    all: Symbol.for(\"all\"),\n    values: Symbol.for(\"values\"),\n    col: Symbol.for(\"col\"),\n    placeholder: Symbol.for(\"placeholder\"),\n    join: Symbol.for(\"join\"),\n    match: Symbol.for(\"match\"),\n    */\n\n};\nexports.Op = Op;\n\nfunction opCheck(str, opKey, fl) {\n  if ([Op[\"in\"], Op.between].indexOf(opKey) > -1) {\n    str += Symbol.keyFor(opKey);\n\n    if (Op[\"in\"] === opKey) {\n      str += \"(\" + fl + \")\";\n    }\n\n    if (Op.between === opKey) {\n      str += fl[0] + \" and \" + fl[1];\n    }\n  } else {\n    if (fl === null) {\n      if (Op.eq === opKey) {\n        str += \" IS NULL\";\n      } else if (Op.ne === opKey) {\n        str += \" IS NOT NULL\";\n      } else {\n        //console.log(\"ONLY eq,ne allowed with null\");\n        throw new Error(\"ONLY eq,ne allowed with null\");\n      }\n    } else {\n      str += Symbol.keyFor(opKey) + fl;\n    }\n  }\n\n  return str;\n}\n\nvar s3DataTypes = [\"bool\", \"int\", \"integer\", \"string\", \"float\", \"decimal\", \"numeric\", \"timestamp\"];\nvar dateParts = [\"year\", \"month\", \"day\", \"hour\", \"minute\", \"second\", \"timezone_hour\", \"timezone_minute\"];\n\nfunction _fn(fnName, fnCol, fnOpts) {\n  if (fnName === \"CAST\") {\n    if (typeof fnOpts !== \"string\" || s3DataTypes.indexOf(fnOpts) === -1) {\n      throw new Error(\"Datatype error, only (\", s3DataTypes.join(\",\") + \") allowed\");\n    } else {\n      return \"CAST(\".concat(fnCol, \" as \").concat(fnOpts, \")\");\n    }\n  }\n\n  if (fnName === \"CHAR_LENGTH\" || fnName === \"CHARACTER_LENGTH\" || fnName === \"UPPER\" || fnName === \"LOWER\") {\n    return \"\".concat(fnName, \"(\").concat(fnCol, \")\");\n  }\n\n  if (fnName === \"TRIM\") {\n    //TRIM ( [[LEADING | TRAILING | BOTH remove_chars] FROM] string )\n    var opt = \"BOTH\";\n\n    if (typeof fnOpts !== \"undefined\" && (typeof fnOpts !== \"string\" || [\"LEADING\", \"TRAILING\"].indexOf(fnOpts) === -1)) {\n      throw new Error(\"Trim option error, only (LEADING,TRAILING or BOTH) allowed \");\n    } else {\n      if (typeof fnOpts !== \"undefined\") {\n        opt = fnOpts;\n      }\n\n      return \"\".concat(fnName, \"(\").concat(opt, \" FROM \").concat(fnCol, \")\");\n    }\n  }\n\n  if (fnName === \"SUBSTRING\") {\n    if (_typeof(fnOpts) !== \"object\" || fnOpts.length === 0) {\n      throw new Error(\"Substring option error, [start, length]\");\n    } //SUBSTRING( string FROM start [ FOR length ] )\n\n\n    if (fnOpts.length === 2) {\n      return \"\".concat(fnName, \"(\").concat(fnCol, \" ,\").concat(fnOpts[0], \",\").concat(fnOpts[1], \")\");\n    } else {\n      return \"\".concat(fnName, \"(\").concat(fnCol, \" ,\").concat(fnOpts[0], \")\");\n    }\n  } // aggregate functions...\n\n\n  if ([\"AVG\", \"MAX\", \"MIN\", \"SUM\", \"COUNT\"].indexOf(fnName) > -1) {\n    return \"\".concat(fnName, \"(\").concat(fnCol, \")\");\n  } // date functions...\n\n\n  if (fnName === \"UTCNOW\") {\n    return \"\".concat(fnName, \"()\");\n  }\n\n  if ([\"TO_TIMESTAMP\"].indexOf(fnName) > -1) {\n    return \"\".concat(fnName, \"(\").concat(fnCol, \")\");\n  }\n\n  if (fnName === \"DATE_ADD\") {\n    if (_typeof(fnOpts) !== \"object\" || fnOpts.length != 2) {\n      throw new Error(\"DATE_ADD option error, [date_part, value]\");\n    }\n\n    return \"\".concat(fnName, \"(\").concat(fnOpts[0], \",\").concat(fnOpts[1], \", \").concat(fnCol, \")\"); //DATE_ADD(year, 5, `2010-01-01T`)\n  }\n\n  if (fnName === \"DATE_DIFF\") {\n    if (_typeof(fnOpts) !== \"object\" || fnOpts.length != 2) {\n      throw new Error(\"DATE_DIFF option error, [date_part, timestamp]\");\n    }\n\n    return \"\".concat(fnName, \"(\").concat(fnOpts[0], \", \").concat(fnCol, \", \").concat(fnOpts[1], \")\"); //DATE_DIFF(year, `2010-01-01T`, `2011-01-01T`)\n  }\n\n  if (fnName === \"TO_STRING\") {\n    //TO_STRING(`1969-07-20T20:18Z`,  'MMMM d, y')\n    if (typeof fnOpts !== \"undefined\" && typeof fnOpts !== \"string\") {\n      throw new Error(\"TO_STRING option error, time format pattern is missing\");\n    }\n\n    return \"\".concat(fnName, \"(\").concat(fnCol, \" ,\").concat(fnOpts, \")\");\n  }\n\n  if (fnName === \"EXTRACT\") {\n    //EXTRACT(YEAR FROM `2010-01-01T`)\n    if (typeof fnOpts !== \"undefined\" && typeof fnOpts !== \"string\" && dateParts.indexOf(fnOpts) === -1) {\n      throw new Error(\"EXTRACT option error, date part value is missing or invalid\");\n    }\n\n    return \"\".concat(fnName, \"(\").concat(fnOpts, \" FROM \").concat(fnCol, \")\");\n  } // short cuts...\n\n\n  if (fnName === \"YEAR\") {\n    return \"EXTRACT(year from TO_TIMESTAMP(\".concat(fnCol, \"))\");\n  }\n\n  if (fnName === \"MONTH\") {\n    return \"EXTRACT(month from TO_TIMESTAMP(\".concat(fnCol, \"))\");\n  }\n\n  if (fnName === \"DAY\") {\n    return \"EXTRACT(day from TO_TIMESTAMP(\".concat(fnCol, \"))\");\n  }\n\n  if (fnName === \"HOUR\") {\n    return \"EXTRACT(hour from TO_TIMESTAMP(\".concat(fnCol, \"))\");\n  }\n}\n\nfunction buildFilter(filter) {\n  var s = \"\";\n  var logicalOperators = Object.getOwnPropertySymbols(filter);\n\n  if (logicalOperators.length > 0) {\n    var logicalOP = logicalOperators[0];\n    Object.keys(filter[logicalOP]).forEach(function (k, ii) {\n      Object.getOwnPropertySymbols(filter[logicalOP][k]).forEach(function (e, i) {\n        //console.log(\"E= \", e, Symbol.keyFor(e), i, ii);\n        if (ii > 0) {\n          s += Symbol.keyFor(logicalOP) + k;\n        } else {\n          s += k;\n        }\n\n        s = opCheck(s, e, filter[logicalOP][k][e]);\n      });\n    });\n  } else {\n    Object.keys(filter).forEach(function (k) {\n      s += k;\n      Object.getOwnPropertySymbols(filter[k]).forEach(function (e, i) {\n        //console.log(e, Symbol.keyFor(e));\n        //console.log(filter[k][e]);\n        if ([Op.and, Op.or, Op.not].indexOf(e) > -1) {\n          var _logicalOP = e;\n          Object.getOwnPropertySymbols(filter[k][e]).forEach(function (ee, ii) {\n            //console.log(ee);\n            if (ii > 0) {\n              s += Symbol.keyFor(_logicalOP) + k;\n            }\n\n            s = opCheck(s, ee, filter[k][e][ee]);\n          });\n        } else if (i > 0) {\n          //console.log(\"ERROR 1\");\n          throw new Error(\"Logical opertor error\");\n        } else {\n          s = opCheck(s, e, filter[k][e]);\n        } //s += Symbol.keyFor(e) + filter[k][e];\n\n      }); //console.log(Object.getOwnPropertySymbols(filter));\n\n      /*\n      Object.keys(filter[k]).forEach((o) => {\n      console.log(\"OP \", o);\n      });\n      */\n    });\n  }\n\n  return s;\n}\n/*\n  const filter = {\n    rank: {\n      [Op.or]: {\n        [Op.lt]: 1000,\n        [Op.eq]: null,\n      },\n    },\n  };\n  */\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@prifina/hooks/dist/esm/queryBuilder.js?");

/***/ }),

/***/ "../../node_modules/@prifina/hooks/dist/esm/remote-component.config.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@prifina/hooks/dist/esm/remote-component.config.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/**\n * Dependencies for Remote Components\n */\nmodule.exports = {\n  resolve: {\n    react: __webpack_require__(/*! react */ \"../../node_modules/react/index.js\")\n  }\n};\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/@prifina/hooks/dist/esm/remote-component.config.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ \"./src/Container.js\");\n\n\n\nvar App = function App(props) {return /*#__PURE__*/(\n    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"App\" }, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Container__WEBPACK_IMPORTED_MODULE_1__.Container, null)));};\n\n//# sourceURL=webpack://@prifina-widgets/chat/./src/App.js?");

/***/ }),

/***/ "./src/Container.js":
/*!**************************!*\
  !*** ./src/Container.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"../../node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"../../node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"../../node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"../../node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"../../node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"../../node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _SendMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SendMessage */ \"./src/SendMessage.js\");\n/* harmony import */ var _MessagesList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MessagesList */ \"./src/MessagesList.js\");\n/* harmony import */ var _prifina_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @prifina/hooks */ \"../../node_modules/@prifina/hooks/dist/esm/index.js\");\n /* global localStorage */\n\n\n\n\n\n\n\n\nvar StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.div.withConfig({ displayName: \"Container__StyledWrapper\", componentId: \"cg8pc3-0\" })([\"width:400px;display:flex;justify-content:flex-end;flex-direction:row;\"]);\n\n\n\n\n\n\nvar StyledClose = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.div.withConfig({ displayName: \"Container__StyledClose\", componentId: \"cg8pc3-1\" })([\"width:32px;height:32px;opacity:0.3;&:hover{opacity:1;cursor:pointer;}::before,::after{position:absolute;top:6px;content:\\\" \\\";height:33px;width:2px;background-color:#333;}::before{transform:rotate(45deg);}::after{transform:rotate(-45deg);}\"]);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.div.withConfig({ displayName: \"Container__StyledBox\", componentId: \"cg8pc3-2\" })([\"width:400px;height:600px;position:relative;top:0px;\"]);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar MessageBox = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.div.withConfig({ displayName: \"Container__MessageBox\", componentId: \"cg8pc3-3\" })([\"padding:5px;overflow-y:scroll;overflow-x:hidden;height:calc(600px - 79px);\"]);\n\n\n\n\n\n\nvar AddressBook = styled_components__WEBPACK_IMPORTED_MODULE_14__.default.div.withConfig({ displayName: \"Container__AddressBook\", componentId: \"cg8pc3-4\" })([\"width:400px;height:600px;overflow-y:scroll;overflow-x:hidden;\"]);\n\n\n\n\n\n\n\nvar appID = \"chatWidget\";\n\nvar Container = function Container() {\n  // init hook and get provider api services...\n  var _usePrifina =\n\n\n\n\n\n\n  (0,_prifina_hooks__WEBPACK_IMPORTED_MODULE_13__.usePrifina)(),Prifina = _usePrifina.Prifina,registerHooks = _usePrifina.registerHooks,onUpdate = _usePrifina.onUpdate,currentUser = _usePrifina.currentUser,subscriptionTest = _usePrifina.subscriptionTest,unSubscribe = _usePrifina.unSubscribe;\n\n  // init provider api with your appID\n  var prifina = new Prifina({ appId: appID });var _useState =\n\n  (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(true),_useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState, 2),showContacts = _useState2[0],setShowContacts = _useState2[1];var _useState3 =\n  (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]),_useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState3, 2),messages = _useState4[0],setMessages = _useState4[1];var _useState5 =\n  (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]),_useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState5, 2),contacts = _useState6[0],setContacts = _useState6[1];\n\n  //const [selectedContact, setSelectedContact] = useState(-1);\n  var selectedContact = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)(-1);\n  var onUpdateRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)();\n  var messageCount = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)({});\n\n  var updateTest = function updateTest(data) {\n    console.log(\"UPDATE TEST \", data, Object.keys(data), selectedContact);\n    if (data.hasOwnProperty(\"data\")) {\n      // subscription update...\n      console.log(\"UPDATE TEST PAYLOAD FOUND \", Object.keys(data.data));\n      if (data.data.hasOwnProperty(\"addMessage\")) {\n        console.log(\n        \"UPDATE TEST ADD MESSAGE FOUND \",\n        Object.keys(data.data.addMessage));\n\n        if (selectedContact.current === -1) {\n          console.log(\"UPDATE TEST SENDER FOUND \", data.data.addMessage.sender);\n          messageCount.current[data.data.addMessage.sender]++;\n\n          setMessages(function (prev) {return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prev), [data.data.addMessage]);});\n        } else {\n          // can change status to 1===read\n          var msg = data.data.addMessage;\n          console.log(\"UPDATE MESSAGE STATUS \", msg);\n          prifina.core.mutations.\n          updateMessageStatus({\n            createdAt: msg.created_at,\n            sender: msg.sender,\n            messageId: msg.messageId,\n            status: 1 }).\n\n          then(function () {\n            setMessages(function (prev) {return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prev), [msg]);});\n          });\n        }\n        console.log(\"MESSAGE COUNT \", messageCount.current);\n      }\n    } else {\n      setMessages(function (prev) {return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prev), [data]);});\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {var addressBook, contactList, _contactList;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n            onUpdateRef.current = onUpdate(appID, updateTest);_context.next = 3;return (\n              prifina.core.queries.getAddressBook());case 3:addressBook = _context.sent;\n            console.log(\"ADDRESSBOOK \", addressBook);\n\n            if (typeof addressBook.data.getUserAddressBook.addressBook === \"string\") {\n              contactList = JSON.parse(\n              addressBook.data.getUserAddressBook.addressBook);\n\n              contactList.forEach(function (c) {\n                messageCount.current[c.uuid] = 0;\n              });\n              setContacts(contactList);\n            } else {\n              _contactList = addressBook.data.getUserAddressBook;\n              _contactList.forEach(function (c) {\n                messageCount.current[c.uuid] = 0;\n              });\n              setContacts(_contactList);\n            }\n\n            //console.log(addressBook);\n            //setContacts(contactList);\n            //\n            _context.next = 8;return prifina.core.subscriptions.addMessage(onUpdateRef.current);case 8:\n\n            console.log(prifina);case 9:case \"end\":return _context.stop();}}}, _callee);})),\n  []);\n\n  var contactClick = (0,react__WEBPACK_IMPORTED_MODULE_10__.useCallback)(\n  function (i) {\n    console.log(\"CLICK \", i, contacts, onUpdateRef);\n    // if messages>0 .... update status to 1===read\n    //setSelectedContact(i);\n    selectedContact.current = i;\n    setShowContacts(false);\n    /*\n    prifina.core.subscriptions\n      .addMessage(onUpdateRef.current)\n      .then((subRes) => {\n        console.log(\"SUB RESULT \", subRes);\n      });\n      */\n    /*\n    subscriptionTest(appID, {\n      addMessage: [\n        {\n          messageId: 1,\n          body: \"Hello\",\n          receiver: currentUser.uuid,\n          sender: contacts[i].uuid,\n        },\n        {\n          messageId: 3,\n          body: \"Something\",\n          receiver: currentUser.uuid,\n          sender: contacts[i].uuid,\n        },\n        {\n          messageId: 2,\n          body: \"Testing\",\n          receiver: currentUser.uuid,\n          sender: contacts[i].uuid,\n        },\n      ],\n    });\n    */\n  },\n  [contacts]);\n\n\n  var sendMessage = /*#__PURE__*/function () {var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(msg) {return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n              console.log(\"MSG \", msg);\n              console.log(\"CONTACT \", contacts[selectedContact.current].name);_context2.next = 4;return (\n                prifina.core.mutations.createMessage({\n                  body: msg,\n                  sender: currentUser.uuid,\n                  receiver: contacts[selectedContact.current].uuid }));case 4:\n\n              setMessages(function (prev) {return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(\n                prev), [\n                {\n                  body: msg,\n                  sender: currentUser.uuid,\n                  receiver: contacts[selectedContact.current].uuid }]);});\n\n\n\n              //setMessages({ body: msg, handle: currentUser.name, username: username });\n            case 5:case \"end\":return _context2.stop();}}}, _callee2);}));return function sendMessage(_x) {return _ref2.apply(this, arguments);};}();\n  return /*#__PURE__*/(\n    react__WEBPACK_IMPORTED_MODULE_10__.createElement(react__WEBPACK_IMPORTED_MODULE_10__.Fragment, null,\n    showContacts && contacts.length > 0 && /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_10__.createElement(AddressBook, null, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_10__.createElement(\"h3\", { style: { textAlign: \"center\" } }, \"Contacts\"), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_10__.createElement(\"hr\", null), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_10__.createElement(\"ul\", null,\n    contacts.map(function (c, i) {\n      return /*#__PURE__*/(\n        react__WEBPACK_IMPORTED_MODULE_10__.createElement(\"li\", {\n          style: { cursor: \"pointer\" },\n          onClick: function onClick() {return contactClick(i);},\n          key: \"contact-\" + i },\n\n        c.name, \" \",\n        Object.keys(messageCount.current).length > 0 &&\n        messageCount.current[c.uuid] > 0 && /*#__PURE__*/\n        react__WEBPACK_IMPORTED_MODULE_10__.createElement(\"span\", { style: { paddingLeft: \"5px\" } }, \"(\", /*#__PURE__*/\n\n        react__WEBPACK_IMPORTED_MODULE_10__.createElement(\"span\", { style: { color: \"red\" } },\n        messageCount.current[c.uuid]), \")\")));\n\n\n\n\n\n\n    }))),\n\n\n\n    !showContacts && /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_10__.createElement(StyledBox, null, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_10__.createElement(StyledWrapper, null, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_10__.createElement(StyledClose, {\n      onClick: function onClick() {\n        //setSelectedContact(-1);\n        selectedContact.current = -1;\n        setShowContacts(true);\n        setMessages([]);\n        //unSubscribe(appID, onUpdateRef, \"addMessage\");\n        contacts.forEach(function (c) {\n          messageCount.current[c.uuid] = 0;\n        });\n      } })), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_10__.createElement(MessageBox, null,\n    messages.length > 0 && /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_10__.createElement(_MessagesList__WEBPACK_IMPORTED_MODULE_12__.default, {\n      messages: messages,\n      sender: currentUser.uuid,\n      senderName: currentUser.name,\n      receiverName: contacts[selectedContact.current].name })), /*#__PURE__*/\n\n\n\n    react__WEBPACK_IMPORTED_MODULE_10__.createElement(_SendMessage__WEBPACK_IMPORTED_MODULE_11__.default, { onCreate: sendMessage }))));\n\n\n\n\n};\n\n//# sourceURL=webpack://@prifina-widgets/chat/./src/Container.js?");

/***/ }),

/***/ "./src/MessagesList.js":
/*!*****************************!*\
  !*** ./src/MessagesList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"../../node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react_chat_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chat-ui */ \"../../node_modules/react-chat-ui/lib/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {var messages = _ref.messages,sender = _ref.sender,senderName = _ref.senderName,receiverName = _ref.receiverName;return /*#__PURE__*/(\n    react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_chat_ui__WEBPACK_IMPORTED_MODULE_2__.ChatFeed, {\n      maxHeight: window.innerHeight - 80,\n      messages: messages.map(\n      function (msg) {return (\n          new react_chat_ui__WEBPACK_IMPORTED_MODULE_2__.Message({\n            id: msg.sender === sender ? 0 : msg.messageId,\n            senderName: msg.sender === sender ? senderName : receiverName,\n            message: msg.body }));}),\n\n\n      isTyping: false,\n      showSenderName: true,\n      bubblesCentered: false }));});\n\n//# sourceURL=webpack://@prifina-widgets/chat/./src/MessagesList.js?");

/***/ }),

/***/ "./src/SendMessage.js":
/*!****************************!*\
  !*** ./src/SendMessage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {var onCreate = _ref.onCreate;var _React$useState =\n  react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\"),_React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),msg = _React$useState2[0],setMsg = _React$useState2[1];\n\n  return /*#__PURE__*/(\n    react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      style: {\n        position: \"absolute\",\n        bottom: 0,\n        left: 0,\n        right: \"60px\" } }, /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"input\", {\n      name: \"msg\",\n      placeholder: \"your message\",\n      onChange: function onChange(e) {return setMsg(e.target.value);},\n      defaultValue: msg,\n      onKeyDown: function onKeyDown(e) {\n        if (e.key === \"Enter\") {\n          console.log(\"SEND MESSAGE\", msg);\n          //onCreate({ body: this.state.body });\n          onCreate(msg);\n        }\n      },\n      className: \"message-input\",\n      style: {\n        border: \"none\",\n        borderTop: \"1px solid #ddd\",\n        fontSize: \"16px\",\n        padding: \"10px\",\n        width: \"100%\" } })));\n\n\n\n\n});\n\n//# sourceURL=webpack://@prifina-widgets/chat/./src/SendMessage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/**\n * Entrypoint of the Remote Component.\n */\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_App__WEBPACK_IMPORTED_MODULE_0__.App);\n\n//# sourceURL=webpack://@prifina-widgets/chat/./src/index.js?");

/***/ }),

/***/ "./src/webpack-dev-server.js":
/*!***********************************!*\
  !*** ./src/webpack-dev-server.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../../node_modules/react-dom/index.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/**\n * webpack-dev-server entry point for debugging.\n * This file is not bundled with the library during the build process.\n */\n\n\n\n//import { PrifinaProvider } from \"@prifina/hooks\";\n\n\n\nvar node = document.getElementById(\"app\");\n\nvar App = function App(props) {return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_2__.default, props);};\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, { msg: \"Hello, Tero\" }), node);\n\n//# sourceURL=webpack://@prifina-widgets/chat/./src/webpack-dev-server.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/a-function.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/internals/a-function.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/an-object.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/an-object.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/array-for-each.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-for-each.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"../../node_modules/core-js/internals/array-iteration.js\").forEach;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"../../node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\nmodule.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/array-for-each.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/array-includes.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-includes.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"../../node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare -- NaN check\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare -- NaN check\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/array-iteration.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-iteration.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"../../node_modules/core-js/internals/function-bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../../node_modules/core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../node_modules/core-js/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../../node_modules/core-js/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var IS_FILTER_OUT = TYPE == 7;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else switch (TYPE) {\n          case 4: return false;             // every\n          case 7: push.call(target, value); // filterOut\n        }\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.es/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.es/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.es/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.es/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.es/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.es/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.es/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6),\n  // `Array.prototype.filterOut` method\n  // https://github.com/tc39/proposal-array-filtering\n  filterOut: createMethod(7)\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/array-iteration.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/array-method-has-species-support.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-method-has-species-support.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"../../node_modules/core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/array-method-is-strict.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-method-is-strict.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/array-method-is-strict.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/array-species-create.js":
/*!********************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-species-create.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../node_modules/core-js/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/classof-raw.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/classof-raw.js ***!
  \***********************************************************/
/***/ ((module) => {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/copy-constructor-properties.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"../../node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/create-property-descriptor.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/core-js/internals/create-property-descriptor.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/create-property.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/internals/create-property.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../node_modules/core-js/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"../../node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/create-property.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/descriptors.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/descriptors.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../node_modules/core-js/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/document-create-element.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/core-js/internals/document-create-element.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/dom-iterables.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/internals/dom-iterables.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/engine-is-node.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/engine-is-node.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../node_modules/core-js/internals/classof-raw.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\n\nmodule.exports = classof(global.process) == 'process';\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/engine-is-node.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/engine-user-agent.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/engine-user-agent.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/engine-v8-version.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/engine-v8-version.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"../../node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/enum-bug-keys.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/internals/enum-bug-keys.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/export.js":
/*!******************************************************!*\
  !*** ../../node_modules/core-js/internals/export.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"../../node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"../../node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../../node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"../../node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"../../node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/fails.js":
/*!*****************************************************!*\
  !*** ../../node_modules/core-js/internals/fails.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/function-bind-context.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/core-js/internals/function-bind-context.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"../../node_modules/core-js/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/get-built-in.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/internals/get-built-in.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! ../internals/path */ \"../../node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/global.js":
/*!******************************************************!*\
  !*** ../../node_modules/core-js/internals/global.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  /* global globalThis -- safe */\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/has.js":
/*!***************************************************!*\
  !*** ../../node_modules/core-js/internals/has.js ***!
  \***************************************************/
/***/ ((module) => {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/hidden-keys.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/hidden-keys.js ***!
  \***********************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/ie8-dom-define.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/ie8-dom-define.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"../../node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/indexed-object.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/indexed-object.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/inspect-source.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/inspect-source.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"../../node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/internal-state.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/internal-state.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"../../node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"../../node_modules/core-js/internals/has.js\");\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"../../node_modules/core-js/internals/shared-store.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"../../node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = shared.state || (shared.state = new WeakMap());\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    metadata.facade = it;\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/is-array.js":
/*!********************************************************!*\
  !*** ../../node_modules/core-js/internals/is-array.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"../../node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/is-forced.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/is-forced.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"../../node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/is-object.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/is-object.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/is-pure.js":
/*!*******************************************************!*\
  !*** ../../node_modules/core-js/internals/is-pure.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/native-symbol.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/internals/native-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ \"../../node_modules/core-js/internals/engine-is-node.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"../../node_modules/core-js/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  /* global Symbol -- required for testing */\n  return !Symbol.sham &&\n    // Chrome 38 Symbol has incorrect toString conversion\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);\n});\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/native-weak-map.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/internals/native-weak-map.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"../../node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/object-define-property.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-define-property.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"../../node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../node_modules/core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"../../node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"../../node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"../../node_modules/core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../node_modules/core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"../../node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/object-get-own-property-names.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"../../node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../../node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/object-keys-internal.js":
/*!********************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-keys-internal.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ../internals/has */ \"../../node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"../../node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"../../node_modules/core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"../../node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/object-keys.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/object-keys.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"../../node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"../../node_modules/core-js/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/object-keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/own-keys.js":
/*!********************************************************!*\
  !*** ../../node_modules/core-js/internals/own-keys.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"../../node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"../../node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"../../node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"../../node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/path.js":
/*!****************************************************!*\
  !*** ../../node_modules/core-js/internals/path.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/redefine.js":
/*!********************************************************!*\
  !*** ../../node_modules/core-js/internals/redefine.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../../node_modules/core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"../../node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"../../node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  var state;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) {\n      createNonEnumerableProperty(value, 'name', key);\n    }\n    state = enforceInternalState(value);\n    if (!state.source) {\n      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');\n    }\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/require-object-coercible.js":
/*!************************************************************************!*\
  !*** ../../node_modules/core-js/internals/require-object-coercible.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/set-global.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/internals/set-global.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/shared-key.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/internals/shared-key.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"../../node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/shared-store.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/internals/shared-store.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"../../node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/shared.js":
/*!******************************************************!*\
  !*** ../../node_modules/core-js/internals/shared.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"../../node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"../../node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.9.1',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/to-absolute-index.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/to-absolute-index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/to-indexed-object.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/to-indexed-object.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"../../node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/to-integer.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/internals/to-integer.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.es/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/to-length.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/to-length.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"../../node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/to-object.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/to-object.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"../../node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/to-primitive.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/internals/to-primitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"../../node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/uid.js":
/*!***************************************************!*\
  !*** ../../node_modules/core-js/internals/uid.js ***!
  \***************************************************/
/***/ ((module) => {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../../node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  /* global Symbol -- safe */\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "../../node_modules/core-js/internals/well-known-symbol.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/well-known-symbol.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"../../node_modules/core-js/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"../../node_modules/core-js/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"../../node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"../../node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"../../node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) {\n      WellKnownSymbolsStore[name] = Symbol[name];\n    } else {\n      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n    }\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.concat.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.concat.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../node_modules/core-js/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"../../node_modules/core-js/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"../../node_modules/core-js/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"../../node_modules/core-js/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"../../node_modules/core-js/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"../../node_modules/core-js/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../../node_modules/core-js/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"../../node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"../../node_modules/core-js/internals/engine-v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.es/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  // eslint-disable-next-line no-unused-vars -- required for `.length`\n  concat: function concat(arg) {\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/modules/es.array.concat.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.for-each.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.for-each.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../node_modules/core-js/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"../../node_modules/core-js/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/modules/es.array.for-each.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.map.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.map.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"../../node_modules/core-js/internals/export.js\");\nvar $map = __webpack_require__(/*! ../internals/array-iteration */ \"../../node_modules/core-js/internals/array-iteration.js\").map;\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"../../node_modules/core-js/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');\n\n// `Array.prototype.map` method\n// https://tc39.es/ecma262/#sec-array.prototype.map\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/modules/es.array.map.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es.function.name.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.function.name.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"../../node_modules/core-js/internals/descriptors.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"../../node_modules/core-js/internals/object-define-property.js\").f;\n\nvar FunctionPrototype = Function.prototype;\nvar FunctionPrototypeToString = FunctionPrototype.toString;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// Function instances `.name` property\n// https://tc39.es/ecma262/#sec-function-instances-name\nif (DESCRIPTORS && !(NAME in FunctionPrototype)) {\n  defineProperty(FunctionPrototype, NAME, {\n    configurable: true,\n    get: function () {\n      try {\n        return FunctionPrototypeToString.call(this).match(nameRE)[1];\n      } catch (error) {\n        return '';\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/modules/es.function.name.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/es.object.keys.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.object.keys.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"../../node_modules/core-js/internals/export.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"../../node_modules/core-js/internals/to-object.js\");\nvar nativeKeys = __webpack_require__(/*! ../internals/object-keys */ \"../../node_modules/core-js/internals/object-keys.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"../../node_modules/core-js/internals/fails.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {\n  keys: function keys(it) {\n    return nativeKeys(toObject(it));\n  }\n});\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/modules/es.object.keys.js?");

/***/ }),

/***/ "../../node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"../../node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"../../node_modules/core-js/internals/dom-iterables.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"../../node_modules/core-js/internals/array-for-each.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"../../node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar reactIs = __webpack_require__(/*! react-is */ \"../../node_modules/react-is/index.js\");\n\n/**\n * Copyright 2015, Yahoo! Inc.\n * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.\n */\nvar REACT_STATICS = {\n  childContextTypes: true,\n  contextType: true,\n  contextTypes: true,\n  defaultProps: true,\n  displayName: true,\n  getDefaultProps: true,\n  getDerivedStateFromError: true,\n  getDerivedStateFromProps: true,\n  mixins: true,\n  propTypes: true,\n  type: true\n};\nvar KNOWN_STATICS = {\n  name: true,\n  length: true,\n  prototype: true,\n  caller: true,\n  callee: true,\n  arguments: true,\n  arity: true\n};\nvar FORWARD_REF_STATICS = {\n  '$$typeof': true,\n  render: true,\n  defaultProps: true,\n  displayName: true,\n  propTypes: true\n};\nvar MEMO_STATICS = {\n  '$$typeof': true,\n  compare: true,\n  defaultProps: true,\n  displayName: true,\n  propTypes: true,\n  type: true\n};\nvar TYPE_STATICS = {};\nTYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;\nTYPE_STATICS[reactIs.Memo] = MEMO_STATICS;\n\nfunction getStatics(component) {\n  // React v16.11 and below\n  if (reactIs.isMemo(component)) {\n    return MEMO_STATICS;\n  } // React v16.12 and above\n\n\n  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;\n}\n\nvar defineProperty = Object.defineProperty;\nvar getOwnPropertyNames = Object.getOwnPropertyNames;\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar getPrototypeOf = Object.getPrototypeOf;\nvar objectPrototype = Object.prototype;\nfunction hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {\n  if (typeof sourceComponent !== 'string') {\n    // don't hoist over string (html) components\n    if (objectPrototype) {\n      var inheritedComponent = getPrototypeOf(sourceComponent);\n\n      if (inheritedComponent && inheritedComponent !== objectPrototype) {\n        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);\n      }\n    }\n\n    var keys = getOwnPropertyNames(sourceComponent);\n\n    if (getOwnPropertySymbols) {\n      keys = keys.concat(getOwnPropertySymbols(sourceComponent));\n    }\n\n    var targetStatics = getStatics(targetComponent);\n    var sourceStatics = getStatics(sourceComponent);\n\n    for (var i = 0; i < keys.length; ++i) {\n      var key = keys[i];\n\n      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {\n        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);\n\n        try {\n          // Avoid failures from read-only properties\n          defineProperty(targetComponent, key, descriptor);\n        } catch (e) {}\n      }\n    }\n  }\n\n  return targetComponent;\n}\n\nmodule.exports = hoistNonReactStatics;\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js?");

/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!*************************************************!*\
  !*** ../../node_modules/object-assign/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/object-assign/index.js?");

/***/ }),

/***/ "../../node_modules/react-chat-ui/lib/BubbleGroup/index.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/react-chat-ui/lib/BubbleGroup/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar React = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\nvar ChatBubble_1 = __webpack_require__(/*! ../ChatBubble */ \"../../node_modules/react-chat-ui/lib/ChatBubble/index.js\");\nvar styles_1 = __webpack_require__(/*! ./styles */ \"../../node_modules/react-chat-ui/lib/BubbleGroup/styles.js\");\nvar BubbleGroup = (function (_super) {\n    __extends(BubbleGroup, _super);\n    function BubbleGroup(props) {\n        return _super.call(this, props) || this;\n    }\n    BubbleGroup.prototype.renderGroup = function (messages, id) {\n        var _a = this.props, bubblesCentered = _a.bubblesCentered, bubbleStyles = _a.bubbleStyles, showSenderName = _a.showSenderName, chatBubble = _a.chatBubble, senderName = _a.senderName;\n        var ChatBubble = chatBubble || ChatBubble_1.default;\n        var sampleMessage = messages[0];\n        var messageNodes = messages.map(function (message, i) {\n            return (React.createElement(ChatBubble, { key: i, message: message, bubblesCentered: bubblesCentered, bubbleStyles: bubbleStyles }));\n        });\n        return (React.createElement(\"div\", { style: styles_1.default.chatbubbleWrapper },\n            showSenderName &&\n                ((senderName || sampleMessage.senderName) !== '' &&\n                    (sampleMessage.id !== 0 && (React.createElement(\"h5\", { style: styles_1.default.bubbleGroupHeader }, senderName || sampleMessage.senderName)))),\n            messageNodes));\n    };\n    BubbleGroup.prototype.render = function () {\n        var _a = this.props, messages = _a.messages, id = _a.id;\n        return this.renderGroup(messages, id);\n    };\n    return BubbleGroup;\n}(React.Component));\nexports.default = BubbleGroup;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react-chat-ui/lib/BubbleGroup/index.js?");

/***/ }),

/***/ "../../node_modules/react-chat-ui/lib/BubbleGroup/styles.js":
/*!******************************************************************!*\
  !*** ../../node_modules/react-chat-ui/lib/BubbleGroup/styles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = {\n    chatbubbleWrapper: {\n        marginTop: 10,\n        marginBottom: 10,\n        overflow: 'auto',\n        position: 'relative',\n    },\n    bubbleGroupHeader: {\n        margin: 0,\n        fontSize: 14,\n        fontWeight: '400',\n        color: '#999',\n    },\n};\n//# sourceMappingURL=styles.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react-chat-ui/lib/BubbleGroup/styles.js?");

/***/ }),

/***/ "../../node_modules/react-chat-ui/lib/ChatBubble/index.js":
/*!****************************************************************!*\
  !*** ../../node_modules/react-chat-ui/lib/ChatBubble/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar React = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\nvar styles_1 = __webpack_require__(/*! ./styles */ \"../../node_modules/react-chat-ui/lib/ChatBubble/styles.js\");\nvar defaultBubbleStyles = {\n    userBubble: {},\n    chatbubble: {},\n    text: {},\n};\nvar ChatBubble = (function (_super) {\n    __extends(ChatBubble, _super);\n    function ChatBubble(props) {\n        return _super.call(this, props) || this;\n    }\n    ChatBubble.prototype.render = function () {\n        var bubblesCentered = this.props.bubblesCentered;\n        var bubbleStyles = this.props.bubbleStyles;\n        bubbleStyles = bubbleStyles || defaultBubbleStyles;\n        var userBubble = bubbleStyles.userBubble, chatbubble = bubbleStyles.chatbubble, text = bubbleStyles.text;\n        var chatBubbleStyles = this.props.message.id === 0\n            ? __assign({}, styles_1.default.chatbubble, bubblesCentered ? {} : styles_1.default.chatbubbleOrientationNormal, chatbubble, userBubble) : __assign({}, styles_1.default.chatbubble, styles_1.default.recipientChatbubble, bubblesCentered\n            ? {}\n            : styles_1.default.recipientChatbubbleOrientationNormal, userBubble, chatbubble);\n        return (React.createElement(\"div\", { style: __assign({}, styles_1.default.chatbubbleWrapper) },\n            React.createElement(\"div\", { style: chatBubbleStyles },\n                React.createElement(\"p\", { style: __assign({}, styles_1.default.p, text) }, this.props.message.message))));\n    };\n    return ChatBubble;\n}(React.Component));\nexports.default = ChatBubble;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react-chat-ui/lib/ChatBubble/index.js?");

/***/ }),

/***/ "../../node_modules/react-chat-ui/lib/ChatBubble/styles.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/react-chat-ui/lib/ChatBubble/styles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = {\n    chatbubbleWrapper: {\n        overflow: 'auto',\n    },\n    chatbubble: {\n        backgroundColor: '#0084FF',\n        borderRadius: 20,\n        marginTop: 1,\n        marginRight: 'auto',\n        marginBottom: 1,\n        marginLeft: 'auto',\n        maxWidth: 425,\n        paddingTop: 8,\n        paddingBottom: 8,\n        paddingLeft: 14,\n        paddingRight: 14,\n        width: '-webkit-fit-content',\n    },\n    chatbubbleOrientationNormal: {\n        float: 'right',\n    },\n    recipientChatbubble: {\n        backgroundColor: '#ccc',\n    },\n    recipientChatbubbleOrientationNormal: {\n        float: 'left',\n    },\n    p: {\n        color: '#FFFFFF',\n        fontSize: 16,\n        fontWeight: '300',\n        margin: 0,\n    },\n};\n//# sourceMappingURL=styles.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react-chat-ui/lib/ChatBubble/styles.js?");

/***/ }),

/***/ "../../node_modules/react-chat-ui/lib/ChatFeed/index.js":
/*!**************************************************************!*\
  !*** ../../node_modules/react-chat-ui/lib/ChatFeed/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar React = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\nvar BubbleGroup_1 = __webpack_require__(/*! ../BubbleGroup */ \"../../node_modules/react-chat-ui/lib/BubbleGroup/index.js\");\nvar ChatBubble_1 = __webpack_require__(/*! ../ChatBubble */ \"../../node_modules/react-chat-ui/lib/ChatBubble/index.js\");\nvar ChatInput_1 = __webpack_require__(/*! ../ChatInput */ \"../../node_modules/react-chat-ui/lib/ChatInput/index.js\");\nvar Message_1 = __webpack_require__(/*! ../Message */ \"../../node_modules/react-chat-ui/lib/Message/index.js\");\nvar styles_1 = __webpack_require__(/*! ./styles */ \"../../node_modules/react-chat-ui/lib/ChatFeed/styles.js\");\nvar ChatFeed = (function (_super) {\n    __extends(ChatFeed, _super);\n    function ChatFeed(props) {\n        return _super.call(this, props) || this;\n    }\n    ChatFeed.prototype.componentDidMount = function () {\n        this.scrollToBottom();\n    };\n    ChatFeed.prototype.componentDidUpdate = function () {\n        this.scrollToBottom();\n    };\n    ChatFeed.prototype.scrollToBottom = function () {\n        var scrollHeight = this.chat.scrollHeight;\n        var height = this.chat.clientHeight;\n        var maxScrollTop = scrollHeight - height;\n        this.chat.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;\n    };\n    ChatFeed.prototype.renderMessages = function (messages) {\n        var _a = this.props, isTyping = _a.isTyping, bubbleStyles = _a.bubbleStyles, chatBubble = _a.chatBubble, showSenderName = _a.showSenderName;\n        var ChatBubble = chatBubble || ChatBubble_1.default;\n        var group = [];\n        var messageNodes = messages.map(function (message, index) {\n            group.push(message);\n            if (index === messages.length - 1 || messages[index + 1].id !== message.id) {\n                var messageGroup = group;\n                group = [];\n                return (React.createElement(BubbleGroup_1.default, { key: index, messages: messageGroup, id: message.id, showSenderName: showSenderName, chatBubble: ChatBubble, bubbleStyles: bubbleStyles }));\n            }\n            return null;\n        });\n        if (isTyping) {\n            messageNodes.push(React.createElement(\"div\", { key: \"isTyping\", style: __assign({}, styles_1.default.chatbubbleWrapper) },\n                React.createElement(ChatBubble, { message: new Message_1.default({ id: 1, message: '...', senderName: '' }), bubbleStyles: bubbleStyles })));\n        }\n        return messageNodes;\n    };\n    ChatFeed.prototype.render = function () {\n        var _this = this;\n        var inputField = this.props.hasInputField && React.createElement(ChatInput_1.default, null);\n        var maxHeight = this.props.maxHeight;\n        return (React.createElement(\"div\", { id: \"chat-panel\", style: styles_1.default.chatPanel },\n            React.createElement(\"div\", { ref: function (c) {\n                    _this.chat = c;\n                }, className: \"chat-history\", style: __assign({}, styles_1.default.chatHistory, { maxHeight: maxHeight }) },\n                React.createElement(\"div\", { className: \"chat-messages\" }, this.renderMessages(this.props.messages))),\n            inputField));\n    };\n    return ChatFeed;\n}(React.Component));\nexports.default = ChatFeed;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react-chat-ui/lib/ChatFeed/index.js?");

/***/ }),

/***/ "../../node_modules/react-chat-ui/lib/ChatFeed/styles.js":
/*!***************************************************************!*\
  !*** ../../node_modules/react-chat-ui/lib/ChatFeed/styles.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = {\n    chatPanel: {\n        display: 'flex',\n        flexDirection: 'column',\n        flex: 1,\n        overflow: 'hidden',\n    },\n    chatHistory: { overflow: 'auto' },\n    chatbubbleWrapper: {\n        marginTop: 10,\n        marginBottom: 10,\n        overflow: 'auto',\n        position: 'relative',\n    },\n    img: {\n        borderRadius: 100,\n        bottom: 0,\n        left: 0,\n        position: 'absolute',\n        width: 36,\n        zIndex: 100,\n    },\n};\n//# sourceMappingURL=styles.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react-chat-ui/lib/ChatFeed/styles.js?");

/***/ }),

/***/ "../../node_modules/react-chat-ui/lib/ChatInput/index.js":
/*!***************************************************************!*\
  !*** ../../node_modules/react-chat-ui/lib/ChatInput/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\nvar styles = {\n    chatInput: {\n        flex: 1,\n    },\n    inputStyle: {\n        border: 'none',\n        borderTopWidth: '1',\n        borderTopStyle: 'solid',\n        borderTopColor: '#ddd',\n        fontSize: '16',\n        outline: 'none',\n        padding: '30',\n        width: '100%',\n    },\n};\nvar ChatInput = function (props) {\n    var inputStyles = props.inputStyles, inputPlaceholder = props.inputPlaceholder;\n    return (react_1.default.createElement(\"div\", { className: \"chat-input\", style: styles.chatInput },\n        react_1.default.createElement(\"input\", { type: \"text\", style: inputStyles || styles.inputStyle, placeholder: inputPlaceholder })));\n};\nexports.default = ChatInput;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react-chat-ui/lib/ChatInput/index.js?");

/***/ }),

/***/ "../../node_modules/react-chat-ui/lib/Message/index.js":
/*!*************************************************************!*\
  !*** ../../node_modules/react-chat-ui/lib/Message/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Message = (function () {\n    function Message(messageData) {\n        this.id = messageData.id;\n        this.message = messageData.message;\n        this.senderName = messageData.senderName || undefined;\n    }\n    return Message;\n}());\nexports.default = Message;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react-chat-ui/lib/Message/index.js?");

/***/ }),

/***/ "../../node_modules/react-chat-ui/lib/index.js":
/*!*****************************************************!*\
  !*** ../../node_modules/react-chat-ui/lib/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ChatBubble_1 = __webpack_require__(/*! ./ChatBubble/ */ \"../../node_modules/react-chat-ui/lib/ChatBubble/index.js\");\nexports.ChatBubble = ChatBubble_1.default;\nvar BubbleGroup_1 = __webpack_require__(/*! ./BubbleGroup */ \"../../node_modules/react-chat-ui/lib/BubbleGroup/index.js\");\nexports.BubbleGroup = BubbleGroup_1.default;\nvar ChatFeed_1 = __webpack_require__(/*! ./ChatFeed/ */ \"../../node_modules/react-chat-ui/lib/ChatFeed/index.js\");\nexports.ChatFeed = ChatFeed_1.default;\nvar ChatInput_1 = __webpack_require__(/*! ./ChatInput/ */ \"../../node_modules/react-chat-ui/lib/ChatInput/index.js\");\nexports.ChatInput = ChatInput_1.default;\nvar Message_1 = __webpack_require__(/*! ./Message/ */ \"../../node_modules/react-chat-ui/lib/Message/index.js\");\nexports.Message = Message_1.default;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react-chat-ui/lib/index.js?");

/***/ }),

/***/ "../../node_modules/react-dom/cjs/react-dom.development.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/react-dom/cjs/react-dom.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/***/ }),

/***/ "../../node_modules/react-dom/index.js":
/*!*********************************************!*\
  !*** ../../node_modules/react-dom/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction checkDCE() {\n  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\n  if (\n    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||\n    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'\n  ) {\n    return;\n  }\n  if (true) {\n    // This branch is unreachable because this function is only called\n    // in production, but the condition is true only in development.\n    // Therefore if the branch is still here, dead code elimination wasn't\n    // properly applied.\n    // Don't change the message. React DevTools relies on it. Also make sure\n    // this message doesn't occur elsewhere in this function, or it will cause\n    // a false positive.\n    throw new Error('^_^');\n  }\n  try {\n    // Verify that the code above has been dead code eliminated (DCE'd).\n    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);\n  } catch (err) {\n    // DevTools shouldn't crash React, no matter what.\n    // We should still report in case we break this code.\n    console.error(err);\n  }\n}\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-dom.development.js */ \"../../node_modules/react-dom/cjs/react-dom.development.js\");\n}\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react-dom/index.js?");

/***/ }),

/***/ "../../node_modules/react-is/cjs/react-is.development.js":
/*!***************************************************************!*\
  !*** ../../node_modules/react-is/cjs/react-is.development.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("/** @license React v16.13.1\n * react-is.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\n// The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n// nor polyfill, then a plain number is used for performance.\nvar hasSymbol = typeof Symbol === 'function' && Symbol.for;\nvar REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;\nvar REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;\nvar REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;\nvar REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;\nvar REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;\nvar REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;\nvar REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary\n// (unstable) APIs that have been removed. Can we remove the symbols?\n\nvar REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;\nvar REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;\nvar REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;\nvar REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;\nvar REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;\nvar REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;\nvar REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;\nvar REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;\nvar REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;\nvar REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;\nvar REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;\n\nfunction isValidElementType(type) {\n  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.\n  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);\n}\n\nfunction typeOf(object) {\n  if (typeof object === 'object' && object !== null) {\n    var $$typeof = object.$$typeof;\n\n    switch ($$typeof) {\n      case REACT_ELEMENT_TYPE:\n        var type = object.type;\n\n        switch (type) {\n          case REACT_ASYNC_MODE_TYPE:\n          case REACT_CONCURRENT_MODE_TYPE:\n          case REACT_FRAGMENT_TYPE:\n          case REACT_PROFILER_TYPE:\n          case REACT_STRICT_MODE_TYPE:\n          case REACT_SUSPENSE_TYPE:\n            return type;\n\n          default:\n            var $$typeofType = type && type.$$typeof;\n\n            switch ($$typeofType) {\n              case REACT_CONTEXT_TYPE:\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_LAZY_TYPE:\n              case REACT_MEMO_TYPE:\n              case REACT_PROVIDER_TYPE:\n                return $$typeofType;\n\n              default:\n                return $$typeof;\n            }\n\n        }\n\n      case REACT_PORTAL_TYPE:\n        return $$typeof;\n    }\n  }\n\n  return undefined;\n} // AsyncMode is deprecated along with isAsyncMode\n\nvar AsyncMode = REACT_ASYNC_MODE_TYPE;\nvar ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;\nvar ContextConsumer = REACT_CONTEXT_TYPE;\nvar ContextProvider = REACT_PROVIDER_TYPE;\nvar Element = REACT_ELEMENT_TYPE;\nvar ForwardRef = REACT_FORWARD_REF_TYPE;\nvar Fragment = REACT_FRAGMENT_TYPE;\nvar Lazy = REACT_LAZY_TYPE;\nvar Memo = REACT_MEMO_TYPE;\nvar Portal = REACT_PORTAL_TYPE;\nvar Profiler = REACT_PROFILER_TYPE;\nvar StrictMode = REACT_STRICT_MODE_TYPE;\nvar Suspense = REACT_SUSPENSE_TYPE;\nvar hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated\n\nfunction isAsyncMode(object) {\n  {\n    if (!hasWarnedAboutDeprecatedIsAsyncMode) {\n      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint\n\n      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');\n    }\n  }\n\n  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;\n}\nfunction isConcurrentMode(object) {\n  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;\n}\nfunction isContextConsumer(object) {\n  return typeOf(object) === REACT_CONTEXT_TYPE;\n}\nfunction isContextProvider(object) {\n  return typeOf(object) === REACT_PROVIDER_TYPE;\n}\nfunction isElement(object) {\n  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n}\nfunction isForwardRef(object) {\n  return typeOf(object) === REACT_FORWARD_REF_TYPE;\n}\nfunction isFragment(object) {\n  return typeOf(object) === REACT_FRAGMENT_TYPE;\n}\nfunction isLazy(object) {\n  return typeOf(object) === REACT_LAZY_TYPE;\n}\nfunction isMemo(object) {\n  return typeOf(object) === REACT_MEMO_TYPE;\n}\nfunction isPortal(object) {\n  return typeOf(object) === REACT_PORTAL_TYPE;\n}\nfunction isProfiler(object) {\n  return typeOf(object) === REACT_PROFILER_TYPE;\n}\nfunction isStrictMode(object) {\n  return typeOf(object) === REACT_STRICT_MODE_TYPE;\n}\nfunction isSuspense(object) {\n  return typeOf(object) === REACT_SUSPENSE_TYPE;\n}\n\nexports.AsyncMode = AsyncMode;\nexports.ConcurrentMode = ConcurrentMode;\nexports.ContextConsumer = ContextConsumer;\nexports.ContextProvider = ContextProvider;\nexports.Element = Element;\nexports.ForwardRef = ForwardRef;\nexports.Fragment = Fragment;\nexports.Lazy = Lazy;\nexports.Memo = Memo;\nexports.Portal = Portal;\nexports.Profiler = Profiler;\nexports.StrictMode = StrictMode;\nexports.Suspense = Suspense;\nexports.isAsyncMode = isAsyncMode;\nexports.isConcurrentMode = isConcurrentMode;\nexports.isContextConsumer = isContextConsumer;\nexports.isContextProvider = isContextProvider;\nexports.isElement = isElement;\nexports.isForwardRef = isForwardRef;\nexports.isFragment = isFragment;\nexports.isLazy = isLazy;\nexports.isMemo = isMemo;\nexports.isPortal = isPortal;\nexports.isProfiler = isProfiler;\nexports.isStrictMode = isStrictMode;\nexports.isSuspense = isSuspense;\nexports.isValidElementType = isValidElementType;\nexports.typeOf = typeOf;\n  })();\n}\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react-is/cjs/react-is.development.js?");

/***/ }),

/***/ "../../node_modules/react-is/index.js":
/*!********************************************!*\
  !*** ../../node_modules/react-is/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ \"../../node_modules/react-is/cjs/react-is.development.js\");\n}\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react-is/index.js?");

/***/ }),

/***/ "../../node_modules/react/cjs/react.development.js":
/*!*********************************************************!*\
  !*** ../../node_modules/react/cjs/react.development.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("/** @license React v17.0.1\n * react.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\nvar _assign = __webpack_require__(/*! object-assign */ \"../../node_modules/object-assign/index.js\");\n\n// TODO: this is special because it gets imported during build.\nvar ReactVersion = '17.0.1';\n\n// ATTENTION\n// When adding new symbols to this file,\n// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'\n// The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n// nor polyfill, then a plain number is used for performance.\nvar REACT_ELEMENT_TYPE = 0xeac7;\nvar REACT_PORTAL_TYPE = 0xeaca;\nexports.Fragment = 0xeacb;\nexports.StrictMode = 0xeacc;\nexports.Profiler = 0xead2;\nvar REACT_PROVIDER_TYPE = 0xeacd;\nvar REACT_CONTEXT_TYPE = 0xeace;\nvar REACT_FORWARD_REF_TYPE = 0xead0;\nexports.Suspense = 0xead1;\nvar REACT_SUSPENSE_LIST_TYPE = 0xead8;\nvar REACT_MEMO_TYPE = 0xead3;\nvar REACT_LAZY_TYPE = 0xead4;\nvar REACT_BLOCK_TYPE = 0xead9;\nvar REACT_SERVER_BLOCK_TYPE = 0xeada;\nvar REACT_FUNDAMENTAL_TYPE = 0xead5;\nvar REACT_SCOPE_TYPE = 0xead7;\nvar REACT_OPAQUE_ID_TYPE = 0xeae0;\nvar REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;\nvar REACT_OFFSCREEN_TYPE = 0xeae2;\nvar REACT_LEGACY_HIDDEN_TYPE = 0xeae3;\n\nif (typeof Symbol === 'function' && Symbol.for) {\n  var symbolFor = Symbol.for;\n  REACT_ELEMENT_TYPE = symbolFor('react.element');\n  REACT_PORTAL_TYPE = symbolFor('react.portal');\n  exports.Fragment = symbolFor('react.fragment');\n  exports.StrictMode = symbolFor('react.strict_mode');\n  exports.Profiler = symbolFor('react.profiler');\n  REACT_PROVIDER_TYPE = symbolFor('react.provider');\n  REACT_CONTEXT_TYPE = symbolFor('react.context');\n  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');\n  exports.Suspense = symbolFor('react.suspense');\n  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');\n  REACT_MEMO_TYPE = symbolFor('react.memo');\n  REACT_LAZY_TYPE = symbolFor('react.lazy');\n  REACT_BLOCK_TYPE = symbolFor('react.block');\n  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');\n  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');\n  REACT_SCOPE_TYPE = symbolFor('react.scope');\n  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');\n  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');\n  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');\n  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');\n}\n\nvar MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\nvar FAUX_ITERATOR_SYMBOL = '@@iterator';\nfunction getIteratorFn(maybeIterable) {\n  if (maybeIterable === null || typeof maybeIterable !== 'object') {\n    return null;\n  }\n\n  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];\n\n  if (typeof maybeIterator === 'function') {\n    return maybeIterator;\n  }\n\n  return null;\n}\n\n/**\n * Keeps track of the current dispatcher.\n */\nvar ReactCurrentDispatcher = {\n  /**\n   * @internal\n   * @type {ReactComponent}\n   */\n  current: null\n};\n\n/**\n * Keeps track of the current batch's configuration such as how long an update\n * should suspend for if it needs to.\n */\nvar ReactCurrentBatchConfig = {\n  transition: 0\n};\n\n/**\n * Keeps track of the current owner.\n *\n * The current owner is the component who should own any components that are\n * currently being constructed.\n */\nvar ReactCurrentOwner = {\n  /**\n   * @internal\n   * @type {ReactComponent}\n   */\n  current: null\n};\n\nvar ReactDebugCurrentFrame = {};\nvar currentExtraStackFrame = null;\nfunction setExtraStackFrame(stack) {\n  {\n    currentExtraStackFrame = stack;\n  }\n}\n\n{\n  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {\n    {\n      currentExtraStackFrame = stack;\n    }\n  }; // Stack implementation injected by the current renderer.\n\n\n  ReactDebugCurrentFrame.getCurrentStack = null;\n\n  ReactDebugCurrentFrame.getStackAddendum = function () {\n    var stack = ''; // Add an extra top frame while an element is being validated\n\n    if (currentExtraStackFrame) {\n      stack += currentExtraStackFrame;\n    } // Delegate to the injected renderer-specific implementation\n\n\n    var impl = ReactDebugCurrentFrame.getCurrentStack;\n\n    if (impl) {\n      stack += impl() || '';\n    }\n\n    return stack;\n  };\n}\n\n/**\n * Used by act() to track whether you're inside an act() scope.\n */\nvar IsSomeRendererActing = {\n  current: false\n};\n\nvar ReactSharedInternals = {\n  ReactCurrentDispatcher: ReactCurrentDispatcher,\n  ReactCurrentBatchConfig: ReactCurrentBatchConfig,\n  ReactCurrentOwner: ReactCurrentOwner,\n  IsSomeRendererActing: IsSomeRendererActing,\n  // Used by renderers to avoid bundling object-assign twice in UMD bundles:\n  assign: _assign\n};\n\n{\n  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;\n}\n\n// by calls to these methods by a Babel plugin.\n//\n// In PROD (or in packages without access to React internals),\n// they are left as they are instead.\n\nfunction warn(format) {\n  {\n    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    printWarning('warn', format, args);\n  }\n}\nfunction error(format) {\n  {\n    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n      args[_key2 - 1] = arguments[_key2];\n    }\n\n    printWarning('error', format, args);\n  }\n}\n\nfunction printWarning(level, format, args) {\n  // When changing this logic, you might want to also\n  // update consoleWithStackDev.www.js as well.\n  {\n    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;\n    var stack = ReactDebugCurrentFrame.getStackAddendum();\n\n    if (stack !== '') {\n      format += '%s';\n      args = args.concat([stack]);\n    }\n\n    var argsWithFormat = args.map(function (item) {\n      return '' + item;\n    }); // Careful: RN currently depends on this prefix\n\n    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it\n    // breaks IE9: https://github.com/facebook/react/issues/13610\n    // eslint-disable-next-line react-internal/no-production-logging\n\n    Function.prototype.apply.call(console[level], console, argsWithFormat);\n  }\n}\n\nvar didWarnStateUpdateForUnmountedComponent = {};\n\nfunction warnNoop(publicInstance, callerName) {\n  {\n    var _constructor = publicInstance.constructor;\n    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';\n    var warningKey = componentName + \".\" + callerName;\n\n    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {\n      return;\n    }\n\n    error(\"Can't call %s on a component that is not yet mounted. \" + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);\n\n    didWarnStateUpdateForUnmountedComponent[warningKey] = true;\n  }\n}\n/**\n * This is the abstract API for an update queue.\n */\n\n\nvar ReactNoopUpdateQueue = {\n  /**\n   * Checks whether or not this composite component is mounted.\n   * @param {ReactClass} publicInstance The instance we want to test.\n   * @return {boolean} True if mounted, false otherwise.\n   * @protected\n   * @final\n   */\n  isMounted: function (publicInstance) {\n    return false;\n  },\n\n  /**\n   * Forces an update. This should only be invoked when it is known with\n   * certainty that we are **not** in a DOM transaction.\n   *\n   * You may want to call this when you know that some deeper aspect of the\n   * component's state has changed but `setState` was not called.\n   *\n   * This will not invoke `shouldComponentUpdate`, but it will invoke\n   * `componentWillUpdate` and `componentDidUpdate`.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {?function} callback Called after component is updated.\n   * @param {?string} callerName name of the calling function in the public API.\n   * @internal\n   */\n  enqueueForceUpdate: function (publicInstance, callback, callerName) {\n    warnNoop(publicInstance, 'forceUpdate');\n  },\n\n  /**\n   * Replaces all of the state. Always use this or `setState` to mutate state.\n   * You should treat `this.state` as immutable.\n   *\n   * There is no guarantee that `this.state` will be immediately updated, so\n   * accessing `this.state` after calling this method may return the old value.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {object} completeState Next state.\n   * @param {?function} callback Called after component is updated.\n   * @param {?string} callerName name of the calling function in the public API.\n   * @internal\n   */\n  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {\n    warnNoop(publicInstance, 'replaceState');\n  },\n\n  /**\n   * Sets a subset of the state. This only exists because _pendingState is\n   * internal. This provides a merging strategy that is not available to deep\n   * properties which is confusing. TODO: Expose pendingState or don't use it\n   * during the merge.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {object} partialState Next partial state to be merged with state.\n   * @param {?function} callback Called after component is updated.\n   * @param {?string} Name of the calling function in the public API.\n   * @internal\n   */\n  enqueueSetState: function (publicInstance, partialState, callback, callerName) {\n    warnNoop(publicInstance, 'setState');\n  }\n};\n\nvar emptyObject = {};\n\n{\n  Object.freeze(emptyObject);\n}\n/**\n * Base class helpers for the updating state of a component.\n */\n\n\nfunction Component(props, context, updater) {\n  this.props = props;\n  this.context = context; // If a component has string refs, we will assign a different object later.\n\n  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the\n  // renderer.\n\n  this.updater = updater || ReactNoopUpdateQueue;\n}\n\nComponent.prototype.isReactComponent = {};\n/**\n * Sets a subset of the state. Always use this to mutate\n * state. You should treat `this.state` as immutable.\n *\n * There is no guarantee that `this.state` will be immediately updated, so\n * accessing `this.state` after calling this method may return the old value.\n *\n * There is no guarantee that calls to `setState` will run synchronously,\n * as they may eventually be batched together.  You can provide an optional\n * callback that will be executed when the call to setState is actually\n * completed.\n *\n * When a function is provided to setState, it will be called at some point in\n * the future (not synchronously). It will be called with the up to date\n * component arguments (state, props, context). These values can be different\n * from this.* because your function may be called after receiveProps but before\n * shouldComponentUpdate, and this new state, props, and context will not yet be\n * assigned to this.\n *\n * @param {object|function} partialState Next partial state or function to\n *        produce next partial state to be merged with current state.\n * @param {?function} callback Called after state is updated.\n * @final\n * @protected\n */\n\nComponent.prototype.setState = function (partialState, callback) {\n  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {\n    {\n      throw Error( \"setState(...): takes an object of state variables to update or a function which returns an object of state variables.\" );\n    }\n  }\n\n  this.updater.enqueueSetState(this, partialState, callback, 'setState');\n};\n/**\n * Forces an update. This should only be invoked when it is known with\n * certainty that we are **not** in a DOM transaction.\n *\n * You may want to call this when you know that some deeper aspect of the\n * component's state has changed but `setState` was not called.\n *\n * This will not invoke `shouldComponentUpdate`, but it will invoke\n * `componentWillUpdate` and `componentDidUpdate`.\n *\n * @param {?function} callback Called after update is complete.\n * @final\n * @protected\n */\n\n\nComponent.prototype.forceUpdate = function (callback) {\n  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');\n};\n/**\n * Deprecated APIs. These APIs used to exist on classic React classes but since\n * we would like to deprecate them, we're not going to move them over to this\n * modern base class. Instead, we define a getter that warns if it's accessed.\n */\n\n\n{\n  var deprecatedAPIs = {\n    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],\n    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']\n  };\n\n  var defineDeprecationWarning = function (methodName, info) {\n    Object.defineProperty(Component.prototype, methodName, {\n      get: function () {\n        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);\n\n        return undefined;\n      }\n    });\n  };\n\n  for (var fnName in deprecatedAPIs) {\n    if (deprecatedAPIs.hasOwnProperty(fnName)) {\n      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);\n    }\n  }\n}\n\nfunction ComponentDummy() {}\n\nComponentDummy.prototype = Component.prototype;\n/**\n * Convenience component with default shallow equality check for sCU.\n */\n\nfunction PureComponent(props, context, updater) {\n  this.props = props;\n  this.context = context; // If a component has string refs, we will assign a different object later.\n\n  this.refs = emptyObject;\n  this.updater = updater || ReactNoopUpdateQueue;\n}\n\nvar pureComponentPrototype = PureComponent.prototype = new ComponentDummy();\npureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.\n\n_assign(pureComponentPrototype, Component.prototype);\n\npureComponentPrototype.isPureReactComponent = true;\n\n// an immutable object with a single mutable value\nfunction createRef() {\n  var refObject = {\n    current: null\n  };\n\n  {\n    Object.seal(refObject);\n  }\n\n  return refObject;\n}\n\nfunction getWrappedName(outerType, innerType, wrapperName) {\n  var functionName = innerType.displayName || innerType.name || '';\n  return outerType.displayName || (functionName !== '' ? wrapperName + \"(\" + functionName + \")\" : wrapperName);\n}\n\nfunction getContextName(type) {\n  return type.displayName || 'Context';\n}\n\nfunction getComponentName(type) {\n  if (type == null) {\n    // Host root, text node or just invalid type.\n    return null;\n  }\n\n  {\n    if (typeof type.tag === 'number') {\n      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');\n    }\n  }\n\n  if (typeof type === 'function') {\n    return type.displayName || type.name || null;\n  }\n\n  if (typeof type === 'string') {\n    return type;\n  }\n\n  switch (type) {\n    case exports.Fragment:\n      return 'Fragment';\n\n    case REACT_PORTAL_TYPE:\n      return 'Portal';\n\n    case exports.Profiler:\n      return 'Profiler';\n\n    case exports.StrictMode:\n      return 'StrictMode';\n\n    case exports.Suspense:\n      return 'Suspense';\n\n    case REACT_SUSPENSE_LIST_TYPE:\n      return 'SuspenseList';\n  }\n\n  if (typeof type === 'object') {\n    switch (type.$$typeof) {\n      case REACT_CONTEXT_TYPE:\n        var context = type;\n        return getContextName(context) + '.Consumer';\n\n      case REACT_PROVIDER_TYPE:\n        var provider = type;\n        return getContextName(provider._context) + '.Provider';\n\n      case REACT_FORWARD_REF_TYPE:\n        return getWrappedName(type, type.render, 'ForwardRef');\n\n      case REACT_MEMO_TYPE:\n        return getComponentName(type.type);\n\n      case REACT_BLOCK_TYPE:\n        return getComponentName(type._render);\n\n      case REACT_LAZY_TYPE:\n        {\n          var lazyComponent = type;\n          var payload = lazyComponent._payload;\n          var init = lazyComponent._init;\n\n          try {\n            return getComponentName(init(payload));\n          } catch (x) {\n            return null;\n          }\n        }\n    }\n  }\n\n  return null;\n}\n\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar RESERVED_PROPS = {\n  key: true,\n  ref: true,\n  __self: true,\n  __source: true\n};\nvar specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;\n\n{\n  didWarnAboutStringRefs = {};\n}\n\nfunction hasValidRef(config) {\n  {\n    if (hasOwnProperty.call(config, 'ref')) {\n      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;\n\n      if (getter && getter.isReactWarning) {\n        return false;\n      }\n    }\n  }\n\n  return config.ref !== undefined;\n}\n\nfunction hasValidKey(config) {\n  {\n    if (hasOwnProperty.call(config, 'key')) {\n      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;\n\n      if (getter && getter.isReactWarning) {\n        return false;\n      }\n    }\n  }\n\n  return config.key !== undefined;\n}\n\nfunction defineKeyPropWarningGetter(props, displayName) {\n  var warnAboutAccessingKey = function () {\n    {\n      if (!specialPropKeyWarningShown) {\n        specialPropKeyWarningShown = true;\n\n        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);\n      }\n    }\n  };\n\n  warnAboutAccessingKey.isReactWarning = true;\n  Object.defineProperty(props, 'key', {\n    get: warnAboutAccessingKey,\n    configurable: true\n  });\n}\n\nfunction defineRefPropWarningGetter(props, displayName) {\n  var warnAboutAccessingRef = function () {\n    {\n      if (!specialPropRefWarningShown) {\n        specialPropRefWarningShown = true;\n\n        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);\n      }\n    }\n  };\n\n  warnAboutAccessingRef.isReactWarning = true;\n  Object.defineProperty(props, 'ref', {\n    get: warnAboutAccessingRef,\n    configurable: true\n  });\n}\n\nfunction warnIfStringRefCannotBeAutoConverted(config) {\n  {\n    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {\n      var componentName = getComponentName(ReactCurrentOwner.current.type);\n\n      if (!didWarnAboutStringRefs[componentName]) {\n        error('Component \"%s\" contains the string ref \"%s\". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);\n\n        didWarnAboutStringRefs[componentName] = true;\n      }\n    }\n  }\n}\n/**\n * Factory method to create a new React element. This no longer adheres to\n * the class pattern, so do not use new to call it. Also, instanceof check\n * will not work. Instead test $$typeof field against Symbol.for('react.element') to check\n * if something is a React Element.\n *\n * @param {*} type\n * @param {*} props\n * @param {*} key\n * @param {string|object} ref\n * @param {*} owner\n * @param {*} self A *temporary* helper to detect places where `this` is\n * different from the `owner` when React.createElement is called, so that we\n * can warn. We want to get rid of owner and replace string `ref`s with arrow\n * functions, and as long as `this` and owner are the same, there will be no\n * change in behavior.\n * @param {*} source An annotation object (added by a transpiler or otherwise)\n * indicating filename, line number, and/or other information.\n * @internal\n */\n\n\nvar ReactElement = function (type, key, ref, self, source, owner, props) {\n  var element = {\n    // This tag allows us to uniquely identify this as a React Element\n    $$typeof: REACT_ELEMENT_TYPE,\n    // Built-in properties that belong on the element\n    type: type,\n    key: key,\n    ref: ref,\n    props: props,\n    // Record the component responsible for creating this element.\n    _owner: owner\n  };\n\n  {\n    // The validation flag is currently mutative. We put it on\n    // an external backing store so that we can freeze the whole object.\n    // This can be replaced with a WeakMap once they are implemented in\n    // commonly used development environments.\n    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make\n    // the validation flag non-enumerable (where possible, which should\n    // include every environment we run tests in), so the test framework\n    // ignores it.\n\n    Object.defineProperty(element._store, 'validated', {\n      configurable: false,\n      enumerable: false,\n      writable: true,\n      value: false\n    }); // self and source are DEV only properties.\n\n    Object.defineProperty(element, '_self', {\n      configurable: false,\n      enumerable: false,\n      writable: false,\n      value: self\n    }); // Two elements created in two different places should be considered\n    // equal for testing purposes and therefore we hide it from enumeration.\n\n    Object.defineProperty(element, '_source', {\n      configurable: false,\n      enumerable: false,\n      writable: false,\n      value: source\n    });\n\n    if (Object.freeze) {\n      Object.freeze(element.props);\n      Object.freeze(element);\n    }\n  }\n\n  return element;\n};\n/**\n * Create and return a new ReactElement of the given type.\n * See https://reactjs.org/docs/react-api.html#createelement\n */\n\nfunction createElement(type, config, children) {\n  var propName; // Reserved names are extracted\n\n  var props = {};\n  var key = null;\n  var ref = null;\n  var self = null;\n  var source = null;\n\n  if (config != null) {\n    if (hasValidRef(config)) {\n      ref = config.ref;\n\n      {\n        warnIfStringRefCannotBeAutoConverted(config);\n      }\n    }\n\n    if (hasValidKey(config)) {\n      key = '' + config.key;\n    }\n\n    self = config.__self === undefined ? null : config.__self;\n    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object\n\n    for (propName in config) {\n      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\n        props[propName] = config[propName];\n      }\n    }\n  } // Children can be more than one argument, and those are transferred onto\n  // the newly allocated props object.\n\n\n  var childrenLength = arguments.length - 2;\n\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = Array(childrenLength);\n\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 2];\n    }\n\n    {\n      if (Object.freeze) {\n        Object.freeze(childArray);\n      }\n    }\n\n    props.children = childArray;\n  } // Resolve default props\n\n\n  if (type && type.defaultProps) {\n    var defaultProps = type.defaultProps;\n\n    for (propName in defaultProps) {\n      if (props[propName] === undefined) {\n        props[propName] = defaultProps[propName];\n      }\n    }\n  }\n\n  {\n    if (key || ref) {\n      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;\n\n      if (key) {\n        defineKeyPropWarningGetter(props, displayName);\n      }\n\n      if (ref) {\n        defineRefPropWarningGetter(props, displayName);\n      }\n    }\n  }\n\n  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);\n}\nfunction cloneAndReplaceKey(oldElement, newKey) {\n  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);\n  return newElement;\n}\n/**\n * Clone and return a new ReactElement using element as the starting point.\n * See https://reactjs.org/docs/react-api.html#cloneelement\n */\n\nfunction cloneElement(element, config, children) {\n  if (!!(element === null || element === undefined)) {\n    {\n      throw Error( \"React.cloneElement(...): The argument must be a React element, but you passed \" + element + \".\" );\n    }\n  }\n\n  var propName; // Original props are copied\n\n  var props = _assign({}, element.props); // Reserved names are extracted\n\n\n  var key = element.key;\n  var ref = element.ref; // Self is preserved since the owner is preserved.\n\n  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a\n  // transpiler, and the original source is probably a better indicator of the\n  // true owner.\n\n  var source = element._source; // Owner will be preserved, unless ref is overridden\n\n  var owner = element._owner;\n\n  if (config != null) {\n    if (hasValidRef(config)) {\n      // Silently steal the ref from the parent.\n      ref = config.ref;\n      owner = ReactCurrentOwner.current;\n    }\n\n    if (hasValidKey(config)) {\n      key = '' + config.key;\n    } // Remaining properties override existing props\n\n\n    var defaultProps;\n\n    if (element.type && element.type.defaultProps) {\n      defaultProps = element.type.defaultProps;\n    }\n\n    for (propName in config) {\n      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\n        if (config[propName] === undefined && defaultProps !== undefined) {\n          // Resolve default props\n          props[propName] = defaultProps[propName];\n        } else {\n          props[propName] = config[propName];\n        }\n      }\n    }\n  } // Children can be more than one argument, and those are transferred onto\n  // the newly allocated props object.\n\n\n  var childrenLength = arguments.length - 2;\n\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = Array(childrenLength);\n\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 2];\n    }\n\n    props.children = childArray;\n  }\n\n  return ReactElement(element.type, key, ref, self, source, owner, props);\n}\n/**\n * Verifies the object is a ReactElement.\n * See https://reactjs.org/docs/react-api.html#isvalidelement\n * @param {?object} object\n * @return {boolean} True if `object` is a ReactElement.\n * @final\n */\n\nfunction isValidElement(object) {\n  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n}\n\nvar SEPARATOR = '.';\nvar SUBSEPARATOR = ':';\n/**\n * Escape and wrap key so it is safe to use as a reactid\n *\n * @param {string} key to be escaped.\n * @return {string} the escaped key.\n */\n\nfunction escape(key) {\n  var escapeRegex = /[=:]/g;\n  var escaperLookup = {\n    '=': '=0',\n    ':': '=2'\n  };\n  var escapedString = key.replace(escapeRegex, function (match) {\n    return escaperLookup[match];\n  });\n  return '$' + escapedString;\n}\n/**\n * TODO: Test that a single child and an array with one item have the same key\n * pattern.\n */\n\n\nvar didWarnAboutMaps = false;\nvar userProvidedKeyEscapeRegex = /\\/+/g;\n\nfunction escapeUserProvidedKey(text) {\n  return text.replace(userProvidedKeyEscapeRegex, '$&/');\n}\n/**\n * Generate a key string that identifies a element within a set.\n *\n * @param {*} element A element that could contain a manual key.\n * @param {number} index Index that is used if a manual key is not provided.\n * @return {string}\n */\n\n\nfunction getElementKey(element, index) {\n  // Do some typechecking here since we call this blindly. We want to ensure\n  // that we don't block potential future ES APIs.\n  if (typeof element === 'object' && element !== null && element.key != null) {\n    // Explicit key\n    return escape('' + element.key);\n  } // Implicit key determined by the index in the set\n\n\n  return index.toString(36);\n}\n\nfunction mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {\n  var type = typeof children;\n\n  if (type === 'undefined' || type === 'boolean') {\n    // All of the above are perceived as null.\n    children = null;\n  }\n\n  var invokeCallback = false;\n\n  if (children === null) {\n    invokeCallback = true;\n  } else {\n    switch (type) {\n      case 'string':\n      case 'number':\n        invokeCallback = true;\n        break;\n\n      case 'object':\n        switch (children.$$typeof) {\n          case REACT_ELEMENT_TYPE:\n          case REACT_PORTAL_TYPE:\n            invokeCallback = true;\n        }\n\n    }\n  }\n\n  if (invokeCallback) {\n    var _child = children;\n    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array\n    // so that it's consistent if the number of children grows:\n\n    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;\n\n    if (Array.isArray(mappedChild)) {\n      var escapedChildKey = '';\n\n      if (childKey != null) {\n        escapedChildKey = escapeUserProvidedKey(childKey) + '/';\n      }\n\n      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {\n        return c;\n      });\n    } else if (mappedChild != null) {\n      if (isValidElement(mappedChild)) {\n        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as\n        // traverseAllChildren used to do for objects as children\n        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key\n        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number\n        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);\n      }\n\n      array.push(mappedChild);\n    }\n\n    return 1;\n  }\n\n  var child;\n  var nextName;\n  var subtreeCount = 0; // Count of children found in the current subtree.\n\n  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;\n\n  if (Array.isArray(children)) {\n    for (var i = 0; i < children.length; i++) {\n      child = children[i];\n      nextName = nextNamePrefix + getElementKey(child, i);\n      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);\n    }\n  } else {\n    var iteratorFn = getIteratorFn(children);\n\n    if (typeof iteratorFn === 'function') {\n      var iterableChildren = children;\n\n      {\n        // Warn about using Maps as children\n        if (iteratorFn === iterableChildren.entries) {\n          if (!didWarnAboutMaps) {\n            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');\n          }\n\n          didWarnAboutMaps = true;\n        }\n      }\n\n      var iterator = iteratorFn.call(iterableChildren);\n      var step;\n      var ii = 0;\n\n      while (!(step = iterator.next()).done) {\n        child = step.value;\n        nextName = nextNamePrefix + getElementKey(child, ii++);\n        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);\n      }\n    } else if (type === 'object') {\n      var childrenString = '' + children;\n\n      {\n        {\n          throw Error( \"Objects are not valid as a React child (found: \" + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + \"). If you meant to render a collection of children, use an array instead.\" );\n        }\n      }\n    }\n  }\n\n  return subtreeCount;\n}\n\n/**\n * Maps children that are typically specified as `props.children`.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrenmap\n *\n * The provided mapFunction(child, index) will be called for each\n * leaf child.\n *\n * @param {?*} children Children tree container.\n * @param {function(*, int)} func The map function.\n * @param {*} context Context for mapFunction.\n * @return {object} Object containing the ordered map of results.\n */\nfunction mapChildren(children, func, context) {\n  if (children == null) {\n    return children;\n  }\n\n  var result = [];\n  var count = 0;\n  mapIntoArray(children, result, '', '', function (child) {\n    return func.call(context, child, count++);\n  });\n  return result;\n}\n/**\n * Count the number of children that are typically specified as\n * `props.children`.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrencount\n *\n * @param {?*} children Children tree container.\n * @return {number} The number of children.\n */\n\n\nfunction countChildren(children) {\n  var n = 0;\n  mapChildren(children, function () {\n    n++; // Don't return anything\n  });\n  return n;\n}\n\n/**\n * Iterates through children that are typically specified as `props.children`.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrenforeach\n *\n * The provided forEachFunc(child, index) will be called for each\n * leaf child.\n *\n * @param {?*} children Children tree container.\n * @param {function(*, int)} forEachFunc\n * @param {*} forEachContext Context for forEachContext.\n */\nfunction forEachChildren(children, forEachFunc, forEachContext) {\n  mapChildren(children, function () {\n    forEachFunc.apply(this, arguments); // Don't return anything.\n  }, forEachContext);\n}\n/**\n * Flatten a children object (typically specified as `props.children`) and\n * return an array with appropriately re-keyed children.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrentoarray\n */\n\n\nfunction toArray(children) {\n  return mapChildren(children, function (child) {\n    return child;\n  }) || [];\n}\n/**\n * Returns the first child in a collection of children and verifies that there\n * is only one child in the collection.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrenonly\n *\n * The current implementation of this function assumes that a single child gets\n * passed without a wrapper, but the purpose of this helper function is to\n * abstract away the particular structure of children.\n *\n * @param {?object} children Child collection structure.\n * @return {ReactElement} The first and only `ReactElement` contained in the\n * structure.\n */\n\n\nfunction onlyChild(children) {\n  if (!isValidElement(children)) {\n    {\n      throw Error( \"React.Children.only expected to receive a single React element child.\" );\n    }\n  }\n\n  return children;\n}\n\nfunction createContext(defaultValue, calculateChangedBits) {\n  if (calculateChangedBits === undefined) {\n    calculateChangedBits = null;\n  } else {\n    {\n      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {\n        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);\n      }\n    }\n  }\n\n  var context = {\n    $$typeof: REACT_CONTEXT_TYPE,\n    _calculateChangedBits: calculateChangedBits,\n    // As a workaround to support multiple concurrent renderers, we categorize\n    // some renderers as primary and others as secondary. We only expect\n    // there to be two concurrent renderers at most: React Native (primary) and\n    // Fabric (secondary); React DOM (primary) and React ART (secondary).\n    // Secondary renderers store their context values on separate fields.\n    _currentValue: defaultValue,\n    _currentValue2: defaultValue,\n    // Used to track how many concurrent renderers this context currently\n    // supports within in a single renderer. Such as parallel server rendering.\n    _threadCount: 0,\n    // These are circular\n    Provider: null,\n    Consumer: null\n  };\n  context.Provider = {\n    $$typeof: REACT_PROVIDER_TYPE,\n    _context: context\n  };\n  var hasWarnedAboutUsingNestedContextConsumers = false;\n  var hasWarnedAboutUsingConsumerProvider = false;\n  var hasWarnedAboutDisplayNameOnConsumer = false;\n\n  {\n    // A separate object, but proxies back to the original context object for\n    // backwards compatibility. It has a different $$typeof, so we can properly\n    // warn for the incorrect usage of Context as a Consumer.\n    var Consumer = {\n      $$typeof: REACT_CONTEXT_TYPE,\n      _context: context,\n      _calculateChangedBits: context._calculateChangedBits\n    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here\n\n    Object.defineProperties(Consumer, {\n      Provider: {\n        get: function () {\n          if (!hasWarnedAboutUsingConsumerProvider) {\n            hasWarnedAboutUsingConsumerProvider = true;\n\n            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');\n          }\n\n          return context.Provider;\n        },\n        set: function (_Provider) {\n          context.Provider = _Provider;\n        }\n      },\n      _currentValue: {\n        get: function () {\n          return context._currentValue;\n        },\n        set: function (_currentValue) {\n          context._currentValue = _currentValue;\n        }\n      },\n      _currentValue2: {\n        get: function () {\n          return context._currentValue2;\n        },\n        set: function (_currentValue2) {\n          context._currentValue2 = _currentValue2;\n        }\n      },\n      _threadCount: {\n        get: function () {\n          return context._threadCount;\n        },\n        set: function (_threadCount) {\n          context._threadCount = _threadCount;\n        }\n      },\n      Consumer: {\n        get: function () {\n          if (!hasWarnedAboutUsingNestedContextConsumers) {\n            hasWarnedAboutUsingNestedContextConsumers = true;\n\n            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');\n          }\n\n          return context.Consumer;\n        }\n      },\n      displayName: {\n        get: function () {\n          return context.displayName;\n        },\n        set: function (displayName) {\n          if (!hasWarnedAboutDisplayNameOnConsumer) {\n            warn('Setting `displayName` on Context.Consumer has no effect. ' + \"You should set it directly on the context with Context.displayName = '%s'.\", displayName);\n\n            hasWarnedAboutDisplayNameOnConsumer = true;\n          }\n        }\n      }\n    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty\n\n    context.Consumer = Consumer;\n  }\n\n  {\n    context._currentRenderer = null;\n    context._currentRenderer2 = null;\n  }\n\n  return context;\n}\n\nvar Uninitialized = -1;\nvar Pending = 0;\nvar Resolved = 1;\nvar Rejected = 2;\n\nfunction lazyInitializer(payload) {\n  if (payload._status === Uninitialized) {\n    var ctor = payload._result;\n    var thenable = ctor(); // Transition to the next state.\n\n    var pending = payload;\n    pending._status = Pending;\n    pending._result = thenable;\n    thenable.then(function (moduleObject) {\n      if (payload._status === Pending) {\n        var defaultExport = moduleObject.default;\n\n        {\n          if (defaultExport === undefined) {\n            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\\n\\nYour code should look like: \\n  ' + // Break up imports to avoid accidentally parsing them as dependencies.\n            'const MyComponent = lazy(() => imp' + \"ort('./MyComponent'))\", moduleObject);\n          }\n        } // Transition to the next state.\n\n\n        var resolved = payload;\n        resolved._status = Resolved;\n        resolved._result = defaultExport;\n      }\n    }, function (error) {\n      if (payload._status === Pending) {\n        // Transition to the next state.\n        var rejected = payload;\n        rejected._status = Rejected;\n        rejected._result = error;\n      }\n    });\n  }\n\n  if (payload._status === Resolved) {\n    return payload._result;\n  } else {\n    throw payload._result;\n  }\n}\n\nfunction lazy(ctor) {\n  var payload = {\n    // We use these fields to store the result.\n    _status: -1,\n    _result: ctor\n  };\n  var lazyType = {\n    $$typeof: REACT_LAZY_TYPE,\n    _payload: payload,\n    _init: lazyInitializer\n  };\n\n  {\n    // In production, this would just set it on the object.\n    var defaultProps;\n    var propTypes; // $FlowFixMe\n\n    Object.defineProperties(lazyType, {\n      defaultProps: {\n        configurable: true,\n        get: function () {\n          return defaultProps;\n        },\n        set: function (newDefaultProps) {\n          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');\n\n          defaultProps = newDefaultProps; // Match production behavior more closely:\n          // $FlowFixMe\n\n          Object.defineProperty(lazyType, 'defaultProps', {\n            enumerable: true\n          });\n        }\n      },\n      propTypes: {\n        configurable: true,\n        get: function () {\n          return propTypes;\n        },\n        set: function (newPropTypes) {\n          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');\n\n          propTypes = newPropTypes; // Match production behavior more closely:\n          // $FlowFixMe\n\n          Object.defineProperty(lazyType, 'propTypes', {\n            enumerable: true\n          });\n        }\n      }\n    });\n  }\n\n  return lazyType;\n}\n\nfunction forwardRef(render) {\n  {\n    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {\n      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');\n    } else if (typeof render !== 'function') {\n      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);\n    } else {\n      if (render.length !== 0 && render.length !== 2) {\n        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');\n      }\n    }\n\n    if (render != null) {\n      if (render.defaultProps != null || render.propTypes != null) {\n        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');\n      }\n    }\n  }\n\n  var elementType = {\n    $$typeof: REACT_FORWARD_REF_TYPE,\n    render: render\n  };\n\n  {\n    var ownName;\n    Object.defineProperty(elementType, 'displayName', {\n      enumerable: false,\n      configurable: true,\n      get: function () {\n        return ownName;\n      },\n      set: function (name) {\n        ownName = name;\n\n        if (render.displayName == null) {\n          render.displayName = name;\n        }\n      }\n    });\n  }\n\n  return elementType;\n}\n\n// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.\n\nvar enableScopeAPI = false; // Experimental Create Event Handle API.\n\nfunction isValidElementType(type) {\n  if (typeof type === 'string' || typeof type === 'function') {\n    return true;\n  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).\n\n\n  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {\n    return true;\n  }\n\n  if (typeof type === 'object' && type !== null) {\n    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nfunction memo(type, compare) {\n  {\n    if (!isValidElementType(type)) {\n      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);\n    }\n  }\n\n  var elementType = {\n    $$typeof: REACT_MEMO_TYPE,\n    type: type,\n    compare: compare === undefined ? null : compare\n  };\n\n  {\n    var ownName;\n    Object.defineProperty(elementType, 'displayName', {\n      enumerable: false,\n      configurable: true,\n      get: function () {\n        return ownName;\n      },\n      set: function (name) {\n        ownName = name;\n\n        if (type.displayName == null) {\n          type.displayName = name;\n        }\n      }\n    });\n  }\n\n  return elementType;\n}\n\nfunction resolveDispatcher() {\n  var dispatcher = ReactCurrentDispatcher.current;\n\n  if (!(dispatcher !== null)) {\n    {\n      throw Error( \"Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\\n1. You might have mismatching versions of React and the renderer (such as React DOM)\\n2. You might be breaking the Rules of Hooks\\n3. You might have more than one copy of React in the same app\\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.\" );\n    }\n  }\n\n  return dispatcher;\n}\n\nfunction useContext(Context, unstable_observedBits) {\n  var dispatcher = resolveDispatcher();\n\n  {\n    if (unstable_observedBits !== undefined) {\n      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\\n\\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');\n    } // TODO: add a more generic warning for invalid values.\n\n\n    if (Context._context !== undefined) {\n      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs\n      // and nobody should be using this in existing code.\n\n      if (realContext.Consumer === Context) {\n        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');\n      } else if (realContext.Provider === Context) {\n        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');\n      }\n    }\n  }\n\n  return dispatcher.useContext(Context, unstable_observedBits);\n}\nfunction useState(initialState) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useState(initialState);\n}\nfunction useReducer(reducer, initialArg, init) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useReducer(reducer, initialArg, init);\n}\nfunction useRef(initialValue) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useRef(initialValue);\n}\nfunction useEffect(create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useEffect(create, deps);\n}\nfunction useLayoutEffect(create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useLayoutEffect(create, deps);\n}\nfunction useCallback(callback, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useCallback(callback, deps);\n}\nfunction useMemo(create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useMemo(create, deps);\n}\nfunction useImperativeHandle(ref, create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useImperativeHandle(ref, create, deps);\n}\nfunction useDebugValue(value, formatterFn) {\n  {\n    var dispatcher = resolveDispatcher();\n    return dispatcher.useDebugValue(value, formatterFn);\n  }\n}\n\n// Helpers to patch console.logs to avoid logging during side-effect free\n// replaying on render function. This currently only patches the object\n// lazily which won't cover if the log function was extracted eagerly.\n// We could also eagerly patch the method.\nvar disabledDepth = 0;\nvar prevLog;\nvar prevInfo;\nvar prevWarn;\nvar prevError;\nvar prevGroup;\nvar prevGroupCollapsed;\nvar prevGroupEnd;\n\nfunction disabledLog() {}\n\ndisabledLog.__reactDisabledLog = true;\nfunction disableLogs() {\n  {\n    if (disabledDepth === 0) {\n      /* eslint-disable react-internal/no-production-logging */\n      prevLog = console.log;\n      prevInfo = console.info;\n      prevWarn = console.warn;\n      prevError = console.error;\n      prevGroup = console.group;\n      prevGroupCollapsed = console.groupCollapsed;\n      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099\n\n      var props = {\n        configurable: true,\n        enumerable: true,\n        value: disabledLog,\n        writable: true\n      }; // $FlowFixMe Flow thinks console is immutable.\n\n      Object.defineProperties(console, {\n        info: props,\n        log: props,\n        warn: props,\n        error: props,\n        group: props,\n        groupCollapsed: props,\n        groupEnd: props\n      });\n      /* eslint-enable react-internal/no-production-logging */\n    }\n\n    disabledDepth++;\n  }\n}\nfunction reenableLogs() {\n  {\n    disabledDepth--;\n\n    if (disabledDepth === 0) {\n      /* eslint-disable react-internal/no-production-logging */\n      var props = {\n        configurable: true,\n        enumerable: true,\n        writable: true\n      }; // $FlowFixMe Flow thinks console is immutable.\n\n      Object.defineProperties(console, {\n        log: _assign({}, props, {\n          value: prevLog\n        }),\n        info: _assign({}, props, {\n          value: prevInfo\n        }),\n        warn: _assign({}, props, {\n          value: prevWarn\n        }),\n        error: _assign({}, props, {\n          value: prevError\n        }),\n        group: _assign({}, props, {\n          value: prevGroup\n        }),\n        groupCollapsed: _assign({}, props, {\n          value: prevGroupCollapsed\n        }),\n        groupEnd: _assign({}, props, {\n          value: prevGroupEnd\n        })\n      });\n      /* eslint-enable react-internal/no-production-logging */\n    }\n\n    if (disabledDepth < 0) {\n      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');\n    }\n  }\n}\n\nvar ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;\nvar prefix;\nfunction describeBuiltInComponentFrame(name, source, ownerFn) {\n  {\n    if (prefix === undefined) {\n      // Extract the VM specific prefix used by each line.\n      try {\n        throw Error();\n      } catch (x) {\n        var match = x.stack.trim().match(/\\n( *(at )?)/);\n        prefix = match && match[1] || '';\n      }\n    } // We use the prefix to ensure our stacks line up with native stack frames.\n\n\n    return '\\n' + prefix + name;\n  }\n}\nvar reentry = false;\nvar componentFrameCache;\n\n{\n  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;\n  componentFrameCache = new PossiblyWeakMap();\n}\n\nfunction describeNativeComponentFrame(fn, construct) {\n  // If something asked for a stack inside a fake render, it should get ignored.\n  if (!fn || reentry) {\n    return '';\n  }\n\n  {\n    var frame = componentFrameCache.get(fn);\n\n    if (frame !== undefined) {\n      return frame;\n    }\n  }\n\n  var control;\n  reentry = true;\n  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.\n\n  Error.prepareStackTrace = undefined;\n  var previousDispatcher;\n\n  {\n    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function\n    // for warnings.\n\n    ReactCurrentDispatcher$1.current = null;\n    disableLogs();\n  }\n\n  try {\n    // This should throw.\n    if (construct) {\n      // Something should be setting the props in the constructor.\n      var Fake = function () {\n        throw Error();\n      }; // $FlowFixMe\n\n\n      Object.defineProperty(Fake.prototype, 'props', {\n        set: function () {\n          // We use a throwing setter instead of frozen or non-writable props\n          // because that won't throw in a non-strict mode function.\n          throw Error();\n        }\n      });\n\n      if (typeof Reflect === 'object' && Reflect.construct) {\n        // We construct a different control for this case to include any extra\n        // frames added by the construct call.\n        try {\n          Reflect.construct(Fake, []);\n        } catch (x) {\n          control = x;\n        }\n\n        Reflect.construct(fn, [], Fake);\n      } else {\n        try {\n          Fake.call();\n        } catch (x) {\n          control = x;\n        }\n\n        fn.call(Fake.prototype);\n      }\n    } else {\n      try {\n        throw Error();\n      } catch (x) {\n        control = x;\n      }\n\n      fn();\n    }\n  } catch (sample) {\n    // This is inlined manually because closure doesn't do it for us.\n    if (sample && control && typeof sample.stack === 'string') {\n      // This extracts the first frame from the sample that isn't also in the control.\n      // Skipping one frame that we assume is the frame that calls the two.\n      var sampleLines = sample.stack.split('\\n');\n      var controlLines = control.stack.split('\\n');\n      var s = sampleLines.length - 1;\n      var c = controlLines.length - 1;\n\n      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {\n        // We expect at least one stack frame to be shared.\n        // Typically this will be the root most one. However, stack frames may be\n        // cut off due to maximum stack limits. In this case, one maybe cut off\n        // earlier than the other. We assume that the sample is longer or the same\n        // and there for cut off earlier. So we should find the root most frame in\n        // the sample somewhere in the control.\n        c--;\n      }\n\n      for (; s >= 1 && c >= 0; s--, c--) {\n        // Next we find the first one that isn't the same which should be the\n        // frame that called our sample function and the control.\n        if (sampleLines[s] !== controlLines[c]) {\n          // In V8, the first line is describing the message but other VMs don't.\n          // If we're about to return the first line, and the control is also on the same\n          // line, that's a pretty good indicator that our sample threw at same line as\n          // the control. I.e. before we entered the sample frame. So we ignore this result.\n          // This can happen if you passed a class to function component, or non-function.\n          if (s !== 1 || c !== 1) {\n            do {\n              s--;\n              c--; // We may still have similar intermediate frames from the construct call.\n              // The next one that isn't the same should be our match though.\n\n              if (c < 0 || sampleLines[s] !== controlLines[c]) {\n                // V8 adds a \"new\" prefix for native classes. Let's remove it to make it prettier.\n                var _frame = '\\n' + sampleLines[s].replace(' at new ', ' at ');\n\n                {\n                  if (typeof fn === 'function') {\n                    componentFrameCache.set(fn, _frame);\n                  }\n                } // Return the line we found.\n\n\n                return _frame;\n              }\n            } while (s >= 1 && c >= 0);\n          }\n\n          break;\n        }\n      }\n    }\n  } finally {\n    reentry = false;\n\n    {\n      ReactCurrentDispatcher$1.current = previousDispatcher;\n      reenableLogs();\n    }\n\n    Error.prepareStackTrace = previousPrepareStackTrace;\n  } // Fallback to just using the name if we couldn't make it throw.\n\n\n  var name = fn ? fn.displayName || fn.name : '';\n  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';\n\n  {\n    if (typeof fn === 'function') {\n      componentFrameCache.set(fn, syntheticFrame);\n    }\n  }\n\n  return syntheticFrame;\n}\nfunction describeFunctionComponentFrame(fn, source, ownerFn) {\n  {\n    return describeNativeComponentFrame(fn, false);\n  }\n}\n\nfunction shouldConstruct(Component) {\n  var prototype = Component.prototype;\n  return !!(prototype && prototype.isReactComponent);\n}\n\nfunction describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {\n\n  if (type == null) {\n    return '';\n  }\n\n  if (typeof type === 'function') {\n    {\n      return describeNativeComponentFrame(type, shouldConstruct(type));\n    }\n  }\n\n  if (typeof type === 'string') {\n    return describeBuiltInComponentFrame(type);\n  }\n\n  switch (type) {\n    case exports.Suspense:\n      return describeBuiltInComponentFrame('Suspense');\n\n    case REACT_SUSPENSE_LIST_TYPE:\n      return describeBuiltInComponentFrame('SuspenseList');\n  }\n\n  if (typeof type === 'object') {\n    switch (type.$$typeof) {\n      case REACT_FORWARD_REF_TYPE:\n        return describeFunctionComponentFrame(type.render);\n\n      case REACT_MEMO_TYPE:\n        // Memo may contain any component type so we recursively resolve it.\n        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);\n\n      case REACT_BLOCK_TYPE:\n        return describeFunctionComponentFrame(type._render);\n\n      case REACT_LAZY_TYPE:\n        {\n          var lazyComponent = type;\n          var payload = lazyComponent._payload;\n          var init = lazyComponent._init;\n\n          try {\n            // Lazy may contain any component type so we recursively resolve it.\n            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);\n          } catch (x) {}\n        }\n    }\n  }\n\n  return '';\n}\n\nvar loggedTypeFailures = {};\nvar ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;\n\nfunction setCurrentlyValidatingElement(element) {\n  {\n    if (element) {\n      var owner = element._owner;\n      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);\n      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);\n    } else {\n      ReactDebugCurrentFrame$1.setExtraStackFrame(null);\n    }\n  }\n}\n\nfunction checkPropTypes(typeSpecs, values, location, componentName, element) {\n  {\n    // $FlowFixMe This is okay but Flow doesn't know it.\n    var has = Function.call.bind(Object.prototype.hasOwnProperty);\n\n    for (var typeSpecName in typeSpecs) {\n      if (has(typeSpecs, typeSpecName)) {\n        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          if (typeof typeSpecs[typeSpecName] !== 'function') {\n            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');\n            err.name = 'Invariant Violation';\n            throw err;\n          }\n\n          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');\n        } catch (ex) {\n          error$1 = ex;\n        }\n\n        if (error$1 && !(error$1 instanceof Error)) {\n          setCurrentlyValidatingElement(element);\n\n          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);\n\n          setCurrentlyValidatingElement(null);\n        }\n\n        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error$1.message] = true;\n          setCurrentlyValidatingElement(element);\n\n          error('Failed %s type: %s', location, error$1.message);\n\n          setCurrentlyValidatingElement(null);\n        }\n      }\n    }\n  }\n}\n\nfunction setCurrentlyValidatingElement$1(element) {\n  {\n    if (element) {\n      var owner = element._owner;\n      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);\n      setExtraStackFrame(stack);\n    } else {\n      setExtraStackFrame(null);\n    }\n  }\n}\n\nvar propTypesMisspellWarningShown;\n\n{\n  propTypesMisspellWarningShown = false;\n}\n\nfunction getDeclarationErrorAddendum() {\n  if (ReactCurrentOwner.current) {\n    var name = getComponentName(ReactCurrentOwner.current.type);\n\n    if (name) {\n      return '\\n\\nCheck the render method of `' + name + '`.';\n    }\n  }\n\n  return '';\n}\n\nfunction getSourceInfoErrorAddendum(source) {\n  if (source !== undefined) {\n    var fileName = source.fileName.replace(/^.*[\\\\\\/]/, '');\n    var lineNumber = source.lineNumber;\n    return '\\n\\nCheck your code at ' + fileName + ':' + lineNumber + '.';\n  }\n\n  return '';\n}\n\nfunction getSourceInfoErrorAddendumForProps(elementProps) {\n  if (elementProps !== null && elementProps !== undefined) {\n    return getSourceInfoErrorAddendum(elementProps.__source);\n  }\n\n  return '';\n}\n/**\n * Warn if there's no key explicitly set on dynamic arrays of children or\n * object keys are not valid. This allows us to keep track of children between\n * updates.\n */\n\n\nvar ownerHasKeyUseWarning = {};\n\nfunction getCurrentComponentErrorInfo(parentType) {\n  var info = getDeclarationErrorAddendum();\n\n  if (!info) {\n    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;\n\n    if (parentName) {\n      info = \"\\n\\nCheck the top-level render call using <\" + parentName + \">.\";\n    }\n  }\n\n  return info;\n}\n/**\n * Warn if the element doesn't have an explicit key assigned to it.\n * This element is in an array. The array could grow and shrink or be\n * reordered. All children that haven't already been validated are required to\n * have a \"key\" property assigned to it. Error statuses are cached so a warning\n * will only be shown once.\n *\n * @internal\n * @param {ReactElement} element Element that requires a key.\n * @param {*} parentType element's parent's type.\n */\n\n\nfunction validateExplicitKey(element, parentType) {\n  if (!element._store || element._store.validated || element.key != null) {\n    return;\n  }\n\n  element._store.validated = true;\n  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);\n\n  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {\n    return;\n  }\n\n  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a\n  // property, it may be the creator of the child that's responsible for\n  // assigning it a key.\n\n  var childOwner = '';\n\n  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {\n    // Give the component that originally created this child.\n    childOwner = \" It was passed a child from \" + getComponentName(element._owner.type) + \".\";\n  }\n\n  {\n    setCurrentlyValidatingElement$1(element);\n\n    error('Each child in a list should have a unique \"key\" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);\n\n    setCurrentlyValidatingElement$1(null);\n  }\n}\n/**\n * Ensure that every element either is passed in a static location, in an\n * array with an explicit keys property defined, or in an object literal\n * with valid key property.\n *\n * @internal\n * @param {ReactNode} node Statically passed child of any type.\n * @param {*} parentType node's parent's type.\n */\n\n\nfunction validateChildKeys(node, parentType) {\n  if (typeof node !== 'object') {\n    return;\n  }\n\n  if (Array.isArray(node)) {\n    for (var i = 0; i < node.length; i++) {\n      var child = node[i];\n\n      if (isValidElement(child)) {\n        validateExplicitKey(child, parentType);\n      }\n    }\n  } else if (isValidElement(node)) {\n    // This element was passed in a valid location.\n    if (node._store) {\n      node._store.validated = true;\n    }\n  } else if (node) {\n    var iteratorFn = getIteratorFn(node);\n\n    if (typeof iteratorFn === 'function') {\n      // Entry iterators used to provide implicit keys,\n      // but now we print a separate warning for them later.\n      if (iteratorFn !== node.entries) {\n        var iterator = iteratorFn.call(node);\n        var step;\n\n        while (!(step = iterator.next()).done) {\n          if (isValidElement(step.value)) {\n            validateExplicitKey(step.value, parentType);\n          }\n        }\n      }\n    }\n  }\n}\n/**\n * Given an element, validate that its props follow the propTypes definition,\n * provided by the type.\n *\n * @param {ReactElement} element\n */\n\n\nfunction validatePropTypes(element) {\n  {\n    var type = element.type;\n\n    if (type === null || type === undefined || typeof type === 'string') {\n      return;\n    }\n\n    var propTypes;\n\n    if (typeof type === 'function') {\n      propTypes = type.propTypes;\n    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.\n    // Inner props are checked in the reconciler.\n    type.$$typeof === REACT_MEMO_TYPE)) {\n      propTypes = type.propTypes;\n    } else {\n      return;\n    }\n\n    if (propTypes) {\n      // Intentionally inside to avoid triggering lazy initializers:\n      var name = getComponentName(type);\n      checkPropTypes(propTypes, element.props, 'prop', name, element);\n    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {\n      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:\n\n      var _name = getComponentName(type);\n\n      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');\n    }\n\n    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {\n      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');\n    }\n  }\n}\n/**\n * Given a fragment, validate that it can only be provided with fragment props\n * @param {ReactElement} fragment\n */\n\n\nfunction validateFragmentProps(fragment) {\n  {\n    var keys = Object.keys(fragment.props);\n\n    for (var i = 0; i < keys.length; i++) {\n      var key = keys[i];\n\n      if (key !== 'children' && key !== 'key') {\n        setCurrentlyValidatingElement$1(fragment);\n\n        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);\n\n        setCurrentlyValidatingElement$1(null);\n        break;\n      }\n    }\n\n    if (fragment.ref !== null) {\n      setCurrentlyValidatingElement$1(fragment);\n\n      error('Invalid attribute `ref` supplied to `React.Fragment`.');\n\n      setCurrentlyValidatingElement$1(null);\n    }\n  }\n}\nfunction createElementWithValidation(type, props, children) {\n  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to\n  // succeed and there will likely be errors in render.\n\n  if (!validType) {\n    var info = '';\n\n    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {\n      info += ' You likely forgot to export your component from the file ' + \"it's defined in, or you might have mixed up default and named imports.\";\n    }\n\n    var sourceInfo = getSourceInfoErrorAddendumForProps(props);\n\n    if (sourceInfo) {\n      info += sourceInfo;\n    } else {\n      info += getDeclarationErrorAddendum();\n    }\n\n    var typeString;\n\n    if (type === null) {\n      typeString = 'null';\n    } else if (Array.isArray(type)) {\n      typeString = 'array';\n    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {\n      typeString = \"<\" + (getComponentName(type.type) || 'Unknown') + \" />\";\n      info = ' Did you accidentally export a JSX literal instead of a component?';\n    } else {\n      typeString = typeof type;\n    }\n\n    {\n      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);\n    }\n  }\n\n  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.\n  // TODO: Drop this when these are no longer allowed as the type argument.\n\n  if (element == null) {\n    return element;\n  } // Skip key warning if the type isn't valid since our key validation logic\n  // doesn't expect a non-string/function type and can throw confusing errors.\n  // We don't want exception behavior to differ between dev and prod.\n  // (Rendering will throw with a helpful message and as soon as the type is\n  // fixed, the key warnings will appear.)\n\n\n  if (validType) {\n    for (var i = 2; i < arguments.length; i++) {\n      validateChildKeys(arguments[i], type);\n    }\n  }\n\n  if (type === exports.Fragment) {\n    validateFragmentProps(element);\n  } else {\n    validatePropTypes(element);\n  }\n\n  return element;\n}\nvar didWarnAboutDeprecatedCreateFactory = false;\nfunction createFactoryWithValidation(type) {\n  var validatedFactory = createElementWithValidation.bind(null, type);\n  validatedFactory.type = type;\n\n  {\n    if (!didWarnAboutDeprecatedCreateFactory) {\n      didWarnAboutDeprecatedCreateFactory = true;\n\n      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');\n    } // Legacy hook: remove it\n\n\n    Object.defineProperty(validatedFactory, 'type', {\n      enumerable: false,\n      get: function () {\n        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');\n\n        Object.defineProperty(this, 'type', {\n          value: type\n        });\n        return type;\n      }\n    });\n  }\n\n  return validatedFactory;\n}\nfunction cloneElementWithValidation(element, props, children) {\n  var newElement = cloneElement.apply(this, arguments);\n\n  for (var i = 2; i < arguments.length; i++) {\n    validateChildKeys(arguments[i], newElement.type);\n  }\n\n  validatePropTypes(newElement);\n  return newElement;\n}\n\n{\n\n  try {\n    var frozenObject = Object.freeze({});\n    /* eslint-disable no-new */\n\n    new Map([[frozenObject, null]]);\n    new Set([frozenObject]);\n    /* eslint-enable no-new */\n  } catch (e) {\n  }\n}\n\nvar createElement$1 =  createElementWithValidation ;\nvar cloneElement$1 =  cloneElementWithValidation ;\nvar createFactory =  createFactoryWithValidation ;\nvar Children = {\n  map: mapChildren,\n  forEach: forEachChildren,\n  count: countChildren,\n  toArray: toArray,\n  only: onlyChild\n};\n\nexports.Children = Children;\nexports.Component = Component;\nexports.PureComponent = PureComponent;\nexports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;\nexports.cloneElement = cloneElement$1;\nexports.createContext = createContext;\nexports.createElement = createElement$1;\nexports.createFactory = createFactory;\nexports.createRef = createRef;\nexports.forwardRef = forwardRef;\nexports.isValidElement = isValidElement;\nexports.lazy = lazy;\nexports.memo = memo;\nexports.useCallback = useCallback;\nexports.useContext = useContext;\nexports.useDebugValue = useDebugValue;\nexports.useEffect = useEffect;\nexports.useImperativeHandle = useImperativeHandle;\nexports.useLayoutEffect = useLayoutEffect;\nexports.useMemo = useMemo;\nexports.useReducer = useReducer;\nexports.useRef = useRef;\nexports.useState = useState;\nexports.version = ReactVersion;\n  })();\n}\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react/cjs/react.development.js?");

/***/ }),

/***/ "../../node_modules/react/index.js":
/*!*****************************************!*\
  !*** ../../node_modules/react/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ \"../../node_modules/react/cjs/react.development.js\");\n}\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/react/index.js?");

/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************!*\
  !*** ../../node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, \"\");\n  } catch (err) {\n    define = function(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunction.displayName = define(\n    GeneratorFunctionPrototype,\n    toStringTagSymbol,\n    \"GeneratorFunction\"\n  );\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      define(prototype, method, function(arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  define(Gp, toStringTagSymbol, \"Generator\");\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : 0\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "../../node_modules/scheduler/cjs/scheduler-tracing.development.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/scheduler/cjs/scheduler-tracing.development.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("/** @license React v0.20.1\n * scheduler-tracing.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\nvar DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.\n\nvar interactionIDCounter = 0;\nvar threadIDCounter = 0; // Set of currently traced interactions.\n// Interactions \"stack\"–\n// Meaning that newly traced interactions are appended to the previously active set.\n// When an interaction goes out of scope, the previous set (if any) is restored.\n\nexports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.\n\nexports.__subscriberRef = null;\n\n{\n  exports.__interactionsRef = {\n    current: new Set()\n  };\n  exports.__subscriberRef = {\n    current: null\n  };\n}\nfunction unstable_clear(callback) {\n\n  var prevInteractions = exports.__interactionsRef.current;\n  exports.__interactionsRef.current = new Set();\n\n  try {\n    return callback();\n  } finally {\n    exports.__interactionsRef.current = prevInteractions;\n  }\n}\nfunction unstable_getCurrent() {\n  {\n    return exports.__interactionsRef.current;\n  }\n}\nfunction unstable_getThreadID() {\n  return ++threadIDCounter;\n}\nfunction unstable_trace(name, timestamp, callback) {\n  var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;\n\n  var interaction = {\n    __count: 1,\n    id: interactionIDCounter++,\n    name: name,\n    timestamp: timestamp\n  };\n  var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.\n  // To do that, clone the current interactions.\n  // The previous set will be restored upon completion.\n\n  var interactions = new Set(prevInteractions);\n  interactions.add(interaction);\n  exports.__interactionsRef.current = interactions;\n  var subscriber = exports.__subscriberRef.current;\n  var returnValue;\n\n  try {\n    if (subscriber !== null) {\n      subscriber.onInteractionTraced(interaction);\n    }\n  } finally {\n    try {\n      if (subscriber !== null) {\n        subscriber.onWorkStarted(interactions, threadID);\n      }\n    } finally {\n      try {\n        returnValue = callback();\n      } finally {\n        exports.__interactionsRef.current = prevInteractions;\n\n        try {\n          if (subscriber !== null) {\n            subscriber.onWorkStopped(interactions, threadID);\n          }\n        } finally {\n          interaction.__count--; // If no async work was scheduled for this interaction,\n          // Notify subscribers that it's completed.\n\n          if (subscriber !== null && interaction.__count === 0) {\n            subscriber.onInteractionScheduledWorkCompleted(interaction);\n          }\n        }\n      }\n    }\n  }\n\n  return returnValue;\n}\nfunction unstable_wrap(callback) {\n  var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;\n\n  var wrappedInteractions = exports.__interactionsRef.current;\n  var subscriber = exports.__subscriberRef.current;\n\n  if (subscriber !== null) {\n    subscriber.onWorkScheduled(wrappedInteractions, threadID);\n  } // Update the pending async work count for the current interactions.\n  // Update after calling subscribers in case of error.\n\n\n  wrappedInteractions.forEach(function (interaction) {\n    interaction.__count++;\n  });\n  var hasRun = false;\n\n  function wrapped() {\n    var prevInteractions = exports.__interactionsRef.current;\n    exports.__interactionsRef.current = wrappedInteractions;\n    subscriber = exports.__subscriberRef.current;\n\n    try {\n      var returnValue;\n\n      try {\n        if (subscriber !== null) {\n          subscriber.onWorkStarted(wrappedInteractions, threadID);\n        }\n      } finally {\n        try {\n          returnValue = callback.apply(undefined, arguments);\n        } finally {\n          exports.__interactionsRef.current = prevInteractions;\n\n          if (subscriber !== null) {\n            subscriber.onWorkStopped(wrappedInteractions, threadID);\n          }\n        }\n      }\n\n      return returnValue;\n    } finally {\n      if (!hasRun) {\n        // We only expect a wrapped function to be executed once,\n        // But in the event that it's executed more than once–\n        // Only decrement the outstanding interaction counts once.\n        hasRun = true; // Update pending async counts for all wrapped interactions.\n        // If this was the last scheduled async work for any of them,\n        // Mark them as completed.\n\n        wrappedInteractions.forEach(function (interaction) {\n          interaction.__count--;\n\n          if (subscriber !== null && interaction.__count === 0) {\n            subscriber.onInteractionScheduledWorkCompleted(interaction);\n          }\n        });\n      }\n    }\n  }\n\n  wrapped.cancel = function cancel() {\n    subscriber = exports.__subscriberRef.current;\n\n    try {\n      if (subscriber !== null) {\n        subscriber.onWorkCanceled(wrappedInteractions, threadID);\n      }\n    } finally {\n      // Update pending async counts for all wrapped interactions.\n      // If this was the last scheduled async work for any of them,\n      // Mark them as completed.\n      wrappedInteractions.forEach(function (interaction) {\n        interaction.__count--;\n\n        if (subscriber && interaction.__count === 0) {\n          subscriber.onInteractionScheduledWorkCompleted(interaction);\n        }\n      });\n    }\n  };\n\n  return wrapped;\n}\n\nvar subscribers = null;\n\n{\n  subscribers = new Set();\n}\n\nfunction unstable_subscribe(subscriber) {\n  {\n    subscribers.add(subscriber);\n\n    if (subscribers.size === 1) {\n      exports.__subscriberRef.current = {\n        onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,\n        onInteractionTraced: onInteractionTraced,\n        onWorkCanceled: onWorkCanceled,\n        onWorkScheduled: onWorkScheduled,\n        onWorkStarted: onWorkStarted,\n        onWorkStopped: onWorkStopped\n      };\n    }\n  }\n}\nfunction unstable_unsubscribe(subscriber) {\n  {\n    subscribers.delete(subscriber);\n\n    if (subscribers.size === 0) {\n      exports.__subscriberRef.current = null;\n    }\n  }\n}\n\nfunction onInteractionTraced(interaction) {\n  var didCatchError = false;\n  var caughtError = null;\n  subscribers.forEach(function (subscriber) {\n    try {\n      subscriber.onInteractionTraced(interaction);\n    } catch (error) {\n      if (!didCatchError) {\n        didCatchError = true;\n        caughtError = error;\n      }\n    }\n  });\n\n  if (didCatchError) {\n    throw caughtError;\n  }\n}\n\nfunction onInteractionScheduledWorkCompleted(interaction) {\n  var didCatchError = false;\n  var caughtError = null;\n  subscribers.forEach(function (subscriber) {\n    try {\n      subscriber.onInteractionScheduledWorkCompleted(interaction);\n    } catch (error) {\n      if (!didCatchError) {\n        didCatchError = true;\n        caughtError = error;\n      }\n    }\n  });\n\n  if (didCatchError) {\n    throw caughtError;\n  }\n}\n\nfunction onWorkScheduled(interactions, threadID) {\n  var didCatchError = false;\n  var caughtError = null;\n  subscribers.forEach(function (subscriber) {\n    try {\n      subscriber.onWorkScheduled(interactions, threadID);\n    } catch (error) {\n      if (!didCatchError) {\n        didCatchError = true;\n        caughtError = error;\n      }\n    }\n  });\n\n  if (didCatchError) {\n    throw caughtError;\n  }\n}\n\nfunction onWorkStarted(interactions, threadID) {\n  var didCatchError = false;\n  var caughtError = null;\n  subscribers.forEach(function (subscriber) {\n    try {\n      subscriber.onWorkStarted(interactions, threadID);\n    } catch (error) {\n      if (!didCatchError) {\n        didCatchError = true;\n        caughtError = error;\n      }\n    }\n  });\n\n  if (didCatchError) {\n    throw caughtError;\n  }\n}\n\nfunction onWorkStopped(interactions, threadID) {\n  var didCatchError = false;\n  var caughtError = null;\n  subscribers.forEach(function (subscriber) {\n    try {\n      subscriber.onWorkStopped(interactions, threadID);\n    } catch (error) {\n      if (!didCatchError) {\n        didCatchError = true;\n        caughtError = error;\n      }\n    }\n  });\n\n  if (didCatchError) {\n    throw caughtError;\n  }\n}\n\nfunction onWorkCanceled(interactions, threadID) {\n  var didCatchError = false;\n  var caughtError = null;\n  subscribers.forEach(function (subscriber) {\n    try {\n      subscriber.onWorkCanceled(interactions, threadID);\n    } catch (error) {\n      if (!didCatchError) {\n        didCatchError = true;\n        caughtError = error;\n      }\n    }\n  });\n\n  if (didCatchError) {\n    throw caughtError;\n  }\n}\n\nexports.unstable_clear = unstable_clear;\nexports.unstable_getCurrent = unstable_getCurrent;\nexports.unstable_getThreadID = unstable_getThreadID;\nexports.unstable_subscribe = unstable_subscribe;\nexports.unstable_trace = unstable_trace;\nexports.unstable_unsubscribe = unstable_unsubscribe;\nexports.unstable_wrap = unstable_wrap;\n  })();\n}\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/scheduler/cjs/scheduler-tracing.development.js?");

/***/ }),

/***/ "../../node_modules/scheduler/cjs/scheduler.development.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/scheduler/cjs/scheduler.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("/** @license React v0.20.1\n * scheduler.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\nvar enableSchedulerDebugging = false;\nvar enableProfiling = true;\n\nvar requestHostCallback;\nvar requestHostTimeout;\nvar cancelHostTimeout;\nvar requestPaint;\nvar hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';\n\nif (hasPerformanceNow) {\n  var localPerformance = performance;\n\n  exports.unstable_now = function () {\n    return localPerformance.now();\n  };\n} else {\n  var localDate = Date;\n  var initialTime = localDate.now();\n\n  exports.unstable_now = function () {\n    return localDate.now() - initialTime;\n  };\n}\n\nif ( // If Scheduler runs in a non-DOM environment, it falls back to a naive\n// implementation using setTimeout.\ntypeof window === 'undefined' || // Check if MessageChannel is supported, too.\ntypeof MessageChannel !== 'function') {\n  // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,\n  // fallback to a naive implementation.\n  var _callback = null;\n  var _timeoutID = null;\n\n  var _flushCallback = function () {\n    if (_callback !== null) {\n      try {\n        var currentTime = exports.unstable_now();\n        var hasRemainingTime = true;\n\n        _callback(hasRemainingTime, currentTime);\n\n        _callback = null;\n      } catch (e) {\n        setTimeout(_flushCallback, 0);\n        throw e;\n      }\n    }\n  };\n\n  requestHostCallback = function (cb) {\n    if (_callback !== null) {\n      // Protect against re-entrancy.\n      setTimeout(requestHostCallback, 0, cb);\n    } else {\n      _callback = cb;\n      setTimeout(_flushCallback, 0);\n    }\n  };\n\n  requestHostTimeout = function (cb, ms) {\n    _timeoutID = setTimeout(cb, ms);\n  };\n\n  cancelHostTimeout = function () {\n    clearTimeout(_timeoutID);\n  };\n\n  exports.unstable_shouldYield = function () {\n    return false;\n  };\n\n  requestPaint = exports.unstable_forceFrameRate = function () {};\n} else {\n  // Capture local references to native APIs, in case a polyfill overrides them.\n  var _setTimeout = window.setTimeout;\n  var _clearTimeout = window.clearTimeout;\n\n  if (typeof console !== 'undefined') {\n    // TODO: Scheduler no longer requires these methods to be polyfilled. But\n    // maybe we want to continue warning if they don't exist, to preserve the\n    // option to rely on it in the future?\n    var requestAnimationFrame = window.requestAnimationFrame;\n    var cancelAnimationFrame = window.cancelAnimationFrame;\n\n    if (typeof requestAnimationFrame !== 'function') {\n      // Using console['error'] to evade Babel and ESLint\n      console['error'](\"This browser doesn't support requestAnimationFrame. \" + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');\n    }\n\n    if (typeof cancelAnimationFrame !== 'function') {\n      // Using console['error'] to evade Babel and ESLint\n      console['error'](\"This browser doesn't support cancelAnimationFrame. \" + 'Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');\n    }\n  }\n\n  var isMessageLoopRunning = false;\n  var scheduledHostCallback = null;\n  var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main\n  // thread, like user events. By default, it yields multiple times per frame.\n  // It does not attempt to align with frame boundaries, since most tasks don't\n  // need to be frame aligned; for those that do, use requestAnimationFrame.\n\n  var yieldInterval = 5;\n  var deadline = 0; // TODO: Make this configurable\n\n  {\n    // `isInputPending` is not available. Since we have no way of knowing if\n    // there's pending input, always yield at the end of the frame.\n    exports.unstable_shouldYield = function () {\n      return exports.unstable_now() >= deadline;\n    }; // Since we yield every frame regardless, `requestPaint` has no effect.\n\n\n    requestPaint = function () {};\n  }\n\n  exports.unstable_forceFrameRate = function (fps) {\n    if (fps < 0 || fps > 125) {\n      // Using console['error'] to evade Babel and ESLint\n      console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');\n      return;\n    }\n\n    if (fps > 0) {\n      yieldInterval = Math.floor(1000 / fps);\n    } else {\n      // reset the framerate\n      yieldInterval = 5;\n    }\n  };\n\n  var performWorkUntilDeadline = function () {\n    if (scheduledHostCallback !== null) {\n      var currentTime = exports.unstable_now(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync\n      // cycle. This means there's always time remaining at the beginning of\n      // the message event.\n\n      deadline = currentTime + yieldInterval;\n      var hasTimeRemaining = true;\n\n      try {\n        var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);\n\n        if (!hasMoreWork) {\n          isMessageLoopRunning = false;\n          scheduledHostCallback = null;\n        } else {\n          // If there's more work, schedule the next message event at the end\n          // of the preceding one.\n          port.postMessage(null);\n        }\n      } catch (error) {\n        // If a scheduler task throws, exit the current browser task so the\n        // error can be observed.\n        port.postMessage(null);\n        throw error;\n      }\n    } else {\n      isMessageLoopRunning = false;\n    } // Yielding to the browser will give it a chance to paint, so we can\n  };\n\n  var channel = new MessageChannel();\n  var port = channel.port2;\n  channel.port1.onmessage = performWorkUntilDeadline;\n\n  requestHostCallback = function (callback) {\n    scheduledHostCallback = callback;\n\n    if (!isMessageLoopRunning) {\n      isMessageLoopRunning = true;\n      port.postMessage(null);\n    }\n  };\n\n  requestHostTimeout = function (callback, ms) {\n    taskTimeoutID = _setTimeout(function () {\n      callback(exports.unstable_now());\n    }, ms);\n  };\n\n  cancelHostTimeout = function () {\n    _clearTimeout(taskTimeoutID);\n\n    taskTimeoutID = -1;\n  };\n}\n\nfunction push(heap, node) {\n  var index = heap.length;\n  heap.push(node);\n  siftUp(heap, node, index);\n}\nfunction peek(heap) {\n  var first = heap[0];\n  return first === undefined ? null : first;\n}\nfunction pop(heap) {\n  var first = heap[0];\n\n  if (first !== undefined) {\n    var last = heap.pop();\n\n    if (last !== first) {\n      heap[0] = last;\n      siftDown(heap, last, 0);\n    }\n\n    return first;\n  } else {\n    return null;\n  }\n}\n\nfunction siftUp(heap, node, i) {\n  var index = i;\n\n  while (true) {\n    var parentIndex = index - 1 >>> 1;\n    var parent = heap[parentIndex];\n\n    if (parent !== undefined && compare(parent, node) > 0) {\n      // The parent is larger. Swap positions.\n      heap[parentIndex] = node;\n      heap[index] = parent;\n      index = parentIndex;\n    } else {\n      // The parent is smaller. Exit.\n      return;\n    }\n  }\n}\n\nfunction siftDown(heap, node, i) {\n  var index = i;\n  var length = heap.length;\n\n  while (index < length) {\n    var leftIndex = (index + 1) * 2 - 1;\n    var left = heap[leftIndex];\n    var rightIndex = leftIndex + 1;\n    var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.\n\n    if (left !== undefined && compare(left, node) < 0) {\n      if (right !== undefined && compare(right, left) < 0) {\n        heap[index] = right;\n        heap[rightIndex] = node;\n        index = rightIndex;\n      } else {\n        heap[index] = left;\n        heap[leftIndex] = node;\n        index = leftIndex;\n      }\n    } else if (right !== undefined && compare(right, node) < 0) {\n      heap[index] = right;\n      heap[rightIndex] = node;\n      index = rightIndex;\n    } else {\n      // Neither child is smaller. Exit.\n      return;\n    }\n  }\n}\n\nfunction compare(a, b) {\n  // Compare sort index first, then task id.\n  var diff = a.sortIndex - b.sortIndex;\n  return diff !== 0 ? diff : a.id - b.id;\n}\n\n// TODO: Use symbols?\nvar NoPriority = 0;\nvar ImmediatePriority = 1;\nvar UserBlockingPriority = 2;\nvar NormalPriority = 3;\nvar LowPriority = 4;\nvar IdlePriority = 5;\n\nvar runIdCounter = 0;\nvar mainThreadIdCounter = 0;\nvar profilingStateSize = 4;\nvar sharedProfilingBuffer =  // $FlowFixMe Flow doesn't know about SharedArrayBuffer\ntypeof SharedArrayBuffer === 'function' ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : // $FlowFixMe Flow doesn't know about ArrayBuffer\ntypeof ArrayBuffer === 'function' ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : null // Don't crash the init path on IE9\n;\nvar profilingState =  sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : []; // We can't read this but it helps save bytes for null checks\n\nvar PRIORITY = 0;\nvar CURRENT_TASK_ID = 1;\nvar CURRENT_RUN_ID = 2;\nvar QUEUE_SIZE = 3;\n\n{\n  profilingState[PRIORITY] = NoPriority; // This is maintained with a counter, because the size of the priority queue\n  // array might include canceled tasks.\n\n  profilingState[QUEUE_SIZE] = 0;\n  profilingState[CURRENT_TASK_ID] = 0;\n} // Bytes per element is 4\n\n\nvar INITIAL_EVENT_LOG_SIZE = 131072;\nvar MAX_EVENT_LOG_SIZE = 524288; // Equivalent to 2 megabytes\n\nvar eventLogSize = 0;\nvar eventLogBuffer = null;\nvar eventLog = null;\nvar eventLogIndex = 0;\nvar TaskStartEvent = 1;\nvar TaskCompleteEvent = 2;\nvar TaskErrorEvent = 3;\nvar TaskCancelEvent = 4;\nvar TaskRunEvent = 5;\nvar TaskYieldEvent = 6;\nvar SchedulerSuspendEvent = 7;\nvar SchedulerResumeEvent = 8;\n\nfunction logEvent(entries) {\n  if (eventLog !== null) {\n    var offset = eventLogIndex;\n    eventLogIndex += entries.length;\n\n    if (eventLogIndex + 1 > eventLogSize) {\n      eventLogSize *= 2;\n\n      if (eventLogSize > MAX_EVENT_LOG_SIZE) {\n        // Using console['error'] to evade Babel and ESLint\n        console['error'](\"Scheduler Profiling: Event log exceeded maximum size. Don't \" + 'forget to call `stopLoggingProfilingEvents()`.');\n        stopLoggingProfilingEvents();\n        return;\n      }\n\n      var newEventLog = new Int32Array(eventLogSize * 4);\n      newEventLog.set(eventLog);\n      eventLogBuffer = newEventLog.buffer;\n      eventLog = newEventLog;\n    }\n\n    eventLog.set(entries, offset);\n  }\n}\n\nfunction startLoggingProfilingEvents() {\n  eventLogSize = INITIAL_EVENT_LOG_SIZE;\n  eventLogBuffer = new ArrayBuffer(eventLogSize * 4);\n  eventLog = new Int32Array(eventLogBuffer);\n  eventLogIndex = 0;\n}\nfunction stopLoggingProfilingEvents() {\n  var buffer = eventLogBuffer;\n  eventLogSize = 0;\n  eventLogBuffer = null;\n  eventLog = null;\n  eventLogIndex = 0;\n  return buffer;\n}\nfunction markTaskStart(task, ms) {\n  {\n    profilingState[QUEUE_SIZE]++;\n\n    if (eventLog !== null) {\n      // performance.now returns a float, representing milliseconds. When the\n      // event is logged, it's coerced to an int. Convert to microseconds to\n      // maintain extra degrees of precision.\n      logEvent([TaskStartEvent, ms * 1000, task.id, task.priorityLevel]);\n    }\n  }\n}\nfunction markTaskCompleted(task, ms) {\n  {\n    profilingState[PRIORITY] = NoPriority;\n    profilingState[CURRENT_TASK_ID] = 0;\n    profilingState[QUEUE_SIZE]--;\n\n    if (eventLog !== null) {\n      logEvent([TaskCompleteEvent, ms * 1000, task.id]);\n    }\n  }\n}\nfunction markTaskCanceled(task, ms) {\n  {\n    profilingState[QUEUE_SIZE]--;\n\n    if (eventLog !== null) {\n      logEvent([TaskCancelEvent, ms * 1000, task.id]);\n    }\n  }\n}\nfunction markTaskErrored(task, ms) {\n  {\n    profilingState[PRIORITY] = NoPriority;\n    profilingState[CURRENT_TASK_ID] = 0;\n    profilingState[QUEUE_SIZE]--;\n\n    if (eventLog !== null) {\n      logEvent([TaskErrorEvent, ms * 1000, task.id]);\n    }\n  }\n}\nfunction markTaskRun(task, ms) {\n  {\n    runIdCounter++;\n    profilingState[PRIORITY] = task.priorityLevel;\n    profilingState[CURRENT_TASK_ID] = task.id;\n    profilingState[CURRENT_RUN_ID] = runIdCounter;\n\n    if (eventLog !== null) {\n      logEvent([TaskRunEvent, ms * 1000, task.id, runIdCounter]);\n    }\n  }\n}\nfunction markTaskYield(task, ms) {\n  {\n    profilingState[PRIORITY] = NoPriority;\n    profilingState[CURRENT_TASK_ID] = 0;\n    profilingState[CURRENT_RUN_ID] = 0;\n\n    if (eventLog !== null) {\n      logEvent([TaskYieldEvent, ms * 1000, task.id, runIdCounter]);\n    }\n  }\n}\nfunction markSchedulerSuspended(ms) {\n  {\n    mainThreadIdCounter++;\n\n    if (eventLog !== null) {\n      logEvent([SchedulerSuspendEvent, ms * 1000, mainThreadIdCounter]);\n    }\n  }\n}\nfunction markSchedulerUnsuspended(ms) {\n  {\n    if (eventLog !== null) {\n      logEvent([SchedulerResumeEvent, ms * 1000, mainThreadIdCounter]);\n    }\n  }\n}\n\n/* eslint-disable no-var */\n// Math.pow(2, 30) - 1\n// 0b111111111111111111111111111111\n\nvar maxSigned31BitInt = 1073741823; // Times out immediately\n\nvar IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out\n\nvar USER_BLOCKING_PRIORITY_TIMEOUT = 250;\nvar NORMAL_PRIORITY_TIMEOUT = 5000;\nvar LOW_PRIORITY_TIMEOUT = 10000; // Never times out\n\nvar IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap\n\nvar taskQueue = [];\nvar timerQueue = []; // Incrementing id counter. Used to maintain insertion order.\n\nvar taskIdCounter = 1; // Pausing the scheduler is useful for debugging.\nvar currentTask = null;\nvar currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.\n\nvar isPerformingWork = false;\nvar isHostCallbackScheduled = false;\nvar isHostTimeoutScheduled = false;\n\nfunction advanceTimers(currentTime) {\n  // Check for tasks that are no longer delayed and add them to the queue.\n  var timer = peek(timerQueue);\n\n  while (timer !== null) {\n    if (timer.callback === null) {\n      // Timer was cancelled.\n      pop(timerQueue);\n    } else if (timer.startTime <= currentTime) {\n      // Timer fired. Transfer to the task queue.\n      pop(timerQueue);\n      timer.sortIndex = timer.expirationTime;\n      push(taskQueue, timer);\n\n      {\n        markTaskStart(timer, currentTime);\n        timer.isQueued = true;\n      }\n    } else {\n      // Remaining timers are pending.\n      return;\n    }\n\n    timer = peek(timerQueue);\n  }\n}\n\nfunction handleTimeout(currentTime) {\n  isHostTimeoutScheduled = false;\n  advanceTimers(currentTime);\n\n  if (!isHostCallbackScheduled) {\n    if (peek(taskQueue) !== null) {\n      isHostCallbackScheduled = true;\n      requestHostCallback(flushWork);\n    } else {\n      var firstTimer = peek(timerQueue);\n\n      if (firstTimer !== null) {\n        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);\n      }\n    }\n  }\n}\n\nfunction flushWork(hasTimeRemaining, initialTime) {\n  {\n    markSchedulerUnsuspended(initialTime);\n  } // We'll need a host callback the next time work is scheduled.\n\n\n  isHostCallbackScheduled = false;\n\n  if (isHostTimeoutScheduled) {\n    // We scheduled a timeout but it's no longer needed. Cancel it.\n    isHostTimeoutScheduled = false;\n    cancelHostTimeout();\n  }\n\n  isPerformingWork = true;\n  var previousPriorityLevel = currentPriorityLevel;\n\n  try {\n    if (enableProfiling) {\n      try {\n        return workLoop(hasTimeRemaining, initialTime);\n      } catch (error) {\n        if (currentTask !== null) {\n          var currentTime = exports.unstable_now();\n          markTaskErrored(currentTask, currentTime);\n          currentTask.isQueued = false;\n        }\n\n        throw error;\n      }\n    } else {\n      // No catch in prod code path.\n      return workLoop(hasTimeRemaining, initialTime);\n    }\n  } finally {\n    currentTask = null;\n    currentPriorityLevel = previousPriorityLevel;\n    isPerformingWork = false;\n\n    {\n      var _currentTime = exports.unstable_now();\n\n      markSchedulerSuspended(_currentTime);\n    }\n  }\n}\n\nfunction workLoop(hasTimeRemaining, initialTime) {\n  var currentTime = initialTime;\n  advanceTimers(currentTime);\n  currentTask = peek(taskQueue);\n\n  while (currentTask !== null && !(enableSchedulerDebugging )) {\n    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || exports.unstable_shouldYield())) {\n      // This currentTask hasn't expired, and we've reached the deadline.\n      break;\n    }\n\n    var callback = currentTask.callback;\n\n    if (typeof callback === 'function') {\n      currentTask.callback = null;\n      currentPriorityLevel = currentTask.priorityLevel;\n      var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;\n      markTaskRun(currentTask, currentTime);\n      var continuationCallback = callback(didUserCallbackTimeout);\n      currentTime = exports.unstable_now();\n\n      if (typeof continuationCallback === 'function') {\n        currentTask.callback = continuationCallback;\n        markTaskYield(currentTask, currentTime);\n      } else {\n        {\n          markTaskCompleted(currentTask, currentTime);\n          currentTask.isQueued = false;\n        }\n\n        if (currentTask === peek(taskQueue)) {\n          pop(taskQueue);\n        }\n      }\n\n      advanceTimers(currentTime);\n    } else {\n      pop(taskQueue);\n    }\n\n    currentTask = peek(taskQueue);\n  } // Return whether there's additional work\n\n\n  if (currentTask !== null) {\n    return true;\n  } else {\n    var firstTimer = peek(timerQueue);\n\n    if (firstTimer !== null) {\n      requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);\n    }\n\n    return false;\n  }\n}\n\nfunction unstable_runWithPriority(priorityLevel, eventHandler) {\n  switch (priorityLevel) {\n    case ImmediatePriority:\n    case UserBlockingPriority:\n    case NormalPriority:\n    case LowPriority:\n    case IdlePriority:\n      break;\n\n    default:\n      priorityLevel = NormalPriority;\n  }\n\n  var previousPriorityLevel = currentPriorityLevel;\n  currentPriorityLevel = priorityLevel;\n\n  try {\n    return eventHandler();\n  } finally {\n    currentPriorityLevel = previousPriorityLevel;\n  }\n}\n\nfunction unstable_next(eventHandler) {\n  var priorityLevel;\n\n  switch (currentPriorityLevel) {\n    case ImmediatePriority:\n    case UserBlockingPriority:\n    case NormalPriority:\n      // Shift down to normal priority\n      priorityLevel = NormalPriority;\n      break;\n\n    default:\n      // Anything lower than normal priority should remain at the current level.\n      priorityLevel = currentPriorityLevel;\n      break;\n  }\n\n  var previousPriorityLevel = currentPriorityLevel;\n  currentPriorityLevel = priorityLevel;\n\n  try {\n    return eventHandler();\n  } finally {\n    currentPriorityLevel = previousPriorityLevel;\n  }\n}\n\nfunction unstable_wrapCallback(callback) {\n  var parentPriorityLevel = currentPriorityLevel;\n  return function () {\n    // This is a fork of runWithPriority, inlined for performance.\n    var previousPriorityLevel = currentPriorityLevel;\n    currentPriorityLevel = parentPriorityLevel;\n\n    try {\n      return callback.apply(this, arguments);\n    } finally {\n      currentPriorityLevel = previousPriorityLevel;\n    }\n  };\n}\n\nfunction unstable_scheduleCallback(priorityLevel, callback, options) {\n  var currentTime = exports.unstable_now();\n  var startTime;\n\n  if (typeof options === 'object' && options !== null) {\n    var delay = options.delay;\n\n    if (typeof delay === 'number' && delay > 0) {\n      startTime = currentTime + delay;\n    } else {\n      startTime = currentTime;\n    }\n  } else {\n    startTime = currentTime;\n  }\n\n  var timeout;\n\n  switch (priorityLevel) {\n    case ImmediatePriority:\n      timeout = IMMEDIATE_PRIORITY_TIMEOUT;\n      break;\n\n    case UserBlockingPriority:\n      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;\n      break;\n\n    case IdlePriority:\n      timeout = IDLE_PRIORITY_TIMEOUT;\n      break;\n\n    case LowPriority:\n      timeout = LOW_PRIORITY_TIMEOUT;\n      break;\n\n    case NormalPriority:\n    default:\n      timeout = NORMAL_PRIORITY_TIMEOUT;\n      break;\n  }\n\n  var expirationTime = startTime + timeout;\n  var newTask = {\n    id: taskIdCounter++,\n    callback: callback,\n    priorityLevel: priorityLevel,\n    startTime: startTime,\n    expirationTime: expirationTime,\n    sortIndex: -1\n  };\n\n  {\n    newTask.isQueued = false;\n  }\n\n  if (startTime > currentTime) {\n    // This is a delayed task.\n    newTask.sortIndex = startTime;\n    push(timerQueue, newTask);\n\n    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {\n      // All tasks are delayed, and this is the task with the earliest delay.\n      if (isHostTimeoutScheduled) {\n        // Cancel an existing timeout.\n        cancelHostTimeout();\n      } else {\n        isHostTimeoutScheduled = true;\n      } // Schedule a timeout.\n\n\n      requestHostTimeout(handleTimeout, startTime - currentTime);\n    }\n  } else {\n    newTask.sortIndex = expirationTime;\n    push(taskQueue, newTask);\n\n    {\n      markTaskStart(newTask, currentTime);\n      newTask.isQueued = true;\n    } // Schedule a host callback, if needed. If we're already performing work,\n    // wait until the next time we yield.\n\n\n    if (!isHostCallbackScheduled && !isPerformingWork) {\n      isHostCallbackScheduled = true;\n      requestHostCallback(flushWork);\n    }\n  }\n\n  return newTask;\n}\n\nfunction unstable_pauseExecution() {\n}\n\nfunction unstable_continueExecution() {\n\n  if (!isHostCallbackScheduled && !isPerformingWork) {\n    isHostCallbackScheduled = true;\n    requestHostCallback(flushWork);\n  }\n}\n\nfunction unstable_getFirstCallbackNode() {\n  return peek(taskQueue);\n}\n\nfunction unstable_cancelCallback(task) {\n  {\n    if (task.isQueued) {\n      var currentTime = exports.unstable_now();\n      markTaskCanceled(task, currentTime);\n      task.isQueued = false;\n    }\n  } // Null out the callback to indicate the task has been canceled. (Can't\n  // remove from the queue because you can't remove arbitrary nodes from an\n  // array based heap, only the first one.)\n\n\n  task.callback = null;\n}\n\nfunction unstable_getCurrentPriorityLevel() {\n  return currentPriorityLevel;\n}\n\nvar unstable_requestPaint = requestPaint;\nvar unstable_Profiling =  {\n  startLoggingProfilingEvents: startLoggingProfilingEvents,\n  stopLoggingProfilingEvents: stopLoggingProfilingEvents,\n  sharedProfilingBuffer: sharedProfilingBuffer\n} ;\n\nexports.unstable_IdlePriority = IdlePriority;\nexports.unstable_ImmediatePriority = ImmediatePriority;\nexports.unstable_LowPriority = LowPriority;\nexports.unstable_NormalPriority = NormalPriority;\nexports.unstable_Profiling = unstable_Profiling;\nexports.unstable_UserBlockingPriority = UserBlockingPriority;\nexports.unstable_cancelCallback = unstable_cancelCallback;\nexports.unstable_continueExecution = unstable_continueExecution;\nexports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;\nexports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;\nexports.unstable_next = unstable_next;\nexports.unstable_pauseExecution = unstable_pauseExecution;\nexports.unstable_requestPaint = unstable_requestPaint;\nexports.unstable_runWithPriority = unstable_runWithPriority;\nexports.unstable_scheduleCallback = unstable_scheduleCallback;\nexports.unstable_wrapCallback = unstable_wrapCallback;\n  })();\n}\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/scheduler/cjs/scheduler.development.js?");

/***/ }),

/***/ "../../node_modules/scheduler/index.js":
/*!*********************************************!*\
  !*** ../../node_modules/scheduler/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ \"../../node_modules/scheduler/cjs/scheduler.development.js\");\n}\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/scheduler/index.js?");

/***/ }),

/***/ "../../node_modules/scheduler/tracing.js":
/*!***********************************************!*\
  !*** ../../node_modules/scheduler/tracing.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/scheduler-tracing.development.js */ \"../../node_modules/scheduler/cjs/scheduler-tracing.development.js\");\n}\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/scheduler/tracing.js?");

/***/ }),

/***/ "../../node_modules/shallowequal/index.js":
/*!************************************************!*\
  !*** ../../node_modules/shallowequal/index.js ***!
  \************************************************/
/***/ ((module) => {

eval("//\n\nmodule.exports = function shallowEqual(objA, objB, compare, compareContext) {\n  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;\n\n  if (ret !== void 0) {\n    return !!ret;\n  }\n\n  if (objA === objB) {\n    return true;\n  }\n\n  if (typeof objA !== \"object\" || !objA || typeof objB !== \"object\" || !objB) {\n    return false;\n  }\n\n  var keysA = Object.keys(objA);\n  var keysB = Object.keys(objB);\n\n  if (keysA.length !== keysB.length) {\n    return false;\n  }\n\n  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);\n\n  // Test for A's keys different from B.\n  for (var idx = 0; idx < keysA.length; idx++) {\n    var key = keysA[idx];\n\n    if (!bHasOwnProperty(key)) {\n      return false;\n    }\n\n    var valueA = objA[key];\n    var valueB = objB[key];\n\n    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;\n\n    if (ret === false || (ret === void 0 && valueA !== valueB)) {\n      return false;\n    }\n  }\n\n  return true;\n};\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/shallowequal/index.js?");

/***/ }),

/***/ "../../node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"ServerStyleSheet\": () => (/* binding */ Ue),\n/* harmony export */   \"StyleSheetConsumer\": () => (/* binding */ le),\n/* harmony export */   \"StyleSheetContext\": () => (/* binding */ ue),\n/* harmony export */   \"StyleSheetManager\": () => (/* binding */ ye),\n/* harmony export */   \"ThemeConsumer\": () => (/* binding */ Le),\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ze),\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ Ge),\n/* harmony export */   \"__PRIVATE__\": () => (/* binding */ Ze),\n/* harmony export */   \"createGlobalStyle\": () => (/* binding */ $e),\n/* harmony export */   \"css\": () => (/* binding */ Ae),\n/* harmony export */   \"isStyledComponent\": () => (/* binding */ N),\n/* harmony export */   \"keyframes\": () => (/* binding */ We),\n/* harmony export */   \"useTheme\": () => (/* binding */ Xe),\n/* harmony export */   \"version\": () => (/* binding */ C),\n/* harmony export */   \"withTheme\": () => (/* binding */ Je)\n/* harmony export */ });\n/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ \"../../node_modules/react-is/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ \"../../node_modules/shallowequal/index.js\");\n/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ \"../../node_modules/@emotion/stylis/dist/stylis.browser.esm.js\");\n/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ \"../../node_modules/@emotion/unitless/dist/unitless.browser.esm.js\");\n/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ \"../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ \"../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);\nfunction v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&\"object\"==typeof t&&\"[object Object]\"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return\"function\"==typeof e}function _(e){return true&&\"string\"==typeof e&&e||e.displayName||e.name||\"Component\"}function N(e){return e&&\"string\"==typeof e.styledComponentId}var A=\"undefined\"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||\"data-styled\",C=\"5.2.1\",I=\"undefined\"!=typeof window&&\"HTMLElement\"in window,P=Boolean(\"boolean\"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:\"undefined\"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&\"\"!==process.env.REACT_APP_SC_DISABLE_SPEEDY?\"false\"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:\"undefined\"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&\"\"!==process.env.SC_DISABLE_SPEEDY?\"false\"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:\"production\"!==\"development\"),O={},R= true?{1:\"Cannot create styled-component for component: %s.\\n\\n\",2:\"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\\n\\n- Are you trying to reuse it across renders?\\n- Are you accidentally calling collectStyles twice?\\n\\n\",3:\"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\\n\\n\",4:\"The `StyleSheetManager` expects a valid target or sheet prop!\\n\\n- Does this error occur on the client and is your target falsy?\\n- Does this error occur on the server and is the sheet falsy?\\n\\n\",5:\"The clone method cannot be used on the client!\\n\\n- Are you running in a client-like environment on the server?\\n- Are you trying to run SSR on the client?\\n\\n\",6:\"Trying to insert a new style tag, but the given Node is unmounted!\\n\\n- Are you using a custom target that isn't mounted?\\n- Does your document not have a valid head element?\\n- Have you accidentally removed a style tag manually?\\n\\n\",7:'ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\\n\\n```js\\ntheme={() => ({})}\\n```\\n\\n',8:'ThemeProvider: Please make your \"theme\" prop an object.\\n\\n',9:\"Missing document `<head>`\\n\\n\",10:\"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\\n\\n\",11:\"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\\n\\n\",12:\"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\\\`\\\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\\n\\n\",13:\"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\\n\\n\",14:'ThemeProvider: \"theme\" prop is required.\\n\\n',15:\"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\\n\\n```js\\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\\n```\\n\\n\",16:\"Reached the limit of how many styled components may be created at group %s.\\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\\nas for instance in your render method then you may be running into this limitation.\\n\\n\",17:\"CSSStyleSheet could not be found on HTMLStyleElement.\\nHas styled-components' style tag been unmounted or altered by another script?\\n\"}:0;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,\"\"+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t=\"\";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+\"/*!sc*/\\n\";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,\"\"+t),k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){k.set(e,t),x.set(t,e)},L=\"style[\"+A+'][data-styled-version=\"5.2.1\"]',G=new RegExp(\"^\"+A+'\\\\.g(\\\\d+)\\\\[id=\"([\\\\w\\\\d-]+)\"\\\\].*?\"([^\"]*)'),F=function(e,t,n){for(var r,o=n.split(\",\"),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=t.innerHTML.split(\"/*!sc*/\\n\"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return true?__webpack_require__.nc:0},H=function(e){var t=document.head,n=e||t,r=document.createElement(\"style\"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,\"active\"),r.setAttribute(\"data-styled-version\",\"5.2.1\");var i=q();return i&&r.setAttribute(\"nonce\",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode(\"\")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&\"string\"==typeof t.cssText?t.cssText:\"\"},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:\"\"},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:\"\"},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&\"active\"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r=\"\",o=0;o<n;o++){var s=M(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(void 0!==i&&0!==a.length){var c=A+\".g\"+o+'[id=\"'+s+'\"]',u=\"\";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+\",\")})),r+=\"\"+a+c+'{content:\"'+u+'\"}/*!sc*/\\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n=\"\";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,\"$1-$2\")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne(\"5.2.1\"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId=\"\",this.isStatic= false&&0,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(\"\"),i=ee(te(this.baseHash,s.length)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,\".\"+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l=\"\",d=0;d<c;d++){var h=this.rules[d];if(\"string\"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(\"\"):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,\".\"+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(\" \")},e}(),ie=/^\\s*\\/\\/.*$/gm,ae=[\":\",\"[\",\".\",\"#\"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__.default(a),d=[],h=function(e){function t(t){if(t)try{e(t+\"}\")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+\";\"),\"\";break;case 2:if(0===u)return r+\"/*|*/\";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),\"\";default:return r+(0===d?\"/*|*/\":\"\")}case-2:r.split(\"/*|*/}\").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&ae.includes(s[n.length])||s.match(o)?e:\".\"+t};function m(e,s,i,a){void 0===a&&(a=\"&\");var c=e.replace(ie,\"\"),u=s&&i?i+\" \"+s+\" { \"+c+\" }\":c;return t=a,n=s,r=new RegExp(\"\\\\\"+n+\"\\\\b\",\"g\"),o=new RegExp(\"(\\\\\"+n+\"\\\\b){2,}\"),l(i||!s?\"\":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():\"\",m}var ue=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue)||he}function me(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de)||pe}function ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1__.createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1__.createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1__.Children.only(e.children):0))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,\"@keyframes\"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id=\"sc-keyframes-\"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return\"-\"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,\"-ms-\"):e}var _e=function(e){return null==e||!1===e||\"\"===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)\"\"!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return\"\";if(N(e))return\".\"+e.styledComponentId;if(b(e)){if(\"function\"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(_(e)+\" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\"),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(S(t[i])?s.push.apply(s,e(t[i],i)):b(t[i])?s.push(be(i)+\":\",t[i],\";\"):s.push(be(i)+\": \"+(r=i,null==(o=t[i])||\"boolean\"==typeof o||\"\"===o?\"\":\"number\"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__.default?String(o).trim():o+\"px\")+\";\"));return n?[n+\" {\"].concat(s,[\"}\"]):s}(e):e.toString()}function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ne(g(w,[e].concat(n))):0===n.length&&1===e.length&&\"string\"==typeof e[0]?e:Ne(g(e,n))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(true){var n=\"The component \"+e+(t?' with the id of \"'+t+'\"':\"\")+\" has been created dynamically.\\nYou may see this warning because you've called styled inside another component.\\nTo resolve this only create new StyledComponents outside of any render method and function component.\";try{(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),Ie.has(n)||(console.warn(n),Ie.add(n))}catch(e){Ce.test(e.message)&&Ie.delete(n)}}},Oe=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!\"#$%&'()*+,./:;<=>?@[\\\\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,\"-\").replace(De,\"\")}var Te=function(e){return ee(ne(e)>>>0)};function ke(e){return\"string\"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return\"function\"==typeof e||\"object\"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return\"__proto__\"!==e&&\"constructor\"!==e&&\"prototype\"!==e};function Be(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(xe(i))for(var a in i)Ve(a)&&Be(e,i[a],a)}return e}var ze=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),Le=ze.Consumer;function Ge(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&\"object\"==typeof n?n:j(7)}return Array.isArray(e)||\"object\"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1__.createElement(ze.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n=\"string\"!=typeof e?\"sc\":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+\"-\"+Te(\"5.2.1\"+n+Fe[n]);return t?t+\"-\"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?\"styled.\"+e:\"Styled(\"+_(e)+\")\"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+\"-\"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r){return e.shouldForwardProp(n,r)&&t.shouldForwardProp(n,r)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]=\"className\"===t?(n=o[t],s=i[t],n&&s?n+\" \"+s:n||s):i[t]})),[r,o]}(Oe(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(i), true&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)\"$\"!==I[0]&&\"as\"!==I&&(\"forwardedAs\"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default):!N||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default)(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(\" \"),C.ref=w,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,[\"componentId\"]),s=r&&r+\"-\"+(ke(e)?e:je(_(e)));return Ye(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,\"defaultProps\",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Pe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of \"'+t+'\"':\"\";console.warn(\"Over 200 classes were generated for component \"+e+s+\".\\nConsider using the attrs method, together with a style object for frequently changed styles.\\nExample:\\n  const Component = styled.div.attrs(props => ({\\n    style: {\\n      background: props.background,\\n    },\\n  }))`width: 100%;`\\n\\n  <Component />\"),r=!0,n={}}}}(f,g)),C.toString=function(){return\".\"+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return j(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};[\"a\",\"abbr\",\"address\",\"area\",\"article\",\"aside\",\"audio\",\"b\",\"base\",\"bdi\",\"bdo\",\"big\",\"blockquote\",\"body\",\"br\",\"button\",\"canvas\",\"caption\",\"cite\",\"code\",\"col\",\"colgroup\",\"data\",\"datalist\",\"dd\",\"del\",\"details\",\"dfn\",\"dialog\",\"div\",\"dl\",\"dt\",\"em\",\"embed\",\"fieldset\",\"figcaption\",\"figure\",\"footer\",\"form\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"head\",\"header\",\"hgroup\",\"hr\",\"html\",\"i\",\"iframe\",\"img\",\"input\",\"ins\",\"kbd\",\"keygen\",\"label\",\"legend\",\"li\",\"link\",\"main\",\"map\",\"mark\",\"marquee\",\"menu\",\"menuitem\",\"meta\",\"meter\",\"nav\",\"noscript\",\"object\",\"ol\",\"optgroup\",\"option\",\"output\",\"p\",\"param\",\"picture\",\"pre\",\"progress\",\"q\",\"rp\",\"rt\",\"ruby\",\"s\",\"samp\",\"script\",\"section\",\"select\",\"small\",\"source\",\"span\",\"strong\",\"style\",\"sub\",\"summary\",\"sup\",\"table\",\"tbody\",\"td\",\"textarea\",\"tfoot\",\"th\",\"thead\",\"time\",\"title\",\"tr\",\"track\",\"u\",\"ul\",\"var\",\"video\",\"wbr\",\"circle\",\"clipPath\",\"defs\",\"ellipse\",\"foreignObject\",\"g\",\"image\",\"line\",\"linearGradient\",\"marker\",\"mask\",\"path\",\"pattern\",\"polygon\",\"polyline\",\"radialGradient\",\"rect\",\"stop\",\"svg\",\"text\",\"tspan\"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(\"\"),\"\"),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ae.apply(void 0,[e].concat(n)),a=\"sc-global-\"+Te(JSON.stringify(i)),u=new He(i,a);function l(e){var t=fe(),n=me(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1__.Children.count(e.children)&&console.warn(\"The global style component \"+a+\" was given child JSX. createGlobalStyle does not render children.\"), true&&i.some((function(e){return\"string\"==typeof e&&-1!==e.indexOf(\"@import\")}))&&console.warn(\"Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.\"),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Oe(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Pe(a),react__WEBPACK_IMPORTED_MODULE_1__.memo(l)}function We(e){ true&&\"undefined\"!=typeof navigator&&\"ReactNative\"===navigator.product&&console.warn(\"`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.\");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(\"\"),s=Te(o);return new ve(s,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=q();return\"<style \"+[n&&'nonce=\"'+n+'\"',A+'=\"true\"','data-styled-version=\"5.2.1\"'].filter(Boolean).join(\" \")+\">\"+t+\"</style>\"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]=\"\",t[\"data-styled-version\"]=\"5.2.1\",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"style\",v({},n,{key:\"sc-0-0\"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1__.createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),i=e.defaultProps,a=Oe(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class \"'+_(e)+'\"'),react__WEBPACK_IMPORTED_MODULE_1__.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName=\"WithTheme(\"+_(e)+\")\",t},Xe=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze)},Ze={StyleSheet:Z,masterSheet:he}; true&&\"undefined\"!=typeof navigator&&\"ReactNative\"===navigator.product&&console.warn(\"It looks like you've imported 'styled-components' on React Native.\\nPerhaps you're looking to import 'styled-components/native'?\\nRead more about this at https://www.styled-components.com/docs/basics#react-native\"), true&&(window[\"__styled-components-init__\"]=window[\"__styled-components-init__\"]||0,1===window[\"__styled-components-init__\"]&&console.warn(\"It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\\n\\nSee https://s-c.sh/2BAXzed for more info.\"),window[\"__styled-components-init__\"]+=1);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (qe);\n//# sourceMappingURL=styled-components.browser.esm.js.map\n\n\n//# sourceURL=webpack://@prifina-widgets/chat/../../node_modules/styled-components/dist/styled-components.browser.esm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("d155864e041ffcd8b291")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "@prifina-widgets/chat:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate_prifina_widgets_chat"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					module.hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/webpack-dev-server.js");
/******/ 	
/******/ })()
;