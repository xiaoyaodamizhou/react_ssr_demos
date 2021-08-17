/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar App = function App(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, null), (0,react_router_config__WEBPACK_IMPORTED_MODULE_2__.renderRoutes)(props.route.routes));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc3NyLy4vc3JjL0FwcC5qcz9iZTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItY29uZmlnXCI7XG5cbmNvbnN0IEFwcCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAge3JlbmRlclJvdXRlcyhwcm9wcy5yb3V0ZS5yb3V0ZXMpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App.js\n");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/containers/Home */ \"./src/containers/Home/index.js\");\n/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/Login */ \"./src/containers/Login/index.js\");\n/* harmony import */ var _containers_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/NotFound */ \"./src/containers/NotFound/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/App */ \"./src/App.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  path: \"/\",\n  component: _App__WEBPACK_IMPORTED_MODULE_4__.default,\n  key: \"app\",\n  routes: [{\n    path: \"/\",\n    component: _containers_Home__WEBPACK_IMPORTED_MODULE_1__.default,\n    exact: true,\n    key: \"home\",\n    loadData: _containers_Home__WEBPACK_IMPORTED_MODULE_1__.default.loadData\n  }, {\n    path: \"/login\",\n    component: _containers_Login__WEBPACK_IMPORTED_MODULE_2__.default,\n    key: \"login\",\n    exact: true\n  }, // 没有配置的页面显示404\n  {\n    component: _containers_NotFound__WEBPACK_IMPORTED_MODULE_3__.default\n  }]\n}]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUm91dGVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc3NyLy4vc3JjL1JvdXRlcy5qcz80MTk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIb21lIGZyb20gXCJAL2NvbnRhaW5lcnMvSG9tZVwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCJAL2NvbnRhaW5lcnMvTG9naW5cIjtcbmltcG9ydCBOb3RGb3VuZCBmcm9tIFwiQC9jb250YWluZXJzL05vdEZvdW5kXCJcbmltcG9ydCBBcHAgZnJvbSBcIkAvQXBwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBjb21wb25lbnQ6IEFwcCxcbiAgICAgICAga2V5OiBcImFwcFwiLFxuICAgICAgICByb3V0ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IEhvbWUsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAga2V5OiBcImhvbWVcIixcbiAgICAgICAgICAgICAgICBsb2FkRGF0YTogSG9tZS5sb2FkRGF0YSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogXCIvbG9naW5cIixcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IExvZ2luLFxuICAgICAgICAgICAgICAgIGtleTogXCJsb2dpblwiLFxuICAgICAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOayoeaciemFjee9rueahOmhtemdouaYvuekujQwNFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTm90Rm91bmQsXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgfSxcbl07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBREE7QUFuQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Routes.js\n");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: '/'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3JlcXVlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9zc3IvLi9zcmMvY2xpZW50L3JlcXVlc3QuanM/ZTZhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiAnLycsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/request.js\n");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Header = function Header(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/login\"\n  }, \"login\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9zc3IvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanM/YWQ4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIHRvPScvJz5ob21lPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9sb2dpbic+bG9naW48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.js\n");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/global */ \"./src/store/global.js\");\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/client/request */ \"./src/client/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/server/request */ \"./src/server/request.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ \"./src/containers/Home/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar Home = function Home(props) {\n  // 服务端isomorphic-style-loader插件会给styles绑定_getCss()方法\n  console.log(\"css\", (_index_css__WEBPACK_IMPORTED_MODULE_6___default()));\n  console.log('server home props:', props);\n  props.staticContext && props.staticContext.css.push(_index_css__WEBPACK_IMPORTED_MODULE_6___default()._getCss());\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_global__WEBPACK_IMPORTED_MODULE_2__.Store),\n      globalDispatch = _useContext.dispatch,\n      globalState = _useContext.state;\n\n  var userInfo = globalState.userInfo,\n      weatherMessage = globalState.weatherMessage;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    // 客户端首先加载的页面是login,所以服务器不会执行Home.loadData方法，所以initStore的数据并没有被渲染好，这个时候\n    // 客户端拿到的初始store的出水操作时空值，所以这种情况还是需要再发一次请求\n    if (!globalState.weatherMessage) {\n      _client_request__WEBPACK_IMPORTED_MODULE_3__.default.get(\"api/homedata\").then(function (response) {\n        globalDispatch({\n          type: \"WEATHER_MESSAGE\",\n          payload: response.data.weatherMessage\n        });\n      })[\"catch\"](function (err) {\n        console.log(\"error\", err);\n      });\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_index_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"meta\", {\n    name: \"description\",\n    content: \"react ssr \\u9996\\u9875\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"title\", null, \"\\u9996\\u9875\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", {\n    className: (_index_css__WEBPACK_IMPORTED_MODULE_6___default().title)\n  }, \"hello, \", userInfo.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, \"weaher\\u4FE1\\u606F: \", weatherMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    onClick: function onClick() {\n      globalDispatch({\n        type: \"UPDATE_USER_INFO\",\n        payload: {\n          name: \"tomas\"\n        }\n      });\n    },\n    className: \"test\"\n  }, \"clicked!\"));\n};\n\nHome.loadData = function (Store) {\n  return _server_request__WEBPACK_IMPORTED_MODULE_4__.default.get(\"/api/homedata\").then(function (response) {\n    Store.weatherMessage = response.data.weatherMessage;\n  })[\"catch\"](function (err) {\n    console.log(\"error\", err);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Ib21lL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc3NyLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9pbmRleC5qcz84N2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0b3JlIGFzIEdsb2JhbFN0b3JlIH0gZnJvbSBcIkAvc3RvcmUvZ2xvYmFsXCI7XG5pbXBvcnQgY2xpZW50QXhpb3MgZnJvbSBcIkAvY2xpZW50L3JlcXVlc3RcIjtcbmltcG9ydCBzZXJ2ZXJBeGlvcyBmcm9tIFwiQC9zZXJ2ZXIvcmVxdWVzdFwiO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5jc3NcIjtcblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICAgIC8vIOacjeWKoeerr2lzb21vcnBoaWMtc3R5bGUtbG9hZGVy5o+S5Lu25Lya57uZc3R5bGVz57uR5a6aX2dldENzcygp5pa55rOVXG4gICAgY29uc29sZS5sb2coXCJjc3NcIiwgc3R5bGVzKVxuICAgIGNvbnNvbGUubG9nKCdzZXJ2ZXIgaG9tZSBwcm9wczonLCBwcm9wcylcbiAgICBwcm9wcy5zdGF0aWNDb250ZXh0ICYmIHByb3BzLnN0YXRpY0NvbnRleHQuY3NzLnB1c2goc3R5bGVzLl9nZXRDc3MoKSk7XG4gICAgY29uc3QgeyBkaXNwYXRjaDogZ2xvYmFsRGlzcGF0Y2gsIHN0YXRlOiBnbG9iYWxTdGF0ZSB9ID0gdXNlQ29udGV4dChcbiAgICAgICAgR2xvYmFsU3RvcmVcbiAgICApO1xuICAgIGNvbnN0IHsgdXNlckluZm8sIHdlYXRoZXJNZXNzYWdlIH0gPSBnbG9iYWxTdGF0ZTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIOWuouaIt+err+mmluWFiOWKoOi9veeahOmhtemdouaYr2xvZ2luLOaJgOS7peacjeWKoeWZqOS4jeS8muaJp+ihjEhvbWUubG9hZERhdGHmlrnms5XvvIzmiYDku6Vpbml0U3RvcmXnmoTmlbDmja7lubbmsqHmnInooqvmuLLmn5Plpb3vvIzov5nkuKrml7blgJlcbiAgICAgICAgLy8g5a6i5oi356uv5ou/5Yiw55qE5Yid5aeLc3RvcmXnmoTlh7rmsLTmk43kvZzml7bnqbrlgLzvvIzmiYDku6Xov5nnp43mg4XlhrXov5jmmK/pnIDopoHlho3lj5HkuIDmrKHor7fmsYJcbiAgICAgICAgaWYgKCFnbG9iYWxTdGF0ZS53ZWF0aGVyTWVzc2FnZSkge1xuICAgICAgICAgICAgY2xpZW50QXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KFwiYXBpL2hvbWVkYXRhXCIpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiV0VBVEhFUl9NRVNTQUdFXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwb25zZS5kYXRhLndlYXRoZXJNZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJyZWFjdCBzc3Ig6aaW6aG1XCI+PC9tZXRhPlxuICAgICAgICAgICAgICAgIDx0aXRsZT7pppbpobU8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWxtZXQ+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PmhlbGxvLCB7dXNlckluZm8ubmFtZX08L2gxPlxuICAgICAgICAgICAgPGRpdj53ZWFoZXLkv6Hmga86IHt3ZWF0aGVyTWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbERpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVVBEQVRFX1VTRVJfSU5GT1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidG9tYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGVzdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgY2xpY2tlZCFcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuSG9tZS5sb2FkRGF0YSA9IChTdG9yZSkgPT4ge1xuICAgIHJldHVybiBzZXJ2ZXJBeGlvc1xuICAgICAgICAuZ2V0KFwiL2FwaS9ob21lZGF0YVwiKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIFN0b3JlLndlYXRoZXJNZXNzYWdlID0gcmVzcG9uc2UuZGF0YS53ZWF0aGVyTWVzc2FnZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQVRBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/Home/index.js\n");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Login = function Login(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"description\",\n    content: \"react ssr \\u767B\\u5F55\\u9875\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"\\u767B\\u5F55\\u9875\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"login\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Mb2dpbi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0X3Nzci8uL3NyYy9jb250YWluZXJzL0xvZ2luL2luZGV4LmpzPzY4NTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtIZWxtZXR9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcblxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwicmVhY3Qgc3NyIOeZu+W9lemhtVwiPjwvbWV0YT5cbiAgICAgICAgICAgICAgICA8dGl0bGU+55m75b2V6aG1PC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVsbWV0PlxuICAgICAgICAgICAgPGRpdj5sb2dpbjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/Login/index.js\n");

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NotFound = function NotFound(props) {\n  props.staticContext && (props.staticContext.notFound = true);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"404 not found\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Ob3RGb3VuZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0X3Nzci8uL3NyYy9jb250YWluZXJzL05vdEZvdW5kL2luZGV4LmpzPzhmODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBOb3RGb3VuZCA9IChwcm9wcykgPT4ge1xuICAgIHByb3BzLnN0YXRpY0NvbnRleHQgJiYgKHByb3BzLnN0YXRpY0NvbnRleHQubm90Rm91bmQgPSB0cnVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjQwNCBub3QgZm91bmQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/NotFound/index.js\n");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ \"@babel/runtime-corejs3/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"@babel/runtime-corejs3/regenerator\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ \"@babel/runtime-corejs3/core-js-stable/promise\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/global */ \"./src/store/global.js\");\n\n\n\n\n\n\n\n\n\n\nvar koa = __webpack_require__(/*! koa */ \"koa\");\n\nvar bodyParser = __webpack_require__(/*! koa-bodyParser */ \"./node_modules/koa-bodyParser/index.js\");\n\nvar staticFiles = __webpack_require__(/*! koa-static */ \"koa-static\");\n\nvar router = __webpack_require__(/*! koa-router */ \"koa-router\")();\n\nvar proxy = __webpack_require__(/*! koa2-proxy-middleware */ \"koa2-proxy-middleware\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\n\n\n\n\nvar app = new koa();\n\nvar cors = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n\napp.use(cors({\n  origin: \"*\"\n})); // 代理配置, 形如uri: `${protocal}://${hostname}/api/${path}`的请求装交给代理服务器\n// 假设服务接口url: http://49.235.72.243:3001\n\napp.use(proxy({\n  targets: {\n    \"/api/(.*)\": {\n      target: \"http://49.235.72.243:3001\",\n      changeOrigin: true,\n      pathRewrite: {\n        \"/api\": \"/api\" // rewrite path\n\n      }\n    }\n  }\n}));\napp.use(bodyParser({\n  multipart: true\n})); // 静态文件设置，将客户端打代码打包到静态文件目录\n\napp.use(staticFiles(path.resolve(__dirname, \"../src/server/public\"), {\n  maxage: 30 * 24 * 60 * 60 * 1000\n}));\nrouter.get(\"/(.*)\", /*#__PURE__*/function () {\n  var _ref = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(context, next) {\n    var promises, matchedRoutes;\n    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // 根据路由的路径，来往store里面加数据\n            promises = [];\n            matchedRoutes = (0,react_router_config__WEBPACK_IMPORTED_MODULE_9__.matchRoutes)(_Routes__WEBPACK_IMPORTED_MODULE_11__.default, context.request.path); // 让matchRoutes里面的所有组件对应的loadData方法执行一次\n            // 使得数据提前加载好在渲染。\n\n            _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_7___default()(matchedRoutes).call(matchedRoutes, function (item) {\n              if (item.route.loadData) {\n                var promise = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8___default())(function (resolve, reject) {\n                  return item.route.loadData(_store_global__WEBPACK_IMPORTED_MODULE_12__.initStore).then(resolve())[\"catch\"](resolve());\n                });\n                promises.push(promise);\n              }\n            });\n\n            _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_8___default().all(promises).then(function () {\n              var ctx = {\n                css: []\n              };\n              var html = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.render)(context.request, _Routes__WEBPACK_IMPORTED_MODULE_11__.default, ctx);\n              console.log(\"ctx\", ctx);\n\n              if (ctx.notFound) {\n                context.response.status = 404;\n              } // staticRouter的Redirect组件被调用\n              // ctx增加了action,url属性\n\n\n              if (ctx.action === \"REPLACE\") {\n                context.response.redirect(301, ctx.url);\n              }\n\n              context.response.body = html;\n            });\n\n            _context.next = 6;\n            return next();\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.use(router.routes()).use(router.allowedMethods());\napp.listen(3000, function () {\n  console.log(\"app service start at http://localhost:3000\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc3NyLy4vc3JjL3NlcnZlci9pbmRleC5qcz9hZjgyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtvYSA9IHJlcXVpcmUoXCJrb2FcIik7XG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZShcImtvYS1ib2R5UGFyc2VyXCIpO1xuY29uc3Qgc3RhdGljRmlsZXMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTtcbmNvbnN0IHJvdXRlciA9IHJlcXVpcmUoXCJrb2Etcm91dGVyXCIpKCk7XG5jb25zdCBwcm94eSA9IHJlcXVpcmUoXCJrb2EyLXByb3h5LW1pZGRsZXdhcmVcIik7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5cbmltcG9ydCB7IG1hdGNoUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1jb25maWdcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgUm91dGVzIGZyb20gXCIuLi9Sb3V0ZXNcIjtcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gXCIuLi9zdG9yZS9nbG9iYWxcIjtcblxuY29uc3QgYXBwID0gbmV3IGtvYSgpO1xuY29uc3QgY29ycyA9IHJlcXVpcmUoXCJAa29hL2NvcnNcIik7XG5cbmFwcC51c2UoXG4gICAgY29ycyh7XG4gICAgICAgIG9yaWdpbjogXCIqXCIsXG4gICAgfSlcbik7XG5cbi8vIOS7o+eQhumFjee9riwg5b2i5aaCdXJpOiBgJHtwcm90b2NhbH06Ly8ke2hvc3RuYW1lfS9hcGkvJHtwYXRofWDnmoTor7fmsYLoo4XkuqTnu5nku6PnkIbmnI3liqHlmahcbi8vIOWBh+iuvuacjeWKoeaOpeWPo3VybDogaHR0cDovLzQ5LjIzNS43Mi4yNDM6MzAwMVxuYXBwLnVzZShcbiAgICBwcm94eSh7XG4gICAgICAgIHRhcmdldHM6IHtcbiAgICAgICAgICAgIFwiL2FwaS8oLiopXCI6IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiaHR0cDovLzQ5LjIzNS43Mi4yNDM6MzAwMVwiLFxuICAgICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXRoUmV3cml0ZToge1xuICAgICAgICAgICAgICAgICAgICBcIi9hcGlcIjogXCIvYXBpXCIsIC8vIHJld3JpdGUgcGF0aFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pXG4pO1xuXG5cbmFwcC51c2UoXG4gICAgYm9keVBhcnNlcih7XG4gICAgICAgIG11bHRpcGFydDogdHJ1ZSxcbiAgICB9KVxuKTtcblxuLy8g6Z2Z5oCB5paH5Lu26K6+572u77yM5bCG5a6i5oi356uv5omT5Luj56CB5omT5YyF5Yiw6Z2Z5oCB5paH5Lu255uu5b2VXG5hcHAudXNlKFxuICAgIHN0YXRpY0ZpbGVzKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vc3JjL3NlcnZlci9wdWJsaWNcIiksIHtcbiAgICAgICAgbWF4YWdlOiAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSlcbik7XG5cblxucm91dGVyLmdldChcIi8oLiopXCIsIGFzeW5jIChjb250ZXh0LCBuZXh0KSA9PiB7XG4gICAgLy8g5qC55o2u6Lev55Sx55qE6Lev5b6E77yM5p2l5b6Ac3RvcmXph4zpnaLliqDmlbDmja5cbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgIGNvbnN0IG1hdGNoZWRSb3V0ZXMgPSBtYXRjaFJvdXRlcyhSb3V0ZXMsIGNvbnRleHQucmVxdWVzdC5wYXRoKTtcbiAgICAvLyDorqltYXRjaFJvdXRlc+mHjOmdoueahOaJgOaciee7hOS7tuWvueW6lOeahGxvYWREYXRh5pa55rOV5omn6KGM5LiA5qyhXG4gICAgLy8g5L2/5b6X5pWw5o2u5o+Q5YmN5Yqg6L295aW95Zyo5riy5p+T44CCXG4gICAgbWF0Y2hlZFJvdXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnJvdXRlLmxvYWREYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnJvdXRlXG4gICAgICAgICAgICAgICAgICAgIC5sb2FkRGF0YShpbml0U3RvcmUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUoKSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlc29sdmUoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgIGNzczogW10sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGh0bWwgPSByZW5kZXIoY29udGV4dC5yZXF1ZXN0LCBSb3V0ZXMsIGN0eCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3R4XCIsIGN0eClcbiAgICAgICAgaWYgKGN0eC5ub3RGb3VuZCkge1xuICAgICAgICAgICAgY29udGV4dC5yZXNwb25zZS5zdGF0dXMgPSA0MDQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3RhdGljUm91dGVy55qEUmVkaXJlY3Tnu4Tku7booqvosIPnlKhcbiAgICAgICAgLy8gY3R45aKe5Yqg5LqGYWN0aW9uLHVybOWxnuaAp1xuICAgICAgICBpZiAoY3R4LmFjdGlvbiA9PT0gXCJSRVBMQUNFXCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQucmVzcG9uc2UucmVkaXJlY3QoMzAxLCBjdHgudXJsKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnJlc3BvbnNlLmJvZHkgPSBodG1sO1xuICAgIH0pO1xuICAgIGF3YWl0IG5leHQoKTtcbn0pO1xuXG5hcHAudXNlKHJvdXRlci5yb3V0ZXMoKSkudXNlKHJvdXRlci5hbGxvd2VkTWV0aG9kcygpKTtcblxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJhcHAgc2VydmljZSBzdGFydCBhdCBodHRwOi8vbG9jYWxob3N0OjMwMDBcIik7XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFEQTtBQURBO0FBY0E7QUFFQTtBQURBO0FBQ0E7QUFLQTtBQUVBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBakNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQW9DQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server/index.js\n");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: 'http://49.235.72.243:3001'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL3JlcXVlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9zc3IvLi9zcmMvc2VydmVyL3JlcXVlc3QuanM/ZmM1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiAnaHR0cDovLzQ5LjIzNS43Mi4yNDM6MzAwMScsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/server/request.js\n");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ \"@babel/runtime-corejs3/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"@babel/runtime-corejs3/core-js-stable/instance/concat\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ \"@babel/runtime-corejs3/core-js-stable/json/stringify\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ \"core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ \"core-js/modules/es.date.to-string.js\");\n/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/global */ \"./src/store/global.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction GlobalProvider(_ref) {\n  var children = _ref.children;\n\n  var _useGlobalReduxHook = (0,_store_global__WEBPACK_IMPORTED_MODULE_12__.useReduxHook)(),\n      _useGlobalReduxHook2 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useGlobalReduxHook, 2),\n      state = _useGlobalReduxHook2[0],\n      dispatch = _useGlobalReduxHook2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_store_global__WEBPACK_IMPORTED_MODULE_12__.Store.Provider, {\n    value: {\n      state: state,\n      dispatch: dispatch\n    }\n  }, children);\n}\n\nfunction render(req, Routes, ctx) {\n  var _context, _context2, _context3, _context4;\n\n  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_8__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(GlobalProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.StaticRouter, {\n    context: ctx,\n    location: req.path\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"div\", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_10__.renderRoutes)(Routes)))));\n  var cssStr = ctx.css.length ? ctx.css.join(\"\\n\") : \"\";\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_11__.Helmet.renderStatic();\n  return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = \"\\n        <html>\\n            <head>\\n                \".concat(helmet.title.toString(), \"\\n                \")).call(_context4, helmet.meta.toString(), \"\\n            </head>\\n            <style>\")).call(_context3, cssStr, \"</style>\\n            <body>\\n                <div id=\\\"root\\\">\")).call(_context2, content, \"</div>\\n                <script>\\n                        window.context = {\\n                            state: \")).call(_context, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_store_global__WEBPACK_IMPORTED_MODULE_12__.initStore), \"\\n                        }\\n                </script>\\n                <script src='/index.js'></script>\\n            </body>\\n        </html>\\n    \");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL3V0aWxzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc3NyLy4vc3JjL3NlcnZlci91dGlscy5qcz9iNGJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1jb25maWdcIjtcbmltcG9ydCB7SGVsbWV0fSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG5cbmltcG9ydCB7XG4gICAgU3RvcmUgYXMgR2xvYmFsU3RvcmUsXG4gICAgdXNlUmVkdXhIb29rIGFzIHVzZUdsb2JhbFJlZHV4SG9vayxcbiAgICBpbml0U3RvcmUsXG59IGZyb20gXCIuLi9zdG9yZS9nbG9iYWxcIjtcblxuZnVuY3Rpb24gR2xvYmFsUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VHbG9iYWxSZWR1eEhvb2soKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8R2xvYmFsU3RvcmUuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0dsb2JhbFN0b3JlLlByb3ZpZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIocmVxLCBSb3V0ZXMsIGN0eCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPEdsb2JhbFByb3ZpZGVyPlxuICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBjb250ZXh0PXtjdHh9IGxvY2F0aW9uPXtyZXEucGF0aH0+XG4gICAgICAgICAgICAgICAgPGRpdj57cmVuZGVyUm91dGVzKFJvdXRlcyl9PC9kaXY+XG4gICAgICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgICAgPC9HbG9iYWxQcm92aWRlcj5cbiAgICApO1xuXG4gICAgY29uc3QgY3NzU3RyID0gY3R4LmNzcy5sZW5ndGggPyBjdHguY3NzLmpvaW4oXCJcXG5cIikgOiBcIlwiO1xuICAgIGNvbnN0IGhlbG1ldCA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKVxuICAgIHJldHVybiBgXG4gICAgICAgIDxodG1sPlxuICAgICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICAgICAgJHtoZWxtZXQudGl0bGUudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAke2hlbG1ldC5tZXRhLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICA8c3R5bGU+JHtjc3NTdHJ9PC9zdHlsZT5cbiAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJyb290XCI+JHtjb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogJHtKU09OLnN0cmluZ2lmeShpbml0U3RvcmUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPScvaW5kZXguanMnPjwvc2NyaXB0PlxuICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+XG4gICAgYDtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBa0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/server/utils.js\n");

/***/ }),

/***/ "./src/store/global.js":
/*!*****************************!*\
  !*** ./src/store/global.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initStore\": () => (/* binding */ initStore),\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"useReduxHook\": () => (/* binding */ useReduxHook),\n/* harmony export */   \"useClientReduxHook\": () => (/* binding */ useClientReduxHook)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _redux_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./redux.helper */ \"./src/store/redux.helper.js\");\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default())) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default())) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }\n\n\n\nvar initStore = {\n  userInfo: {\n    name: 'woyao'\n  },\n  weatherMessage: ''\n};\nvar Store = (0,_redux_helper__WEBPACK_IMPORTED_MODULE_10__.createStore)(initStore);\nvar reducer = (0,_redux_helper__WEBPACK_IMPORTED_MODULE_10__.createReducer)(initStore, function () {\n  var _ref;\n\n  return _ref = {}, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_ref, \"UPDATE_USER_INFO\", function UPDATE_USER_INFO(state, action) {\n    return _objectSpread(_objectSpread({}, state), {}, {\n      userInfo: action.payload\n    });\n  }), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_ref, \"WEATHER_MESSAGE\", function WEATHER_MESSAGE(state, action) {\n    return _objectSpread(_objectSpread({}, state), {}, {\n      weatherMessage: action.payload\n    });\n  }), _ref;\n});\nvar useReduxHook = function useReduxHook() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_9__.useReducer)(reducer, (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(Store));\n}; // 其实这就是出水，从window.context中拿到state\n\nvar useClientReduxHook = function useClientReduxHook() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_9__.useReducer)(reducer, (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)((0,_redux_helper__WEBPACK_IMPORTED_MODULE_10__.createStore)(window.context.state)));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZ2xvYmFsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc3NyLy4vc3JjL3N0b3JlL2dsb2JhbC5qcz8zYWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1eC5oZWxwZXInXG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSB7XG4gICAgdXNlckluZm86IHtcbiAgICAgICAgbmFtZTogJ3dveWFvJ1xuICAgIH0sXG4gICAgd2VhdGhlck1lc3NhZ2U6ICcnLFxufVxuXG5leHBvcnQgY29uc3QgU3RvcmUgPSBjcmVhdGVTdG9yZShpbml0U3RvcmUpXG5cbmNvbnN0IHJlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKGluaXRTdG9yZSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFtcIlVQREFURV9VU0VSX0lORk9cIl0oc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1c2VySW5mbzogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1wiV0VBVEhFUl9NRVNTQUdFXCJdKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgd2VhdGhlck1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgdXNlUmVkdXhIb29rID0gKCkgPT4gdXNlUmVkdWNlcihyZWR1Y2VyLCB1c2VDb250ZXh0KFN0b3JlKSlcbi8vIOWFtuWunui/meWwseaYr+WHuuawtO+8jOS7jndpbmRvdy5jb250ZXh05Lit5ou/5Yiwc3RhdGVcbmV4cG9ydCBjb25zdCB1c2VDbGllbnRSZWR1eEhvb2sgPSAoKSA9PiB1c2VSZWR1Y2VyKHJlZHVjZXIsIHVzZUNvbnRleHQoY3JlYXRlU3RvcmUod2luZG93LmNvbnRleHQuc3RhdGUpKSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU9BO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBRkE7QUFJQTtBQUVBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/global.js\n");

/***/ }),

/***/ "./src/store/redux.helper.js":
/*!***********************************!*\
  !*** ./src/store/redux.helper.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createStore\": () => (/* binding */ createStore),\n/* harmony export */   \"createReducer\": () => (/* binding */ createReducer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction createStore() {\n  var initStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initStore);\n}\nfunction createReducer(initState, reducer) {\n  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n  return function (state, action) {\n    var type = action.type;\n    var handler = reducer(initState)[type];\n    var unHandled = !type || !handler;\n\n    if (unHandled) {\n      throw new Error('unhandled reducer action' + type);\n      return;\n    }\n\n    var nextState = unHandled ? initState : handler.call(null, state, action);\n    return nextState;\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdXguaGVscGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc3NyLy4vc3JjL3N0b3JlL3JlZHV4LmhlbHBlci5qcz9lNzQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICAgIGNyZWF0ZUNvbnRleHRcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmUoaW5pdFN0b3JlID0ge30pIHtcbiAgICByZXR1cm4gY3JlYXRlQ29udGV4dChpbml0U3RvcmUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWR1Y2VyKGluaXRTdGF0ZSwgcmVkdWNlciwgbmFtZSA9ICcnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgfSA9IGFjdGlvblxuICAgICAgICBjb25zdCBoYW5kbGVyID0gcmVkdWNlcihpbml0U3RhdGUpW3R5cGVdXG4gICAgICAgIGNvbnN0IHVuSGFuZGxlZCA9ICF0eXBlIHx8ICFoYW5kbGVyXG4gICAgICAgIGlmICh1bkhhbmRsZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5oYW5kbGVkIHJlZHVjZXIgYWN0aW9uJyArIHR5cGUpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSB1bkhhbmRsZWQgPyBpbml0U3RhdGUgOiBoYW5kbGVyLmNhbGwobnVsbCwgc3RhdGUsIGFjdGlvbilcbiAgICAgICAgcmV0dXJuIG5leHRTdGF0ZVxuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/redux.helper.js\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/containers/Home/index.css":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/containers/Home/index.css ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"./node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".index__wrapper___3Znbn {\\n    background: orange;\\n}\\n\\n.index__title___2Z_IW {\\n    color: red;\\n    font-size: 0.34667rem;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/containers/Home/index.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,qBAAe;AACnB\",\"sourcesContent\":[\".wrapper {\\n    background: orange;\\n}\\n\\n.title {\\n    color: red;\\n    font-size: 26px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"wrapper\": \"index__wrapper___3Znbn\",\n\t\"title\": \"index__title___2Z_IW\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vc3JjL2NvbnRhaW5lcnMvSG9tZS9pbmRleC5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9zc3IvLi9zcmMvY29udGFpbmVycy9Ib21lL2luZGV4LmNzcz8yMDNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZGV4X193cmFwcGVyX19fM1puYm4ge1xcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxufVxcblxcbi5pbmRleF9fdGl0bGVfX18yWl9JVyB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMC4zNDY2N3JlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwid3JhcHBlclwiOiBcImluZGV4X193cmFwcGVyX19fM1puYm5cIixcblx0XCJ0aXRsZVwiOiBcImluZGV4X190aXRsZV9fXzJaX0lXXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/containers/Home/index.css\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc3NyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcz8yNGZiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/runtime/api.js\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nmodule.exports = function cssWithMappingToString(item) {\n  var _item = _slicedToArray(item, 4),\n      content = _item[1],\n      cssMapping = _item[3];\n\n  if (typeof btoa === \"function\") {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || \"\").concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\"\\n\");\n  }\n\n  return [content].join(\"\\n\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0X3Nzci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzPzc1ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/runtime/cssWithMappingToString.js\n");

/***/ }),

/***/ "./src/containers/Home/index.css":
/*!***************************************!*\
  !*** ./src/containers/Home/index.css ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./index.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/containers/Home/index.css\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Ib21lL2luZGV4LmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0X3Nzci8uL3NyYy9jb250YWluZXJzL0hvbWUvaW5kZXguY3NzPzQyMTYiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL2luZGV4LmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL2luZGV4LmNzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FRQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/Home/index.css\n");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc3NyLy4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qcz80M2M3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qISBJc29tb3JwaGljIFN0eWxlIExvYWRlciB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL2tyaWFzb2Z0L2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGluc2VydGVkID0ge307XG5cbmZ1bmN0aW9uIGI2NEVuY29kZVVuaWNvZGUoc3RyKSB7XG4gIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uIChtYXRjaCwgcDEpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShcIjB4XCIgKyBwMSk7XG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ3NzKGlkcykge1xuICBpZHMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICBpZiAoLS1pbnNlcnRlZFtpZF0gPD0gMCkge1xuICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRDc3Moc3R5bGVzLCBfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZiRyZXBsYWNlID0gX3JlZi5yZXBsYWNlLFxuICAgICAgcmVwbGFjZSA9IF9yZWYkcmVwbGFjZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHJlcGxhY2UsXG4gICAgICBfcmVmJHByZXBlbmQgPSBfcmVmLnByZXBlbmQsXG4gICAgICBwcmVwZW5kID0gX3JlZiRwcmVwZW5kID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkcHJlcGVuZCxcbiAgICAgIF9yZWYkcHJlZml4ID0gX3JlZi5wcmVmaXgsXG4gICAgICBwcmVmaXggPSBfcmVmJHByZWZpeCA9PT0gdm9pZCAwID8gJ3MnIDogX3JlZiRwcmVmaXg7XG5cbiAgdmFyIGlkcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9zdHlsZXMkaSA9IHN0eWxlc1tpXSxcbiAgICAgICAgbW9kdWxlSWQgPSBfc3R5bGVzJGlbMF0sXG4gICAgICAgIGNzcyA9IF9zdHlsZXMkaVsxXSxcbiAgICAgICAgbWVkaWEgPSBfc3R5bGVzJGlbMl0sXG4gICAgICAgIHNvdXJjZU1hcCA9IF9zdHlsZXMkaVszXTtcbiAgICB2YXIgaWQgPSBcIlwiICsgcHJlZml4ICsgbW9kdWxlSWQgKyBcIi1cIiArIGk7XG4gICAgaWRzLnB1c2goaWQpO1xuXG4gICAgaWYgKGluc2VydGVkW2lkXSkge1xuICAgICAgaWYgKCFyZXBsYWNlKSB7XG4gICAgICAgIGluc2VydGVkW2lkXSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnNlcnRlZFtpZF0gPSAxO1xuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHZhciBjcmVhdGUgPSBmYWxzZTtcblxuICAgIGlmICghZWxlbSkge1xuICAgICAgY3JlYXRlID0gdHJ1ZTtcbiAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgIGVsZW0uaWQgPSBpZDtcblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY3NzVGV4dCA9IGNzcztcblxuICAgIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNzc1RleHQgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYjY0RW5jb2RlVW5pY29kZShKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSArIFwiKi9cIjtcbiAgICAgIGNzc1RleHQgKz0gXCJcXG4vKiMgc291cmNlVVJMPVwiICsgc291cmNlTWFwLmZpbGUgKyBcIj9cIiArIGlkICsgXCIqL1wiO1xuICAgIH1cblxuICAgIGlmICgndGV4dENvbnRlbnQnIGluIGVsZW0pIHtcbiAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBjc3NUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgfVxuXG4gICAgaWYgKGNyZWF0ZSkge1xuICAgICAgaWYgKHByZXBlbmQpIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoZWxlbSwgZG9jdW1lbnQuaGVhZC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbW92ZUNzcy5iaW5kKG51bGwsIGlkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0Q3NzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5zZXJ0Q3NzLmpzLm1hcFxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/isomorphic-style-loader/insertCss.js\n");

/***/ }),

/***/ "./node_modules/koa-bodyParser/index.js":
/*!**********************************************!*\
  !*** ./node_modules/koa-bodyParser/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/**!\n * koa-body-parser - index.js\n * Copyright(c) 2014\n * MIT Licensed\n *\n * Authors:\n *   dead_horse <dead_horse@qq.com> (http://deadhorse.me)\n *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)\n */\n\n\n\n/**\n * Module dependencies.\n */\n\nvar parse = __webpack_require__(/*! co-body */ \"co-body\");\nvar copy = __webpack_require__(/*! copy-to */ \"copy-to\");\n\n/**\n * @param [Object] opts\n *   - {String} jsonLimit default '1mb'\n *   - {String} formLimit default '56kb'\n *   - {string} encoding default 'utf-8'\n *   - {Object} extendTypes\n */\n\nmodule.exports = function (opts) {\n  opts = opts || {};\n  var detectJSON = opts.detectJSON;\n  var onerror = opts.onerror;\n\n  var enableTypes = opts.enableTypes || ['json', 'form'];\n  var enableForm = checkEnable(enableTypes, 'form');\n  var enableJson = checkEnable(enableTypes, 'json');\n  var enableText = checkEnable(enableTypes, 'text');\n  var enableXml = checkEnable(enableTypes, 'xml');\n\n  opts.detectJSON = undefined;\n  opts.onerror = undefined;\n\n  // force co-body return raw body\n  opts.returnRawBody = true;\n\n  // default json types\n  var jsonTypes = [\n    'application/json',\n    'application/json-patch+json',\n    'application/vnd.api+json',\n    'application/csp-report',\n  ];\n\n  // default form types\n  var formTypes = [\n    'application/x-www-form-urlencoded',\n  ];\n\n  // default text types\n  var textTypes = [\n    'text/plain',\n  ];\n\n  // default xml types\n  var xmlTypes = [\n    'text/xml',\n    'application/xml',\n  ];\n\n  var jsonOpts = formatOptions(opts, 'json');\n  var formOpts = formatOptions(opts, 'form');\n  var textOpts = formatOptions(opts, 'text');\n  var xmlOpts = formatOptions(opts, 'xml');\n\n  var extendTypes = opts.extendTypes || {};\n\n  extendType(jsonTypes, extendTypes.json);\n  extendType(formTypes, extendTypes.form);\n  extendType(textTypes, extendTypes.text);\n  extendType(xmlTypes, extendTypes.xml);\n\n  return async function bodyParser(ctx, next) {\n    if (ctx.request.body !== undefined) return await next();\n    if (ctx.disableBodyParser) return await next();\n    try {\n      const res = await parseBody(ctx);\n      ctx.request.body = 'parsed' in res ? res.parsed : {};\n      if (ctx.request.rawBody === undefined) ctx.request.rawBody = res.raw;\n    } catch (err) {\n      if (onerror) {\n        onerror(err, ctx);\n      } else {\n        throw err;\n      }\n    }\n    await next();\n  };\n\n  async function parseBody(ctx) {\n    if (enableJson && ((detectJSON && detectJSON(ctx)) || ctx.request.is(jsonTypes))) {\n      return await parse.json(ctx, jsonOpts);\n    }\n    if (enableForm && ctx.request.is(formTypes)) {\n      return await parse.form(ctx, formOpts);\n    }\n    if (enableText && ctx.request.is(textTypes)) {\n      return await parse.text(ctx, textOpts) || '';\n    }\n    if (enableXml && ctx.request.is(xmlTypes)) {\n      return await parse.text(ctx, xmlOpts) || '';\n    }\n    return {};\n  }\n};\n\nfunction formatOptions(opts, type) {\n  var res = {};\n  copy(opts).to(res);\n  res.limit = opts[type + 'Limit'];\n  return res;\n}\n\nfunction extendType(original, extend) {\n  if (extend) {\n    if (!Array.isArray(extend)) {\n      extend = [extend];\n    }\n    extend.forEach(function (extend) {\n      original.push(extend);\n    });\n  }\n}\n\nfunction checkEnable(types, type) {\n  return types.includes(type);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMva29hLWJvZHlQYXJzZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9zc3IvLi9ub2RlX21vZHVsZXMva29hLWJvZHlQYXJzZXIvaW5kZXguanM/ODE2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiohXG4gKiBrb2EtYm9keS1wYXJzZXIgLSBpbmRleC5qc1xuICogQ29weXJpZ2h0KGMpIDIwMTRcbiAqIE1JVCBMaWNlbnNlZFxuICpcbiAqIEF1dGhvcnM6XG4gKiAgIGRlYWRfaG9yc2UgPGRlYWRfaG9yc2VAcXEuY29tPiAoaHR0cDovL2RlYWRob3JzZS5tZSlcbiAqICAgZmVuZ21rMiA8bUBmZW5nbWsyLmNvbT4gKGh0dHA6Ly9mZW5nbWsyLmNvbSlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcGFyc2UgPSByZXF1aXJlKCdjby1ib2R5Jyk7XG52YXIgY29weSA9IHJlcXVpcmUoJ2NvcHktdG8nKTtcblxuLyoqXG4gKiBAcGFyYW0gW09iamVjdF0gb3B0c1xuICogICAtIHtTdHJpbmd9IGpzb25MaW1pdCBkZWZhdWx0ICcxbWInXG4gKiAgIC0ge1N0cmluZ30gZm9ybUxpbWl0IGRlZmF1bHQgJzU2a2InXG4gKiAgIC0ge3N0cmluZ30gZW5jb2RpbmcgZGVmYXVsdCAndXRmLTgnXG4gKiAgIC0ge09iamVjdH0gZXh0ZW5kVHlwZXNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICB2YXIgZGV0ZWN0SlNPTiA9IG9wdHMuZGV0ZWN0SlNPTjtcbiAgdmFyIG9uZXJyb3IgPSBvcHRzLm9uZXJyb3I7XG5cbiAgdmFyIGVuYWJsZVR5cGVzID0gb3B0cy5lbmFibGVUeXBlcyB8fCBbJ2pzb24nLCAnZm9ybSddO1xuICB2YXIgZW5hYmxlRm9ybSA9IGNoZWNrRW5hYmxlKGVuYWJsZVR5cGVzLCAnZm9ybScpO1xuICB2YXIgZW5hYmxlSnNvbiA9IGNoZWNrRW5hYmxlKGVuYWJsZVR5cGVzLCAnanNvbicpO1xuICB2YXIgZW5hYmxlVGV4dCA9IGNoZWNrRW5hYmxlKGVuYWJsZVR5cGVzLCAndGV4dCcpO1xuICB2YXIgZW5hYmxlWG1sID0gY2hlY2tFbmFibGUoZW5hYmxlVHlwZXMsICd4bWwnKTtcblxuICBvcHRzLmRldGVjdEpTT04gPSB1bmRlZmluZWQ7XG4gIG9wdHMub25lcnJvciA9IHVuZGVmaW5lZDtcblxuICAvLyBmb3JjZSBjby1ib2R5IHJldHVybiByYXcgYm9keVxuICBvcHRzLnJldHVyblJhd0JvZHkgPSB0cnVlO1xuXG4gIC8vIGRlZmF1bHQganNvbiB0eXBlc1xuICB2YXIganNvblR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnYXBwbGljYXRpb24vanNvbi1wYXRjaCtqc29uJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLmFwaStqc29uJyxcbiAgICAnYXBwbGljYXRpb24vY3NwLXJlcG9ydCcsXG4gIF07XG5cbiAgLy8gZGVmYXVsdCBmb3JtIHR5cGVzXG4gIHZhciBmb3JtVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gIF07XG5cbiAgLy8gZGVmYXVsdCB0ZXh0IHR5cGVzXG4gIHZhciB0ZXh0VHlwZXMgPSBbXG4gICAgJ3RleHQvcGxhaW4nLFxuICBdO1xuXG4gIC8vIGRlZmF1bHQgeG1sIHR5cGVzXG4gIHZhciB4bWxUeXBlcyA9IFtcbiAgICAndGV4dC94bWwnLFxuICAgICdhcHBsaWNhdGlvbi94bWwnLFxuICBdO1xuXG4gIHZhciBqc29uT3B0cyA9IGZvcm1hdE9wdGlvbnMob3B0cywgJ2pzb24nKTtcbiAgdmFyIGZvcm1PcHRzID0gZm9ybWF0T3B0aW9ucyhvcHRzLCAnZm9ybScpO1xuICB2YXIgdGV4dE9wdHMgPSBmb3JtYXRPcHRpb25zKG9wdHMsICd0ZXh0Jyk7XG4gIHZhciB4bWxPcHRzID0gZm9ybWF0T3B0aW9ucyhvcHRzLCAneG1sJyk7XG5cbiAgdmFyIGV4dGVuZFR5cGVzID0gb3B0cy5leHRlbmRUeXBlcyB8fCB7fTtcblxuICBleHRlbmRUeXBlKGpzb25UeXBlcywgZXh0ZW5kVHlwZXMuanNvbik7XG4gIGV4dGVuZFR5cGUoZm9ybVR5cGVzLCBleHRlbmRUeXBlcy5mb3JtKTtcbiAgZXh0ZW5kVHlwZSh0ZXh0VHlwZXMsIGV4dGVuZFR5cGVzLnRleHQpO1xuICBleHRlbmRUeXBlKHhtbFR5cGVzLCBleHRlbmRUeXBlcy54bWwpO1xuXG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBib2R5UGFyc2VyKGN0eCwgbmV4dCkge1xuICAgIGlmIChjdHgucmVxdWVzdC5ib2R5ICE9PSB1bmRlZmluZWQpIHJldHVybiBhd2FpdCBuZXh0KCk7XG4gICAgaWYgKGN0eC5kaXNhYmxlQm9keVBhcnNlcikgcmV0dXJuIGF3YWl0IG5leHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcGFyc2VCb2R5KGN0eCk7XG4gICAgICBjdHgucmVxdWVzdC5ib2R5ID0gJ3BhcnNlZCcgaW4gcmVzID8gcmVzLnBhcnNlZCA6IHt9O1xuICAgICAgaWYgKGN0eC5yZXF1ZXN0LnJhd0JvZHkgPT09IHVuZGVmaW5lZCkgY3R4LnJlcXVlc3QucmF3Qm9keSA9IHJlcy5yYXc7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAob25lcnJvcikge1xuICAgICAgICBvbmVycm9yKGVyciwgY3R4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgbmV4dCgpO1xuICB9O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHBhcnNlQm9keShjdHgpIHtcbiAgICBpZiAoZW5hYmxlSnNvbiAmJiAoKGRldGVjdEpTT04gJiYgZGV0ZWN0SlNPTihjdHgpKSB8fCBjdHgucmVxdWVzdC5pcyhqc29uVHlwZXMpKSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHBhcnNlLmpzb24oY3R4LCBqc29uT3B0cyk7XG4gICAgfVxuICAgIGlmIChlbmFibGVGb3JtICYmIGN0eC5yZXF1ZXN0LmlzKGZvcm1UeXBlcykpIHtcbiAgICAgIHJldHVybiBhd2FpdCBwYXJzZS5mb3JtKGN0eCwgZm9ybU9wdHMpO1xuICAgIH1cbiAgICBpZiAoZW5hYmxlVGV4dCAmJiBjdHgucmVxdWVzdC5pcyh0ZXh0VHlwZXMpKSB7XG4gICAgICByZXR1cm4gYXdhaXQgcGFyc2UudGV4dChjdHgsIHRleHRPcHRzKSB8fCAnJztcbiAgICB9XG4gICAgaWYgKGVuYWJsZVhtbCAmJiBjdHgucmVxdWVzdC5pcyh4bWxUeXBlcykpIHtcbiAgICAgIHJldHVybiBhd2FpdCBwYXJzZS50ZXh0KGN0eCwgeG1sT3B0cykgfHwgJyc7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0T3B0aW9ucyhvcHRzLCB0eXBlKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgY29weShvcHRzKS50byhyZXMpO1xuICByZXMubGltaXQgPSBvcHRzW3R5cGUgKyAnTGltaXQnXTtcbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gZXh0ZW5kVHlwZShvcmlnaW5hbCwgZXh0ZW5kKSB7XG4gIGlmIChleHRlbmQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0ZW5kKSkge1xuICAgICAgZXh0ZW5kID0gW2V4dGVuZF07XG4gICAgfVxuICAgIGV4dGVuZC5mb3JFYWNoKGZ1bmN0aW9uIChleHRlbmQpIHtcbiAgICAgIG9yaWdpbmFsLnB1c2goZXh0ZW5kKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0VuYWJsZSh0eXBlcywgdHlwZSkge1xuICByZXR1cm4gdHlwZXMuaW5jbHVkZXModHlwZSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/koa-bodyParser/index.js\n");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/concat":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/concat" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/concat");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/filter":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/filter" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/filter");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/for-each":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/for-each" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/json/stringify":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/json/stringify" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/json/stringify");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-properties":
/*!*********************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-properties" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-property":
/*!*******************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-property" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/define-property");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor":
/*!*******************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor" ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors":
/*!********************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors" ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols":
/*!****************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols" ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/keys":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/keys" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/object/keys");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/promise":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/promise" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/core-js-stable/promise");;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/asyncToGenerator":
/*!******************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/asyncToGenerator" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/helpers/asyncToGenerator");;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/defineProperty":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/defineProperty" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/helpers/defineProperty");;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/slicedToArray":
/*!***************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/slicedToArray" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/helpers/slicedToArray");;

/***/ }),

/***/ "@babel/runtime-corejs3/regenerator":
/*!*****************************************************!*\
  !*** external "@babel/runtime-corejs3/regenerator" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime-corejs3/regenerator");;

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@koa/cors");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "co-body":
/*!**************************!*\
  !*** external "co-body" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("co-body");;

/***/ }),

/***/ "copy-to":
/*!**************************!*\
  !*** external "copy-to" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("copy-to");;

/***/ }),

/***/ "core-js/modules/es.array.iterator.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.iterator.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.iterator.js");;

/***/ }),

/***/ "core-js/modules/es.array.join.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.join.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.join.js");;

/***/ }),

/***/ "core-js/modules/es.date.to-string.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.date.to-string.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.date.to-string.js");;

/***/ }),

/***/ "core-js/modules/es.function.name.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.function.name.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.function.name.js");;

/***/ }),

/***/ "core-js/modules/es.object.to-string.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.object.to-string.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.to-string.js");;

/***/ }),

/***/ "core-js/modules/es.promise.js":
/*!************************************************!*\
  !*** external "core-js/modules/es.promise.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.promise.js");;

/***/ }),

/***/ "core-js/modules/es.regexp.to-string.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.regexp.to-string.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.regexp.to-string.js");;

/***/ }),

/***/ "core-js/modules/es.string.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.string.iterator.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.string.iterator.js");;

/***/ }),

/***/ "core-js/modules/web.dom-collections.iterator.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.iterator.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/web.dom-collections.iterator.js");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");;

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");;

/***/ }),

/***/ "koa2-proxy-middleware":
/*!****************************************!*\
  !*** external "koa2-proxy-middleware" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa2-proxy-middleware");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-config");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;