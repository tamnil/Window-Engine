(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s='./src/window_engine.js')})({"./index.html":/*!********************!*\
  !*** ./index.html ***!
  \********************//*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "index.html";\n\n//# sourceURL=webpack:///./index.html?')},"./node_modules/css-loader/dist/cjs.js!./src/window_engine.css":/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/window_engine.css ***!
  \*********************************************************************//*! no static exports found */function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".mydiv {\\n\\tposition: absolute;\\n\\ttop: 80px;\\n\\tz-index: 9;\\n\\tbackground-color: #f1f1f1;\\n\\twidth: 800px;\\n\\theight: 400px;\\n\\tborder-radius: 8px 8px 0px 0px;\\n\\tbox-shadow: 8px 8px 6px -6px black;\\n\\topacity: 0.9;\\n\\tdisplay: none;\\n}\\n\\n.mydivheader {\\n\\tpadding: 10px;\\n\\tz-index: 10;\\n\\tbackground-color: black;\\n\\tcolor: #fff;\\n\\tborder-radius: 4px 4px 0px 0px;\\n\\theight: 40px;\\n\\tjustify-content: space-between !important;\\n\\tdisplay: flex !important;\\n}\\n\\n.mydivheader p {\\n\\tcursor: default;\\n}\\n\\n.mydivActive {\\n\\tz-index: 100;\\n}\\n\\n.windowTitle {\\n\\tposition: relative;\\n\\tbottom: 2px;\\n}\\n\\n.mainWindow {\\n\\tpadding: 20px;\\n\\tcursor: default;\\n}\\n\\n[id^=\\"closeButton\\"] {\\n\\tcolor: white;\\n\\tcursor: pointer;\\n\\tposition: relative;\\n\\tbottom: 9px;\\n\\tfont-size: 24px;\\n}\\n\\n.windowGroup {\\n\\tjustify-content: center !important;\\n\\tdisplay: flex !important;\\n}\\n\\n.purple {\\n\\tbackground-color: rebeccapurple;\\n}\\n\\n.orange {\\n\\tbackground-color: burlywood;\\n}\\n\\n.brown {\\n\\tbackground-color: brown;\\n}\\n\\n.cyan {\\n\\tbackground-color: darkcyan;\\n}\\n\\n.crimson {\\n\\tbackground-color: crimson;\\n}\\n\\n.green {\\n\\tbackground-color: darkgreen;\\n}\\n\\n.small {\\n\\twidth: 600px;\\n\\theight: 300px;\\n}\\n\\n.large {\\n\\twidth: 1000px;\\n\\theight: 500px;\\n}\\n", ""]);\n\n\n//# sourceURL=webpack:///./src/window_engine.css?./node_modules/css-loader/dist/cjs.js')},"./node_modules/css-loader/dist/runtime/api.js":/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************//*! no static exports found */function(module,exports,__webpack_require__){'use strict';eval('\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], "{").concat(content, "}");\n      }\n\n      return content;\n    }).join(\'\');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === \'string\') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \'\']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || \'\'; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === \'function\') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n  }\n\n  return [content].join(\'\\n\');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n  return "/*# ".concat(data, " */");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?')},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************//*! no static exports found */function(module,exports,__webpack_require__){'use strict';eval('\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === \'undefined\') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === \'undefined\') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement(\'style\');\n\n  if (typeof options.attributes.nonce === \'undefined\') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === \'function\') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || \'head\');\n\n    if (!target) {\n      throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join(\'\\n\');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? \'\' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\'media\', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === \'object\' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== \'boolean\') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?')},"./src/window_engine.css":/*!*******************************!*\
  !*** ./src/window_engine.css ***!
  \*******************************//*! no static exports found */function(module,exports,__webpack_require__){eval('var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./window_engine.css */ "./node_modules/css-loader/dist/cjs.js!./src/window_engine.css");\n\nif (typeof content === \'string\') {\n  content = [[module.i, content, \'\']];\n}\n\nvar options = {}\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/window_engine.css?')},"./src/window_engine.js":/*!******************************!*\
  !*** ./src/window_engine.js ***!
  \******************************//*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ./window_engine.css */ "./src/window_engine.css");\n\n__webpack_require__(/*! ../index.html */ "./index.html");\n\nvar protoCall = function protoCall(x) {\n  return function (y, z) {\n    return Array.prototype[x].call(z, y);\n  };\n}; // const getElementsByClass = x => document.getElementsByClassName(x)\n\n\nvar mapCollection = function mapCollection(fn) {\n  return function (x) {\n    return protoCall(\'map\')(fn, x);\n  };\n};\n\nvar filterCollection = function filterCollection(fn) {\n  return function (x) {\n    return protoCall(\'filter\')(fn, x);\n  };\n};\n\nvar reduceCollection = function reduceCollection(fn, x) {\n  return protoCall(\'reduce\')(fn, x);\n};\n\nvar windowActivators = document.getElementsByClassName(\'window-activator\');\nvar windowTargets = document.getElementsByClassName(\'target\');\nvar closeButtons = document.getElementsByClassName(\'close-btn\'); //io\n\nvar hideElement = function hideElement(el) {\n  return el.style.display = \'none\';\n};\n\nvar targetContainsClass = function targetContainsClass(el) {\n  return function (cl) {\n    return el.target.classList.contains(cl);\n  };\n}; // binding events:\n\n\nvar clickOnClose = function clickOnClose(x) {\n  return mapCollection(function (x) {\n    return x.onclick = function (ev) {\n      return hideElement(ev.srcElement.closest(\'.target\'));\n    };\n  })(x);\n};\n\nvar activateWindow = function activateWindow(x) {\n  return mapCollection(function (x) {\n    return x.style.display = \'block\';\n  })(x);\n};\n\nvar isMovable = function isMovable(ev) {\n  return targetContainsClass(ev)(\'mydivheader\');\n};\n\nvar boundingBox = function boundingBox(x) {\n  return x.getBoundingClientRect();\n}; //formatting\n\n\nvar formatStrToPx = function formatStrToPx(x) {\n  return String(x) + \'px\';\n}; //io\n\n\nvar setTargetWindow = function setTargetWindow(target, val) {\n  return [\'left\', \'top\'].map(function (x, idx) {\n    return target.style[x] = formatStrToPx(val[idx] - 20);\n  });\n};\n\nvar moving = function moving(target) {\n  return function (ev) {\n    return ev.which == 1 ? setTargetWindow(target, [ev.clientX, ev.clientY]) : false;\n  };\n};\n\nvar moveMousePositons = function moveMousePositons(target) {\n  return target.addEventListener(\'mousemove\', moving(target));\n};\n\nvar moveElement = function moveElement(target) {\n  return moveMousePositons(target.closest(\'.target\'));\n};\n\nvar listTemp = function listTemp(ev) {\n  return moveElement(ev.target);\n};\n\nvar dragElementF = function dragElementF(x) {\n  return mapCollection(function (el) {\n    return el.addEventListener("mousedown", listTemp);\n  })(x);\n}; //fading\n//init\n\n\nvar init = function init() {\n  activateWindow(windowTargets);\n  clickOnClose(closeButtons);\n  dragElementF(windowTargets);\n  console.log(dragElementF(windowTargets));\n  console.log(windowTargets);\n};\n\ninit(); // }\n\n/*\nfunction windowCreation(id) {\n    var isOut;\n    document.getElementById("closeButton" + id).onclick = function (e) {\n        console.log(e)\n        fadeOut(document.getElementById("mydiv" + id), 50);\n        isOut = true;\n    };\n    document.getElementById("button" + id).onclick = function (el) {\n        console.log(el);\n        if (document.getElementById("mydiv" + id).style.display === "initial") {\n            isOut = false;\n        }\n        if (isOut) {\n            document.getElementById("mydiv" + id).style = "position: absolute;top: 80px;";\n            fadeIn(document.getElementById("mydiv" + id), 50);\n        }\n        isOut = false;\n    };\n    dragElement(document.getElementById("mydiv" + id));\n    isOut = true;\n}\n*/\n\n/*\nfunction dragElement(elmnt) {\nvar pos1 = 0,\n    pos2 = 0,\n    pos3 = 0,\n    pos4 = 0;\nif (document.getElementById(elmnt.id + "header")) {\n    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;\n} else {\n    elmnt.onmousedown = dragMouseDown;\n}\n function dragMouseDown(e) {\n    e = e || window.event;\n    e.preventDefault();\n    pos3 = e.clientX;\n    pos4 = e.clientY;\n    document.onmouseup = closeDragElement;\n    document.onmousemove = elementDrag;\n    var active = document.getElementsByClassName("mydiv");\n    for (var i = active.length - 1; i > -1; i--) {\n        active[i].classList.remove("mydivActive");\n    }\n    document.getElementById(elmnt.id).className += " mydivActive";\n}\n function elementDrag(e) {\n    e = e || window.event;\n    e.preventDefault();\n    pos1 = pos3 - e.clientX;\n    pos2 = pos4 - e.clientY;\n    pos3 = e.clientX;\n    pos4 = e.clientY;\n    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";\n    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";\n}\n function closeDragElement() {\n    document.onmouseup = null;\n    document.onmousemove = null;\n}\n}\n*/\n\nfunction fadeIn(elem, ms) {\n  elem.style.opacity = 0;\n  elem.style.display = "initial";\n\n  if (elem.classList.contains("fade")) {\n    var opacity = 0;\n    var timer = setInterval(function () {\n      opacity += 10 / ms;\n\n      if (opacity >= 1) {\n        clearInterval(timer);\n        opacity = 0.9;\n      }\n\n      elem.style.opacity = opacity;\n      var active = document.getElementsByClassName("mydiv");\n\n      for (var i = active.length - 1; i > -1; i--) {\n        active[i].classList.remove("mydivActive");\n      }\n\n      elem.className += " mydivActive";\n    }, 50);\n  } else {\n    elem.style.opacity = 0.9;\n    var active = document.getElementsByClassName("mydiv");\n\n    for (var i = active.length - 1; i > -1; i--) {\n      active[i].classList.remove("mydivActive");\n    }\n\n    elem.className += " mydivActive";\n  }\n}\n\nfunction fadeOut(elem, ms) {\n  if (elem.classList.contains("fade")) {\n    var opacity = 1;\n    var timer = setInterval(function () {\n      opacity -= 10 / ms;\n\n      if (opacity <= 0) {\n        clearInterval(timer);\n        opacity = 0;\n        elem.style.display = "none";\n      }\n\n      elem.style.opacity = opacity;\n    }, 50);\n  } else {\n    elem.style.opacity = 0;\n    elem.style.display = "none";\n    var active = document.getElementsByClassName("mydiv");\n\n    for (var i = active.length - 1; i > -1; i--) {\n      active[i].classList.remove("mydivActive");\n    }\n\n    elem.className += " mydivActive";\n  }\n}\n\n//# sourceURL=webpack:///./src/window_engine.js?')}});