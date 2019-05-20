(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-home-home-module"],{

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\" [perfectScrollbar]>\n  <section class=\"home-section section-intro text-center\">\n    <div class=\"container\">\n        <span class=\"egret\">Egret</span>\n        <img src=\"assets/images/5-star.png\" alt=\"\">\n        <h1>Angular 7+ Material Design Admin Template</h1>\n        <p>Quick start your project within <strong>few minutes</strong>. \n          Seed project is included.</p>\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"center center\" class=\"mb-48\">\n          <button mat-raised-button mat-lg-button (click)=\"goToDashboard(mainVersion)\">MAIN DASHBOARD</button>\n          <span fxFlex=\"8px\"></span>\n          <a href=\"https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi\" target=\"_blank\">\n            <button mat-raised-button mat-lg-button class=\"pink pink-500-fg\">BUY EGRET</button>\n          </a>\n        </div>\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"center center\" class=\"pt-48\">\n          <a href=\"http://demos.ui-lib.com/egret-doc/\" mat-button color=\"accent\" target=\"_blank\">Documentation</a>\n          <a href=\"https://ui-lib.com/github-access/\" mat-button color=\"warn\" target=\"_blank\">GitHub Access</a>\n        </div>\n    </div>\n  </section>\n  <section id=\"demos\" class=\"home-section section-demos\">\n    <div class=\"container\">\n      <div class=\"text-center\">\n          <h2 class=\"text-20 text-uppercase mt-0 mb-1\">Limitless layout variaitons</h2>\n      </div>\n      <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\">\n        <div class=\"demo-box-wrap\" fxFlex=\"33.33\" *ngFor=\"let v of versions\"> \n          <div class=\"text-center demo-box\" [matTooltip]=\"v.name\" matTooltipPosition=\"above\">\n            <div (click)=\"goToDashboard(v)\" class=\"p-0 screenshot\">\n              <img [src]=\"v.photo\">\n            </div>\n            <!-- <div class=\"caption\">\n              <h3>{{v.name}}</h3>\n              <button mat-raised-button color=\"primary\" (click)=\"goToDashboard(v)\">View Demo</button>\n            </div> -->\n          </div>\n        </div>\n      </div>\n\n      <div class=\"text-center\">\n        <p>Configure your own layout using customizer.</p>\n        <button mat-fab color=\"primary\" (click)=\"goToMainDash()\"><mat-icon>settings</mat-icon></button>\n      </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import PerfectScrollbar from 'perfect-scrollbar';
var HomeComponent = /** @class */ (function () {
    // private homePS: PerfectScrollbar;
    function HomeComponent(router, loader) {
        this.router = router;
        this.loader = loader;
        /****** Only for demo) **********/
        this.versions = [
            {
                name: 'Dark sidebar',
                photo: 'assets/images/screenshots/black_sidebar.png',
                dest: 'dashboard/analytics',
                conf: "{\n        \"navigationPos\": \"side\",\n        \"sidebarStyle\": \"full\",\n        \"sidebarColor\": \"black\",\n        \"topbarColor\": \"white\",\n        \"dir\": \"ltr\",\n        \"useBreadcrumb\": true,\n        \"topbarFixed\": false,\n        \"breadcrumb\": \"simple\",\n        \"matTheme\": \"egret-navy\"\n      }"
            }, {
                name: 'Light Sidebar',
                photo: 'assets/images/screenshots/white_sidebar.png',
                dest: 'dashboard/default',
                conf: "{\n        \"navigationPos\": \"side\",\n        \"sidebarStyle\": \"full\",\n        \"sidebarColor\": \"white\",\n        \"topbarColor\": \"white\",\n        \"dir\": \"ltr\",\n        \"useBreadcrumb\": true,\n        \"topbarFixed\": false,\n        \"breadcrumb\": \"simple\",\n        \"matTheme\": \"egret-blue\"\n      }"
            },
            {
                name: 'Dark Theme',
                photo: 'assets/images/screenshots/dark_theme.png',
                dest: 'dashboard/crypto',
                conf: "{\n        \"navigationPos\": \"side\",\n        \"sidebarStyle\": \"full\",\n        \"sidebarColor\": \"black\",\n        \"topbarColor\": \"dark-gray\",\n        \"dir\": \"ltr\",\n        \"useBreadcrumb\": true,\n        \"topbarFixed\": false,\n        \"breadcrumb\": \"simple\",\n        \"matTheme\": \"egret-dark-purple\"\n      }"
            },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.mainVersion = this.versions[0];
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // if (this.homePS) this.homePS.destroy();
        this.loader.close();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this.homePS = new PerfectScrollbar('.scrollable')
        // });
    };
    /****** Remove this (Only for demo) **********/
    HomeComponent.prototype.goToDashboard = function (v) {
        var origin = window.location.origin;
        if (v.theme) {
            return window.location.href = origin + "/" + v.dest + "/?layout=" + v.conf + "&theme=" + v.theme;
        }
        window.location.href = origin + "/" + v.dest + "/?layout=" + v.conf;
    };
    HomeComponent.prototype.goToMainDash = function () {
        this.loader.open();
        this.router.navigateByUrl('/dashboard/analytics');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__["AppLoaderService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.routing */ "./src/app/views/home/home.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_home_routing__WEBPACK_IMPORTED_MODULE_7__["HomeRoutes"])
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/views/home/home.routing.ts":
/*!********************************************!*\
  !*** ./src/app/views/home/home.routing.ts ***!
  \********************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");

var HomeRoutes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=views-home-home-module.js.map