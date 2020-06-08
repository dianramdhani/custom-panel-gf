define(["@grafana/data","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!../styles/material-icon.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--9-1!../node_modules/postcss-loader/src??ref--9-2!../node_modules/sass-loader/lib/loader.js!../styles/material-icon.scss ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
// Module
exports.push([module.i, "/* Rules for sizing the icon. */\n.material-icons.md-18 {\n  font-size: 18px; }\n\n.material-icons.md-24 {\n  font-size: 24px; }\n\n.material-icons.md-36 {\n  font-size: 36px; }\n\n.material-icons.md-48 {\n  font-size: 48px; }\n\n/* Rules for using icons as black on a light background. */\n.material-icons.md-dark {\n  color: rgba(0, 0, 0, 0.54); }\n\n.material-icons.md-dark.md-inactive {\n  color: rgba(0, 0, 0, 0.26); }\n\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light {\n  color: white; }\n\n.material-icons.md-light.md-inactive {\n  color: rgba(255, 255, 255, 0.3); }\n", "",{"version":3,"sources":["material-icon.scss"],"names":[],"mappings":"AACA,+BAA+B;AAC/B;EACE,eAAe,EAAE;;AAEnB;EACE,eAAe,EAAE;;AAEnB;EACE,eAAe,EAAE;;AAEnB;EACE,eAAe,EAAE;;AAEnB,0DAA0D;AAC1D;EACE,0BAA0B,EAAE;;AAE9B;EACE,0BAA0B,EAAE;;AAE9B,yDAAyD;AACzD;EACE,YAAY,EAAE;;AAEhB;EACE,+BAA+B,EAAE","file":"material-icon.scss","sourcesContent":["@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n/* Rules for sizing the icon. */\n.material-icons.md-18 {\n  font-size: 18px; }\n\n.material-icons.md-24 {\n  font-size: 24px; }\n\n.material-icons.md-36 {\n  font-size: 36px; }\n\n.material-icons.md-48 {\n  font-size: 48px; }\n\n/* Rules for using icons as black on a light background. */\n.material-icons.md-dark {\n  color: rgba(0, 0, 0, 0.54); }\n\n.material-icons.md-dark.md-inactive {\n  color: rgba(0, 0, 0, 0.26); }\n\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light {\n  color: white; }\n\n.material-icons.md-light.md-inactive {\n  color: rgba(255, 255, 255, 0.3); }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!../styles/style.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--9-1!../node_modules/postcss-loader/src??ref--9-2!../node_modules/sass-loader/lib/loader.js!../styles/style.scss ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".tr-big-value {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important; }\n  .tr-big-value h1 {\n    margin: 0; }\n    .tr-big-value h1 span {\n      font-size: 24px !important; }\n  .tr-big-value .tr-min-val {\n    margin-right: 16px !important;\n    color: #e91e63 !important; }\n  .tr-big-value .tr-max-val {\n    color: #00bcd4 !important; }\n\n.tr-middle-value {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important; }\n  .tr-middle-value h3 {\n    margin: 0; }\n    .tr-middle-value h3 span {\n      font-size: 18px !important; }\n\n.tr-critical h1,\n.tr-critical h5 {\n  color: #e91e63 !important; }\n\n.tr-major h1,\n.tr-major h5 {\n  color: #ff9800 !important; }\n\n.tr-minor h1,\n.tr-minor h5 {\n  color: #ffeb3b !important; }\n\n.tr-full {\n  width: 100%;\n  height: 100%; }\n\n.tr-wd-100 {\n  width: 100%; }\n", "",{"version":3,"sources":["style.scss"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,8BAA8B,EAAE;EAChC;IACE,SAAS,EAAE;IACX;MACE,0BAA0B,EAAE;EAChC;IACE,6BAA6B;IAC7B,yBAAyB,EAAE;EAC7B;IACE,yBAAyB,EAAE;;AAE/B;EACE,2BAA2B;EAC3B,8BAA8B,EAAE;EAChC;IACE,SAAS,EAAE;IACX;MACE,0BAA0B,EAAE;;AAElC;;EAEE,yBAAyB,EAAE;;AAE7B;;EAEE,yBAAyB,EAAE;;AAE7B;;EAEE,yBAAyB,EAAE;;AAE7B;EACE,WAAW;EACX,YAAY,EAAE;;AAEhB;EACE,WAAW,EAAE","file":"style.scss","sourcesContent":[".tr-big-value {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important; }\n  .tr-big-value h1 {\n    margin: 0; }\n    .tr-big-value h1 span {\n      font-size: 24px !important; }\n  .tr-big-value .tr-min-val {\n    margin-right: 16px !important;\n    color: #e91e63 !important; }\n  .tr-big-value .tr-max-val {\n    color: #00bcd4 !important; }\n\n.tr-middle-value {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important; }\n  .tr-middle-value h3 {\n    margin: 0; }\n    .tr-middle-value h3 span {\n      font-size: 18px !important; }\n\n.tr-critical h1,\n.tr-critical h5 {\n  color: #e91e63 !important; }\n\n.tr-major h1,\n.tr-major h5 {\n  color: #ff9800 !important; }\n\n.tr-minor h1,\n.tr-minor h5 {\n  color: #ffeb3b !important; }\n\n.tr-full {\n  width: 100%;\n  height: 100%; }\n\n.tr-wd-100 {\n  width: 100%; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!../styles/w3.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/lib/loader.js!../styles/w3.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* W3.CSS 4.13 June 2019 by Jan Egil and Borge Refsnes */\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle, aside, details, figcaption, figure, footer, header, main, menu, nav, section {\n  display: block; }\n\nsummary {\n  display: list-item; }\n\naudio, canvas, progress, video {\n  display: inline-block; }\n\nprogress {\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden], template {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active, a:hover {\n  outline-width: 0; }\n\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; }\n\nb, strong {\n  font-weight: bolder; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\nfigure {\n  margin: 1em 40px; }\n\nimg {\n  border-style: none; }\n\ncode, kbd, pre, samp {\n  font-family: monospace,monospace;\n  font-size: 1em; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nbutton, input, select, textarea, optgroup {\n  font: inherit;\n  margin: 0; }\n\noptgroup {\n  font-weight: bold; }\n\nbutton, input {\n  overflow: visible; }\n\nbutton, select {\n  text-transform: none; }\n\nbutton, [type=button], [type=reset], [type=submit] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: .35em .625em .75em; }\n\nlegend {\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal; }\n\ntextarea {\n  overflow: auto; }\n\n[type=checkbox], [type=radio] {\n  padding: 0; }\n\n[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px; }\n\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit; }\n\n/* End extract */\nhtml, body {\n  font-family: Verdana,sans-serif;\n  font-size: 15px;\n  line-height: 1.5; }\n\nhtml {\n  overflow-x: hidden; }\n\nh1 {\n  font-size: 36px; }\n\nh2 {\n  font-size: 30px; }\n\nh3 {\n  font-size: 24px; }\n\nh4 {\n  font-size: 20px; }\n\nh5 {\n  font-size: 18px; }\n\nh6 {\n  font-size: 16px; }\n\n.w3-serif {\n  font-family: serif; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Segoe UI\",Arial,sans-serif;\n  font-weight: 400;\n  margin: 10px 0; }\n\n.w3-wide {\n  letter-spacing: 4px; }\n\nhr {\n  border: 0;\n  border-top: 1px solid #eee;\n  margin: 20px 0; }\n\n.w3-image {\n  max-width: 100%;\n  height: auto; }\n\nimg {\n  vertical-align: middle; }\n\na {\n  color: inherit; }\n\n.w3-table, .w3-table-all {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  display: table; }\n\n.w3-table-all {\n  border: 1px solid #ccc; }\n\n.w3-bordered tr, .w3-table-all tr {\n  border-bottom: 1px solid #ddd; }\n\n.w3-striped tbody tr:nth-child(even) {\n  background-color: #f1f1f1; }\n\n.w3-table-all tr:nth-child(odd) {\n  background-color: #fff; }\n\n.w3-table-all tr:nth-child(even) {\n  background-color: #f1f1f1; }\n\n.w3-hoverable tbody tr:hover, .w3-ul.w3-hoverable li:hover {\n  background-color: #ccc; }\n\n.w3-centered tr th, .w3-centered tr td {\n  text-align: center; }\n\n.w3-table td, .w3-table th, .w3-table-all td, .w3-table-all th {\n  padding: 8px 8px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: top; }\n\n.w3-table th:first-child, .w3-table td:first-child, .w3-table-all th:first-child, .w3-table-all td:first-child {\n  padding-left: 16px; }\n\n.w3-btn, .w3-button {\n  border: none;\n  display: inline-block;\n  padding: 8px 16px;\n  vertical-align: middle;\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  background-color: inherit;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap; }\n\n.w3-btn:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.w3-btn, .w3-button {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.w3-disabled, .w3-btn:disabled, .w3-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.3; }\n\n.w3-disabled *, :disabled * {\n  pointer-events: none; }\n\n.w3-btn.w3-disabled:hover, .w3-btn:disabled:hover {\n  box-shadow: none; }\n\n.w3-badge, .w3-tag {\n  background-color: #000;\n  color: #fff;\n  display: inline-block;\n  padding-left: 8px;\n  padding-right: 8px;\n  text-align: center; }\n\n.w3-badge {\n  border-radius: 50%; }\n\n.w3-ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0; }\n\n.w3-ul li {\n  padding: 8px 16px;\n  border-bottom: 1px solid #ddd; }\n\n.w3-ul li:last-child {\n  border-bottom: none; }\n\n.w3-tooltip, .w3-display-container {\n  position: relative; }\n\n.w3-tooltip .w3-text {\n  display: none; }\n\n.w3-tooltip:hover .w3-text {\n  display: inline-block; }\n\n.w3-ripple:active {\n  opacity: 0.5; }\n\n.w3-ripple {\n  transition: opacity 0s; }\n\n.w3-input {\n  padding: 8px;\n  display: block;\n  border: none;\n  border-bottom: 1px solid #ccc;\n  width: 100%; }\n\n.w3-select {\n  padding: 9px 0;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #ccc; }\n\n.w3-dropdown-click, .w3-dropdown-hover {\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n\n.w3-dropdown-hover:hover .w3-dropdown-content {\n  display: block; }\n\n.w3-dropdown-hover:first-child, .w3-dropdown-click:hover {\n  background-color: #ccc;\n  color: #000; }\n\n.w3-dropdown-hover:hover > .w3-button:first-child, .w3-dropdown-click:hover > .w3-button:first-child {\n  background-color: #ccc;\n  color: #000; }\n\n.w3-dropdown-content {\n  cursor: auto;\n  color: #000;\n  background-color: #fff;\n  display: none;\n  position: absolute;\n  min-width: 160px;\n  margin: 0;\n  padding: 0;\n  z-index: 1; }\n\n.w3-check, .w3-radio {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 6px; }\n\n.w3-sidebar {\n  height: 100%;\n  width: 200px;\n  background-color: #fff;\n  position: fixed !important;\n  z-index: 1;\n  overflow: auto; }\n\n.w3-bar-block .w3-dropdown-hover, .w3-bar-block .w3-dropdown-click {\n  width: 100%; }\n\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content, .w3-bar-block .w3-dropdown-click .w3-dropdown-content {\n  min-width: 100%; }\n\n.w3-bar-block .w3-dropdown-hover .w3-button, .w3-bar-block .w3-dropdown-click .w3-button {\n  width: 100%;\n  text-align: left;\n  padding: 8px 16px; }\n\n.w3-main, #main {\n  transition: margin-left .4s; }\n\n.w3-modal {\n  z-index: 3;\n  display: none;\n  padding-top: 100px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.w3-modal-content {\n  margin: auto;\n  background-color: #fff;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  width: 600px; }\n\n.w3-bar {\n  width: 100%;\n  overflow: hidden; }\n\n.w3-center .w3-bar {\n  display: inline-block;\n  width: auto; }\n\n.w3-bar .w3-bar-item {\n  padding: 8px 16px;\n  float: left;\n  width: auto;\n  border: none;\n  display: block;\n  outline: 0; }\n\n.w3-bar .w3-dropdown-hover, .w3-bar .w3-dropdown-click {\n  position: static;\n  float: left; }\n\n.w3-bar .w3-button {\n  white-space: normal; }\n\n.w3-bar-block .w3-bar-item {\n  width: 100%;\n  display: block;\n  padding: 8px 16px;\n  text-align: left;\n  border: none;\n  white-space: normal;\n  float: none;\n  outline: 0; }\n\n.w3-bar-block.w3-center .w3-bar-item {\n  text-align: center; }\n\n.w3-block {\n  display: block;\n  width: 100%; }\n\n.w3-responsive {\n  display: block;\n  overflow-x: auto; }\n\n.w3-container:after, .w3-container:before, .w3-panel:after, .w3-panel:before, .w3-row:after, .w3-row:before, .w3-row-padding:after, .w3-row-padding:before,\n.w3-cell-row:before, .w3-cell-row:after, .w3-clear:after, .w3-clear:before, .w3-bar:before, .w3-bar:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.w3-col, .w3-half, .w3-third, .w3-twothird, .w3-threequarter, .w3-quarter {\n  float: left;\n  width: 100%; }\n\n.w3-col.s1 {\n  width: 8.33333%; }\n\n.w3-col.s2 {\n  width: 16.66666%; }\n\n.w3-col.s3 {\n  width: 24.99999%; }\n\n.w3-col.s4 {\n  width: 33.33333%; }\n\n.w3-col.s5 {\n  width: 41.66666%; }\n\n.w3-col.s6 {\n  width: 49.99999%; }\n\n.w3-col.s7 {\n  width: 58.33333%; }\n\n.w3-col.s8 {\n  width: 66.66666%; }\n\n.w3-col.s9 {\n  width: 74.99999%; }\n\n.w3-col.s10 {\n  width: 83.33333%; }\n\n.w3-col.s11 {\n  width: 91.66666%; }\n\n.w3-col.s12 {\n  width: 99.99999%; }\n\n@media (min-width: 601px) {\n  .w3-col.m1 {\n    width: 8.33333%; }\n  .w3-col.m2 {\n    width: 16.66666%; }\n  .w3-col.m3, .w3-quarter {\n    width: 24.99999%; }\n  .w3-col.m4, .w3-third {\n    width: 33.33333%; }\n  .w3-col.m5 {\n    width: 41.66666%; }\n  .w3-col.m6, .w3-half {\n    width: 49.99999%; }\n  .w3-col.m7 {\n    width: 58.33333%; }\n  .w3-col.m8, .w3-twothird {\n    width: 66.66666%; }\n  .w3-col.m9, .w3-threequarter {\n    width: 74.99999%; }\n  .w3-col.m10 {\n    width: 83.33333%; }\n  .w3-col.m11 {\n    width: 91.66666%; }\n  .w3-col.m12 {\n    width: 99.99999%; } }\n\n@media (min-width: 993px) {\n  .w3-col.l1 {\n    width: 8.33333%; }\n  .w3-col.l2 {\n    width: 16.66666%; }\n  .w3-col.l3 {\n    width: 24.99999%; }\n  .w3-col.l4 {\n    width: 33.33333%; }\n  .w3-col.l5 {\n    width: 41.66666%; }\n  .w3-col.l6 {\n    width: 49.99999%; }\n  .w3-col.l7 {\n    width: 58.33333%; }\n  .w3-col.l8 {\n    width: 66.66666%; }\n  .w3-col.l9 {\n    width: 74.99999%; }\n  .w3-col.l10 {\n    width: 83.33333%; }\n  .w3-col.l11 {\n    width: 91.66666%; }\n  .w3-col.l12 {\n    width: 99.99999%; } }\n\n.w3-rest {\n  overflow: hidden; }\n\n.w3-stretch {\n  margin-left: -16px;\n  margin-right: -16px; }\n\n.w3-content, .w3-auto {\n  margin-left: auto;\n  margin-right: auto; }\n\n.w3-content {\n  max-width: 980px; }\n\n.w3-auto {\n  max-width: 1140px; }\n\n.w3-cell-row {\n  display: table;\n  width: 100%; }\n\n.w3-cell {\n  display: table-cell; }\n\n.w3-cell-top {\n  vertical-align: top; }\n\n.w3-cell-middle {\n  vertical-align: middle; }\n\n.w3-cell-bottom {\n  vertical-align: bottom; }\n\n.w3-hide {\n  display: none !important; }\n\n.w3-show-block, .w3-show {\n  display: block !important; }\n\n.w3-show-inline-block {\n  display: inline-block !important; }\n\n@media (max-width: 1205px) {\n  .w3-auto {\n    max-width: 95%; } }\n\n@media (max-width: 600px) {\n  .w3-modal-content {\n    margin: 0 10px;\n    width: auto !important; }\n  .w3-modal {\n    padding-top: 30px; }\n  .w3-dropdown-hover.w3-mobile .w3-dropdown-content, .w3-dropdown-click.w3-mobile .w3-dropdown-content {\n    position: relative; }\n  .w3-hide-small {\n    display: none !important; }\n  .w3-mobile {\n    display: block;\n    width: 100% !important; }\n  .w3-bar-item.w3-mobile, .w3-dropdown-hover.w3-mobile, .w3-dropdown-click.w3-mobile {\n    text-align: center; }\n  .w3-dropdown-hover.w3-mobile, .w3-dropdown-hover.w3-mobile .w3-btn, .w3-dropdown-hover.w3-mobile .w3-button, .w3-dropdown-click.w3-mobile, .w3-dropdown-click.w3-mobile .w3-btn, .w3-dropdown-click.w3-mobile .w3-button {\n    width: 100%; } }\n\n@media (max-width: 768px) {\n  .w3-modal-content {\n    width: 500px; }\n  .w3-modal {\n    padding-top: 50px; } }\n\n@media (min-width: 993px) {\n  .w3-modal-content {\n    width: 900px; }\n  .w3-hide-large {\n    display: none !important; }\n  .w3-sidebar.w3-collapse {\n    display: block !important; } }\n\n@media (max-width: 992px) and (min-width: 601px) {\n  .w3-hide-medium {\n    display: none !important; } }\n\n@media (max-width: 992px) {\n  .w3-sidebar.w3-collapse {\n    display: none; }\n  .w3-main {\n    margin-left: 0 !important;\n    margin-right: 0 !important; }\n  .w3-auto {\n    max-width: 100%; } }\n\n.w3-top, .w3-bottom {\n  position: fixed;\n  width: 100%;\n  z-index: 1; }\n\n.w3-top {\n  top: 0; }\n\n.w3-bottom {\n  bottom: 0; }\n\n.w3-overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2; }\n\n.w3-display-topleft {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.w3-display-topright {\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.w3-display-bottomleft {\n  position: absolute;\n  left: 0;\n  bottom: 0; }\n\n.w3-display-bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0; }\n\n.w3-display-middle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.w3-display-left {\n  position: absolute;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  -ms-transform: translate(0%, -50%); }\n\n.w3-display-right {\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  -ms-transform: translate(0%, -50%); }\n\n.w3-display-topmiddle {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  transform: translate(-50%, 0%);\n  -ms-transform: translate(-50%, 0%); }\n\n.w3-display-bottommiddle {\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translate(-50%, 0%);\n  -ms-transform: translate(-50%, 0%); }\n\n.w3-display-container:hover .w3-display-hover {\n  display: block; }\n\n.w3-display-container:hover span.w3-display-hover {\n  display: inline-block; }\n\n.w3-display-hover {\n  display: none; }\n\n.w3-display-position {\n  position: absolute; }\n\n.w3-circle {\n  border-radius: 50%; }\n\n.w3-round-small {\n  border-radius: 2px; }\n\n.w3-round, .w3-round-medium {\n  border-radius: 4px; }\n\n.w3-round-large {\n  border-radius: 8px; }\n\n.w3-round-xlarge {\n  border-radius: 16px; }\n\n.w3-round-xxlarge {\n  border-radius: 32px; }\n\n.w3-row-padding, .w3-row-padding > .w3-half, .w3-row-padding > .w3-third, .w3-row-padding > .w3-twothird, .w3-row-padding > .w3-threequarter, .w3-row-padding > .w3-quarter, .w3-row-padding > .w3-col {\n  padding: 0 8px; }\n\n.w3-container, .w3-panel {\n  padding: 0.01em 16px; }\n\n.w3-panel {\n  margin-top: 16px;\n  margin-bottom: 16px; }\n\n.w3-code, .w3-codespan {\n  font-family: Consolas,\"courier new\";\n  font-size: 16px; }\n\n.w3-code {\n  width: auto;\n  background-color: #fff;\n  padding: 8px 12px;\n  border-left: 4px solid #4CAF50;\n  word-wrap: break-word; }\n\n.w3-codespan {\n  color: crimson;\n  background-color: #f1f1f1;\n  padding-left: 4px;\n  padding-right: 4px;\n  font-size: 110%; }\n\n.w3-card, .w3-card-2 {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.w3-card-4, .w3-hover-shadow:hover {\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.w3-spin {\n  -webkit-animation: w3-spin 2s infinite linear;\n          animation: w3-spin 2s infinite linear; }\n\n@-webkit-keyframes w3-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(359deg); } }\n\n@keyframes w3-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(359deg); } }\n\n.w3-animate-fading {\n  -webkit-animation: fading 10s infinite;\n          animation: fading 10s infinite; }\n\n@-webkit-keyframes fading {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fading {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.w3-animate-opacity {\n  -webkit-animation: opac 0.8s;\n          animation: opac 0.8s; }\n\n@-webkit-keyframes opac {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes opac {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.w3-animate-top {\n  position: relative;\n  -webkit-animation: animatetop 0.4s;\n          animation: animatetop 0.4s; }\n\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n.w3-animate-left {\n  position: relative;\n  -webkit-animation: animateleft 0.4s;\n          animation: animateleft 0.4s; }\n\n@-webkit-keyframes animateleft {\n  from {\n    left: -300px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n\n@keyframes animateleft {\n  from {\n    left: -300px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n\n.w3-animate-right {\n  position: relative;\n  -webkit-animation: animateright 0.4s;\n          animation: animateright 0.4s; }\n\n@-webkit-keyframes animateright {\n  from {\n    right: -300px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n\n@keyframes animateright {\n  from {\n    right: -300px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n\n.w3-animate-bottom {\n  position: relative;\n  -webkit-animation: animatebottom 0.4s;\n          animation: animatebottom 0.4s; }\n\n@-webkit-keyframes animatebottom {\n  from {\n    bottom: -300px;\n    opacity: 0; }\n  to {\n    bottom: 0;\n    opacity: 1; } }\n\n@keyframes animatebottom {\n  from {\n    bottom: -300px;\n    opacity: 0; }\n  to {\n    bottom: 0;\n    opacity: 1; } }\n\n.w3-animate-zoom {\n  -webkit-animation: animatezoom 0.6s;\n          animation: animatezoom 0.6s; }\n\n@-webkit-keyframes animatezoom {\n  from {\n    transform: scale(0); }\n  to {\n    transform: scale(1); } }\n\n@keyframes animatezoom {\n  from {\n    transform: scale(0); }\n  to {\n    transform: scale(1); } }\n\n.w3-animate-input {\n  transition: width 0.4s ease-in-out; }\n\n.w3-animate-input:focus {\n  width: 100% !important; }\n\n.w3-opacity, .w3-hover-opacity:hover {\n  opacity: 0.60; }\n\n.w3-opacity-off, .w3-hover-opacity-off:hover {\n  opacity: 1; }\n\n.w3-opacity-max {\n  opacity: 0.25; }\n\n.w3-opacity-min {\n  opacity: 0.75; }\n\n.w3-greyscale-max, .w3-grayscale-max, .w3-hover-greyscale:hover, .w3-hover-grayscale:hover {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%); }\n\n.w3-greyscale, .w3-grayscale {\n  -webkit-filter: grayscale(75%);\n          filter: grayscale(75%); }\n\n.w3-greyscale-min, .w3-grayscale-min {\n  -webkit-filter: grayscale(50%);\n          filter: grayscale(50%); }\n\n.w3-sepia {\n  -webkit-filter: sepia(75%);\n          filter: sepia(75%); }\n\n.w3-sepia-max, .w3-hover-sepia:hover {\n  -webkit-filter: sepia(100%);\n          filter: sepia(100%); }\n\n.w3-sepia-min {\n  -webkit-filter: sepia(50%);\n          filter: sepia(50%); }\n\n.w3-tiny {\n  font-size: 10px !important; }\n\n.w3-small {\n  font-size: 12px !important; }\n\n.w3-medium {\n  font-size: 15px !important; }\n\n.w3-large {\n  font-size: 18px !important; }\n\n.w3-xlarge {\n  font-size: 24px !important; }\n\n.w3-xxlarge {\n  font-size: 36px !important; }\n\n.w3-xxxlarge {\n  font-size: 48px !important; }\n\n.w3-jumbo {\n  font-size: 64px !important; }\n\n.w3-left-align {\n  text-align: left !important; }\n\n.w3-right-align {\n  text-align: right !important; }\n\n.w3-justify {\n  text-align: justify !important; }\n\n.w3-center {\n  text-align: center !important; }\n\n.w3-border-0 {\n  border: 0 !important; }\n\n.w3-border {\n  border: 1px solid #ccc !important; }\n\n.w3-border-top {\n  border-top: 1px solid #ccc !important; }\n\n.w3-border-bottom {\n  border-bottom: 1px solid #ccc !important; }\n\n.w3-border-left {\n  border-left: 1px solid #ccc !important; }\n\n.w3-border-right {\n  border-right: 1px solid #ccc !important; }\n\n.w3-topbar {\n  border-top: 6px solid #ccc !important; }\n\n.w3-bottombar {\n  border-bottom: 6px solid #ccc !important; }\n\n.w3-leftbar {\n  border-left: 6px solid #ccc !important; }\n\n.w3-rightbar {\n  border-right: 6px solid #ccc !important; }\n\n.w3-section, .w3-code {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important; }\n\n.w3-margin {\n  margin: 16px !important; }\n\n.w3-margin-top {\n  margin-top: 16px !important; }\n\n.w3-margin-bottom {\n  margin-bottom: 16px !important; }\n\n.w3-margin-left {\n  margin-left: 16px !important; }\n\n.w3-margin-right {\n  margin-right: 16px !important; }\n\n.w3-padding-small {\n  padding: 4px 8px !important; }\n\n.w3-padding {\n  padding: 8px 16px !important; }\n\n.w3-padding-large {\n  padding: 12px 24px !important; }\n\n.w3-padding-16 {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important; }\n\n.w3-padding-24 {\n  padding-top: 24px !important;\n  padding-bottom: 24px !important; }\n\n.w3-padding-32 {\n  padding-top: 32px !important;\n  padding-bottom: 32px !important; }\n\n.w3-padding-48 {\n  padding-top: 48px !important;\n  padding-bottom: 48px !important; }\n\n.w3-padding-64 {\n  padding-top: 64px !important;\n  padding-bottom: 64px !important; }\n\n.w3-left {\n  float: left !important; }\n\n.w3-right {\n  float: right !important; }\n\n.w3-button:hover {\n  color: #000 !important;\n  background-color: #ccc !important; }\n\n.w3-transparent, .w3-hover-none:hover {\n  background-color: transparent !important; }\n\n.w3-hover-none:hover {\n  box-shadow: none !important; }\n\n/* Colors */\n.w3-amber, .w3-hover-amber:hover {\n  color: #000 !important;\n  background-color: #ffc107 !important; }\n\n.w3-aqua, .w3-hover-aqua:hover {\n  color: #000 !important;\n  background-color: #00ffff !important; }\n\n.w3-blue, .w3-hover-blue:hover {\n  color: #fff !important;\n  background-color: #2196F3 !important; }\n\n.w3-light-blue, .w3-hover-light-blue:hover {\n  color: #000 !important;\n  background-color: #87CEEB !important; }\n\n.w3-brown, .w3-hover-brown:hover {\n  color: #fff !important;\n  background-color: #795548 !important; }\n\n.w3-cyan, .w3-hover-cyan:hover {\n  color: #000 !important;\n  background-color: #00bcd4 !important; }\n\n.w3-blue-grey, .w3-hover-blue-grey:hover, .w3-blue-gray, .w3-hover-blue-gray:hover {\n  color: #fff !important;\n  background-color: #607d8b !important; }\n\n.w3-green, .w3-hover-green:hover {\n  color: #fff !important;\n  background-color: #4CAF50 !important; }\n\n.w3-light-green, .w3-hover-light-green:hover {\n  color: #000 !important;\n  background-color: #8bc34a !important; }\n\n.w3-indigo, .w3-hover-indigo:hover {\n  color: #fff !important;\n  background-color: #3f51b5 !important; }\n\n.w3-khaki, .w3-hover-khaki:hover {\n  color: #000 !important;\n  background-color: #f0e68c !important; }\n\n.w3-lime, .w3-hover-lime:hover {\n  color: #000 !important;\n  background-color: #cddc39 !important; }\n\n.w3-orange, .w3-hover-orange:hover {\n  color: #000 !important;\n  background-color: #ff9800 !important; }\n\n.w3-deep-orange, .w3-hover-deep-orange:hover {\n  color: #fff !important;\n  background-color: #ff5722 !important; }\n\n.w3-pink, .w3-hover-pink:hover {\n  color: #fff !important;\n  background-color: #e91e63 !important; }\n\n.w3-purple, .w3-hover-purple:hover {\n  color: #fff !important;\n  background-color: #9c27b0 !important; }\n\n.w3-deep-purple, .w3-hover-deep-purple:hover {\n  color: #fff !important;\n  background-color: #673ab7 !important; }\n\n.w3-red, .w3-hover-red:hover {\n  color: #fff !important;\n  background-color: #f44336 !important; }\n\n.w3-sand, .w3-hover-sand:hover {\n  color: #000 !important;\n  background-color: #fdf5e6 !important; }\n\n.w3-teal, .w3-hover-teal:hover {\n  color: #fff !important;\n  background-color: #009688 !important; }\n\n.w3-yellow, .w3-hover-yellow:hover {\n  color: #000 !important;\n  background-color: #ffeb3b !important; }\n\n.w3-white, .w3-hover-white:hover {\n  color: #000 !important;\n  background-color: #fff !important; }\n\n.w3-black, .w3-hover-black:hover {\n  color: #fff !important;\n  background-color: #000 !important; }\n\n.w3-grey, .w3-hover-grey:hover, .w3-gray, .w3-hover-gray:hover {\n  color: #000 !important;\n  background-color: #9e9e9e !important; }\n\n.w3-light-grey, .w3-hover-light-grey:hover, .w3-light-gray, .w3-hover-light-gray:hover {\n  color: #000 !important;\n  background-color: #f1f1f1 !important; }\n\n.w3-dark-grey, .w3-hover-dark-grey:hover, .w3-dark-gray, .w3-hover-dark-gray:hover {\n  color: #fff !important;\n  background-color: #616161 !important; }\n\n.w3-pale-red, .w3-hover-pale-red:hover {\n  color: #000 !important;\n  background-color: #ffdddd !important; }\n\n.w3-pale-green, .w3-hover-pale-green:hover {\n  color: #000 !important;\n  background-color: #ddffdd !important; }\n\n.w3-pale-yellow, .w3-hover-pale-yellow:hover {\n  color: #000 !important;\n  background-color: #ffffcc !important; }\n\n.w3-pale-blue, .w3-hover-pale-blue:hover {\n  color: #000 !important;\n  background-color: #ddffff !important; }\n\n.w3-text-amber, .w3-hover-text-amber:hover {\n  color: #ffc107 !important; }\n\n.w3-text-aqua, .w3-hover-text-aqua:hover {\n  color: #00ffff !important; }\n\n.w3-text-blue, .w3-hover-text-blue:hover {\n  color: #2196F3 !important; }\n\n.w3-text-light-blue, .w3-hover-text-light-blue:hover {\n  color: #87CEEB !important; }\n\n.w3-text-brown, .w3-hover-text-brown:hover {\n  color: #795548 !important; }\n\n.w3-text-cyan, .w3-hover-text-cyan:hover {\n  color: #00bcd4 !important; }\n\n.w3-text-blue-grey, .w3-hover-text-blue-grey:hover, .w3-text-blue-gray, .w3-hover-text-blue-gray:hover {\n  color: #607d8b !important; }\n\n.w3-text-green, .w3-hover-text-green:hover {\n  color: #4CAF50 !important; }\n\n.w3-text-light-green, .w3-hover-text-light-green:hover {\n  color: #8bc34a !important; }\n\n.w3-text-indigo, .w3-hover-text-indigo:hover {\n  color: #3f51b5 !important; }\n\n.w3-text-khaki, .w3-hover-text-khaki:hover {\n  color: #b4aa50 !important; }\n\n.w3-text-lime, .w3-hover-text-lime:hover {\n  color: #cddc39 !important; }\n\n.w3-text-orange, .w3-hover-text-orange:hover {\n  color: #ff9800 !important; }\n\n.w3-text-deep-orange, .w3-hover-text-deep-orange:hover {\n  color: #ff5722 !important; }\n\n.w3-text-pink, .w3-hover-text-pink:hover {\n  color: #e91e63 !important; }\n\n.w3-text-purple, .w3-hover-text-purple:hover {\n  color: #9c27b0 !important; }\n\n.w3-text-deep-purple, .w3-hover-text-deep-purple:hover {\n  color: #673ab7 !important; }\n\n.w3-text-red, .w3-hover-text-red:hover {\n  color: #f44336 !important; }\n\n.w3-text-sand, .w3-hover-text-sand:hover {\n  color: #fdf5e6 !important; }\n\n.w3-text-teal, .w3-hover-text-teal:hover {\n  color: #009688 !important; }\n\n.w3-text-yellow, .w3-hover-text-yellow:hover {\n  color: #d2be0e !important; }\n\n.w3-text-white, .w3-hover-text-white:hover {\n  color: #fff !important; }\n\n.w3-text-black, .w3-hover-text-black:hover {\n  color: #000 !important; }\n\n.w3-text-grey, .w3-hover-text-grey:hover, .w3-text-gray, .w3-hover-text-gray:hover {\n  color: #757575 !important; }\n\n.w3-text-light-grey, .w3-hover-text-light-grey:hover, .w3-text-light-gray, .w3-hover-text-light-gray:hover {\n  color: #f1f1f1 !important; }\n\n.w3-text-dark-grey, .w3-hover-text-dark-grey:hover, .w3-text-dark-gray, .w3-hover-text-dark-gray:hover {\n  color: #3a3a3a !important; }\n\n.w3-border-amber, .w3-hover-border-amber:hover {\n  border-color: #ffc107 !important; }\n\n.w3-border-aqua, .w3-hover-border-aqua:hover {\n  border-color: #00ffff !important; }\n\n.w3-border-blue, .w3-hover-border-blue:hover {\n  border-color: #2196F3 !important; }\n\n.w3-border-light-blue, .w3-hover-border-light-blue:hover {\n  border-color: #87CEEB !important; }\n\n.w3-border-brown, .w3-hover-border-brown:hover {\n  border-color: #795548 !important; }\n\n.w3-border-cyan, .w3-hover-border-cyan:hover {\n  border-color: #00bcd4 !important; }\n\n.w3-border-blue-grey, .w3-hover-border-blue-grey:hover, .w3-border-blue-gray, .w3-hover-border-blue-gray:hover {\n  border-color: #607d8b !important; }\n\n.w3-border-green, .w3-hover-border-green:hover {\n  border-color: #4CAF50 !important; }\n\n.w3-border-light-green, .w3-hover-border-light-green:hover {\n  border-color: #8bc34a !important; }\n\n.w3-border-indigo, .w3-hover-border-indigo:hover {\n  border-color: #3f51b5 !important; }\n\n.w3-border-khaki, .w3-hover-border-khaki:hover {\n  border-color: #f0e68c !important; }\n\n.w3-border-lime, .w3-hover-border-lime:hover {\n  border-color: #cddc39 !important; }\n\n.w3-border-orange, .w3-hover-border-orange:hover {\n  border-color: #ff9800 !important; }\n\n.w3-border-deep-orange, .w3-hover-border-deep-orange:hover {\n  border-color: #ff5722 !important; }\n\n.w3-border-pink, .w3-hover-border-pink:hover {\n  border-color: #e91e63 !important; }\n\n.w3-border-purple, .w3-hover-border-purple:hover {\n  border-color: #9c27b0 !important; }\n\n.w3-border-deep-purple, .w3-hover-border-deep-purple:hover {\n  border-color: #673ab7 !important; }\n\n.w3-border-red, .w3-hover-border-red:hover {\n  border-color: #f44336 !important; }\n\n.w3-border-sand, .w3-hover-border-sand:hover {\n  border-color: #fdf5e6 !important; }\n\n.w3-border-teal, .w3-hover-border-teal:hover {\n  border-color: #009688 !important; }\n\n.w3-border-yellow, .w3-hover-border-yellow:hover {\n  border-color: #ffeb3b !important; }\n\n.w3-border-white, .w3-hover-border-white:hover {\n  border-color: #fff !important; }\n\n.w3-border-black, .w3-hover-border-black:hover {\n  border-color: #000 !important; }\n\n.w3-border-grey, .w3-hover-border-grey:hover, .w3-border-gray, .w3-hover-border-gray:hover {\n  border-color: #9e9e9e !important; }\n\n.w3-border-light-grey, .w3-hover-border-light-grey:hover, .w3-border-light-gray, .w3-hover-border-light-gray:hover {\n  border-color: #f1f1f1 !important; }\n\n.w3-border-dark-grey, .w3-hover-border-dark-grey:hover, .w3-border-dark-gray, .w3-hover-border-dark-gray:hover {\n  border-color: #616161 !important; }\n\n.w3-border-pale-red, .w3-hover-border-pale-red:hover {\n  border-color: #ffe7e7 !important; }\n\n.w3-border-pale-green, .w3-hover-border-pale-green:hover {\n  border-color: #e7ffe7 !important; }\n\n.w3-border-pale-yellow, .w3-hover-border-pale-yellow:hover {\n  border-color: #ffffcc !important; }\n\n.w3-border-pale-blue, .w3-hover-border-pale-blue:hover {\n  border-color: #e7ffff !important; }\n", "",{"version":3,"sources":["w3.css"],"names":[],"mappings":"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","file":"w3.css","sourcesContent":["/* W3.CSS 4.13 June 2019 by Jan Egil and Borge Refsnes */\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle, aside, details, figcaption, figure, footer, header, main, menu, nav, section {\n  display: block; }\n\nsummary {\n  display: list-item; }\n\naudio, canvas, progress, video {\n  display: inline-block; }\n\nprogress {\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden], template {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active, a:hover {\n  outline-width: 0; }\n\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted; }\n\nb, strong {\n  font-weight: bolder; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\nfigure {\n  margin: 1em 40px; }\n\nimg {\n  border-style: none; }\n\ncode, kbd, pre, samp {\n  font-family: monospace,monospace;\n  font-size: 1em; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nbutton, input, select, textarea, optgroup {\n  font: inherit;\n  margin: 0; }\n\noptgroup {\n  font-weight: bold; }\n\nbutton, input {\n  overflow: visible; }\n\nbutton, select {\n  text-transform: none; }\n\nbutton, [type=button], [type=reset], [type=submit] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: .35em .625em .75em; }\n\nlegend {\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal; }\n\ntextarea {\n  overflow: auto; }\n\n[type=checkbox], [type=radio] {\n  padding: 0; }\n\n[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px; }\n\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit; }\n\n/* End extract */\nhtml, body {\n  font-family: Verdana,sans-serif;\n  font-size: 15px;\n  line-height: 1.5; }\n\nhtml {\n  overflow-x: hidden; }\n\nh1 {\n  font-size: 36px; }\n\nh2 {\n  font-size: 30px; }\n\nh3 {\n  font-size: 24px; }\n\nh4 {\n  font-size: 20px; }\n\nh5 {\n  font-size: 18px; }\n\nh6 {\n  font-size: 16px; }\n\n.w3-serif {\n  font-family: serif; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Segoe UI\",Arial,sans-serif;\n  font-weight: 400;\n  margin: 10px 0; }\n\n.w3-wide {\n  letter-spacing: 4px; }\n\nhr {\n  border: 0;\n  border-top: 1px solid #eee;\n  margin: 20px 0; }\n\n.w3-image {\n  max-width: 100%;\n  height: auto; }\n\nimg {\n  vertical-align: middle; }\n\na {\n  color: inherit; }\n\n.w3-table, .w3-table-all {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  display: table; }\n\n.w3-table-all {\n  border: 1px solid #ccc; }\n\n.w3-bordered tr, .w3-table-all tr {\n  border-bottom: 1px solid #ddd; }\n\n.w3-striped tbody tr:nth-child(even) {\n  background-color: #f1f1f1; }\n\n.w3-table-all tr:nth-child(odd) {\n  background-color: #fff; }\n\n.w3-table-all tr:nth-child(even) {\n  background-color: #f1f1f1; }\n\n.w3-hoverable tbody tr:hover, .w3-ul.w3-hoverable li:hover {\n  background-color: #ccc; }\n\n.w3-centered tr th, .w3-centered tr td {\n  text-align: center; }\n\n.w3-table td, .w3-table th, .w3-table-all td, .w3-table-all th {\n  padding: 8px 8px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: top; }\n\n.w3-table th:first-child, .w3-table td:first-child, .w3-table-all th:first-child, .w3-table-all td:first-child {\n  padding-left: 16px; }\n\n.w3-btn, .w3-button {\n  border: none;\n  display: inline-block;\n  padding: 8px 16px;\n  vertical-align: middle;\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  background-color: inherit;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap; }\n\n.w3-btn:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.w3-btn, .w3-button {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.w3-disabled, .w3-btn:disabled, .w3-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.3; }\n\n.w3-disabled *, :disabled * {\n  pointer-events: none; }\n\n.w3-btn.w3-disabled:hover, .w3-btn:disabled:hover {\n  box-shadow: none; }\n\n.w3-badge, .w3-tag {\n  background-color: #000;\n  color: #fff;\n  display: inline-block;\n  padding-left: 8px;\n  padding-right: 8px;\n  text-align: center; }\n\n.w3-badge {\n  border-radius: 50%; }\n\n.w3-ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0; }\n\n.w3-ul li {\n  padding: 8px 16px;\n  border-bottom: 1px solid #ddd; }\n\n.w3-ul li:last-child {\n  border-bottom: none; }\n\n.w3-tooltip, .w3-display-container {\n  position: relative; }\n\n.w3-tooltip .w3-text {\n  display: none; }\n\n.w3-tooltip:hover .w3-text {\n  display: inline-block; }\n\n.w3-ripple:active {\n  opacity: 0.5; }\n\n.w3-ripple {\n  transition: opacity 0s; }\n\n.w3-input {\n  padding: 8px;\n  display: block;\n  border: none;\n  border-bottom: 1px solid #ccc;\n  width: 100%; }\n\n.w3-select {\n  padding: 9px 0;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #ccc; }\n\n.w3-dropdown-click, .w3-dropdown-hover {\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n\n.w3-dropdown-hover:hover .w3-dropdown-content {\n  display: block; }\n\n.w3-dropdown-hover:first-child, .w3-dropdown-click:hover {\n  background-color: #ccc;\n  color: #000; }\n\n.w3-dropdown-hover:hover > .w3-button:first-child, .w3-dropdown-click:hover > .w3-button:first-child {\n  background-color: #ccc;\n  color: #000; }\n\n.w3-dropdown-content {\n  cursor: auto;\n  color: #000;\n  background-color: #fff;\n  display: none;\n  position: absolute;\n  min-width: 160px;\n  margin: 0;\n  padding: 0;\n  z-index: 1; }\n\n.w3-check, .w3-radio {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 6px; }\n\n.w3-sidebar {\n  height: 100%;\n  width: 200px;\n  background-color: #fff;\n  position: fixed !important;\n  z-index: 1;\n  overflow: auto; }\n\n.w3-bar-block .w3-dropdown-hover, .w3-bar-block .w3-dropdown-click {\n  width: 100%; }\n\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content, .w3-bar-block .w3-dropdown-click .w3-dropdown-content {\n  min-width: 100%; }\n\n.w3-bar-block .w3-dropdown-hover .w3-button, .w3-bar-block .w3-dropdown-click .w3-button {\n  width: 100%;\n  text-align: left;\n  padding: 8px 16px; }\n\n.w3-main, #main {\n  transition: margin-left .4s; }\n\n.w3-modal {\n  z-index: 3;\n  display: none;\n  padding-top: 100px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.w3-modal-content {\n  margin: auto;\n  background-color: #fff;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  width: 600px; }\n\n.w3-bar {\n  width: 100%;\n  overflow: hidden; }\n\n.w3-center .w3-bar {\n  display: inline-block;\n  width: auto; }\n\n.w3-bar .w3-bar-item {\n  padding: 8px 16px;\n  float: left;\n  width: auto;\n  border: none;\n  display: block;\n  outline: 0; }\n\n.w3-bar .w3-dropdown-hover, .w3-bar .w3-dropdown-click {\n  position: static;\n  float: left; }\n\n.w3-bar .w3-button {\n  white-space: normal; }\n\n.w3-bar-block .w3-bar-item {\n  width: 100%;\n  display: block;\n  padding: 8px 16px;\n  text-align: left;\n  border: none;\n  white-space: normal;\n  float: none;\n  outline: 0; }\n\n.w3-bar-block.w3-center .w3-bar-item {\n  text-align: center; }\n\n.w3-block {\n  display: block;\n  width: 100%; }\n\n.w3-responsive {\n  display: block;\n  overflow-x: auto; }\n\n.w3-container:after, .w3-container:before, .w3-panel:after, .w3-panel:before, .w3-row:after, .w3-row:before, .w3-row-padding:after, .w3-row-padding:before,\n.w3-cell-row:before, .w3-cell-row:after, .w3-clear:after, .w3-clear:before, .w3-bar:before, .w3-bar:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.w3-col, .w3-half, .w3-third, .w3-twothird, .w3-threequarter, .w3-quarter {\n  float: left;\n  width: 100%; }\n\n.w3-col.s1 {\n  width: 8.33333%; }\n\n.w3-col.s2 {\n  width: 16.66666%; }\n\n.w3-col.s3 {\n  width: 24.99999%; }\n\n.w3-col.s4 {\n  width: 33.33333%; }\n\n.w3-col.s5 {\n  width: 41.66666%; }\n\n.w3-col.s6 {\n  width: 49.99999%; }\n\n.w3-col.s7 {\n  width: 58.33333%; }\n\n.w3-col.s8 {\n  width: 66.66666%; }\n\n.w3-col.s9 {\n  width: 74.99999%; }\n\n.w3-col.s10 {\n  width: 83.33333%; }\n\n.w3-col.s11 {\n  width: 91.66666%; }\n\n.w3-col.s12 {\n  width: 99.99999%; }\n\n@media (min-width: 601px) {\n  .w3-col.m1 {\n    width: 8.33333%; }\n  .w3-col.m2 {\n    width: 16.66666%; }\n  .w3-col.m3, .w3-quarter {\n    width: 24.99999%; }\n  .w3-col.m4, .w3-third {\n    width: 33.33333%; }\n  .w3-col.m5 {\n    width: 41.66666%; }\n  .w3-col.m6, .w3-half {\n    width: 49.99999%; }\n  .w3-col.m7 {\n    width: 58.33333%; }\n  .w3-col.m8, .w3-twothird {\n    width: 66.66666%; }\n  .w3-col.m9, .w3-threequarter {\n    width: 74.99999%; }\n  .w3-col.m10 {\n    width: 83.33333%; }\n  .w3-col.m11 {\n    width: 91.66666%; }\n  .w3-col.m12 {\n    width: 99.99999%; } }\n\n@media (min-width: 993px) {\n  .w3-col.l1 {\n    width: 8.33333%; }\n  .w3-col.l2 {\n    width: 16.66666%; }\n  .w3-col.l3 {\n    width: 24.99999%; }\n  .w3-col.l4 {\n    width: 33.33333%; }\n  .w3-col.l5 {\n    width: 41.66666%; }\n  .w3-col.l6 {\n    width: 49.99999%; }\n  .w3-col.l7 {\n    width: 58.33333%; }\n  .w3-col.l8 {\n    width: 66.66666%; }\n  .w3-col.l9 {\n    width: 74.99999%; }\n  .w3-col.l10 {\n    width: 83.33333%; }\n  .w3-col.l11 {\n    width: 91.66666%; }\n  .w3-col.l12 {\n    width: 99.99999%; } }\n\n.w3-rest {\n  overflow: hidden; }\n\n.w3-stretch {\n  margin-left: -16px;\n  margin-right: -16px; }\n\n.w3-content, .w3-auto {\n  margin-left: auto;\n  margin-right: auto; }\n\n.w3-content {\n  max-width: 980px; }\n\n.w3-auto {\n  max-width: 1140px; }\n\n.w3-cell-row {\n  display: table;\n  width: 100%; }\n\n.w3-cell {\n  display: table-cell; }\n\n.w3-cell-top {\n  vertical-align: top; }\n\n.w3-cell-middle {\n  vertical-align: middle; }\n\n.w3-cell-bottom {\n  vertical-align: bottom; }\n\n.w3-hide {\n  display: none !important; }\n\n.w3-show-block, .w3-show {\n  display: block !important; }\n\n.w3-show-inline-block {\n  display: inline-block !important; }\n\n@media (max-width: 1205px) {\n  .w3-auto {\n    max-width: 95%; } }\n\n@media (max-width: 600px) {\n  .w3-modal-content {\n    margin: 0 10px;\n    width: auto !important; }\n  .w3-modal {\n    padding-top: 30px; }\n  .w3-dropdown-hover.w3-mobile .w3-dropdown-content, .w3-dropdown-click.w3-mobile .w3-dropdown-content {\n    position: relative; }\n  .w3-hide-small {\n    display: none !important; }\n  .w3-mobile {\n    display: block;\n    width: 100% !important; }\n  .w3-bar-item.w3-mobile, .w3-dropdown-hover.w3-mobile, .w3-dropdown-click.w3-mobile {\n    text-align: center; }\n  .w3-dropdown-hover.w3-mobile, .w3-dropdown-hover.w3-mobile .w3-btn, .w3-dropdown-hover.w3-mobile .w3-button, .w3-dropdown-click.w3-mobile, .w3-dropdown-click.w3-mobile .w3-btn, .w3-dropdown-click.w3-mobile .w3-button {\n    width: 100%; } }\n\n@media (max-width: 768px) {\n  .w3-modal-content {\n    width: 500px; }\n  .w3-modal {\n    padding-top: 50px; } }\n\n@media (min-width: 993px) {\n  .w3-modal-content {\n    width: 900px; }\n  .w3-hide-large {\n    display: none !important; }\n  .w3-sidebar.w3-collapse {\n    display: block !important; } }\n\n@media (max-width: 992px) and (min-width: 601px) {\n  .w3-hide-medium {\n    display: none !important; } }\n\n@media (max-width: 992px) {\n  .w3-sidebar.w3-collapse {\n    display: none; }\n  .w3-main {\n    margin-left: 0 !important;\n    margin-right: 0 !important; }\n  .w3-auto {\n    max-width: 100%; } }\n\n.w3-top, .w3-bottom {\n  position: fixed;\n  width: 100%;\n  z-index: 1; }\n\n.w3-top {\n  top: 0; }\n\n.w3-bottom {\n  bottom: 0; }\n\n.w3-overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2; }\n\n.w3-display-topleft {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.w3-display-topright {\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.w3-display-bottomleft {\n  position: absolute;\n  left: 0;\n  bottom: 0; }\n\n.w3-display-bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0; }\n\n.w3-display-middle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.w3-display-left {\n  position: absolute;\n  top: 50%;\n  left: 0%;\n  transform: translate(0%, -50%);\n  -ms-transform: translate(0%, -50%); }\n\n.w3-display-right {\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  -ms-transform: translate(0%, -50%); }\n\n.w3-display-topmiddle {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  transform: translate(-50%, 0%);\n  -ms-transform: translate(-50%, 0%); }\n\n.w3-display-bottommiddle {\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translate(-50%, 0%);\n  -ms-transform: translate(-50%, 0%); }\n\n.w3-display-container:hover .w3-display-hover {\n  display: block; }\n\n.w3-display-container:hover span.w3-display-hover {\n  display: inline-block; }\n\n.w3-display-hover {\n  display: none; }\n\n.w3-display-position {\n  position: absolute; }\n\n.w3-circle {\n  border-radius: 50%; }\n\n.w3-round-small {\n  border-radius: 2px; }\n\n.w3-round, .w3-round-medium {\n  border-radius: 4px; }\n\n.w3-round-large {\n  border-radius: 8px; }\n\n.w3-round-xlarge {\n  border-radius: 16px; }\n\n.w3-round-xxlarge {\n  border-radius: 32px; }\n\n.w3-row-padding, .w3-row-padding > .w3-half, .w3-row-padding > .w3-third, .w3-row-padding > .w3-twothird, .w3-row-padding > .w3-threequarter, .w3-row-padding > .w3-quarter, .w3-row-padding > .w3-col {\n  padding: 0 8px; }\n\n.w3-container, .w3-panel {\n  padding: 0.01em 16px; }\n\n.w3-panel {\n  margin-top: 16px;\n  margin-bottom: 16px; }\n\n.w3-code, .w3-codespan {\n  font-family: Consolas,\"courier new\";\n  font-size: 16px; }\n\n.w3-code {\n  width: auto;\n  background-color: #fff;\n  padding: 8px 12px;\n  border-left: 4px solid #4CAF50;\n  word-wrap: break-word; }\n\n.w3-codespan {\n  color: crimson;\n  background-color: #f1f1f1;\n  padding-left: 4px;\n  padding-right: 4px;\n  font-size: 110%; }\n\n.w3-card, .w3-card-2 {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.w3-card-4, .w3-hover-shadow:hover {\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.w3-spin {\n  animation: w3-spin 2s infinite linear; }\n\n@keyframes w3-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(359deg); } }\n\n.w3-animate-fading {\n  animation: fading 10s infinite; }\n\n@keyframes fading {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.w3-animate-opacity {\n  animation: opac 0.8s; }\n\n@keyframes opac {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.w3-animate-top {\n  position: relative;\n  animation: animatetop 0.4s; }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n.w3-animate-left {\n  position: relative;\n  animation: animateleft 0.4s; }\n\n@keyframes animateleft {\n  from {\n    left: -300px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n\n.w3-animate-right {\n  position: relative;\n  animation: animateright 0.4s; }\n\n@keyframes animateright {\n  from {\n    right: -300px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n\n.w3-animate-bottom {\n  position: relative;\n  animation: animatebottom 0.4s; }\n\n@keyframes animatebottom {\n  from {\n    bottom: -300px;\n    opacity: 0; }\n  to {\n    bottom: 0;\n    opacity: 1; } }\n\n.w3-animate-zoom {\n  animation: animatezoom 0.6s; }\n\n@keyframes animatezoom {\n  from {\n    transform: scale(0); }\n  to {\n    transform: scale(1); } }\n\n.w3-animate-input {\n  transition: width 0.4s ease-in-out; }\n\n.w3-animate-input:focus {\n  width: 100% !important; }\n\n.w3-opacity, .w3-hover-opacity:hover {\n  opacity: 0.60; }\n\n.w3-opacity-off, .w3-hover-opacity-off:hover {\n  opacity: 1; }\n\n.w3-opacity-max {\n  opacity: 0.25; }\n\n.w3-opacity-min {\n  opacity: 0.75; }\n\n.w3-greyscale-max, .w3-grayscale-max, .w3-hover-greyscale:hover, .w3-hover-grayscale:hover {\n  filter: grayscale(100%); }\n\n.w3-greyscale, .w3-grayscale {\n  filter: grayscale(75%); }\n\n.w3-greyscale-min, .w3-grayscale-min {\n  filter: grayscale(50%); }\n\n.w3-sepia {\n  filter: sepia(75%); }\n\n.w3-sepia-max, .w3-hover-sepia:hover {\n  filter: sepia(100%); }\n\n.w3-sepia-min {\n  filter: sepia(50%); }\n\n.w3-tiny {\n  font-size: 10px !important; }\n\n.w3-small {\n  font-size: 12px !important; }\n\n.w3-medium {\n  font-size: 15px !important; }\n\n.w3-large {\n  font-size: 18px !important; }\n\n.w3-xlarge {\n  font-size: 24px !important; }\n\n.w3-xxlarge {\n  font-size: 36px !important; }\n\n.w3-xxxlarge {\n  font-size: 48px !important; }\n\n.w3-jumbo {\n  font-size: 64px !important; }\n\n.w3-left-align {\n  text-align: left !important; }\n\n.w3-right-align {\n  text-align: right !important; }\n\n.w3-justify {\n  text-align: justify !important; }\n\n.w3-center {\n  text-align: center !important; }\n\n.w3-border-0 {\n  border: 0 !important; }\n\n.w3-border {\n  border: 1px solid #ccc !important; }\n\n.w3-border-top {\n  border-top: 1px solid #ccc !important; }\n\n.w3-border-bottom {\n  border-bottom: 1px solid #ccc !important; }\n\n.w3-border-left {\n  border-left: 1px solid #ccc !important; }\n\n.w3-border-right {\n  border-right: 1px solid #ccc !important; }\n\n.w3-topbar {\n  border-top: 6px solid #ccc !important; }\n\n.w3-bottombar {\n  border-bottom: 6px solid #ccc !important; }\n\n.w3-leftbar {\n  border-left: 6px solid #ccc !important; }\n\n.w3-rightbar {\n  border-right: 6px solid #ccc !important; }\n\n.w3-section, .w3-code {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important; }\n\n.w3-margin {\n  margin: 16px !important; }\n\n.w3-margin-top {\n  margin-top: 16px !important; }\n\n.w3-margin-bottom {\n  margin-bottom: 16px !important; }\n\n.w3-margin-left {\n  margin-left: 16px !important; }\n\n.w3-margin-right {\n  margin-right: 16px !important; }\n\n.w3-padding-small {\n  padding: 4px 8px !important; }\n\n.w3-padding {\n  padding: 8px 16px !important; }\n\n.w3-padding-large {\n  padding: 12px 24px !important; }\n\n.w3-padding-16 {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important; }\n\n.w3-padding-24 {\n  padding-top: 24px !important;\n  padding-bottom: 24px !important; }\n\n.w3-padding-32 {\n  padding-top: 32px !important;\n  padding-bottom: 32px !important; }\n\n.w3-padding-48 {\n  padding-top: 48px !important;\n  padding-bottom: 48px !important; }\n\n.w3-padding-64 {\n  padding-top: 64px !important;\n  padding-bottom: 64px !important; }\n\n.w3-left {\n  float: left !important; }\n\n.w3-right {\n  float: right !important; }\n\n.w3-button:hover {\n  color: #000 !important;\n  background-color: #ccc !important; }\n\n.w3-transparent, .w3-hover-none:hover {\n  background-color: transparent !important; }\n\n.w3-hover-none:hover {\n  box-shadow: none !important; }\n\n/* Colors */\n.w3-amber, .w3-hover-amber:hover {\n  color: #000 !important;\n  background-color: #ffc107 !important; }\n\n.w3-aqua, .w3-hover-aqua:hover {\n  color: #000 !important;\n  background-color: #00ffff !important; }\n\n.w3-blue, .w3-hover-blue:hover {\n  color: #fff !important;\n  background-color: #2196F3 !important; }\n\n.w3-light-blue, .w3-hover-light-blue:hover {\n  color: #000 !important;\n  background-color: #87CEEB !important; }\n\n.w3-brown, .w3-hover-brown:hover {\n  color: #fff !important;\n  background-color: #795548 !important; }\n\n.w3-cyan, .w3-hover-cyan:hover {\n  color: #000 !important;\n  background-color: #00bcd4 !important; }\n\n.w3-blue-grey, .w3-hover-blue-grey:hover, .w3-blue-gray, .w3-hover-blue-gray:hover {\n  color: #fff !important;\n  background-color: #607d8b !important; }\n\n.w3-green, .w3-hover-green:hover {\n  color: #fff !important;\n  background-color: #4CAF50 !important; }\n\n.w3-light-green, .w3-hover-light-green:hover {\n  color: #000 !important;\n  background-color: #8bc34a !important; }\n\n.w3-indigo, .w3-hover-indigo:hover {\n  color: #fff !important;\n  background-color: #3f51b5 !important; }\n\n.w3-khaki, .w3-hover-khaki:hover {\n  color: #000 !important;\n  background-color: #f0e68c !important; }\n\n.w3-lime, .w3-hover-lime:hover {\n  color: #000 !important;\n  background-color: #cddc39 !important; }\n\n.w3-orange, .w3-hover-orange:hover {\n  color: #000 !important;\n  background-color: #ff9800 !important; }\n\n.w3-deep-orange, .w3-hover-deep-orange:hover {\n  color: #fff !important;\n  background-color: #ff5722 !important; }\n\n.w3-pink, .w3-hover-pink:hover {\n  color: #fff !important;\n  background-color: #e91e63 !important; }\n\n.w3-purple, .w3-hover-purple:hover {\n  color: #fff !important;\n  background-color: #9c27b0 !important; }\n\n.w3-deep-purple, .w3-hover-deep-purple:hover {\n  color: #fff !important;\n  background-color: #673ab7 !important; }\n\n.w3-red, .w3-hover-red:hover {\n  color: #fff !important;\n  background-color: #f44336 !important; }\n\n.w3-sand, .w3-hover-sand:hover {\n  color: #000 !important;\n  background-color: #fdf5e6 !important; }\n\n.w3-teal, .w3-hover-teal:hover {\n  color: #fff !important;\n  background-color: #009688 !important; }\n\n.w3-yellow, .w3-hover-yellow:hover {\n  color: #000 !important;\n  background-color: #ffeb3b !important; }\n\n.w3-white, .w3-hover-white:hover {\n  color: #000 !important;\n  background-color: #fff !important; }\n\n.w3-black, .w3-hover-black:hover {\n  color: #fff !important;\n  background-color: #000 !important; }\n\n.w3-grey, .w3-hover-grey:hover, .w3-gray, .w3-hover-gray:hover {\n  color: #000 !important;\n  background-color: #9e9e9e !important; }\n\n.w3-light-grey, .w3-hover-light-grey:hover, .w3-light-gray, .w3-hover-light-gray:hover {\n  color: #000 !important;\n  background-color: #f1f1f1 !important; }\n\n.w3-dark-grey, .w3-hover-dark-grey:hover, .w3-dark-gray, .w3-hover-dark-gray:hover {\n  color: #fff !important;\n  background-color: #616161 !important; }\n\n.w3-pale-red, .w3-hover-pale-red:hover {\n  color: #000 !important;\n  background-color: #ffdddd !important; }\n\n.w3-pale-green, .w3-hover-pale-green:hover {\n  color: #000 !important;\n  background-color: #ddffdd !important; }\n\n.w3-pale-yellow, .w3-hover-pale-yellow:hover {\n  color: #000 !important;\n  background-color: #ffffcc !important; }\n\n.w3-pale-blue, .w3-hover-pale-blue:hover {\n  color: #000 !important;\n  background-color: #ddffff !important; }\n\n.w3-text-amber, .w3-hover-text-amber:hover {\n  color: #ffc107 !important; }\n\n.w3-text-aqua, .w3-hover-text-aqua:hover {\n  color: #00ffff !important; }\n\n.w3-text-blue, .w3-hover-text-blue:hover {\n  color: #2196F3 !important; }\n\n.w3-text-light-blue, .w3-hover-text-light-blue:hover {\n  color: #87CEEB !important; }\n\n.w3-text-brown, .w3-hover-text-brown:hover {\n  color: #795548 !important; }\n\n.w3-text-cyan, .w3-hover-text-cyan:hover {\n  color: #00bcd4 !important; }\n\n.w3-text-blue-grey, .w3-hover-text-blue-grey:hover, .w3-text-blue-gray, .w3-hover-text-blue-gray:hover {\n  color: #607d8b !important; }\n\n.w3-text-green, .w3-hover-text-green:hover {\n  color: #4CAF50 !important; }\n\n.w3-text-light-green, .w3-hover-text-light-green:hover {\n  color: #8bc34a !important; }\n\n.w3-text-indigo, .w3-hover-text-indigo:hover {\n  color: #3f51b5 !important; }\n\n.w3-text-khaki, .w3-hover-text-khaki:hover {\n  color: #b4aa50 !important; }\n\n.w3-text-lime, .w3-hover-text-lime:hover {\n  color: #cddc39 !important; }\n\n.w3-text-orange, .w3-hover-text-orange:hover {\n  color: #ff9800 !important; }\n\n.w3-text-deep-orange, .w3-hover-text-deep-orange:hover {\n  color: #ff5722 !important; }\n\n.w3-text-pink, .w3-hover-text-pink:hover {\n  color: #e91e63 !important; }\n\n.w3-text-purple, .w3-hover-text-purple:hover {\n  color: #9c27b0 !important; }\n\n.w3-text-deep-purple, .w3-hover-text-deep-purple:hover {\n  color: #673ab7 !important; }\n\n.w3-text-red, .w3-hover-text-red:hover {\n  color: #f44336 !important; }\n\n.w3-text-sand, .w3-hover-text-sand:hover {\n  color: #fdf5e6 !important; }\n\n.w3-text-teal, .w3-hover-text-teal:hover {\n  color: #009688 !important; }\n\n.w3-text-yellow, .w3-hover-text-yellow:hover {\n  color: #d2be0e !important; }\n\n.w3-text-white, .w3-hover-text-white:hover {\n  color: #fff !important; }\n\n.w3-text-black, .w3-hover-text-black:hover {\n  color: #000 !important; }\n\n.w3-text-grey, .w3-hover-text-grey:hover, .w3-text-gray, .w3-hover-text-gray:hover {\n  color: #757575 !important; }\n\n.w3-text-light-grey, .w3-hover-text-light-grey:hover, .w3-text-light-gray, .w3-hover-text-light-gray:hover {\n  color: #f1f1f1 !important; }\n\n.w3-text-dark-grey, .w3-hover-text-dark-grey:hover, .w3-text-dark-gray, .w3-hover-text-dark-gray:hover {\n  color: #3a3a3a !important; }\n\n.w3-border-amber, .w3-hover-border-amber:hover {\n  border-color: #ffc107 !important; }\n\n.w3-border-aqua, .w3-hover-border-aqua:hover {\n  border-color: #00ffff !important; }\n\n.w3-border-blue, .w3-hover-border-blue:hover {\n  border-color: #2196F3 !important; }\n\n.w3-border-light-blue, .w3-hover-border-light-blue:hover {\n  border-color: #87CEEB !important; }\n\n.w3-border-brown, .w3-hover-border-brown:hover {\n  border-color: #795548 !important; }\n\n.w3-border-cyan, .w3-hover-border-cyan:hover {\n  border-color: #00bcd4 !important; }\n\n.w3-border-blue-grey, .w3-hover-border-blue-grey:hover, .w3-border-blue-gray, .w3-hover-border-blue-gray:hover {\n  border-color: #607d8b !important; }\n\n.w3-border-green, .w3-hover-border-green:hover {\n  border-color: #4CAF50 !important; }\n\n.w3-border-light-green, .w3-hover-border-light-green:hover {\n  border-color: #8bc34a !important; }\n\n.w3-border-indigo, .w3-hover-border-indigo:hover {\n  border-color: #3f51b5 !important; }\n\n.w3-border-khaki, .w3-hover-border-khaki:hover {\n  border-color: #f0e68c !important; }\n\n.w3-border-lime, .w3-hover-border-lime:hover {\n  border-color: #cddc39 !important; }\n\n.w3-border-orange, .w3-hover-border-orange:hover {\n  border-color: #ff9800 !important; }\n\n.w3-border-deep-orange, .w3-hover-border-deep-orange:hover {\n  border-color: #ff5722 !important; }\n\n.w3-border-pink, .w3-hover-border-pink:hover {\n  border-color: #e91e63 !important; }\n\n.w3-border-purple, .w3-hover-border-purple:hover {\n  border-color: #9c27b0 !important; }\n\n.w3-border-deep-purple, .w3-hover-border-deep-purple:hover {\n  border-color: #673ab7 !important; }\n\n.w3-border-red, .w3-hover-border-red:hover {\n  border-color: #f44336 !important; }\n\n.w3-border-sand, .w3-hover-border-sand:hover {\n  border-color: #fdf5e6 !important; }\n\n.w3-border-teal, .w3-hover-border-teal:hover {\n  border-color: #009688 !important; }\n\n.w3-border-yellow, .w3-hover-border-yellow:hover {\n  border-color: #ffeb3b !important; }\n\n.w3-border-white, .w3-hover-border-white:hover {\n  border-color: #fff !important; }\n\n.w3-border-black, .w3-hover-border-black:hover {\n  border-color: #000 !important; }\n\n.w3-border-grey, .w3-hover-border-grey:hover, .w3-border-gray, .w3-hover-border-gray:hover {\n  border-color: #9e9e9e !important; }\n\n.w3-border-light-grey, .w3-hover-border-light-grey:hover, .w3-border-light-gray, .w3-hover-border-light-gray:hover {\n  border-color: #f1f1f1 !important; }\n\n.w3-border-dark-grey, .w3-hover-border-dark-grey:hover, .w3-border-dark-gray, .w3-hover-border-dark-gray:hover {\n  border-color: #616161 !important; }\n\n.w3-border-pale-red, .w3-hover-border-pale-red:hover {\n  border-color: #ffe7e7 !important; }\n\n.w3-border-pale-green, .w3-hover-border-pale-green:hover {\n  border-color: #e7ffe7 !important; }\n\n.w3-border-pale-yellow, .w3-hover-border-pale-yellow:hover {\n  border-color: #ffffcc !important; }\n\n.w3-border-pale-blue, .w3-hover-border-pale-blue:hover {\n  border-color: #e7ffff !important; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../styles/material-icon.scss":
/*!************************************!*\
  !*** ../styles/material-icon.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--9-1!../node_modules/postcss-loader/src??ref--9-2!../node_modules/sass-loader/lib/loader.js!./material-icon.scss */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!../styles/material-icon.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../styles/style.scss":
/*!****************************!*\
  !*** ../styles/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--9-1!../node_modules/postcss-loader/src??ref--9-2!../node_modules/sass-loader/lib/loader.js!./style.scss */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!../styles/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../styles/w3.css":
/*!************************!*\
  !*** ../styles/w3.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/lib/loader.js!./w3.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!../styles/w3.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./SiteInformation.tsx":
/*!*****************************!*\
  !*** ./SiteInformation.tsx ***!
  \*****************************/
/*! exports provided: SiteInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteInformation", function() { return SiteInformation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _styles_w3_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/w3.css */ "../styles/w3.css");
/* harmony import */ var _styles_w3_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_w3_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.scss */ "../styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_material_icon_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/material-icon.scss */ "../styles/material-icon.scss");
/* harmony import */ var _styles_material_icon_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_material_icon_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





var SiteInformation = function SiteInformation(props) {
  var _a, _b, _c, _d;

  var data = props.data,
      dataGetter = function dataGetter(dataName) {
    var _a;

    return (_a = data.series[0].fields.find(function (_) {
      return _.name === dataName;
    })) === null || _a === void 0 ? void 0 : _a.values.get(0);
  },
      latitude = dataGetter('latitude'),
      longitude = dataGetter('longitude'),
      name = dataGetter('name'),
      region = dataGetter('region'),
      lastConnected = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(new Date(dataGetter('last_connected')));

  var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(), 2),
      state = _e[0],
      setState = _e[1];

  if (typeof state === 'undefined') {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly,daily&units=metric&appid=1f7fd020655b6b19810fbe05adc5b784").then(function (_) {
      return _.json();
    }).then(function (res) {
      return setState(res);
    });
  }

  var _f = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false), 2),
      cssHasLoaded = _f[0],
      setStateCss = _f[1];

  setTimeout(function () {
    return setStateCss(true);
  }, 1000);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w3-display-container tr-full"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w3-display-middle tr-wd-100"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w3-row"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w3-half"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    style: {
      margin: 'auto'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    style: {
      width: 50,
      verticalAlign: 'top'
    }
  }, cssHasLoaded ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "material-icons md-36 w3-text-pink"
  }, "location_on") : null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w3-margin-bottom"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    style: {
      margin: 0
    }
  }, String(name).replace('Site', '')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "w3-text-blue-gray"
  }, region)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      display: 'flex',
      verticalAlign: 'middle'
    }
  }, cssHasLoaded ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "material-icons w3-text-light-green"
  }, "fiber_manual_record") : null, "Last Update: ", lastConnected))))), state ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w3-half"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    style: {
      margin: 'auto'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    style: {
      width: 130,
      verticalAlign: 'top'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w3-margin-right w3-center"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    style: {
      position: 'relative',
      marginTop: -20
    },
    src: state ? "http://openweathermap.org/img/wn/" + state.current.weather[0].icon + "@2x.png" : ''
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
    style: {
      margin: -20
    }
  }, (_a = state) === null || _a === void 0 ? void 0 : _a.current.weather[0].main))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    className: "tr-big-value"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", null, (_b = state) === null || _b === void 0 ? void 0 : _b.current.temp, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, " \xB0C")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w3-section"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w3-text-blue-gray w3-large",
    style: {
      display: 'flex',
      verticalAlign: 'middle'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "material-icons w3-margin-right"
  }, "grain"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, (_c = state) === null || _c === void 0 ? void 0 : _c.current.humidity, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "w3-medium"
  }, " %"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w3-text-blue-gray w3-large",
    style: {
      display: 'flex',
      verticalAlign: 'middle'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "material-icons w3-margin-right"
  }, "toys"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, (_d = state) === null || _d === void 0 ? void 0 : _d.current.wind_speed, " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "w3-medium"
  }, "m/s")))))))) : null)));
};

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SiteInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SiteInformation */ "./SiteInformation.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_SiteInformation__WEBPACK_IMPORTED_MODULE_1__["SiteInformation"]).useFieldConfig();

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map