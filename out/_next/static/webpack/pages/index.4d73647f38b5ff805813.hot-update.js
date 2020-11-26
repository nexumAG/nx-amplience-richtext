webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: ExtensionContext, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExtensionContext\", function() { return ExtensionContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar ExtensionContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nfunction Textarea(_ref) {\n  _s();\n\n  var sdk = _ref.sdk,\n      initialData = _ref.initialData,\n      required = _ref.required;\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var handleChange = function handleChange(ev) {\n    sdk.field.setValue(ev.target.value);\n  };\n\n  var locales = sdk.locales;\n  console.log(locales);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: locales.available.map(function (_ref2) {\n      var _sdk$field$schema, _sdk$field$schema2;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n          /* label={locale} */\n          onChange: function onChange(e) {\n            return updateTranslated(locale, e.target.value, locales);\n          },\n          rows: 3,\n          defaultValue: initialData,\n          id: \"textarea-label-id\",\n          multiline: true,\n          label: \"\".concat((_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title, \" \").concat(locale),\n          required: required\n        }, locale), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n          children: \"\".concat((_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.description, \" \").concat(locale)\n        })]\n      });\n    })\n  });\n}\n\n_s(Textarea, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJFeHRlbnNpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlRleHRhcmVhIiwic2RrIiwiaW5pdGlhbERhdGEiLCJyZXF1aXJlZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZmllbGQiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2IiwidGFyZ2V0IiwidmFsdWUiLCJsb2NhbGVzIiwiY29uc29sZSIsImxvZyIsImF2YWlsYWJsZSIsIm1hcCIsImxvY2FsZSIsImUiLCJ1cGRhdGVUcmFuc2xhdGVkIiwic2NoZW1hIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU08sSUFBTUEsZ0JBQWdCLGdCQUFHQywyREFBYSxDQUFDLElBQUQsQ0FBdEM7QUFFQSxTQUFTQyxRQUFULE9BUUo7QUFBQTs7QUFBQSxNQVBEQyxHQU9DLFFBUERBLEdBT0M7QUFBQSxNQU5EQyxXQU1DLFFBTkRBLFdBTUM7QUFBQSxNQUxEQyxRQUtDLFFBTERBLFFBS0M7QUFDREMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCSixPQUFHLENBQUNLLEtBQUosQ0FBVUMsUUFBVixDQUFtQkwsV0FBbkI7QUFDRCxHQUZELEVBRUcsQ0FBQ0QsR0FBRCxDQUZIOztBQUlBLE1BQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQsRUFBK0M7QUFDbEVSLE9BQUcsQ0FBQ0ssS0FBSixDQUFVQyxRQUFWLENBQW1CRSxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsS0FBN0I7QUFDRCxHQUZEOztBQUxDLE1BU09DLE9BVFAsR0FTbUJYLEdBVG5CLENBU09XLE9BVFA7QUFXREMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFFQSxzQkFDRSw4REFBQyw2REFBRDtBQUFhLGFBQVMsTUFBdEI7QUFBQSxjQUNHQSxPQUFPLENBQUNHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGlCQUFxQjtBQUFBOztBQUFBLFVBQWxCQyxNQUFrQixTQUFsQkEsTUFBa0I7QUFDMUMsMEJBQ0U7QUFBQSxnQ0FDRSw4REFBQywyREFBRDtBQUVFO0FBQ0Esa0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLG1CQUNSQyxnQkFBZ0IsQ0FBQ0YsTUFBRCxFQUFTQyxDQUFDLENBQUNSLE1BQUYsQ0FBU0MsS0FBbEIsRUFBeUJDLE9BQXpCLENBRFI7QUFBQSxXQUhaO0FBTUUsY0FBSSxFQUFFLENBTlI7QUFPRSxzQkFBWSxFQUFFVixXQVBoQjtBQVFFLFlBQUUsRUFBQyxtQkFSTDtBQVNFLG1CQUFTLE1BVFg7QUFVRSxlQUFLLGlDQUFLRCxHQUFHLENBQUNLLEtBQUosQ0FBVWMsTUFBZixzREFBSyxrQkFBa0JDLEtBQXZCLGNBQWdDSixNQUFoQyxDQVZQO0FBV0Usa0JBQVEsRUFBRWQ7QUFYWixXQUNPYyxNQURQLENBREYsZUFjRSw4REFBQyxnRUFBRDtBQUFBLG9EQUNNaEIsR0FBRyxDQUFDSyxLQUFKLENBQVVjLE1BRGhCLHVEQUNNLG1CQUFrQkUsV0FEeEIsY0FDdUNMLE1BRHZDO0FBQUEsVUFkRjtBQUFBLFFBREY7QUFvQkQsS0FyQkE7QUFESCxJQURGO0FBMEJEOztHQS9DZWpCLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RleHRhcmVhLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1IZWxwZXJUZXh0LFxuICBJbnB1dExhYmVsLFxuICBUZXh0RmllbGQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgdXNlTG9jYWxlcyB9IGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsZXMnXG5pbXBvcnQgeyBkZWZhdWx0VmFsdWVzIH0gZnJvbSAnLi4vdXRpbHMvZGVmYXVsdFZhbHVlcydcblxuZXhwb3J0IGNvbnN0IEV4dGVuc2lvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0YXJlYSh7XG4gIHNkayxcbiAgaW5pdGlhbERhdGEsXG4gIHJlcXVpcmVkLFxufToge1xuICBzZGs6IGFueVxuICBpbml0aWFsRGF0YTogYW55XG4gIHJlcXVpcmVkOiBib29sZWFuXG59KSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2RrLmZpZWxkLnNldFZhbHVlKGluaXRpYWxEYXRhKVxuICB9LCBbc2RrXSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXY6IFJlYWN0LkNoYW5nZUV2ZW50PHsgdmFsdWU6IHVua25vd24gfT4pID0+IHtcbiAgICBzZGsuZmllbGQuc2V0VmFsdWUoZXYudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgeyBsb2NhbGVzIH0gPSBzZGtcblxuICBjb25zb2xlLmxvZyhsb2NhbGVzKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aD5cbiAgICAgIHtsb2NhbGVzLmF2YWlsYWJsZS5tYXAoKHsgbG9jYWxlIH06IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGtleT17bG9jYWxlfVxuICAgICAgICAgICAgICAvKiBsYWJlbD17bG9jYWxlfSAqL1xuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgdXBkYXRlVHJhbnNsYXRlZChsb2NhbGUsIGUudGFyZ2V0LnZhbHVlLCBsb2NhbGVzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW5pdGlhbERhdGF9XG4gICAgICAgICAgICAgIGlkPVwidGV4dGFyZWEtbGFiZWwtaWRcIlxuICAgICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgICAgbGFiZWw9e2Ake3Nkay5maWVsZC5zY2hlbWE/LnRpdGxlfSAke2xvY2FsZX1gfVxuICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICB7YCR7c2RrLmZpZWxkLnNjaGVtYT8uZGVzY3JpcHRpb259ICR7bG9jYWxlfWB9XG4gICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L0Zvcm1Db250cm9sPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ }),

/***/ "./utils/defaultValues.ts":
false

})