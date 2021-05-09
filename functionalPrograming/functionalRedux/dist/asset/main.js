/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"damage\": () => (/* binding */ damage),\n/* harmony export */   \"repair\": () => (/* binding */ repair)\n/* harmony export */ });\nfunction damage ( amount ){\n  return { \n    type: DAMAGE_SHIELD,\n    amount: amount\n  }\n};\n\nfunction repair ( amount ){\n    return { \n        type: REPAIR_SHIELD,\n        amount: amount\n  }\n}\n\n//# sourceURL=webpack://functionalredux/./src/actions/index.js?");

/***/ }),

/***/ "./src/apps.js":
/*!*********************!*\
  !*** ./src/apps.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\n\n\n//reducer.js\n\n// Image that you are creating an app to control a spaceship that uses Redux \n// We are building out the feature to control shields, and in this exercise we are writing the Shield reducer\n// We want to handle the following types of events: damage shield (a reduction in sheild level) and repair shield (increase shield level)\n\n// Remember that every type of event is boiled down to a single ACTION, we import the ones we need from the actions file\n// also notice that the actions are all caps because they are CONSTANT values, or, immutable values\n\n\n// We set an initial state so that there is a value in state available, even before any actions have occured\nconst initialState = {\n\tshieldLevel: 100,\n}\n\n// the reducer takes in the current state (if available - if not then it defaults to the initial state) and an action\nconst shieldsReducer = (state = initialState, action) => {\n    switch (action.type) {\n        case _actions__WEBPACK_IMPORTED_MODULE_0__.DAMAGE_SHIELD:\n\t\t\n\t\t\t// YOUR TURN: if the action object has a property called \"amount\", use destructuring to save that value to a const\n\t\t\t// YOUR CODE HERE\n            const { amount } = action;\n            let { shieldLevel } = state\n\n            // YOUR TURN: You now have the shield level from state and amount of change from the action. Given that this is the DAMAGE_SHIELD reducer, write the logic to reflect what should happen\n\t\t\t// YOUR CODE HERE\n            shieldLevel -= amount\n\t\t\t\n            return {\n                ...state,\n                shieldLevel,\n            }\n\n        case _actions__WEBPACK_IMPORTED_MODULE_0__.REPAIR_SHIELD:\n            \n\t\t\t// YOUR TURN: Using the reducer above as a template, fill in the contents of the REPAIR_SHIELD reducer\n\n            // commenting the below 2 line\n            // to run file\n            // const { amount } = action;\n            // let { shieldLevel } = state;\n\n            shieldLevel += amount\n\t\t\t\n            return {\n                ...state,\n                shieldLevel,\n            }\n    }\n}\n\n//# sourceURL=webpack://functionalredux/./src/apps.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/apps.js");
/******/ 	
/******/ })()
;