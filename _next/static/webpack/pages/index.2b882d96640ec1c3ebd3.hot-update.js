webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTranslate */ \"./hooks/useTranslate.ts\");\n/* harmony import */ var _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLocales */ \"./hooks/useLocales.ts\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar useStyles = makeStyles({\n  root: {\n    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',\n    borderRadius: 3,\n    border: 0,\n    color: 'white',\n    height: 48,\n    padding: '0 30px',\n    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'\n  },\n  label: {\n    textTransform: 'capitalize'\n  }\n});\nfunction Textarea(_ref) {\n  _s();\n\n  var _sdk$field$schema;\n\n  var initialData = _ref.initialData,\n      required = _ref.required,\n      sdk = _ref.sdk;\n\n  var _useTranslation = Object(_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(initialData),\n      translated = _useTranslation.translated,\n      updateTranslated = _useTranslation.updateTranslated;\n\n  Object(_hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"])(translated);\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var handleChange = function handleChange(locale) {\n    return function (ev) {\n      updateTranslated(locale, ev.target.value);\n    };\n  };\n\n  var locales = sdk.locales;\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n      variant: \"body2\",\n      gutterBottom: true,\n      children: (_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title\n    }), locales.available.map(function (_ref2) {\n      var _initialData$values$f, _sdk$field$schema2, _sdk$field$schema3;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n          defaultValue: initialData === null || initialData === void 0 ? void 0 : (_initialData$values$f = initialData.values.find(function (t) {\n            return t.locale === locale;\n          })) === null || _initialData$values$f === void 0 ? void 0 : _initialData$values$f.value,\n          id: \"textarea-label-id\",\n          label: \"\".concat((_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.title, \" \").concat(locale),\n          multiline: true,\n          onChange: handleChange(locale),\n          required: required,\n          rows: 3\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n          children: \"\".concat((_sdk$field$schema3 = sdk.field.schema) === null || _sdk$field$schema3 === void 0 ? void 0 : _sdk$field$schema3.description, \" \").concat(locale)\n        })]\n      }, locale);\n    })]\n  });\n}\n\n_s(Textarea, \"aT4Bd4ZXiNtl8eSUI6NOkIgjkxU=\", false, function () {\n  return [_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"], _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"]];\n});\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJjb2xvciIsImhlaWdodCIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJsYWJlbCIsInRleHRUcmFuc2Zvcm0iLCJUZXh0YXJlYSIsImluaXRpYWxEYXRhIiwicmVxdWlyZWQiLCJzZGsiLCJ1c2VUcmFuc2xhdGlvbiIsInRyYW5zbGF0ZWQiLCJ1cGRhdGVUcmFuc2xhdGVkIiwidXNlTG9jYWxlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZmllbGQiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImxvY2FsZSIsImV2IiwidGFyZ2V0IiwidmFsdWUiLCJsb2NhbGVzIiwic2NoZW1hIiwidGl0bGUiLCJhdmFpbGFibGUiLCJtYXAiLCJ2YWx1ZXMiLCJmaW5kIiwidCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxVQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxjQUFVLEVBQUUsa0RBRFI7QUFFSkMsZ0JBQVksRUFBRSxDQUZWO0FBR0pDLFVBQU0sRUFBRSxDQUhKO0FBSUpDLFNBQUssRUFBRSxPQUpIO0FBS0pDLFVBQU0sRUFBRSxFQUxKO0FBTUpDLFdBQU8sRUFBRSxRQU5MO0FBT0pDLGFBQVMsRUFBRTtBQVBQLEdBRHFCO0FBVTNCQyxPQUFLLEVBQUU7QUFDTEMsaUJBQWEsRUFBRTtBQURWO0FBVm9CLENBQUQsQ0FBNUI7QUFlTyxTQUFTQyxRQUFULE9BUUo7QUFBQTs7QUFBQTs7QUFBQSxNQVBEQyxXQU9DLFFBUERBLFdBT0M7QUFBQSxNQU5EQyxRQU1DLFFBTkRBLFFBTUM7QUFBQSxNQUxEQyxHQUtDLFFBTERBLEdBS0M7O0FBQUEsd0JBQ3dDQywwRUFBYyxDQUFDSCxXQUFELENBRHREO0FBQUEsTUFDT0ksVUFEUCxtQkFDT0EsVUFEUDtBQUFBLE1BQ21CQyxnQkFEbkIsbUJBQ21CQSxnQkFEbkI7O0FBRURDLHNFQUFVLENBQUNGLFVBQUQsQ0FBVjtBQUVBRyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEJOLE9BQUcsQ0FBQ08sS0FBSixDQUFVQyxRQUFWLENBQW1CVixXQUFuQjtBQUNELEdBRkQsRUFFRyxDQUFDRSxHQUFELENBRkg7O0FBSUEsTUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRDtBQUFBLFdBQWlCLFVBQ3BDQyxFQURvQyxFQUVqQztBQUNIUixzQkFBZ0IsQ0FBQ08sTUFBRCxFQUFTQyxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsS0FBbkIsQ0FBaEI7QUFDRCxLQUpvQjtBQUFBLEdBQXJCOztBQVJDLE1BY09DLE9BZFAsR0FjbUJkLEdBZG5CLENBY09jLE9BZFA7QUFnQkQsc0JBQ0UsK0RBQUMsNkRBQUQ7QUFBYSxhQUFTLE1BQXRCO0FBQUEsNEJBQ0UsOERBQUMsNERBQUQ7QUFBWSxhQUFPLEVBQUMsT0FBcEI7QUFBNEIsa0JBQVksTUFBeEM7QUFBQSxxQ0FDR2QsR0FBRyxDQUFDTyxLQUFKLENBQVVRLE1BRGIsc0RBQ0csa0JBQWtCQztBQURyQixNQURGLEVBSUdGLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsaUJBQXFCO0FBQUE7O0FBQUEsVUFBbEJSLE1BQWtCLFNBQWxCQSxNQUFrQjtBQUMxQywwQkFDRSwrREFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxnQ0FDRSw4REFBQywyREFBRDtBQUNFLHNCQUFZLEVBQ1ZaLFdBRFUsYUFDVkEsV0FEVSxnREFDVkEsV0FBVyxDQUFFcUIsTUFBYixDQUFvQkMsSUFBcEIsQ0FBeUIsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFZQSxDQUFDLENBQUNYLE1BQUYsS0FBYUEsTUFBekI7QUFBQSxXQUF6QixDQURVLDBEQUNWLHNCQUEyREcsS0FGL0Q7QUFJRSxZQUFFLEVBQUMsbUJBSkw7QUFLRSxlQUFLLGtDQUFLYixHQUFHLENBQUNPLEtBQUosQ0FBVVEsTUFBZix1REFBSyxtQkFBa0JDLEtBQXZCLGNBQWdDTixNQUFoQyxDQUxQO0FBTUUsbUJBQVMsTUFOWDtBQU9FLGtCQUFRLEVBQUVELFlBQVksQ0FBQ0MsTUFBRCxDQVB4QjtBQVFFLGtCQUFRLEVBQUVYLFFBUlo7QUFTRSxjQUFJLEVBQUU7QUFUUixVQURGLGVBWUUsOERBQUMsZ0VBQUQ7QUFBQSxvREFDTUMsR0FBRyxDQUFDTyxLQUFKLENBQVVRLE1BRGhCLHVEQUNNLG1CQUFrQk8sV0FEeEIsY0FDdUNaLE1BRHZDO0FBQUEsVUFaRjtBQUFBLFNBQXFCQSxNQUFyQixDQURGO0FBa0JELEtBbkJBLENBSkg7QUFBQSxJQURGO0FBMkJEOztHQW5EZWIsUTtVQVMyQkksa0UsRUFDekNHLDREOzs7S0FWY1AsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGV4dGFyZWEudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1IZWxwZXJUZXh0LFxuICBUZXh0RmllbGQsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi9ob29rcy91c2VUcmFuc2xhdGUnXG5pbXBvcnQgeyB1c2VMb2NhbGVzIH0gZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxlcydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjRkU2QjhCIDMwJSwgI0ZGOEU1MyA5MCUpJyxcbiAgICBib3JkZXJSYWRpdXM6IDMsXG4gICAgYm9yZGVyOiAwLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGhlaWdodDogNDgsXG4gICAgcGFkZGluZzogJzAgMzBweCcsXG4gICAgYm94U2hhZG93OiAnMCAzcHggNXB4IDJweCByZ2JhKDI1NSwgMTA1LCAxMzUsIC4zKScsXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICB9LFxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIFRleHRhcmVhKHtcbiAgaW5pdGlhbERhdGEsXG4gIHJlcXVpcmVkLFxuICBzZGssXG59OiB7XG4gIGluaXRpYWxEYXRhOiBhbnlcbiAgcmVxdWlyZWQ6IGJvb2xlYW5cbiAgc2RrOiBhbnlcbn0pIHtcbiAgY29uc3QgeyB0cmFuc2xhdGVkLCB1cGRhdGVUcmFuc2xhdGVkIH0gPSB1c2VUcmFuc2xhdGlvbihpbml0aWFsRGF0YSlcbiAgdXNlTG9jYWxlcyh0cmFuc2xhdGVkKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2RrLmZpZWxkLnNldFZhbHVlKGluaXRpYWxEYXRhKVxuICB9LCBbc2RrXSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobG9jYWxlOiBhbnkpID0+IChcbiAgICBldjogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogdW5rbm93biB9PixcbiAgKSA9PiB7XG4gICAgdXBkYXRlVHJhbnNsYXRlZChsb2NhbGUsIGV2LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IHsgbG9jYWxlcyB9ID0gc2RrXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICB7c2RrLmZpZWxkLnNjaGVtYT8udGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICB7bG9jYWxlcy5hdmFpbGFibGUubWFwKCh7IGxvY2FsZSB9OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtsb2NhbGV9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgICAgIGluaXRpYWxEYXRhPy52YWx1ZXMuZmluZCgodDogYW55KSA9PiB0LmxvY2FsZSA9PT0gbG9jYWxlKT8udmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZD1cInRleHRhcmVhLWxhYmVsLWlkXCJcbiAgICAgICAgICAgICAgbGFiZWw9e2Ake3Nkay5maWVsZC5zY2hlbWE/LnRpdGxlfSAke2xvY2FsZX1gfVxuICAgICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShsb2NhbGUpfVxuICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICB7YCR7c2RrLmZpZWxkLnNjaGVtYT8uZGVzY3JpcHRpb259ICR7bG9jYWxlfWB9XG4gICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvRm9ybUNvbnRyb2w+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})