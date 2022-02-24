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

/***/ "./src/ts/class/Activity.ts":
/*!**********************************!*\
  !*** ./src/ts/class/Activity.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Activity = void 0;\r\nclass Activity {\r\n    constructor() {\r\n        this.tasks = [];\r\n    }\r\n    addTask(task) {\r\n        return this.tasks.push(task);\r\n    }\r\n    showTask(tasks, container) {\r\n        let taskHTML = ``;\r\n        for (let task of tasks) {\r\n            console.log(task);\r\n            taskHTML += `\r\n      <div class=\"elemento\">\r\n        <div class=\"contenedor-descripcion\" id=\"${task.id}\">\r\n          <i class=\"fas fa-play\"></i>\r\n          <p id=\"remove-task\">${task.name}</p>\r\n        </div>\r\n        <div class=\"contenedor-estado\">\r\n          <select class=\"estado\">\r\n            <option value=\"Realizado\" selected>Realizado</option>\r\n            <option value=\"Pendiente\" selected>Pendiente</option>\r\n          </select>\r\n        </div>\r\n      </div>`;\r\n        }\r\n        document.getElementById(container).innerHTML = taskHTML;\r\n    }\r\n    removeTask(id) {\r\n        let idRemove = this.tasks.findIndex(task => task.id == id);\r\n        --idRemove;\r\n        this.tasks.splice(idRemove, 1);\r\n    }\r\n}\r\nexports.Activity = Activity;\r\n\n\n//# sourceURL=webpack://to_do_list_v3/./src/ts/class/Activity.ts?");

/***/ }),

/***/ "./src/ts/class/Event.ts":
/*!*******************************!*\
  !*** ./src/ts/class/Event.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Event = void 0;\r\nclass Event {\r\n    click(btn, event) {\r\n        document.getElementById(btn).addEventListener('click', event);\r\n    }\r\n    getValue(element) {\r\n        return document.querySelector(element).value;\r\n    }\r\n    clearForm(element) {\r\n        let form = document.getElementById(element);\r\n        form.reset();\r\n    }\r\n    getContainer(element) {\r\n        return document.getElementById(element);\r\n    }\r\n}\r\nexports.Event = Event;\r\n\n\n//# sourceURL=webpack://to_do_list_v3/./src/ts/class/Event.ts?");

/***/ }),

/***/ "./src/ts/class/Task.ts":
/*!******************************!*\
  !*** ./src/ts/class/Task.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Task = void 0;\r\nclass Task {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.id = ++Task.countOfActivity;\r\n    }\r\n}\r\nexports.Task = Task;\r\nTask.countOfActivity = 0;\r\n\n\n//# sourceURL=webpack://to_do_list_v3/./src/ts/class/Task.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Activity_1 = __webpack_require__(/*! ./class/Activity */ \"./src/ts/class/Activity.ts\");\r\nconst Event_1 = __webpack_require__(/*! ./class/Event */ \"./src/ts/class/Event.ts\");\r\nconst Task_1 = __webpack_require__(/*! ./class/Task */ \"./src/ts/class/Task.ts\");\r\n(function (Activity, Event) {\r\n    Event.click('add-task', agregar);\r\n    let contenedor = Event.getContainer('list');\r\n    console.log(contenedor);\r\n    function agregar() {\r\n        let taskName = Event.getValue('#taskName');\r\n        let task = new Task_1.Task(taskName);\r\n        if (taskName == '') {\r\n            console.log('Input your task');\r\n        }\r\n        else {\r\n            Activity.addTask(task);\r\n            Activity.showTask(Activity.tasks, 'list');\r\n            Event.clearForm('form');\r\n        }\r\n        if (contenedor.hasChildNodes()) {\r\n            Event.click(\"remove-task\", eliminar);\r\n            // let element = document.getElementById(\"remove-task\");\r\n            // element.onclick = eliminar;\r\n            function eliminar() {\r\n                //let containerElement = element.parentNode;\r\n                let id = task.id;\r\n                Activity.removeTask(id);\r\n                Activity.showTask(Activity.tasks, 'list');\r\n            }\r\n        }\r\n    }\r\n})(new Activity_1.Activity, new Event_1.Event);\r\n\n\n//# sourceURL=webpack://to_do_list_v3/./src/ts/main.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;