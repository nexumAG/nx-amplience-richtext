webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useTranslate.ts":
/*!*******************************!*\
  !*** ./hooks/useTranslate.ts ***!
  \*******************************/
/*! exports provided: useTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useTranslation\", function() { return useTranslation; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_defaultValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/defaultValues */ \"./utils/defaultValues.ts\");\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages */ \"./pages/index.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useTranslation(initalValue) {\n  _s();\n\n  var sdk = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_pages__WEBPACK_IMPORTED_MODULE_3__[\"SdkContext\"]);\n  var locales = sdk.locales;\n  var availableLocales = locales.available;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Object(_utils_defaultValues__WEBPACK_IMPORTED_MODULE_2__[\"defaultValues\"])(availableLocales, initalValue)),\n      translated = _useState[0],\n      setTranslated = _useState[1];\n\n  function updateTranslated(locale, value) {\n    console.log(locale);\n    console.log(value);\n    var updated = Object.assign({}, translated, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, locale, value));\n    setTranslated({\n      updated: updated\n    });\n  }\n\n  return {\n    translated: translated,\n    updateTranslated: updateTranslated\n  };\n}\n\n_s(useTranslation, \"g5Lj3naFjtvJNbSHVjik+goeWx8=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVHJhbnNsYXRlLnRzP2IyNDgiXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb24iLCJpbml0YWxWYWx1ZSIsInNkayIsInVzZUNvbnRleHQiLCJTZGtDb250ZXh0IiwibG9jYWxlcyIsImF2YWlsYWJsZUxvY2FsZXMiLCJhdmFpbGFibGUiLCJ1c2VTdGF0ZSIsImRlZmF1bHRWYWx1ZXMiLCJ0cmFuc2xhdGVkIiwic2V0VHJhbnNsYXRlZCIsInVwZGF0ZVRyYW5zbGF0ZWQiLCJsb2NhbGUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVkIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLGNBQVQsQ0FBd0JDLFdBQXhCLEVBQTBDO0FBQUE7O0FBQy9DLE1BQU1DLEdBQUcsR0FBR0Msd0RBQVUsQ0FBQ0MsaURBQUQsQ0FBdEI7QUFEK0MsTUFHdkNDLE9BSHVDLEdBR3RCSCxHQUhzQixDQUd2Q0csT0FIdUM7QUFBQSxNQUk1QkMsZ0JBSjRCLEdBSVBELE9BSk8sQ0FJdkNFLFNBSnVDOztBQUFBLGtCQU1YQyxzREFBUSxDQUMxQ0MsMEVBQWEsQ0FBQ0gsZ0JBQUQsRUFBbUJMLFdBQW5CLENBRDZCLENBTkc7QUFBQSxNQU14Q1MsVUFOd0M7QUFBQSxNQU01QkMsYUFONEI7O0FBVS9DLFdBQVNDLGdCQUFULENBQTBCQyxNQUExQixFQUF1Q0MsS0FBdkMsRUFBbUQ7QUFDakRDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsUUFBTUcsT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCVCxVQUFsQixnR0FBaUNHLE1BQWpDLEVBQTBDQyxLQUExQyxFQUFoQjtBQUVBSCxpQkFBYSxDQUFDO0FBQUNNLGFBQU8sRUFBUEE7QUFBRCxLQUFELENBQWI7QUFDRDs7QUFFRCxTQUFPO0FBQ0xQLGNBQVUsRUFBVkEsVUFESztBQUVMRSxvQkFBZ0IsRUFBaEJBO0FBRkssR0FBUDtBQUlEOztHQXRCZVosYyIsImZpbGUiOiIuL2hvb2tzL3VzZVRyYW5zbGF0ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkZWZhdWx0VmFsdWVzIH0gZnJvbSAnLi4vdXRpbHMvZGVmYXVsdFZhbHVlcydcbmltcG9ydCB7IFNka0NvbnRleHQgfSBmcm9tICcuLi9wYWdlcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRyYW5zbGF0aW9uKGluaXRhbFZhbHVlOiBhbnkpIHtcbiAgY29uc3Qgc2RrID0gdXNlQ29udGV4dChTZGtDb250ZXh0KVxuXG4gIGNvbnN0IHsgbG9jYWxlcyB9OiBhbnkgPSBzZGtcbiAgY29uc3QgeyBhdmFpbGFibGU6IGF2YWlsYWJsZUxvY2FsZXMgfSA9IGxvY2FsZXNcblxuICBjb25zdCBbdHJhbnNsYXRlZCwgc2V0VHJhbnNsYXRlZF0gPSB1c2VTdGF0ZShcbiAgICBkZWZhdWx0VmFsdWVzKGF2YWlsYWJsZUxvY2FsZXMsIGluaXRhbFZhbHVlKSxcbiAgKVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRyYW5zbGF0ZWQobG9jYWxlOiBhbnksIHZhbHVlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhsb2NhbGUpXG4gICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgY29uc3QgdXBkYXRlZCA9IE9iamVjdC5hc3NpZ24oe30sIHRyYW5zbGF0ZWQsIHsgW2xvY2FsZV06IHZhbHVlIH0pXG5cbiAgICBzZXRUcmFuc2xhdGVkKHt1cGRhdGVkfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHJhbnNsYXRlZCxcbiAgICB1cGRhdGVUcmFuc2xhdGVkLFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useTranslate.ts\n");

/***/ })

})