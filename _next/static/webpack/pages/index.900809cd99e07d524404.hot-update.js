webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTranslate */ \"./hooks/useTranslate.ts\");\n/* harmony import */ var _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLocales */ \"./hooks/useLocales.ts\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StyledTitle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    fontSize: '13px',\n    color: '#666666'\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"]);\nvar CssTextField = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    marginBottom: '0.2rem',\n    '& label': {\n      fontSize: '13px'\n    },\n    '& label.Mui-focused': {\n      color: '#666666'\n    },\n    '& .MuiInput-underline:after': {\n      borderBottomColor: '#039be5'\n    },\n    '& .MuiOutlinedInput-root': {\n      '&.Mui-focused fieldset': {\n        borderColor: '#039be5'\n      }\n    }\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"]);\nvar CustomFormHelperText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    fontSize: '11px'\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"]);\nfunction Textarea(_ref) {\n  _s();\n\n  var _sdk$field$schema;\n\n  var initialData = _ref.initialData,\n      required = _ref.required,\n      sdk = _ref.sdk;\n\n  var _useTranslation = Object(_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(initialData),\n      translated = _useTranslation.translated,\n      updateTranslated = _useTranslation.updateTranslated;\n\n  Object(_hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"])(translated);\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var handleChange = function handleChange(locale) {\n    return function (ev) {\n      updateTranslated(locale, ev.target.value);\n    };\n  };\n\n  var locales = sdk.locales;\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(StyledTitle, {\n      variant: \"body2\",\n      gutterBottom: true,\n      children: (_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title\n    }), locales.available.map(function (_ref2) {\n      var _initialData$values$f, _sdk$field$schema2, _sdk$field$schema3;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(CssTextField, {\n          defaultValue: initialData === null || initialData === void 0 ? void 0 : (_initialData$values$f = initialData.values.find(function (t) {\n            return t.locale === locale;\n          })) === null || _initialData$values$f === void 0 ? void 0 : _initialData$values$f.value,\n          id: \"textarea-label-id\",\n          label: \"\".concat((_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.title, \" \").concat(locale),\n          multiline: true,\n          onChange: handleChange(locale),\n          required: required,\n          rows: 3,\n          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(CustomFormHelperText, {\n            children: \"\".concat((_sdk$field$schema3 = sdk.field.schema) === null || _sdk$field$schema3 === void 0 ? void 0 : _sdk$field$schema3.description, \" \").concat(locale)\n          })\n        })\n      }, locale);\n    })]\n  });\n}\n\n_s(Textarea, \"aT4Bd4ZXiNtl8eSUI6NOkIgjkxU=\", false, function () {\n  return [_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"], _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"]];\n});\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJTdHlsZWRUaXRsZSIsIndpdGhTdHlsZXMiLCJyb290IiwiZm9udFNpemUiLCJjb2xvciIsIlR5cG9ncmFwaHkiLCJDc3NUZXh0RmllbGQiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckNvbG9yIiwiVGV4dEZpZWxkIiwiQ3VzdG9tRm9ybUhlbHBlclRleHQiLCJGb3JtSGVscGVyVGV4dCIsIlRleHRhcmVhIiwiaW5pdGlhbERhdGEiLCJyZXF1aXJlZCIsInNkayIsInVzZVRyYW5zbGF0aW9uIiwidHJhbnNsYXRlZCIsInVwZGF0ZVRyYW5zbGF0ZWQiLCJ1c2VMb2NhbGVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJmaWVsZCIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwibG9jYWxlIiwiZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvY2FsZXMiLCJzY2hlbWEiLCJ0aXRsZSIsImF2YWlsYWJsZSIsIm1hcCIsInZhbHVlcyIsImZpbmQiLCJ0IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLG9FQUFVLENBQUM7QUFDN0JDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUUsTUFETjtBQUVKQyxTQUFLLEVBQUU7QUFGSDtBQUR1QixDQUFELENBQVYsQ0FLakJDLDREQUxpQixDQUFwQjtBQU9BLElBQU1DLFlBQVksR0FBR0wsb0VBQVUsQ0FBQztBQUM5QkMsTUFBSSxFQUFFO0FBQ0pLLGdCQUFZLEVBQUUsUUFEVjtBQUVKLGVBQVc7QUFDVEosY0FBUSxFQUFFO0FBREQsS0FGUDtBQUtKLDJCQUF1QjtBQUNyQkMsV0FBSyxFQUFFO0FBRGMsS0FMbkI7QUFRSixtQ0FBK0I7QUFDN0JJLHVCQUFpQixFQUFFO0FBRFUsS0FSM0I7QUFXSixnQ0FBNEI7QUFDMUIsZ0NBQTBCO0FBQ3hCQyxtQkFBVyxFQUFFO0FBRFc7QUFEQTtBQVh4QjtBQUR3QixDQUFELENBQVYsQ0FrQmxCQywyREFsQmtCLENBQXJCO0FBb0JBLElBQU1DLG9CQUFvQixHQUFHVixvRUFBVSxDQUFDO0FBQ3RDQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFO0FBRE47QUFEZ0MsQ0FBRCxDQUFWLENBSTFCUyxnRUFKMEIsQ0FBN0I7QUFNTyxTQUFTQyxRQUFULE9BUUo7QUFBQTs7QUFBQTs7QUFBQSxNQVBEQyxXQU9DLFFBUERBLFdBT0M7QUFBQSxNQU5EQyxRQU1DLFFBTkRBLFFBTUM7QUFBQSxNQUxEQyxHQUtDLFFBTERBLEdBS0M7O0FBQUEsd0JBQ3dDQywwRUFBYyxDQUFDSCxXQUFELENBRHREO0FBQUEsTUFDT0ksVUFEUCxtQkFDT0EsVUFEUDtBQUFBLE1BQ21CQyxnQkFEbkIsbUJBQ21CQSxnQkFEbkI7O0FBRURDLHNFQUFVLENBQUNGLFVBQUQsQ0FBVjtBQUVBRyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEJOLE9BQUcsQ0FBQ08sS0FBSixDQUFVQyxRQUFWLENBQW1CVixXQUFuQjtBQUNELEdBRkQsRUFFRyxDQUFDRSxHQUFELENBRkg7O0FBSUEsTUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRDtBQUFBLFdBQWlCLFVBQ3BDQyxFQURvQyxFQUVqQztBQUNIUixzQkFBZ0IsQ0FBQ08sTUFBRCxFQUFTQyxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsS0FBbkIsQ0FBaEI7QUFDRCxLQUpvQjtBQUFBLEdBQXJCOztBQVJDLE1BY09DLE9BZFAsR0FjbUJkLEdBZG5CLENBY09jLE9BZFA7QUFnQkQsc0JBQ0UsK0RBQUMsNkRBQUQ7QUFBYSxhQUFTLE1BQXRCO0FBQUEsNEJBQ0UsOERBQUMsV0FBRDtBQUFhLGFBQU8sRUFBQyxPQUFyQjtBQUE2QixrQkFBWSxNQUF6QztBQUFBLHFDQUNHZCxHQUFHLENBQUNPLEtBQUosQ0FBVVEsTUFEYixzREFDRyxrQkFBa0JDO0FBRHJCLE1BREYsRUFJR0YsT0FBTyxDQUFDRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixpQkFBcUI7QUFBQTs7QUFBQSxVQUFsQlIsTUFBa0IsU0FBbEJBLE1BQWtCO0FBQzFDLDBCQUNFLDhEQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLCtCQUNFLDhEQUFDLFlBQUQ7QUFDRSxzQkFBWSxFQUNWWixXQURVLGFBQ1ZBLFdBRFUsZ0RBQ1ZBLFdBQVcsQ0FBRXFCLE1BQWIsQ0FBb0JDLElBQXBCLENBQXlCLFVBQUNDLENBQUQ7QUFBQSxtQkFBWUEsQ0FBQyxDQUFDWCxNQUFGLEtBQWFBLE1BQXpCO0FBQUEsV0FBekIsQ0FEVSwwREFDVixzQkFBMkRHLEtBRi9EO0FBSUUsWUFBRSxFQUFDLG1CQUpMO0FBS0UsZUFBSyxrQ0FBS2IsR0FBRyxDQUFDTyxLQUFKLENBQVVRLE1BQWYsdURBQUssbUJBQWtCQyxLQUF2QixjQUFnQ04sTUFBaEMsQ0FMUDtBQU1FLG1CQUFTLE1BTlg7QUFPRSxrQkFBUSxFQUFFRCxZQUFZLENBQUNDLE1BQUQsQ0FQeEI7QUFRRSxrQkFBUSxFQUFFWCxRQVJaO0FBU0UsY0FBSSxFQUFFLENBVFI7QUFBQSxpQ0FXRSw4REFBQyxvQkFBRDtBQUFBLHNEQUNNQyxHQUFHLENBQUNPLEtBQUosQ0FBVVEsTUFEaEIsdURBQ00sbUJBQWtCTyxXQUR4QixjQUN1Q1osTUFEdkM7QUFBQTtBQVhGO0FBREYsU0FBcUJBLE1BQXJCLENBREY7QUFtQkQsS0FwQkEsQ0FKSDtBQUFBLElBREY7QUE0QkQ7O0dBcERlYixRO1VBUzJCSSxrRSxFQUN6Q0csNEQ7OztLQVZjUCxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXh0YXJlYS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgRm9ybUhlbHBlclRleHQsXG4gIFRleHRGaWVsZCxcbiAgVHlwb2dyYXBoeSxcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2hvb2tzL3VzZVRyYW5zbGF0ZSdcbmltcG9ydCB7IHVzZUxvY2FsZXMgfSBmcm9tICcuLi9ob29rcy91c2VMb2NhbGVzJ1xuXG5jb25zdCBTdHlsZWRUaXRsZSA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICBjb2xvcjogJyM2NjY2NjYnLFxuICB9LFxufSkoVHlwb2dyYXBoeSlcblxuY29uc3QgQ3NzVGV4dEZpZWxkID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBtYXJnaW5Cb3R0b206ICcwLjJyZW0nLFxuICAgICcmIGxhYmVsJzoge1xuICAgICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICB9LFxuICAgICcmIGxhYmVsLk11aS1mb2N1c2VkJzoge1xuICAgICAgY29sb3I6ICcjNjY2NjY2JyxcbiAgICB9LFxuICAgICcmIC5NdWlJbnB1dC11bmRlcmxpbmU6YWZ0ZXInOiB7XG4gICAgICBib3JkZXJCb3R0b21Db2xvcjogJyMwMzliZTUnLFxuICAgIH0sXG4gICAgJyYgLk11aU91dGxpbmVkSW5wdXQtcm9vdCc6IHtcbiAgICAgICcmLk11aS1mb2N1c2VkIGZpZWxkc2V0Jzoge1xuICAgICAgICBib3JkZXJDb2xvcjogJyMwMzliZTUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSkoVGV4dEZpZWxkKVxuXG5jb25zdCBDdXN0b21Gb3JtSGVscGVyVGV4dCA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZm9udFNpemU6ICcxMXB4JyxcbiAgfSxcbn0pKEZvcm1IZWxwZXJUZXh0KVxuXG5leHBvcnQgZnVuY3Rpb24gVGV4dGFyZWEoe1xuICBpbml0aWFsRGF0YSxcbiAgcmVxdWlyZWQsXG4gIHNkayxcbn06IHtcbiAgaW5pdGlhbERhdGE6IGFueVxuICByZXF1aXJlZDogYm9vbGVhblxuICBzZGs6IGFueVxufSkge1xuICBjb25zdCB7IHRyYW5zbGF0ZWQsIHVwZGF0ZVRyYW5zbGF0ZWQgfSA9IHVzZVRyYW5zbGF0aW9uKGluaXRpYWxEYXRhKVxuICB1c2VMb2NhbGVzKHRyYW5zbGF0ZWQpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZGsuZmllbGQuc2V0VmFsdWUoaW5pdGlhbERhdGEpXG4gIH0sIFtzZGtdKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChsb2NhbGU6IGFueSkgPT4gKFxuICAgIGV2OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiB1bmtub3duIH0+LFxuICApID0+IHtcbiAgICB1cGRhdGVUcmFuc2xhdGVkKGxvY2FsZSwgZXYudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgeyBsb2NhbGVzIH0gPSBzZGtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XG4gICAgICA8U3R5bGVkVGl0bGUgdmFyaWFudD1cImJvZHkyXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICB7c2RrLmZpZWxkLnNjaGVtYT8udGl0bGV9XG4gICAgICA8L1N0eWxlZFRpdGxlPlxuICAgICAge2xvY2FsZXMuYXZhaWxhYmxlLm1hcCgoeyBsb2NhbGUgfTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17bG9jYWxlfT5cbiAgICAgICAgICAgIDxDc3NUZXh0RmllbGRcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcbiAgICAgICAgICAgICAgICBpbml0aWFsRGF0YT8udmFsdWVzLmZpbmQoKHQ6IGFueSkgPT4gdC5sb2NhbGUgPT09IGxvY2FsZSk/LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWQ9XCJ0ZXh0YXJlYS1sYWJlbC1pZFwiXG4gICAgICAgICAgICAgIGxhYmVsPXtgJHtzZGsuZmllbGQuc2NoZW1hPy50aXRsZX0gJHtsb2NhbGV9YH1cbiAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UobG9jYWxlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q3VzdG9tRm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgICAgICAge2Ake3Nkay5maWVsZC5zY2hlbWE/LmRlc2NyaXB0aW9ufSAke2xvY2FsZX1gfVxuICAgICAgICAgICAgICA8L0N1c3RvbUZvcm1IZWxwZXJUZXh0PlxuICAgICAgICAgICAgPC9Dc3NUZXh0RmllbGQ+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC9Gb3JtQ29udHJvbD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})