webpackHotUpdate_N_E("pages/resultado",{

/***/ "./pages/resultado.jsx":
/*!*****************************!*\
  !*** ./pages/resultado.jsx ***!
  \*****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resultado; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_svg_mujersac_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/svg/mujersac.svg */ "./public/assets/svg/mujersac.svg");
/* harmony import */ var _public_assets_svg_mujersac_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_svg_mujersac_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_svg_chanchitoa_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/svg/chanchitoa.svg */ "./public/assets/svg/chanchitoa.svg");
/* harmony import */ var _public_assets_svg_chanchitoa_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_svg_chanchitoa_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_svg_chanchitob_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/svg/chanchitob.svg */ "./public/assets/svg/chanchitob.svg");
/* harmony import */ var _public_assets_svg_chanchitob_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_svg_chanchitob_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/postAction */ "./store/actions/postAction.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\juanc\\source\\repos\\Front-APV\\apv\\pages\\resultado.jsx";








var __N_SSP = true;
function Resultado(props) {
  var sueldoLiquido = props.data.sueldoLiquidoConsulta;
  var ahorroMensual = props.data.aporteApv;
  var recomendacionApv = props.data.recomendacionApv;
  recomendacionApv = 'B';
  var beneficio = 0;
  var total = 0;
  console.log(props.data.recomendacionApv);

  if (recomendacionApv === 'A') {
    beneficio = props.data.beneficioRegA;
    total = ahorroMensual + beneficio;
  } else if (recomendacionApv === 'B') {
    beneficio = props.data.beneficioRegB;
    total = props.data.sueldoLiquidoConApvregB;
  }

  var headers = {
    "Content-Type": "application/json"
  };

  function contactarme() {
    body_eventos.Evento_id = 2;
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('Eventos', body_eventos, {
      headers: headers
    }).then(function (response) {
      var data = response.data;

      if (data.resultado) {
        window.location.href = "/solicitud";
      }
    })["catch"](function (e) {
      console.log(e);
    });
  }

  var dudas_texto = "Nuestros ejecutivos pueden asesorarte en línea o vía teléfonica. Queremos ayudarte a resolver todas tus inquietudes o darte todas las opciones para tu traspaso.";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "resultado",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8 mx-auto desktop flex-column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: recomendacionApv === 'A' ? _public_assets_svg_chanchitoa_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _public_assets_svg_chanchitob_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
            alt: recomendacionApv === 'A' ? "regimen A" : "regimen B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: ["Te recomendamos el r\xE9gimen ", recomendacionApv]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "En  base a tu renta mensual y el monto del aporte quieres realizar el 15% de bonificaci\xF3n por parte del Estado es el que m\xE1s te conviene."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-6 mx-auto desktop d-flex",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Text, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Estos son los datos de tu simulaci\xF3n:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Table"], {
                  hover: true,
                  responsive: true,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                        children: ["Regimen ", recomendacionApv]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 37
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: "Sueldo l\xEDquido:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: sueldoLiquido
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: "Ahorro mensual:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: ahorroMensual
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: recomendacionApv === 'A' ? 'Bonificación fiscal:' : 'Descuento tributario:'
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: beneficio
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: recomendacionApv === 'A' ? 'Total ahorro:' : 'Nuevo sueldo líquido:'
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 41
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        children: total
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 41
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Link, {
                href: "#",
                children: "Ver detalles de mi simulaci\xF3n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-2 mx-auto desktop d-flex",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Header, {
              children: "R\xE9gimen A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Text, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "En este el Estado te entrega una bonificaci\xF3n de un 15% de lo que ahorras en el a\xF1o con un tope de 6 UTM anuales. Por ejemplo, si ahorras $100.000 recibir\xE1s $15.000 adicionales, por lo que tu cuenta tendra $115.000."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Link, {
                href: "#",
                children: "Saber M\xE1s"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row w-100 container-padre dudas",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: _public_assets_svg_mujersac_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
          alt: "Dudas"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "txtDesktop parrafo2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container-title",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "\xBFA\xFAn tienes dudas?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: dudas_texto
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              className: "btn blue btn-lg btn-block",
              onClick: contactarme,
              id: "ejecutivo",
              children: "Quiero que me contacten"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, this);
}
_c = Resultado;

var _c;

$RefreshReg$(_c, "Resultado");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdWx0YWRvLmpzeCJdLCJuYW1lcyI6WyJSZXN1bHRhZG8iLCJwcm9wcyIsInN1ZWxkb0xpcXVpZG8iLCJkYXRhIiwic3VlbGRvTGlxdWlkb0NvbnN1bHRhIiwiYWhvcnJvTWVuc3VhbCIsImFwb3J0ZUFwdiIsInJlY29tZW5kYWNpb25BcHYiLCJiZW5lZmljaW8iLCJ0b3RhbCIsImNvbnNvbGUiLCJsb2ciLCJiZW5lZmljaW9SZWdBIiwiYmVuZWZpY2lvUmVnQiIsInN1ZWxkb0xpcXVpZG9Db25BcHZyZWdCIiwiaGVhZGVycyIsImNvbnRhY3Rhcm1lIiwiYm9keV9ldmVudG9zIiwiRXZlbnRvX2lkIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwicmVzdWx0YWRvIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZSIsImR1ZGFzX3RleHRvIiwiQ2hhbmNoaXRvQSIsIkNoYW5jaGl0b0IiLCJtdWplclNBQyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxTQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUVyQyxNQUFNQyxhQUFhLEdBQUNELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxxQkFBL0I7QUFDQSxNQUFNQyxhQUFhLEdBQUNKLEtBQUssQ0FBQ0UsSUFBTixDQUFXRyxTQUEvQjtBQUNBLE1BQUlDLGdCQUFnQixHQUFHTixLQUFLLENBQUNFLElBQU4sQ0FBV0ksZ0JBQWxDO0FBQ0FBLGtCQUFnQixHQUFHLEdBQW5CO0FBQ0EsTUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlWLEtBQUssQ0FBQ0UsSUFBTixDQUFXSSxnQkFBdkI7O0FBRUEsTUFBSUEsZ0JBQWdCLEtBQUssR0FBekIsRUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZKLGVBNERJO0FBQUssaUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGdDQUNJO0FBQUssYUFBRyxFQUFFc0Isc0VBQVY7QUFBb0IsYUFBRyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxvQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUEsd0JBQUlIO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQ0ksa0JBQUksRUFBQyxRQURUO0FBRUksdUJBQVMsRUFBQywyQkFGZDtBQUdJLHFCQUFPLEVBQUVaLFdBSGI7QUFJSSxnQkFBRSxFQUFDLFdBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0ZIO0tBNUh1QmhCLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzdWx0YWRvLjRlYmYyNjVlY2VlZmNmNmMxZDExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG11amVyU0FDIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL3N2Zy9tdWplcnNhYy5zdmdcIlxyXG5pbXBvcnQgQ2hhbmNoaXRvQSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9zdmcvY2hhbmNoaXRvYS5zdmdcIjtcclxuaW1wb3J0IENoYW5jaGl0b0IgZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvc3ZnL2NoYW5jaGl0b2Iuc3ZnXCJcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2ZldGNocG9zdHN9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb25cIjtcclxuaW1wb3J0IHtDYXJkLCBDb2wsIFRhYmxlfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdGFkbyAocHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IHN1ZWxkb0xpcXVpZG89cHJvcHMuZGF0YS5zdWVsZG9MaXF1aWRvQ29uc3VsdGE7XHJcbiAgICBjb25zdCBhaG9ycm9NZW5zdWFsPXByb3BzLmRhdGEuYXBvcnRlQXB2XHJcbiAgICBsZXQgcmVjb21lbmRhY2lvbkFwdiA9IHByb3BzLmRhdGEucmVjb21lbmRhY2lvbkFwdjtcclxuICAgIHJlY29tZW5kYWNpb25BcHYgPSAnQidcclxuICAgIGxldCBiZW5lZmljaW8gPSAwO1xyXG4gICAgbGV0IHRvdGFsID0gMDtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmRhdGEucmVjb21lbmRhY2lvbkFwdik7XHJcblxyXG4gICAgaWYoIHJlY29tZW5kYWNpb25BcHYgPT09ICdBJykge1xyXG5cclxuICAgICAgICBiZW5lZmljaW8gPSBwcm9wcy5kYXRhLmJlbmVmaWNpb1JlZ0E7XHJcbiAgICAgICAgdG90YWwgPSBhaG9ycm9NZW5zdWFsICsgYmVuZWZpY2lvO1xyXG4gICAgfSBlbHNlIGlmKHJlY29tZW5kYWNpb25BcHYgPT09ICdCJykge1xyXG4gICAgICAgIGJlbmVmaWNpbyA9IHByb3BzLmRhdGEuYmVuZWZpY2lvUmVnQjtcclxuICAgICAgICB0b3RhbCA9IHByb3BzLmRhdGEuc3VlbGRvTGlxdWlkb0NvbkFwdnJlZ0I7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb250YWN0YXJtZSgpIHtcclxuICAgICAgICBib2R5X2V2ZW50b3MuRXZlbnRvX2lkID0gMjtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAucG9zdCgnRXZlbnRvcycsIGJvZHlfZXZlbnRvcywgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdGFkbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvc29saWNpdHVkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkdWRhc190ZXh0byA9XHJcbiAgICAgICAgXCJOdWVzdHJvcyBlamVjdXRpdm9zIHB1ZWRlbiBhc2Vzb3JhcnRlIGVuIGzDrW5lYSBvIHbDrWEgdGVsw6lmb25pY2EuIFF1ZXJlbW9zIGF5dWRhcnRlIGEgcmVzb2x2ZXIgdG9kYXMgdHVzIGlucXVpZXR1ZGVzIG8gZGFydGUgdG9kYXMgbGFzIG9wY2lvbmVzIHBhcmEgdHUgdHJhc3Bhc28uXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdGFkb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBteC1hdXRvIGRlc2t0b3AgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVjb21lbmRhY2lvbkFwdiA9PT0gJ0EnID8gQ2hhbmNoaXRvQSA6IENoYW5jaGl0b0IgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3JlY29tZW5kYWNpb25BcHYgPT09ICdBJyA/IFwicmVnaW1lbiBBXCIgIDogXCJyZWdpbWVuIEJcIiB9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+VGUgcmVjb21lbmRhbW9zIGVsIHLDqWdpbWVuIHtyZWNvbWVuZGFjaW9uQXB2fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RW4gIGJhc2UgYSB0dSByZW50YSBtZW5zdWFsIHkgZWwgbW9udG8gZGVsIGFwb3J0ZSBxdWllcmVzIHJlYWxpemFyIGVsIDE1JSBkZSBib25pZmljYWNpw7NuIHBvciBwYXJ0ZSBkZWwgRXN0YWRvIGVzIGVsIHF1ZSBtw6FzIHRlIGNvbnZpZW5lLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbXgtYXV0byBkZXNrdG9wIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Fc3RvcyBzb24gbG9zIGRhdG9zIGRlIHR1IHNpbXVsYWNpw7NuOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgaG92ZXIgcmVzcG9uc2l2ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZWdpbWVuIHtyZWNvbWVuZGFjaW9uQXB2fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlN1ZWxkbyBsw61xdWlkbzo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzdWVsZG9MaXF1aWRvfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BaG9ycm8gbWVuc3VhbDo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthaG9ycm9NZW5zdWFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVjb21lbmRhY2lvbkFwdiA9PT0gJ0EnID8gJ0JvbmlmaWNhY2nDs24gZmlzY2FsOicgOiAnRGVzY3VlbnRvIHRyaWJ1dGFyaW86J308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntiZW5lZmljaW99PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyZWNvbWVuZGFjaW9uQXB2ID09PSAnQScgPyAnVG90YWwgYWhvcnJvOicgOiAnTnVldm8gc3VlbGRvIGzDrXF1aWRvOid9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5MaW5rIGhyZWY9XCIjXCI+VmVyIGRldGFsbGVzIGRlIG1pIHNpbXVsYWNpw7NuPC9DYXJkLkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBteC1hdXRvIGRlc2t0b3AgZC1mbGV4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+UsOpZ2ltZW4gQTwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVuIGVzdGUgZWwgRXN0YWRvIHRlIGVudHJlZ2EgdW5hIGJvbmlmaWNhY2nDs24gZGUgdW4gMTUlIGRlIGxvIHF1ZSBhaG9ycmFzIGVuIGVsIGHDsW8gY29uIHVuIHRvcGUgZGUgNiBVVE0gYW51YWxlcy4gUG9yIGVqZW1wbG8sIHNpIGFob3JyYXMgJDEwMC4wMDAgcmVjaWJpcsOhcyAkMTUuMDAwIGFkaWNpb25hbGVzLCBwb3IgbG8gcXVlIHR1IGN1ZW50YSB0ZW5kcmEgJDExNS4wMDAuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5MaW5rIGhyZWY9XCIjXCI+U2FiZXIgTcOhczwvQ2FyZC5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctMTAwIGNvbnRhaW5lci1wYWRyZSBkdWRhc1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e211amVyU0FDfSBhbHQ9XCJEdWRhc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR4dERlc2t0b3AgcGFycmFmbzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+wr9Bw7puIHRpZW5lcyBkdWRhcz88L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZHVkYXNfdGV4dG99PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBibHVlIGJ0bi1sZyBidG4tYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29udGFjdGFybWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVqZWN1dGl2b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1aWVybyBxdWUgbWUgY29udGFjdGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgYmFzZVVybD0naHR0cHM6Ly9hcHZiYWNrZW5kbWFuYWdlci5henVyZXdlYnNpdGVzLm5ldC8nXHJcbiAgICBjb25zdCBhcGlUb2tlbiA9ICdBcHZTaW11bGFjaW9uL29idGVuZXJwb3JpZCc7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChgJHtiYXNlVXJsfSR7YXBpVG9rZW59P2lkPTdgKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9yZXN1bHRhZG8nLFxyXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHtkYXRhfSB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9