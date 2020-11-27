webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTranslate */ \"./hooks/useTranslate.ts\");\n/* harmony import */ var _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLocales */ \"./hooks/useLocales.ts\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StyledTitle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    fontSize: '13px',\n    color: '#666666'\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"]);\nvar CssTextField = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    '& label': {\n      fontSize: '13px'\n    },\n    '& label.Mui-focused': {\n      fontSize: '12px',\n      color: '#666666'\n    },\n    '& .MuiInput-underline:after': {\n      borderBottomColor: '#039be5'\n    },\n    '& .MuiOutlinedInput-root': {\n      '&.Mui-focused fieldset': {\n        borderColor: '#039be5'\n      }\n    }\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"]);\nfunction Textarea(_ref) {\n  _s();\n\n  var _sdk$field$schema;\n\n  var initialData = _ref.initialData,\n      required = _ref.required,\n      sdk = _ref.sdk;\n\n  var _useTranslation = Object(_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(initialData),\n      translated = _useTranslation.translated,\n      updateTranslated = _useTranslation.updateTranslated;\n\n  Object(_hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"])(translated);\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var handleChange = function handleChange(locale) {\n    return function (ev) {\n      updateTranslated(locale, ev.target.value);\n    };\n  };\n\n  var locales = sdk.locales;\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(StyledTitle, {\n      variant: \"body2\",\n      gutterBottom: true,\n      children: (_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title\n    }), locales.available.map(function (_ref2) {\n      var _initialData$values$f, _sdk$field$schema2, _sdk$field$schema3;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(CssTextField, {\n          defaultValue: initialData === null || initialData === void 0 ? void 0 : (_initialData$values$f = initialData.values.find(function (t) {\n            return t.locale === locale;\n          })) === null || _initialData$values$f === void 0 ? void 0 : _initialData$values$f.value,\n          id: \"textarea-label-id\",\n          label: \"\".concat((_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.title, \" \").concat(locale),\n          multiline: true,\n          onChange: handleChange(locale),\n          required: required,\n          rows: 3\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n          children: \"\".concat((_sdk$field$schema3 = sdk.field.schema) === null || _sdk$field$schema3 === void 0 ? void 0 : _sdk$field$schema3.description, \" \").concat(locale)\n        })]\n      }, locale);\n    })]\n  });\n}\n\n_s(Textarea, \"aT4Bd4ZXiNtl8eSUI6NOkIgjkxU=\", false, function () {\n  return [_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"], _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"]];\n});\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJTdHlsZWRUaXRsZSIsIndpdGhTdHlsZXMiLCJyb290IiwiZm9udFNpemUiLCJjb2xvciIsIlR5cG9ncmFwaHkiLCJDc3NUZXh0RmllbGQiLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckNvbG9yIiwiVGV4dEZpZWxkIiwiVGV4dGFyZWEiLCJpbml0aWFsRGF0YSIsInJlcXVpcmVkIiwic2RrIiwidXNlVHJhbnNsYXRpb24iLCJ0cmFuc2xhdGVkIiwidXBkYXRlVHJhbnNsYXRlZCIsInVzZUxvY2FsZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsImZpZWxkIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJsb2NhbGUiLCJldiIsInRhcmdldCIsInZhbHVlIiwibG9jYWxlcyIsInNjaGVtYSIsInRpdGxlIiwiYXZhaWxhYmxlIiwibWFwIiwidmFsdWVzIiwiZmluZCIsInQiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRUMsb0VBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxNQUROO0FBRUpDLFNBQUssRUFBRTtBQUZIO0FBRHNCLENBQUQsQ0FBVixDQUtoQkMsNERBTGdCLENBQW5CO0FBT0EsSUFBTUMsWUFBWSxHQUFHTCxvRUFBVSxDQUFDO0FBQzlCQyxNQUFJLEVBQUU7QUFDSixlQUFXO0FBQ1RDLGNBQVEsRUFBRTtBQURELEtBRFA7QUFJSiwyQkFBdUI7QUFDckJBLGNBQVEsRUFBRSxNQURXO0FBRXJCQyxXQUFLLEVBQUU7QUFGYyxLQUpuQjtBQVFKLG1DQUErQjtBQUM3QkcsdUJBQWlCLEVBQUU7QUFEVSxLQVIzQjtBQVdKLGdDQUE0QjtBQUMxQixnQ0FBMEI7QUFDeEJDLG1CQUFXLEVBQUU7QUFEVztBQURBO0FBWHhCO0FBRHdCLENBQUQsQ0FBVixDQWtCbEJDLDJEQWxCa0IsQ0FBckI7QUFvQk8sU0FBU0MsUUFBVCxPQVFKO0FBQUE7O0FBQUE7O0FBQUEsTUFQREMsV0FPQyxRQVBEQSxXQU9DO0FBQUEsTUFOREMsUUFNQyxRQU5EQSxRQU1DO0FBQUEsTUFMREMsR0FLQyxRQUxEQSxHQUtDOztBQUFBLHdCQUN3Q0MsMEVBQWMsQ0FBQ0gsV0FBRCxDQUR0RDtBQUFBLE1BQ09JLFVBRFAsbUJBQ09BLFVBRFA7QUFBQSxNQUNtQkMsZ0JBRG5CLG1CQUNtQkEsZ0JBRG5COztBQUVEQyxzRUFBVSxDQUFDRixVQUFELENBQVY7QUFFQUcsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCTixPQUFHLENBQUNPLEtBQUosQ0FBVUMsUUFBVixDQUFtQlYsV0FBbkI7QUFDRCxHQUZELEVBRUcsQ0FBQ0UsR0FBRCxDQUZIOztBQUlBLE1BQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQ7QUFBQSxXQUFpQixVQUNwQ0MsRUFEb0MsRUFFakM7QUFDSFIsc0JBQWdCLENBQUNPLE1BQUQsRUFBU0MsRUFBRSxDQUFDQyxNQUFILENBQVVDLEtBQW5CLENBQWhCO0FBQ0QsS0FKb0I7QUFBQSxHQUFyQjs7QUFSQyxNQWNPQyxPQWRQLEdBY21CZCxHQWRuQixDQWNPYyxPQWRQO0FBZ0JELHNCQUNFLCtEQUFDLDZEQUFEO0FBQWEsYUFBUyxNQUF0QjtBQUFBLDRCQUNFLDhEQUFDLFdBQUQ7QUFDRSxhQUFPLEVBQUMsT0FEVjtBQUVFLGtCQUFZLE1BRmQ7QUFBQSxxQ0FJR2QsR0FBRyxDQUFDTyxLQUFKLENBQVVRLE1BSmIsc0RBSUcsa0JBQWtCQztBQUpyQixNQURGLEVBT0dGLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsaUJBQXFCO0FBQUE7O0FBQUEsVUFBbEJSLE1BQWtCLFNBQWxCQSxNQUFrQjtBQUMxQywwQkFDRSwrREFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxnQ0FDRSw4REFBQyxZQUFEO0FBQ0Usc0JBQVksRUFDVlosV0FEVSxhQUNWQSxXQURVLGdEQUNWQSxXQUFXLENBQUVxQixNQUFiLENBQW9CQyxJQUFwQixDQUF5QixVQUFDQyxDQUFEO0FBQUEsbUJBQVlBLENBQUMsQ0FBQ1gsTUFBRixLQUFhQSxNQUF6QjtBQUFBLFdBQXpCLENBRFUsMERBQ1Ysc0JBQTJERyxLQUYvRDtBQUlFLFlBQUUsRUFBQyxtQkFKTDtBQUtFLGVBQUssa0NBQUtiLEdBQUcsQ0FBQ08sS0FBSixDQUFVUSxNQUFmLHVEQUFLLG1CQUFrQkMsS0FBdkIsY0FBZ0NOLE1BQWhDLENBTFA7QUFNRSxtQkFBUyxNQU5YO0FBT0Usa0JBQVEsRUFBRUQsWUFBWSxDQUFDQyxNQUFELENBUHhCO0FBUUUsa0JBQVEsRUFBRVgsUUFSWjtBQVNFLGNBQUksRUFBRTtBQVRSLFVBREYsZUFZRSw4REFBQyxnRUFBRDtBQUFBLG9EQUNNQyxHQUFHLENBQUNPLEtBQUosQ0FBVVEsTUFEaEIsdURBQ00sbUJBQWtCTyxXQUR4QixjQUN1Q1osTUFEdkM7QUFBQSxVQVpGO0FBQUEsU0FBcUJBLE1BQXJCLENBREY7QUFrQkQsS0FuQkEsQ0FQSDtBQUFBLElBREY7QUE4QkQ7O0dBdERlYixRO1VBUzJCSSxrRSxFQUN6Q0csNEQ7OztLQVZjUCxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXh0YXJlYS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgRm9ybUhlbHBlclRleHQsXG4gIFRleHRGaWVsZCxcbiAgVHlwb2dyYXBoeSxcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2hvb2tzL3VzZVRyYW5zbGF0ZSdcbmltcG9ydCB7IHVzZUxvY2FsZXMgfSBmcm9tICcuLi9ob29rcy91c2VMb2NhbGVzJ1xuXG5jb25zdCBTdHlsZWRUaXRsZT0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgIGNvbG9yOiAnIzY2NjY2NicsXG4gIH1cbn0pKFR5cG9ncmFwaHkpXG5cbmNvbnN0IENzc1RleHRGaWVsZCA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgJyYgbGFiZWwnOiB7XG4gICAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgIH0sXG4gICAgJyYgbGFiZWwuTXVpLWZvY3VzZWQnOiB7XG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgY29sb3I6ICcjNjY2NjY2JyxcbiAgICB9LFxuICAgICcmIC5NdWlJbnB1dC11bmRlcmxpbmU6YWZ0ZXInOiB7XG4gICAgICBib3JkZXJCb3R0b21Db2xvcjogJyMwMzliZTUnLFxuICAgIH0sXG4gICAgJyYgLk11aU91dGxpbmVkSW5wdXQtcm9vdCc6IHtcbiAgICAgICcmLk11aS1mb2N1c2VkIGZpZWxkc2V0Jzoge1xuICAgICAgICBib3JkZXJDb2xvcjogJyMwMzliZTUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkoVGV4dEZpZWxkKVxuXG5leHBvcnQgZnVuY3Rpb24gVGV4dGFyZWEoe1xuICBpbml0aWFsRGF0YSxcbiAgcmVxdWlyZWQsXG4gIHNkayxcbn06IHtcbiAgaW5pdGlhbERhdGE6IGFueVxuICByZXF1aXJlZDogYm9vbGVhblxuICBzZGs6IGFueVxufSkge1xuICBjb25zdCB7IHRyYW5zbGF0ZWQsIHVwZGF0ZVRyYW5zbGF0ZWQgfSA9IHVzZVRyYW5zbGF0aW9uKGluaXRpYWxEYXRhKVxuICB1c2VMb2NhbGVzKHRyYW5zbGF0ZWQpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZGsuZmllbGQuc2V0VmFsdWUoaW5pdGlhbERhdGEpXG4gIH0sIFtzZGtdKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChsb2NhbGU6IGFueSkgPT4gKFxuICAgIGV2OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiB1bmtub3duIH0+LFxuICApID0+IHtcbiAgICB1cGRhdGVUcmFuc2xhdGVkKGxvY2FsZSwgZXYudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgeyBsb2NhbGVzIH0gPSBzZGtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XG4gICAgICA8U3R5bGVkVGl0bGVcbiAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICA+XG4gICAgICAgIHtzZGsuZmllbGQuc2NoZW1hPy50aXRsZX1cbiAgICAgIDwvU3R5bGVkVGl0bGU+XG4gICAgICB7bG9jYWxlcy5hdmFpbGFibGUubWFwKCh7IGxvY2FsZSB9OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtsb2NhbGV9PlxuICAgICAgICAgICAgPENzc1RleHRGaWVsZFxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgICAgIGluaXRpYWxEYXRhPy52YWx1ZXMuZmluZCgodDogYW55KSA9PiB0LmxvY2FsZSA9PT0gbG9jYWxlKT8udmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZD1cInRleHRhcmVhLWxhYmVsLWlkXCJcbiAgICAgICAgICAgICAgbGFiZWw9e2Ake3Nkay5maWVsZC5zY2hlbWE/LnRpdGxlfSAke2xvY2FsZX1gfVxuICAgICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShsb2NhbGUpfVxuICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgICB7YCR7c2RrLmZpZWxkLnNjaGVtYT8uZGVzY3JpcHRpb259ICR7bG9jYWxlfWB9XG4gICAgICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvRm9ybUNvbnRyb2w+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})