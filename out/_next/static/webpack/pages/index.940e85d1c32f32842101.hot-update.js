webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTranslate */ \"./hooks/useTranslate.ts\");\n/* harmony import */ var _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLocales */ \"./hooks/useLocales.ts\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Textarea(_ref) {\n  _s();\n\n  var sdk = _ref.sdk,\n      initialData = _ref.initialData,\n      required = _ref.required;\n  console.log('====================================');\n  console.log(initialData);\n  console.log('====================================');\n\n  var _useTranslation = Object(_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(initialData),\n      translated = _useTranslation.translated,\n      updateTranslated = _useTranslation.updateTranslated;\n\n  Object(_hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"])(translated);\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var handleChange = function handleChange(locale) {\n    return function (ev) {\n      updateTranslated(locale, ev.target.value);\n    };\n  };\n\n  var locales = sdk.locales;\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: locales.available.map(function (_ref2) {\n      var _sdk$field$schema, _initialData$values$f, _sdk$field$schema2;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n          onChange: handleChange(locale),\n          rows: 3,\n          id: \"textarea-label-id\",\n          multiline: true,\n          label: \"\".concat((_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title, \" \").concat(locale),\n          required: required,\n          defaultValue: initialData === null || initialData === void 0 ? void 0 : (_initialData$values$f = initialData.values.find(function (t) {\n            return t.locale === locale;\n          })) === null || _initialData$values$f === void 0 ? void 0 : _initialData$values$f.value\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n          children: \"\".concat((_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.description, \" \").concat(locale)\n        })]\n      }, locale);\n    })\n  });\n}\n\n_s(Textarea, \"aT4Bd4ZXiNtl8eSUI6NOkIgjkxU=\", false, function () {\n  return [_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"], _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"]];\n});\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJUZXh0YXJlYSIsInNkayIsImluaXRpYWxEYXRhIiwicmVxdWlyZWQiLCJjb25zb2xlIiwibG9nIiwidXNlVHJhbnNsYXRpb24iLCJ0cmFuc2xhdGVkIiwidXBkYXRlVHJhbnNsYXRlZCIsInVzZUxvY2FsZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsImZpZWxkIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJsb2NhbGUiLCJldiIsInRhcmdldCIsInZhbHVlIiwibG9jYWxlcyIsImF2YWlsYWJsZSIsIm1hcCIsInNjaGVtYSIsInRpdGxlIiwidmFsdWVzIiwiZmluZCIsInQiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFFBQVQsT0FRSjtBQUFBOztBQUFBLE1BUERDLEdBT0MsUUFQREEsR0FPQztBQUFBLE1BTkRDLFdBTUMsUUFOREEsV0FNQztBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUNEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsV0FBWjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWjs7QUFIQyx3QkFJd0NDLDBFQUFjLENBQUNKLFdBQUQsQ0FKdEQ7QUFBQSxNQUlPSyxVQUpQLG1CQUlPQSxVQUpQO0FBQUEsTUFJbUJDLGdCQUpuQixtQkFJbUJBLGdCQUpuQjs7QUFLREMsc0VBQVUsQ0FBQ0YsVUFBRCxDQUFWO0FBRUFHLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQlYsT0FBRyxDQUFDVyxLQUFKLENBQVVDLFFBQVYsQ0FBbUJYLFdBQW5CO0FBQ0QsR0FGRCxFQUVHLENBQUNELEdBQUQsQ0FGSDs7QUFJQSxNQUFNYSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFEO0FBQUEsV0FBaUIsVUFDcENDLEVBRG9DLEVBRWpDO0FBQ0hSLHNCQUFnQixDQUFDTyxNQUFELEVBQVNDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQyxLQUFuQixDQUFoQjtBQUNELEtBSm9CO0FBQUEsR0FBckI7O0FBWEMsTUFpQk9DLE9BakJQLEdBaUJtQmxCLEdBakJuQixDQWlCT2tCLE9BakJQO0FBbUJELHNCQUNFLDhEQUFDLDZEQUFEO0FBQWEsYUFBUyxNQUF0QjtBQUFBLGNBQ0dBLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsaUJBQXFCO0FBQUE7O0FBQUEsVUFBbEJOLE1BQWtCLFNBQWxCQSxNQUFrQjtBQUMxQywwQkFDRSwrREFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxnQ0FDRSw4REFBQywyREFBRDtBQUNFLGtCQUFRLEVBQUVELFlBQVksQ0FBQ0MsTUFBRCxDQUR4QjtBQUVFLGNBQUksRUFBRSxDQUZSO0FBR0UsWUFBRSxFQUFDLG1CQUhMO0FBSUUsbUJBQVMsTUFKWDtBQUtFLGVBQUssaUNBQUtkLEdBQUcsQ0FBQ1csS0FBSixDQUFVVSxNQUFmLHNEQUFLLGtCQUFrQkMsS0FBdkIsY0FBZ0NSLE1BQWhDLENBTFA7QUFNRSxrQkFBUSxFQUFFWixRQU5aO0FBT0Usc0JBQVksRUFDVkQsV0FEVSxhQUNWQSxXQURVLGdEQUNWQSxXQUFXLENBQUVzQixNQUFiLENBQW9CQyxJQUFwQixDQUF5QixVQUFDQyxDQUFEO0FBQUEsbUJBQVlBLENBQUMsQ0FBQ1gsTUFBRixLQUFhQSxNQUF6QjtBQUFBLFdBQXpCLENBRFUsMERBQ1Ysc0JBQTJERztBQVIvRCxVQURGLGVBWUUsOERBQUMsZ0VBQUQ7QUFBQSxvREFDTWpCLEdBQUcsQ0FBQ1csS0FBSixDQUFVVSxNQURoQix1REFDTSxtQkFBa0JLLFdBRHhCLGNBQ3VDWixNQUR2QztBQUFBLFVBWkY7QUFBQSxTQUFxQkEsTUFBckIsQ0FERjtBQWtCRCxLQW5CQTtBQURILElBREY7QUF3QkQ7O0dBbkRlZixRO1VBWTJCTSxrRSxFQUN6Q0csNEQ7OztLQWJjVCxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXh0YXJlYS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIEZvcm1Db250cm9sLCBGb3JtSGVscGVyVGV4dCwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2hvb2tzL3VzZVRyYW5zbGF0ZSdcbmltcG9ydCB7IHVzZUxvY2FsZXMgfSBmcm9tICcuLi9ob29rcy91c2VMb2NhbGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gVGV4dGFyZWEoe1xuICBzZGssXG4gIGluaXRpYWxEYXRhLFxuICByZXF1aXJlZCxcbn06IHtcbiAgc2RrOiBhbnlcbiAgaW5pdGlhbERhdGE6IGFueVxuICByZXF1aXJlZDogYm9vbGVhblxufSkge1xuICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09JylcbiAgY29uc29sZS5sb2coaW5pdGlhbERhdGEpXG4gIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKVxuICBjb25zdCB7IHRyYW5zbGF0ZWQsIHVwZGF0ZVRyYW5zbGF0ZWQgfSA9IHVzZVRyYW5zbGF0aW9uKGluaXRpYWxEYXRhKVxuICB1c2VMb2NhbGVzKHRyYW5zbGF0ZWQpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZGsuZmllbGQuc2V0VmFsdWUoaW5pdGlhbERhdGEpXG4gIH0sIFtzZGtdKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChsb2NhbGU6IGFueSkgPT4gKFxuICAgIGV2OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiB1bmtub3duIH0+LFxuICApID0+IHtcbiAgICB1cGRhdGVUcmFuc2xhdGVkKGxvY2FsZSwgZXYudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgeyBsb2NhbGVzIH0gPSBzZGtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XG4gICAgICB7bG9jYWxlcy5hdmFpbGFibGUubWFwKCh7IGxvY2FsZSB9OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtsb2NhbGV9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKGxvY2FsZSl9XG4gICAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICAgIGlkPVwidGV4dGFyZWEtbGFiZWwtaWRcIlxuICAgICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgICAgbGFiZWw9e2Ake3Nkay5maWVsZC5zY2hlbWE/LnRpdGxlfSAke2xvY2FsZX1gfVxuICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XG4gICAgICAgICAgICAgICAgaW5pdGlhbERhdGE/LnZhbHVlcy5maW5kKCh0OiBhbnkpID0+IHQubG9jYWxlID09PSBsb2NhbGUpPy52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICB7YCR7c2RrLmZpZWxkLnNjaGVtYT8uZGVzY3JpcHRpb259ICR7bG9jYWxlfWB9XG4gICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvRm9ybUNvbnRyb2w+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})