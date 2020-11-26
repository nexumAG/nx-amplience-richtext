webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTranslate */ \"./hooks/useTranslate.ts\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Textarea(_ref) {\n  _s();\n\n  var _sdk$field$schema;\n\n  var sdk = _ref.sdk,\n      initialData = _ref.initialData,\n      required = _ref.required;\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var _useTranslation = Object(_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(initialData),\n      updateTranslated = _useTranslation.updateTranslated;\n\n  var handleChange = function handleChange(locale) {\n    return function (ev) {\n      updateTranslated(locale, ev.target.value);\n    };\n  };\n\n  var locales = sdk.locales;\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n      children: \"\".concat((_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.description)\n    }), locales.available.map(function (_ref2) {\n      var _sdk$field$schema2, _sdk$field$schema3;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n          onChange: handleChange(locale),\n          rows: 3,\n          defaultValue: initialData,\n          id: \"textarea-label-id\",\n          multiline: true,\n          label: \"\".concat((_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.title, \" \").concat(locale),\n          required: required\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n          children: \"\".concat((_sdk$field$schema3 = sdk.field.schema) === null || _sdk$field$schema3 === void 0 ? void 0 : _sdk$field$schema3.description, \" \").concat(locale)\n        })]\n      }, locale);\n    })]\n  });\n}\n\n_s(Textarea, \"IWaeYlGgk1Db4xWrXfASoZSOZUI=\", false, function () {\n  return [_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"]];\n});\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJUZXh0YXJlYSIsInNkayIsImluaXRpYWxEYXRhIiwicmVxdWlyZWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsImZpZWxkIiwic2V0VmFsdWUiLCJ1c2VUcmFuc2xhdGlvbiIsInVwZGF0ZVRyYW5zbGF0ZWQiLCJoYW5kbGVDaGFuZ2UiLCJsb2NhbGUiLCJldiIsInRhcmdldCIsInZhbHVlIiwibG9jYWxlcyIsInNjaGVtYSIsImRlc2NyaXB0aW9uIiwiYXZhaWxhYmxlIiwibWFwIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxRQUFULE9BUUo7QUFBQTs7QUFBQTs7QUFBQSxNQVBEQyxHQU9DLFFBUERBLEdBT0M7QUFBQSxNQU5EQyxXQU1DLFFBTkRBLFdBTUM7QUFBQSxNQUxEQyxRQUtDLFFBTERBLFFBS0M7QUFDREMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCSixPQUFHLENBQUNLLEtBQUosQ0FBVUMsUUFBVixDQUFtQkwsV0FBbkI7QUFDRCxHQUZELEVBRUcsQ0FBQ0QsR0FBRCxDQUZIOztBQURDLHdCQUs0Qk8sMEVBQWMsQ0FBQ04sV0FBRCxDQUwxQztBQUFBLE1BS09PLGdCQUxQLG1CQUtPQSxnQkFMUDs7QUFPRCxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFEO0FBQUEsV0FBaUIsVUFDcENDLEVBRG9DLEVBRWpDO0FBQ0hILHNCQUFnQixDQUFDRSxNQUFELEVBQVNDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQyxLQUFuQixDQUFoQjtBQUNELEtBSm9CO0FBQUEsR0FBckI7O0FBUEMsTUFhT0MsT0FiUCxHQWFtQmQsR0FibkIsQ0FhT2MsT0FiUDtBQWVELHNCQUNFLCtEQUFDLDZEQUFEO0FBQWEsYUFBUyxNQUF0QjtBQUFBLDRCQUNFLDhEQUFDLGdFQUFEO0FBQUEsK0NBQ01kLEdBQUcsQ0FBQ0ssS0FBSixDQUFVVSxNQURoQixzREFDTSxrQkFBa0JDLFdBRHhCO0FBQUEsTUFERixFQUlHRixPQUFPLENBQUNHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGlCQUFxQjtBQUFBOztBQUFBLFVBQWxCUixNQUFrQixTQUFsQkEsTUFBa0I7QUFDMUMsMEJBQ0UsK0RBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZ0NBQ0UsOERBQUMsMkRBQUQ7QUFDRSxrQkFBUSxFQUFFRCxZQUFZLENBQUNDLE1BQUQsQ0FEeEI7QUFFRSxjQUFJLEVBQUUsQ0FGUjtBQUdFLHNCQUFZLEVBQUVULFdBSGhCO0FBSUUsWUFBRSxFQUFDLG1CQUpMO0FBS0UsbUJBQVMsTUFMWDtBQU1FLGVBQUssa0NBQUtELEdBQUcsQ0FBQ0ssS0FBSixDQUFVVSxNQUFmLHVEQUFLLG1CQUFrQkksS0FBdkIsY0FBZ0NULE1BQWhDLENBTlA7QUFPRSxrQkFBUSxFQUFFUjtBQVBaLFVBREYsZUFVRSw4REFBQyxnRUFBRDtBQUFBLG9EQUNNRixHQUFHLENBQUNLLEtBQUosQ0FBVVUsTUFEaEIsdURBQ00sbUJBQWtCQyxXQUR4QixjQUN1Q04sTUFEdkM7QUFBQSxVQVZGO0FBQUEsU0FBcUJBLE1BQXJCLENBREY7QUFnQkQsS0FqQkEsQ0FKSDtBQUFBLElBREY7QUF5QkQ7O0dBaERlWCxRO1VBYWVRLGtFOzs7S0FiZlIsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGV4dGFyZWEudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBGb3JtQ29udHJvbCwgRm9ybUhlbHBlclRleHQsIFRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi9ob29rcy91c2VUcmFuc2xhdGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0YXJlYSh7XG4gIHNkayxcbiAgaW5pdGlhbERhdGEsXG4gIHJlcXVpcmVkLFxufToge1xuICBzZGs6IGFueVxuICBpbml0aWFsRGF0YTogYW55XG4gIHJlcXVpcmVkOiBib29sZWFuXG59KSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2RrLmZpZWxkLnNldFZhbHVlKGluaXRpYWxEYXRhKVxuICB9LCBbc2RrXSlcblxuICBjb25zdCB7IHVwZGF0ZVRyYW5zbGF0ZWQgfSA9IHVzZVRyYW5zbGF0aW9uKGluaXRpYWxEYXRhKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChsb2NhbGU6IGFueSkgPT4gKFxuICAgIGV2OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiB1bmtub3duIH0+LFxuICApID0+IHtcbiAgICB1cGRhdGVUcmFuc2xhdGVkKGxvY2FsZSwgZXYudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgeyBsb2NhbGVzIH0gPSBzZGtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XG4gICAgICA8Rm9ybUhlbHBlclRleHQ+XG4gICAgICAgIHtgJHtzZGsuZmllbGQuc2NoZW1hPy5kZXNjcmlwdGlvbn1gfVxuICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cbiAgICAgIHtsb2NhbGVzLmF2YWlsYWJsZS5tYXAoKHsgbG9jYWxlIH06IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2xvY2FsZX0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UobG9jYWxlKX1cbiAgICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbml0aWFsRGF0YX1cbiAgICAgICAgICAgICAgaWQ9XCJ0ZXh0YXJlYS1sYWJlbC1pZFwiXG4gICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICBsYWJlbD17YCR7c2RrLmZpZWxkLnNjaGVtYT8udGl0bGV9ICR7bG9jYWxlfWB9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgICAgIHtgJHtzZGsuZmllbGQuc2NoZW1hPy5kZXNjcmlwdGlvbn0gJHtsb2NhbGV9YH1cbiAgICAgICAgICAgIDwvRm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC9Gb3JtQ29udHJvbD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})