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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/resultado.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/resultado.jsx":
/*!*****************************!*\
  !*** ./pages/resultado.jsx ***!
  \*****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resultado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_svg_mujersac_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/svg/mujersac.svg */ "./public/assets/svg/mujersac.svg");
/* harmony import */ var _public_assets_svg_mujersac_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_svg_mujersac_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_svg_chanchitoa_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/svg/chanchitoa.svg */ "./public/assets/svg/chanchitoa.svg");
/* harmony import */ var _public_assets_svg_chanchitoa_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_svg_chanchitoa_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/postAction */ "./store/actions/postAction.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\juanc\\source\\repos\\Front-APV\\apv\\pages\\resultado.jsx";







function Resultado(props) {
  const sueldoLiquido = props.data.sueldoLiquidoConsulta;
  const ahorroMensual = props.data.aporteApv;
  let beneficio = 0;
  let total = 0;
  console.log(props.data.recomendacionApv);

  if (props.data.recomendacionApv === 'A') {
    beneficio = props.data.beneficioRegA;
    total = ahorroMensual + beneficio;
  }

  const headers = {
    "Content-Type": "application/json"
  };

  function contactarme() {
    body_eventos.Evento_id = 2;
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('Eventos', body_eventos, {
      headers: headers
    }).then(response => {
      let data = response.data;

      if (data.resultado) {
        window.location.href = "/solicitud";
      }
    }).catch(e => {
      console.log(e);
    });
  }

  const dudas_texto = "Nuestros ejecutivos pueden asesorarte en línea o vía teléfonica. Queremos ayudarte a resolver todas tus inquietudes o darte todas las opciones para tu traspaso.";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "resultado",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8 mx-auto desktop flex-column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_assets_svg_chanchitoa_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
            alt: "regimen A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Te recomendamos el r\xE9gimen A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "En  base a tu renta mensual y el monto del aporte quieres realizar el 15% de bonificaci\xF3n por parte del Estado es el que m\xE1s te conviene."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-6 mx-auto desktop d-flex",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Estos son los datos de tu simulaci\xF3n:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Table"], {
                  hover: true,
                  responsive: true,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                        children: "Regimen A"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 68,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 37
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: "Sueldo l\xEDquido:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: sueldoLiquido
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: "Ahorro mensual:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: ahorroMensual
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: "Bonificaci\xF3n fiscal:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: beneficio
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: "Total ahorro:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 85,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: total
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 84,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Link, {
                href: "#",
                children: "Ver detalles de mi simulaci\xF3n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-2 mx-auto desktop d-flex",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Header, {
              children: "R\xE9gimen A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "En este el Estado te entrega una bonificaci\xF3n de un 15% de lo que ahorras en el a\xF1o con un tope de 6 UTM anuales. Por ejemplo, si ahorras $100.000 recibir\xE1s $15.000 adicionales, por lo que tu cuenta tendra $115.000."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Link, {
                href: "#",
                children: "Saber M\xE1s"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row w-100 container-padre dudas",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: _public_assets_svg_mujersac_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
          alt: "Dudas"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "txtDesktop parrafo2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container-title",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "\xBFA\xFAn tienes dudas?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: dudas_texto
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              className: "btn blue btn-lg btn-block",
              onClick: contactarme,
              id: "ejecutivo",
              children: "Quiero que me contacten"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, this);
}
async function getServerSideProps(context) {
  const baseUrl = 'https://apvbackendmanager.azurewebsites.net/';
  const apiToken = 'ApvSimulacion/obtenerporid';
  const response = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(`${baseUrl}${apiToken}?id=7`);
  const data = await response.data;
  console.log(data);

  if (!data) {
    return {
      redirect: {
        destination: '/resultado',
        permanent: false
      }
    };
  }

  return {
    props: {
      data
    }
  };
}

/***/ }),

/***/ "./public/assets/svg/chanchitoa.svg":
/*!******************************************!*\
  !*** ./public/assets/svg/chanchitoa.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/chanchitoa-a6e2222ec426a52407704e93cc094144.svg";

/***/ }),

/***/ "./public/assets/svg/mujersac.svg":
/*!****************************************!*\
  !*** ./public/assets/svg/mujersac.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mujersac-3d18626c60c9dbe99ab928e5fa2ec42d.svg";

/***/ }),

/***/ "./store/actions/postAction.js":
/*!*************************************!*\
  !*** ./store/actions/postAction.js ***!
  \*************************************/
/*! exports provided: fetchposts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchposts", function() { return fetchposts; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const fetchposts = () => async dispatch => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://apvbackendmanager.azurewebsites.net/ApvSimulacion/obtenerporid?id=7');
  console.log(res);
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS"],
    payload: res.data
  });
};

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVzdWx0YWRvLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3N2Zy9jaGFuY2hpdG9hLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3N2Zy9tdWplcnNhYy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3R5cGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlJlc3VsdGFkbyIsInByb3BzIiwic3VlbGRvTGlxdWlkbyIsImRhdGEiLCJzdWVsZG9MaXF1aWRvQ29uc3VsdGEiLCJhaG9ycm9NZW5zdWFsIiwiYXBvcnRlQXB2IiwiYmVuZWZpY2lvIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwicmVjb21lbmRhY2lvbkFwdiIsImJlbmVmaWNpb1JlZ0EiLCJoZWFkZXJzIiwiY29udGFjdGFybWUiLCJib2R5X2V2ZW50b3MiLCJFdmVudG9faWQiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXN1bHRhZG8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjYXRjaCIsImUiLCJkdWRhc190ZXh0byIsIkNoYW5jaGl0b0EiLCJtdWplclNBQyIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJiYXNlVXJsIiwiYXBpVG9rZW4iLCJnZXQiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwiZmV0Y2hwb3N0cyIsImRpc3BhdGNoIiwicmVzIiwidHlwZSIsInR5cGVzIiwicGF5bG9hZCIsIkdFVF9QT1NUUyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS2UsU0FBU0EsU0FBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFFckMsUUFBTUMsYUFBYSxHQUFDRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MscUJBQS9CO0FBQ0EsUUFBTUMsYUFBYSxHQUFDSixLQUFLLENBQUNFLElBQU4sQ0FBV0csU0FBL0I7QUFDQSxNQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsS0FBSyxDQUFDRSxJQUFOLENBQVdRLGdCQUF2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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNbUMsVUFBVSxHQUFHLE1BQU0sTUFBTUMsUUFBTixJQUFrQjtBQUM5QyxRQUFNQyxHQUFHLEdBQUcsTUFBTXZCLDRDQUFLLENBQUNpQixHQUFOLENBQVUsNkVBQVYsQ0FBbEI7QUFDQXpCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZOEIsR0FBWjtBQUNBRCxVQUFRLENBQUM7QUFDTEUsUUFBSSxFQUFFQyxnREFERDtBQUVMQyxXQUFPLEVBQUNILEdBQUcsQ0FBQ3JDO0FBRlAsR0FBRCxDQUFSO0FBSUgsQ0FQTSxDOzs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQU8sTUFBTXlDLFNBQVMsR0FBRyxXQUFsQixDOzs7Ozs7Ozs7OztBQ0FQLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Jlc3VsdGFkby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcmVzdWx0YWRvLmpzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbXVqZXJTQUMgZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvc3ZnL211amVyc2FjLnN2Z1wiXHJcbmltcG9ydCBDaGFuY2hpdG9BIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL3N2Zy9jaGFuY2hpdG9hLnN2Z1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7ZmV0Y2hwb3N0c30gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvcG9zdEFjdGlvblwiO1xyXG5pbXBvcnQge0NhcmQsIENvbCwgVGFibGV9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0YWRvIChwcm9wcyl7XHJcblxyXG4gICAgY29uc3Qgc3VlbGRvTGlxdWlkbz1wcm9wcy5kYXRhLnN1ZWxkb0xpcXVpZG9Db25zdWx0YTtcclxuICAgIGNvbnN0IGFob3Jyb01lbnN1YWw9cHJvcHMuZGF0YS5hcG9ydGVBcHZcclxuICAgIGxldCBiZW5lZmljaW8gPSAwO1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmRhdGEucmVjb21lbmRhY2lvbkFwdik7XHJcblxyXG4gICAgaWYocHJvcHMuZGF0YS5yZWNvbWVuZGFjaW9uQXB2ID09PSAnQScpIHtcclxuICAgICAgICBiZW5lZmljaW8gPSBwcm9wcy5kYXRhLmJlbmVmaWNpb1JlZ0E7XHJcbiAgICAgICAgdG90YWwgPSBhaG9ycm9NZW5zdWFsICsgYmVuZWZpY2lvO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY29udGFjdGFybWUoKSB7XHJcbiAgICAgICAgYm9keV9ldmVudG9zLkV2ZW50b19pZCA9IDI7XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLnBvc3QoJ0V2ZW50b3MnLCBib2R5X2V2ZW50b3MsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHRhZG8pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3NvbGljaXR1ZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZHVkYXNfdGV4dG8gPVxyXG4gICAgICAgIFwiTnVlc3Ryb3MgZWplY3V0aXZvcyBwdWVkZW4gYXNlc29yYXJ0ZSBlbiBsw61uZWEgbyB2w61hIHRlbMOpZm9uaWNhLiBRdWVyZW1vcyBheXVkYXJ0ZSBhIHJlc29sdmVyIHRvZGFzIHR1cyBpbnF1aWV0dWRlcyBvIGRhcnRlIHRvZGFzIGxhcyBvcGNpb25lcyBwYXJhIHR1IHRyYXNwYXNvLlwiO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRhZG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggbXgtYXV0byBkZXNrdG9wIGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0NoYW5jaGl0b0F9IGFsdD1cInJlZ2ltZW4gQVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlRlIHJlY29tZW5kYW1vcyBlbCByw6lnaW1lbiBBPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5FbiAgYmFzZSBhIHR1IHJlbnRhIG1lbnN1YWwgeSBlbCBtb250byBkZWwgYXBvcnRlIHF1aWVyZXMgcmVhbGl6YXIgZWwgMTUlIGRlIGJvbmlmaWNhY2nDs24gcG9yIHBhcnRlIGRlbCBFc3RhZG8gZXMgZWwgcXVlIG3DoXMgdGUgY29udmllbmUuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBteC1hdXRvIGRlc2t0b3AgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVzdG9zIHNvbiBsb3MgZGF0b3MgZGUgdHUgc2ltdWxhY2nDs246PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBob3ZlciByZXNwb25zaXZlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlZ2ltZW4gQTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlN1ZWxkbyBsw61xdWlkbzo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdWVsZG9MaXF1aWRvfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BaG9ycm8gbWVuc3VhbDo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthaG9ycm9NZW5zdWFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Cb25pZmljYWNpw7NuIGZpc2NhbDo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntiZW5lZmljaW99PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRvdGFsIGFob3Jybzo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0b3RhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkxpbmsgaHJlZj1cIiNcIj5WZXIgZGV0YWxsZXMgZGUgbWkgc2ltdWxhY2nDs248L0NhcmQuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIG14LWF1dG8gZGVza3RvcCBkLWZsZXhcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5Sw6lnaW1lbiBBPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW4gZXN0ZSBlbCBFc3RhZG8gdGUgZW50cmVnYSB1bmEgYm9uaWZpY2FjacOzbiBkZSB1biAxNSUgZGUgbG8gcXVlIGFob3JyYXMgZW4gZWwgYcOxbyBjb24gdW4gdG9wZSBkZSA2IFVUTSBhbnVhbGVzLiBQb3IgZWplbXBsbywgc2kgYWhvcnJhcyAkMTAwLjAwMCByZWNpYmlyw6FzICQxNS4wMDAgYWRpY2lvbmFsZXMsIHBvciBsbyBxdWUgdHUgY3VlbnRhIHRlbmRyYSAkMTE1LjAwMC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkxpbmsgaHJlZj1cIiNcIj5TYWJlciBNw6FzPC9DYXJkLkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdy0xMDAgY29udGFpbmVyLXBhZHJlIGR1ZGFzXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bXVqZXJTQUN9IGFsdD1cIkR1ZGFzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0RGVza3RvcCBwYXJyYWZvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT7Cv0HDum4gdGllbmVzIGR1ZGFzPzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkdWRhc190ZXh0b308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJsdWUgYnRuLWxnIGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb250YWN0YXJtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZWplY3V0aXZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVpZXJvIHF1ZSBtZSBjb250YWN0ZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCBiYXNlVXJsPSdodHRwczovL2FwdmJhY2tlbmRtYW5hZ2VyLmF6dXJld2Vic2l0ZXMubmV0LydcclxuICAgIGNvbnN0IGFwaVRva2VuID0gJ0FwdlNpbXVsYWNpb24vb2J0ZW5lcnBvcmlkJztcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KGAke2Jhc2VVcmx9JHthcGlUb2tlbn0/aWQ9N2ApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmRhdGFcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL3Jlc3VsdGFkbycsXHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9wczoge2RhdGF9IH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jaGFuY2hpdG9hLWE2ZTIyMjJlYzQyNmE1MjQwNzcwNGU5M2NjMDk0MTQ0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tdWplcnNhYy0zZDE4NjI2YzYwYzlkYmU5OWFiOTI4ZTVmYTJlYzQyZC5zdmdcIjsiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hwb3N0cyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcHZiYWNrZW5kbWFuYWdlci5henVyZXdlYnNpdGVzLm5ldC9BcHZTaW11bGFjaW9uL29idGVuZXJwb3JpZD9pZD03Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUUyxcclxuICAgICAgICBwYXlsb2FkOnJlcy5kYXRhXHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBjb25zdCBHRVRfUE9TVFMgPSAnR0VUX1BPU1RTJzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=