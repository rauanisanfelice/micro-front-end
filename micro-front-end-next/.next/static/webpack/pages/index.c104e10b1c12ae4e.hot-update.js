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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_filipe_Documentos_LUIZALABS_micro_front_end_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_filipe_Documentos_LUIZALABS_micro_front_end_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_filipe_Documentos_LUIZALABS_micro_front_end_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: null,\n        age: null\n    }), profile = ref[0], setProfile = ref[1];\n    var submit = function() {\n        var _ref = _asyncToGenerator(_home_filipe_Documentos_LUIZALABS_micro_front_end_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_filipe_Documentos_LUIZALABS_micro_front_end_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        console.log(profile);\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        _ctx.next = 9;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function submit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var change = function(param) {\n        var _currentTarget = param.currentTarget, name = _currentTarget.name, value = _currentTarget.value;\n        setProfile(_defineProperty({}, name, value));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().display__flex),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"FORMULARIO NEXT\"\n                    }, void 0, false, {\n                        fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: submit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().form__field),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    htmlFor: \"name\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                        type: \"text\",\n                                        name: \"name\",\n                                        placeholder: \"Seu nome\",\n                                        id: \"name\",\n                                        autoComplete: \"off\",\n                                        onChange: change\n                                    }, void 0, false, {\n                                        fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().form__field),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    htmlFor: \"age\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                        type: \"text\",\n                                        name: \"age\",\n                                        placeholder: \"Sua idade\",\n                                        id: \"age\",\n                                        autoComplete: \"off\",\n                                        onChange: change\n                                    }, void 0, false, {\n                                        fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                type: \"submit\",\n                                children: \"Enviar\"\n                            }, void 0, false, {\n                                fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/filipe/Documentos/LUIZALABS/micro-front-end-next/pages/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"icSNdDbcqUaVnvXCHopdErXtXOI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUVPO0FBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxHQUFLLENBQUNHLElBQUksR0FBYSxRQUN2QixHQUQ2QixDQUFDOztJQUM1QixHQUFLLENBQXlCRixHQUc1QixHQUg0QkEsK0NBQVEsQ0FBQyxDQUFDO1FBQ3RDRyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxHQUFHLEVBQUUsSUFBSTtJQUNYLENBQUMsR0FITUMsT0FBTyxHQUFnQkwsR0FHNUIsS0FIY00sVUFBVSxHQUFJTixHQUc1QjtJQUNGLEdBQUssQ0FBQ08sTUFBTTt1TUFBRyxRQUFRLFdBQUksQ0FBQzs7Ozs7d0JBRXhCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBT3ZCLENBQUM7d0JBVEtFLE1BQU07Ozs7SUFXWixHQUFLLENBQUNHLE1BQU0sR0FBRyxRQUFRLFFBQW9DLENBQUM7bUNBQTFDQyxhQUFhLEVBQUlSLElBQUksa0JBQUpBLElBQUksRUFBRVMsS0FBSyxrQkFBTEEsS0FBSztRQUM1Q04sVUFBVSxxQkFDUEgsSUFBSSxFQUFHUyxLQUFLO0lBRWpCLENBQUM7SUFFRCxNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBRWIsMEVBQWdCOzhGQUM3QlksQ0FBRztZQUFDQyxTQUFTLEVBQUViLDhFQUFvQjtrR0FDakNZLENBQUc7O2dHQUNESSxDQUFFO2tDQUFDLENBQWU7Ozs7OztnR0FDbEJDLENBQUk7d0JBQUNDLFFBQVEsRUFBRVosTUFBTTs7d0dBQ25CTSxDQUFHO2dDQUFDQyxTQUFTLEVBQUViLDRFQUFrQjtzSEFDL0JvQixDQUFLO29DQUFDQyxPQUFPLEVBQUMsQ0FBTTswSEFDbEJDLENBQUs7d0NBQUNULFNBQVMsRUFBRWIsc0VBQVk7d0NBQUV1QixJQUFJLEVBQUMsQ0FBTTt3Q0FBQ3JCLElBQUksRUFBQyxDQUFNO3dDQUFDc0IsV0FBVyxFQUFDLENBQVU7d0NBQUNDLEVBQUUsRUFBQyxDQUFNO3dDQUFDQyxZQUFZLEVBQUMsQ0FBSzt3Q0FBQ0MsUUFBUSxFQUFFbEIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozt3R0FJL0hHLENBQUc7Z0NBQUNDLFNBQVMsRUFBRWIsNEVBQWtCO3NIQUMvQm9CLENBQUs7b0NBQUNDLE9BQU8sRUFBQyxDQUFLOzBIQUNqQkMsQ0FBSzt3Q0FBQ1QsU0FBUyxFQUFFYixzRUFBWTt3Q0FBRXVCLElBQUksRUFBQyxDQUFNO3dDQUFDckIsSUFBSSxFQUFDLENBQUs7d0NBQUNzQixXQUFXLEVBQUMsQ0FBVzt3Q0FBQ0MsRUFBRSxFQUFDLENBQUs7d0NBQUNDLFlBQVksRUFBQyxDQUFLO3dDQUFDQyxRQUFRLEVBQUVsQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O3dHQUk5SG1CLENBQU07Z0NBQUNmLFNBQVMsRUFBRWIsdUVBQWE7Z0NBQUV1QixJQUFJLEVBQUMsQ0FBUTswQ0FBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxFLENBQUM7R0E5Q0t0QixJQUFJO0tBQUpBLElBQUk7QUFnRFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IG51bGwsXG4gICAgYWdlOiBudWxsLFxuICB9KVxuICBjb25zdCBzdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKHByb2ZpbGUpXG4gICAgICByZXR1cm5cblxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL3Byb2ZpbGUnKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGFuZ2UgPSAoeyBjdXJyZW50VGFyZ2V0OiB7IG5hbWUsIHZhbHVlIH19OiBhbnkpID0+IHtcbiAgICBzZXRQcm9maWxlKHtcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXNwbGF5X19mbGV4fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+Rk9STVVMQVJJTyBORVhUPC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9fZmllbGR9PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB0eXBlPSd0ZXh0JyBuYW1lPSduYW1lJyBwbGFjZWhvbGRlcj0nU2V1IG5vbWUnIGlkPSduYW1lJyBhdXRvQ29tcGxldGU9J29mZicgb25DaGFuZ2U9e2NoYW5nZX0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fX2ZpZWxkfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2FnZSc+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB0eXBlPSd0ZXh0JyBuYW1lPSdhZ2UnIHBsYWNlaG9sZGVyPSdTdWEgaWRhZGUnIGlkPSdhZ2UnIGF1dG9Db21wbGV0ZT0nb2ZmJyBvbkNoYW5nZT17Y2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSB0eXBlPVwic3VibWl0XCI+RW52aWFyPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsIm5hbWUiLCJhZ2UiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsInN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkaXNwbGF5X19mbGV4IiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJmb3JtX19maWVsZCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaWQiLCJhdXRvQ29tcGxldGUiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});