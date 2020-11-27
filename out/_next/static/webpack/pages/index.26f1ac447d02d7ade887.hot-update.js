webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTranslate */ \"./hooks/useTranslate.ts\");\n/* harmony import */ var _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLocales */ \"./hooks/useLocales.ts\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StyledTitle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    fontSize: '13px',\n    color: '#666666'\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"]);\nvar CssTextField = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    '& label': {\n      fontSize: '13px'\n    },\n    '& label.Mui-focused': {\n      color: '#666666'\n    },\n    '& .MuiInput-underline:after': {\n      borderBottomColor: '#039be5'\n    },\n    '& .MuiOutlinedInput-root': {\n      '&.Mui-focused fieldset': {\n        borderColor: '#039be5'\n      }\n    },\n    '.MuiFormHelperText': {\n      fontSize: '11px'\n    }\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"]);\nfunction Textarea(_ref) {\n  _s();\n\n  var _sdk$field$schema;\n\n  var initialData = _ref.initialData,\n      required = _ref.required,\n      sdk = _ref.sdk;\n\n  var _useTranslation = Object(_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(initialData),\n      translated = _useTranslation.translated,\n      updateTranslated = _useTranslation.updateTranslated;\n\n  Object(_hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"])(translated);\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var handleChange = function handleChange(locale) {\n    return function (ev) {\n      updateTranslated(locale, ev.target.value);\n    };\n  };\n\n  var locales = sdk.locales;\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(StyledTitle, {\n      variant: \"body2\",\n      gutterBottom: true,\n      children: (_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title\n    }), locales.available.map(function (_ref2) {\n      var _initialData$values$f, _sdk$field$schema2, _sdk$field$schema3;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(CssTextField, {\n          defaultValue: initialData === null || initialData === void 0 ? void 0 : (_initialData$values$f = initialData.values.find(function (t) {\n            return t.locale === locale;\n          })) === null || _initialData$values$f === void 0 ? void 0 : _initialData$values$f.value,\n          id: \"textarea-label-id\",\n          label: \"\".concat((_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.title, \" \").concat(locale),\n          multiline: true,\n          onChange: handleChange(locale),\n          required: required,\n          rows: 3\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n          children: \"\".concat((_sdk$field$schema3 = sdk.field.schema) === null || _sdk$field$schema3 === void 0 ? void 0 : _sdk$field$schema3.description, \" \").concat(locale)\n        })]\n      }, locale);\n    })]\n  });\n}\n\n_s(Textarea, \"aT4Bd4ZXiNtl8eSUI6NOkIgjkxU=\", false, function () {\n  return [_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"], _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"]];\n});\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJTdHlsZWRUaXRsZSIsIndpdGhTdHlsZXMiLCJyb290IiwiZm9udFNpemUiLCJjb2xvciIsIlR5cG9ncmFwaHkiLCJDc3NUZXh0RmllbGQiLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckNvbG9yIiwiVGV4dEZpZWxkIiwiVGV4dGFyZWEiLCJpbml0aWFsRGF0YSIsInJlcXVpcmVkIiwic2RrIiwidXNlVHJhbnNsYXRpb24iLCJ0cmFuc2xhdGVkIiwidXBkYXRlVHJhbnNsYXRlZCIsInVzZUxvY2FsZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsImZpZWxkIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJsb2NhbGUiLCJldiIsInRhcmdldCIsInZhbHVlIiwibG9jYWxlcyIsInNjaGVtYSIsInRpdGxlIiwiYXZhaWxhYmxlIiwibWFwIiwidmFsdWVzIiwiZmluZCIsInQiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRUMsb0VBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxNQUROO0FBRUpDLFNBQUssRUFBRTtBQUZIO0FBRHNCLENBQUQsQ0FBVixDQUtoQkMsNERBTGdCLENBQW5CO0FBT0EsSUFBTUMsWUFBWSxHQUFHTCxvRUFBVSxDQUFDO0FBQzlCQyxNQUFJLEVBQUU7QUFDSixlQUFXO0FBQ1RDLGNBQVEsRUFBRTtBQURELEtBRFA7QUFJSiwyQkFBdUI7QUFDckJDLFdBQUssRUFBRTtBQURjLEtBSm5CO0FBT0osbUNBQStCO0FBQzdCRyx1QkFBaUIsRUFBRTtBQURVLEtBUDNCO0FBVUosZ0NBQTRCO0FBQzFCLGdDQUEwQjtBQUN4QkMsbUJBQVcsRUFBRTtBQURXO0FBREEsS0FWeEI7QUFlSiwwQkFBc0I7QUFDcEJMLGNBQVEsRUFBRTtBQURVO0FBZmxCO0FBRHdCLENBQUQsQ0FBVixDQW9CbEJNLDJEQXBCa0IsQ0FBckI7QUFzQk8sU0FBU0MsUUFBVCxPQVFKO0FBQUE7O0FBQUE7O0FBQUEsTUFQREMsV0FPQyxRQVBEQSxXQU9DO0FBQUEsTUFOREMsUUFNQyxRQU5EQSxRQU1DO0FBQUEsTUFMREMsR0FLQyxRQUxEQSxHQUtDOztBQUFBLHdCQUN3Q0MsMEVBQWMsQ0FBQ0gsV0FBRCxDQUR0RDtBQUFBLE1BQ09JLFVBRFAsbUJBQ09BLFVBRFA7QUFBQSxNQUNtQkMsZ0JBRG5CLG1CQUNtQkEsZ0JBRG5COztBQUVEQyxzRUFBVSxDQUFDRixVQUFELENBQVY7QUFFQUcsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCTixPQUFHLENBQUNPLEtBQUosQ0FBVUMsUUFBVixDQUFtQlYsV0FBbkI7QUFDRCxHQUZELEVBRUcsQ0FBQ0UsR0FBRCxDQUZIOztBQUlBLE1BQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQ7QUFBQSxXQUFpQixVQUNwQ0MsRUFEb0MsRUFFakM7QUFDSFIsc0JBQWdCLENBQUNPLE1BQUQsRUFBU0MsRUFBRSxDQUFDQyxNQUFILENBQVVDLEtBQW5CLENBQWhCO0FBQ0QsS0FKb0I7QUFBQSxHQUFyQjs7QUFSQyxNQWNPQyxPQWRQLEdBY21CZCxHQWRuQixDQWNPYyxPQWRQO0FBZ0JELHNCQUNFLCtEQUFDLDZEQUFEO0FBQWEsYUFBUyxNQUF0QjtBQUFBLDRCQUNFLDhEQUFDLFdBQUQ7QUFDRSxhQUFPLEVBQUMsT0FEVjtBQUVFLGtCQUFZLE1BRmQ7QUFBQSxxQ0FJR2QsR0FBRyxDQUFDTyxLQUFKLENBQVVRLE1BSmIsc0RBSUcsa0JBQWtCQztBQUpyQixNQURGLEVBT0dGLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsaUJBQXFCO0FBQUE7O0FBQUEsVUFBbEJSLE1BQWtCLFNBQWxCQSxNQUFrQjtBQUMxQywwQkFDRSwrREFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxnQ0FDRSw4REFBQyxZQUFEO0FBQ0Usc0JBQVksRUFDVlosV0FEVSxhQUNWQSxXQURVLGdEQUNWQSxXQUFXLENBQUVxQixNQUFiLENBQW9CQyxJQUFwQixDQUF5QixVQUFDQyxDQUFEO0FBQUEsbUJBQVlBLENBQUMsQ0FBQ1gsTUFBRixLQUFhQSxNQUF6QjtBQUFBLFdBQXpCLENBRFUsMERBQ1Ysc0JBQTJERyxLQUYvRDtBQUlFLFlBQUUsRUFBQyxtQkFKTDtBQUtFLGVBQUssa0NBQUtiLEdBQUcsQ0FBQ08sS0FBSixDQUFVUSxNQUFmLHVEQUFLLG1CQUFrQkMsS0FBdkIsY0FBZ0NOLE1BQWhDLENBTFA7QUFNRSxtQkFBUyxNQU5YO0FBT0Usa0JBQVEsRUFBRUQsWUFBWSxDQUFDQyxNQUFELENBUHhCO0FBUUUsa0JBQVEsRUFBRVgsUUFSWjtBQVNFLGNBQUksRUFBRTtBQVRSLFVBREYsZUFZRSw4REFBQyxnRUFBRDtBQUFBLG9EQUNNQyxHQUFHLENBQUNPLEtBQUosQ0FBVVEsTUFEaEIsdURBQ00sbUJBQWtCTyxXQUR4QixjQUN1Q1osTUFEdkM7QUFBQSxVQVpGO0FBQUEsU0FBcUJBLE1BQXJCLENBREY7QUFrQkQsS0FuQkEsQ0FQSDtBQUFBLElBREY7QUE4QkQ7O0dBdERlYixRO1VBUzJCSSxrRSxFQUN6Q0csNEQ7OztLQVZjUCxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXh0YXJlYS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgRm9ybUhlbHBlclRleHQsXG4gIFRleHRGaWVsZCxcbiAgVHlwb2dyYXBoeSxcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2hvb2tzL3VzZVRyYW5zbGF0ZSdcbmltcG9ydCB7IHVzZUxvY2FsZXMgfSBmcm9tICcuLi9ob29rcy91c2VMb2NhbGVzJ1xuXG5jb25zdCBTdHlsZWRUaXRsZT0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgIGNvbG9yOiAnIzY2NjY2NicsXG4gIH1cbn0pKFR5cG9ncmFwaHkpXG5cbmNvbnN0IENzc1RleHRGaWVsZCA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgJyYgbGFiZWwnOiB7XG4gICAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgIH0sXG4gICAgJyYgbGFiZWwuTXVpLWZvY3VzZWQnOiB7XG4gICAgICBjb2xvcjogJyM2NjY2NjYnLFxuICAgIH0sXG4gICAgJyYgLk11aUlucHV0LXVuZGVybGluZTphZnRlcic6IHtcbiAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnIzAzOWJlNScsXG4gICAgfSxcbiAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1yb290Jzoge1xuICAgICAgJyYuTXVpLWZvY3VzZWQgZmllbGRzZXQnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiAnIzAzOWJlNScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJy5NdWlGb3JtSGVscGVyVGV4dCc6IHtcbiAgICAgIGZvbnRTaXplOiAnMTFweCcsXG4gICAgfSxcbiAgfSxcbn0pKFRleHRGaWVsZClcblxuZXhwb3J0IGZ1bmN0aW9uIFRleHRhcmVhKHtcbiAgaW5pdGlhbERhdGEsXG4gIHJlcXVpcmVkLFxuICBzZGssXG59OiB7XG4gIGluaXRpYWxEYXRhOiBhbnlcbiAgcmVxdWlyZWQ6IGJvb2xlYW5cbiAgc2RrOiBhbnlcbn0pIHtcbiAgY29uc3QgeyB0cmFuc2xhdGVkLCB1cGRhdGVUcmFuc2xhdGVkIH0gPSB1c2VUcmFuc2xhdGlvbihpbml0aWFsRGF0YSlcbiAgdXNlTG9jYWxlcyh0cmFuc2xhdGVkKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2RrLmZpZWxkLnNldFZhbHVlKGluaXRpYWxEYXRhKVxuICB9LCBbc2RrXSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobG9jYWxlOiBhbnkpID0+IChcbiAgICBldjogUmVhY3QuQ2hhbmdlRXZlbnQ8eyB2YWx1ZTogdW5rbm93biB9PixcbiAgKSA9PiB7XG4gICAgdXBkYXRlVHJhbnNsYXRlZChsb2NhbGUsIGV2LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IHsgbG9jYWxlcyB9ID0gc2RrXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxuICAgICAgPFN0eWxlZFRpdGxlXG4gICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgPlxuICAgICAgICB7c2RrLmZpZWxkLnNjaGVtYT8udGl0bGV9XG4gICAgICA8L1N0eWxlZFRpdGxlPlxuICAgICAge2xvY2FsZXMuYXZhaWxhYmxlLm1hcCgoeyBsb2NhbGUgfTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17bG9jYWxlfT5cbiAgICAgICAgICAgIDxDc3NUZXh0RmllbGRcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcbiAgICAgICAgICAgICAgICBpbml0aWFsRGF0YT8udmFsdWVzLmZpbmQoKHQ6IGFueSkgPT4gdC5sb2NhbGUgPT09IGxvY2FsZSk/LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWQ9XCJ0ZXh0YXJlYS1sYWJlbC1pZFwiXG4gICAgICAgICAgICAgIGxhYmVsPXtgJHtzZGsuZmllbGQuc2NoZW1hPy50aXRsZX0gJHtsb2NhbGV9YH1cbiAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UobG9jYWxlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5cbiAgICAgICAgICAgICAge2Ake3Nkay5maWVsZC5zY2hlbWE/LmRlc2NyaXB0aW9ufSAke2xvY2FsZX1gfVxuICAgICAgICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L0Zvcm1Db250cm9sPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})