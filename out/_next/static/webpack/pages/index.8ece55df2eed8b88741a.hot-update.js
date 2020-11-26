webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Textarea.tsx":
/*!*********************************!*\
  !*** ./components/Textarea.tsx ***!
  \*********************************/
/*! exports provided: ExtensionContext, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExtensionContext\", function() { return ExtensionContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTranslate */ \"./hooks/useTranslate.ts\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ExtensionContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nfunction Textarea(_ref) {\n  _s();\n\n  var sdk = _ref.sdk,\n      initialData = _ref.initialData,\n      required = _ref.required;\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    sdk.field.setValue(initialData);\n  }, [sdk]);\n  /*   const handleChange = (ev: React.ChangeEvent<{ value: unknown }>) => {\n    sdk.field.setValue(ev.target.value)\n  } */\n\n  var _useTranslation = Object(_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(initialData),\n      updateTraslated = _useTranslation.actions.updateTraslated;\n\n  updateTranslated(locale, e.target.value);\n  var locales = sdk.locales;\n  console.log(locales);\n  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormControl\"], {\n    fullWidth: true,\n    children: locales.available.map(function (_ref2) {\n      var _sdk$field$schema, _sdk$field$schema2;\n\n      var locale = _ref2.locale;\n      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        width: \"100%\",\n        mb: \"1rem\",\n        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n          onChange: updateTraslated,\n          rows: 3,\n          defaultValue: initialData,\n          id: \"textarea-label-id\",\n          multiline: true,\n          label: \"\".concat((_sdk$field$schema = sdk.field.schema) === null || _sdk$field$schema === void 0 ? void 0 : _sdk$field$schema.title, \" \").concat(locale),\n          required: required\n        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"FormHelperText\"], {\n          children: \"\".concat((_sdk$field$schema2 = sdk.field.schema) === null || _sdk$field$schema2 === void 0 ? void 0 : _sdk$field$schema2.description, \" \").concat(locale)\n        })]\n      }, locale);\n    })\n  });\n}\n\n_s(Textarea, \"AiyFwHaJi7BqxWnxBXIbLvPm528=\", false, function () {\n  return [_hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"]];\n});\n\n_c = Textarea;\n\nvar _c;\n\n$RefreshReg$(_c, \"Textarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0YXJlYS50c3g/YjY3MyJdLCJuYW1lcyI6WyJFeHRlbnNpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlRleHRhcmVhIiwic2RrIiwiaW5pdGlhbERhdGEiLCJyZXF1aXJlZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZmllbGQiLCJzZXRWYWx1ZSIsInVzZVRyYW5zbGF0aW9uIiwidXBkYXRlVHJhc2xhdGVkIiwiYWN0aW9ucyIsInVwZGF0ZVRyYW5zbGF0ZWQiLCJsb2NhbGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsb2NhbGVzIiwiY29uc29sZSIsImxvZyIsImF2YWlsYWJsZSIsIm1hcCIsInNjaGVtYSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsZ0JBQWdCLGdCQUFHQywyREFBYSxDQUFDLElBQUQsQ0FBdEM7QUFFQSxTQUFTQyxRQUFULE9BUUo7QUFBQTs7QUFBQSxNQVBEQyxHQU9DLFFBUERBLEdBT0M7QUFBQSxNQU5EQyxXQU1DLFFBTkRBLFdBTUM7QUFBQSxNQUxEQyxRQUtDLFFBTERBLFFBS0M7QUFDREMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCSixPQUFHLENBQUNLLEtBQUosQ0FBVUMsUUFBVixDQUFtQkwsV0FBbkI7QUFDRCxHQUZELEVBRUcsQ0FBQ0QsR0FBRCxDQUZIO0FBSUE7QUFDRjtBQUNBOztBQVBHLHdCQVdHTywwRUFBYyxDQUFDTixXQUFELENBWGpCO0FBQUEsTUFVWU8sZUFWWixtQkFVQ0MsT0FWRCxDQVVZRCxlQVZaOztBQWFERSxrQkFBZ0IsQ0FBQ0MsTUFBRCxFQUFTQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBbEIsQ0FBaEI7QUFiQyxNQWVPQyxPQWZQLEdBZW1CZixHQWZuQixDQWVPZSxPQWZQO0FBaUJEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUVBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQWEsYUFBUyxNQUF0QjtBQUFBLGNBQ0dBLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsaUJBQXFCO0FBQUE7O0FBQUEsVUFBbEJSLE1BQWtCLFNBQWxCQSxNQUFrQjtBQUMxQywwQkFDRSwrREFBQyxxREFBRDtBQUFLLGFBQUssRUFBQyxNQUFYO0FBQWtCLFVBQUUsRUFBQyxNQUFyQjtBQUFBLGdDQUNFLDhEQUFDLDJEQUFEO0FBQ0Usa0JBQVEsRUFBRUgsZUFEWjtBQUVFLGNBQUksRUFBRSxDQUZSO0FBR0Usc0JBQVksRUFBRVAsV0FIaEI7QUFJRSxZQUFFLEVBQUMsbUJBSkw7QUFLRSxtQkFBUyxNQUxYO0FBTUUsZUFBSyxpQ0FBS0QsR0FBRyxDQUFDSyxLQUFKLENBQVVlLE1BQWYsc0RBQUssa0JBQWtCQyxLQUF2QixjQUFnQ1YsTUFBaEMsQ0FOUDtBQU9FLGtCQUFRLEVBQUVUO0FBUFosVUFERixlQVVFLDhEQUFDLGdFQUFEO0FBQUEsb0RBQ01GLEdBQUcsQ0FBQ0ssS0FBSixDQUFVZSxNQURoQix1REFDTSxtQkFBa0JFLFdBRHhCLGNBQ3VDWCxNQUR2QztBQUFBLFVBVkY7QUFBQSxTQUFpQ0EsTUFBakMsQ0FERjtBQWdCRCxLQWpCQTtBQURILElBREY7QUFzQkQ7O0dBakRlWixRO1VBbUJWUSxrRTs7O0tBbkJVUixRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZXh0YXJlYS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBGb3JtQ29udHJvbCwgRm9ybUhlbHBlclRleHQsIFRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi9ob29rcy91c2VUcmFuc2xhdGUnXG5cbmV4cG9ydCBjb25zdCBFeHRlbnNpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxuXG5leHBvcnQgZnVuY3Rpb24gVGV4dGFyZWEoe1xuICBzZGssXG4gIGluaXRpYWxEYXRhLFxuICByZXF1aXJlZCxcbn06IHtcbiAgc2RrOiBhbnlcbiAgaW5pdGlhbERhdGE6IGFueVxuICByZXF1aXJlZDogYm9vbGVhblxufSkge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNkay5maWVsZC5zZXRWYWx1ZShpbml0aWFsRGF0YSlcbiAgfSwgW3Nka10pXG5cbiAgLyogICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXY6IFJlYWN0LkNoYW5nZUV2ZW50PHsgdmFsdWU6IHVua25vd24gfT4pID0+IHtcbiAgICBzZGsuZmllbGQuc2V0VmFsdWUoZXYudGFyZ2V0LnZhbHVlKVxuICB9ICovXG5cbiAgY29uc3Qge1xuICAgIGFjdGlvbnM6IHsgdXBkYXRlVHJhc2xhdGVkIH0sXG4gIH0gPSB1c2VUcmFuc2xhdGlvbihpbml0aWFsRGF0YSlcblxuICB1cGRhdGVUcmFuc2xhdGVkKGxvY2FsZSwgZS50YXJnZXQudmFsdWUpXG5cbiAgY29uc3QgeyBsb2NhbGVzIH0gPSBzZGtcblxuICBjb25zb2xlLmxvZyhsb2NhbGVzKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aD5cbiAgICAgIHtsb2NhbGVzLmF2YWlsYWJsZS5tYXAoKHsgbG9jYWxlIH06IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCb3ggd2lkdGg9XCIxMDAlXCIgbWI9XCIxcmVtXCIga2V5PXtsb2NhbGV9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlVHJhc2xhdGVkfVxuICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2luaXRpYWxEYXRhfVxuICAgICAgICAgICAgICBpZD1cInRleHRhcmVhLWxhYmVsLWlkXCJcbiAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgIGxhYmVsPXtgJHtzZGsuZmllbGQuc2NoZW1hPy50aXRsZX0gJHtsb2NhbGV9YH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5cbiAgICAgICAgICAgICAge2Ake3Nkay5maWVsZC5zY2hlbWE/LmRlc2NyaXB0aW9ufSAke2xvY2FsZX1gfVxuICAgICAgICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC9Gb3JtQ29udHJvbD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Textarea.tsx\n");

/***/ })

})