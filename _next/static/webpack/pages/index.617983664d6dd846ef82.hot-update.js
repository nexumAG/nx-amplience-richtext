webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTranslate */ \"./hooks/useTranslate.ts\");\n/* harmony import */ var _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLocales */ \"./hooks/useLocales.ts\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  root: {},\n  label: {\n    textTransform: 'capitalize'\n  }\n});\nfunction Textarea(_ref) {\n  _s();\n\n  var _sdk$field$schema;\n\n  var initialData = _ref.initialData,\n      required = _ref.required,\n      sdk = _ref.sdk;\n\n  var _useTranslation = Object(_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(initialData),\n      translated = _useTranslation.translated,\n      updateTranslated = _useTranslation.updateTranslated;\n\n  Object(_hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"])(translated);\n  var classes = useStyles();\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var handleChange = function handleChange(locale) {\n    return function (ev) {\n      updateTranslated(locale, ev.target.value);\n    };\n  };\n\n  var locales = sdk.locales;\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n      classes: {\n        label: classes.label\n      },\n      variant: \"body2\",\n      gutterBottom: true,\n      children: (_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title\n    }), locales.available.map(function (_ref2) {\n      var _initialData$values$f, _sdk$field$schema2, _sdk$field$schema3;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n          defaultValue: initialData === null || initialData === void 0 ? void 0 : (_initialData$values$f = initialData.values.find(function (t) {\n            return t.locale === locale;\n          })) === null || _initialData$values$f === void 0 ? void 0 : _initialData$values$f.value,\n          id: \"textarea-label-id\",\n          label: \"\".concat((_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.title, \" \").concat(locale),\n          multiline: true,\n          onChange: handleChange(locale),\n          required: required,\n          rows: 3\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n          children: \"\".concat((_sdk$field$schema3 = sdk.field.schema) === null || _sdk$field$schema3 === void 0 ? void 0 : _sdk$field$schema3.description, \" \").concat(locale)\n        })]\n      }, locale);\n    })]\n  });\n}\n\n_s(Textarea, \"lTFcBaUJbnW7weMHHVXrKI+px4Y=\", false, function () {\n  return [_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"], _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"], useStyles];\n});\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImxhYmVsIiwidGV4dFRyYW5zZm9ybSIsIlRleHRhcmVhIiwiaW5pdGlhbERhdGEiLCJyZXF1aXJlZCIsInNkayIsInVzZVRyYW5zbGF0aW9uIiwidHJhbnNsYXRlZCIsInVwZGF0ZVRyYW5zbGF0ZWQiLCJ1c2VMb2NhbGVzIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZmllbGQiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImxvY2FsZSIsImV2IiwidGFyZ2V0IiwidmFsdWUiLCJsb2NhbGVzIiwic2NoZW1hIiwidGl0bGUiLCJhdmFpbGFibGUiLCJtYXAiLCJ2YWx1ZXMiLCJmaW5kIiwidCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUUsRUFEcUI7QUFFM0JDLE9BQUssRUFBRTtBQUNMQyxpQkFBYSxFQUFFO0FBRFY7QUFGb0IsQ0FBRCxDQUE1QjtBQU9PLFNBQVNDLFFBQVQsT0FRSjtBQUFBOztBQUFBOztBQUFBLE1BUERDLFdBT0MsUUFQREEsV0FPQztBQUFBLE1BTkRDLFFBTUMsUUFOREEsUUFNQztBQUFBLE1BTERDLEdBS0MsUUFMREEsR0FLQzs7QUFBQSx3QkFDd0NDLDBFQUFjLENBQUNILFdBQUQsQ0FEdEQ7QUFBQSxNQUNPSSxVQURQLG1CQUNPQSxVQURQO0FBQUEsTUFDbUJDLGdCQURuQixtQkFDbUJBLGdCQURuQjs7QUFFREMsc0VBQVUsQ0FBQ0YsVUFBRCxDQUFWO0FBQ0EsTUFBTUcsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBRUFjLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQlAsT0FBRyxDQUFDUSxLQUFKLENBQVVDLFFBQVYsQ0FBbUJYLFdBQW5CO0FBQ0QsR0FGRCxFQUVHLENBQUNFLEdBQUQsQ0FGSDs7QUFJQSxNQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFEO0FBQUEsV0FBaUIsVUFDcENDLEVBRG9DLEVBRWpDO0FBQ0hULHNCQUFnQixDQUFDUSxNQUFELEVBQVNDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQyxLQUFuQixDQUFoQjtBQUNELEtBSm9CO0FBQUEsR0FBckI7O0FBVEMsTUFlT0MsT0FmUCxHQWVtQmYsR0FmbkIsQ0FlT2UsT0FmUDtBQWlCRCxzQkFDRSwrREFBQyw2REFBRDtBQUFhLGFBQVMsTUFBdEI7QUFBQSw0QkFDRSw4REFBQyw0REFBRDtBQUNFLGFBQU8sRUFBRTtBQUNQcEIsYUFBSyxFQUFFVSxPQUFPLENBQUNWO0FBRFIsT0FEWDtBQUlFLGFBQU8sRUFBQyxPQUpWO0FBS0Usa0JBQVksTUFMZDtBQUFBLHFDQU9HSyxHQUFHLENBQUNRLEtBQUosQ0FBVVEsTUFQYixzREFPRyxrQkFBa0JDO0FBUHJCLE1BREYsRUFVR0YsT0FBTyxDQUFDRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixpQkFBcUI7QUFBQTs7QUFBQSxVQUFsQlIsTUFBa0IsU0FBbEJBLE1BQWtCO0FBQzFDLDBCQUNFLCtEQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGdDQUNFLDhEQUFDLDJEQUFEO0FBQ0Usc0JBQVksRUFDVmIsV0FEVSxhQUNWQSxXQURVLGdEQUNWQSxXQUFXLENBQUVzQixNQUFiLENBQW9CQyxJQUFwQixDQUF5QixVQUFDQyxDQUFEO0FBQUEsbUJBQVlBLENBQUMsQ0FBQ1gsTUFBRixLQUFhQSxNQUF6QjtBQUFBLFdBQXpCLENBRFUsMERBQ1Ysc0JBQTJERyxLQUYvRDtBQUlFLFlBQUUsRUFBQyxtQkFKTDtBQUtFLGVBQUssa0NBQUtkLEdBQUcsQ0FBQ1EsS0FBSixDQUFVUSxNQUFmLHVEQUFLLG1CQUFrQkMsS0FBdkIsY0FBZ0NOLE1BQWhDLENBTFA7QUFNRSxtQkFBUyxNQU5YO0FBT0Usa0JBQVEsRUFBRUQsWUFBWSxDQUFDQyxNQUFELENBUHhCO0FBUUUsa0JBQVEsRUFBRVosUUFSWjtBQVNFLGNBQUksRUFBRTtBQVRSLFVBREYsZUFZRSw4REFBQyxnRUFBRDtBQUFBLG9EQUNNQyxHQUFHLENBQUNRLEtBQUosQ0FBVVEsTUFEaEIsdURBQ00sbUJBQWtCTyxXQUR4QixjQUN1Q1osTUFEdkM7QUFBQSxVQVpGO0FBQUEsU0FBcUJBLE1BQXJCLENBREY7QUFrQkQsS0FuQkEsQ0FWSDtBQUFBLElBREY7QUFpQ0Q7O0dBMURlZCxRO1VBUzJCSSxrRSxFQUN6Q0csNEQsRUFDZ0JaLFM7OztLQVhGSyxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXh0YXJlYS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgRm9ybUhlbHBlclRleHQsXG4gIG1ha2VTdHlsZXMsXG4gIFRleHRGaWVsZCxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2hvb2tzL3VzZVRyYW5zbGF0ZSdcbmltcG9ydCB7IHVzZUxvY2FsZXMgfSBmcm9tICcuLi9ob29rcy91c2VMb2NhbGVzJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge30sXG4gIGxhYmVsOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICB9LFxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIFRleHRhcmVhKHtcbiAgaW5pdGlhbERhdGEsXG4gIHJlcXVpcmVkLFxuICBzZGssXG59OiB7XG4gIGluaXRpYWxEYXRhOiBhbnlcbiAgcmVxdWlyZWQ6IGJvb2xlYW5cbiAgc2RrOiBhbnlcbn0pIHtcbiAgY29uc3QgeyB0cmFuc2xhdGVkLCB1cGRhdGVUcmFuc2xhdGVkIH0gPSB1c2VUcmFuc2xhdGlvbihpbml0aWFsRGF0YSlcbiAgdXNlTG9jYWxlcyh0cmFuc2xhdGVkKVxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNkay5maWVsZC5zZXRWYWx1ZShpbml0aWFsRGF0YSlcbiAgfSwgW3Nka10pXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGxvY2FsZTogYW55KSA9PiAoXG4gICAgZXY6IFJlYWN0LkNoYW5nZUV2ZW50PHsgdmFsdWU6IHVua25vd24gfT4sXG4gICkgPT4ge1xuICAgIHVwZGF0ZVRyYW5zbGF0ZWQobG9jYWxlLCBldi50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCB7IGxvY2FsZXMgfSA9IHNka1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aD5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICBsYWJlbDogY2xhc3Nlcy5sYWJlbCxcbiAgICAgICAgfX1cbiAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICA+XG4gICAgICAgIHtzZGsuZmllbGQuc2NoZW1hPy50aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIHtsb2NhbGVzLmF2YWlsYWJsZS5tYXAoKHsgbG9jYWxlIH06IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2xvY2FsZX0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XG4gICAgICAgICAgICAgICAgaW5pdGlhbERhdGE/LnZhbHVlcy5maW5kKCh0OiBhbnkpID0+IHQubG9jYWxlID09PSBsb2NhbGUpPy52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlkPVwidGV4dGFyZWEtbGFiZWwtaWRcIlxuICAgICAgICAgICAgICBsYWJlbD17YCR7c2RrLmZpZWxkLnNjaGVtYT8udGl0bGV9ICR7bG9jYWxlfWB9XG4gICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKGxvY2FsZSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgICAgIHtgJHtzZGsuZmllbGQuc2NoZW1hPy5kZXNjcmlwdGlvbn0gJHtsb2NhbGV9YH1cbiAgICAgICAgICAgIDwvRm9ybUhlbHBlclRleHQ+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC9Gb3JtQ29udHJvbD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})