webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTranslate */ \"./hooks/useTranslate.ts\");\n/* harmony import */ var _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLocales */ \"./hooks/useLocales.ts\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StyledButton = withStyles({\n  root: {\n    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',\n    borderRadius: 3,\n    border: 0,\n    color: 'white',\n    height: 48,\n    padding: '0 30px',\n    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'\n  },\n  label: {\n    textTransform: 'capitalize'\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"]);\nfunction Textarea(_ref) {\n  _s();\n\n  var _sdk$field$schema;\n\n  var initialData = _ref.initialData,\n      required = _ref.required,\n      sdk = _ref.sdk;\n\n  var _useTranslation = Object(_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(initialData),\n      translated = _useTranslation.translated,\n      updateTranslated = _useTranslation.updateTranslated;\n\n  Object(_hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"])(translated);\n  var classes = useStyles();\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n\n  var handleChange = function handleChange(locale) {\n    return function (ev) {\n      updateTranslated(locale, ev.target.value);\n    };\n  };\n\n  var locales = sdk.locales;\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n      classes: {\n        root: classes.root,\n        label: classes.label\n      },\n      variant: \"body2\",\n      gutterBottom: true,\n      children: (_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title\n    }), locales.available.map(function (_ref2) {\n      var _initialData$values$f, _sdk$field$schema2, _sdk$field$schema3;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n          defaultValue: initialData === null || initialData === void 0 ? void 0 : (_initialData$values$f = initialData.values.find(function (t) {\n            return t.locale === locale;\n          })) === null || _initialData$values$f === void 0 ? void 0 : _initialData$values$f.value,\n          id: \"textarea-label-id\",\n          label: \"\".concat((_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.title, \" \").concat(locale),\n          multiline: true,\n          onChange: handleChange(locale),\n          required: required,\n          rows: 3\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n          children: \"\".concat((_sdk$field$schema3 = sdk.field.schema) === null || _sdk$field$schema3 === void 0 ? void 0 : _sdk$field$schema3.description, \" \").concat(locale)\n        })]\n      }, locale);\n    })]\n  });\n}\n\n_s(Textarea, \"lTFcBaUJbnW7weMHHVXrKI+px4Y=\", true, function () {\n  return [_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"], _hooks_useLocales__WEBPACK_IMPORTED_MODULE_4__[\"useLocales\"]];\n});\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJTdHlsZWRCdXR0b24iLCJ3aXRoU3R5bGVzIiwicm9vdCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJjb2xvciIsImhlaWdodCIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJsYWJlbCIsInRleHRUcmFuc2Zvcm0iLCJUeXBvZ3JhcGh5IiwiVGV4dGFyZWEiLCJpbml0aWFsRGF0YSIsInJlcXVpcmVkIiwic2RrIiwidXNlVHJhbnNsYXRpb24iLCJ0cmFuc2xhdGVkIiwidXBkYXRlVHJhbnNsYXRlZCIsInVzZUxvY2FsZXMiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJmaWVsZCIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwibG9jYWxlIiwiZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvY2FsZXMiLCJzY2hlbWEiLCJ0aXRsZSIsImF2YWlsYWJsZSIsIm1hcCIsInZhbHVlcyIsImZpbmQiLCJ0IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLFVBQVUsQ0FBQztBQUM5QkMsTUFBSSxFQUFFO0FBQ0pDLGNBQVUsRUFBRSxrREFEUjtBQUVKQyxnQkFBWSxFQUFFLENBRlY7QUFHSkMsVUFBTSxFQUFFLENBSEo7QUFJSkMsU0FBSyxFQUFFLE9BSkg7QUFLSkMsVUFBTSxFQUFFLEVBTEo7QUFNSkMsV0FBTyxFQUFFLFFBTkw7QUFPSkMsYUFBUyxFQUFFO0FBUFAsR0FEd0I7QUFVOUJDLE9BQUssRUFBRTtBQUNMQyxpQkFBYSxFQUFFO0FBRFY7QUFWdUIsQ0FBRCxDQUFWLENBYWxCQyw0REFia0IsQ0FBckI7QUFlTyxTQUFTQyxRQUFULE9BUUo7QUFBQTs7QUFBQTs7QUFBQSxNQVBEQyxXQU9DLFFBUERBLFdBT0M7QUFBQSxNQU5EQyxRQU1DLFFBTkRBLFFBTUM7QUFBQSxNQUxEQyxHQUtDLFFBTERBLEdBS0M7O0FBQUEsd0JBQ3dDQywwRUFBYyxDQUFDSCxXQUFELENBRHREO0FBQUEsTUFDT0ksVUFEUCxtQkFDT0EsVUFEUDtBQUFBLE1BQ21CQyxnQkFEbkIsbUJBQ21CQSxnQkFEbkI7O0FBRURDLHNFQUFVLENBQUNGLFVBQUQsQ0FBVjtBQUNBLE1BQU1HLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEJSLE9BQUcsQ0FBQ1MsS0FBSixDQUFVQyxRQUFWLENBQW1CWixXQUFuQjtBQUNELEdBRkQsRUFFRyxDQUFDRSxHQUFELENBRkg7O0FBSUEsTUFBTVcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRDtBQUFBLFdBQWlCLFVBQ3BDQyxFQURvQyxFQUVqQztBQUNIVixzQkFBZ0IsQ0FBQ1MsTUFBRCxFQUFTQyxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsS0FBbkIsQ0FBaEI7QUFDRCxLQUpvQjtBQUFBLEdBQXJCOztBQVRDLE1BZU9DLE9BZlAsR0FlbUJoQixHQWZuQixDQWVPZ0IsT0FmUDtBQWlCRCxzQkFDRSwrREFBQyw2REFBRDtBQUFhLGFBQVMsTUFBdEI7QUFBQSw0QkFDRSw4REFBQyw0REFBRDtBQUNFLGFBQU8sRUFBRTtBQUNQOUIsWUFBSSxFQUFFbUIsT0FBTyxDQUFDbkIsSUFEUDtBQUVQUSxhQUFLLEVBQUVXLE9BQU8sQ0FBQ1g7QUFGUixPQURYO0FBS0UsYUFBTyxFQUFDLE9BTFY7QUFNRSxrQkFBWSxNQU5kO0FBQUEscUNBUUdNLEdBQUcsQ0FBQ1MsS0FBSixDQUFVUSxNQVJiLHNEQVFHLGtCQUFrQkM7QUFSckIsTUFERixFQVdHRixPQUFPLENBQUNHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGlCQUFxQjtBQUFBOztBQUFBLFVBQWxCUixNQUFrQixTQUFsQkEsTUFBa0I7QUFDMUMsMEJBQ0UsK0RBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZ0NBQ0UsOERBQUMsMkRBQUQ7QUFDRSxzQkFBWSxFQUNWZCxXQURVLGFBQ1ZBLFdBRFUsZ0RBQ1ZBLFdBQVcsQ0FBRXVCLE1BQWIsQ0FBb0JDLElBQXBCLENBQXlCLFVBQUNDLENBQUQ7QUFBQSxtQkFBWUEsQ0FBQyxDQUFDWCxNQUFGLEtBQWFBLE1BQXpCO0FBQUEsV0FBekIsQ0FEVSwwREFDVixzQkFBMkRHLEtBRi9EO0FBSUUsWUFBRSxFQUFDLG1CQUpMO0FBS0UsZUFBSyxrQ0FBS2YsR0FBRyxDQUFDUyxLQUFKLENBQVVRLE1BQWYsdURBQUssbUJBQWtCQyxLQUF2QixjQUFnQ04sTUFBaEMsQ0FMUDtBQU1FLG1CQUFTLE1BTlg7QUFPRSxrQkFBUSxFQUFFRCxZQUFZLENBQUNDLE1BQUQsQ0FQeEI7QUFRRSxrQkFBUSxFQUFFYixRQVJaO0FBU0UsY0FBSSxFQUFFO0FBVFIsVUFERixlQVlFLDhEQUFDLGdFQUFEO0FBQUEsb0RBQ01DLEdBQUcsQ0FBQ1MsS0FBSixDQUFVUSxNQURoQix1REFDTSxtQkFBa0JPLFdBRHhCLGNBQ3VDWixNQUR2QztBQUFBLFVBWkY7QUFBQSxTQUFxQkEsTUFBckIsQ0FERjtBQWtCRCxLQW5CQSxDQVhIO0FBQUEsSUFERjtBQWtDRDs7R0EzRGVmLFE7VUFTMkJJLGtFLEVBQ3pDRyw0RDs7O0tBVmNQLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RleHRhcmVhLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBGb3JtSGVscGVyVGV4dCxcbiAgbWFrZVN0eWxlcyxcbiAgVGV4dEZpZWxkLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaG9va3MvdXNlVHJhbnNsYXRlJ1xuaW1wb3J0IHsgdXNlTG9jYWxlcyB9IGZyb20gJy4uL2hvb2tzL3VzZUxvY2FsZXMnXG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZFNkI4QiAzMCUsICNGRjhFNTMgOTAlKScsXG4gICAgYm9yZGVyUmFkaXVzOiAzLFxuICAgIGJvcmRlcjogMCxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBoZWlnaHQ6IDQ4LFxuICAgIHBhZGRpbmc6ICcwIDMwcHgnLFxuICAgIGJveFNoYWRvdzogJzAgM3B4IDVweCAycHggcmdiYSgyNTUsIDEwNSwgMTM1LCAuMyknLFxuICB9LFxuICBsYWJlbDoge1xuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgfSxcbn0pKFR5cG9ncmFwaHkpXG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0YXJlYSh7XG4gIGluaXRpYWxEYXRhLFxuICByZXF1aXJlZCxcbiAgc2RrLFxufToge1xuICBpbml0aWFsRGF0YTogYW55XG4gIHJlcXVpcmVkOiBib29sZWFuXG4gIHNkazogYW55XG59KSB7XG4gIGNvbnN0IHsgdHJhbnNsYXRlZCwgdXBkYXRlVHJhbnNsYXRlZCB9ID0gdXNlVHJhbnNsYXRpb24oaW5pdGlhbERhdGEpXG4gIHVzZUxvY2FsZXModHJhbnNsYXRlZClcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZGsuZmllbGQuc2V0VmFsdWUoaW5pdGlhbERhdGEpXG4gIH0sIFtzZGtdKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChsb2NhbGU6IGFueSkgPT4gKFxuICAgIGV2OiBSZWFjdC5DaGFuZ2VFdmVudDx7IHZhbHVlOiB1bmtub3duIH0+LFxuICApID0+IHtcbiAgICB1cGRhdGVUcmFuc2xhdGVkKGxvY2FsZSwgZXYudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgeyBsb2NhbGVzIH0gPSBzZGtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290LFxuICAgICAgICAgIGxhYmVsOiBjbGFzc2VzLmxhYmVsLFxuICAgICAgICB9fVxuICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgID5cbiAgICAgICAge3Nkay5maWVsZC5zY2hlbWE/LnRpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAge2xvY2FsZXMuYXZhaWxhYmxlLm1hcCgoeyBsb2NhbGUgfTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17bG9jYWxlfT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcbiAgICAgICAgICAgICAgICBpbml0aWFsRGF0YT8udmFsdWVzLmZpbmQoKHQ6IGFueSkgPT4gdC5sb2NhbGUgPT09IGxvY2FsZSk/LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWQ9XCJ0ZXh0YXJlYS1sYWJlbC1pZFwiXG4gICAgICAgICAgICAgIGxhYmVsPXtgJHtzZGsuZmllbGQuc2NoZW1hPy50aXRsZX0gJHtsb2NhbGV9YH1cbiAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UobG9jYWxlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5cbiAgICAgICAgICAgICAge2Ake3Nkay5maWVsZC5zY2hlbWE/LmRlc2NyaXB0aW9ufSAke2xvY2FsZX1gfVxuICAgICAgICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L0Zvcm1Db250cm9sPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})