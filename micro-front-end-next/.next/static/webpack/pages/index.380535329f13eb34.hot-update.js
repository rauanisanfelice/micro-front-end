"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_filipe_Documentos_LUIZALABS_micro_front_end_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_filipe_Documentos_LUIZALABS_micro_front_end_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_filipe_Documentos_LUIZALABS_micro_front_end_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: '',\n        age: 0\n    }), profile = ref[0], setProfile = ref[1];\n    var submit = function() {\n        var _ref = _asyncToGenerator(_home_filipe_Documentos_LUIZALABS_micro_front_end_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_filipe_Documentos_LUIZALABS_micro_front_end_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        console.log(profile);\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 9;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function submit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var change = function(param) {\n        var _currentTarget = param.currentTarget, name = _currentTarget.name, value = _currentTarget.value;\n        setProfile(_defineProperty({}, name, value));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().display__flex),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"FORMULARIO NEXT\"\n                    }, void 0, false, {\n                        fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: submit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().form__field),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    htmlFor: \"name\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                        type: \"text\",\n                                        name: \"name\",\n                                        placeholder: \"Seu nome\",\n                                        id: \"name\",\n                                        autoComplete: \"off\",\n                                        onChange: change\n                                    }, void 0, false, {\n                                        fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().form__field),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    htmlFor: \"age\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                        type: \"text\",\n                                        name: \"age\",\n                                        placeholder: \"Sua idade\",\n                                        id: \"age\",\n                                        autoComplete: \"off\",\n                                        onChange: change\n                                    }, void 0, false, {\n                                        fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                type: \"submit\",\n                                children: \"Enviar\"\n                            }, void 0, false, {\n                                fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"ZyzsyLbDUZSORPVazq2itDGKmgE=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUVPO0FBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxHQUFLLENBQUNHLElBQUksR0FBYSxRQUN2QixHQUQ2QixDQUFDOztJQUM1QixHQUFLLENBQXlCRixHQUc1QixHQUg0QkEsK0NBQVEsQ0FBeUIsQ0FBQztRQUM5REcsSUFBSSxFQUFFLENBQUU7UUFDUkMsR0FBRyxFQUFFLENBQUM7SUFDUixDQUFDLEdBSE1DLE9BQU8sR0FBZ0JMLEdBRzVCLEtBSGNNLFVBQVUsR0FBSU4sR0FHNUI7SUFDRixHQUFLLENBQUNPLE1BQU07dU1BQUcsUUFBUSxXQUFJLENBQUM7Ozs7O3dCQUV4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztRQU92QixDQUFDO3dCQVRLRSxNQUFNOzs7O0lBV1osR0FBSyxDQUFDRyxNQUFNLEdBQUcsUUFBUSxRQUFvQyxDQUFDO21DQUExQ0MsYUFBYSxFQUFJUixJQUFJLGtCQUFKQSxJQUFJLEVBQUVTLEtBQUssa0JBQUxBLEtBQUs7UUFDNUNOLFVBQVUscUJBQ1BILElBQUksRUFBR1MsS0FBSztJQUVqQixDQUFDO0lBRUQsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUViLDBFQUFnQjs4RkFDN0JZLENBQUc7WUFBQ0MsU0FBUyxFQUFFYiw4RUFBb0I7a0dBQ2pDWSxDQUFHOztnR0FDREksQ0FBRTtrQ0FBQyxDQUFlOzs7Ozs7Z0dBQ2xCQyxDQUFJO3dCQUFDQyxRQUFRLEVBQUVaLE1BQU07O3dHQUNuQk0sQ0FBRztnQ0FBQ0MsU0FBUyxFQUFFYiw0RUFBa0I7c0hBQy9Cb0IsQ0FBSztvQ0FBQ0MsT0FBTyxFQUFDLENBQU07MEhBQ2xCQyxDQUFLO3dDQUFDVCxTQUFTLEVBQUViLHNFQUFZO3dDQUFFdUIsSUFBSSxFQUFDLENBQU07d0NBQUNyQixJQUFJLEVBQUMsQ0FBTTt3Q0FBQ3NCLFdBQVcsRUFBQyxDQUFVO3dDQUFDQyxFQUFFLEVBQUMsQ0FBTTt3Q0FBQ0MsWUFBWSxFQUFDLENBQUs7d0NBQUNDLFFBQVEsRUFBRWxCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7d0dBSS9IRyxDQUFHO2dDQUFDQyxTQUFTLEVBQUViLDRFQUFrQjtzSEFDL0JvQixDQUFLO29DQUFDQyxPQUFPLEVBQUMsQ0FBSzswSEFDakJDLENBQUs7d0NBQUNULFNBQVMsRUFBRWIsc0VBQVk7d0NBQUV1QixJQUFJLEVBQUMsQ0FBTTt3Q0FBQ3JCLElBQUksRUFBQyxDQUFLO3dDQUFDc0IsV0FBVyxFQUFDLENBQVc7d0NBQUNDLEVBQUUsRUFBQyxDQUFLO3dDQUFDQyxZQUFZLEVBQUMsQ0FBSzt3Q0FBQ0MsUUFBUSxFQUFFbEIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozt3R0FJOUhtQixDQUFNO2dDQUFDZixTQUFTLEVBQUViLHVFQUFhO2dDQUFFdUIsSUFBSSxFQUFDLENBQVE7MENBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRSxDQUFDO0dBOUNLdEIsSUFBSTtLQUFKQSxJQUFJO0FBZ0RWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIG51bWJlcj4+KHtcbiAgICBuYW1lOiAnJyxcbiAgICBhZ2U6IDAsXG4gIH0pXG4gIGNvbnN0IHN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2cocHJvZmlsZSlcbiAgICAgIHJldHVyblxuXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvcHJvZmlsZScpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoYW5nZSA9ICh7IGN1cnJlbnRUYXJnZXQ6IHsgbmFtZSwgdmFsdWUgfX06IGFueSkgPT4ge1xuICAgIHNldFByb2ZpbGUoe1xuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpc3BsYXlfX2ZsZXh9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5GT1JNVUxBUklPIE5FWFQ8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX19maWVsZH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIHBsYWNlaG9sZGVyPSdTZXUgbm9tZScgaWQ9J25hbWUnIGF1dG9Db21wbGV0ZT0nb2ZmJyBvbkNoYW5nZT17Y2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9fZmllbGR9PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nYWdlJz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHR5cGU9J3RleHQnIG5hbWU9J2FnZScgcGxhY2Vob2xkZXI9J1N1YSBpZGFkZScgaWQ9J2FnZScgYXV0b0NvbXBsZXRlPSdvZmYnIG9uQ2hhbmdlPXtjaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIb21lIiwibmFtZSIsImFnZSIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwic3VibWl0IiwiY29uc29sZSIsImxvZyIsImNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImRpc3BsYXlfX2ZsZXgiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImZvcm1fX2ZpZWxkIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});