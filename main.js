(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _move_selector_main_move_selector_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./move-selector-main/move-selector-main.component */ "./src/app/move-selector-main/move-selector-main.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    { path: 'move-selector', component: _move_selector_main_move_selector_main_component__WEBPACK_IMPORTED_MODULE_1__["MoveSelectorMainComponent"] },
    { path: '', redirectTo: '/move-selector', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{ title }}\r\n  </h1>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '寶可夢工具';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _move_selector_main_move_selector_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./move-selector-main/move-selector-main.component */ "./src/app/move-selector-main/move-selector-main.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _move_selector_main_move_selector_main_component__WEBPACK_IMPORTED_MODULE_5__["MoveSelectorMainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/move-selector-main/move-selector-main.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/move-selector-main/move-selector-main.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"move-main\">\r\n  <div class=\"card-wrap\">\r\n    <div class=\"card-header\">👍</div>\r\n    <div class=\"type-selector\">\r\n      <div class=\"type-tag\" *ngFor=\"let type of getTypes()\" [ngStyle]=\"{'background': getColor(type)}\"\r\n        (click)=\"toggleSelect(type)\">\r\n        <div class=\"type-selected\" [ngStyle]=\"{'background': getSelectedDotColor(type)}\"></div>\r\n        <div class=\"type-text\">{{type.chinese}}</div>\r\n      </div>\r\n      <div class=\"type-tag reset unset-grid\" (click)=\"resetTypes()\">\r\n        <div class=\"type-text\">重置</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-wrap\">\r\n    <div class=\"card-header\">🔮</div>\r\n    <div class=\"weaknesses-result\">\r\n      <div class=\"type-tag unset-grid\" *ngFor=\"let type of getTypes()\"\r\n        [ngStyle]=\"{'background': getEffectiveColor(type)}\">\r\n        <div class=\"type-text\">{{type.chinese}}x{{getEffectiveMultiplier(type)}}</div>\r\n      </div>\r\n      <div class=\"type-tag reset unset-grid\" (click)=\"resetTypes()\">\r\n        <div class=\"type-text\">重置</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-wrap\">\r\n    <div class=\"card-header\">🗡️</div>\r\n    <div class=\"strengths-result\">\r\n      <div class=\"type-tag unset-grid\" *ngFor=\"let type of getTypes()\"\r\n        [ngStyle]=\"{'background': getColor(type, getStrengthTypes())}\">\r\n        <div class=\"type-text\">{{type.chinese}}</div>\r\n      </div>\r\n      <div class=\"type-tag reset unset-grid\" (click)=\"resetTypes()\">\r\n        <div class=\"type-text\">重置</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-wrap\">\r\n    <div class=\"card-header\">🥄</div>\r\n    <div class=\"weaknesses-result\">\r\n      <div class=\"type-tag unset-grid\" *ngFor=\"let type of getTypes()\"\r\n        [ngStyle]=\"{'background': getColor(type, getWeaknessTypes())}\">\r\n        <div class=\"type-text\">{{type.chinese}}</div>\r\n      </div>\r\n      <div class=\"type-tag reset unset-grid\" (click)=\"resetTypes()\">\r\n        <div class=\"type-text\">重置</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-wrap\">\r\n    <div class=\"card-header\">👻</div>\r\n    <div class=\"immunes-result\">\r\n      <div class=\"type-tag unset-grid\" *ngFor=\"let type of getTypes()\"\r\n        [ngStyle]=\"{'background': getColor(type, getImmunesTypes())}\">\r\n        <div class=\"type-text\">{{type.chinese}}</div>\r\n      </div>\r\n      <div class=\"type-tag reset unset-grid\" (click)=\"resetTypes()\">\r\n        <div class=\"type-text\">重置</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/move-selector-main/move-selector-main.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/move-selector-main/move-selector-main.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".type-tag {\n  width: 4.5em;\n  height: 2em;\n  line-height: 2em;\n  border-radius: 15px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  display: grid;\n  grid-template-areas: 'dot tag';\n  grid-template-columns: 2em 1fr;\n  box-shadow: 0 7px 7px -6px #777;\n  -webkit-column-break-inside: avoid;\n  page-break-inside: avoid;\n  -moz-column-break-inside: avoid;\n       break-inside: avoid;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n.type-text {\n  color: white;\n  grid-area: tag;\n  text-align: left;\n}\n.type-selected {\n  height: 1em;\n  width: 1em;\n  margin: auto;\n  line-height: 2em;\n  border-radius: 50%;\n  grid-area: dot;\n}\n.move-main {\n  display: grid;\n  grid-gap: 0.5em;\n  grid-template-columns: repeat(auto-fill, 11em);\n  margin: 0 auto;\n}\n.card {\n  background: #dcfeff;\n  width: 11em;\n  height: 31em;\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  -webkit-column-gap: 1em;\n     -moz-column-gap: 1em;\n          column-gap: 1em;\n  box-sizing: border-box;\n  padding: 1em;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  box-shadow: 0 3px 2px -2px #777;\n}\n.card .type-tag {\n  margin-bottom: 1em;\n}\n.unset-grid {\n  grid-template-areas: none !important;\n  grid-template-columns: none !important;\n}\n.card-header {\n  grid-template-areas: none !important;\n  grid-template-columns: none !important;\n  width: 4.5em;\n  height: 2em;\n  line-height: 2em;\n  border-radius: 15px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  display: grid;\n  grid-template-areas: 'dot tag';\n  grid-template-columns: 2em 1fr;\n  box-shadow: 0 7px 7px -6px #777;\n  -webkit-column-break-inside: avoid;\n  page-break-inside: avoid;\n  -moz-column-break-inside: avoid;\n       break-inside: avoid;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  box-shadow: none;\n  width: auto;\n  background: #dfe6e9;\n  text-align: center;\n  border-top-right-radius: 15px;\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.strengths-result,\n.weaknesses-result,\n.immunes-result {\n  background: #dcfeff;\n  width: 11em;\n  height: 31em;\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  -webkit-column-gap: 1em;\n     -moz-column-gap: 1em;\n          column-gap: 1em;\n  box-sizing: border-box;\n  padding: 1em;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  box-shadow: 0 3px 2px -2px #777;\n}\n.strengths-result .type-tag,\n.weaknesses-result .type-tag,\n.immunes-result .type-tag {\n  margin-bottom: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92ZS1zZWxlY3Rvci1tYWluL0M6L1VzZXJzL25vYmxlZGluby9EZXNrdG9wL3RlbXAvUG9rZXR5cGUvcG9rZW1vbi9zcmMvYXBwL21vdmUtc2VsZWN0b3ItbWFpbi90YWcubGVzcyIsInNyYy9hcHAvbW92ZS1zZWxlY3Rvci1tYWluL21vdmUtc2VsZWN0b3ItbWFpbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW92ZS1zZWxlY3Rvci1tYWluL0M6L1VzZXJzL25vYmxlZGluby9EZXNrdG9wL3RlbXAvUG9rZXR5cGUvcG9rZW1vbi9zcmMvYXBwL21vdmUtc2VsZWN0b3ItbWFpbi9tb3ZlLXNlbGVjdG9yLW1haW4uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUlBLCtCQUFBO0VBRUEsa0NBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO09BQUEsbUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDSEY7QURNQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNMRjtBQzVCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0FEOEJGO0FDM0JBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0tBQUEsb0JBQUE7VUFBQSxlQUFBO0VBQ0EsdUJBQUE7S0FBQSxvQkFBQTtVQUFBLGVBQUE7RUFHQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBS0EsK0JBQUE7QUQyQkY7QUMzQ0E7RUFtQkksa0JBQUE7QUQyQko7QUN2QkE7RUFDRSxvQ0FBQTtFQUNBLHNDQUFBO0FEeUJGO0FDdEJBO0VBSkUsb0NBQUE7RUFDQSxzQ0FBQTtFRmpDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUlBLCtCQUFBO0VBRUEsa0NBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO09BQUEsbUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VFb0JBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBRHdDRjtBQ3JDQTs7O0VBeENFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtLQUFBLG9CQUFBO1VBQUEsZUFBQTtFQUNBLHVCQUFBO0tBQUEsb0JBQUE7VUFBQSxlQUFBO0VBR0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUtBLCtCQUFBO0FEZ0ZGO0FDdkRBOzs7RUF0Qkksa0JBQUE7QURrRkoiLCJmaWxlIjoic3JjL2FwcC9tb3ZlLXNlbGVjdG9yLW1haW4vbW92ZS1zZWxlY3Rvci1tYWluLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnR5cGUtdGFnIHtcbiAgd2lkdGg6IDQuNWVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdkb3QgdGFnJztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZW0gMWZyO1xuXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA3cHggN3B4IC02cHggIzc3Nztcblx0LW1vei1ib3gtc2hhZG93OiAwIDdweCA3cHggLTZweCAjNzc3O1xuICBib3gtc2hhZG93OiAwIDdweCA3cHggLTZweCAjNzc3O1xuXG4gIC13ZWJraXQtY29sdW1uLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuXG4udHlwZS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBncmlkLWFyZWE6IHRhZztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnR5cGUtc2VsZWN0ZWQge1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDFlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGdyaWQtYXJlYTogZG90O1xufVxuIiwiLnR5cGUtdGFnIHtcbiAgd2lkdGg6IDQuNWVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2RvdCB0YWcnO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJlbSAxZnI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA3cHggN3B4IC02cHggIzc3NztcbiAgLW1vei1ib3gtc2hhZG93OiAwIDdweCA3cHggLTZweCAjNzc3O1xuICBib3gtc2hhZG93OiAwIDdweCA3cHggLTZweCAjNzc3O1xuICAtd2Via2l0LWNvbHVtbi1icmVhay1pbnNpZGU6IGF2b2lkO1xuICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIGJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cbi50eXBlLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGdyaWQtYXJlYTogdGFnO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnR5cGUtc2VsZWN0ZWQge1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDFlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGdyaWQtYXJlYTogZG90O1xufVxuLm1vdmUtbWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAwLjVlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAxMWVtKTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNkY2ZlZmY7XG4gIHdpZHRoOiAxMWVtO1xuICBoZWlnaHQ6IDMxZW07XG4gIGNvbHVtbi1jb3VudDogMjtcbiAgY29sdW1uLWdhcDogMWVtO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAycHggLTJweCAjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDAgM3B4IDJweCAtMnB4ICM3Nzc7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDJweCAtMnB4ICM3Nzc7XG59XG4uY2FyZCAudHlwZS10YWcge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4udW5zZXQtZ3JpZCB7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IG5vbmUgIWltcG9ydGFudDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBub25lICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1oZWFkZXIge1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBub25lICFpbXBvcnRhbnQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbm9uZSAhaW1wb3J0YW50O1xuICB3aWR0aDogNC41ZW07XG4gIGhlaWdodDogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnZG90IHRhZyc7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmVtIDFmcjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDdweCA3cHggLTZweCAjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDAgN3B4IDdweCAtNnB4ICM3Nzc7XG4gIGJveC1zaGFkb3c6IDAgN3B4IDdweCAtNnB4ICM3Nzc7XG4gIC13ZWJraXQtY29sdW1uLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICBib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZDogI2RmZTZlOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uc3RyZW5ndGhzLXJlc3VsdCxcbi53ZWFrbmVzc2VzLXJlc3VsdCxcbi5pbW11bmVzLXJlc3VsdCB7XG4gIGJhY2tncm91bmQ6ICNkY2ZlZmY7XG4gIHdpZHRoOiAxMWVtO1xuICBoZWlnaHQ6IDMxZW07XG4gIGNvbHVtbi1jb3VudDogMjtcbiAgY29sdW1uLWdhcDogMWVtO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAycHggLTJweCAjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDAgM3B4IDJweCAtMnB4ICM3Nzc7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDJweCAtMnB4ICM3Nzc7XG59XG4uc3RyZW5ndGhzLXJlc3VsdCAudHlwZS10YWcsXG4ud2Vha25lc3Nlcy1yZXN1bHQgLnR5cGUtdGFnLFxuLmltbXVuZXMtcmVzdWx0IC50eXBlLXRhZyB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbiIsIkBpbXBvcnQgJy4vdGFnLmxlc3MnO1xuXG4ubW92ZS1tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDAuNWVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDExZW0pO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZGNmZWZmO1xuICB3aWR0aDogMTFlbTtcbiAgaGVpZ2h0OiAzMWVtO1xuICBjb2x1bW4tY291bnQ6IDI7XG4gIGNvbHVtbi1nYXA6IDFlbTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG5cblxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDJweCAtMnB4ICM3Nzc7XG5cdC1tb3otYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggIzc3NztcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggIzc3NztcblxuICAudHlwZS10YWcge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxufVxuXG4udW5zZXQtZ3JpZCB7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IG5vbmUgIWltcG9ydGFudDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIC51bnNldC1ncmlkKCk7XG4gIC50eXBlLXRhZygpO1xuICBib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZDogI2RmZTZlOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5zdHJlbmd0aHMtcmVzdWx0LCAud2Vha25lc3Nlcy1yZXN1bHQsIC5pbW11bmVzLXJlc3VsdCB7XG4gIC5jYXJkKCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/move-selector-main/move-selector-main.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/move-selector-main/move-selector-main.component.ts ***!
  \********************************************************************/
/*! exports provided: MoveSelectorMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveSelectorMainComponent", function() { return MoveSelectorMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _types_poketypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/poketypes */ "./src/app/types/poketypes.ts");



var WHITE = '#b2bec3';
var RED = '#d63031';
var GREEN = '#2ecc71';
var BLACK = '#2d3436';
var MoveSelectorMainComponent = /** @class */ (function () {
    function MoveSelectorMainComponent() {
        this.selectionCache = {};
    }
    MoveSelectorMainComponent.prototype.getTypes = function () {
        return _types_poketypes__WEBPACK_IMPORTED_MODULE_2__["types"];
    };
    MoveSelectorMainComponent.prototype.getTypeHashTable = function () {
        return this.getTypes()
            .reduce(function (a, c) { a[c.name] = c; return a; }, {});
    };
    MoveSelectorMainComponent.prototype.getColor = function (type, typesToFilter) {
        if (typesToFilter === void 0) { typesToFilter = null; }
        if (typesToFilter == null) {
            return type.colorCode;
        }
        return typesToFilter.map(function (t) { return t.name; }).includes(type.name) ? type.colorCode : WHITE;
    };
    MoveSelectorMainComponent.prototype.getSelectedDotColor = function (type) {
        return type.selected ? type.accentCode : 'transparent';
    };
    MoveSelectorMainComponent.prototype.toggleSelect = function (type) {
        type.selected = !type.selected;
    };
    MoveSelectorMainComponent.prototype.getSelectedTypes = function () {
        return this.getTypes().filter(function (type) { return type.selected; });
    };
    MoveSelectorMainComponent.prototype.filterTypeProperty = function (propName, types) {
        if (types === void 0) { types = this.getSelectedTypes(); }
        var key = propName + types.map(function (t) { return t.name; }).join();
        if (this.selectionCache[key]) {
            return this.selectionCache[key];
        }
        var allFilteredName = Array.from(new Set(types
            .map(function (type) { return type[propName]; })
            .flat()));
        var ht = this.getTypeHashTable();
        this.selectionCache[key] = allFilteredName.map(function (name) { return ht[name]; });
        return this.selectionCache[key];
    };
    MoveSelectorMainComponent.prototype.getStrengthTypes = function () {
        return this.filterTypeProperty('strengths');
    };
    MoveSelectorMainComponent.prototype.getWeaknessTypes = function () {
        return this.filterTypeProperty('weaknesses');
    };
    MoveSelectorMainComponent.prototype.getImmunesTypes = function () {
        return this.filterTypeProperty('immunes');
    };
    MoveSelectorMainComponent.prototype.resetTypes = function () {
        this.getTypes().forEach(function (t) { return t.selected = false; });
    };
    MoveSelectorMainComponent.prototype.getEffectiveTypes = function () {
        var _this = this;
        var selected = this.getSelectedTypes();
        var key = 'E' + selected.map(function (type) { return type.name; });
        if (this.selectionCache[key] == null) {
            var typeEffect_1 = {
                doubles: [], halves: [], zeroes: []
            };
            selected.forEach(function (type) {
                typeEffect_1.doubles.push(_this.filterTypeProperty('effectiveBy', [type]));
                typeEffect_1.halves.push(_this.filterTypeProperty('ineffectiveBy', [type]));
                typeEffect_1.zeroes.push(_this.filterTypeProperty('noEffectBy', [type]));
            });
            typeEffect_1.doubles = typeEffect_1.doubles.flat();
            typeEffect_1.halves = typeEffect_1.halves.flat();
            typeEffect_1.zeroes = typeEffect_1.zeroes.flat();
            var hashCopy_1 = JSON.parse(JSON.stringify(this.getTypeHashTable()));
            Object.keys(hashCopy_1).forEach(function (key) { return hashCopy_1[key].effect = 1; });
            typeEffect_1.doubles.forEach(function (type) { return hashCopy_1[type.name].effect *= 2; });
            typeEffect_1.halves.forEach(function (type) { return hashCopy_1[type.name].effect /= 2; });
            typeEffect_1.zeroes.forEach(function (type) { return hashCopy_1[type.name].effect = 0; });
            this.selectionCache[key] = hashCopy_1;
        }
        return this.selectionCache[key];
    };
    MoveSelectorMainComponent.prototype.getEffectiveMultiplier = function (type) {
        var multiplier = this.getEffectiveTypes()[type.name].effect;
        if (multiplier === 0) {
            return '0';
        }
        if (multiplier < 0.125) {
            return '0.01';
        }
        return { 0.125: '⅛', 0.25: '¼', 0.5: '½' }[multiplier] || multiplier;
    };
    MoveSelectorMainComponent.prototype.getEffectiveColor = function (type) {
        var multiplier = this.getEffectiveMultiplier(type);
        return multiplier >= 2 ? RED :
            multiplier == 1 ? WHITE :
                multiplier == 0 ? BLACK : GREEN;
    };
    MoveSelectorMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-move-selector-main',
            template: __webpack_require__(/*! ./move-selector-main.component.html */ "./src/app/move-selector-main/move-selector-main.component.html"),
            styles: [__webpack_require__(/*! ./move-selector-main.component.less */ "./src/app/move-selector-main/move-selector-main.component.less"), __webpack_require__(/*! ./type-selector.less */ "./src/app/move-selector-main/type-selector.less"), __webpack_require__(/*! ./tag.less */ "./src/app/move-selector-main/tag.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoveSelectorMainComponent);
    return MoveSelectorMainComponent;
}());



/***/ }),

/***/ "./src/app/move-selector-main/tag.less":
/*!*********************************************!*\
  !*** ./src/app/move-selector-main/tag.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".type-tag {\n  width: 4.5em;\n  height: 2em;\n  line-height: 2em;\n  border-radius: 15px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  display: grid;\n  grid-template-areas: 'dot tag';\n  grid-template-columns: 2em 1fr;\n  box-shadow: 0 7px 7px -6px #777;\n  -webkit-column-break-inside: avoid;\n  page-break-inside: avoid;\n  -moz-column-break-inside: avoid;\n       break-inside: avoid;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n.type-text {\n  color: white;\n  grid-area: tag;\n  text-align: left;\n}\n.type-selected {\n  height: 1em;\n  width: 1em;\n  margin: auto;\n  line-height: 2em;\n  border-radius: 50%;\n  grid-area: dot;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92ZS1zZWxlY3Rvci1tYWluL0M6L1VzZXJzL25vYmxlZGluby9EZXNrdG9wL3RlbXAvUG9rZXR5cGUvcG9rZW1vbi9zcmMvYXBwL21vdmUtc2VsZWN0b3ItbWFpbi90YWcubGVzcyIsInNyYy9hcHAvbW92ZS1zZWxlY3Rvci1tYWluL3RhZy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFJQSwrQkFBQTtFQUVBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtPQUFBLG1CQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0hGO0FETUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9tb3ZlLXNlbGVjdG9yLW1haW4vdGFnLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwZS10YWcge1xuICB3aWR0aDogNC41ZW07XG4gIGhlaWdodDogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2RvdCB0YWcnO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJlbSAxZnI7XG5cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDdweCA3cHggLTZweCAjNzc3O1xuXHQtbW96LWJveC1zaGFkb3c6IDAgN3B4IDdweCAtNnB4ICM3Nzc7XG4gIGJveC1zaGFkb3c6IDAgN3B4IDdweCAtNnB4ICM3Nzc7XG5cbiAgLXdlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICBicmVhay1pbnNpZGU6IGF2b2lkO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbi50eXBlLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGdyaWQtYXJlYTogdGFnO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udHlwZS1zZWxlY3RlZCB7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW46IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZ3JpZC1hcmVhOiBkb3Q7XG59XG4iLCIudHlwZS10YWcge1xuICB3aWR0aDogNC41ZW07XG4gIGhlaWdodDogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnZG90IHRhZyc7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmVtIDFmcjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDdweCA3cHggLTZweCAjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDAgN3B4IDdweCAtNnB4ICM3Nzc7XG4gIGJveC1zaGFkb3c6IDAgN3B4IDdweCAtNnB4ICM3Nzc7XG4gIC13ZWJraXQtY29sdW1uLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuLnR5cGUtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZ3JpZC1hcmVhOiB0YWc7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udHlwZS1zZWxlY3RlZCB7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW46IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZ3JpZC1hcmVhOiBkb3Q7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/move-selector-main/type-selector.less":
/*!*******************************************************!*\
  !*** ./src/app/move-selector-main/type-selector.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".type-tag {\n  width: 4.5em;\n  height: 2em;\n  line-height: 2em;\n  border-radius: 15px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  display: grid;\n  grid-template-areas: 'dot tag';\n  grid-template-columns: 2em 1fr;\n  box-shadow: 0 7px 7px -6px #777;\n  -webkit-column-break-inside: avoid;\n  page-break-inside: avoid;\n  -moz-column-break-inside: avoid;\n       break-inside: avoid;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n.type-text {\n  color: white;\n  grid-area: tag;\n  text-align: left;\n}\n.type-selected {\n  height: 1em;\n  width: 1em;\n  margin: auto;\n  line-height: 2em;\n  border-radius: 50%;\n  grid-area: dot;\n}\n.move-main {\n  display: grid;\n  grid-gap: 0.5em;\n  grid-template-columns: repeat(auto-fill, 11em);\n  margin: 0 auto;\n}\n.card {\n  background: #dcfeff;\n  width: 11em;\n  height: 31em;\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  -webkit-column-gap: 1em;\n     -moz-column-gap: 1em;\n          column-gap: 1em;\n  box-sizing: border-box;\n  padding: 1em;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  box-shadow: 0 3px 2px -2px #777;\n}\n.card .type-tag {\n  margin-bottom: 1em;\n}\n.unset-grid {\n  grid-template-areas: none !important;\n  grid-template-columns: none !important;\n}\n.card-header {\n  grid-template-areas: none !important;\n  grid-template-columns: none !important;\n  width: 4.5em;\n  height: 2em;\n  line-height: 2em;\n  border-radius: 15px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  display: grid;\n  grid-template-areas: 'dot tag';\n  grid-template-columns: 2em 1fr;\n  box-shadow: 0 7px 7px -6px #777;\n  -webkit-column-break-inside: avoid;\n  page-break-inside: avoid;\n  -moz-column-break-inside: avoid;\n       break-inside: avoid;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  box-shadow: none;\n  width: auto;\n  background: #dfe6e9;\n  text-align: center;\n  border-top-right-radius: 15px;\n  border-top-left-radius: 15px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.strengths-result,\n.weaknesses-result,\n.immunes-result {\n  background: #dcfeff;\n  width: 11em;\n  height: 31em;\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  -webkit-column-gap: 1em;\n     -moz-column-gap: 1em;\n          column-gap: 1em;\n  box-sizing: border-box;\n  padding: 1em;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  box-shadow: 0 3px 2px -2px #777;\n}\n.strengths-result .type-tag,\n.weaknesses-result .type-tag,\n.immunes-result .type-tag {\n  margin-bottom: 1em;\n}\n.type-selector {\n  background: #dcfeff;\n  width: 11em;\n  height: 31em;\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  -webkit-column-gap: 1em;\n     -moz-column-gap: 1em;\n          column-gap: 1em;\n  box-sizing: border-box;\n  padding: 1em;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  box-shadow: 0 3px 2px -2px #777;\n}\n.type-selector .type-tag {\n  margin-bottom: 1em;\n}\n.reset {\n  background: #ef3c3b;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92ZS1zZWxlY3Rvci1tYWluL0M6L1VzZXJzL25vYmxlZGluby9EZXNrdG9wL3RlbXAvUG9rZXR5cGUvcG9rZW1vbi9zcmMvYXBwL21vdmUtc2VsZWN0b3ItbWFpbi90YWcubGVzcyIsInNyYy9hcHAvbW92ZS1zZWxlY3Rvci1tYWluL3R5cGUtc2VsZWN0b3IubGVzcyIsInNyYy9hcHAvbW92ZS1zZWxlY3Rvci1tYWluL0M6L1VzZXJzL25vYmxlZGluby9EZXNrdG9wL3RlbXAvUG9rZXR5cGUvcG9rZW1vbi9zcmMvYXBwL21vdmUtc2VsZWN0b3ItbWFpbi9tb3ZlLXNlbGVjdG9yLW1haW4uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL21vdmUtc2VsZWN0b3ItbWFpbi9DOi9Vc2Vycy9ub2JsZWRpbm8vRGVza3RvcC90ZW1wL1Bva2V0eXBlL3Bva2Vtb24vc3JjL2FwcC9tb3ZlLXNlbGVjdG9yLW1haW4vdHlwZS1zZWxlY3Rvci5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFJQSwrQkFBQTtFQUVBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtPQUFBLG1CQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0hGO0FETUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTEY7QUM1QkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhDQUFBO0VBQ0EsY0FBQTtBRDhCRjtBQzNCQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtLQUFBLG9CQUFBO1VBQUEsZUFBQTtFQUNBLHVCQUFBO0tBQUEsb0JBQUE7VUFBQSxlQUFBO0VBR0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUtBLCtCQUFBO0FEMkJGO0FDM0NBO0VBbUJJLGtCQUFBO0FEMkJKO0FDdkJBO0VBQ0Usb0NBQUE7RUFDQSxzQ0FBQTtBRHlCRjtBQ3RCQTtFQUpFLG9DQUFBO0VBQ0Esc0NBQUE7RUZqQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFJQSwrQkFBQTtFQUVBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtPQUFBLG1CQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFRW9CQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUR3Q0Y7QUNyQ0E7OztFQXhDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7S0FBQSxvQkFBQTtVQUFBLGVBQUE7RUFDQSx1QkFBQTtLQUFBLG9CQUFBO1VBQUEsZUFBQTtFQUdBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFLQSwrQkFBQTtBRGdGRjtBQ3ZEQTs7O0VBdEJJLGtCQUFBO0FEa0ZKO0FFNUdBO0VEUUUsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0tBQUEsb0JBQUE7VUFBQSxlQUFBO0VBQ0EsdUJBQUE7S0FBQSxvQkFBQTtVQUFBLGVBQUE7RUFHQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBS0EsK0JBQUE7QURxR0Y7QUU1SEE7RUQwQkksa0JBQUE7QURxR0o7QUUxSEE7RUFDRSxtQkFBQTtBRjRIRiIsImZpbGUiOiJzcmMvYXBwL21vdmUtc2VsZWN0b3ItbWFpbi90eXBlLXNlbGVjdG9yLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwZS10YWcge1xuICB3aWR0aDogNC41ZW07XG4gIGhlaWdodDogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2RvdCB0YWcnO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJlbSAxZnI7XG5cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDdweCA3cHggLTZweCAjNzc3O1xuXHQtbW96LWJveC1zaGFkb3c6IDAgN3B4IDdweCAtNnB4ICM3Nzc7XG4gIGJveC1zaGFkb3c6IDAgN3B4IDdweCAtNnB4ICM3Nzc7XG5cbiAgLXdlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICBicmVhay1pbnNpZGU6IGF2b2lkO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbi50eXBlLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGdyaWQtYXJlYTogdGFnO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udHlwZS1zZWxlY3RlZCB7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW46IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZ3JpZC1hcmVhOiBkb3Q7XG59XG4iLCIudHlwZS10YWcge1xuICB3aWR0aDogNC41ZW07XG4gIGhlaWdodDogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnZG90IHRhZyc7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmVtIDFmcjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDdweCA3cHggLTZweCAjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDAgN3B4IDdweCAtNnB4ICM3Nzc7XG4gIGJveC1zaGFkb3c6IDAgN3B4IDdweCAtNnB4ICM3Nzc7XG4gIC13ZWJraXQtY29sdW1uLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuLnR5cGUtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZ3JpZC1hcmVhOiB0YWc7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udHlwZS1zZWxlY3RlZCB7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW46IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZ3JpZC1hcmVhOiBkb3Q7XG59XG4ubW92ZS1tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDAuNWVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDExZW0pO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogI2RjZmVmZjtcbiAgd2lkdGg6IDExZW07XG4gIGhlaWdodDogMzFlbTtcbiAgY29sdW1uLWNvdW50OiAyO1xuICBjb2x1bW4tZ2FwOiAxZW07XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDJweCAtMnB4ICM3Nzc7XG4gIC1tb3otYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggIzc3NztcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggIzc3Nztcbn1cbi5jYXJkIC50eXBlLXRhZyB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi51bnNldC1ncmlkIHtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogbm9uZSAhaW1wb3J0YW50O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jYXJkLWhlYWRlciB7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IG5vbmUgIWltcG9ydGFudDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBub25lICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0LjVlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdkb3QgdGFnJztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZW0gMWZyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgN3B4IDdweCAtNnB4ICM3Nzc7XG4gIC1tb3otYm94LXNoYWRvdzogMCA3cHggN3B4IC02cHggIzc3NztcbiAgYm94LXNoYWRvdzogMCA3cHggN3B4IC02cHggIzc3NztcbiAgLXdlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICBicmVhay1pbnNpZGU6IGF2b2lkO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZGZlNmU5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5zdHJlbmd0aHMtcmVzdWx0LFxuLndlYWtuZXNzZXMtcmVzdWx0LFxuLmltbXVuZXMtcmVzdWx0IHtcbiAgYmFja2dyb3VuZDogI2RjZmVmZjtcbiAgd2lkdGg6IDExZW07XG4gIGhlaWdodDogMzFlbTtcbiAgY29sdW1uLWNvdW50OiAyO1xuICBjb2x1bW4tZ2FwOiAxZW07XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDJweCAtMnB4ICM3Nzc7XG4gIC1tb3otYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggIzc3NztcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggIzc3Nztcbn1cbi5zdHJlbmd0aHMtcmVzdWx0IC50eXBlLXRhZyxcbi53ZWFrbmVzc2VzLXJlc3VsdCAudHlwZS10YWcsXG4uaW1tdW5lcy1yZXN1bHQgLnR5cGUtdGFnIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuLnR5cGUtc2VsZWN0b3Ige1xuICBiYWNrZ3JvdW5kOiAjZGNmZWZmO1xuICB3aWR0aDogMTFlbTtcbiAgaGVpZ2h0OiAzMWVtO1xuICBjb2x1bW4tY291bnQ6IDI7XG4gIGNvbHVtbi1nYXA6IDFlbTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggIzc3NztcbiAgLW1vei1ib3gtc2hhZG93OiAwIDNweCAycHggLTJweCAjNzc3O1xuICBib3gtc2hhZG93OiAwIDNweCAycHggLTJweCAjNzc3O1xufVxuLnR5cGUtc2VsZWN0b3IgLnR5cGUtdGFnIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuLnJlc2V0IHtcbiAgYmFja2dyb3VuZDogI2VmM2MzYjtcbn1cbiIsIkBpbXBvcnQgJy4vdGFnLmxlc3MnO1xuXG4ubW92ZS1tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDAuNWVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDExZW0pO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZGNmZWZmO1xuICB3aWR0aDogMTFlbTtcbiAgaGVpZ2h0OiAzMWVtO1xuICBjb2x1bW4tY291bnQ6IDI7XG4gIGNvbHVtbi1nYXA6IDFlbTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG5cblxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDJweCAtMnB4ICM3Nzc7XG5cdC1tb3otYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggIzc3NztcbiAgYm94LXNoYWRvdzogMCAzcHggMnB4IC0ycHggIzc3NztcblxuICAudHlwZS10YWcge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxufVxuXG4udW5zZXQtZ3JpZCB7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IG5vbmUgIWltcG9ydGFudDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIC51bnNldC1ncmlkKCk7XG4gIC50eXBlLXRhZygpO1xuICBib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZDogI2RmZTZlOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5zdHJlbmd0aHMtcmVzdWx0LCAud2Vha25lc3Nlcy1yZXN1bHQsIC5pbW11bmVzLXJlc3VsdCB7XG4gIC5jYXJkKCk7XG59XG4iLCJAaW1wb3J0ICcuL21vdmUtc2VsZWN0b3ItbWFpbi5jb21wb25lbnQubGVzcyc7XG5cbi50eXBlLXNlbGVjdG9yIHtcbiAgYmFja2dyb3VuZDogI2RjZmVmZjtcbiAgLmNhcmQoKTtcbn1cblxuLnJlc2V0IHtcbiAgYmFja2dyb3VuZDogI2VmM2MzYjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/types/poketypes.ts":
/*!************************************!*\
  !*** ./src/app/types/poketypes.ts ***!
  \************************************/
/*! exports provided: types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
var types = [
    {
        selected: false,
        chinese: '普',
        name: 'Normal',
        colorCode: '#9199a1',
        accentCode: '#4b4e51',
        immunes: ['Ghost'],
        weaknesses: ['Rock', 'Steel'],
        strengths: [],
        effectiveBy: ['Fighting'],
        ineffectiveBy: [],
        noEffectBy: ['Ghost']
    },
    {
        selected: false,
        chinese: '火',
        name: 'Fire',
        colorCode: '#fe9c54',
        accentCode: '#5f4f44',
        immunes: [],
        weaknesses: ['Fire', 'Water', 'Rock', 'Dragon'],
        strengths: ['Grass', 'Ice', 'Bug', 'Steel'],
        effectiveBy: ['Ground', 'Water', 'Rock'],
        ineffectiveBy: ['Bug', 'Fire', 'Grass', 'Ice', 'Steel', 'Fairy'],
        noEffectBy: []
    },
    {
        selected: false,
        chinese: '水',
        name: 'Water',
        colorCode: '#4f90d5',
        accentCode: '#404d59',
        immunes: [],
        weaknesses: ['Water', 'Grass', 'Dragon'],
        strengths: ['Fire', 'Ground', 'Rock'],
        effectiveBy: ['Electric', 'Grass'],
        ineffectiveBy: ['Fire', 'Water', 'Ice', 'Steel'],
        noEffectBy: []
    },
    {
        selected: false,
        chinese: '電',
        name: 'Electric',
        colorCode: '#f4d23c',
        accentCode: '#5c5940',
        immunes: ['Ground'],
        weaknesses: ['Electric', 'Grass', 'Dragon'],
        strengths: ['Water', 'Flying'],
        effectiveBy: ['Ground'],
        ineffectiveBy: ['Flying', 'Electric', 'Steel'],
        noEffectBy: []
    },
    {
        selected: false,
        chinese: '草',
        name: 'Grass',
        colorCode: '#62bb5a',
        accentCode: '#445447',
        immunes: [],
        weaknesses: ['Fire', 'Grass', 'Poison', 'Flying', 'Bug', 'Dragon', 'Steel'],
        strengths: ['Water', 'Ground', 'Rock'],
        effectiveBy: ['Bug', 'Poison', 'Flying', 'Fire', 'Ice'],
        ineffectiveBy: ['Ground', 'Water', 'Electric', 'Grass'],
        noEffectBy: []
    },
    {
        selected: false,
        chinese: '冰',
        name: 'Ice',
        colorCode: '#73cebf',
        accentCode: '#475757',
        immunes: [],
        weaknesses: ['Fire', 'Water', 'Ice', 'Steel'],
        strengths: ['Grass', 'Ground', 'Flying', 'Dragon'],
        effectiveBy: ['Fighting', 'Fire', 'Rock', 'Steel'],
        ineffectiveBy: ['Ice'],
        noEffectBy: []
    },
    {
        selected: false,
        chinese: '格',
        name: 'Fighting',
        colorCode: '#cd406a',
        accentCode: '#57404a',
        immunes: ['Ghost'],
        weaknesses: ['Poison', 'Flying', 'Psychic', 'Bug', 'Fairy'],
        strengths: ['Normal', 'Ice', 'Rock', 'Dark', 'Steel'],
        effectiveBy: ['Flying', 'Psychic', 'Fairy'],
        ineffectiveBy: ['Bug', 'Rock', 'Dark'],
        noEffectBy: []
    },
    {
        selected: false,
        chinese: '毒',
        name: 'Poison',
        colorCode: '#a96ac7',
        accentCode: '#524857',
        immunes: ['Steel'],
        weaknesses: ['Poison', 'Ground', 'Rock', 'Ghost'],
        strengths: ['Grass', 'Fairy'],
        effectiveBy: ['Ground', 'Psychic'],
        ineffectiveBy: ['Bug', 'Poison', 'Fighting', 'Grass', 'Fairy'],
        noEffectBy: []
    },
    {
        selected: false,
        chinese: '地',
        name: 'Ground',
        colorCode: '#d87844',
        accentCode: '#594940',
        immunes: ['Flying'],
        weaknesses: ['Grass', 'Bug'],
        strengths: ['Fire', 'Electric', 'Poison', 'Rock', 'Steel'],
        effectiveBy: ['Water', 'Grass', 'Ice'],
        ineffectiveBy: ['Poison', 'Rock'],
        noEffectBy: ['Electric']
    },
    {
        selected: false,
        chinese: '飛',
        name: 'Flying',
        colorCode: '#8ea8de',
        accentCode: '#4c515a',
        immunes: [],
        weaknesses: ['Electric', 'Rock', 'Steel'],
        strengths: ['Grass', 'Fighting', 'Bug'],
        effectiveBy: ['Electric', 'Ice', 'Rock'],
        ineffectiveBy: ['Bug', 'Fighting', 'Grass'],
        noEffectBy: ['Ground']
    },
    {
        selected: false,
        chinese: '超',
        name: 'Psychic',
        colorCode: '#f97178',
        accentCode: '#5d4849',
        immunes: ['Dark'],
        weaknesses: ['Psychic', 'Steel'],
        strengths: ['Fighting', 'Poison'],
        effectiveBy: ['Bug', 'Ghost', 'Dark'],
        ineffectiveBy: ['Fighting', 'Psychic'],
        noEffectBy: []
    },
    {
        selected: false,
        chinese: '蟲',
        name: 'Bug',
        colorCode: '#91bf2e',
        accentCode: '#4c543f',
        immunes: [],
        weaknesses: ['Fire', 'Fighting', 'Poison', 'Flying', 'Ghost', 'Steel', 'Fairy'],
        strengths: ['Grass', 'Psychic', 'Dark'],
        effectiveBy: ['Flying', 'Fire', 'Rock'],
        ineffectiveBy: ['Ground', 'Fighting', 'Grass'],
        noEffectBy: []
    },
    {
        selected: false,
        chinese: '岩',
        name: 'Rock',
        colorCode: '#c5b78b',
        accentCode: '#57544f',
        immunes: [],
        weaknesses: ['Fighting', 'Ground', 'Steel'],
        strengths: ['Fire', 'Ice', 'Flying', 'Bug'],
        effectiveBy: ['Ground', 'Fighting', 'Water', 'Grass', 'Steel'],
        ineffectiveBy: ['Normal', 'Poison', 'Flying', 'Fire'],
        noEffectBy: []
    },
    {
        selected: false,
        chinese: '幽',
        name: 'Ghost',
        colorCode: '#5269ac',
        accentCode: '#404751',
        immunes: ['Normal'],
        weaknesses: ['Dark'],
        strengths: ['Psychic', 'Ghost'],
        effectiveBy: ['Ghost', 'Dark'],
        ineffectiveBy: ['Bug', 'Poison'],
        noEffectBy: ['Normal', 'Fighting']
    },
    {
        selected: false,
        chinese: '龍',
        name: 'Dragon',
        colorCode: '#0a6dc2',
        accentCode: '#364857',
        immunes: ['Fairy'],
        weaknesses: ['Steel'],
        strengths: ['Dragon'],
        effectiveBy: ['Dragon', 'Ice', 'Fairy'],
        ineffectiveBy: ['Fire', 'Water', 'Electric', 'Grass'],
        noEffectBy: []
    },
    {
        selected: false,
        chinese: '惡',
        name: 'Dark',
        colorCode: '#5a5365',
        accentCode: '#434349',
        immunes: [],
        weaknesses: ['Fighting', 'Dark', 'Fairy'],
        strengths: ['Psychic', 'Ghost'],
        effectiveBy: ['Bug', 'Fighting', 'Fairy'],
        ineffectiveBy: ['Ghost', 'Dark'],
        noEffectBy: ['Psychic']
    },
    {
        selected: false,
        chinese: '鋼',
        name: 'Steel',
        colorCode: '#5a8da1',
        accentCode: '#444c51',
        immunes: [],
        weaknesses: ['Fire', 'Water', 'Electric', 'Steel'],
        strengths: ['Ice', 'Rock', 'Fairy'],
        effectiveBy: ['Ground', 'Fighting', 'Fire'],
        ineffectiveBy: ['Normal', 'Bug', 'Flying', 'Grass', 'Ice', 'Rock', 'Psychic', 'Dragon', 'Steel', 'Fairy'],
        noEffectBy: ['Poison']
    },
    {
        selected: false,
        chinese: '妖',
        name: 'Fairy',
        colorCode: '#eb8fe6',
        accentCode: '#5d4e5d',
        immunes: [],
        weaknesses: ['Fire', 'Poison', 'Steel'],
        strengths: ['Fighting', 'Dragon', 'Dark'],
        effectiveBy: ['Poison', 'Steel'],
        ineffectiveBy: ['Bug', 'Fighting', 'Dark'],
        noEffectBy: ['Dragon']
    }
];
window.poketypes = types;



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nobledino\Desktop\temp\Poketype\pokemon\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map