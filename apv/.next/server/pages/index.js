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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ApvForm.js":
/*!*******************************!*\
  !*** ./components/ApvForm.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TerminosModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TerminosModal */ "./components/TerminosModal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WizardComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WizardComponent */ "./components/WizardComponent.js");
/* harmony import */ var _utils_validationSchemaWizard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/validationSchemaWizard */ "./utils/validationSchemaWizard.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\juanc\\source\\repos\\Front-APV\\apv\\components\\ApvForm.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const APVForm = props => {
  const aacento = "\u00e1";
  const eacento = "\u00e9";
  const iacento = "\u00ed";
  const oacento = "\u00f3";
  const uacento = "\u00fa";
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const initialValues = {
    nombre: '',
    rut: '',
    correo: '',
    celular: '',
    sueldo: '',
    ahorro: '',
    terminosycondiciones: false
  };
  const {
    0: modalShow,
    1: setModalShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const handleClose = () => setModalShow(false);

  const handleShow = () => setModalShow(true);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_WizardComponent__WEBPACK_IMPORTED_MODULE_4__["Wizard"], {
          initialValues: initialValues,
          onSubmit: values => {
            const headers = {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${props.token}`
            };
            const url = 'https://apvbackendmanager.azurewebsites.net/ApvSimulacion/ingresarsimulacion';
            const body = {
              nombre: values.nombre,
              rut: values.rut,
              correo: values.correo,
              celular: values.celular,
              sueldo: values.sueldo,
              ahorro: values.ahorro
            };
            axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(url, body, {
              headers: headers
            }).then(response => {
              let data = response.data;

              if (data.idSimulacion) {
                router.push({
                  pathname: "/resultado",
                  as: "resultado",
                  query: {
                    id: data.idSimulacion
                  }
                });
              }
            }).catch(e => {
              console.log(e);
            });
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_WizardComponent__WEBPACK_IMPORTED_MODULE_4__["WizardStep"], {
            onSubmit: () => console.log('Step1 onSubmit'),
            validationSchema: _utils_validationSchemaWizard__WEBPACK_IMPORTED_MODULE_5__["Step1Schema"],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group input-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "sueldo",
                className: "control-label",
                children: "sueldo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
                name: "sueldo",
                children: ({
                  field,
                  form: {
                    touched,
                    errors
                  }
                }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({
                    type: "text"
                  }, field), {}, {
                    className: `form-control form-control-lg 
                                            ${touched.sueldo ? errors.sueldo ? "is-invalid" : "is-valid" : ""}`,
                    id: "sueldo",
                    "aria-describedby": "sueldoAyuda",
                    placeholder: "Sueldo L\xEDquido"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    id: "sueldoAyuda",
                    className: `form-text 
                                                    ${touched.sueldo && errors.sueldo ? "is-invalid" : ""}`,
                    children: touched.sueldo && errors.sueldo ? errors.sueldo : "El sueldo líquido que recibes luego de los descuentos legales."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 45
                  }, undefined)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group input-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "ahorro",
                className: "control-label",
                children: "Monto Ahorro"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
                name: "ahorro",
                children: ({
                  field,
                  form: {
                    touched,
                    errors
                  }
                }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({}, field), {}, {
                    type: "text",
                    className: `form-control form-control-lg ${touched.ahorro ? errors.ahorro ? "is-invalid" : "is-valid" : ""}`,
                    id: "ahorro",
                    "aria-describedby": "ahorroAyuda",
                    placeholder: "Ahorro Mensual"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 45
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    id: "ahorroAyuda",
                    className: `form-text ${touched.ahorro && errors.ahorro ? "is-invalid" : ""}`,
                    children: touched.ahorro && errors.ahorro ? errors.ahorro : "El monto en pesos que invertirías en tu APV."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 45
                  }, undefined)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_WizardComponent__WEBPACK_IMPORTED_MODULE_4__["WizardStep"], {
            onSubmit: () => console.log('Step2 onSubmit'),
            validationSchema: _utils_validationSchemaWizard__WEBPACK_IMPORTED_MODULE_5__["Step2Schema"],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group input-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "nombre",
                className: "control-label",
                children: "Nombre"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
                name: "nombre",
                children: ({
                  field,
                  form: {
                    touched,
                    errors
                  }
                }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({}, field), {}, {
                    type: "text",
                    className: `form-control form-control-lg ${touched.nombre ? errors.nombre ? "is-invalid" : "is-valid" : ""}`,
                    id: "nombre",
                    "aria-describedby": "nombreAyuda",
                    placeholder: "Nombre"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 45
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    id: "nombreAyuda",
                    className: `form-text ${touched.nombre && errors.nombre ? "is-invalid" : ""}`,
                    children: touched.nombre && errors.nombre ? errors.nombre : "Indicanos tu nombre y apellido."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 45
                  }, undefined)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group input-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "rut",
                className: "control-label",
                children: "RUT"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
                name: "rut",
                children: ({
                  field,
                  form: {
                    touched,
                    errors
                  }
                }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({}, field), {}, {
                    type: "text",
                    className: `form-control form-control-lg ${touched.rut ? errors.rut ? "is-invalid" : "is-valid" : ""}`,
                    id: "rut",
                    "aria-describedby": "rutAyuda",
                    placeholder: "RUT"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 45
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    id: "rutAyuda",
                    className: `form-text ${touched.rut && errors.rut ? "is-invalid" : ""}`,
                    children: touched.rut && errors.rut ? errors.rut : "Ej. 12345678-9."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 45
                  }, undefined)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_WizardComponent__WEBPACK_IMPORTED_MODULE_4__["WizardStep"], {
            onSubmit: () => console.log('Step3 onSubmit'),
            validationSchema: _utils_validationSchemaWizard__WEBPACK_IMPORTED_MODULE_5__["Step3Schema"],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group input-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "correo",
                className: "control-label",
                children: "Correo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
                name: "correo",
                children: ({
                  field,
                  form: {
                    touched,
                    errors
                  }
                }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({}, field), {}, {
                    type: "email",
                    className: `form-control form-control-lg ${touched.correo ? errors.correo ? 'is-invalid' : 'is-valid' : ''}`,
                    id: "correo",
                    "aria-describedby": "correoAyuda",
                    placeholder: "Correo"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 45
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    id: "correoAyuda",
                    className: `form-text ${touched.correo && errors.correo ? "is-invalid" : ""}`,
                    children: touched.correo && errors.correo ? errors.correo : "Ej. aumentatusueldo@afpmodelo.cl"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 45
                  }, undefined)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group input-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "celular",
                className: "control-label",
                children: "Celular"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
                name: "celular",
                children: ({
                  field,
                  form: {
                    touched,
                    errors
                  }
                }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({}, field), {}, {
                    type: "text",
                    className: `form-control form-control-lg ${touched.celular ? errors.celular ? "is-invalid" : "is-valid" : ""}`,
                    id: "celular",
                    "aria-describedby": "celularAyuda",
                    placeholder: "Celular"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 45
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    id: "celularAyuda",
                    className: `form-text ${touched.celular && errors.celular ? "is-invalid" : ""}`,
                    children: touched.celular && errors.celular ? errors.celular : "Ej. 9111223XX"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 289,
                    columnNumber: 45
                  }, undefined)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-check",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
                name: "terminosycondiciones",
                children: ({
                  field,
                  form: {
                    touched,
                    errors
                  }
                }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "form-check-label mt-auto",
                    htmlFor: "terminosycondiciones",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({}, field), {}, {
                      type: "checkbox",
                      className: "form-check-input"
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 312,
                      columnNumber: 49
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                      className: "terminosycondiciones",
                      children: ["Acepto las", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        onClick: handleShow,
                        children: ["condiciones del servicio y la pol", iacento, "tica de privacidad."]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 319,
                        columnNumber: 53
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 317,
                      columnNumber: 49
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 308,
                    columnNumber: 45
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    id: "terminosAyuda",
                    className: `form-text 
                            ${touched.terminosycondiciones && errors.terminosycondiciones ? 'is-invalid' : ''}`,
                    children: touched.terminosycondiciones && errors.terminosycondiciones ? errors.terminosycondiciones : ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 45
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TerminosModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    show: modalShow,
                    onHide: handleClose
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 338,
                    columnNumber: 45
                  }, undefined)]
                }, void 0, true)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (APVForm);

/***/ }),

/***/ "./components/TerminosModal.js":
/*!*************************************!*\
  !*** ./components/TerminosModal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TerminosModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\juanc\\source\\repos\\Front-APV\\apv\\components\\TerminosModal.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function TerminosModal(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], _objectSpread(_objectSpread({}, props), {}, {
      dialogClassName: "modal-50w",
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
        closeButton: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
          id: "contained-modal-title-vcenter",
          children: "T\xE9rminos y condiciones del servicio."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Al hacer click en el bot\xF3n \u201Ccalcular\u201D acepto enviar los datos solicitados en el formulario, para contacto posterior tanto a trav\xE9s de medio digitales, env\xEDo de correo electr\xF3nico y/o contacto telef\xF3nico con el objetivo de informar o asistirme en el proceso de suscripci\xF3n de servicios por parte de AFP Modelo."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Esta informaci\xF3n no ser\xE1 utilizada con un fin diferente al indicado ni compartida con otras empresas con otros fines diferentes al expresamente autorizado."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Footer, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: props.onHide,
          children: "Cerrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/WizardComponent.js":
/*!***************************************!*\
  !*** ./components/WizardComponent.js ***!
  \***************************************/
/*! exports provided: sleep, Wizard, WizardStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wizard", function() { return Wizard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStep", function() { return WizardStep; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_svg_joven_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/svg/joven.svg */ "./public/assets/svg/joven.svg");
/* harmony import */ var _public_assets_svg_joven_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_svg_joven_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_svg_joven2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/svg/joven2.svg */ "./public/assets/svg/joven2.svg");
/* harmony import */ var _public_assets_svg_joven2_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_svg_joven2_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_stepper_horizontal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-stepper-horizontal */ "react-stepper-horizontal");
/* harmony import */ var react_stepper_horizontal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_stepper_horizontal__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\juanc\\source\\repos\\Front-APV\\apv\\components\\WizardComponent.js";





const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const Wizard = ({
  children,
  initialValues,
  onSubmit
}) => {
  const {
    0: stepNumber,
    1: setStepNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const steps = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.toArray(children);
  const {
    0: snapshot,
    1: setSnapshot
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValues);
  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = values => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }

    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "row",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-sm-12 col-md-10 bloque form",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card formulario",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_stepper_horizontal__WEBPACK_IMPORTED_MODULE_5___default.a, {
            steps: [{
              title: ''
            }, {
              title: ''
            }, {
              title: ''
            }],
            activeStep: stepNumber,
            activeColor: "#72B500",
            completeColor: "#72B500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Conoce cu\xE1l r\xE9gimen te entrega m\xE1s beneficios:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
            initialValues: snapshot,
            onSubmit: handleSubmit,
            validationSchema: step.props.validationSchema,
            children: formik => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
              children: [step, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "d-flex justify-content-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col justify-content-center d-flex",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    type: "submit",
                    id: "calcular",
                    className: "btn btn-lg btn-block",
                    disabled: !(formik.isValid && formik.dirty),
                    children: stepNumber > 0 ? stepNumber > 1 ? 'Calcular' : 'Continuar' : 'Comenzar'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-lg-2 ",
      children: stepNumber > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: _public_assets_svg_joven2_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "joven modelo 2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 35
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: _public_assets_svg_joven_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "joven modelo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 78
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, undefined);
};
const WizardStep = ({
  children
}) => children;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_svg_ahorro_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/svg/ahorro.svg */ "./public/assets/svg/ahorro.svg");
/* harmony import */ var _public_assets_svg_ahorro_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_svg_ahorro_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_svg_ampolleta_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/assets/svg/ampolleta.svg */ "./public/assets/svg/ampolleta.svg");
/* harmony import */ var _public_assets_svg_ampolleta_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_svg_ampolleta_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ApvForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ApvForm */ "./components/ApvForm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\juanc\\source\\repos\\Front-APV\\apv\\pages\\index.js";







function Home(props) {
  const bearer = props.bearer;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Aumenta tu Sueldo | Solicitud de Contacto | AFP Modelo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Aumenta tu sueldo l\xEDquido, pagando una menor comisi\xF3n de AFP. Simula tu aumento de sueldo al cambiarte a AFP Modelo."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "robots",
        content: "noindex, follow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "background",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row w-100 container-padre calculadora",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-12 d-flex justify-content-center mobile",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container-title",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                children: "Conoce cu\xE1nto"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                children: "aumentar\xEDa tu sueldo,"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                children: "al cambiarte a"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                children: "AFP Modelo."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\xDAnete a la AFP con una de las comisiones m\xE1s bajas del mercado."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _public_assets_svg_ahorro_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
                alt: "cerditoAhorro"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-12  desktop flex-column",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _public_assets_svg_ampolleta_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
                alt: "pareja modelo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                children: "\xBFPor qu\xE9 abrir un APV?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "El APV te permite complementar tus ahorros y/o compensar per\xEDodos no cotizados, para mejorar tu pensi\xF3n. Dependiendo del r\xE9gimen tributario que elijas podr\xE1s recibir un aporte fiscal o rebajar lo ahorrado de tu renta tributable."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ApvForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
            token: bearer
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: "",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Existen dos r\xE9gimenes de APV"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-sm-12 col-lg-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
                children: "R\xE9gimen A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "En este el Estado te entrega una bonificaci\xF3n de un 15% de lo que ahorras en el a\xF1o con un tope de 6 UTM anuales. Por ejemplo, si ahorras $100.000 recibir\xE1s $15.000 adicionales, por lo que tu cuenta tendra $115.000."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Link, {
                  href: "#",
                  children: "Saber M\xE1s"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-sm-12 col-lg-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, {
                children: "R\xE9gimen B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Con este puedes rebajar tu ahorro de tu renta tributable. Esto lo puedes ver reflejado mes a mes en tu liquidaci\xF3n de sueldo o una vez al a\xF1o en la operaci\xF3n renta, seg\xFAn realices tu aporte."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Link, {
                  href: "#",
                  children: "Saber M\xE1s"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
async function getServerSideProps(context) {
  const baseUrl = 'https://apvbackendmanager.azurewebsites.net/';
  const apiToken = 'Token/GenerateToken';
  const response = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(`${baseUrl}${apiToken}`);
  const bearer = await response.data.key;

  if (!bearer) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {
      bearer
    }
  };
}

/***/ }),

/***/ "./public/assets/svg/ahorro.svg":
/*!**************************************!*\
  !*** ./public/assets/svg/ahorro.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ahorro-fddbbedf660d88873d4923c49a960153.svg";

/***/ }),

/***/ "./public/assets/svg/ampolleta.svg":
/*!*****************************************!*\
  !*** ./public/assets/svg/ampolleta.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ampolleta-52377eb9fbc76c31a408a6d3863d9c59.svg";

/***/ }),

/***/ "./public/assets/svg/joven.svg":
/*!*************************************!*\
  !*** ./public/assets/svg/joven.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/joven-abe1a69696b0b6d74eeb5407659fe9d1.svg";

/***/ }),

/***/ "./public/assets/svg/joven2.svg":
/*!**************************************!*\
  !*** ./public/assets/svg/joven2.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/joven2-311ac59cdd87795ceadc672fd5f2d8d0.svg";

/***/ }),

/***/ "./utils/validationRut.js":
/*!********************************!*\
  !*** ./utils/validationRut.js ***!
  \********************************/
/*! exports provided: rutValidador, calculateDV, formatearRut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rutValidador", function() { return rutValidador; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDV", function() { return calculateDV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatearRut", function() { return formatearRut; });
const rutValidador = rut => {
  if (!rut || rut.trim().length < 3) return false;
  const rutLimpio = rut.replace(/[^0-9kK-]/g, "");
  if (rutLimpio.length < 3) return false;
  const split = rutLimpio.split("-");
  if (split.length !== 2) return false;
  const num = parseInt(split[0], 10);
  const dgv = split[1];
  const dvCalc = calculateDV(num);
  return dvCalc === dgv;
};
const calculateDV = rut => {
  const cuerpo = `${rut}`; // Calcular Dígito Verificador

  let suma = 0;
  let multiplo = 2; // Para cada dígito del Cuerpo

  for (let i = 1; i <= cuerpo.length; i++) {
    // Obtener su Producto con el Múltiplo Correspondiente
    const index = multiplo * cuerpo.charAt(cuerpo.length - i); // Sumar al Contador General

    suma += index; // Consolidar Múltiplo dentro del rango [2,7]

    if (multiplo < 7) {
      multiplo += 1;
    } else {
      multiplo = 2;
    }
  } // Calcular Dígito Verificador en base al Módulo 11


  const dvEsperado = 11 - suma % 11;
  if (dvEsperado === 10) return "k";
  if (dvEsperado === 11) return "0";
  return `${dvEsperado}`;
};
const formatearRut = rut => {
  let formateado = rut;
  formateado = formateado.replace(/\./g, "").replace("-", "");

  if (formateado.match(/^(\d{2})(\d{3}){2}(\w{1})$/)) {
    formateado = formateado.replace(/^(\d{2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4");
  } else if (formateado.match(/^(\d)(\d{3}){2}(\w{0,1})$/)) {
    formateado = formateado.replace(/^(\d)(\d{3})(\d{3})(\w{0,1})$/, "$1.$2.$3-$4");
  } else if (formateado.match(/^(\d)(\d{3})(\d{0,2})$/)) {
    formateado = formateado.replace(/^(\d)(\d{3})(\d{0,2})$/, "$1.$2.$3");
  } else if (formateado.match(/^(\d)(\d{0,2})$/)) {
    formateado = formateado.replace(/^(\d)(\d{0,2})$/, "$1.$2");
  }

  return formateado;
};

/***/ }),

/***/ "./utils/validationSchemaWizard.js":
/*!*****************************************!*\
  !*** ./utils/validationSchemaWizard.js ***!
  \*****************************************/
/*! exports provided: Step1Schema, Step2Schema, Step3Schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Schema", function() { return Step1Schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Schema", function() { return Step2Schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Schema", function() { return Step3Schema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validationRut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validationRut */ "./utils/validationRut.js");


const aacento = "\u00e1";
const eacento = "\u00e9";
const iacento = "\u00ed";
const oacento = "\u00f3";
const uacento = "\u00fa";
const Step1Schema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  sueldo: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(/^[0-9]{6,8}$/, `Ingrese un sueldo l${iacento}quido entre $100.000 y $10.000.000.`).test('Sueldo-validacion', `Ingrese un sueldo l${iacento}quido entre $100.000 y $10.000.000.`, function (value) {
    return value >= 100000 && value <= 10000000;
  }).required('Por favor ingrese su sueldo líquido.'),
  ahorro: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(/^[0-9]+$/, `Ingrese el monto en pesos que desea ahorrar desde $1.000.`).test('Sueldo-validacion', `Ingrese un monto desde $1.000.`, function (value) {
    return value >= 1000;
  }).required('Por favor ingrese el monto que desea ahorrar desde $1.000.')
});
const Step2Schema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  nombre: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(/^[A-Za-z \u00F1\u00D1\u00E1\u00E9\u00ED\u00F3\u00FA\u00FC]{3,60}$/, `Ingresa tu nombre sin n${uacento}meros ni caracteres.`).required('Ingresa al menos un nombre y apellido.'),
  rut: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().required(`Por favor ingrese un RUT v${aacento}lido sin puntos y con gui${oacento}n.`).test('Rut-validacion', `Por favor ingrese un RUT v${aacento}lido sin puntos y con gui${oacento}n.`, function (value) {
    return Object(_validationRut__WEBPACK_IMPORTED_MODULE_1__["rutValidador"])(value);
  })
});
const Step3Schema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]({
  correo: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email(`Tu correo debe incluir un "@" y un dominio v${aacento}lido.`).required('Por favor ingrese su correo.'),
  celular: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().matches(/^[9]{1}[0-9]{8}$/, `Ingresa un n${uacento}mero de 9 d${iacento}gitos.`).required(`Por favor ingrese su n${uacento}mero de tel${eacento}fono.`),
  terminosycondiciones: yup__WEBPACK_IMPORTED_MODULE_0__["boolean"]().oneOf([true], `Debe aceptar las condiciones del servicio y la pol${iacento}tica de privacidad.`)
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-stepper-horizontal":
/*!*******************************************!*\
  !*** external "react-stepper-horizontal" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stepper-horizontal");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHZGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVybWlub3NNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dpemFyZENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3N2Zy9haG9ycm8uc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvc3ZnL2FtcG9sbGV0YS5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9zdmcvam92ZW4uc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvc3ZnL2pvdmVuMi5zdmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmFsaWRhdGlvblJ1dC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy92YWxpZGF0aW9uU2NoZW1hV2l6YXJkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0ZXBwZXItaG9yaXpvbnRhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInl1cFwiIl0sIm5hbWVzIjpbIkFQVkZvcm0iLCJwcm9wcyIsImFhY2VudG8iLCJlYWNlbnRvIiwiaWFjZW50byIsIm9hY2VudG8iLCJ1YWNlbnRvIiwicm91dGVyIiwidXNlUm91dGVyIiwiaW5pdGlhbFZhbHVlcyIsIm5vbWJyZSIsInJ1dCIsImNvcnJlbyIsImNlbHVsYXIiLCJzdWVsZG8iLCJhaG9ycm8iLCJ0ZXJtaW5vc3ljb25kaWNpb25lcyIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsInVzZVN0YXRlIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93IiwidmFsdWVzIiwiaGVhZGVycyIsInRva2VuIiwidXJsIiwiYm9keSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJpZFNpbXVsYWNpb24iLCJwdXNoIiwicGF0aG5hbWUiLCJhcyIsInF1ZXJ5IiwiaWQiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIiwiU3RlcDFTY2hlbWEiLCJmaWVsZCIsImZvcm0iLCJ0b3VjaGVkIiwiZXJyb3JzIiwiU3RlcDJTY2hlbWEiLCJTdGVwM1NjaGVtYSIsIlRlcm1pbm9zTW9kYWwiLCJvbkhpZGUiLCJzbGVlcCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiV2l6YXJkIiwiY2hpbGRyZW4iLCJvblN1Ym1pdCIsInN0ZXBOdW1iZXIiLCJzZXRTdGVwTnVtYmVyIiwic3RlcHMiLCJSZWFjdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsInNuYXBzaG90Iiwic2V0U25hcHNob3QiLCJzdGVwIiwidG90YWxTdGVwcyIsImxlbmd0aCIsImlzTGFzdFN0ZXAiLCJuZXh0IiwiTWF0aCIsIm1pbiIsImhhbmRsZVN1Ym1pdCIsImJhZyIsInNldFRvdWNoZWQiLCJ0aXRsZSIsInZhbGlkYXRpb25TY2hlbWEiLCJmb3JtaWsiLCJpc1ZhbGlkIiwiZGlydHkiLCJqb3ZlbjIiLCJqb3ZlbiIsIldpemFyZFN0ZXAiLCJIb21lIiwiYmVhcmVyIiwiYW1wb2xsZXRhIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImJhc2VVcmwiLCJhcGlUb2tlbiIsImdldCIsImtleSIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJydXRWYWxpZGFkb3IiLCJ0cmltIiwicnV0TGltcGlvIiwicmVwbGFjZSIsInNwbGl0IiwibnVtIiwicGFyc2VJbnQiLCJkZ3YiLCJkdkNhbGMiLCJjYWxjdWxhdGVEViIsImN1ZXJwbyIsInN1bWEiLCJtdWx0aXBsbyIsImkiLCJpbmRleCIsImNoYXJBdCIsImR2RXNwZXJhZG8iLCJmb3JtYXRlYXJSdXQiLCJmb3JtYXRlYWRvIiwibWF0Y2giLCJZdXAiLCJtYXRjaGVzIiwidGVzdCIsInZhbHVlIiwicmVxdWlyZWQiLCJlbWFpbCIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBSUMsS0FBRCxJQUFXO0FBRXZCLFFB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Ozs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBUZXJtaW5vc01vZGFsIGZyb20gXCIuL1Rlcm1pbm9zTW9kYWxcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7RmllbGR9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHtXaXphcmQsIFdpemFyZFN0ZXB9IGZyb20gXCIuL1dpemFyZENvbXBvbmVudFwiO1xyXG5pbXBvcnQge1N0ZXAxU2NoZW1hLCBTdGVwMlNjaGVtYSwgU3RlcDNTY2hlbWF9IGZyb20gXCIuLi91dGlscy92YWxpZGF0aW9uU2NoZW1hV2l6YXJkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20nbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgQVBWRm9ybSA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGFhY2VudG8gPSBcIlxcdTAwZTFcIjtcclxuICAgIGNvbnN0IGVhY2VudG8gPSBcIlxcdTAwZTlcIjtcclxuICAgIGNvbnN0IGlhY2VudG8gPSBcIlxcdTAwZWRcIjtcclxuICAgIGNvbnN0IG9hY2VudG8gPSBcIlxcdTAwZjNcIjtcclxuICAgIGNvbnN0IHVhY2VudG8gPSBcIlxcdTAwZmFcIjtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgICAgIG5vbWJyZTogJycsXHJcbiAgICAgICAgcnV0OiAnJyxcclxuICAgICAgICBjb3JyZW86ICcnLFxyXG4gICAgICAgIGNlbHVsYXI6ICcnLFxyXG4gICAgICAgIHN1ZWxkbzogJycsXHJcbiAgICAgICAgYWhvcnJvOiAnJyxcclxuICAgICAgICB0ZXJtaW5vc3ljb25kaWNpb25lczogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0TW9kYWxTaG93KGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdpemFyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtwcm9wcy50b2tlbn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwdmJhY2tlbmRtYW5hZ2VyLmF6dXJld2Vic2l0ZXMubmV0L0FwdlNpbXVsYWNpb24vaW5ncmVzYXJzaW11bGFjaW9uJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZTogdmFsdWVzLm5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydXQ6IHZhbHVlcy5ydXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVvOiB2YWx1ZXMuY29ycmVvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbHVsYXI6IHZhbHVlcy5jZWx1bGFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1ZWxkbzogdmFsdWVzLnN1ZWxkbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhaG9ycm86IHZhbHVlcy5haG9ycm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9zdCh1cmwsIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuaWRTaW11bGFjaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3Jlc3VsdGFkb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzOiBcInJlc3VsdGFkb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLmlkU2ltdWxhY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8V2l6YXJkU3RlcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eygpID0+IGNvbnNvbGUubG9nKCdTdGVwMSBvblN1Ym1pdCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17U3RlcDFTY2hlbWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzdWVsZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiY29udHJvbC1sYWJlbFwifT5zdWVsZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwic3VlbGRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogeyB0b3VjaGVkLCBlcnJvcnMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0b3VjaGVkLnN1ZWxkbyA/IChlcnJvcnMuc3VlbGRvID8gXCJpcy1pbnZhbGlkXCIgOiBcImlzLXZhbGlkXCIpIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3VlbGRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic3VlbGRvQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3VlbGRvIEzDrXF1aWRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3VlbGRvQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLXRleHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RvdWNoZWQuc3VlbGRvICYmIGVycm9ycy5zdWVsZG8gPyBcImlzLWludmFsaWRcIiA6IFwiXCIgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZC5zdWVsZG8gJiYgZXJyb3JzLnN1ZWxkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvcnMuc3VlbGRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiRWwgc3VlbGRvIGzDrXF1aWRvIHF1ZSByZWNpYmVzIGx1ZWdvIGRlIGxvcyBkZXNjdWVudG9zIGxlZ2FsZXMuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJhaG9ycm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vbnRvIEFob3Jyb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJhaG9ycm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiB7IHRvdWNoZWQsIGVycm9ycyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLmFob3JybyA/IChlcnJvcnMuYWhvcnJvID8gXCJpcy1pbnZhbGlkXCIgOiBcImlzLXZhbGlkXCIpIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFob3Jyb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhaG9ycm9BeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWhvcnJvIE1lbnN1YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWhvcnJvQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLXRleHQgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQuYWhvcnJvICYmIGVycm9ycy5haG9ycm8gPyBcImlzLWludmFsaWRcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLmFob3JybyAmJiBlcnJvcnMuYWhvcnJvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9ycy5haG9ycm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJFbCBtb250byBlbiBwZXNvcyBxdWUgaW52ZXJ0aXLDrWFzIGVuIHR1IEFQVi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1dpemFyZFN0ZXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaXphcmRTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gY29uc29sZS5sb2coJ1N0ZXAyIG9uU3VibWl0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtTdGVwMlNjaGVtYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IHsgdG91Y2hlZCwgZXJyb3JzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQubm9tYnJlID8gKGVycm9ycy5ub21icmUgPyBcImlzLWludmFsaWRcIiA6IFwiaXMtdmFsaWRcIiApIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJub21icmVBeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZUF5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS10ZXh0ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLm5vbWJyZSAmJiBlcnJvcnMubm9tYnJlID8gXCJpcy1pbnZhbGlkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdWNoZWQubm9tYnJlICYmIGVycm9ycy5ub21icmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3JzLm5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkluZGljYW5vcyB0dSBub21icmUgeSBhcGVsbGlkby5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJ1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUlVUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInJ1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IHsgdG91Y2hlZCwgZXJyb3JzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQucnV0ID8gKGVycm9ycy5ydXQgPyBcImlzLWludmFsaWRcIiA6IFwiaXMtdmFsaWRcIikgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicnV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInJ1dEF5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSVVRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicnV0QXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLXRleHQgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQucnV0ICYmIGVycm9ycy5ydXQgPyBcImlzLWludmFsaWRcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLnJ1dCAmJiBlcnJvcnMucnV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9ycy5ydXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJFai4gMTIzNDU2NzgtOS5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1dpemFyZFN0ZXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaXphcmRTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gY29uc29sZS5sb2coJ1N0ZXAzIG9uU3VibWl0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtTdGVwM1NjaGVtYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ycmVvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImNvcnJlb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IHsgdG91Y2hlZCwgZXJyb3JzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkLmNvcnJlbyA/IChlcnJvcnMuY29ycmVvID8gJ2lzLWludmFsaWQnIDogJ2lzLXZhbGlkJykgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY29ycmVvQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb3JyZW9BeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tdGV4dCAke3RvdWNoZWQuY29ycmVvICYmIGVycm9ycy5jb3JyZW8gPyBcImlzLWludmFsaWRcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLmNvcnJlbyAmJiBlcnJvcnMuY29ycmVvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9ycy5jb3JyZW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJFai4gYXVtZW50YXR1c3VlbGRvQGFmcG1vZGVsby5jbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY2VsdWxhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VsdWxhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJjZWx1bGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogeyB0b3VjaGVkLCBlcnJvcnMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZyAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZC5jZWx1bGFyID8gKGVycm9ycy5jZWx1bGFyID8gXCJpcy1pbnZhbGlkXCIgOiBcImlzLXZhbGlkXCIpIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNlbHVsYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY2VsdWxhckF5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZWx1bGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNlbHVsYXJBeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tdGV4dCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZC5jZWx1bGFyICYmIGVycm9ycy5jZWx1bGFyID8gXCJpcy1pbnZhbGlkXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZC5jZWx1bGFyICYmIGVycm9ycy5jZWx1bGFyID8gZXJyb3JzLmNlbHVsYXIgOiBcIkVqLiA5MTExMjIzWFhcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwidGVybWlub3N5Y29uZGljaW9uZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiB7IHRvdWNoZWQsIGVycm9ycyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXQtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0ZXJtaW5vc3ljb25kaWNpb25lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRlcm1pbm9zeWNvbmRpY2lvbmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2VwdG8gbGFze1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpY2lvbmVzIGRlbCBzZXJ2aWNpbyB5IGxhIHBvbHtpYWNlbnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2EgZGUgcHJpdmFjaWRhZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlcm1pbm9zQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGZvcm0tdGV4dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IHRvdWNoZWQudGVybWlub3N5Y29uZGljaW9uZXMgJiYgZXJyb3JzLnRlcm1pbm9zeWNvbmRpY2lvbmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaXMtaW52YWxpZCc6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZC50ZXJtaW5vc3ljb25kaWNpb25lcyAmJiBlcnJvcnMudGVybWlub3N5Y29uZGljaW9uZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3JzLnRlcm1pbm9zeWNvbmRpY2lvbmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVybWlub3NNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9XaXphcmRTdGVwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvV2l6YXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFQVkZvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVybWlub3NNb2RhbChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgIGRpYWxvZ0NsYXNzTmFtZT1cIm1vZGFsLTUwd1wiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFTDqXJtaW5vcyB5IGNvbmRpY2lvbmVzIGRlbCBzZXJ2aWNpby5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWwgaGFjZXIgY2xpY2sgZW4gZWwgYm90w7NuIOKAnGNhbGN1bGFy4oCdIGFjZXB0byBlbnZpYXIgbG9zIGRhdG9zIHNvbGljaXRhZG9zIGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsIGZvcm11bGFyaW8sIHBhcmEgY29udGFjdG8gcG9zdGVyaW9yIHRhbnRvIGEgdHJhdsOpcyBkZSBtZWRpbyBkaWdpdGFsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudsOtbyBkZSBjb3JyZW8gZWxlY3Ryw7NuaWNvIHkvbyBjb250YWN0byB0ZWxlZsOzbmljbyBjb24gZWwgb2JqZXRpdm8gZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3JtYXIgbyBhc2lzdGlybWUgZW4gZWwgcHJvY2VzbyBkZSBzdXNjcmlwY2nDs24gZGUgc2VydmljaW9zIHBvciBwYXJ0ZSBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBRlAgTW9kZWxvLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRXN0YSBpbmZvcm1hY2nDs24gbm8gc2Vyw6EgdXRpbGl6YWRhIGNvbiB1biBmaW4gZGlmZXJlbnRlIGFsIGluZGljYWRvIG5pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcnRpZGEgY29uIG90cmFzIGVtcHJlc2FzIGNvbiBvdHJvcyBmaW5lcyBkaWZlcmVudGVzIGFsIGV4cHJlc2FtZW50ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcml6YWRvLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkhpZGV9PkNlcnJhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtGb3JtLCBGb3JtaWt9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IGpvdmVuIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL3N2Zy9qb3Zlbi5zdmdcIjtcclxuaW1wb3J0IGpvdmVuMiBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9zdmcvam92ZW4yLnN2Z1wiXHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ3JlYWN0LXN0ZXBwZXItaG9yaXpvbnRhbCc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2xlZXAgPSBtcyA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgV2l6YXJkID0gKHsgY2hpbGRyZW4sIGluaXRpYWxWYWx1ZXMsIG9uU3VibWl0IH0pID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgW3N0ZXBOdW1iZXIsIHNldFN0ZXBOdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBzdGVwcyA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xyXG4gICAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWVzKTtcclxuXHJcbiAgICBjb25zdCBzdGVwID0gc3RlcHNbc3RlcE51bWJlcl07XHJcbiAgICBjb25zdCB0b3RhbFN0ZXBzID0gc3RlcHMubGVuZ3RoO1xyXG4gICAgY29uc3QgaXNMYXN0U3RlcCA9IHN0ZXBOdW1iZXIgPT09IHRvdGFsU3RlcHMgLSAxO1xyXG5cclxuICAgIGNvbnN0IG5leHQgPSB2YWx1ZXMgPT4ge1xyXG4gICAgICAgIHNldFNuYXBzaG90KHZhbHVlcyk7XHJcbiAgICAgICAgc2V0U3RlcE51bWJlcihNYXRoLm1pbihzdGVwTnVtYmVyICsgMSwgdG90YWxTdGVwcyAtIDEpKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMsIGJhZykgPT4ge1xyXG4gICAgICAgIGlmIChzdGVwLnByb3BzLm9uU3VibWl0KSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHN0ZXAucHJvcHMub25TdWJtaXQodmFsdWVzLCBiYWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNMYXN0U3RlcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb25TdWJtaXQodmFsdWVzLCBiYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJhZy5zZXRUb3VjaGVkKHt9KTtcclxuICAgICAgICAgICAgbmV4dCh2YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC0xMCBibG9xdWUgZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGZvcm11bGFyaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RlcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcHM9eyBbe3RpdGxlOiAnJ30sIHt0aXRsZTogJyd9LCB7dGl0bGU6ICcnfV0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3RlcD17IHN0ZXBOdW1iZXIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I9e1wiIzcyQjUwMFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVDb2xvcj17XCIjNzJCNTAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29ub2NlIGN1w6FsIHLDqWdpbWVuIHRlIGVudHJlZ2EgbcOhcyBiZW5lZmljaW9zOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17c25hcHNob3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17c3RlcC5wcm9wcy52YWxpZGF0aW9uU2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGZvcm1paykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wganVzdGlmeS1jb250ZW50LWNlbnRlciBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhbGN1bGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IShmb3JtaWsuaXNWYWxpZCAmJiBmb3JtaWsuZGlydHkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXBOdW1iZXIgPjAgPyAoc3RlcE51bWJlciA+IDEgPyAnQ2FsY3VsYXInOiAnQ29udGludWFyJykgOiAnQ29tZW56YXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yIFwiPlxyXG4gICAgICAgICAgICAgICAge3N0ZXBOdW1iZXIgPiAwID8gPGltZyBzcmM9e2pvdmVuMn0gYWx0PVwiam92ZW4gbW9kZWxvIDJcIi8+IDogPGltZyBzcmM9e2pvdmVufSBhbHQ9XCJqb3ZlbiBtb2RlbG9cIi8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgV2l6YXJkU3RlcCA9ICh7IGNoaWxkcmVuIH0pID0+IGNoaWxkcmVuO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYWhvcnJvIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL3N2Zy9haG9ycm8uc3ZnXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NhcmR9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBhbXBvbGxldGEgZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvc3ZnL2FtcG9sbGV0YS5zdmdcIjtcbmltcG9ydCBBUFZGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0FwdkZvcm1cIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbmNvbnN0IGJlYXJlciA9IHByb3BzLmJlYXJlcjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkF1bWVudGEgdHUgU3VlbGRvIHwgU29saWNpdHVkIGRlIENvbnRhY3RvIHwgQUZQIE1vZGVsbzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBdW1lbnRhIHR1IHN1ZWxkbyBsw61xdWlkbywgcGFnYW5kbyB1bmEgbWVub3IgY29taXNpw7NuIGRlIEFGUC4gU2ltdWxhIHR1IGF1bWVudG8gZGUgc3VlbGRvIGFsIGNhbWJpYXJ0ZSBhIEFGUCBNb2RlbG8uXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4LCBmb2xsb3dcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctMTAwIGNvbnRhaW5lci1wYWRyZSBjYWxjdWxhZG9yYVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Q29ub2NlIGN1w6FudG88L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5hdW1lbnRhcsOtYSB0dSBzdWVsZG8sPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+YWwgY2FtYmlhcnRlIGE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5BRlAgTW9kZWxvLjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOabmV0ZSBhIGxhIEFGUCBjb24gdW5hIGRlIGxhcyBjb21pc2lvbmVzIG3DoXMgYmFqYXMgZGVsIG1lcmNhZG8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YWhvcnJvfSBhbHQ9XCJjZXJkaXRvQWhvcnJvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyICBkZXNrdG9wIGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2FtcG9sbGV0YX0gYWx0PVwicGFyZWphIG1vZGVsb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPsK/UG9yIHF1w6kgYWJyaXIgdW4gQVBWPzwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWwgQVBWIHRlIHBlcm1pdGUgY29tcGxlbWVudGFyIHR1cyBhaG9ycm9zIHkvbyBjb21wZW5zYXIgcGVyw61vZG9zIG5vIGNvdGl6YWRvcywgcGFyYSBtZWpvcmFyIHR1IHBlbnNpw7NuLiBEZXBlbmRpZW5kbyBkZWwgcsOpZ2ltZW4gdHJpYnV0YXJpbyBxdWUgZWxpamFzIHBvZHLDoXMgcmVjaWJpciB1biBhcG9ydGUgZmlzY2FsIG8gcmViYWphciBsbyBhaG9ycmFkbyBkZSB0dSByZW50YSB0cmlidXRhYmxlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8QVBWRm9ybSB0b2tlbj17YmVhcmVyfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+RXhpc3RlbiBkb3MgcsOpZ2ltZW5lcyBkZSBBUFY8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+UsOpZ2ltZW4gQTwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVuIGVzdGUgZWwgRXN0YWRvIHRlIGVudHJlZ2EgdW5hIGJvbmlmaWNhY2nDs24gZGUgdW4gMTUlIGRlIGxvIHF1ZSBhaG9ycmFzIGVuIGVsIGHDsW8gY29uIHVuIHRvcGUgZGUgNiBVVE0gYW51YWxlcy4gUG9yIGVqZW1wbG8sIHNpIGFob3JyYXMgJDEwMC4wMDAgcmVjaWJpcsOhcyAkMTUuMDAwIGFkaWNpb25hbGVzLCBwb3IgbG8gcXVlIHR1IGN1ZW50YSB0ZW5kcmEgJDExNS4wMDAuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuTGluayBocmVmPVwiI1wiPlNhYmVyIE3DoXM8L0NhcmQuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+UsOpZ2ltZW4gQjwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbiBlc3RlIHB1ZWRlcyByZWJhamFyIHR1IGFob3JybyBkZSB0dSByZW50YSB0cmlidXRhYmxlLiBFc3RvIGxvIHB1ZWRlcyB2ZXIgcmVmbGVqYWRvIG1lcyBhIG1lcyBlbiB0dSBsaXF1aWRhY2nDs24gZGUgc3VlbGRvIG8gdW5hIHZleiBhbCBhw7FvIGVuIGxhIG9wZXJhY2nDs24gcmVudGEsIHNlZ8O6biByZWFsaWNlcyB0dSBhcG9ydGUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuTGluayBocmVmPVwiI1wiPlNhYmVyIE3DoXM8L0NhcmQuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCBiYXNlVXJsPSdodHRwczovL2FwdmJhY2tlbmRtYW5hZ2VyLmF6dXJld2Vic2l0ZXMubmV0LydcbiAgICBjb25zdCBhcGlUb2tlbiA9ICdUb2tlbi9HZW5lcmF0ZVRva2VuJztcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoYCR7YmFzZVVybH0ke2FwaVRva2VufWApO1xuICAgIGNvbnN0IGJlYXJlciA9IGF3YWl0IHJlc3BvbnNlLmRhdGEua2V5XG5cbiAgICBpZiAoIWJlYXJlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy8nLFxuICAgICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcHJvcHM6IHtiZWFyZXJ9IH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYWhvcnJvLWZkZGJiZWRmNjYwZDg4ODczZDQ5MjNjNDlhOTYwMTUzLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9hbXBvbGxldGEtNTIzNzdlYjlmYmM3NmMzMWE0MDhhNmQzODYzZDljNTkuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2pvdmVuLWFiZTFhNjk2OTZiMGI2ZDc0ZWViNTQwNzY1OWZlOWQxLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9qb3ZlbjItMzExYWM1OWNkZDg3Nzk1Y2VhZGM2NzJmZDVmMmQ4ZDAuc3ZnXCI7IiwiZXhwb3J0IGNvbnN0IHJ1dFZhbGlkYWRvciA9IChydXQpID0+IHtcclxuICAgIGlmICghcnV0IHx8IHJ1dC50cmltKCkubGVuZ3RoIDwgMykgcmV0dXJuIGZhbHNlO1xyXG4gICAgY29uc3QgcnV0TGltcGlvID0gcnV0LnJlcGxhY2UoL1teMC05a0stXS9nLCBcIlwiKTtcclxuXHJcbiAgICBpZiAocnV0TGltcGlvLmxlbmd0aCA8IDMpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBzcGxpdCA9IHJ1dExpbXBpby5zcGxpdChcIi1cIik7XHJcbiAgICBpZiAoc3BsaXQubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQoc3BsaXRbMF0sIDEwKTtcclxuICAgIGNvbnN0IGRndiA9IHNwbGl0WzFdO1xyXG5cclxuICAgIGNvbnN0IGR2Q2FsYyA9IGNhbGN1bGF0ZURWKG51bSk7XHJcbiAgICByZXR1cm4gZHZDYWxjID09PSBkZ3Y7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlRFYgPSAocnV0KSA9PiB7XHJcbiAgICBjb25zdCBjdWVycG8gPSBgJHtydXR9YDtcclxuICAgIC8vIENhbGN1bGFyIETDrWdpdG8gVmVyaWZpY2Fkb3JcclxuICAgIGxldCBzdW1hID0gMDtcclxuICAgIGxldCBtdWx0aXBsbyA9IDI7XHJcblxyXG4gICAgLy8gUGFyYSBjYWRhIGTDrWdpdG8gZGVsIEN1ZXJwb1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY3VlcnBvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gT2J0ZW5lciBzdSBQcm9kdWN0byBjb24gZWwgTcO6bHRpcGxvIENvcnJlc3BvbmRpZW50ZVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbXVsdGlwbG8gKiBjdWVycG8uY2hhckF0KGN1ZXJwby5sZW5ndGggLSBpKTtcclxuXHJcbiAgICAgICAgLy8gU3VtYXIgYWwgQ29udGFkb3IgR2VuZXJhbFxyXG4gICAgICAgIHN1bWEgKz0gaW5kZXg7XHJcblxyXG4gICAgICAgIC8vIENvbnNvbGlkYXIgTcO6bHRpcGxvIGRlbnRybyBkZWwgcmFuZ28gWzIsN11cclxuICAgICAgICBpZiAobXVsdGlwbG8gPCA3KSB7XHJcbiAgICAgICAgICAgIG11bHRpcGxvICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbXVsdGlwbG8gPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhciBEw61naXRvIFZlcmlmaWNhZG9yIGVuIGJhc2UgYWwgTcOzZHVsbyAxMVxyXG4gICAgY29uc3QgZHZFc3BlcmFkbyA9IDExIC0gKHN1bWEgJSAxMSk7XHJcbiAgICBpZiAoZHZFc3BlcmFkbyA9PT0gMTApIHJldHVybiBcImtcIjtcclxuICAgIGlmIChkdkVzcGVyYWRvID09PSAxMSkgcmV0dXJuIFwiMFwiO1xyXG4gICAgcmV0dXJuIGAke2R2RXNwZXJhZG99YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRlYXJSdXQgPSAocnV0KSA9PiB7XHJcbiAgICBsZXQgZm9ybWF0ZWFkbyA9IHJ1dDtcclxuICAgIGZvcm1hdGVhZG8gPSBmb3JtYXRlYWRvLnJlcGxhY2UoL1xcLi9nLCBcIlwiKS5yZXBsYWNlKFwiLVwiLCBcIlwiKTtcclxuXHJcbiAgICBpZiAoZm9ybWF0ZWFkby5tYXRjaCgvXihcXGR7Mn0pKFxcZHszfSl7Mn0oXFx3ezF9KSQvKSkge1xyXG4gICAgICAgIGZvcm1hdGVhZG8gPSBmb3JtYXRlYWRvLnJlcGxhY2UoL14oXFxkezJ9KShcXGR7M30pKFxcZHszfSkoXFx3ezF9KSQvLCBcIiQxLiQyLiQzLSQ0XCIpO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtYXRlYWRvLm1hdGNoKC9eKFxcZCkoXFxkezN9KXsyfShcXHd7MCwxfSkkLykpIHtcclxuICAgICAgICBmb3JtYXRlYWRvID0gZm9ybWF0ZWFkby5yZXBsYWNlKC9eKFxcZCkoXFxkezN9KShcXGR7M30pKFxcd3swLDF9KSQvLCBcIiQxLiQyLiQzLSQ0XCIpO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtYXRlYWRvLm1hdGNoKC9eKFxcZCkoXFxkezN9KShcXGR7MCwyfSkkLykpIHtcclxuICAgICAgICBmb3JtYXRlYWRvID0gZm9ybWF0ZWFkby5yZXBsYWNlKC9eKFxcZCkoXFxkezN9KShcXGR7MCwyfSkkLywgXCIkMS4kMi4kM1wiKTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybWF0ZWFkby5tYXRjaCgvXihcXGQpKFxcZHswLDJ9KSQvKSkge1xyXG4gICAgICAgIGZvcm1hdGVhZG8gPSBmb3JtYXRlYWRvLnJlcGxhY2UoL14oXFxkKShcXGR7MCwyfSkkLywgXCIkMS4kMlwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm9ybWF0ZWFkbztcclxufTtcclxuIiwiaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHtydXRWYWxpZGFkb3J9IGZyb20gXCIuL3ZhbGlkYXRpb25SdXRcIjtcclxuXHJcblxyXG5jb25zdCBhYWNlbnRvID0gXCJcXHUwMGUxXCI7XHJcbmNvbnN0IGVhY2VudG8gPSBcIlxcdTAwZTlcIjtcclxuY29uc3QgaWFjZW50byA9IFwiXFx1MDBlZFwiO1xyXG5jb25zdCBvYWNlbnRvID0gXCJcXHUwMGYzXCI7XHJcbmNvbnN0IHVhY2VudG8gPSBcIlxcdTAwZmFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdGVwMVNjaGVtYSA9IFl1cC5vYmplY3Qoe1xyXG4gICAgc3VlbGRvOiBZdXBcclxuICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAubWF0Y2hlcygvXlswLTldezYsOH0kLywgYEluZ3Jlc2UgdW4gc3VlbGRvIGwke2lhY2VudG99cXVpZG8gZW50cmUgJDEwMC4wMDAgeSAkMTAuMDAwLjAwMC5gKVxyXG4gICAgICAgIC50ZXN0KCdTdWVsZG8tdmFsaWRhY2lvbicsIGBJbmdyZXNlIHVuIHN1ZWxkbyBsJHtpYWNlbnRvfXF1aWRvIGVudHJlICQxMDAuMDAwIHkgJDEwLjAwMC4wMDAuYCwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodmFsdWU+PSAxMDAwMDAgJiYgdmFsdWUgPD0gMTAwMDAwMDApXHJcbiAgICAgICAgfSlcclxuICAgICAgICAucmVxdWlyZWQoJ1BvciBmYXZvciBpbmdyZXNlIHN1IHN1ZWxkbyBsw61xdWlkby4nKSxcclxuICAgIGFob3JybzogWXVwXHJcbiAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgLm1hdGNoZXMoL15bMC05XSskLywgYEluZ3Jlc2UgZWwgbW9udG8gZW4gcGVzb3MgcXVlIGRlc2VhIGFob3JyYXIgZGVzZGUgJDEuMDAwLmApXHJcbiAgICAgICAgLnRlc3QoJ1N1ZWxkby12YWxpZGFjaW9uJywgYEluZ3Jlc2UgdW4gbW9udG8gZGVzZGUgJDEuMDAwLmAsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlID49IDEwMDAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnJlcXVpcmVkKCdQb3IgZmF2b3IgaW5ncmVzZSBlbCBtb250byBxdWUgZGVzZWEgYWhvcnJhciBkZXNkZSAkMS4wMDAuJyksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0ZXAyU2NoZW1hID0gWXVwLm9iamVjdCh7XHJcbiAgICBub21icmU6IFl1cFxyXG4gICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIC5tYXRjaGVzKFxyXG4gICAgICAgICAgICAvXltBLVphLXogXFx1MDBGMVxcdTAwRDFcXHUwMEUxXFx1MDBFOVxcdTAwRURcXHUwMEYzXFx1MDBGQVxcdTAwRkNdezMsNjB9JC8sXHJcbiAgICAgICAgICAgIGBJbmdyZXNhIHR1IG5vbWJyZSBzaW4gbiR7dWFjZW50b31tZXJvcyBuaSBjYXJhY3RlcmVzLmApXHJcbiAgICAgICAgLnJlcXVpcmVkKCdJbmdyZXNhIGFsIG1lbm9zIHVuIG5vbWJyZSB5IGFwZWxsaWRvLicpLFxyXG4gICAgcnV0OiBZdXBcclxuICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAucmVxdWlyZWQoYFBvciBmYXZvciBpbmdyZXNlIHVuIFJVVCB2JHthYWNlbnRvfWxpZG8gc2luIHB1bnRvcyB5IGNvbiBndWkke29hY2VudG99bi5gKVxyXG4gICAgICAgIC50ZXN0KCdSdXQtdmFsaWRhY2lvbicsXHJcbiAgICAgICAgICAgIGBQb3IgZmF2b3IgaW5ncmVzZSB1biBSVVQgdiR7YWFjZW50b31saWRvIHNpbiBwdW50b3MgeSBjb24gZ3VpJHtvYWNlbnRvfW4uYCxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcnV0VmFsaWRhZG9yKHZhbHVlKTtcclxuICAgICAgICAgICAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0ZXAzU2NoZW1hID0gWXVwLm9iamVjdCh7XHJcbiAgICBjb3JyZW86IFl1cFxyXG4gICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIC5lbWFpbChgVHUgY29ycmVvIGRlYmUgaW5jbHVpciB1biBcIkBcIiB5IHVuIGRvbWluaW8gdiR7YWFjZW50b31saWRvLmApXHJcbiAgICAgICAgLnJlcXVpcmVkKCdQb3IgZmF2b3IgaW5ncmVzZSBzdSBjb3JyZW8uJyksXHJcbiAgICBjZWx1bGFyOiBZdXBcclxuICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAubWF0Y2hlcygvXls5XXsxfVswLTldezh9JC8sIGBJbmdyZXNhIHVuIG4ke3VhY2VudG99bWVybyBkZSA5IGQke2lhY2VudG99Z2l0b3MuYClcclxuICAgICAgICAucmVxdWlyZWQoYFBvciBmYXZvciBpbmdyZXNlIHN1IG4ke3VhY2VudG99bWVybyBkZSB0ZWwke2VhY2VudG99Zm9uby5gKSxcclxuICAgIHRlcm1pbm9zeWNvbmRpY2lvbmVzOiBZdXBcclxuICAgICAgICAuYm9vbGVhbigpXHJcbiAgICAgICAgLm9uZU9mKFt0cnVlXSwgYERlYmUgYWNlcHRhciBsYXMgY29uZGljaW9uZXMgZGVsIHNlcnZpY2lvIHkgbGEgcG9sJHtpYWNlbnRvfXRpY2EgZGUgcHJpdmFjaWRhZC5gKVxyXG59KSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0ZXBwZXItaG9yaXpvbnRhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=