(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-sessions-sessions-module"],{

/***/ "./src/app/views/sessions/error/error.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/sessions/error/error.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/sessions/error/error.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/error/error.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap height-100 default-bg\">\n  <div class=\"app-error\">\n    <div class=\"fix\">\n      <mat-icon class=\"error-icon\" color=\"warn\">warning</mat-icon>\n      <div class=\"error-text\">\n        <h1 class=\"error-title\">500</h1>\n        <div class=\"error-subtitle\">Server Error!</div>\n      </div>\n    </div>\n    \n    <div class=\"error-actions\">\n      <button \n      mat-raised-button \n      color=\"primary\"\n      class=\"mb-1 mr-05\"\n      [routerLink]=\"['/']\">Back to Dashboard</button>\n      <button \n      mat-raised-button \n      color=\"warn\">Report this Problem</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/sessions/error/error.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/sessions/error/error.component.ts ***!
  \*********************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/views/sessions/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/views/sessions/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/forgot-password/forgot-password.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/views/sessions/forgot-password/forgot-password.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/sessions/forgot-password/forgot-password.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/views/sessions/forgot-password/forgot-password.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap height-100 black\">\n  <div class=\"session-form-hold\">\n    <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\n    <mat-card>\n      <mat-card-content>\n        <div class=\"text-center pt-8 pb-16\">\n          <img width=\"60px\" src=\"assets/images/logo.png\" alt=\"\" class=\"mb-05\">\n          <p class=\"text-muted m-0\">New password will be sent to your email address</p>\n        </div>\n        <form #fpForm=\"ngForm\" (ngSubmit)=\"submitEmail()\">\n\n          <div class=\"\">\n            <mat-form-field class=\"full-width\">\n              <input\n                matInput\n                name=\"email\"\n                required\n                [(ngModel)]=\"userEmail\"\n                #email=\"ngModel\"\n                placeholder=\"Email\"\n                value=\"\">\n            </mat-form-field>\n            <small \n              *ngIf=\"email.errors && (email.dirty || email.touched) && (email?.errors?.required)\" \n              class=\"form-error-msg\"> Email is required </small>\n          </div>\n\n          <button mat-raised-button class=\"mat-primary full-width mb-1\" [disabled]=\"fpForm.invalid\">Submit</button>\n          <div class=\"text-center\">\n            <a [routerLink]=\"'/sessions/signin'\" class=\"mat-primary text-center full-width\">Sign in</a>\n            <span fxFlex></span>\n            <a [routerLink]=\"'/sessions/signup'\" class=\"mat-primary text-center full-width\">Create a new account</a>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/sessions/forgot-password/forgot-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/sessions/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.submitEmail = function () {
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"])
    ], ForgotPasswordComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"])
    ], ForgotPasswordComponent.prototype, "submitButton", void 0);
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/views/sessions/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/views/sessions/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/lockscreen/lockscreen.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/sessions/lockscreen/lockscreen.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL2xvY2tzY3JlZW4vbG9ja3NjcmVlbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/sessions/lockscreen/lockscreen.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/sessions/lockscreen/lockscreen.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap height-100 black\">\n  <div class=\"session-form-hold session-lockscreen\">\n    <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\n    <mat-card>\n      <mat-card-content>\n        <div fxFlex=\"column\" fxFlexWrap=\"wrap\">\n          <div fxFlexWrap=\"wrap\" class=\"lockscreen-user\">\n            <img class=\"lockscreen-face\" src=\"assets/images/face-3.jpg\" alt=\"\">\n            <h5 class=\"m-0 font-normal\">John Doe</h5>\n            <small class=\"text-muted\">Last seen 1 hour ago</small>\n          </div>\n          <form #lockscreenForm=\"ngForm\" (ngSubmit)=\"unlock()\">\n            <div class=\"\">\n              <mat-form-field class=\"full-width\">\n                <input \n                  type=\"password\"\n                  name=\"password\"\n                  required\n                  matInput\n                  [(ngModel)]=\"lockscreenData.password\"\n                  #password=\"ngModel\"\n                  placeholder=\"Password\">\n              </mat-form-field>\n              <small \n                *ngIf=\"password.errors && (password.dirty || password.touched) && (password?.errors?.required)\" \n                class=\"form-error-msg\"> Password is required </small>\n            </div>\n            \n            <button mat-raised-button class=\"mat-primary full-width mb-05\" [disabled]=\"lockscreenForm.invalid\">Unlock</button>\n            <button mat-raised-button [routerLink]=\"'/sessions/signin'\" color=\"accent\" class=\"mat-primary full-width\">It's not me!</button>\n          </form>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/sessions/lockscreen/lockscreen.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/sessions/lockscreen/lockscreen.component.ts ***!
  \*******************************************************************/
/*! exports provided: LockscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function() { return LockscreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LockscreenComponent = /** @class */ (function () {
    function LockscreenComponent() {
        this.lockscreenData = {
            password: ''
        };
    }
    LockscreenComponent.prototype.ngOnInit = function () {
    };
    LockscreenComponent.prototype.unlock = function () {
        console.log(this.lockscreenData);
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"])
    ], LockscreenComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"])
    ], LockscreenComponent.prototype, "submitButton", void 0);
    LockscreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lockscreen',
            template: __webpack_require__(/*! ./lockscreen.component.html */ "./src/app/views/sessions/lockscreen/lockscreen.component.html"),
            styles: [__webpack_require__(/*! ./lockscreen.component.css */ "./src/app/views/sessions/lockscreen/lockscreen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LockscreenComponent);
    return LockscreenComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/not-found/not-found.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/sessions/not-found/not-found.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/sessions/not-found/not-found.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/sessions/not-found/not-found.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap height-100 default-bg\">\n  <div class=\"app-error\">\n    <div class=\"fix\">\n      <mat-icon class=\"error-icon\" color=\"warn\">error</mat-icon>\n      <div class=\"error-text\">\n        <h1 class=\"error-title\">404</h1>\n        <div class=\"error-subtitle\">Page Not Found!</div>\n      </div>\n    </div>\n    \n    <div class=\"error-actions\">\n      <button \n      mat-raised-button \n      color=\"primary\"\n      class=\"mb-1 mr-05\"\n      [routerLink]=\"['/']\">Back to Dashboard</button>\n      \n      <button \n      mat-raised-button \n      color=\"warn\">Report this Problem</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/sessions/not-found/not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/sessions/not-found/not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/views/sessions/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/views/sessions/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/sessions.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/sessions/sessions.module.ts ***!
  \***************************************************/
/*! exports provided: SessionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsModule", function() { return SessionsModule; });
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared-material.module */ "./src/app/shared/shared-material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/views/sessions/forgot-password/forgot-password.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/views/sessions/lockscreen/lockscreen.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/views/sessions/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/views/sessions/signup/signup.component.ts");
/* harmony import */ var _sessions_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sessions.routing */ "./src/app/views/sessions/sessions.routing.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/views/sessions/not-found/not-found.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error/error.component */ "./src/app/views/sessions/error/error.component.ts");
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup2/signup2.component */ "./src/app/views/sessions/signup2/signup2.component.ts");
/* harmony import */ var _signup3_signup3_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup3/signup3.component */ "./src/app/views/sessions/signup3/signup3.component.ts");
/* harmony import */ var _signup4_signup4_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signup4/signup4.component */ "./src/app/views/sessions/signup4/signup4.component.ts");
/* harmony import */ var _signin3_signin3_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signin3/signin3.component */ "./src/app/views/sessions/signin3/signin3.component.ts");
/* harmony import */ var _signin4_signin4_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./signin4/signin4.component */ "./src/app/views/sessions/signin4/signin4.component.ts");
/* harmony import */ var _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signin2/signin2.component */ "./src/app/views/sessions/signin2/signin2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';













var SessionsModule = /** @class */ (function () {
    function SessionsModule() {
    }
    SessionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_11__["SessionsRoutes"])
            ],
            declarations: [_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_8__["LockscreenComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"], _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_14__["Signup2Component"], _signup3_signup3_component__WEBPACK_IMPORTED_MODULE_15__["Signup3Component"], _signup4_signup4_component__WEBPACK_IMPORTED_MODULE_16__["Signup4Component"], _signin3_signin3_component__WEBPACK_IMPORTED_MODULE_17__["Signin3Component"], _signin4_signin4_component__WEBPACK_IMPORTED_MODULE_18__["Signin4Component"], _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_19__["Signin2Component"]]
        })
    ], SessionsModule);
    return SessionsModule;
}());



/***/ }),

/***/ "./src/app/views/sessions/sessions.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/views/sessions/sessions.routing.ts ***!
  \****************************************************/
/*! exports provided: SessionsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsRoutes", function() { return SessionsRoutes; });
/* harmony import */ var _signup4_signup4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup4/signup4.component */ "./src/app/views/sessions/signup4/signup4.component.ts");
/* harmony import */ var _signup3_signup3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup3/signup3.component */ "./src/app/views/sessions/signup3/signup3.component.ts");
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup2/signup2.component */ "./src/app/views/sessions/signup2/signup2.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/views/sessions/forgot-password/forgot-password.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/views/sessions/lockscreen/lockscreen.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/views/sessions/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/views/sessions/signup/signup.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/views/sessions/not-found/not-found.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/error.component */ "./src/app/views/sessions/error/error.component.ts");
/* harmony import */ var _signin3_signin3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signin3/signin3.component */ "./src/app/views/sessions/signin3/signin3.component.ts");
/* harmony import */ var _signin4_signin4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signin4/signin4.component */ "./src/app/views/sessions/signin4/signin4.component.ts");
/* harmony import */ var _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signin2/signin2.component */ "./src/app/views/sessions/signin2/signin2.component.ts");












var SessionsRoutes = [
    {
        path: "",
        children: [
            {
                path: "signup",
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                data: { title: "Signup" }
            },
            {
                path: "signup2",
                component: _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_2__["Signup2Component"],
                data: { title: "Signup2" }
            },
            {
                path: "signin2",
                component: _signin2_signin2_component__WEBPACK_IMPORTED_MODULE_11__["Signin2Component"],
                data: { title: "Signin2" }
            },
            {
                path: "signup3",
                component: _signup3_signup3_component__WEBPACK_IMPORTED_MODULE_1__["Signup3Component"],
                data: { title: "Signup3" }
            },
            {
                path: "signin3",
                component: _signin3_signin3_component__WEBPACK_IMPORTED_MODULE_9__["Signin3Component"],
                data: { title: "sign-in-3" }
            },
            {
                path: "signup4",
                component: _signup4_signup4_component__WEBPACK_IMPORTED_MODULE_0__["Signup4Component"],
                data: { title: "Signup4" }
            },
            {
                path: "signin4",
                component: _signin4_signin4_component__WEBPACK_IMPORTED_MODULE_10__["Signin4Component"],
                data: { title: "Signin4" }
            },
            {
                path: "signin",
                component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
                data: { title: "Signin" }
            },
            {
                path: "forgot-password",
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"],
                data: { title: "Forgot password" }
            },
            {
                path: "lockscreen",
                component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__["LockscreenComponent"],
                data: { title: "Lockscreen" }
            },
            {
                path: "404",
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
                data: { title: "Not Found" }
            },
            {
                path: "error",
                component: _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"],
                data: { title: "Error" }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/views/sessions/signin/signin.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/sessions/signin/signin.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/sessions/signin/signin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signin/signin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap height-100 black\">\n  <div class=\"session-form-hold\">\n    <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\n    <mat-card>\n      <mat-card-content>\n        <div class=\"text-center pt-8 pb-16\">\n          <img width=\"60px\" src=\"assets/images/logo-lg.png\" alt=\"\" class=\"mb-05\">\n          <p class=\"text-muted m-0\">Sign in to your account</p>\n        </div>\n        <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\n          <div class=\"\">\n            <mat-form-field class=\"full-width\">\n              <input\n                matInput\n                name=\"username\"\n                [formControl]=\"signinForm.controls['username']\"\n                placeholder=\"Username\"\n                value=\"\">\n            </mat-form-field>\n            <small \n              *ngIf=\"signinForm.controls['username'].hasError('required') && signinForm.controls['username'].touched\" \n              class=\"form-error-msg\"> Username is required </small>\n          </div>\n\n          <div class=\"\">\n            <mat-form-field class=\"full-width\">\n              <input \n                type=\"password\"\n                name=\"password\"\n                matInput\n                [formControl]=\"signinForm.controls['password']\"\n                placeholder=\"Password\" \n                value=\"\">\n            </mat-form-field>\n            <small \n              *ngIf=\"signinForm.controls['password'].hasError('required') && signinForm.controls['password'].touched\" \n              class=\"form-error-msg\"> Password is required </small>\n          </div>\n          \n          <div class=\"pb-1\">\n            <mat-checkbox\n              name=\"rememberMe\"\n              [formControl]=\"signinForm.controls['rememberMe']\"\n              class=\"pb-1\">Remember this computer</mat-checkbox>\n          </div>\n          \n          <button mat-raised-button class=\"mat-primary full-width mb-1\" [disabled]=\"signinForm.invalid\">Sign in</button>\n          <div class=\"text-center\">\n            <a [routerLink]=\"'/sessions/forgot-password'\" class=\"mat-primary text-center full-width\">Forgot password</a>\n            <span fxFlex></span>\n            <a [routerLink]=\"'/sessions/signup'\" class=\"mat-primary text-center full-width\">Create a new account</a>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/sessions/signin/signin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/signin/signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
        });
    };
    SigninComponent.prototype.signin = function () {
        var signinData = this.signinForm.value;
        console.log(signinData);
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"])
    ], SigninComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"])
    ], SigninComponent.prototype, "submitButton", void 0);
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/views/sessions/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/views/sessions/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/signin2/signin2.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/sessions/signin2/signin2.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"seciton-left\">\n  <div class=\"section-left-content\">\n    <h1 class=\"text-36 font-weight-light\">Don't have an account?</h1>\n    <p class=\"mb-24 text-small\">Stop wasting time and money. It's free!</p>\n    <button mat-flat-button color=\"accent\" [routerLink]=\"'/sessions/signup2'\">Sign Up</button>\n  </div>\n</div>\n\n\n<div class=\"form-holder height-100vh mat-elevation-z4\" [perfectScrollbar]=\"{}\">\n  <form\n    [formGroup]=\"signupForm\"\n    class=\"signup-form\"\n    fxLayout=\"column\"\n    (ngSubmit)=\"onSubmit()\"\n  >\n    <!-- headline -->\n    <div class=\"form-headline text-center mb-32\">\n      <h1 class=\"font-weight-light\">Sign in to your account</h1>\n    </div>\n    <div class=\"mb-48\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n      <img\n        width=\"200px\"\n        src=\"assets/images/illustrations/breaking_barriers.svg\"\n        alt=\"\"\n      />\n    </div>\n\n    <mat-form-field class=\"full-width\" appearance=\"outline\">\n      <mat-label>Email</mat-label>\n      <input\n        matInput\n        formControlName=\"email\"\n        type=\"email\"\n        name=\"email\"\n        placeholder=\"Email\"\n      />\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\" appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input\n        matInput\n        formControlName=\"password\"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"********\"\n      />\n    </mat-form-field>\n\n    <mat-checkbox class=\"mb-24\" formControlName=\"agreed\"\n      >I agree with terms and condtions</mat-checkbox\n    >\n    <button  mat-raised-button color=\"primary\">Signin</button>\n    <mat-divider class=\"my-32\"></mat-divider>\n\n    <div class=\"mb-24\" fxLayout=\"column\" fxLayoutGap=\"16px\">\n      <button mat-raised-button color=\"warn\" type=\"button\">\n        Signin with Auth0\n      </button>\n      <button mat-raised-button color=\"warn\" type=\"button\">Firebase Signin</button>\n    </div>\n\n    <!-- <div class=\"text-center\">\n      <a\n        [routerLink]=\"'/sessions/signup2'\"\n        class=\"mat-color-primary text-center full-width\"\n        >Sign up</a\n      >\n    </div> -->\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/sessions/signin2/signin2.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/sessions/signin2/signin2.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL3NpZ25pbjIvc2lnbmluMi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/sessions/signin2/signin2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signin2/signin2.component.ts ***!
  \*************************************************************/
/*! exports provided: Signin2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin2Component", function() { return Signin2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Signin2Component = /** @class */ (function () {
    function Signin2Component(fb) {
        this.fb = fb;
    }
    Signin2Component.prototype.ngOnInit = function () {
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].equalTo(password));
        this.signupForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: password,
            agreed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Signin2Component.prototype.onSubmit = function () {
        if (!this.signupForm.invalid) {
            // do what you wnat with your data
            console.log(this.signupForm.value);
        }
    };
    Signin2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin2',
            template: __webpack_require__(/*! ./signin2.component.html */ "./src/app/views/sessions/signin2/signin2.component.html"),
            styles: [__webpack_require__(/*! ./signin2.component.scss */ "./src/app/views/sessions/signin2/signin2.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], Signin2Component);
    return Signin2Component;
}());



/***/ }),

/***/ "./src/app/views/sessions/signin3/signin3.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/sessions/signin3/signin3.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup3-wrap\">\n  <div\n    class=\"signup3-form-holder mat-elevation-z4 py-48\"\n    [perfectScrollbar]\n    [@animate]=\"{value:'*',params:{y: '40px',opacity:'0',delay:'100ms', duration: '400ms'}}\"\n  >\n    <!-- headline -->\n    <div class=\"form-headline text-center mb-32\">\n      <h1 class=\"font-weight-light\">Sign in to your account</h1>\n    </div>\n    <div class=\"mb-32\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n      <img\n        width=\"200px\"\n        src=\"assets/images/illustrations/breaking_barriers.svg\"\n        alt=\"\"\n      />\n    </div>\n\n    <form [formGroup]=\"signupForm\" class=\"signup3-form\" (ngSubmit)=\"onSubmit()\">\n      <div>\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\n          <mat-label>Username</mat-label>\n          <input\n            matInput\n            formControlName=\"username\"\n            type=\"text\"\n            name=\"username\"\n            placeholder=\"Username\"\n          />\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input\n            matInput\n            formControlName=\"password\"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"********\"\n          />\n        </mat-form-field>\n      </div>\n      <div class=\"mb-24\">\n        <button fxFill mat-raised-button color=\"primary\">Sign In</button>\n      </div>\n      <p>\n        Don't have an account?\n        <a\n          class=\"mat-color-primary font-weight-bold mx-8\"\n          routerLink=\"/sessions/signup3\"\n          >Sign Up</a\n        >\n      </p>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/sessions/signin3/signin3.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/sessions/signin3/signin3.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL3NpZ25pbjMvc2lnbmluMy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/sessions/signin3/signin3.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signin3/signin3.component.ts ***!
  \*************************************************************/
/*! exports provided: Signin3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin3Component", function() { return Signin3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Signin3Component = /** @class */ (function () {
    function Signin3Component(fb) {
        this.fb = fb;
    }
    Signin3Component.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Signin3Component.prototype.onSubmit = function () {
        if (this.signupForm.valid) {
            // do what you want to do with your data
            console.log(this.signupForm.value);
        }
    };
    Signin3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin3',
            template: __webpack_require__(/*! ./signin3.component.html */ "./src/app/views/sessions/signin3/signin3.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_2__["egretAnimations"],
            styles: [__webpack_require__(/*! ./signin3.component.scss */ "./src/app/views/sessions/signin3/signin3.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], Signin3Component);
    return Signin3Component;
}());



/***/ }),

/***/ "./src/app/views/sessions/signin4/signin4.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/sessions/signin4/signin4.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  [perfectScrollbar]=\"{}\"\n  class=\"height-100vh signup4-wrap\"\n  fxLayout=\"row wrap\"\n  fxLayoutAlign=\"center center\"\n>\n  <div\n    class=\"signup4-container mat-elevation-z4 white\"\n    fxLayout=\"row wrap\"\n    fxLayout.xs=\"column\"\n    fxLayoutAlign=\"start stretch\"\n    fxFlex=\"60\"\n    fxFlex.xs=\"94\"\n    fxFlex.sm=\"80\"\n    [@animate]=\"{value:'*',params:{y:'40px',opacity:'0',delay:'100ms', duration: '400ms'}}\"\n  >\n\n  <!-- Left Side content -->\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" \n      class=\"signup4-header\" fxFlex=\"40\">\n\n        <div class=\"\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n            <img width=\"200px\" src=\"assets/images/illustrations/lighthouse.svg\" alt=\"\">\n        </div>\n\n      </div>\n\n    <!-- Right side content -->\n   <div fxFlex=\"60\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n    <form  [formGroup]=\"signupForm\" class=\"signup4-form grey-100\" (ngSubmit)=\"onSubmit()\">\n      \n\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input\n            matInput\n            formControlName=\"email\"\n            type=\"email\"\n            name=\"email\"\n            placeholder=\"Email\"\n          />\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input\n            matInput\n            formControlName=\"password\"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"********\"\n          />\n        </mat-form-field>\n\n        <mat-checkbox formControlName=\"agreed\"\n        >I agree with terms and condtions</mat-checkbox\n      >\n      \n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" style=\"margin-top: 20px;\">\n        <button mat-flat-button color=\"primary\">Sign In</button>\n        <span class=\"px-16\">or</span>\n        <a class=\"font-weight-bold mat-color-primary\" routerLink=\"/sessions/signup4\">Sign Up</a>\n      </div>\n\n      <!-- <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" style=\"margin-top: 20px\">\n          <span>or connect with </span>\n          <div>\n            icons goes here\n          </div>\n        </div> -->\n\n    </form>\n   </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/sessions/signin4/signin4.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/sessions/signin4/signin4.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL3NpZ25pbjQvc2lnbmluNC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/sessions/signin4/signin4.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signin4/signin4.component.ts ***!
  \*************************************************************/
/*! exports provided: Signin4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin4Component", function() { return Signin4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Signin4Component = /** @class */ (function () {
    function Signin4Component(fb) {
        this.fb = fb;
    }
    Signin4Component.prototype.ngOnInit = function () {
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].equalTo(password));
        this.signupForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: password,
            agreed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Signin4Component.prototype.onSubmit = function () {
        if (!this.signupForm.invalid) {
            // do what you wnat with your data
            console.log(this.signupForm.value);
        }
    };
    Signin4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin4',
            template: __webpack_require__(/*! ./signin4.component.html */ "./src/app/views/sessions/signin4/signin4.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_3__["egretAnimations"],
            styles: [__webpack_require__(/*! ./signin4.component.scss */ "./src/app/views/sessions/signin4/signin4.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], Signin4Component);
    return Signin4Component;
}());



/***/ }),

/***/ "./src/app/views/sessions/signup/signup.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/sessions/signup/signup.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/sessions/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap height-100 black\">\n  <div class=\"session-form-hold\">\n    <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\n    <mat-card>\n      <mat-card-content>\n        <div class=\"text-center pt-8 pb-16\">\n          <img width=\"60px\" src=\"assets/images/logo-lg.png\" alt=\"\" class=\"mb-05\">\n           <h2>Lets get started</h2>\n          <p class=\"text-muted m-0\">Sign up to use our service</p>\n        </div>\n        <form [formGroup]=\"signupForm\"  (ngSubmit)=\"signup()\">\n          <div class=\"\">\n            <mat-form-field class=\"full-width\">\n              <input\n                matInput\n                type=\"email\"\n                name=\"email\"\n                [formControl]=\"signupForm.controls['email']\"\n                placeholder=\"Your Email\"\n                value=\"\">\n            </mat-form-field>\n            <small \n              *ngIf=\"signupForm.controls['email'].hasError('required') && signupForm.controls['email'].touched\" \n              class=\"form-error-msg\"> Email is required </small>\n\n              <small \n                *ngIf=\"signupForm.controls['email'].hasError('email') && signupForm.controls['email'].touched\" \n                class=\"form-error-msg\"> Invaild email address </small>\n          </div>\n\n          <div class=\"\">\n            <mat-form-field class=\"full-width\">\n              <input \n                type=\"password\"\n                name=\"password\"\n                matInput\n                [formControl]=\"signupForm.controls['password']\"\n                placeholder=\"Password\" \n                value=\"\">\n            </mat-form-field>\n            <small \n              *ngIf=\"signupForm.controls['password'].hasError('required') && signupForm.controls['password'].touched\" \n              class=\"form-error-msg\"> Password is required </small>\n          </div>\n          \n          <div class=\"\">\n            <mat-form-field class=\"full-width\">\n              <input\n                type=\"password\"\n                name=\"confirmPassword\"\n                matInput\n                [formControl]=\"signupForm.controls['confirmPassword']\"\n                placeholder=\"Confirm Password\"\n                value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"signupForm.controls['confirmPassword'].hasError('required') && signupForm.controls['confirmPassword'].touched\" class=\"form-error-msg\">Confirm password is required.</small>\n            <small *ngIf=\"signupForm.controls['confirmPassword'].hasError('equalTo')\" class=\"form-error-msg\">Passwords do not math.</small>\n          </div>\n          \n          <div class=\"pb-1\">\n            <mat-checkbox\n              name=\"agreed\"\n              [formControl]=\"signupForm.controls['agreed']\"\n              class=\"pb-1\">I have read and agree to the terms of service.</mat-checkbox>\n\n              <small \n                *ngIf=\"signupForm.controls['agreed'].hasError('agreed') && signupForm.controls['agreed'].touched\" \n                class=\"form-error-msg\"> You must agree to the terms and conditions </small>\n          </div>\n\n          <button mat-raised-button class=\"mat-primary full-width mb-1\" [disabled]=\"signupForm.invalid\">Sign up</button>\n          <div class=\"text-center\">\n            <a [routerLink]=\"'/sessions/signin'\" class=\"text-center full-width\">Sign in to existing account</a>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/sessions/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].equalTo(password));
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: password,
            confirmPassword: confirmPassword,
            agreed: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', function (control) {
                var agreed = control.value;
                if (!agreed) {
                    return { agreed: true };
                }
                return null;
            })
        });
    };
    SignupComponent.prototype.signup = function () {
        var signupData = this.signupForm.value;
        console.log(signupData);
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"])
    ], SignupComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"])
    ], SignupComponent.prototype, "submitButton", void 0);
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/views/sessions/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/views/sessions/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/signup2/signup2.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/sessions/signup2/signup2.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"seciton-left\">\n</div>\n  <div\n    class=\"form-holder height-100vh mat-elevation-z4\"\n    [perfectScrollbar]=\"{}\"\n  >\n    <form\n      [formGroup]=\"signupForm\"\n      class=\"signup-form\"\n      fxLayout=\"column\"\n      fxLayoutAlign=\"start\"\n      (ngSubmit)=\"onSubmit()\"\n    >\n      <!-- headline -->\n      <div class=\"form-headline text-center mb-16\">\n        <h1 class=\"font-weight-bold\">Lets get started!</h1>\n        <p class=\"text-muted\">Create an account get unlimited access</p>\n      </div>\n      <div class=\"mb-32\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n          <img width=\"200px\" src=\"assets/images/illustrations/posting_photo.svg\" alt=\"\">\n      </div>\n      <div fxLayout=\"row wrap\" fxLayoutGap.md=\"16px\" fxLayoutGap.lg=\"16px\">\n        <mat-form-field fxFlex=\"1 1 0%\" appearance=\"outline\">\n          <mat-label>First name</mat-label>\n          <input\n            formControlName=\"firstName\"\n            matInput\n            type=\"text\"\n            name=\"first_name\"\n            placeholder=\"First name\"\n          />\n        </mat-form-field>\n        <mat-form-field fxFlex=\"1 1 0%\" appearance=\"outline\">\n          <mat-label>Last name</mat-label>\n          <input\n            formControlName=\"lastName\"\n            matInput\n            type=\"text\"\n            name=\"Last_name\"\n            placeholder=\"Last name\"\n          />\n        </mat-form-field>\n      </div>\n\n      <mat-form-field class=\"full-width\" appearance=\"outline\">\n        <mat-label>Username</mat-label>\n        <input\n          matInput\n          formControlName=\"username\"\n          type=\"text\"\n          name=\"username\"\n          placeholder=\"Username\"\n        />\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\" appearance=\"outline\">\n        <mat-label>Email</mat-label>\n        <input\n          matInput\n          formControlName=\"email\"\n          type=\"email\"\n          name=\"email\"\n          placeholder=\"Email\"\n        />\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\" appearance=\"outline\">\n        <mat-label>Password</mat-label>\n        <input\n          matInput\n          formControlName=\"password\"\n          type=\"password\"\n          name=\"password\"\n          placeholder=\"********\"\n        />\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\" appearance=\"outline\">\n        <mat-label>Confirm password</mat-label>\n        <input\n          matInput\n          type=\"password\"\n          name=\"confirm_password\"\n          placeholder=\"********\"\n          formControlName=\"confirmPassword\"\n        />\n        <mat-error>\n          Password didn't match\n        </mat-error>\n      </mat-form-field>\n\n      <mat-checkbox class=\"mb-24\" formControlName=\"agreed\"\n        >I agree with terms and condtions</mat-checkbox\n      >\n      <button  mat-raised-button color=\"primary\">Signup</button>\n      <mat-divider class=\"my-32\"></mat-divider>\n\n      <div fxLayout=\"column\" fxLayoutGap=\"16px\" class=\"mb-24\">\n        <button mat-raised-button color=\"warn\" type=\"button\">\n          Signup with Auth0\n        </button>\n        <button mat-raised-button color=\"warn\" type=\"button\">Firebase Signup</button>\n      </div>\n\n      <div class=\"text-center\">\n          <a\n            [routerLink]=\"'/sessions/signin2'\"\n            class=\"mat-color-primary text-center full-width\"\n            >Sign in with an existing account</a\n          >\n        </div>\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/views/sessions/signup2/signup2.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/sessions/signup2/signup2.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL3NpZ251cDIvc2lnbnVwMi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/sessions/signup2/signup2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signup2/signup2.component.ts ***!
  \*************************************************************/
/*! exports provided: Signup2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup2Component", function() { return Signup2Component; });
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Signup2Component = /** @class */ (function () {
    function Signup2Component(fb) {
        this.fb = fb;
    }
    Signup2Component.prototype.ngOnInit = function () {
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_0__["CustomValidators"].equalTo(password));
        this.signupForm = this.fb.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: password,
            confirmPassword: confirmPassword,
            agreed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Signup2Component.prototype.onSubmit = function () {
        if (!this.signupForm.invalid) {
            // do what you wnat with your data
            console.log(this.signupForm.value);
        }
    };
    Signup2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-signup2",
            template: __webpack_require__(/*! ./signup2.component.html */ "./src/app/views/sessions/signup2/signup2.component.html"),
            styles: [__webpack_require__(/*! ./signup2.component.scss */ "./src/app/views/sessions/signup2/signup2.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], Signup2Component);
    return Signup2Component;
}());



/***/ }),

/***/ "./src/app/views/sessions/signup3/signup3.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/sessions/signup3/signup3.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup3-wrap\">\n  <div\n    class=\"signup3-form-holder mat-elevation-z4 pt-48 pb-16\"\n    [perfectScrollbar]=\"{}\"\n    [@animate]=\"{value:'*',params:{y: '40px', opacity:'0',delay:'100ms', duration: '400ms'}}\"\n  >\n    <!-- headline -->\n    <div class=\"form-headline text-center mb-32\">\n      <h1 class=\"font-weight-bold\">Lets get started!</h1>\n      <p class=\"text-muted\">Create an account get unlimited access</p>\n    </div>\n    <div class=\"mb-32\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n      <img\n        width=\"200px\"\n        src=\"assets/images/illustrations/posting_photo.svg\"\n        alt=\"\"\n      />\n    </div>\n\n    <form [formGroup]=\"signupForm\" class=\"signup3-form\" (ngSubmit)=\"onSubmit()\">\n      <div>\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\n          <mat-label>Username</mat-label>\n          <input\n            matInput\n            formControlName=\"username\"\n            type=\"text\"\n            name=\"username\"\n            placeholder=\"Username\"\n          />\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input\n            matInput\n            formControlName=\"email\"\n            type=\"email\"\n            name=\"email\"\n            placeholder=\"Email\"\n          />\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input\n            matInput\n            formControlName=\"password\"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"********\"\n          />\n        </mat-form-field>\n      </div>\n      <div class=\"mb-24\">\n        <button fxFill mat-raised-button color=\"primary\">Signup</button>\n      </div>\n      <p>\n        Don't have an account?\n        <a\n          class=\"mat-color-primary font-weight-bold mx-8\"\n          routerLink=\"/sessions/signin3\"\n          >Sign In</a\n        >\n      </p>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/sessions/signup3/signup3.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/sessions/signup3/signup3.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL3NpZ251cDMvc2lnbnVwMy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/sessions/signup3/signup3.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signup3/signup3.component.ts ***!
  \*************************************************************/
/*! exports provided: Signup3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup3Component", function() { return Signup3Component; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Signup3Component = /** @class */ (function () {
    function Signup3Component(fb) {
        this.fb = fb;
    }
    Signup3Component.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    };
    Signup3Component.prototype.onSubmit = function () {
        if (this.signupForm.valid) {
            // do what you want to do with your data
            console.log(this.signupForm.value);
        }
    };
    Signup3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signup3",
            template: __webpack_require__(/*! ./signup3.component.html */ "./src/app/views/sessions/signup3/signup3.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_2__["egretAnimations"],
            styles: [__webpack_require__(/*! ./signup3.component.scss */ "./src/app/views/sessions/signup3/signup3.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], Signup3Component);
    return Signup3Component;
}());



/***/ }),

/***/ "./src/app/views/sessions/signup4/signup4.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/sessions/signup4/signup4.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  [perfectScrollbar]=\"{}\"\n  class=\"height-100vh signup4-wrap\"\n  fxLayout=\"row wrap\"\n  fxLayoutAlign=\"center center\"\n>\n  <div\n    class=\"signup4-container mat-elevation-z4\"\n    fxLayout=\"row wrap\"\n    fxLayout.xs=\"column\"\n    fxLayoutAlign=\"start stretch\"\n    fxFlex=\"60\"\n    fxFlex.xs=\"94\"\n    fxFlex.sm=\"80\"\n    [@animate]=\"{value:'*',params:{y:'120px',opacity:'0',delay:'100ms', duration: '400ms'}}\"\n  >\n\n  <!-- Left Side content -->\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" \n  class=\"signup4-header grey-200\" fxFlex=\"40\">\n\n    <div class=\"\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n        <img width=\"200px\" src=\"assets/images/illustrations/posting_photo.svg\" alt=\"\">\n    </div>\n\n  </div>\n\n    <!-- Right side content -->\n   <div fxFlex=\"60\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n    <form  [formGroup]=\"signupForm\" class=\"signup4-form white\" (ngSubmit)=\"onSubmit()\">\n        \n      <mat-form-field class=\"full-width\" appearance=\"outline\">\n          <mat-label>Username</mat-label>\n          <input\n            matInput\n            formControlName=\"username\"\n            type=\"text\"\n            name=\"username\"\n            placeholder=\"Username\"\n          />\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input\n            matInput\n            formControlName=\"email\"\n            type=\"email\"\n            name=\"email\"\n            placeholder=\"Email\"\n          />\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input\n            matInput\n            formControlName=\"password\"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"********\"\n          />\n        </mat-form-field>\n\n        <mat-checkbox formControlName=\"agreed\"\n        >I agree with terms and condtions</mat-checkbox\n      >\n      \n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" style=\"margin-top: 20px;\">\n        <button mat-flat-button color=\"primary\">Sign Up</button>\n        <span style=\"padding: 0px 8px 0px 16px;\">or</span>\n        <a class=\"font-weight-bold mat-color-primary\" routerLink=\"/sessions/signin4\">Sign In</a>\n      </div>\n\n      <!-- <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" style=\"margin-top: 20px\">\n          <span>or connect with </span>\n          <div>\n            icons goes here\n          </div>\n        </div> -->\n\n    </form>\n   </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/sessions/signup4/signup4.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/sessions/signup4/signup4.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL3NpZ251cDQvc2lnbnVwNC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/sessions/signup4/signup4.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signup4/signup4.component.ts ***!
  \*************************************************************/
/*! exports provided: Signup4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup4Component", function() { return Signup4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Signup4Component = /** @class */ (function () {
    function Signup4Component(fb) {
        this.fb = fb;
    }
    Signup4Component.prototype.ngOnInit = function () {
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].equalTo(password));
        this.signupForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: password,
            agreed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Signup4Component.prototype.onSubmit = function () {
        if (!this.signupForm.invalid) {
            // do what you wnat with your data
            console.log(this.signupForm.value);
        }
    };
    Signup4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup4',
            template: __webpack_require__(/*! ./signup4.component.html */ "./src/app/views/sessions/signup4/signup4.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_3__["egretAnimations"],
            styles: [__webpack_require__(/*! ./signup4.component.scss */ "./src/app/views/sessions/signup4/signup4.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], Signup4Component);
    return Signup4Component;
}());



/***/ })

}]);
//# sourceMappingURL=views-sessions-sessions-module.js.map