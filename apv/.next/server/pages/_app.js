module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\juanc\\source\\repos\\Front-APV\\apv\\components\\Footer.js";




const Footer = () => {
  const {
    0: datosPrevisionales,
    1: setDatosPrevisionales
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const obtenerDatosPrevisionales = async () => {
      const filejson = await fetch("./datosPrevisionales.json");
      const resultado = await filejson.json();
      setDatosPrevisionales({
        mes: resultado["mes"],
        anio: resultado["anio"],
        capital: resultado["capital"],
        cuprum: resultado["cuprum"],
        habitat: resultado["habitat"],
        modelo: resultado["modelo"],
        planvital: resultado["planvital"],
        provida: resultado["provida"],
        uno: resultado["uno"]
      });
    };

    obtenerDatosPrevisionales();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: "jsx-1580434951" + " " + "footer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1580434951",
      children: ".footer.jsx-1580434951 *.jsx-1580434951{font-size:10px;color:#ffffff;}.disclaimer.jsx-1580434951{font-size:10px;}.footer.jsx-1580434951 p.jsx-1580434951{padding:1.5rem;margin:0;}.footer.jsx-1580434951{background:#0c4c72;position:relative;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcanVhbmNcXHNvdXJjZVxccmVwb3NcXEZyb250LUFQVlxcYXB2XFxjb21wb25lbnRzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NpQixBQUdnQyxBQUlBLEFBSUEsQUFLSSxlQVpMLEFBSWxCLEFBSWEsSUFLUyxLQUp0QixLQVJBLFFBYWEsU0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXGp1YW5jXFxzb3VyY2VcXHJlcG9zXFxGcm9udC1BUFZcXGFwdlxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkYXRvc1ByZXZpc2lvbmFsZXMsIHNldERhdG9zUHJldmlzaW9uYWxlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyRGF0b3NQcmV2aXNpb25hbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlanNvbiA9IGF3YWl0IGZldGNoKFwiLi9kYXRvc1ByZXZpc2lvbmFsZXMuanNvblwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgZmlsZWpzb24uanNvbigpO1xyXG5cclxuICAgICAgICAgICAgc2V0RGF0b3NQcmV2aXNpb25hbGVzKCB7XHJcbiAgICAgICAgICAgICAgICBtZXM6IHJlc3VsdGFkb1tcIm1lc1wiXSxcclxuICAgICAgICAgICAgICAgIGFuaW86IHJlc3VsdGFkb1tcImFuaW9cIl0sXHJcbiAgICAgICAgICAgICAgICBjYXBpdGFsOiByZXN1bHRhZG9bXCJjYXBpdGFsXCJdLFxyXG4gICAgICAgICAgICAgICAgY3VwcnVtOiByZXN1bHRhZG9bXCJjdXBydW1cIl0sXHJcbiAgICAgICAgICAgICAgICBoYWJpdGF0OiByZXN1bHRhZG9bXCJoYWJpdGF0XCJdLFxyXG4gICAgICAgICAgICAgICAgbW9kZWxvOiByZXN1bHRhZG9bXCJtb2RlbG9cIl0sXHJcbiAgICAgICAgICAgICAgICBwbGFudml0YWw6IHJlc3VsdGFkb1tcInBsYW52aXRhbFwiXSxcclxuICAgICAgICAgICAgICAgIHByb3ZpZGE6IHJlc3VsdGFkb1tcInByb3ZpZGFcIl0sXHJcbiAgICAgICAgICAgICAgICB1bm86IHJlc3VsdGFkb1tcInVub1wiXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9idGVuZXJEYXRvc1ByZXZpc2lvbmFsZXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmZvb3RlciAqIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGlzY2xhaW1lciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyIHAge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGM0YzcyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNjbGFpbWVyIHRleHQtd2hpdGUgdGV4dC1qdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICBBRlAgTW9kZWxvIG5vIHNlIGhhY2UgY2FyZ28gZGUgbGEgdmVyYWNpZGFkIGRlIGxvcyBkYXRvcyBxdWUgaW5ncmVzZSBlbCB1c3VhcmlvIGFcclxuICAgICAgICAgICAgICAgIGVzdGEgY2FsY3VsYWRvcmEuIExhIHZhcmlhY2nDs24gZGUgc3VlbGRvIGzDrXF1aWRvIGFwcm94aW1hZGEgZGVzcHXDqXMgZGUgaW1wdWVzdG9zLFxyXG4gICAgICAgICAgICAgICAgc2luIGFzaWduYWNpb25lcyBkZSBjb2xhY2nDs24geS9vIG1vdmlsaXphY2nDs24uIFRhYmxhIGRlIGltcHVlc3RvcyBkZSBzZWd1bmRhXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yw61hIGFjdHVhbGl6YWRhIGEge2RhdG9zUHJldmlzaW9uYWxlcy5tZXN9IGRlIHtkYXRvc1ByZXZpc2lvbmFsZXMuYW5pb30uIOKAnExhIHJlbnRhYmlsaWRhZCBlcyB2YXJpYWJsZSwgcG9yIGxvIHF1ZVxyXG4gICAgICAgICAgICAgICAgbmFkYSBnYXJhbnRpemEgcXVlIGxhcyByZW50YWJpbGlkYWRlcyBwYXNhZGFzIHNlIHJlcGl0YW4gZW4gZWwgZnV0dXJvLiBJbmbDs3JtZXNlXHJcbiAgICAgICAgICAgICAgICBzb2JyZSBsYSByZW50YWJpbGlkYWQgZGUgc3UgRm9uZG8gZGUgUGVuc2lvbmVzLCBsYXMgY29taXNpb25lcyB5IGxhIGNhbGlkYWQgZGVcclxuICAgICAgICAgICAgICAgIHNlcnZpY2lvIGRlIGxhcyBBRlAgZW4gZWwgc2l0aW8gd2ViIGRlIGxhIFN1cGVyaW50ZW5kZW5jaWEgZGUgUGVuc2lvbmVzOlxyXG4gICAgICAgICAgICAgICAgd3d3LnNwZW5zaW9uZXMuY2wu4oCdIEVzdHJ1Y3R1cmEgZGUgY29taXNpb25lcyBwb3IgZGVww7NzaXRvcyBkZSBjb3RpemFjaW9uZXMgdmlnZW50ZXNcclxuICAgICAgICAgICAgICAgIGEge2RhdG9zUHJldmlzaW9uYWxlcy5tZXN9IGRlIHtkYXRvc1ByZXZpc2lvbmFsZXMuYW5pb30gLSBDYXBpdGFsOiB7ZGF0b3NQcmV2aXNpb25hbGVzLmNhcGl0YWx9JSxcclxuICAgICAgICAgICAgICAgIEN1cHJ1bToge2RhdG9zUHJldmlzaW9uYWxlcy5jdXBydW19JSwgSGFiaXRhdDoge2RhdG9zUHJldmlzaW9uYWxlcy5oYWJpdGF0fSUsXHJcbiAgICAgICAgICAgICAgICBNb2RlbG86IHtkYXRvc1ByZXZpc2lvbmFsZXMubW9kZWxvfSUsIFBsYW52aXRhbDoge2RhdG9zUHJldmlzaW9uYWxlcy5wbGFudml0YWx9JSxcclxuICAgICAgICAgICAgICAgIFByb3ZpZGE6IHtkYXRvc1ByZXZpc2lvbmFsZXMucHJvdmlkYX0lLCBVbm8ge2RhdG9zUHJldmlzaW9uYWxlcy51bm99JeKAnS4gUGFyYVxyXG4gICAgICAgICAgICAgICAgYWZpbGlhZG9zIGRlcGVuZGllbnRlcywgaW5kZXBlbmRpZW50ZXMgeSB2b2x1bnRhcmlvcy4gRnVlbnRlOiBTdXBlcmludGVuZGVuY2lhIGRlXHJcbiAgICAgICAgICAgICAgICBQZW5zaW9uZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\juanc\\\\source\\\\repos\\\\Front-APV\\\\apv\\\\components\\\\Footer.js */"
    }, void 0, false, void 0, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "jsx-1580434951" + " " + "disclaimer text-white text-justify",
      children: ["AFP Modelo no se hace cargo de la veracidad de los datos que ingrese el usuario a esta calculadora. La variaci\xF3n de sueldo l\xEDquido aproximada despu\xE9s de impuestos, sin asignaciones de colaci\xF3n y/o movilizaci\xF3n. Tabla de impuestos de segunda categor\xEDa actualizada a ", datosPrevisionales.mes, " de ", datosPrevisionales.anio, ". \u201CLa rentabilidad es variable, por lo que nada garantiza que las rentabilidades pasadas se repitan en el futuro. Inf\xF3rmese sobre la rentabilidad de su Fondo de Pensiones, las comisiones y la calidad de servicio de las AFP en el sitio web de la Superintendencia de Pensiones: www.spensiones.cl.\u201D Estructura de comisiones por dep\xF3sitos de cotizaciones vigentes a ", datosPrevisionales.mes, " de ", datosPrevisionales.anio, " - Capital: ", datosPrevisionales.capital, "%, Cuprum: ", datosPrevisionales.cuprum, "%, Habitat: ", datosPrevisionales.habitat, "%, Modelo: ", datosPrevisionales.modelo, "%, Planvital: ", datosPrevisionales.planvital, "%, Provida: ", datosPrevisionales.provida, "%, Uno ", datosPrevisionales.uno, "%\u201D. Para afiliados dependientes, independientes y voluntarios. Fuente: Superintendencia de Pensiones."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/img/logo.png */ "./public/assets/img/logo.png");
/* harmony import */ var _public_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\juanc\\source\\repos\\Front-APV\\apv\\components\\Header.js";




const Header = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
  className: "nav-fill w-100 navbar-dark bg-dark",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a.Brand, {
    className: "mx-auto",
    href: "/",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: _public_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "logo-afp-modelo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _PreguntasFrecuentes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreguntasFrecuentes */ "./components/PreguntasFrecuentes.js");

var _jsxFileName = "C:\\Users\\juanc\\source\\repos\\Front-APV\\apv\\components\\Layout.js";





class Layout extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PreguntasFrecuentes__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/PreguntasFrecuentes.js":
/*!*******************************************!*\
  !*** ./components/PreguntasFrecuentes.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\juanc\\source\\repos\\Front-APV\\apv\\components\\PreguntasFrecuentes.js";



const Preguntas = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-12 col-lg-10 block mx-auto justify-content-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Preguntas frecuentes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
            eventKey: "0",
            children: "\xBFQue es un APV?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
            eventKey: "0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Ahorro Previsional Voluntario o APV es un instrumento adicional complementario al ahorro que realizas en tu cuenta obligatoria de la AFP. Su objetivo es aumentar el monto de la pensi\xF3n, compensar per\xEDodos no cotizados."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Tienen incentivos al ahorro en los cuales puedes recibir una bonificaci\xF3n por parte del Estado, como tambi\xE9n rebajar de impuestos dependiendo del r\xE9gimen tributario que escojas."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
            eventKey: "1",
            children: "\xBFCu\xE1les son los reg\xEDmenes tributarios?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
            eventKey: "1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Puedes hacer tus aportes en APV en al menos uno de los reg\xEDmenes tributarios. En el r\xE9gimen \u201CA\u201D el Estado bonifica un 15% de lo que ahorras anualmente con un tope de 6 UTM (aproximadamente $306.000) y en el caso del r\xE9gimen \u201CB\u201D, lo que aportas descuenta de tu renta tributaria, lo que hace disminuir tu carga de impuestos."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Tienen incentivos al ahorro en los cuales puedes recibir una bonificaci\xF3n por parte del Estado, como tambi\xE9n rebajar de impuestos dependiendo del r\xE9gimen tributario que escojas."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
            eventKey: "2",
            children: "\xBFPuedo retirar o hacer giros del APV?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
            eventKey: "2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "S\xED, pero ten en cuenta que estos ahorros est\xE1n pensados en el largo plazo y con el objetivo de aumentar tu pensi\xF3n al momento de jubilar. Al hacer retiros de estos ahorros perder\xE1s el aporte estatal del 15% del r\xE9gimen A o pagar\xE1s impuestos de segunda categor\xEDa en la operaci\xF3n renta del a\xF1o siguiente."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
            eventKey: "3",
            children: "\xBFQue es un APV 2?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
            eventKey: "3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
              children: "Hello! I'm another body"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Preguntas);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Resultados_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Resultados.css */ "./styles/Resultados.css");
/* harmony import */ var _styles_Resultados_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Resultados_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/store */ "./store/store.js");

var _jsxFileName = "C:\\Users\\juanc\\source\\repos\\Front-APV\\apv\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_8__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }, this);
}

const makestore = () => _store_store__WEBPACK_IMPORTED_MODULE_8__["default"];

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7__["createWrapper"])(makestore);
/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(MyApp));

/***/ }),

/***/ "./public/assets/img/logo.png":
/*!************************************!*\
  !*** ./public/assets/img/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAAmCAYAAACvU/X+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjgxQjdGNkQ2NDQyMTFFODkzMTFGM0Y0RjQwNTc3MjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjgxQjdGNkU2NDQyMTFFODkzMTFGM0Y0RjQwNTc3MjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGODFCN0Y2QjY0NDIxMUU4OTMxMUYzRjRGNDA1NzcyOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGODFCN0Y2QzY0NDIxMUU4OTMxMUYzRjRGNDA1NzcyOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PijElhYAAA/vSURBVHja7F0HeFRV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"

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _postReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postReducer */ "./store/reducers/postReducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  post: _postReducer__WEBPACK_IMPORTED_MODULE_1__["postReducer"]
}));

/***/ }),

/***/ "./store/reducers/postReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/postReducer.js ***!
  \***************************************/
/*! exports provided: postReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postReducer", function() { return postReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: null
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload,
        loading: false,
        error: null
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");




const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: GET_POSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return GET_POSTS; });
const GET_POSTS = 'GET_POSTS';

/***/ }),

/***/ "./styles/Resultados.css":
/*!*******************************!*\
  !*** ./styles/Resultados.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QcmVndW50YXNGcmVjdWVudGVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWcvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvcG9zdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkZvb3RlciIsImRhdG9zUHJldmlzaW9uYWxlcyIsInNldERhdG9zUHJldmlzaW9uYWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwib2J0ZW5lckRhdG9zUHJldmlzaW9uYWxlcyIsImZpbGVqc29uIiwiZmV0Y2giLCJyZXN1bHRhZG8iLCJqc29uIiwibWVzIiwiYW5pbyIsImNhcGl0YWwiLCJjdXBydW0iLCJoYWJpdGF0IiwibW9kZWxvIiwicGxhbnZpdGFsIiwicHJvdmlkYSIsInVubyIsIkhlYWRlciIsImxvZ28iLCJMYXlvdXQiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsInByb3BzIiwiUHJlZ3VudGFzIiwiQ2FyZCIsIk15QXBwIiwicGFnZVByb3BzIiwic3RvcmUiLCJtYWtlc3RvcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsIndpdGhSZWR1eCIsImNvbWJpbmVSZWR1Y2VycyIsInBvc3QiLCJwb3N0UmVkdWNlciIsImluaXRpYWxTdGF0ZSIsInBvc3RzIiwibG9hZGluZyIsImVycm9yIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwibWlkZGxld2FyZSIsInRodW5rIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJHRVRfUE9TVFMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7O0FBR0EsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDakIsUUFBTTtBQUFBLE9BQUNDLGtCQUFEO0FBQUEsT0FBcUJDO0FBQXJCLE1BQThDQyxzREFBUSxDQUFDLEVBQUQsQ0FBNUQ7QUFJQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1osVUFBTUMseUJBQXlCLEdBQUcsWUFBWTtBQUMxQyxZQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDJCQUFELENBQTVCO0FBQ0EsWUFBTUMsU0FBUyxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUF4QjtBQUVBUCwyQkFBcUIsQ0FBRTtBQUNuQlEsV0FBRyxFQUFFRixTQUFTLENBQUMsS0FBRCxDQURLO0FBRW5CRyxZQUFJLEVBQUVILFNBQVMsQ0FBQyxNQUFELENBRkk7QUFHbkJJLGVBQU8sRUFBRUosU0FBUyxDQUFDLFNBQUQsQ0FIQztBQUluQkssY0FBTSxFQUFFTCxTQUFTLENBQUMsUUFBRCxDQUpFO0FBS25CTSxlQUFPLEVBQUVOLFNBQVMsQ0FBQyxTQUFELENBTEM7QUFNbkJPLGNBQU0sRUFBRVAsU0FBUyxDQUFDLFFBQUQsQ0FORTtBQU9uQlEsaUJBQVMsRUFBRVIsU0FBUyxDQUFDLFdBQUQsQ0FQRDtBQVFuQlMsZUFBTyxFQUFFVCxTQUFTLENBQUMsU0FBRCxDQVJDO0FBU25CVSxXQUFHLEVBQUVWLFNBQVMsQ0FBQyxLQUFEO0FBVEssT0FBRixDQUFyQjtBQVdILEtBZkQ7O0FBZ0JBSCw2QkFBeUI7QUFDNUIsR0FsQlEsRUFrQk4sRUFsQk0sQ0FBVDtBQW9CQSxzQkFDSTtBQUFBLHdDQUFrQixRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQXVCSTtBQUFBLDBDQUFhLG9DQUFiO0FBQUEsZ1RBSTZCSixrQkFBa0IsQ0FBQ1MsR0FKaEQsVUFJeURULGtCQUFrQixDQUFDVSxJQUo1RSxnWUFTT1Ysa0JBQWtCLENBQUNTLEdBVDFCLFVBU21DVCxrQkFBa0IsQ0FBQ1UsSUFUdEQsa0JBU3dFVixrQkFBa0IsQ0FBQ1csT0FUM0YsaUJBVWFYLGtCQUFrQixDQUFDWSxNQVZoQyxrQkFVb0RaLGtCQUFrQixDQUFDYSxPQVZ2RSxpQkFXYWIsa0JBQWtCLENBQUNjLE1BWGhDLG9CQVdzRGQsa0JBQWtCLENBQUNlLFNBWHpFLGtCQVljZixrQkFBa0IsQ0FBQ2dCLE9BWmpDLGFBWWlEaEIsa0JBQWtCLENBQUNpQixHQVpwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBMENILENBbkVEOztBQXFFZWxCLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNbUIsTUFBTSxHQUFHLG1CQUNYLHFFQUFDLDZEQUFEO0FBQVEsV0FBUyxFQUFDLG9DQUFsQjtBQUFBLHlCQUNJLHFFQUFDLDZEQUFELENBQVEsS0FBUjtBQUFjLGFBQVMsRUFBQyxTQUF4QjtBQUFrQyxRQUFJLEVBQUMsR0FBdkM7QUFBQSwyQkFDSTtBQUNJLFNBQUcsRUFBRUMsa0VBRFQ7QUFFSSxTQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjs7QUFXZUQscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQU1FLE1BQU4sU0FBcUJDLCtDQUFyQixDQUErQjtBQUMzQkMsUUFBTSxHQUFJO0FBQ04sVUFBTTtBQUFFQztBQUFGLFFBQWUsS0FBS0MsS0FBMUI7QUFDQSx3QkFDSTtBQUFBLDhCQUNJLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVLRCxRQUZMLGVBR0kscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBSUkscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBUUg7O0FBWDBCOztBQWNoQkgscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7O0FBRUEsTUFBTUssU0FBUyxHQUFHLE1BQU07QUFDcEIsc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUkscUVBQUMseURBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxvREFBRDtBQUFBLGtDQUNJLHFFQUFDLHlEQUFELENBQVcsTUFBWDtBQUFrQixjQUFFLEVBQUVDLG9EQUFJLENBQUNSLE1BQTNCO0FBQW1DLG9CQUFRLEVBQUMsR0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFJSSxxRUFBQyx5REFBRCxDQUFXLFFBQVg7QUFBb0Isb0JBQVEsRUFBQyxHQUE3QjtBQUFBLG1DQUNJLHFFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBLHNDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFnQkkscUVBQUMsb0RBQUQ7QUFBQSxrQ0FDSSxxRUFBQyx5REFBRCxDQUFXLE1BQVg7QUFBa0IsY0FBRSxFQUFFUSxvREFBSSxDQUFDUixNQUEzQjtBQUFtQyxvQkFBUSxFQUFDLEdBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUkscUVBQUMseURBQUQsQ0FBVyxRQUFYO0FBQW9CLG9CQUFRLEVBQUMsR0FBN0I7QUFBQSxtQ0FDSSxxRUFBQyxvREFBRCxDQUFNLElBQU47QUFBQSxzQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhCSixlQStCSSxxRUFBQyxvREFBRDtBQUFBLGtDQUNJLHFFQUFDLHlEQUFELENBQVcsTUFBWDtBQUFrQixjQUFFLEVBQUVRLG9EQUFJLENBQUNSLE1BQTNCO0FBQW1DLG9CQUFRLEVBQUMsR0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFJSSxxRUFBQyx5REFBRCxDQUFXLFFBQVg7QUFBb0Isb0JBQVEsRUFBQyxHQUE3QjtBQUFBLG1DQUNJLHFFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBLHFDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQS9CSixlQTJDSSxxRUFBQyxvREFBRDtBQUFBLGtDQUNJLHFFQUFDLHlEQUFELENBQVcsTUFBWDtBQUFrQixjQUFFLEVBQUVRLG9EQUFJLENBQUNSLE1BQTNCO0FBQW1DLG9CQUFRLEVBQUMsR0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFJSSxxRUFBQyx5REFBRCxDQUFXLFFBQVg7QUFBb0Isb0JBQVEsRUFBQyxHQUE3QjtBQUFBLG1DQUNJLHFFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTNDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBNERILENBN0REOztBQStEZU8sd0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNFLEtBQVQsQ0FBZTtBQUFFTixXQUFGO0FBQWFPO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDSSxxRUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRUMsb0RBQWpCO0FBQUEsMkJBQ0kscUVBQUMsMERBQUQ7QUFBQSw2QkFDSSxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUQ7O0FBRUQsTUFBTUUsU0FBUyxHQUFHLE1BQU1ELG9EQUF4Qjs7QUFDQSxNQUFNRSxPQUFPLEdBQUdDLHdFQUFhLENBQUNGLFNBQUQsQ0FBN0I7QUFFZUMsc0VBQU8sQ0FBQ0UsU0FBUixDQUFrQk4sS0FBbEIsQ0FBZixFOzs7Ozs7Ozs7OztBQ3ZCQSxpQ0FBaUMsb2dOOzs7Ozs7Ozs7Ozs7QUNBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWVPLDRIQUFlLENBQUM7QUFDM0JDLE1BQUksRUFBRUMsd0RBQVdBO0FBRFUsQ0FBRCxDQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVBLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsT0FBSyxFQUFFLEVBRFU7QUFFakJILE1BQUksRUFBQyxFQUZZO0FBR2pCSSxTQUFPLEVBQUUsS0FIUTtBQUlqQkMsT0FBSyxFQUFFO0FBSlUsQ0FBckI7QUFPTyxNQUFNSixXQUFXLEdBQUcsQ0FBQ0ssS0FBSyxHQUFHSixZQUFULEVBQXVCSyxNQUF2QixLQUFrQztBQUN6RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyxnREFBTDtBQUNJLDZDQUNPSCxLQURQO0FBRUlILGFBQUssRUFBRUksTUFBTSxDQUFDRyxPQUZsQjtBQUdJTixlQUFPLEVBQUUsS0FIYjtBQUlJQyxhQUFLLEVBQUU7QUFKWDs7QUFNSjtBQUNJLGFBQU9DLEtBQVA7QUFUUjtBQVdILENBWk0sQzs7Ozs7Ozs7Ozs7O0FDVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUosWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTVMsVUFBVSxHQUFHLENBQUNDLGtEQUFELENBQW5CO0FBRUEsTUFBTWxCLEtBQUssR0FBR21CLHlEQUFXLENBQUNDLGlEQUFELEVBQWNaLFlBQWQsRUFBNEJhLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdMLFVBQUosQ0FBaEIsQ0FBL0MsQ0FBekI7QUFFZWpCLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBTyxNQUFNdUIsU0FBUyxHQUFHLFdBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2RhdG9zUHJldmlzaW9uYWxlcywgc2V0RGF0b3NQcmV2aXNpb25hbGVzXSA9IHVzZVN0YXRlKHtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9idGVuZXJEYXRvc1ByZXZpc2lvbmFsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVqc29uID0gYXdhaXQgZmV0Y2goXCIuL2RhdG9zUHJldmlzaW9uYWxlcy5qc29uXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBmaWxlanNvbi5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBzZXREYXRvc1ByZXZpc2lvbmFsZXMoIHtcclxuICAgICAgICAgICAgICAgIG1lczogcmVzdWx0YWRvW1wibWVzXCJdLFxyXG4gICAgICAgICAgICAgICAgYW5pbzogcmVzdWx0YWRvW1wiYW5pb1wiXSxcclxuICAgICAgICAgICAgICAgIGNhcGl0YWw6IHJlc3VsdGFkb1tcImNhcGl0YWxcIl0sXHJcbiAgICAgICAgICAgICAgICBjdXBydW06IHJlc3VsdGFkb1tcImN1cHJ1bVwiXSxcclxuICAgICAgICAgICAgICAgIGhhYml0YXQ6IHJlc3VsdGFkb1tcImhhYml0YXRcIl0sXHJcbiAgICAgICAgICAgICAgICBtb2RlbG86IHJlc3VsdGFkb1tcIm1vZGVsb1wiXSxcclxuICAgICAgICAgICAgICAgIHBsYW52aXRhbDogcmVzdWx0YWRvW1wicGxhbnZpdGFsXCJdLFxyXG4gICAgICAgICAgICAgICAgcHJvdmlkYTogcmVzdWx0YWRvW1wicHJvdmlkYVwiXSxcclxuICAgICAgICAgICAgICAgIHVubzogcmVzdWx0YWRvW1widW5vXCJdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2J0ZW5lckRhdG9zUHJldmlzaW9uYWxlcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyICoge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kaXNjbGFpbWVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mb290ZXIgcCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwYzRjNzI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NsYWltZXIgdGV4dC13aGl0ZSB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICAgIEFGUCBNb2RlbG8gbm8gc2UgaGFjZSBjYXJnbyBkZSBsYSB2ZXJhY2lkYWQgZGUgbG9zIGRhdG9zIHF1ZSBpbmdyZXNlIGVsIHVzdWFyaW8gYVxyXG4gICAgICAgICAgICAgICAgZXN0YSBjYWxjdWxhZG9yYS4gTGEgdmFyaWFjacOzbiBkZSBzdWVsZG8gbMOtcXVpZG8gYXByb3hpbWFkYSBkZXNwdcOpcyBkZSBpbXB1ZXN0b3MsXHJcbiAgICAgICAgICAgICAgICBzaW4gYXNpZ25hY2lvbmVzIGRlIGNvbGFjacOzbiB5L28gbW92aWxpemFjacOzbi4gVGFibGEgZGUgaW1wdWVzdG9zIGRlIHNlZ3VuZGFcclxuICAgICAgICAgICAgICAgIGNhdGVnb3LDrWEgYWN0dWFsaXphZGEgYSB7ZGF0b3NQcmV2aXNpb25hbGVzLm1lc30gZGUge2RhdG9zUHJldmlzaW9uYWxlcy5hbmlvfS4g4oCcTGEgcmVudGFiaWxpZGFkIGVzIHZhcmlhYmxlLCBwb3IgbG8gcXVlXHJcbiAgICAgICAgICAgICAgICBuYWRhIGdhcmFudGl6YSBxdWUgbGFzIHJlbnRhYmlsaWRhZGVzIHBhc2FkYXMgc2UgcmVwaXRhbiBlbiBlbCBmdXR1cm8uIEluZsOzcm1lc2VcclxuICAgICAgICAgICAgICAgIHNvYnJlIGxhIHJlbnRhYmlsaWRhZCBkZSBzdSBGb25kbyBkZSBQZW5zaW9uZXMsIGxhcyBjb21pc2lvbmVzIHkgbGEgY2FsaWRhZCBkZVxyXG4gICAgICAgICAgICAgICAgc2VydmljaW8gZGUgbGFzIEFGUCBlbiBlbCBzaXRpbyB3ZWIgZGUgbGEgU3VwZXJpbnRlbmRlbmNpYSBkZSBQZW5zaW9uZXM6XHJcbiAgICAgICAgICAgICAgICB3d3cuc3BlbnNpb25lcy5jbC7igJ0gRXN0cnVjdHVyYSBkZSBjb21pc2lvbmVzIHBvciBkZXDDs3NpdG9zIGRlIGNvdGl6YWNpb25lcyB2aWdlbnRlc1xyXG4gICAgICAgICAgICAgICAgYSB7ZGF0b3NQcmV2aXNpb25hbGVzLm1lc30gZGUge2RhdG9zUHJldmlzaW9uYWxlcy5hbmlvfSAtIENhcGl0YWw6IHtkYXRvc1ByZXZpc2lvbmFsZXMuY2FwaXRhbH0lLFxyXG4gICAgICAgICAgICAgICAgQ3VwcnVtOiB7ZGF0b3NQcmV2aXNpb25hbGVzLmN1cHJ1bX0lLCBIYWJpdGF0OiB7ZGF0b3NQcmV2aXNpb25hbGVzLmhhYml0YXR9JSxcclxuICAgICAgICAgICAgICAgIE1vZGVsbzoge2RhdG9zUHJldmlzaW9uYWxlcy5tb2RlbG99JSwgUGxhbnZpdGFsOiB7ZGF0b3NQcmV2aXNpb25hbGVzLnBsYW52aXRhbH0lLFxyXG4gICAgICAgICAgICAgICAgUHJvdmlkYToge2RhdG9zUHJldmlzaW9uYWxlcy5wcm92aWRhfSUsIFVubyB7ZGF0b3NQcmV2aXNpb25hbGVzLnVub30l4oCdLiBQYXJhXHJcbiAgICAgICAgICAgICAgICBhZmlsaWFkb3MgZGVwZW5kaWVudGVzLCBpbmRlcGVuZGllbnRlcyB5IHZvbHVudGFyaW9zLiBGdWVudGU6IFN1cGVyaW50ZW5kZW5jaWEgZGVcclxuICAgICAgICAgICAgICAgIFBlbnNpb25lcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2ltZy9sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXYtZmlsbCB3LTEwMCBuYXZiYXItZGFyayBiZy1kYXJrXCI+XHJcbiAgICAgICAgPE5hdmJhci5CcmFuZCBjbGFzc05hbWU9XCJteC1hdXRvXCIgaHJlZj1cIi9cIiA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17bG9nb31cclxuICAgICAgICAgICAgICAgIGFsdD1cImxvZ28tYWZwLW1vZGVsb1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICA8L05hdmJhcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgUHJlZ3VudGFzIGZyb20gXCIuL1ByZWd1bnRhc0ZyZWN1ZW50ZXNcIjtcclxuXHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDxQcmVndW50YXMgLz5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBY2NvcmRpb24sIENhcmR9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmNvbnN0IFByZWd1bnRhcyA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTEwIGJsb2NrIG14LWF1dG8ganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PlByZWd1bnRhcyBmcmVjdWVudGVzPC9oND5cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDCv1F1ZSBlcyB1biBBUFY/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFob3JybyBQcmV2aXNpb25hbCBWb2x1bnRhcmlvIG8gQVBWIGVzIHVuIGluc3RydW1lbnRvIGFkaWNpb25hbCBjb21wbGVtZW50YXJpbyBhbCBhaG9ycm8gcXVlIHJlYWxpemFzIGVuIHR1IGN1ZW50YSBvYmxpZ2F0b3JpYSBkZSBsYSBBRlAuIFN1IG9iamV0aXZvIGVzIGF1bWVudGFyIGVsIG1vbnRvIGRlIGxhIHBlbnNpw7NuLCBjb21wZW5zYXIgcGVyw61vZG9zIG5vIGNvdGl6YWRvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpZW5lbiBpbmNlbnRpdm9zIGFsIGFob3JybyBlbiBsb3MgY3VhbGVzIHB1ZWRlcyByZWNpYmlyIHVuYSBib25pZmljYWNpw7NuIHBvciBwYXJ0ZSBkZWwgRXN0YWRvLCBjb21vIHRhbWJpw6luIHJlYmFqYXIgZGUgaW1wdWVzdG9zIGRlcGVuZGllbmRvIGRlbCByw6lnaW1lbiB0cmlidXRhcmlvIHF1ZSBlc2NvamFzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDCv0N1w6FsZXMgc29uIGxvcyByZWfDrW1lbmVzIHRyaWJ1dGFyaW9zP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQdWVkZXMgaGFjZXIgdHVzIGFwb3J0ZXMgZW4gQVBWIGVuIGFsIG1lbm9zIHVubyBkZSBsb3MgcmVnw61tZW5lcyB0cmlidXRhcmlvcy4gRW4gZWwgcsOpZ2ltZW4g4oCcQeKAnSBlbCBFc3RhZG8gYm9uaWZpY2EgdW4gMTUlIGRlIGxvIHF1ZSBhaG9ycmFzIGFudWFsbWVudGUgY29uIHVuIHRvcGUgZGUgNiBVVE0gKGFwcm94aW1hZGFtZW50ZSAkMzA2LjAwMCkgeSBlbiBlbCBjYXNvIGRlbCByw6lnaW1lbiDigJxC4oCdLCBsbyBxdWUgYXBvcnRhcyBkZXNjdWVudGEgZGUgdHUgcmVudGEgdHJpYnV0YXJpYSwgbG8gcXVlIGhhY2UgZGlzbWludWlyIHR1IGNhcmdhIGRlIGltcHVlc3Rvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpZW5lbiBpbmNlbnRpdm9zIGFsIGFob3JybyBlbiBsb3MgY3VhbGVzIHB1ZWRlcyByZWNpYmlyIHVuYSBib25pZmljYWNpw7NuIHBvciBwYXJ0ZSBkZWwgRXN0YWRvLCBjb21vIHRhbWJpw6luIHJlYmFqYXIgZGUgaW1wdWVzdG9zIGRlcGVuZGllbmRvIGRlbCByw6lnaW1lbiB0cmlidXRhcmlvIHF1ZSBlc2NvamFzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDCv1B1ZWRvIHJldGlyYXIgbyBoYWNlciBnaXJvcyBkZWwgQVBWP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTw60sIHBlcm8gdGVuIGVuIGN1ZW50YSBxdWUgZXN0b3MgYWhvcnJvcyBlc3TDoW4gcGVuc2Fkb3MgZW4gZWwgbGFyZ28gcGxhem8geSBjb24gZWwgb2JqZXRpdm8gZGUgYXVtZW50YXIgdHUgcGVuc2nDs24gYWwgbW9tZW50byBkZSBqdWJpbGFyLiBBbCBoYWNlciByZXRpcm9zIGRlIGVzdG9zIGFob3Jyb3MgcGVyZGVyw6FzIGVsIGFwb3J0ZSBlc3RhdGFsIGRlbCAxNSUgZGVsIHLDqWdpbWVuIEEgbyBwYWdhcsOhcyBpbXB1ZXN0b3MgZGUgc2VndW5kYSBjYXRlZ29yw61hIGVuIGxhIG9wZXJhY2nDs24gcmVudGEgZGVsIGHDsW8gc2lndWllbnRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDCv1F1ZSBlcyB1biBBUFYgMj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5IZWxsbyEgSSdtIGFub3RoZXIgYm9keTwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWd1bnRhczsiLCJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL1Jlc3VsdGFkb3MuY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvUHJvdmlkZXI+XG5cbiAgKVxufVxuXG5jb25zdCBtYWtlc3RvcmUgPSAoKSA9PiBzdG9yZTtcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VzdG9yZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU53QUFBQW1DQVlBQUFDdlUvWCtBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlKcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5pQW9WMmx1Wkc5M2N5a2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZSamd4UWpkR05rUTJORFF5TVRGRk9Ea3pNVEZHTTBZMFJqUXdOVGMzTWpraUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJqZ3hRamRHTmtVMk5EUXlNVEZGT0Rrek1URkdNMFkwUmpRd05UYzNNamtpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwR09ERkNOMFkyUWpZME5ESXhNVVU0T1RNeE1VWXpSalJHTkRBMU56Y3lPU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBHT0RGQ04wWTJRelkwTkRJeE1VVTRPVE14TVVZelJqUkdOREExTnpjeU9TSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QaWpFbGhZQUFBL3ZTVVJCVkhqYTdGMEhlRlJWRmo1SmhoSU5FQWd0Q2xJRkVXbDJSQUVGa1NxaWZoUkZ2eFVGRlhCWFpGMUVVVUJBY1VWRmRCY1JXYkdnb0NpS2lnRkRFU2xLTXdpQ3RLVXRJUUlKZ1lTRVZQWS9tVE53NTg1N2I5NmJOUGp5enZlZDd6RnZic3U1OTcrbjNUdUVuVGx6aGx4eXlhV1NvVEJYQlA0MFBwNmk4T2dNN2dodURiNGNYQjFjWG9vY0J4OEVid2V2QXY4d3RqUHRjQ1hua2dzNFowQnJnOGRUNEQ3Z2l4MVczd2llQ1o0TjhHVzUwblRKQlp3NTBCcmg4UWE0VnhFMGx3UWVCZjRJd0hOdGRaZEtCM0R3RXoyaU9mcUNXNEF2QVZjQy94Z1dGdGF4bElER2YvdHc4S3ZnQ2tYYy9ETHdBd0Jkb3J2RWltd052WURISU9WVmQ2eWRiY1hRRDdzSmRlVGpOdlRSdlNqYkR5OEJRWFhEWXlmNE0vQzk0S1lDdHRMVWFneXd1ZUJweFFBMnB0dkFDZWluclF1VklxTnE0SG9LbHkrbWZ1b29mVnhTMUkySEZ6UFlSdU94Q056Z1BESWhMOExqZTlHMnhVazF3RXZSWHljWEt5NFZPK0FBdGlmd2VNbmdxNzBDd3EvSkcrVXJTYkJGNERFZmZHc0pkUmtKL2diOVh1Y3VOWmVLRFhBQVczTThYdE5lcndmZkJKdTRJYmdIK0M3d21CTCtleWVDdTVWd253eTZCUUJkRFhlNXVWUmNHbTRjdUp6eStRZndMUURZMmxJMEpUdmc4VXdwZFg4cGVkTUdMcm1BSzNMdHhnR1Izc3FyaytEN0FiYXNVZ1FiUjBtbmwzUy8wUlV1cGF0amgxS0xXZzlSWkRucWpYSDBjSmRjMlNhUENXZ3E0dEdUdFpMc3pod2hPZ0pPQUM4TUVvNXRvMm0zT1NoL05BVGdjdGorSmpCcnBycmdLdUJVOEcvZ2I5SG0veHcwTnhEY3JOQzdFMFpVcDFJSHFsWHBHb3FxRUVzWk9jbDBKRDJCRHFUR1VaNlNkZk5nRyt2VTZGOTBmZDFIS1N3c291QmRkdDQwV3JSOXhMVHg4ZTh0Y3Bxamd5ekNaUzV1SjI4VUxScWNEdjVkWkxIRm9pNmJ0RjNCN2NHWGdYbEF5ZUJOYk9xaWJtSUljMU5YMnVRY0pwdkttV0ErYmJNRTdlMElvVDBlWXhkd0svSkdCaXNhRkx2ZW9iemFDVGVROWNqclpRMzRKNHp4VkJFcGwyaVJ3MVhnbXZ3Sy9GL3dqK0JmMEUvQVBJZHBEVEFBbnhUVEs4YWlyeVhncDlEZzd3YUQ2SS9IcDhxcklTZzMwK0VmMGwvTTBxWm1SY0JmZ0o5RjI3dHNhRGcraG5WRllZVGJPdlp4dXFYQktLb2FXUy9ndTVOWmh5bCs1MmphZXVRRHFnZ0ozdGRxSGRXSkRveVQ1Si9KcFdXN3h6NTJlNU9YWmppUVJUODhKcEQzaUprWnJRQ1BoQ3cyR2N3bEorS3JtOVRMQTg4RGowYmRBemJHd2d2clpYQVBNcy9ocnBSNVdXMmp2U2haYThOa0UzRkNiZEJIZ3NFbS9UQ1lZd1AxVE9wbGlIay9BZldURGNhMFQ2bTdHV1ZhRzVTcHpjc0svQmN5VDAvd21uc1I5ZWNhQWc2TjhFNjFRSFlGTzhRbTRpQTArSWsyR0I3RSs4cXJQaWp6bFlPZGp1djJzemtHM2xrSG8vMDVGbUM3RVkrUWZjZnkyQ3Y3WFBVdE5hMFIzQnBjdFAxSmFoazdFR0M3MXJUTWdkUTFCK3RWYlhlWkRWbVVGMW5jWjNPb3VlQy9ReFp2eWx3dUJOOW9zKzRKY0gvVWpiTVl6MUE4cG1yV2l4Vk5Bajl2dE1zcmdUVWVZOE1RcDhZUGNHaXZpbXdlZDlpc2Y1aGRIN1N4M2duZzhEMWJHWFBGNnJORHJCZ2VSRHNaWjAxSzhidVdrdmNVaUJHdzBnMDBIaWVNUDBMZEhEVDJ1VVdITlZHbXZzbDNwMUUzU2NZUUlZQy93NEhRR2FBZjg4NEcrdGlrekYyRk1TSDd0bHBPRGF0MXRGVytlN09wSm9zMUg2YWwxMTJ1VStYNnVydVRsOVpvSE5QcGFCQnplcDdGMkhrK29nemNnNm1pTlRqSDJOSkVvMldMM0ZUaXhib1FkWHRCam9zTnhqTUNqOWNkaXU4NWFmY0pnL2F1RksxY3ZZaE1PelpCT2JmcTVLQkJMRGdlZFR2aWIvN1Zaajk4cVAwN0I1c08wejBNVHRUdGluNnlmVUdUZnh1QWpiWEdEVHc1S0ZoZEFEZGNkZ1kxNkRMYkFsQk1iRDd0TldGVjNmN0RBR3cva2ZkSVdMVDRIdXd6UEEzK1V5djNIc1pnNXFPRm5IanUzR2lhSWRoeTh6THA4TW5ObEpsejNMUnVUdjdwQW8wM2VYa1l2YkdxTWgwNnNWRkE3T0g2andUcGVxZ0IyRmFKS1ZjUjg4RWJaRlh3UStBOVdybUpCbUNiSTlxdVBPcGVKTDdjcytTOStlQWpYa1NmUUk0MXRVWEc2bnFLMWg3N1F5TmtQaUxGeHg0TS9rTXJOMXpjQXgwY1gycGd5NUYxd2o3N3hXRUdoUGR2V3NqclZRT3dzVlhWV1RhbUNIRXBKb2hWNUtQSzRQa1kwOFUyd0ZaTjFtczVMU0E0U1h4UGxrTXRBZGhLcmZxdFVvN0MwRkFiY2FEUHVocWlBdWVZZE16MjYySnRVbWVqL0VNbUpxVVZGWnlsbERaM2svOHBmVTZhanpFeVNhUTg3MmlxdXY4S1pmdG81bVM0Mk95T2oyL0ZWcnFSSHJsdTlWbk54SFFxK3hqRjd4cERXLytjVVJBazRlREl6ZlVtVS91R293THFmLy9IU0ZwLzZKeFNxQjExTFEyNXdXdTk3RWxadGhnYXJxdUpmS3VJNDYyYUxKelRmTnBFRmxGaUdYUTJhSTduOGdIZDdGZnExaGZMUmpYcnBxTDhDS1hNS3MzTjRMbnZpekluRGRwak9YK2d1UVI4bGFreDcrNVNob1UxV2ZrK2hiem5JbjhKc3VEWmZQaWJibExpZldNQmVvVGkzN09yTTl2Q0QxMGlHczVINDFCK3ZKVkppZmNNK0w4cWRUZzR4RnBybjBrL1l3VGdxblhSbEZmVDQxclpWNng4SWpFQjcyUnpVSGw5SHpxb1dnaXJZSkFHdGkvUXozTm05citNb1lmNEhqN3FMZEV6bGVwU2lHY2xiMnM4eVE5c1dibHBOSHZqemJRNWFjYlppR1F1bHZPS3ZjL1E1a1IvY1dYbXBOQ3ZoLzB0c0tUMERaU2U1VlhNNWNJcjFyUG91cjhHdGpnenNJa3MyTHk4VzdST2dCOWxCamFweTR1bGx5d0dIejBzV29nWHpYVWEyRmliM21NRU5tbVAzWThId1J1ME9WQTNRbjI5RFFnR3RpRDBtQUsyQW0xbkFiWXFFblhYK3hzcUxvMFoySGx0cWxZSnIvMmVabUFUV2JDbE1VdDV4ZTAvR2k1aGR4OWxTeFRLa3REWWZqdytWR01MRXJZMm9ua1MwVEZpbjJCdU03RC9nNDJCdzluVHRRQlFGNjFZU0p0QVZlQ2hVVFgvMDErcjlyMUd5Um5HRWU4MSt5ZjVmZDZYc3JJQWpFYlJUSzhkWGk3U0N1dmE1eGZNd0tiSUlvMENUL1prYUpyRXJPNDJtU01mVlZLQ0xaME1BSHdxU0h1OGhzWnFyN3ZLd20yc1JRK1hvL3lTUXJwdzNiVWcyc3RxSUJEY2g3VWplSk5vMHpnRGM1M042R3N0K21CejlTTGw4eXlNZTdlTnNiMGdWb2FQdW5sa0IvTFJKcGs4TzhTbXhSRGxzMW5ZZXE2TktLVTZob01PY2puZmtmL3BFVDMwSHgzS0REYU91U2NnNnIwbHlUeHZmalJqZTRIMmlxcFFTN1RaVnNOeUViSVJuODVORGJNcGkxT2F0Z2cySHlyOTRvdU0yYXlyUmtPYlNsQkQxOFIyd2ZHRCtHVStmNmU1UE9zYmxDdHNzRVQxM2ZsV1NsZTg1NXhqZTZWZlcwYU5nZVlqazNIYmtnTXJCUUc2RDh4WGVMU0lWYXFEQWFab253dHo1YWFtUmJ0V3BPZFI5T2hSYWtpRGlXb2VFQUE1bVhYRXNzN3h6SDFuQVhmc2xQRzVnSEllN3lhWmxwMlVZbE1XeDRKcE55M01UWnBEVHlIV2pWU2lsK1IwYmpEbUhDeTBFMHBncEx3U3BMQ2FQeXZTNTViTk9qMUJ6c0dMVDIyMng5cHdyUVRtZUhOWloxRzJjaWh5OE8zSGFpVFpJeTk4QjJzYlVlbFFxQmRoOVoxSDE4N0hRMmswc3J4L3REbzdOejFvblp6OFRBVjhnZFlHcHhncVYvQmVyMG84c1g2dlJWT2VVcEIvam8zRlF1TC9CRFdsSkpCVHpRRDgrcTVWeDhFWUd4aUFOVU9DSkhiV3owa0IyQXFKSW03d0JYSWNnc1luaDFEVzZLbHdMWlI3T1lUVm1pNGMwaFBrQ2RwbmpwQVYrZ3huUlU5dzVaMmJmeTZHbEpZVm1OYUppV3hPbm9oSXlzaE9wczFKYjYyNFFPUzdVL3RzTjZkNU4vbWYwL1hOaXc3VzNwSnpEQVpnM2dGVnB6cVJqd3NLWU15T0dmSm15MWZBUm9JNStGTU41VG1xT0JtOFJnVWJSNzJ0Z2lhZ1hhSElRWkw3cXNtN21ZV3lRQ3YzTmdxV085OVhndVNIQmlxdjBuWGJlbXpuQW9kMWk5TzJNN09QK2Z0ZTRSV2duV3BhMXNuSzlXN2llZms1ZENvbk4rRDdoakU5dlU3eW9mYzVvTEx4QWdIY0l1M3phTWc5TnNpOFJFdEFUS1VGWW1vbWFUNHBwNVlldGpHT2x6VHo4VXZsM3d1MXN2dkltMU9Pa1N0Z3I0TlptK1VwWTR3RkR3VFBCTFBDV2FsK2IwQ2N6MUZ6di8xUXIxMFFPWVFiQkxLKzVKY3pOWlhKRFhFeU1PWThCaHRIMGI0bC8zRHdleVlCbjZWTzIwL0pDTFNhWXFQYTI2cWJrVzE4Z0tSbDdRRUZnWlhWKzUvT2tBazg3d255Wk5OWFRTdXdtUmdIK1Rjd21aZGFNaStxR2ZXcm1IRSttbVN3d1E4d1c3UmdMajlZZWMzQVVKUGc3NUEzdXE2YWNJUEovR0IrRjdIcVBpSnZxSjhEUkZPQ3lJSDcvS2ZtQW4xbEJqckpSLzZIL0E5eXNFODd5OE41SExtZHJaNzY0RHpiSHJ6blFmMHMwVElxaW9DRUhSZkt4S3lORkdIZUthWmttR1k2ampOcGp5T2tvNXdNWVArSmxZRU9SRXduMnBFOFAyamR0T3pBNEVyOTZNNVV1MUlMK2lUaExzcktvKytnZWJQcHdpSCttWXllU3VDQXRkSTJ6QkVmYnVEREI2eTFlSFB1SkF1OWlnYU9ZV3JnaHlQV3FMdFlXWXk4T1BtRXl4QUJ3WFlCeTlYU25oNXBuS0tHNVBuUU5lcHl6dXRGcFF3bnFMdmcvVHNTRE1rUllER3c5VU94SEptY1pVTU9iNHMydmxJK3M1bjdFL3JnczVKOHRKRlRaUndWWTJYQXVVSDl2T3d6R0d1cVJ3WTlEeFd2MEJZdEMyNjRzQkVWMTg4VU5KRmQwUzZ4TGNlbXd3bWpMN0c0Zng0Zlg3Q2oyYjR0a0hoeU5hV2RUcVJLRmMvOWhreVQ2ajBvYnFjTkRaZWptYVBZRnJvMm1VcmYvL0VVN1VuNWhtVG51MkJJRnZRQTJiaDhyZ2FiZDQ5VFlCSmJwMkVtbDQ3WkZWaE8zbXN0UHVvb2JFVXN3REVtSmllZm1GSVQ3RHpmVTRPMGQ0aThpZnc4RzNMSWhoellOMTFGNTZLdnZPbmZLMnhGMDFIL0hWSWRXem5hOGlqNW56VTczNG1kMlhicXRSUVRlc1Zwdzc4bCtkMnFvT2pJdXRTd3F2a3Zwb1dKZFp1V2xlVDMvcVo2RTJCR1RxRU5pVy82Z2dlTDZRSWp5SmQ5dVc0R1VVWlRSVS9lRXlRelRObzdKdUJ5a3ZSbUxYUXY2dWFhbUh4OXlmcThwVTRiWk8wY2NpQ0hIZUp5MlkwTDVJcy9POHozSWx4cjhGMkpxa3duWjNtY2tpWStaY0lKNzVZWTgxWWI1VCttd0lPMWxyVHU0TVNDKzJzcXRhMC8wclI4QlUrVStIREhOT0MrUzF2K25PMzcrUHlGK2dPeGtQTlNNY3RZbTVqbHp6Sms3VFRWNzRFWnRNZHRkQlh0WUdiUnNLell2dStDOG85WWhmRVppT0FuQlJDTHlmK0VoMG83UlRPM2xSTlRUdVhBOWE4UnkyK3ZCZEFXeVBvYzUyZFNXd1FtUEtMeU9TcFZnd0ovamlGT0JPYWpCT1V3NmMzSysyWEJMamVpVHFwaSt6T1lYalVvbGkzQkhkNWx0cUxOZkNlQ2t0ODBXZUdrVHA4cjUxS0xXUC9Ndzh4MU45RGh0TUFjNllCV2NYUjU5VHNvZnRmenRPYkFSS1BtdmdiWWdvYVRJUXRlZ0w2ck4rbjRPK2ZiR2F2Y24xTlBpeHhBM1dVMjY5Ylc1bktkMWExK2ljQnhxTjEzNDVzVHdYeVcwOG5wRnIzTnV0Sm1MZkg5T0JtL1ZyUmhLTzFWa1hYWVFOWXUrL25iZ3AxaVFyMUJpcjk2MU9wY3NaUnZKbEhSbW1JZHNzWmNiM1M1MVJKd0pSeDFWQUZuZU11MktBaWdtK3drZ0ZJOXNnazkxdmIzZ2lzMVB0cVR2SlRtSkFRZXpMKy9kWHpCVlo0dnRnNmliVWMrTlBJVnJnYmdqcEJMWlpyS0d1QWl4UEcyL1ZONVhScS9SYzFxK2QzNm9jKzM5Q3NJcktqRTEyK1NNemRRVHFEN3pidGVCNEJ0dmJ2Y1hDcFRnQlBRY2VpV2MwVWw4V093RExaZUFOdFNkNm01UkZRQy83ZkErVVpZL0JtaTRUNHI1cTdZMyt6a2dzMmxNZzA0QVIyZnIrU0xubnlEdURoK0w1TnpUSzNSejFwM2libFVwazFLQXhQVC9mL2hYQ3B6Z09QUXErOG5GdmFxdjZsUmdzQnovd2RVbDhvRzRNNG5jditQYjVlS2svNHZ3QURhRktKMEU1VnAzd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQge3Bvc3RSZWR1Y2VyfSBmcm9tIFwiLi9wb3N0UmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHBvc3Q6IHBvc3RSZWR1Y2VyXHJcbn0pOyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHBvc3RzOiBbXSxcclxuICAgIHBvc3Q6e30sXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGVycm9yOiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSB0eXBlcy5HRVRfUE9TVFM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuXHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJleHBvcnQgY29uc3QgR0VUX1BPU1RTID0gJ0dFVF9QT1NUUyc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9