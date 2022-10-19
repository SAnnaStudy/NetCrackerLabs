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

/***/ "./scr/1/task1.js":
/*!************************!*\
  !*** ./scr/1/task1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeNum\": () => (/* binding */ changeNum)\n/* harmony export */ });\nfunction changeNum(){\r\n    alert(\"Имеются два числа, необходимо поменях их значения местами: a=3, b=2\");\r\n    var c;\r\n    var a = 3;\r\n    var b = 2;\r\n    c = a;\r\n    a = b;\r\n    b = c;\r\n    alert(\"Пезультат, полученный с помощью дополнительной переменной: a=\" + a + \", b=\" + b);\r\n    a = a + b;\r\n    b = a - b;\r\n    a = a - b;\r\n    alert(\"Поменяем их обратно. Вот результат, полученный без дополнительной переменной: a=\" + a + \", b=\" + b);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://package/./scr/1/task1.js?");

/***/ }),

/***/ "./scr/2/task2.js":
/*!************************!*\
  !*** ./scr/2/task2.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"helloJava\": () => (/* binding */ helloJava)\n/* harmony export */ });\n/* harmony import */ var _1_task1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../1/task1.js */ \"./scr/1/task1.js\");\nfunction helloJava(){\r\n    alert(\"Привет, JavaScript\");\r\n}\r\n\n\n//# sourceURL=webpack://package/./scr/2/task2.js?");

/***/ }),

/***/ "./scr/3/task3.js":
/*!************************!*\
  !*** ./scr/3/task3.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"yourHello\": () => (/* binding */ yourHello)\n/* harmony export */ });\n/* harmony import */ var _2_task2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../2/task2.js */ \"./scr/2/task2.js\");\nfunction yourHello(){\r\n    var userName = prompt(\"Введите ваше имя\");\r\n    while(userName === ' ' || userName === ''){\r\n        userName = prompt(\"Введите ваше имя\");\r\n  }\r\nuserName = userName.toLowerCase();\r\nString.prototype.capitalize = function() {\r\n    return this.charAt(0).toUpperCase() + this.slice(1);\r\n}\r\nuserName = userName.capitalize();;\r\n    alert(\"Вас зовут \" + userName);\r\nvar userAge = prompt(\"Введите ваш возраст\");\r\n    while(userAge === '0' || userAge === ''|| userAge < 0){\r\n          userAge = prompt(\"Введите корректный возраст\");\r\n    }\r\n        alert(\"Привет, \" + userName + \", тебе уже \"  + userAge + \" лет!\");\r\n}\r\n\n\n//# sourceURL=webpack://package/./scr/3/task3.js?");

/***/ }),

/***/ "./scr/4/task4.js":
/*!************************!*\
  !*** ./scr/4/task4.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortArr\": () => (/* binding */ sortArr)\n/* harmony export */ });\n/* harmony import */ var _3_task3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../3/task3.js */ \"./scr/3/task3.js\");\nfunction sortArr(){\r\n    const arr = [];\r\nvar desc = \"desc\";\r\nvar asc = \"asc\";\r\nfor(var i = 0; i < 10; i++){\r\n    arr.push(Math.round(Math.random() * 100)); \r\n}\r\nfunction sumElem(mas){\r\n    let sum = 0;\r\n    for(var i = 0; i < 10; i++){\r\n        if(mas[i] %2!=0){\r\n            sum += i*i;\r\n        }\r\n    }\r\n    return sum;\r\n}\r\n\r\nfunction sortirovka(mas, typeSort) {\r\n     mas.sort(function(a,b) { return typeSort == \"desc\" ? a - b : b - a; });\r\n    return mas;\r\n}\r\nalert(\"Сумма квадратов всех нечетных элементов в массиве: \" + arr);\r\nsumElem();\r\nalert(\"Массив до сортировки \" + arr);\r\nsortirovka(arr, desc);\r\nalert(\"Массив после сортировки по возрастанию \" + arr);\r\nsortirovka(arr, asc);\r\nalert(\"Массив после сортировки по убыванию \" + arr);\r\n}\r\n\n\n//# sourceURL=webpack://package/./scr/4/task4.js?");

/***/ }),

/***/ "./scr/5/task5.js":
/*!************************!*\
  !*** ./scr/5/task5.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fizzbuzz\": () => (/* binding */ fizzbuzz)\n/* harmony export */ });\n/* harmony import */ var _4_task4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../4/task4.js */ \"./scr/4/task4.js\");\nfunction fizzbuzz(){\r\n    for(var i = 1; i < 101; i++){\r\n    if(i % 3 === 0 && i % 5 === 0)\r\n        {\r\n            alert('FizzBuzz');\r\n        }\r\n    else if(i % 3 === 0)\r\n        {\r\n             alert('Fizz');\r\n        }\r\n    else if(i % 5 === 0)\r\n        {\r\n             alert('Buzz');\r\n        }\r\n    else  alert(i);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://package/./scr/5/task5.js?");

/***/ }),

/***/ "./scr/6/task6.js":
/*!************************!*\
  !*** ./scr/6/task6.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"palindrom\": () => (/* binding */ palindrom)\n/* harmony export */ });\n/* harmony import */ var _5_task5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../5/task5.js */ \"./scr/5/task5.js\");\nfunction palindrom(){\r\n    var word = prompt(\"Введите слово\");\r\nword = word.toLowerCase();\r\nvar word2 = word.split('').reverse().join('');\r\nif(word2 == word)\r\n    {\r\n        alert(word + ' палиндром!');\r\n    }\r\nelse\r\n    {\r\n        alert(word + ' не палиндром!');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://package/./scr/6/task6.js?");

/***/ }),

/***/ "./scr/7/task7.js":
/*!************************!*\
  !*** ./scr/7/task7.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myGame\": () => (/* binding */ myGame)\n/* harmony export */ });\n/* harmony import */ var _6_task6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../6/task6.js */ \"./scr/6/task6.js\");\nfunction myGame(){\r\n    document.getElementById('start').hidden = true;\r\n    document.getElementById('answerSubmit').style.display = 'block';\r\n    document.getElementById('answerField').style.display = 'block';\r\n    const regex = /[0-9]|\\./;\r\n    const randomNumber = Math.floor(Math.random() * 1000) + 1;\r\n    let count = 0;\r\n    const answerField = document.querySelector('.answerField');\r\n    var answerSubmit = document.querySelector('.answerSubmit');\r\n    function checkAnswer() {\r\n        let userAnswer = Number(answerField.value);\r\n        if (!regex.test(userAnswer)){\r\n            alert('Введите число!');\r\n        }\r\n        else{\r\n            count++;\r\n            if (userAnswer > randomNumber){\r\n                alert('Искомое число меньше!');\r\n            } else if (userAnswer < randomNumber){\r\n                alert('Искомое число больше!');\r\n            } else{\r\n                if (window.confirm('Вы угадали! Количество попыток: ' + count + '. Начать заново?')) {\r\n                    myGame();\r\n                }\r\n                else{ window.close();}\r\n            }\r\n            answerField.value = '';\r\n        }\r\n    }\r\n    answerSubmit.addEventListener('click', checkAnswer);\r\n}\r\n\n\n//# sourceURL=webpack://package/./scr/7/task7.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scr/7/task7.js");
/******/ 	
/******/ })()
;