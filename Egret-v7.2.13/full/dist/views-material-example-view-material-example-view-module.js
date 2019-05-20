(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-material-example-view-material-example-view-module"],{

/***/ "./src/app/views/material-example-view/material-example-view-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/material-example-view/material-example-view-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MaterialExampleViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialExampleViewRoutingModule", function() { return MaterialExampleViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_example_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-example-view.component */ "./src/app/views/material-example-view/material-example-view.component.ts");
/* harmony import */ var app_shared_components_example_viewer_template_example_viewer_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/example-viewer-template/example-viewer-template.component */ "./src/app/shared/components/example-viewer-template/example-viewer-template.component.ts");
/* harmony import */ var assets_examples_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/examples/material */ "./src/assets/examples/material/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: ":id",
        component: _material_example_view_component__WEBPACK_IMPORTED_MODULE_2__["MaterialExampleViewComponent"],
        children: [
            {
                path: "",
                component: app_shared_components_example_viewer_template_example_viewer_template_component__WEBPACK_IMPORTED_MODULE_3__["EgretExampleViewerTemplateComponent"],
                data: {
                    map: assets_examples_material__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_EXAMPLE_COMPONENT_MAP"],
                    components: assets_examples_material__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_EXAMPLE_COMPONENTS"],
                    path: "assets/examples/material/"
                }
            }
        ],
        data: { title: "Material", breadcrumb: "UI Kits" }
    }
];
var MaterialExampleViewRoutingModule = /** @class */ (function () {
    function MaterialExampleViewRoutingModule() {
    }
    MaterialExampleViewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MaterialExampleViewRoutingModule);
    return MaterialExampleViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/material-example-view/material-example-view.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/material-example-view/material-example-view.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/views/material-example-view/material-example-view.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/material-example-view/material-example-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: MaterialExampleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialExampleViewComponent", function() { return MaterialExampleViewComponent; });
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

var MaterialExampleViewComponent = /** @class */ (function () {
    function MaterialExampleViewComponent() {
    }
    MaterialExampleViewComponent.prototype.ngOnInit = function () {
    };
    MaterialExampleViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-material-example-view',
            template: __webpack_require__(/*! ./material-example-view.component.html */ "./src/app/views/material-example-view/material-example-view.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MaterialExampleViewComponent);
    return MaterialExampleViewComponent;
}());



/***/ }),

/***/ "./src/app/views/material-example-view/material-example-view.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/material-example-view/material-example-view.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MaterialExampleViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialExampleViewModule", function() { return MaterialExampleViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_example_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-example-view-routing.module */ "./src/app/views/material-example-view/material-example-view-routing.module.ts");
/* harmony import */ var _material_example_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-example-view.component */ "./src/app/views/material-example-view/material-example-view.component.ts");
/* harmony import */ var assets_examples_material_material_examples_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/examples/material/material-examples.module */ "./src/assets/examples/material/material-examples.module.ts");
/* harmony import */ var app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialExampleViewModule = /** @class */ (function () {
    function MaterialExampleViewModule() {
    }
    MaterialExampleViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_material_example_view_component__WEBPACK_IMPORTED_MODULE_3__["MaterialExampleViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
                assets_examples_material_material_examples_module__WEBPACK_IMPORTED_MODULE_4__["MaterialExamplesModule"],
                _material_example_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["MaterialExampleViewRoutingModule"]
            ]
        })
    ], MaterialExampleViewModule);
    return MaterialExampleViewModule;
}());



/***/ }),

/***/ "./src/assets/examples/material/accordin-expansion-panel/accordin-expansion-panel.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/examples/material/accordin-expansion-panel/accordin-expansion-panel.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n    </mat-form-field>\n\n    <mat-action-row>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Country\">\n    </mat-form-field>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n</mat-accordion>\n"

/***/ }),

/***/ "./src/assets/examples/material/accordin-expansion-panel/accordin-expansion-panel.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/examples/material/accordin-expansion-panel/accordin-expansion-panel.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n\nmat-form-field {\n  margin-right: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9hY2NvcmRpbi1leHBhbnNpb24tcGFuZWwvYWNjb3JkaW4tZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2FjY29yZGluLWV4cGFuc2lvbi1wYW5lbC9hY2NvcmRpbi1leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/accordin-expansion-panel/accordin-expansion-panel.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/examples/material/accordin-expansion-panel/accordin-expansion-panel.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AccordinExpansionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordinExpansionPanelComponent", function() { return AccordinExpansionPanelComponent; });
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

var AccordinExpansionPanelComponent = /** @class */ (function () {
    function AccordinExpansionPanelComponent() {
        this.step = 0;
    }
    AccordinExpansionPanelComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    AccordinExpansionPanelComponent.prototype.nextStep = function () {
        this.step++;
    };
    AccordinExpansionPanelComponent.prototype.prevStep = function () {
        this.step--;
    };
    AccordinExpansionPanelComponent.prototype.ngOnInit = function () {
    };
    AccordinExpansionPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accordin-expansion-panel',
            template: __webpack_require__(/*! ./accordin-expansion-panel.component.html */ "./src/assets/examples/material/accordin-expansion-panel/accordin-expansion-panel.component.html"),
            styles: [__webpack_require__(/*! ./accordin-expansion-panel.component.scss */ "./src/assets/examples/material/accordin-expansion-panel/accordin-expansion-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccordinExpansionPanelComponent);
    return AccordinExpansionPanelComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/align-tab-group/align-tab-group.component.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/align-tab-group/align-tab-group.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-align-tabs=\"start\">\n    <mat-tab label=\"First\">Content 1</mat-tab>\n    <mat-tab label=\"Second\">Content 2</mat-tab>\n    <mat-tab label=\"Third\">Content 3</mat-tab>\n  </mat-tab-group>\n  \n  <mat-tab-group mat-align-tabs=\"center\">\n    <mat-tab label=\"First\">Content 1</mat-tab>\n    <mat-tab label=\"Second\">Content 2</mat-tab>\n    <mat-tab label=\"Third\">Content 3</mat-tab>\n  </mat-tab-group>\n  \n  <mat-tab-group mat-align-tabs=\"end\">\n    <mat-tab label=\"First\">Content 1</mat-tab>\n    <mat-tab label=\"Second\">Content 2</mat-tab>\n    <mat-tab label=\"Third\">Content 3</mat-tab>\n  </mat-tab-group>\n  "

/***/ }),

/***/ "./src/assets/examples/material/align-tab-group/align-tab-group.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/align-tab-group/align-tab-group.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-group {\n  margin-bottom: 48px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9hbGlnbi10YWItZ3JvdXAvYWxpZ24tdGFiLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9hbGlnbi10YWItZ3JvdXAvYWxpZ24tdGFiLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/align-tab-group/align-tab-group.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/align-tab-group/align-tab-group.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AlignTabGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignTabGroupComponent", function() { return AlignTabGroupComponent; });
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

var AlignTabGroupComponent = /** @class */ (function () {
    function AlignTabGroupComponent() {
    }
    AlignTabGroupComponent.prototype.ngOnInit = function () {
    };
    AlignTabGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-align-tab-group',
            template: __webpack_require__(/*! ./align-tab-group.component.html */ "./src/assets/examples/material/align-tab-group/align-tab-group.component.html"),
            styles: [__webpack_require__(/*! ./align-tab-group.component.scss */ "./src/assets/examples/material/align-tab-group/align-tab-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlignTabGroupComponent);
    return AlignTabGroupComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/animation-tab-group/animation-tab-group.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/animation-tab-group/animation-tab-group.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>No animation</h3>\n\n<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<h3>Very slow animation</h3>\n<mat-tab-group animationDuration=\"2000ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/assets/examples/material/animation-tab-group/animation-tab-group.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/animation-tab-group/animation-tab-group.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-group {\n  margin-bottom: 48px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9hbmltYXRpb24tdGFiLWdyb3VwL2FuaW1hdGlvbi10YWItZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2FuaW1hdGlvbi10YWItZ3JvdXAvYW5pbWF0aW9uLXRhYi1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFiLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/animation-tab-group/animation-tab-group.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/animation-tab-group/animation-tab-group.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AnimationTabGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationTabGroupComponent", function() { return AnimationTabGroupComponent; });
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

var AnimationTabGroupComponent = /** @class */ (function () {
    function AnimationTabGroupComponent() {
    }
    AnimationTabGroupComponent.prototype.ngOnInit = function () {
    };
    AnimationTabGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animation-tab-group',
            template: __webpack_require__(/*! ./animation-tab-group.component.html */ "./src/assets/examples/material/animation-tab-group/animation-tab-group.component.html"),
            styles: [__webpack_require__(/*! ./animation-tab-group.component.scss */ "./src/assets/examples/material/animation-tab-group/animation-tab-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnimationTabGroupComponent);
    return AnimationTabGroupComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/appearance-form-field/appearance-form-field.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/appearance-form-field/appearance-form-field.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <mat-form-field appearance=\"legacy\">\n    <mat-label>Legacy form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"standard\">\n    <mat-label>Standard form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n"

/***/ }),

/***/ "./src/assets/examples/material/appearance-form-field/appearance-form-field.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/appearance-form-field/appearance-form-field.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2FwcGVhcmFuY2UtZm9ybS1maWVsZC9hcHBlYXJhbmNlLWZvcm0tZmllbGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/appearance-form-field/appearance-form-field.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/examples/material/appearance-form-field/appearance-form-field.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AppearanceFormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceFormFieldComponent", function() { return AppearanceFormFieldComponent; });
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

var AppearanceFormFieldComponent = /** @class */ (function () {
    function AppearanceFormFieldComponent() {
    }
    AppearanceFormFieldComponent.prototype.ngOnInit = function () {
    };
    AppearanceFormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appearance-form-field',
            template: __webpack_require__(/*! ./appearance-form-field.component.html */ "./src/assets/examples/material/appearance-form-field/appearance-form-field.component.html"),
            styles: [__webpack_require__(/*! ./appearance-form-field.component.scss */ "./src/assets/examples/material/appearance-form-field/appearance-form-field.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppearanceFormFieldComponent);
    return AppearanceFormFieldComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/auto-hide-tooltip/auto-hide-tooltip.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/auto-hide-tooltip/auto-hide-tooltip.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Tooltip position\" [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-container\" cdk-scrollable>\n  <button mat-raised-button #tooltip=\"matTooltip\"\n          matTooltip=\"Info about the action\"\n          [matTooltipPosition]=\"position.value\"\n          matTooltipHideDelay=\"100000\"\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\n          class=\"example-button\">\n    Action\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/auto-hide-tooltip/auto-hide-tooltip.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/auto-hide-tooltip/auto-hide-tooltip.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button {\n  display: block;\n  margin: 80px auto 400px; }\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9hdXRvLWhpZGUtdG9vbHRpcC9hdXRvLWhpZGUtdG9vbHRpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCx1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvYXV0by1oaWRlLXRvb2x0aXAvYXV0by1oaWRlLXRvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogODBweCBhdXRvIDQwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/auto-hide-tooltip/auto-hide-tooltip.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/auto-hide-tooltip/auto-hide-tooltip.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AutoHideTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoHideTooltipComponent", function() { return AutoHideTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutoHideTooltipComponent = /** @class */ (function () {
    function AutoHideTooltipComponent() {
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.positionOptions[0]);
    }
    AutoHideTooltipComponent.prototype.ngOnInit = function () {
    };
    AutoHideTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auto-hide-tooltip',
            template: __webpack_require__(/*! ./auto-hide-tooltip.component.html */ "./src/assets/examples/material/auto-hide-tooltip/auto-hide-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./auto-hide-tooltip.component.scss */ "./src/assets/examples/material/auto-hide-tooltip/auto-hide-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AutoHideTooltipComponent);
    return AutoHideTooltipComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/auto-resizing-texarea/auto-resizing-texarea.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/auto-resizing-texarea/auto-resizing-texarea.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"2\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/auto-resizing-texarea/auto-resizing-texarea.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/auto-resizing-texarea/auto-resizing-texarea.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  margin-right: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9hdXRvLXJlc2l6aW5nLXRleGFyZWEvYXV0by1yZXNpemluZy10ZXhhcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9hdXRvLXJlc2l6aW5nLXRleGFyZWEvYXV0by1yZXNpemluZy10ZXhhcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/auto-resizing-texarea/auto-resizing-texarea.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/examples/material/auto-resizing-texarea/auto-resizing-texarea.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AutoResizingTexareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoResizingTexareaComponent", function() { return AutoResizingTexareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutoResizingTexareaComponent = /** @class */ (function () {
    function AutoResizingTexareaComponent(ngZone) {
        this.ngZone = ngZone;
    }
    AutoResizingTexareaComponent.prototype.triggerResize = function () {
        var _this = this;
        // Wait for changes to be applied, then trigger textarea resize.
        this.ngZone.onStable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(function () { return _this.autosize.resizeToFitContent(true); });
    };
    AutoResizingTexareaComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("autosize"),
        __metadata("design:type", _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["CdkTextareaAutosize"])
    ], AutoResizingTexareaComponent.prototype, "autosize", void 0);
    AutoResizingTexareaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-auto-resizing-texarea",
            template: __webpack_require__(/*! ./auto-resizing-texarea.component.html */ "./src/assets/examples/material/auto-resizing-texarea/auto-resizing-texarea.component.html"),
            styles: [__webpack_require__(/*! ./auto-resizing-texarea.component.scss */ "./src/assets/examples/material/auto-resizing-texarea/auto-resizing-texarea.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AutoResizingTexareaComponent);
    return AutoResizingTexareaComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/autocomplete-chip/autocomplete-chip.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/autocomplete-chip/autocomplete-chip.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-chip-list\">\n    <mat-chip-list #chipList aria-label=\"Fruit selection\">\n      <mat-chip\n        *ngFor=\"let fruit of fruits\"\n        [selectable]=\"selectable\"\n        [removable]=\"removable\"\n        (removed)=\"remove(fruit)\">\n        {{fruit}}\n        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n      </mat-chip>\n      <input\n        placeholder=\"New fruit...\"\n        #fruitInput\n        [formControl]=\"fruitCtrl\"\n        [matAutocomplete]=\"auto\"\n        [matChipInputFor]=\"chipList\"\n        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n        [matChipInputAddOnBlur]=\"addOnBlur\"\n        (matChipInputTokenEnd)=\"add($event)\">\n    </mat-chip-list>\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n      <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n        {{fruit}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n  "

/***/ }),

/***/ "./src/assets/examples/material/autocomplete-chip/autocomplete-chip.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/autocomplete-chip/autocomplete-chip.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-chip-list {\n  width: 100%; }\n\n.mat-chip:not(.mat-basic-chip) {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUtY2hpcC9hdXRvY29tcGxldGUtY2hpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS1jaGlwL2F1dG9jb21wbGV0ZS1jaGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2hpcC1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubWF0LWNoaXA6bm90KC5tYXQtYmFzaWMtY2hpcCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH0gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/autocomplete-chip/autocomplete-chip.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/autocomplete-chip/autocomplete-chip.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AutocompleteChipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteChipComponent", function() { return AutocompleteChipComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AutocompleteChipComponent = /** @class */ (function () {
    function AutocompleteChipComponent() {
        var _this = this;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        this.fruitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fruit) { return fruit ? _this._filter(fruit) : _this.allFruits.slice(); }));
    }
    AutocompleteChipComponent.prototype.add = function (event) {
        // Add fruit only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // Add our fruit
            if ((value || '').trim()) {
                this.fruits.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.fruitCtrl.setValue(null);
        }
    };
    AutocompleteChipComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    AutocompleteChipComponent.prototype.selected = function (event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    };
    AutocompleteChipComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allFruits.filter(function (fruit) { return fruit.toLowerCase().indexOf(filterValue) === 0; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fruitInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AutocompleteChipComponent.prototype, "fruitInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"])
    ], AutocompleteChipComponent.prototype, "matAutocomplete", void 0);
    AutocompleteChipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autocomplete-chip',
            template: __webpack_require__(/*! ./autocomplete-chip.component.html */ "./src/assets/examples/material/autocomplete-chip/autocomplete-chip.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete-chip.component.scss */ "./src/assets/examples/material/autocomplete-chip/autocomplete-chip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AutocompleteChipComponent);
    return AutocompleteChipComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/autocomplete-overview/autocomplete-overview.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/autocomplete-overview/autocomplete-overview.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n        <span>{{state.name}}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/autocomplete-overview/autocomplete-overview.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/autocomplete-overview/autocomplete-overview.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px; }\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUtb3ZlcnZpZXcvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUtb3ZlcnZpZXcvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FDQXJCO0VESUksZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3L2F1dG9jb21wbGV0ZS1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLW9wdGlvbi1pbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbiAgXG4gIFtkaXI9J3J0bCddIC5leGFtcGxlLW9wdGlvbi1pbWcge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gICIsIi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmV4YW1wbGUtb3B0aW9uLWltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogOHB4OyB9XG5cbltkaXI9J3J0bCddIC5leGFtcGxlLW9wdGlvbi1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/autocomplete-overview/autocomplete-overview.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/examples/material/autocomplete-overview/autocomplete-overview.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AutocompleteOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteOverviewComponent", function() { return AutocompleteOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutocompleteOverviewComponent = /** @class */ (function () {
    function AutocompleteOverviewComponent() {
        var _this = this;
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return state ? _this._filterStates(state) : _this.states.slice(); }));
    }
    AutocompleteOverviewComponent.prototype._filterStates = function (value) {
        var filterValue = value.toLowerCase();
        return this.states.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AutocompleteOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autocomplete-overview',
            template: __webpack_require__(/*! ./autocomplete-overview.component.html */ "./src/assets/examples/material/autocomplete-overview/autocomplete-overview.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete-overview.component.scss */ "./src/assets/examples/material/autocomplete-overview/autocomplete-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AutocompleteOverviewComponent);
    return AutocompleteOverviewComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/autoresize-sidenav/autoresize-sidenav.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/autoresize-sidenav/autoresize-sidenav.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/assets/examples/material/autoresize-sidenav/autoresize-sidenav.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/autoresize-sidenav/autoresize-sidenav.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5); }\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center; }\n\n.example-sidenav {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9hdXRvcmVzaXplLXNpZGVuYXYvYXV0b3Jlc2l6ZS1zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9hdXRvcmVzaXplLXNpZGVuYXYvYXV0b3Jlc2l6ZS1zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2lkZW5hdiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/autoresize-sidenav/autoresize-sidenav.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/autoresize-sidenav/autoresize-sidenav.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AutoresizeSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoresizeSidenavComponent", function() { return AutoresizeSidenavComponent; });
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

var AutoresizeSidenavComponent = /** @class */ (function () {
    function AutoresizeSidenavComponent() {
        this.showFiller = false;
    }
    AutoresizeSidenavComponent.prototype.ngOnInit = function () {
    };
    AutoresizeSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autoresize-sidenav',
            template: __webpack_require__(/*! ./autoresize-sidenav.component.html */ "./src/assets/examples/material/autoresize-sidenav/autoresize-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./autoresize-sidenav.component.scss */ "./src/assets/examples/material/autoresize-sidenav/autoresize-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AutoresizeSidenavComponent);
    return AutoresizeSidenavComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-badge/basic-badge.component.html":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/basic-badge/basic-badge.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\n  </p>\n  \n  <p>\n    Button with a badge on the left\n    <button mat-raised-button color=\"primary\"\n        matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n      Action\n    </button>\n  </p>\n  \n  <p>\n    Icon with a badge\n    <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n      <!-- Include text description of the icon's meaning for screen-readers -->\n      <span class=\"cdk-visually-hidden\">\n        Example with a home icon with overlaid badge showing the number 15\n      </span>\n  </p>\n  \n  "

/***/ }),

/***/ "./src/assets/examples/material/basic-badge/basic-badge.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/basic-badge/basic-badge.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWJhZGdlL2Jhc2ljLWJhZGdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/basic-badge/basic-badge.component.ts":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-badge/basic-badge.component.ts ***!
  \***************************************************************************/
/*! exports provided: BasicBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBadgeComponent", function() { return BasicBadgeComponent; });
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

var BasicBadgeComponent = /** @class */ (function () {
    function BasicBadgeComponent() {
    }
    BasicBadgeComponent.prototype.ngOnInit = function () {
    };
    BasicBadgeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-badge',
            template: __webpack_require__(/*! ./basic-badge.component.html */ "./src/assets/examples/material/basic-badge/basic-badge.component.html"),
            styles: [__webpack_require__(/*! ./basic-badge.component.scss */ "./src/assets/examples/material/basic-badge/basic-badge.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicBadgeComponent);
    return BasicBadgeComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-bar/basic-bar.component.html":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/basic-bar/basic-bar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-bar/basic-bar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/basic-bar/basic-bar.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWJhci9iYXNpYy1iYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/basic-bar/basic-bar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/assets/examples/material/basic-bar/basic-bar.component.ts ***!
  \***********************************************************************/
/*! exports provided: BasicBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBarComponent", function() { return BasicBarComponent; });
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

var BasicBarComponent = /** @class */ (function () {
    function BasicBarComponent() {
    }
    BasicBarComponent.prototype.ngOnInit = function () {
    };
    BasicBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-bar',
            template: __webpack_require__(/*! ./basic-bar.component.html */ "./src/assets/examples/material/basic-bar/basic-bar.component.html"),
            styles: [__webpack_require__(/*! ./basic-bar.component.scss */ "./src/assets/examples/material/basic-bar/basic-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicBarComponent);
    return BasicBarComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-button-toggle/basic-button-toggle.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-button-toggle/basic-button-toggle.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  "

/***/ }),

/***/ "./src/assets/examples/material/basic-button-toggle/basic-button-toggle.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-button-toggle/basic-button-toggle.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWJ1dHRvbi10b2dnbGUvYmFzaWMtYnV0dG9uLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-button-toggle/basic-button-toggle.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-button-toggle/basic-button-toggle.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BasicButtonToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicButtonToggleComponent", function() { return BasicButtonToggleComponent; });
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

var BasicButtonToggleComponent = /** @class */ (function () {
    function BasicButtonToggleComponent() {
    }
    BasicButtonToggleComponent.prototype.ngOnInit = function () {
    };
    BasicButtonToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-button-toggle',
            template: __webpack_require__(/*! ./basic-button-toggle.component.html */ "./src/assets/examples/material/basic-button-toggle/basic-button-toggle.component.html"),
            styles: [__webpack_require__(/*! ./basic-button-toggle.component.scss */ "./src/assets/examples/material/basic-button-toggle/basic-button-toggle.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicButtonToggleComponent);
    return BasicButtonToggleComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-card/basic-card.component.html":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-card/basic-card.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>Simple card</mat-card>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-card/basic-card.component.scss":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-card/basic-card.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWNhcmQvYmFzaWMtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-card/basic-card.component.ts":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/basic-card/basic-card.component.ts ***!
  \*************************************************************************/
/*! exports provided: BasicCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCardComponent", function() { return BasicCardComponent; });
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

var BasicCardComponent = /** @class */ (function () {
    function BasicCardComponent() {
    }
    BasicCardComponent.prototype.ngOnInit = function () {
    };
    BasicCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-card',
            template: __webpack_require__(/*! ./basic-card.component.html */ "./src/assets/examples/material/basic-card/basic-card.component.html"),
            styles: [__webpack_require__(/*! ./basic-card.component.scss */ "./src/assets/examples/material/basic-card/basic-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicCardComponent);
    return BasicCardComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-checkbox/basic-checkbox.component.html":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-checkbox/basic-checkbox.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-checkbox>Check me!</mat-checkbox>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-checkbox/basic-checkbox.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-checkbox/basic-checkbox.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWNoZWNrYm94L2Jhc2ljLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/basic-checkbox/basic-checkbox.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-checkbox/basic-checkbox.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BasicCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCheckboxComponent", function() { return BasicCheckboxComponent; });
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

var BasicCheckboxComponent = /** @class */ (function () {
    function BasicCheckboxComponent() {
    }
    BasicCheckboxComponent.prototype.ngOnInit = function () {
    };
    BasicCheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-checkbox',
            template: __webpack_require__(/*! ./basic-checkbox.component.html */ "./src/assets/examples/material/basic-checkbox/basic-checkbox.component.html"),
            styles: [__webpack_require__(/*! ./basic-checkbox.component.scss */ "./src/assets/examples/material/basic-checkbox/basic-checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicCheckboxComponent);
    return BasicCheckboxComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-chip/basic-chip.component.html":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-chip/basic-chip.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-chip-list aria-label=\"Fish selection\">\n    <mat-chip>One fish</mat-chip>\n    <mat-chip>Two fish</mat-chip>\n    <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n    <mat-chip color=\"accent\" selected>Accent fish</mat-chip>\n  </mat-chip-list>\n  "

/***/ }),

/***/ "./src/assets/examples/material/basic-chip/basic-chip.component.scss":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-chip/basic-chip.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWNoaXAvYmFzaWMtY2hpcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-chip/basic-chip.component.ts":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/basic-chip/basic-chip.component.ts ***!
  \*************************************************************************/
/*! exports provided: BasicChipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicChipComponent", function() { return BasicChipComponent; });
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

var BasicChipComponent = /** @class */ (function () {
    function BasicChipComponent() {
    }
    BasicChipComponent.prototype.ngOnInit = function () {
    };
    BasicChipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-chip',
            template: __webpack_require__(/*! ./basic-chip.component.html */ "./src/assets/examples/material/basic-chip/basic-chip.component.html"),
            styles: [__webpack_require__(/*! ./basic-chip.component.scss */ "./src/assets/examples/material/basic-chip/basic-chip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicChipComponent);
    return BasicChipComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-datepicker/basic-datepicker.component.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-datepicker/basic-datepicker.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-datepicker/basic-datepicker.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-datepicker/basic-datepicker.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWRhdGVwaWNrZXIvYmFzaWMtZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-datepicker/basic-datepicker.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-datepicker/basic-datepicker.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BasicDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDatepickerComponent", function() { return BasicDatepickerComponent; });
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

var BasicDatepickerComponent = /** @class */ (function () {
    function BasicDatepickerComponent() {
    }
    BasicDatepickerComponent.prototype.ngOnInit = function () {
    };
    BasicDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-datepicker',
            template: __webpack_require__(/*! ./basic-datepicker.component.html */ "./src/assets/examples/material/basic-datepicker/basic-datepicker.component.html"),
            styles: [__webpack_require__(/*! ./basic-datepicker.component.scss */ "./src/assets/examples/material/basic-datepicker/basic-datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicDatepickerComponent);
    return BasicDatepickerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-dialog/basic-dialog-overview/basic-dialog-overview.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-dialog/basic-dialog-overview/basic-dialog-overview.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-dialog/basic-dialog-overview/basic-dialog-overview.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-dialog/basic-dialog-overview/basic-dialog-overview.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWRpYWxvZy9iYXNpYy1kaWFsb2ctb3ZlcnZpZXcvYmFzaWMtZGlhbG9nLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/basic-dialog/basic-dialog-overview/basic-dialog-overview.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-dialog/basic-dialog-overview/basic-dialog-overview.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: BasicDialogOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDialogOverviewComponent", function() { return BasicDialogOverviewComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BasicDialogOverviewComponent = /** @class */ (function () {
    function BasicDialogOverviewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    BasicDialogOverviewComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    BasicDialogOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-dialog-overview',
            template: __webpack_require__(/*! ./basic-dialog-overview.component.html */ "./src/assets/examples/material/basic-dialog/basic-dialog-overview/basic-dialog-overview.component.html"),
            styles: [__webpack_require__(/*! ./basic-dialog-overview.component.scss */ "./src/assets/examples/material/basic-dialog/basic-dialog-overview/basic-dialog-overview.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], BasicDialogOverviewComponent);
    return BasicDialogOverviewComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-dialog/basic-dialog.component.html":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-dialog/basic-dialog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol>\n  <li>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <i>{{animal}}</i>\n  </li>\n</ol>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-dialog/basic-dialog.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-dialog/basic-dialog.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWRpYWxvZy9iYXNpYy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/basic-dialog/basic-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/basic-dialog/basic-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDialogComponent", function() { return BasicDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _basic_dialog_overview_basic_dialog_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-dialog-overview/basic-dialog-overview.component */ "./src/assets/examples/material/basic-dialog/basic-dialog-overview/basic-dialog-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicDialogComponent = /** @class */ (function () {
    function BasicDialogComponent(dialog) {
        this.dialog = dialog;
    }
    BasicDialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_basic_dialog_overview_basic_dialog_overview_component__WEBPACK_IMPORTED_MODULE_2__["BasicDialogOverviewComponent"], {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    BasicDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-dialog',
            template: __webpack_require__(/*! ./basic-dialog.component.html */ "./src/assets/examples/material/basic-dialog/basic-dialog.component.html"),
            styles: [__webpack_require__(/*! ./basic-dialog.component.scss */ "./src/assets/examples/material/basic-dialog/basic-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], BasicDialogComponent);
    return BasicDialogComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-divider/basic-divider.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-divider/basic-divider.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-divider/basic-divider.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-divider/basic-divider.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWRpdmlkZXIvYmFzaWMtZGl2aWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-divider/basic-divider.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-divider/basic-divider.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicDividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDividerComponent", function() { return BasicDividerComponent; });
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

var BasicDividerComponent = /** @class */ (function () {
    function BasicDividerComponent() {
    }
    BasicDividerComponent.prototype.ngOnInit = function () {
    };
    BasicDividerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-divider',
            template: __webpack_require__(/*! ./basic-divider.component.html */ "./src/assets/examples/material/basic-divider/basic-divider.component.html"),
            styles: [__webpack_require__(/*! ./basic-divider.component.scss */ "./src/assets/examples/material/basic-divider/basic-divider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicDividerComponent);
    return BasicDividerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-expansion-panel/basic-expansion-panel.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-expansion-panel/basic-expansion-panel.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Age\">\n    </mat-form-field>\n  </mat-expansion-panel>\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Self aware panel\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-expansion-panel/basic-expansion-panel.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-expansion-panel/basic-expansion-panel.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWV4cGFuc2lvbi1wYW5lbC9iYXNpYy1leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/basic-expansion-panel/basic-expansion-panel.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-expansion-panel/basic-expansion-panel.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BasicExpansionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicExpansionPanelComponent", function() { return BasicExpansionPanelComponent; });
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

var BasicExpansionPanelComponent = /** @class */ (function () {
    function BasicExpansionPanelComponent() {
        this.panelOpenState = false;
    }
    BasicExpansionPanelComponent.prototype.ngOnInit = function () {
    };
    BasicExpansionPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-expansion-panel',
            template: __webpack_require__(/*! ./basic-expansion-panel.component.html */ "./src/assets/examples/material/basic-expansion-panel/basic-expansion-panel.component.html"),
            styles: [__webpack_require__(/*! ./basic-expansion-panel.component.scss */ "./src/assets/examples/material/basic-expansion-panel/basic-expansion-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicExpansionPanelComponent);
    return BasicExpansionPanelComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-grid/basic-grid.component.html":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-grid/basic-grid.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-grid/basic-grid.component.scss":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-grid/basic-grid.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: lightblue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9iYXNpYy1ncmlkL2Jhc2ljLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWdyaWQvYmFzaWMtZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/basic-grid/basic-grid.component.ts":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/basic-grid/basic-grid.component.ts ***!
  \*************************************************************************/
/*! exports provided: BasicGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicGridComponent", function() { return BasicGridComponent; });
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

var BasicGridComponent = /** @class */ (function () {
    function BasicGridComponent() {
    }
    BasicGridComponent.prototype.ngOnInit = function () {
    };
    BasicGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-grid',
            template: __webpack_require__(/*! ./basic-grid.component.html */ "./src/assets/examples/material/basic-grid/basic-grid.component.html"),
            styles: [__webpack_require__(/*! ./basic-grid.component.scss */ "./src/assets/examples/material/basic-grid/basic-grid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicGridComponent);
    return BasicGridComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-icon/basic-icon.component.html":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-icon/basic-icon.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">home</mat-icon>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-icon/basic-icon.component.scss":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-icon/basic-icon.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWljb24vYmFzaWMtaWNvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-icon/basic-icon.component.ts":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/basic-icon/basic-icon.component.ts ***!
  \*************************************************************************/
/*! exports provided: BasicIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicIconComponent", function() { return BasicIconComponent; });
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

var BasicIconComponent = /** @class */ (function () {
    function BasicIconComponent() {
    }
    BasicIconComponent.prototype.ngOnInit = function () {
    };
    BasicIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-icon',
            template: __webpack_require__(/*! ./basic-icon.component.html */ "./src/assets/examples/material/basic-icon/basic-icon.component.html"),
            styles: [__webpack_require__(/*! ./basic-icon.component.scss */ "./src/assets/examples/material/basic-icon/basic-icon.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicIconComponent);
    return BasicIconComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-input/basic-input.component.html":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/basic-input/basic-input.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Leave a comment\"></textarea>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-input/basic-input.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/basic-input/basic-input.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9iYXNpYy1pbnB1dC9iYXNpYy1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvYmFzaWMtaW5wdXQvYmFzaWMtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/basic-input/basic-input.component.ts":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-input/basic-input.component.ts ***!
  \***************************************************************************/
/*! exports provided: BasicInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInputComponent", function() { return BasicInputComponent; });
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

var BasicInputComponent = /** @class */ (function () {
    function BasicInputComponent() {
    }
    BasicInputComponent.prototype.ngOnInit = function () {
    };
    BasicInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-input',
            template: __webpack_require__(/*! ./basic-input.component.html */ "./src/assets/examples/material/basic-input/basic-input.component.html"),
            styles: [__webpack_require__(/*! ./basic-input.component.scss */ "./src/assets/examples/material/basic-input/basic-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicInputComponent);
    return BasicInputComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-list/basic-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-list/basic-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-list/basic-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-list/basic-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLWxpc3QvYmFzaWMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-list/basic-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/basic-list/basic-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: BasicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicListComponent", function() { return BasicListComponent; });
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

var BasicListComponent = /** @class */ (function () {
    function BasicListComponent() {
    }
    BasicListComponent.prototype.ngOnInit = function () {
    };
    BasicListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-list',
            template: __webpack_require__(/*! ./basic-list.component.html */ "./src/assets/examples/material/basic-list/basic-list.component.html"),
            styles: [__webpack_require__(/*! ./basic-list.component.scss */ "./src/assets/examples/material/basic-list/basic-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicListComponent);
    return BasicListComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-menu/basic-menu.component.html":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-menu/basic-menu.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-menu/basic-menu.component.scss":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-menu/basic-menu.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLW1lbnUvYmFzaWMtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-menu/basic-menu.component.ts":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/basic-menu/basic-menu.component.ts ***!
  \*************************************************************************/
/*! exports provided: BasicMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicMenuComponent", function() { return BasicMenuComponent; });
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

var BasicMenuComponent = /** @class */ (function () {
    function BasicMenuComponent() {
    }
    BasicMenuComponent.prototype.ngOnInit = function () {
    };
    BasicMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-menu',
            template: __webpack_require__(/*! ./basic-menu.component.html */ "./src/assets/examples/material/basic-menu/basic-menu.component.html"),
            styles: [__webpack_require__(/*! ./basic-menu.component.scss */ "./src/assets/examples/material/basic-menu/basic-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicMenuComponent);
    return BasicMenuComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-paginator/basic-paginator.component.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-paginator/basic-paginator.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-paginator/basic-paginator.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-paginator/basic-paginator.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLXBhZ2luYXRvci9iYXNpYy1wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/basic-paginator/basic-paginator.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-paginator/basic-paginator.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicPaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicPaginatorComponent", function() { return BasicPaginatorComponent; });
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

var BasicPaginatorComponent = /** @class */ (function () {
    function BasicPaginatorComponent() {
    }
    BasicPaginatorComponent.prototype.ngOnInit = function () {
    };
    BasicPaginatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-paginator',
            template: __webpack_require__(/*! ./basic-paginator.component.html */ "./src/assets/examples/material/basic-paginator/basic-paginator.component.html"),
            styles: [__webpack_require__(/*! ./basic-paginator.component.scss */ "./src/assets/examples/material/basic-paginator/basic-paginator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicPaginatorComponent);
    return BasicPaginatorComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-radio/basic-radio.component.html":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/basic-radio/basic-radio.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-radio-group aria-label=\"Select an option\">\n  <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n  <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n</mat-radio-group>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-radio/basic-radio.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/basic-radio/basic-radio.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9iYXNpYy1yYWRpby9iYXNpYy1yYWRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvYmFzaWMtcmFkaW8vYmFzaWMtcmFkaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/basic-radio/basic-radio.component.ts":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-radio/basic-radio.component.ts ***!
  \***************************************************************************/
/*! exports provided: BasicRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRadioComponent", function() { return BasicRadioComponent; });
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

var BasicRadioComponent = /** @class */ (function () {
    function BasicRadioComponent() {
    }
    BasicRadioComponent.prototype.ngOnInit = function () {
    };
    BasicRadioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-radio',
            template: __webpack_require__(/*! ./basic-radio.component.html */ "./src/assets/examples/material/basic-radio/basic-radio.component.html"),
            styles: [__webpack_require__(/*! ./basic-radio.component.scss */ "./src/assets/examples/material/basic-radio/basic-radio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicRadioComponent);
    return BasicRadioComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-select/basic-select.component.html":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-select/basic-select.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Basic mat-select</h4>\n<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{food.viewValue}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>Basic native select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl required>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-select/basic-select.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-select/basic-select.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLXNlbGVjdC9iYXNpYy1zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/basic-select/basic-select.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/basic-select/basic-select.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicSelectComponent", function() { return BasicSelectComponent; });
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

var BasicSelectComponent = /** @class */ (function () {
    function BasicSelectComponent() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    BasicSelectComponent.prototype.ngOnInit = function () {
    };
    BasicSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-select',
            template: __webpack_require__(/*! ./basic-select.component.html */ "./src/assets/examples/material/basic-select/basic-select.component.html"),
            styles: [__webpack_require__(/*! ./basic-select.component.scss */ "./src/assets/examples/material/basic-select/basic-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicSelectComponent);
    return BasicSelectComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-sidenav/basic-sidenav.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-sidenav/basic-sidenav.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n  <mat-sidenav-content>\n    Main content <br>\n    Main content <br>\n    Main content <br>\n    Main content <br>\n    Main content <br>\n    Main content <br>\n    Main content <br>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/assets/examples/material/basic-sidenav/basic-sidenav.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-sidenav/basic-sidenav.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  background: #eee;\n  min-height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9iYXNpYy1zaWRlbmF2L2Jhc2ljLXNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9iYXNpYy1zaWRlbmF2L2Jhc2ljLXNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyB0b3A6IDA7XG4gICAgLy8gYm90dG9tOiAwO1xuICAgIC8vIGxlZnQ6IDA7XG4gICAgLy8gcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/basic-sidenav/basic-sidenav.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-sidenav/basic-sidenav.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicSidenavComponent", function() { return BasicSidenavComponent; });
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

var BasicSidenavComponent = /** @class */ (function () {
    function BasicSidenavComponent() {
    }
    BasicSidenavComponent.prototype.ngOnInit = function () {
    };
    BasicSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-sidenav',
            template: __webpack_require__(/*! ./basic-sidenav.component.html */ "./src/assets/examples/material/basic-sidenav/basic-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./basic-sidenav.component.scss */ "./src/assets/examples/material/basic-sidenav/basic-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicSidenavComponent);
    return BasicSidenavComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-slider/basic-slider.component.html":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-slider/basic-slider.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-slider></mat-slider>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-slider/basic-slider.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-slider/basic-slider.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\nmat-slider {\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9iYXNpYy1zbGlkZXIvYmFzaWMtc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUFBO0FBQ0E7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9iYXNpYy1zbGlkZXIvYmFzaWMtc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIE5vIENTUyBmb3IgdGhpcyBleGFtcGxlICovXG5tYXQtc2xpZGVyIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-slider/basic-slider.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/basic-slider/basic-slider.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicSliderComponent", function() { return BasicSliderComponent; });
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

var BasicSliderComponent = /** @class */ (function () {
    function BasicSliderComponent() {
    }
    BasicSliderComponent.prototype.ngOnInit = function () {
    };
    BasicSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-slider',
            template: __webpack_require__(/*! ./basic-slider.component.html */ "./src/assets/examples/material/basic-slider/basic-slider.component.html"),
            styles: [__webpack_require__(/*! ./basic-slider.component.scss */ "./src/assets/examples/material/basic-slider/basic-slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicSliderComponent);
    return BasicSliderComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-snackbar/basic-snackbar.component.html":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-snackbar/basic-snackbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-snackbar/basic-snackbar.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-snackbar/basic-snackbar.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  margin-right: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9iYXNpYy1zbmFja2Jhci9iYXNpYy1zbmFja2Jhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvYmFzaWMtc25hY2tiYXIvYmFzaWMtc25hY2tiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/basic-snackbar/basic-snackbar.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-snackbar/basic-snackbar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BasicSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicSnackbarComponent", function() { return BasicSnackbarComponent; });
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


var BasicSnackbarComponent = /** @class */ (function () {
    function BasicSnackbarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    BasicSnackbarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    BasicSnackbarComponent.prototype.ngOnInit = function () {
    };
    BasicSnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-snackbar',
            template: __webpack_require__(/*! ./basic-snackbar.component.html */ "./src/assets/examples/material/basic-snackbar/basic-snackbar.component.html"),
            styles: [__webpack_require__(/*! ./basic-snackbar.component.scss */ "./src/assets/examples/material/basic-snackbar/basic-snackbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], BasicSnackbarComponent);
    return BasicSnackbarComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-sort-header/basic-sort-header.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-sort-header/basic-sort-header.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert (100g)</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\">Fat (g)</th>\n    <th mat-sort-header=\"carbs\">Carbs (g)</th>\n    <th mat-sort-header=\"protein\">Protein (g)</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-sort-header/basic-sort-header.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-sort-header/basic-sort-header.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-sort-header-container {\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9iYXNpYy1zb3J0LWhlYWRlci9iYXNpYy1zb3J0LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvYmFzaWMtc29ydC1oZWFkZXIvYmFzaWMtc29ydC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/basic-sort-header/basic-sort-header.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-sort-header/basic-sort-header.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BasicSortHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicSortHeaderComponent", function() { return BasicSortHeaderComponent; });
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

var BasicSortHeaderComponent = /** @class */ (function () {
    function BasicSortHeaderComponent() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    BasicSortHeaderComponent.prototype.sortData = function (sort) {
        var data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(a.calories, b.calories, isAsc);
                case 'fat': return compare(a.fat, b.fat, isAsc);
                case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                case 'protein': return compare(a.protein, b.protein, isAsc);
                default: return 0;
            }
        });
    };
    BasicSortHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-sort-header',
            template: __webpack_require__(/*! ./basic-sort-header.component.html */ "./src/assets/examples/material/basic-sort-header/basic-sort-header.component.html"),
            styles: [__webpack_require__(/*! ./basic-sort-header.component.scss */ "./src/assets/examples/material/basic-sort-header/basic-sort-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicSortHeaderComponent);
    return BasicSortHeaderComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/assets/examples/material/basic-spinner/basic-spinner.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-spinner/basic-spinner.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner></mat-spinner>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-spinner/basic-spinner.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-spinner/basic-spinner.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLXNwaW5uZXIvYmFzaWMtc3Bpbm5lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-spinner/basic-spinner.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-spinner/basic-spinner.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicSpinnerComponent", function() { return BasicSpinnerComponent; });
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

var BasicSpinnerComponent = /** @class */ (function () {
    function BasicSpinnerComponent() {
    }
    BasicSpinnerComponent.prototype.ngOnInit = function () {
    };
    BasicSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-spinner',
            template: __webpack_require__(/*! ./basic-spinner.component.html */ "./src/assets/examples/material/basic-spinner/basic-spinner.component.html"),
            styles: [__webpack_require__(/*! ./basic-spinner.component.scss */ "./src/assets/examples/material/basic-spinner/basic-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicSpinnerComponent);
    return BasicSpinnerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-stepper/basic-stepper.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-stepper/basic-stepper.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n</button>\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-stepper/basic-stepper.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-stepper/basic-stepper.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLXN0ZXBwZXIvYmFzaWMtc3RlcHBlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-stepper/basic-stepper.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-stepper/basic-stepper.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicStepperComponent", function() { return BasicStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicStepperComponent = /** @class */ (function () {
    function BasicStepperComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    BasicStepperComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    BasicStepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-stepper',
            template: __webpack_require__(/*! ./basic-stepper.component.html */ "./src/assets/examples/material/basic-stepper/basic-stepper.component.html"),
            styles: [__webpack_require__(/*! ./basic-stepper.component.scss */ "./src/assets/examples/material/basic-stepper/basic-stepper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], BasicStepperComponent);
    return BasicStepperComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-tab-group/basic-tab-group.component.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-tab-group/basic-tab-group.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab label=\"First\"> Content 1 </mat-tab>\n    <mat-tab label=\"Second\"> Content 2 </mat-tab>\n    <mat-tab label=\"Third\"> Content 3 </mat-tab>\n  </mat-tab-group>\n  "

/***/ }),

/***/ "./src/assets/examples/material/basic-tab-group/basic-tab-group.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/basic-tab-group/basic-tab-group.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLXRhYi1ncm91cC9iYXNpYy10YWItZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/basic-tab-group/basic-tab-group.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-tab-group/basic-tab-group.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicTabGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTabGroupComponent", function() { return BasicTabGroupComponent; });
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

var BasicTabGroupComponent = /** @class */ (function () {
    function BasicTabGroupComponent() {
    }
    BasicTabGroupComponent.prototype.ngOnInit = function () {
    };
    BasicTabGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-tab-group',
            template: __webpack_require__(/*! ./basic-tab-group.component.html */ "./src/assets/examples/material/basic-tab-group/basic-tab-group.component.html"),
            styles: [__webpack_require__(/*! ./basic-tab-group.component.scss */ "./src/assets/examples/material/basic-tab-group/basic-tab-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicTabGroupComponent);
    return BasicTabGroupComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-table/basic-table.component.html":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/basic-table/basic-table.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-table/basic-table.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/basic-table/basic-table.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9iYXNpYy10YWJsZS9iYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLXRhYmxlL2Jhc2ljLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/basic-table/basic-table.component.ts":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/basic-table/basic-table.component.ts ***!
  \***************************************************************************/
/*! exports provided: BasicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTableComponent", function() { return BasicTableComponent; });
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

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var BasicTableComponent = /** @class */ (function () {
    function BasicTableComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    BasicTableComponent.prototype.ngOnInit = function () {
    };
    BasicTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-table',
            template: __webpack_require__(/*! ./basic-table.component.html */ "./src/assets/examples/material/basic-table/basic-table.component.html"),
            styles: [__webpack_require__(/*! ./basic-table.component.scss */ "./src/assets/examples/material/basic-table/basic-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicTableComponent);
    return BasicTableComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-toggle/basic-toggle.component.html":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-toggle/basic-toggle.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-slide-toggle>Slide me!</mat-slide-toggle>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-toggle/basic-toggle.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-toggle/basic-toggle.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLXRvZ2dsZS9iYXNpYy10b2dnbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/basic-toggle/basic-toggle.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/basic-toggle/basic-toggle.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BasicToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicToggleComponent", function() { return BasicToggleComponent; });
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

var BasicToggleComponent = /** @class */ (function () {
    function BasicToggleComponent() {
    }
    BasicToggleComponent.prototype.ngOnInit = function () {
    };
    BasicToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-toggle',
            template: __webpack_require__(/*! ./basic-toggle.component.html */ "./src/assets/examples/material/basic-toggle/basic-toggle.component.html"),
            styles: [__webpack_require__(/*! ./basic-toggle.component.scss */ "./src/assets/examples/material/basic-toggle/basic-toggle.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicToggleComponent);
    return BasicToggleComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-toolbar/basic-toolbar.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-toolbar/basic-toolbar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>My App</mat-toolbar>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-toolbar/basic-toolbar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-toolbar/basic-toolbar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLXRvb2xiYXIvYmFzaWMtdG9vbGJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-toolbar/basic-toolbar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-toolbar/basic-toolbar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicToolbarComponent", function() { return BasicToolbarComponent; });
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

var BasicToolbarComponent = /** @class */ (function () {
    function BasicToolbarComponent() {
    }
    BasicToolbarComponent.prototype.ngOnInit = function () {
    };
    BasicToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-toolbar',
            template: __webpack_require__(/*! ./basic-toolbar.component.html */ "./src/assets/examples/material/basic-toolbar/basic-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./basic-toolbar.component.scss */ "./src/assets/examples/material/basic-toolbar/basic-toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicToolbarComponent);
    return BasicToolbarComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/basic-tooltip/basic-tooltip.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-tooltip/basic-tooltip.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n"

/***/ }),

/***/ "./src/assets/examples/material/basic-tooltip/basic-tooltip.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/basic-tooltip/basic-tooltip.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Jhc2ljLXRvb2x0aXAvYmFzaWMtdG9vbHRpcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/basic-tooltip/basic-tooltip.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/basic-tooltip/basic-tooltip.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTooltipComponent", function() { return BasicTooltipComponent; });
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

var BasicTooltipComponent = /** @class */ (function () {
    function BasicTooltipComponent() {
    }
    BasicTooltipComponent.prototype.ngOnInit = function () {
    };
    BasicTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-tooltip',
            template: __webpack_require__(/*! ./basic-tooltip.component.html */ "./src/assets/examples/material/basic-tooltip/basic-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./basic-tooltip.component.scss */ "./src/assets/examples/material/basic-tooltip/basic-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicTooltipComponent);
    return BasicTooltipComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/assets/examples/material/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Keep</span>\n    <span mat-line>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Docs</span>\n    <span mat-line>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Plus</span>\n    <span mat-line>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Hangouts</span>\n    <span mat-line>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/assets/examples/material/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/assets/examples/material/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQtb3ZlcnZpZXcvYm90dG9tLXNoZWV0LW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/assets/examples/material/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: BottomSheetOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewComponent", function() { return BottomSheetOverviewComponent; });
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


var BottomSheetOverviewComponent = /** @class */ (function () {
    function BottomSheetOverviewComponent(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    BottomSheetOverviewComponent.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewComponent.prototype.ngOnInit = function () {
    };
    BottomSheetOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-sheet-overview',
            template: __webpack_require__(/*! ./bottom-sheet-overview.component.html */ "./src/assets/examples/material/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview.component.html"),
            styles: [__webpack_require__(/*! ./bottom-sheet-overview.component.scss */ "./src/assets/examples/material/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]])
    ], BottomSheetOverviewComponent);
    return BottomSheetOverviewComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/bottom-sheet/bottom-sheet.component.html":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/bottom-sheet/bottom-sheet.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n"

/***/ }),

/***/ "./src/assets/examples/material/bottom-sheet/bottom-sheet.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/bottom-sheet/bottom-sheet.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/bottom-sheet/bottom-sheet.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/bottom-sheet/bottom-sheet.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function() { return BottomSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bottom_sheet_overview_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bottom-sheet-overview/bottom-sheet-overview.component */ "./src/assets/examples/material/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BottomSheetComponent = /** @class */ (function () {
    function BottomSheetComponent(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    BottomSheetComponent.prototype.openBottomSheet = function () {
        this.bottomSheet.open(_bottom_sheet_overview_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_2__["BottomSheetOverviewComponent"]);
    };
    BottomSheetComponent.prototype.ngOnInit = function () {
    };
    BottomSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-sheet',
            template: __webpack_require__(/*! ./bottom-sheet.component.html */ "./src/assets/examples/material/bottom-sheet/bottom-sheet.component.html"),
            styles: [__webpack_require__(/*! ./bottom-sheet.component.scss */ "./src/assets/examples/material/bottom-sheet/bottom-sheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"]])
    ], BottomSheetComponent);
    return BottomSheetComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/button-examples/button-examples.component.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/button-examples/button-examples.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pb-1\">\n  <p>Basic buttons</p>\n  <button mat-button class=\"mr-1\">Default test</button>\n  <button mat-button color=\"primary\" class=\"mr-1\">Primary</button>\n  <button mat-button color=\"accent\" class=\"mr-1\">Accent</button>\n  <button mat-button color=\"warn\" class=\"mr-1\">Warn</button>\n  <button mat-button disabled class=\"mr-1\">Disabled</button>\n</div>\n\n<div class=\"pb-1\">\n  <p>Raised buttons</p>\n  <button mat-raised-button class=\"mr-1\">Default</button>\n  <button mat-raised-button color=\"primary\" class=\"mr-1\">Primary</button>\n  <button mat-raised-button color=\"accent\" class=\"mr-1\">Accent</button>\n  <button mat-raised-button color=\"warn\" class=\"mr-1\">Warn</button>\n  <button mat-raised-button disabled class=\"mr-1\">Disabled</button>\n</div>\n\n<div class=\"pb-1\">\n  <p>Fab buttons</p>\n  <button mat-fab color=\"warn\" class=\"mr-1\"><mat-icon>create</mat-icon></button>\n  <button mat-mini-fab color=\"warn\" class=\"mr-1\">\n    <mat-icon>create</mat-icon>\n  </button>\n</div>\n\n<div class=\"pb-1\">\n  <p>Toggle buttons</p>\n  <mat-button-toggle-group #group=\"matButtonToggleGroup\">\n    <mat-button-toggle value=\"left\">\n      <mat-icon>format_align_left</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle value=\"center\">\n      <mat-icon>format_align_center</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle value=\"right\">\n      <mat-icon>format_align_right</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle value=\"justify\" disabled>\n      <mat-icon>format_align_justify</mat-icon>\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/button-examples/button-examples.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/button-examples/button-examples.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi1leGFtcGxlcy9idXR0b24tZXhhbXBsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/button-examples/button-examples.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/button-examples/button-examples.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ButtonExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonExamplesComponent", function() { return ButtonExamplesComponent; });
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

var ButtonExamplesComponent = /** @class */ (function () {
    function ButtonExamplesComponent() {
    }
    ButtonExamplesComponent.prototype.ngOnInit = function () {
    };
    ButtonExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button-examples',
            template: __webpack_require__(/*! ./button-examples.component.html */ "./src/assets/examples/material/button-examples/button-examples.component.html"),
            styles: [__webpack_require__(/*! ./button-examples.component.scss */ "./src/assets/examples/material/button-examples/button-examples.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonExamplesComponent);
    return ButtonExamplesComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/button-toggle/button-toggle.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/button-toggle/button-toggle.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n    <mat-button-toggle value=\"left\" aria-label=\"Text align left\">\n      <mat-icon>format_align_left</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle value=\"center\" aria-label=\"Text align center\">\n      <mat-icon>format_align_center</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle value=\"right\" aria-label=\"Text align right\">\n      <mat-icon>format_align_right</mat-icon>\n    </mat-button-toggle>\n    <mat-button-toggle value=\"justify\" disabled aria-label=\"Text align justify\">\n      <mat-icon>format_align_justify</mat-icon>\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n  <div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n  "

/***/ }),

/***/ "./src/assets/examples/material/button-toggle/button-toggle.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/button-toggle/button-toggle.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-selected-value {\n  margin: 15px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zZWxlY3RlZC12YWx1ZSB7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/button-toggle/button-toggle.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/button-toggle/button-toggle.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ButtonToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonToggleComponent", function() { return ButtonToggleComponent; });
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

var ButtonToggleComponent = /** @class */ (function () {
    function ButtonToggleComponent() {
    }
    ButtonToggleComponent.prototype.ngOnInit = function () {
    };
    ButtonToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button-toggle',
            template: __webpack_require__(/*! ./button-toggle.component.html */ "./src/assets/examples/material/button-toggle/button-toggle.component.html"),
            styles: [__webpack_require__(/*! ./button-toggle.component.scss */ "./src/assets/examples/material/button-toggle/button-toggle.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonToggleComponent);
    return ButtonToggleComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/buttons/buttons.component.html":
/*!*********************************************************************!*\
  !*** ./src/assets/examples/material/buttons/buttons.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Basic Buttons</h3><br>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n<br><br>\n<h3>Raised Buttons</h3><br>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n<br><br>\n<h3>Stroked Buttons</h3><br>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n<br><br>\n<h3>Flat Buttons</h3><br>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n<br><br>\n<h3>Icon Buttons</h3><br>\n<div class=\"example-button-row\">\n  <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n</div>\n<br><br>\n<h3>Fab Buttons</h3><br>\n<div class=\"example-button-row\">\n  <button mat-fab>Basic</button>\n  <button mat-fab color=\"primary\">Primary</button>\n  <button mat-fab color=\"accent\">Accent</button>\n  <button mat-fab color=\"warn\">Warn</button>\n  <button mat-fab disabled>Disabled</button>\n  <button mat-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-fab routerLink=\".\">Link</a>\n</div>\n<br><br>\n\n<h3>Mini Fab Buttons</h3><br>\n<div class=\"example-button-row\">\n  <button mat-mini-fab>Basic</button>\n  <button mat-mini-fab color=\"primary\">Primary</button>\n  <button mat-mini-fab color=\"accent\">Accent</button>\n  <button mat-mini-fab color=\"warn\">Warn</button>\n  <button mat-mini-fab disabled>Disabled</button>\n  <button mat-mini-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-mini-fab routerLink=\".\">Link</a>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/buttons/buttons.component.scss":
/*!*********************************************************************!*\
  !*** ./src/assets/examples/material/buttons/buttons.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row button,\n.example-button-row a {\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbixcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/buttons/buttons.component.ts":
/*!*******************************************************************!*\
  !*** ./src/assets/examples/material/buttons/buttons.component.ts ***!
  \*******************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
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

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/assets/examples/material/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/assets/examples/material/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/changing-tooltip/changing-tooltip.component.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/changing-tooltip/changing-tooltip.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Tooltip message\" [formControl]=\"message\">\n</mat-form-field>\n\n<button mat-raised-button\n        [matTooltip]=\"message.value\"\n        aria-label=\"Button that displays a tooltip with a custom message\">\n  Action\n</button>\n"

/***/ }),

/***/ "./src/assets/examples/material/changing-tooltip/changing-tooltip.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/changing-tooltip/changing-tooltip.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-user-input {\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jaGFuZ2luZy10b29sdGlwL2NoYW5naW5nLXRvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2NoYW5naW5nLXRvb2x0aXAvY2hhbmdpbmctdG9vbHRpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXVzZXItaW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/changing-tooltip/changing-tooltip.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/changing-tooltip/changing-tooltip.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChangingTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangingTooltipComponent", function() { return ChangingTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangingTooltipComponent = /** @class */ (function () {
    function ChangingTooltipComponent() {
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Info about the action');
    }
    ChangingTooltipComponent.prototype.ngOnInit = function () {
    };
    ChangingTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changing-tooltip',
            template: __webpack_require__(/*! ./changing-tooltip.component.html */ "./src/assets/examples/material/changing-tooltip/changing-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./changing-tooltip.component.scss */ "./src/assets/examples/material/changing-tooltip/changing-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangingTooltipComponent);
    return ChangingTooltipComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/checkbox-tree/checkbox-tree.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/checkbox-tree/checkbox-tree.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n      <button mat-icon-button disabled></button>\n      <mat-checkbox class=\"checklist-leaf-node\"\n                    [checked]=\"checklistSelection.isSelected(node)\"\n                    (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    </mat-tree-node>\n  \n    <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n      <button mat-icon-button disabled></button>\n      <mat-form-field>\n        <input matInput #itemValue placeholder=\"New item...\">\n      </mat-form-field>\n      <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n    </mat-tree-node>\n  \n    <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n      <button mat-icon-button matTreeNodeToggle\n              [attr.aria-label]=\"'toggle ' + node.filename\">\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                    [indeterminate]=\"descendantsPartiallySelected(node)\"\n                    (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n      <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n    </mat-tree-node>\n  </mat-tree>\n  "

/***/ }),

/***/ "./src/assets/examples/material/checkbox-tree/checkbox-tree.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/checkbox-tree/checkbox-tree.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94LXRyZWUvY2hlY2tib3gtdHJlZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/checkbox-tree/checkbox-tree.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/checkbox-tree/checkbox-tree.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TodoItemNode, TodoItemFlatNode, ChecklistDatabase, CheckboxTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function() { return ChecklistDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxTreeComponent", function() { return CheckboxTreeComponent; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Node for to-do item
 */
var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());

/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());

/**
 * The Json object for to-do list data.
 */
var TREE_DATA = {
    Groceries: {
        'Almond Meal flour': null,
        'Organic eggs': null,
        'Protein Powder': null,
        Fruits: {
            Apple: null,
            Berries: ['Blueberry', 'Raspberry'],
            Orange: null
        }
    },
    Reminders: [
        'Cook dinner',
        'Read the Material Design spec',
        'Upgrade Application to Angular'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase.prototype.initialize = function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    /** Add an item to to-do list */
    ChecklistDatabase.prototype.insertItem = function (parent, name) {
        if (parent.children) {
            parent.children.push({ item: name });
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChecklistDatabase);
    return ChecklistDatabase;
}());

var CheckboxTreeComponent = /** @class */ (function () {
    function CheckboxTreeComponent(database) {
        var _this = this;
        this.database = database;
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true /* multiple */);
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) { return node.children; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var existingNode = _this.nestedNodeMap.get(node);
            var flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    /** Whether all the descendants of the node are selected. */
    CheckboxTreeComponent.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var descAllSelected = descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        return descAllSelected;
    };
    /** Whether part of the descendants are selected */
    CheckboxTreeComponent.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    CheckboxTreeComponent.prototype.todoItemSelectionToggle = function (node) {
        var _this = this;
        var _a, _b;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
        // Force update for the parent
        descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        this.checkAllParentsSelection(node);
    };
    /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
    CheckboxTreeComponent.prototype.todoLeafItemSelectionToggle = function (node) {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    };
    /* Checks all the parents when a leaf node is selected/unselected */
    CheckboxTreeComponent.prototype.checkAllParentsSelection = function (node) {
        var parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    };
    /** Check root node checked state and change it accordingly */
    CheckboxTreeComponent.prototype.checkRootNodeSelection = function (node) {
        var _this = this;
        var nodeSelected = this.checklistSelection.isSelected(node);
        var descendants = this.treeControl.getDescendants(node);
        var descAllSelected = descendants.every(function (child) {
            return _this.checklistSelection.isSelected(child);
        });
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    };
    /* Get the parent node of a node */
    CheckboxTreeComponent.prototype.getParentNode = function (node) {
        var currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (var i = startIndex; i >= 0; i--) {
            var currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    };
    /** Select the category so we can insert the new item. */
    CheckboxTreeComponent.prototype.addNewItem = function (node) {
        var parentNode = this.flatNodeMap.get(node);
        this.database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    CheckboxTreeComponent.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(nestedNode, itemValue);
    };
    CheckboxTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-checkbox-tree',
            template: __webpack_require__(/*! ./checkbox-tree.component.html */ "./src/assets/examples/material/checkbox-tree/checkbox-tree.component.html"),
            providers: [ChecklistDatabase],
            styles: [__webpack_require__(/*! ./checkbox-tree.component.scss */ "./src/assets/examples/material/checkbox-tree/checkbox-tree.component.scss")]
        }),
        __metadata("design:paramtypes", [ChecklistDatabase])
    ], CheckboxTreeComponent);
    return CheckboxTreeComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/clear-button-input/clear-button-input.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/clear-button-input/clear-button-input.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-form-field\">\n  <input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\">\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/clear-button-input/clear-button-input.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/clear-button-input/clear-button-input.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form-field {\n  width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jbGVhci1idXR0b24taW5wdXQvY2xlYXItYnV0dG9uLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvY2xlYXItYnV0dG9uLWlucHV0L2NsZWFyLWJ1dHRvbi1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/clear-button-input/clear-button-input.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/clear-button-input/clear-button-input.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ClearButtonInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearButtonInputComponent", function() { return ClearButtonInputComponent; });
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

var ClearButtonInputComponent = /** @class */ (function () {
    function ClearButtonInputComponent() {
        this.value = 'Clear me';
    }
    ClearButtonInputComponent.prototype.ngOnInit = function () {
    };
    ClearButtonInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clear-button-input',
            template: __webpack_require__(/*! ./clear-button-input.component.html */ "./src/assets/examples/material/clear-button-input/clear-button-input.component.html"),
            styles: [__webpack_require__(/*! ./clear-button-input.component.scss */ "./src/assets/examples/material/clear-button-input/clear-button-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClearButtonInputComponent);
    return ClearButtonInputComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/configurable-checkbox/configurable-checkbox.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/configurable-checkbox/configurable-checkbox.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox\n          class=\"example-margin\"\n          [(ngModel)]=\"checked\"\n          [(indeterminate)]=\"indeterminate\"\n          [labelPosition]=\"labelPosition\"\n          [disabled]=\"disabled\">\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/assets/examples/material/configurable-checkbox/configurable-checkbox.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/configurable-checkbox/configurable-checkbox.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jb25maWd1cmFibGUtY2hlY2tib3gvY29uZmlndXJhYmxlLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvY29uZmlndXJhYmxlLWNoZWNrYm94L2NvbmZpZ3VyYWJsZS1jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWgyIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1tYXJnaW4ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/configurable-checkbox/configurable-checkbox.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/examples/material/configurable-checkbox/configurable-checkbox.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ConfigurableCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurableCheckboxComponent", function() { return ConfigurableCheckboxComponent; });
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

var ConfigurableCheckboxComponent = /** @class */ (function () {
    function ConfigurableCheckboxComponent() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
    ConfigurableCheckboxComponent.prototype.ngOnInit = function () {
    };
    ConfigurableCheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configurable-checkbox',
            template: __webpack_require__(/*! ./configurable-checkbox.component.html */ "./src/assets/examples/material/configurable-checkbox/configurable-checkbox.component.html"),
            styles: [__webpack_require__(/*! ./configurable-checkbox.component.scss */ "./src/assets/examples/material/configurable-checkbox/configurable-checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigurableCheckboxComponent);
    return ConfigurableCheckboxComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/configurable-sidenav/configurable-sidenav.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/assets/examples/material/configurable-sidenav/configurable-sidenav.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav [mode]=\"mode.value\">\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/assets/examples/material/configurable-sidenav/configurable-sidenav.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/assets/examples/material/configurable-sidenav/configurable-sidenav.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-group {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jb25maWd1cmFibGUtc2lkZW5hdi9jb25maWd1cmFibGUtc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRRTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2NvbmZpZ3VyYWJsZS1zaWRlbmF2L2NvbmZpZ3VyYWJsZS1zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gdG9wOiAwO1xuICAgIC8vIGJvdHRvbTogMDtcbiAgICAvLyBsZWZ0OiAwO1xuICAgIC8vIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/configurable-sidenav/configurable-sidenav.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/configurable-sidenav/configurable-sidenav.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ConfigurableSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurableSidenavComponent", function() { return ConfigurableSidenavComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigurableSidenavComponent = /** @class */ (function () {
    function ConfigurableSidenavComponent() {
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('over');
    }
    ConfigurableSidenavComponent.prototype.ngOnInit = function () {
    };
    ConfigurableSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configurable-sidenav',
            template: __webpack_require__(/*! ./configurable-sidenav.component.html */ "./src/assets/examples/material/configurable-sidenav/configurable-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./configurable-sidenav.component.scss */ "./src/assets/examples/material/configurable-sidenav/configurable-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigurableSidenavComponent);
    return ConfigurableSidenavComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/configurable-toggle/configurable-toggle.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/configurable-toggle/configurable-toggle.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-slide-toggle\n          class=\"example-margin\"\n          [color]=\"color\"\n          [checked]=\"checked\"\n          [disabled]=\"disabled\">\n        Slide me!\n      </mat-slide-toggle>\n    </section>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/assets/examples/material/configurable-toggle/configurable-toggle.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/configurable-toggle/configurable-toggle.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2NvbmZpZ3VyYWJsZS10b2dnbGUvY29uZmlndXJhYmxlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/configurable-toggle/configurable-toggle.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/configurable-toggle/configurable-toggle.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConfigurableToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurableToggleComponent", function() { return ConfigurableToggleComponent; });
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

var ConfigurableToggleComponent = /** @class */ (function () {
    function ConfigurableToggleComponent() {
    }
    ConfigurableToggleComponent.prototype.ngOnInit = function () {
    };
    ConfigurableToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configurable-toggle',
            template: __webpack_require__(/*! ./configurable-toggle.component.html */ "./src/assets/examples/material/configurable-toggle/configurable-toggle.component.html"),
            styles: [__webpack_require__(/*! ./configurable-toggle.component.scss */ "./src/assets/examples/material/configurable-toggle/configurable-toggle.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigurableToggleComponent);
    return ConfigurableToggleComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/custom-bar/custom-bar.component.html":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/custom-bar/custom-bar.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n      <h2 class=\"example-h2\">Progress bar configuration</h2>\n  \n      <section class=\"example-section\">\n        <label class=\"example-margin\">Color:</label>\n        <mat-radio-group [(ngModel)]=\"color\">\n          <mat-radio-button class=\"example-margin\" value=\"primary\">\n            Primary\n          </mat-radio-button>\n          <mat-radio-button class=\"example-margin\" value=\"accent\">\n            Accent\n          </mat-radio-button>\n          <mat-radio-button class=\"example-margin\" value=\"warn\">\n            Warn\n          </mat-radio-button>\n        </mat-radio-group>\n      </section>\n  \n      <section class=\"example-section\">\n        <label class=\"example-margin\">Mode:</label>\n        <mat-radio-group [(ngModel)]=\"mode\">\n          <mat-radio-button class=\"example-margin\" value=\"determinate\">\n            Determinate\n          </mat-radio-button>\n          <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n            Indeterminate\n          </mat-radio-button>\n          <mat-radio-button class=\"example-margin\" value=\"buffer\">\n            Buffer\n          </mat-radio-button>\n          <mat-radio-button class=\"example-margin\" value=\"query\">\n            Query\n          </mat-radio-button>\n        </mat-radio-group>\n      </section>\n  \n      <section class=\"example-section\" *ngIf=\"mode === 'determinate' || mode === 'buffer'\">\n        <label class=\"example-margin\">Progress:</label>\n        <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n      </section>\n      <section class=\"example-section\" *ngIf=\"mode === 'buffer'\">\n        <label class=\"example-margin\">Buffer:</label>\n        <mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\n      </section>\n    </mat-card-content>\n  </mat-card>\n  \n  <mat-card>\n    <mat-card-content>\n      <h2 class=\"example-h2\">Result</h2>\n  \n      <section class=\"example-section\">\n        <mat-progress-bar\n            class=\"example-margin\"\n            [color]=\"color\"\n            [mode]=\"mode\"\n            [value]=\"value\"\n            [bufferValue]=\"bufferValue\">\n        </mat-progress-bar>\n      </section>\n    </mat-card-content>\n  </mat-card>\n  "

/***/ }),

/***/ "./src/assets/examples/material/custom-bar/custom-bar.component.scss":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/custom-bar/custom-bar.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jdXN0b20tYmFyL2N1c3RvbS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jdXN0b20tYmFyL2N1c3RvbS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oMiB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtbWFyZ2luIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/custom-bar/custom-bar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/custom-bar/custom-bar.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBarComponent", function() { return CustomBarComponent; });
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

var CustomBarComponent = /** @class */ (function () {
    function CustomBarComponent() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    CustomBarComponent.prototype.ngOnInit = function () {
    };
    CustomBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-bar',
            template: __webpack_require__(/*! ./custom-bar.component.html */ "./src/assets/examples/material/custom-bar/custom-bar.component.html"),
            styles: [__webpack_require__(/*! ./custom-bar.component.scss */ "./src/assets/examples/material/custom-bar/custom-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomBarComponent);
    return CustomBarComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/custom-class-tooltip/custom-class-tooltip.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-class-tooltip/custom-class-tooltip.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-red\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Red-tooltip Action\n</button>\n"

/***/ }),

/***/ "./src/assets/examples/material/custom-class-tooltip/custom-class-tooltip.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-class-tooltip/custom-class-tooltip.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button {\n  margin-top: 16px; }\n\n.example-tooltip-red {\n  background: #b71c1c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jdXN0b20tY2xhc3MtdG9vbHRpcC9jdXN0b20tY2xhc3MtdG9vbHRpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvY3VzdG9tLWNsYXNzLXRvb2x0aXAvY3VzdG9tLWNsYXNzLXRvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXRvb2x0aXAtcmVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjYjcxYzFjO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/custom-class-tooltip/custom-class-tooltip.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-class-tooltip/custom-class-tooltip.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CustomClassTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomClassTooltipComponent", function() { return CustomClassTooltipComponent; });
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

var CustomClassTooltipComponent = /** @class */ (function () {
    function CustomClassTooltipComponent() {
    }
    CustomClassTooltipComponent.prototype.ngOnInit = function () {
    };
    CustomClassTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-class-tooltip',
            template: __webpack_require__(/*! ./custom-class-tooltip.component.html */ "./src/assets/examples/material/custom-class-tooltip/custom-class-tooltip.component.html"),
            // Need to remove view encapsulation so that the custom tooltip style defined in
            // `tooltip-custom-class-example.css` will not be scoped to this component's view.
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./custom-class-tooltip.component.scss */ "./src/assets/examples/material/custom-class-tooltip/custom-class-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomClassTooltipComponent);
    return CustomClassTooltipComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/custom-datepicker/custom-datepicker.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-datepicker/custom-datepicker.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Verbose datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/custom-datepicker/custom-datepicker.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-datepicker/custom-datepicker.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2N1c3RvbS1kYXRlcGlja2VyL2N1c3RvbS1kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/custom-datepicker/custom-datepicker.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-datepicker/custom-datepicker.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MY_FORMATS, CustomDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatepickerComponent", function() { return CustomDatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

var moment = moment__WEBPACK_IMPORTED_MODULE_4__;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var CustomDatepickerComponent = /** @class */ (function () {
    function CustomDatepickerComponent() {
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment());
    }
    CustomDatepickerComponent.prototype.ngOnInit = function () {
    };
    CustomDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-datepicker',
            template: __webpack_require__(/*! ./custom-datepicker.component.html */ "./src/assets/examples/material/custom-datepicker/custom-datepicker.component.html"),
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
            styles: [__webpack_require__(/*! ./custom-datepicker.component.scss */ "./src/assets/examples/material/custom-datepicker/custom-datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomDatepickerComponent);
    return CustomDatepickerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/custom-loading-buttons/custom-loading-buttons.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-loading-buttons/custom-loading-buttons.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>ngModule</h3>\n<p class=\"text-muted mb-24\"><span>SharedComponentsModule</span></p>\n\n<button-loading\n  *ngFor=\"let btn of buttons\"\n  [loading]=\"btn.loading\"\n  class=\"mr-16\"\n  [color]=\"btn.name\"\n  (click)=\"showLoading(btn)\"\n  >Click Me</button-loading\n>\n"

/***/ }),

/***/ "./src/assets/examples/material/custom-loading-buttons/custom-loading-buttons.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-loading-buttons/custom-loading-buttons.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2N1c3RvbS1sb2FkaW5nLWJ1dHRvbnMvY3VzdG9tLWxvYWRpbmctYnV0dG9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/custom-loading-buttons/custom-loading-buttons.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-loading-buttons/custom-loading-buttons.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CustomLoadingButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLoadingButtonsComponent", function() { return CustomLoadingButtonsComponent; });
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

var CustomLoadingButtonsComponent = /** @class */ (function () {
    function CustomLoadingButtonsComponent(cdr) {
        this.cdr = cdr;
        this.buttons = [
            {
                name: "default",
                loading: false
            },
            {
                name: "primary",
                loading: false
            },
            {
                name: "accent",
                loading: false
            },
            {
                name: "warn",
                loading: false
            }
        ];
    }
    CustomLoadingButtonsComponent.prototype.ngOnInit = function () { };
    CustomLoadingButtonsComponent.prototype.showLoading = function (button) {
        var _this = this;
        button.loading = true;
        setTimeout(function () {
            button.loading = false;
            _this.cdr.detectChanges();
        }, 3000);
    };
    CustomLoadingButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-custom-loading-buttons",
            template: __webpack_require__(/*! ./custom-loading-buttons.component.html */ "./src/assets/examples/material/custom-loading-buttons/custom-loading-buttons.component.html"),
            styles: [__webpack_require__(/*! ./custom-loading-buttons.component.scss */ "./src/assets/examples/material/custom-loading-buttons/custom-loading-buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CustomLoadingButtonsComponent);
    return CustomLoadingButtonsComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/custom-paginator/custom-paginator.component.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-paginator/custom-paginator.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  List length:\n  <input matInput [(ngModel)]=\"length\">\n</mat-form-field>\n\n<mat-form-field>\n  Page size:\n  <input matInput [(ngModel)]=\"pageSize\">\n</mat-form-field>\n<mat-form-field>\n  Page size options:\n  <input matInput\n         [ngModel]=\"pageSizeOptions\"\n         (ngModelChange)=\"setPageSizeOptions($event)\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              (page)=\"pageEvent = $event\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/custom-paginator/custom-paginator.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-paginator/custom-paginator.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  margin-right: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jdXN0b20tcGFnaW5hdG9yL2N1c3RvbS1wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2N1c3RvbS1wYWdpbmF0b3IvY3VzdG9tLXBhZ2luYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/custom-paginator/custom-paginator.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-paginator/custom-paginator.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomPaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPaginatorComponent", function() { return CustomPaginatorComponent; });
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

var CustomPaginatorComponent = /** @class */ (function () {
    function CustomPaginatorComponent() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    CustomPaginatorComponent.prototype.ngOnInit = function () {
    };
    CustomPaginatorComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    CustomPaginatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-paginator',
            template: __webpack_require__(/*! ./custom-paginator.component.html */ "./src/assets/examples/material/custom-paginator/custom-paginator.component.html"),
            styles: [__webpack_require__(/*! ./custom-paginator.component.scss */ "./src/assets/examples/material/custom-paginator/custom-paginator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomPaginatorComponent);
    return CustomPaginatorComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/custom-panel-select/custom-panel-select.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-panel-select/custom-panel-select.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-label>Panel color</mat-label>\n  <mat-select [formControl]=\"panelColor\"\n              panelClass=\"example-panel-{{panelColor.value}}\">\n    <mat-option value=\"red\">Red</mat-option>\n    <mat-option value=\"green\">Green</mat-option>\n    <mat-option value=\"blue\">Blue</mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/custom-panel-select/custom-panel-select.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-panel-select/custom-panel-select.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-panel-red.mat-select-panel {\n  background: rgba(255, 0, 0, 0.5); }\n\n.example-panel-green.mat-select-panel {\n  background: rgba(0, 255, 0, 0.5); }\n\n.example-panel-blue.mat-select-panel {\n  background: rgba(0, 0, 255, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jdXN0b20tcGFuZWwtc2VsZWN0L2N1c3RvbS1wYW5lbC1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2N1c3RvbS1wYW5lbC1zZWxlY3QvY3VzdG9tLXBhbmVsLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXBhbmVsLXJlZC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtcGFuZWwtZ3JlZW4ubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuNSk7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXBhbmVsLWJsdWUubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuNSk7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/custom-panel-select/custom-panel-select.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-panel-select/custom-panel-select.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CustomPanelSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPanelSelectComponent", function() { return CustomPanelSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomPanelSelectComponent = /** @class */ (function () {
    function CustomPanelSelectComponent() {
        this.panelColor = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('red');
    }
    CustomPanelSelectComponent.prototype.ngOnInit = function () {
    };
    CustomPanelSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-panel-select',
            template: __webpack_require__(/*! ./custom-panel-select.component.html */ "./src/assets/examples/material/custom-panel-select/custom-panel-select.component.html"),
            // Encapsulation has to be disabled in order for the
            // component style to apply to the select panel.
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./custom-panel-select.component.scss */ "./src/assets/examples/material/custom-panel-select/custom-panel-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomPanelSelectComponent);
    return CustomPanelSelectComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/custom-position-tooltip/custom-position-tooltip.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-position-tooltip/custom-position-tooltip.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-user-input\">\n  <mat-select placeholder=\"Tooltip position\" [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipPosition]=\"position.value\"\n        aria-label=\"Button that displays a tooltip in various positions\">\n  Action\n</button>\n"

/***/ }),

/***/ "./src/assets/examples/material/custom-position-tooltip/custom-position-tooltip.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-position-tooltip/custom-position-tooltip.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-user-input {\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jdXN0b20tcG9zaXRpb24tdG9vbHRpcC9jdXN0b20tcG9zaXRpb24tdG9vbHRpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvY3VzdG9tLXBvc2l0aW9uLXRvb2x0aXAvY3VzdG9tLXBvc2l0aW9uLXRvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS11c2VyLWlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/custom-position-tooltip/custom-position-tooltip.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-position-tooltip/custom-position-tooltip.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CustomPositionTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPositionTooltipComponent", function() { return CustomPositionTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomPositionTooltipComponent = /** @class */ (function () {
    function CustomPositionTooltipComponent() {
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.positionOptions[0]);
    }
    CustomPositionTooltipComponent.prototype.ngOnInit = function () {
    };
    CustomPositionTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-position-tooltip',
            template: __webpack_require__(/*! ./custom-position-tooltip.component.html */ "./src/assets/examples/material/custom-position-tooltip/custom-position-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./custom-position-tooltip.component.scss */ "./src/assets/examples/material/custom-position-tooltip/custom-position-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomPositionTooltipComponent);
    return CustomPositionTooltipComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/custom-ripples/custom-ripples.component.html":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/custom-ripples/custom-ripples.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\n\n<mat-form-field class=\"example-ripple-form-field\">\n  <input matInput [(ngModel)]=\"radius\" type=\"number\" placeholder=\"Radius\">\n</mat-form-field>\n<mat-form-field class=\"example-ripple-form-field\">\n  <input matInput [(ngModel)]=\"color\" type=\"text\" placeholder=\"Color\">\n</mat-form-field>\n\n\n<div class=\"example-ripple-container mat-elevation-z4\"\n     matRipple\n     [matRippleCentered]=\"centered\"\n     [matRippleDisabled]=\"disabled\"\n     [matRippleUnbounded]=\"unbounded\"\n     [matRippleRadius]=\"radius\"\n     [matRippleColor]=\"color\">\n  Click me\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/custom-ripples/custom-ripples.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/custom-ripples/custom-ripples.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-ripple-container {\n  cursor: pointer;\n  text-align: center;\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent; }\n\n/** Styles to make the demo look better. */\n\n.example-ripple-checkbox {\n  margin: 6px 12px 6px 0; }\n\n.example-ripple-form-field {\n  margin: 0 12px 0 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jdXN0b20tcmlwcGxlcy9jdXN0b20tcmlwcGxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFFbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBRXJCLHVCQUF1QjtFQUN2Qix3Q0FBd0MsRUFBQTs7QUFHMUMsMENBQUE7O0FBQ0E7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2N1c3RvbS1yaXBwbGVzL2N1c3RvbS1yaXBwbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmlwcGxlLWNvbnRhaW5lciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwMHB4O1xuICBcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICBcbiAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAvKiogU3R5bGVzIHRvIG1ha2UgdGhlIGRlbW8gbG9vayBiZXR0ZXIuICovXG4gIC5leGFtcGxlLXJpcHBsZS1jaGVja2JveCB7XG4gICAgbWFyZ2luOiA2cHggMTJweCA2cHggMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtcmlwcGxlLWZvcm0tZmllbGQge1xuICAgIG1hcmdpbjogMCAxMnB4IDAgMDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/custom-ripples/custom-ripples.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/custom-ripples/custom-ripples.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomRipplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRipplesComponent", function() { return CustomRipplesComponent; });
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

var CustomRipplesComponent = /** @class */ (function () {
    function CustomRipplesComponent() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
    CustomRipplesComponent.prototype.ngOnInit = function () {
    };
    CustomRipplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-ripples',
            template: __webpack_require__(/*! ./custom-ripples.component.html */ "./src/assets/examples/material/custom-ripples/custom-ripples.component.html"),
            styles: [__webpack_require__(/*! ./custom-ripples.component.scss */ "./src/assets/examples/material/custom-ripples/custom-ripples.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomRipplesComponent);
    return CustomRipplesComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/custom-snackbar/custom-snackbar-overview/custom-snackbar-overview.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-snackbar/custom-snackbar-overview/custom-snackbar-overview.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"example-pizza-party\">\n  Pizza party!!! 🍕\n</span>\n"

/***/ }),

/***/ "./src/assets/examples/material/custom-snackbar/custom-snackbar-overview/custom-snackbar-overview.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-snackbar/custom-snackbar-overview/custom-snackbar-overview.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-pizza-party {\n  color: hotpink; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jdXN0b20tc25hY2tiYXIvY3VzdG9tLXNuYWNrYmFyLW92ZXJ2aWV3L2N1c3RvbS1zbmFja2Jhci1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2N1c3RvbS1zbmFja2Jhci9jdXN0b20tc25hY2tiYXItb3ZlcnZpZXcvY3VzdG9tLXNuYWNrYmFyLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcGl6emEtcGFydHkge1xuICAgIGNvbG9yOiBob3RwaW5rO1xuICB9Il19 */"

/***/ }),

/***/ "./src/assets/examples/material/custom-snackbar/custom-snackbar-overview/custom-snackbar-overview.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-snackbar/custom-snackbar-overview/custom-snackbar-overview.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CustomSnackbarOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSnackbarOverviewComponent", function() { return CustomSnackbarOverviewComponent; });
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

var CustomSnackbarOverviewComponent = /** @class */ (function () {
    function CustomSnackbarOverviewComponent() {
    }
    CustomSnackbarOverviewComponent.prototype.ngOnInit = function () {
    };
    CustomSnackbarOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-snackbar-overview',
            template: __webpack_require__(/*! ./custom-snackbar-overview.component.html */ "./src/assets/examples/material/custom-snackbar/custom-snackbar-overview/custom-snackbar-overview.component.html"),
            styles: [__webpack_require__(/*! ./custom-snackbar-overview.component.scss */ "./src/assets/examples/material/custom-snackbar/custom-snackbar-overview/custom-snackbar-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomSnackbarOverviewComponent);
    return CustomSnackbarOverviewComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/custom-snackbar/custom-snackbar.component.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-snackbar/custom-snackbar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n"

/***/ }),

/***/ "./src/assets/examples/material/custom-snackbar/custom-snackbar.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-snackbar/custom-snackbar.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2N1c3RvbS1zbmFja2Jhci9jdXN0b20tc25hY2tiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/custom-snackbar/custom-snackbar.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/custom-snackbar/custom-snackbar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CustomSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSnackbarComponent", function() { return CustomSnackbarComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_snackbar_overview_custom_snackbar_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-snackbar-overview/custom-snackbar-overview.component */ "./src/assets/examples/material/custom-snackbar/custom-snackbar-overview/custom-snackbar-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomSnackbarComponent = /** @class */ (function () {
    function CustomSnackbarComponent(snackBar) {
        this.snackBar = snackBar;
        this.durationInSeconds = 5;
    }
    CustomSnackbarComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_custom_snackbar_overview_custom_snackbar_overview_component__WEBPACK_IMPORTED_MODULE_2__["CustomSnackbarOverviewComponent"], {
            duration: this.durationInSeconds * 1000,
        });
    };
    CustomSnackbarComponent.prototype.ngOnInit = function () {
    };
    CustomSnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-snackbar',
            template: __webpack_require__(/*! ./custom-snackbar.component.html */ "./src/assets/examples/material/custom-snackbar/custom-snackbar.component.html"),
            styles: [__webpack_require__(/*! ./custom-snackbar.component.scss */ "./src/assets/examples/material/custom-snackbar/custom-snackbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]])
    ], CustomSnackbarComponent);
    return CustomSnackbarComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/custom-spinner/custom-spinner.component.html":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/custom-spinner/custom-spinner.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n      <h2 class=\"example-h2\">Progress spinner configuration</h2>\n  \n      <section class=\"example-section\">\n        <label class=\"example-margin\">Color:</label>\n        <mat-radio-group [(ngModel)]=\"color\">\n          <mat-radio-button class=\"example-margin\" value=\"primary\">\n            Primary\n          </mat-radio-button>\n          <mat-radio-button class=\"example-margin\" value=\"accent\">\n            Accent\n          </mat-radio-button>\n          <mat-radio-button class=\"example-margin\" value=\"warn\">\n            Warn\n          </mat-radio-button>\n        </mat-radio-group>\n      </section>\n  \n      <section class=\"example-section\">\n        <label class=\"example-margin\">Mode:</label>\n        <mat-radio-group [(ngModel)]=\"mode\">\n          <mat-radio-button class=\"example-margin\" value=\"determinate\">\n            Determinate\n          </mat-radio-button>\n          <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n            Indeterminate\n          </mat-radio-button>\n        </mat-radio-group>\n      </section>\n  \n      <section class=\"example-section\" *ngIf=\"mode === 'determinate'\">\n        <label class=\"example-margin\">Progress:</label>\n        <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n      </section>\n    </mat-card-content>\n  </mat-card>\n  <mat-card>\n    <mat-card-content>\n      <h2 class=\"example-h2\">Result</h2>\n  \n      <mat-progress-spinner\n          class=\"example-margin\"\n          [color]=\"color\"\n          [mode]=\"mode\"\n          [value]=\"value\">\n      </mat-progress-spinner>\n    </mat-card-content>\n  </mat-card>\n  "

/***/ }),

/***/ "./src/assets/examples/material/custom-spinner/custom-spinner.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/custom-spinner/custom-spinner.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jdXN0b20tc3Bpbm5lci9jdXN0b20tc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2N1c3RvbS1zcGlubmVyL2N1c3RvbS1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaDIge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLW1hcmdpbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/custom-spinner/custom-spinner.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/custom-spinner/custom-spinner.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSpinnerComponent", function() { return CustomSpinnerComponent; });
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

var CustomSpinnerComponent = /** @class */ (function () {
    function CustomSpinnerComponent() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
    CustomSpinnerComponent.prototype.ngOnInit = function () {
    };
    CustomSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-spinner',
            template: __webpack_require__(/*! ./custom-spinner.component.html */ "./src/assets/examples/material/custom-spinner/custom-spinner.component.html"),
            styles: [__webpack_require__(/*! ./custom-spinner.component.scss */ "./src/assets/examples/material/custom-spinner/custom-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomSpinnerComponent);
    return CustomSpinnerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/custom-tab-group/custom-tab-group.component.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-tab-group/custom-tab-group.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-button-toggle-group #headerToggle=\"matButtonToggleGroup\"\n                             value=\"primary\"\n                             aria-label=\"Change color\">\n      <mat-button-toggle value=\"above\"> Top </mat-button-toggle>\n      <mat-button-toggle value=\"below\"> Bottom </mat-button-toggle>\n    </mat-button-toggle-group>\n    <span class=\"example-button-toggle-label\"> Tab-group </span>\n  </div>\n  \n  <div>\n<div>\n    <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                             value=\"primary\"\n                             aria-label=\"Change color\">\n      <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n      <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n    </mat-button-toggle-group>\n    <span class=\"example-button-toggle-label\"> Color </span>\n  </div>\n  \n  <div>\n    <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                             value=\"primary\"\n                             aria-label=\"Change color\">\n      <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n      <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n    </mat-button-toggle-group>\n    <span class=\"example-button-toggle-label\"> Background Color </span>\n  </div>\n  \n  <mat-tab-group [headerPosition]=\"headerToggle.value\" [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n    <mat-tab label=\"First\"> Content 1 </mat-tab>\n    <mat-tab label=\"Second\"> Content 2 </mat-tab>\n    <mat-tab label=\"Third\"> Content 3 </mat-tab>\n  </mat-tab-group>\n  "

/***/ }),

/***/ "./src/assets/examples/material/custom-tab-group/custom-tab-group.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-tab-group/custom-tab-group.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9jdXN0b20tdGFiLWdyb3VwL2N1c3RvbS10YWItZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvY3VzdG9tLXRhYi1ncm91cC9jdXN0b20tdGFiLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXRvZ2dsZS1sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMTZweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/custom-tab-group/custom-tab-group.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/custom-tab-group/custom-tab-group.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomTabGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTabGroupComponent", function() { return CustomTabGroupComponent; });
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

var CustomTabGroupComponent = /** @class */ (function () {
    function CustomTabGroupComponent() {
    }
    CustomTabGroupComponent.prototype.ngOnInit = function () {
    };
    CustomTabGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-tab-group',
            template: __webpack_require__(/*! ./custom-tab-group.component.html */ "./src/assets/examples/material/custom-tab-group/custom-tab-group.component.html"),
            styles: [__webpack_require__(/*! ./custom-tab-group.component.scss */ "./src/assets/examples/material/custom-tab-group/custom-tab-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomTabGroupComponent);
    return CustomTabGroupComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/customized-stepper/customized-stepper.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/customized-stepper/customized-stepper.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <form [formGroup]=\"firstFormGroup\">\n        <ng-template matStepLabel>Fill out your name</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n        </mat-form-field>\n        <div> \n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\">\n      <form [formGroup]=\"secondFormGroup\">\n        <ng-template matStepLabel>Fill out your address</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Done</ng-template>\n      You are now done.\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button (click)=\"stepper.reset()\">Reset</button>\n      </div>\n    </mat-step>\n  </mat-horizontal-stepper>\n  \n  <mat-horizontal-stepper>\n    <mat-step label=\"Step 1\" state=\"phone\">\n      <p>Put down your phones.</p>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </mat-step>\n    <mat-step label=\"Step 2\" state=\"chat\">\n      <p>Socialize with each other.</p>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </mat-step>\n    <mat-step label=\"Step 3\">\n      <p>You're welcome.</p>\n    </mat-step>\n  \n    <!-- Icon overrides. -->\n    <ng-template matStepperIcon=\"phone\">\n      <mat-icon>call_end</mat-icon>\n    </ng-template>\n    <ng-template matStepperIcon=\"chat\">\n      <mat-icon>forum</mat-icon>\n    </ng-template>\n  </mat-horizontal-stepper>\n  "

/***/ }),

/***/ "./src/assets/examples/material/customized-stepper/customized-stepper.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/customized-stepper/customized-stepper.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2N1c3RvbWl6ZWQtc3RlcHBlci9jdXN0b21pemVkLXN0ZXBwZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/customized-stepper/customized-stepper.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/customized-stepper/customized-stepper.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CustomizedStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizedStepperComponent", function() { return CustomizedStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomizedStepperComponent = /** @class */ (function () {
    function CustomizedStepperComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    CustomizedStepperComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CustomizedStepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customized-stepper',
            template: __webpack_require__(/*! ./customized-stepper.component.html */ "./src/assets/examples/material/customized-stepper/customized-stepper.component.html"),
            providers: [{
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"], useValue: { displayDefaultIndicatorType: false, showError: true }
                }],
            styles: [__webpack_require__(/*! ./customized-stepper.component.scss */ "./src/assets/examples/material/customized-stepper/customized-stepper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CustomizedStepperComponent);
    return CustomizedStepperComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/data-dialog/data-dialog-overview/data-dialog-overview.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/assets/examples/material/data-dialog/data-dialog-overview/data-dialog-overview.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/data-dialog/data-dialog-overview/data-dialog-overview.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/assets/examples/material/data-dialog/data-dialog-overview/data-dialog-overview.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2RhdGEtZGlhbG9nL2RhdGEtZGlhbG9nLW92ZXJ2aWV3L2RhdGEtZGlhbG9nLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/data-dialog/data-dialog-overview/data-dialog-overview.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/examples/material/data-dialog/data-dialog-overview/data-dialog-overview.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DataDialogOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDialogOverviewComponent", function() { return DataDialogOverviewComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DataDialogOverviewComponent = /** @class */ (function () {
    function DataDialogOverviewComponent(data) {
        this.data = data;
    }
    DataDialogOverviewComponent.prototype.ngOnInit = function () {
    };
    DataDialogOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-dialog-overview',
            template: __webpack_require__(/*! ./data-dialog-overview.component.html */ "./src/assets/examples/material/data-dialog/data-dialog-overview/data-dialog-overview.component.html"),
            styles: [__webpack_require__(/*! ./data-dialog-overview.component.scss */ "./src/assets/examples/material/data-dialog/data-dialog-overview/data-dialog-overview.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], DataDialogOverviewComponent);
    return DataDialogOverviewComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/data-dialog/data-dialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/data-dialog/data-dialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n"

/***/ }),

/***/ "./src/assets/examples/material/data-dialog/data-dialog.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/data-dialog/data-dialog.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2RhdGEtZGlhbG9nL2RhdGEtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/data-dialog/data-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/data-dialog/data-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: DataDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDialogComponent", function() { return DataDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_dialog_overview_data_dialog_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-dialog-overview/data-dialog-overview.component */ "./src/assets/examples/material/data-dialog/data-dialog-overview/data-dialog-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataDialogComponent = /** @class */ (function () {
    function DataDialogComponent(dialog) {
        this.dialog = dialog;
    }
    DataDialogComponent.prototype.openDialog = function () {
        this.dialog.open(_data_dialog_overview_data_dialog_overview_component__WEBPACK_IMPORTED_MODULE_2__["DataDialogOverviewComponent"], {
            data: {
                animal: 'panda'
            }
        });
    };
    DataDialogComponent.prototype.ngOnInit = function () {
    };
    DataDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-dialog',
            template: __webpack_require__(/*! ./data-dialog.component.html */ "./src/assets/examples/material/data-dialog/data-dialog.component.html"),
            styles: [__webpack_require__(/*! ./data-dialog.component.scss */ "./src/assets/examples/material/data-dialog/data-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], DataDialogComponent);
    return DataDialogComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/delay-tooltip/delay-tooltip.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/delay-tooltip/delay-tooltip.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Show delay (milliseconds)\"\n         type=\"number\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\"\n         [formControl]=\"showDelay\">\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Hide delay (milliseconds)\"\n         type=\"number\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\"\n         [formControl]=\"hideDelay\">\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n"

/***/ }),

/***/ "./src/assets/examples/material/delay-tooltip/delay-tooltip.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/delay-tooltip/delay-tooltip.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-user-input {\n  display: block;\n  width: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9kZWxheS10b29sdGlwL2RlbGF5LXRvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvZGVsYXktdG9vbHRpcC9kZWxheS10b29sdGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtdXNlci1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/delay-tooltip/delay-tooltip.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/delay-tooltip/delay-tooltip.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DelayTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayTooltipComponent", function() { return DelayTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DelayTooltipComponent = /** @class */ (function () {
    function DelayTooltipComponent() {
        this.showDelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1000);
        this.hideDelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](2000);
    }
    DelayTooltipComponent.prototype.ngOnInit = function () {
    };
    DelayTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delay-tooltip',
            template: __webpack_require__(/*! ./delay-tooltip.component.html */ "./src/assets/examples/material/delay-tooltip/delay-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./delay-tooltip.component.scss */ "./src/assets/examples/material/delay-tooltip/delay-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DelayTooltipComponent);
    return DelayTooltipComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/different-locale-datepicker/different-locale-datepicker.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/examples/material/different-locale-datepicker/different-locale-datepicker.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n"

/***/ }),

/***/ "./src/assets/examples/material/different-locale-datepicker/different-locale-datepicker.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/examples/material/different-locale-datepicker/different-locale-datepicker.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  margin-right: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9kaWZmZXJlbnQtbG9jYWxlLWRhdGVwaWNrZXIvZGlmZmVyZW50LWxvY2FsZS1kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9kaWZmZXJlbnQtbG9jYWxlLWRhdGVwaWNrZXIvZGlmZmVyZW50LWxvY2FsZS1kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/different-locale-datepicker/different-locale-datepicker.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/assets/examples/material/different-locale-datepicker/different-locale-datepicker.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DifferentLocaleDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifferentLocaleDatepickerComponent", function() { return DifferentLocaleDatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DifferentLocaleDatepickerComponent = /** @class */ (function () {
    function DifferentLocaleDatepickerComponent(adapter) {
        this.adapter = adapter;
    }
    DifferentLocaleDatepickerComponent.prototype.french = function () {
        this.adapter.setLocale('fr');
    };
    DifferentLocaleDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-different-locale-datepicker',
            template: __webpack_require__(/*! ./different-locale-datepicker.component.html */ "./src/assets/examples/material/different-locale-datepicker/different-locale-datepicker.component.html"),
            providers: [
                // The locale would typically be provided on the root module of your application. We do it at
                // the component level here, due to limitations of our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"], useValue: 'ja-JP' },
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MAT_MOMENT_DATE_FORMATS"] },
            ],
            styles: [__webpack_require__(/*! ./different-locale-datepicker.component.scss */ "./src/assets/examples/material/different-locale-datepicker/different-locale-datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]])
    ], DifferentLocaleDatepickerComponent);
    return DifferentLocaleDatepickerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/disabled-datepicker/disabled-datepicker.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/disabled-datepicker/disabled-datepicker.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\">\n    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n"

/***/ }),

/***/ "./src/assets/examples/material/disabled-datepicker/disabled-datepicker.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/disabled-datepicker/disabled-datepicker.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Rpc2FibGVkLWRhdGVwaWNrZXIvZGlzYWJsZWQtZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/disabled-datepicker/disabled-datepicker.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/disabled-datepicker/disabled-datepicker.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DisabledDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledDatepickerComponent", function() { return DisabledDatepickerComponent; });
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

var DisabledDatepickerComponent = /** @class */ (function () {
    function DisabledDatepickerComponent() {
    }
    DisabledDatepickerComponent.prototype.ngOnInit = function () {
    };
    DisabledDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disabled-datepicker',
            template: __webpack_require__(/*! ./disabled-datepicker.component.html */ "./src/assets/examples/material/disabled-datepicker/disabled-datepicker.component.html"),
            styles: [__webpack_require__(/*! ./disabled-datepicker.component.scss */ "./src/assets/examples/material/disabled-datepicker/disabled-datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DisabledDatepickerComponent);
    return DisabledDatepickerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/disabled-select/disabled-select.component.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/disabled-select/disabled-select.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  disabled-select works!\n</p>\n<p>\n  <mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox>\n</p>\n\n<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Choose an option</mat-label>\n  <mat-select [disabled]=\"disableSelect.value\">\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\" disabled>Option 2 (disabled)</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Choose an option</mat-label>\n  <select matNativeControl [disabled]=\"disableSelect.value\">\n    <option value=\"\" selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\" disabled>Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n\n"

/***/ }),

/***/ "./src/assets/examples/material/disabled-select/disabled-select.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/disabled-select/disabled-select.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Rpc2FibGVkLXNlbGVjdC9kaXNhYmxlZC1zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/disabled-select/disabled-select.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/disabled-select/disabled-select.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DisabledSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledSelectComponent", function() { return DisabledSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisabledSelectComponent = /** @class */ (function () {
    function DisabledSelectComponent() {
        this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
    }
    DisabledSelectComponent.prototype.ngOnInit = function () {
    };
    DisabledSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disabled-select',
            template: __webpack_require__(/*! ./disabled-select.component.html */ "./src/assets/examples/material/disabled-select/disabled-select.component.html"),
            styles: [__webpack_require__(/*! ./disabled-select.component.scss */ "./src/assets/examples/material/disabled-select/disabled-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DisabledSelectComponent);
    return DisabledSelectComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/disabled-tooltip/disabled-tooltip.component.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/disabled-tooltip/disabled-tooltip.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipDisabled]=\"disabled.value\"\n        aria-label=\"Button that displays a tooltip that can be programatically disabled\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\n  Tooltip disabled\n</mat-checkbox>\n"

/***/ }),

/***/ "./src/assets/examples/material/disabled-tooltip/disabled-tooltip.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/disabled-tooltip/disabled-tooltip.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-disabled-checkbox {\n  margin-left: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9kaXNhYmxlZC10b29sdGlwL2Rpc2FibGVkLXRvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Rpc2FibGVkLXRvb2x0aXAvZGlzYWJsZWQtdG9vbHRpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWRpc2FibGVkLWNoZWNrYm94IHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/disabled-tooltip/disabled-tooltip.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/disabled-tooltip/disabled-tooltip.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DisabledTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledTooltipComponent", function() { return DisabledTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisabledTooltipComponent = /** @class */ (function () {
    function DisabledTooltipComponent() {
        this.disabled = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
    }
    DisabledTooltipComponent.prototype.ngOnInit = function () {
    };
    DisabledTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disabled-tooltip',
            template: __webpack_require__(/*! ./disabled-tooltip.component.html */ "./src/assets/examples/material/disabled-tooltip/disabled-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./disabled-tooltip.component.scss */ "./src/assets/examples/material/disabled-tooltip/disabled-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DisabledTooltipComponent);
    return DisabledTooltipComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/display-value-autocomplete/display-value-autocomplete.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/assets/examples/material/display-value-autocomplete/display-value-autocomplete.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option.name}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/display-value-autocomplete/display-value-autocomplete.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/assets/examples/material/display-value-autocomplete/display-value-autocomplete.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9kaXNwbGF5LXZhbHVlLWF1dG9jb21wbGV0ZS9kaXNwbGF5LXZhbHVlLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvZGlzcGxheS12YWx1ZS1hdXRvY29tcGxldGUvZGlzcGxheS12YWx1ZS1hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/display-value-autocomplete/display-value-autocomplete.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/examples/material/display-value-autocomplete/display-value-autocomplete.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DisplayValueAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayValueAutocompleteComponent", function() { return DisplayValueAutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DisplayValueAutocompleteComponent = /** @class */ (function () {
    function DisplayValueAutocompleteComponent() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = [
            { name: 'Mary' },
            { name: 'Shelley' },
            { name: 'Igor' }
        ];
    }
    DisplayValueAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return name ? _this._filter(name) : _this.options.slice(); }));
    };
    DisplayValueAutocompleteComponent.prototype.displayFn = function (user) {
        return user ? user.name : undefined;
    };
    DisplayValueAutocompleteComponent.prototype._filter = function (name) {
        var filterValue = name.toLowerCase();
        return this.options.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    DisplayValueAutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-value-autocomplete',
            template: __webpack_require__(/*! ./display-value-autocomplete.component.html */ "./src/assets/examples/material/display-value-autocomplete/display-value-autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./display-value-autocomplete.component.scss */ "./src/assets/examples/material/display-value-autocomplete/display-value-autocomplete.component.scss")]
        })
    ], DisplayValueAutocompleteComponent);
    return DisplayValueAutocompleteComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/drawer-sidenav/drawer-sidenav.component.html":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/drawer-sidenav/drawer-sidenav.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>Drawer content</mat-drawer>\n  <mat-drawer-content>\n      Main content\n      Main content\n      Main content\n      Main content\n      Main content\n      Main content\n      Main content\n      Main content\n    </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/assets/examples/material/drawer-sidenav/drawer-sidenav.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/drawer-sidenav/drawer-sidenav.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9kcmF3ZXItc2lkZW5hdi9kcmF3ZXItc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvZHJhd2VyLXNpZGVuYXYvZHJhd2VyLXNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/drawer-sidenav/drawer-sidenav.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/drawer-sidenav/drawer-sidenav.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DrawerSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerSidenavComponent", function() { return DrawerSidenavComponent; });
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

var DrawerSidenavComponent = /** @class */ (function () {
    function DrawerSidenavComponent() {
    }
    DrawerSidenavComponent.prototype.ngOnInit = function () {
    };
    DrawerSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawer-sidenav',
            template: __webpack_require__(/*! ./drawer-sidenav.component.html */ "./src/assets/examples/material/drawer-sidenav/drawer-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./drawer-sidenav.component.scss */ "./src/assets/examples/material/drawer-sidenav/drawer-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DrawerSidenavComponent);
    return DrawerSidenavComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/dynamic-data-tree/dynamic-data-tree.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/dynamic-data-tree/dynamic-data-tree.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n      <button mat-icon-button disabled></button>\n      {{node.item}}\n    </mat-tree-node>\n    <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n      <button mat-icon-button\n              [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      {{node.item}}\n      <mat-progress-bar *ngIf=\"node.isLoading\"\n                        mode=\"indeterminate\"\n                        class=\"example-tree-progress-bar\"></mat-progress-bar>\n    </mat-tree-node>\n  </mat-tree>\n  "

/***/ }),

/***/ "./src/assets/examples/material/dynamic-data-tree/dynamic-data-tree.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/dynamic-data-tree/dynamic-data-tree.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-progress-bar {\n  margin-left: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9keW5hbWljLWRhdGEtdHJlZS9keW5hbWljLWRhdGEtdHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvZHluYW1pYy1kYXRhLXRyZWUvZHluYW1pYy1kYXRhLXRyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10cmVlLXByb2dyZXNzLWJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/dynamic-data-tree/dynamic-data-tree.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/dynamic-data-tree/dynamic-data-tree.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DynamicFlatNode, DynamicDatabase, DynamicDataSource, DynamicDataTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFlatNode", function() { return DynamicFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDatabase", function() { return DynamicDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataSource", function() { return DynamicDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataTreeComponent", function() { return DynamicDataTreeComponent; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/** Flat node with expandable and level information */
var DynamicFlatNode = /** @class */ (function () {
    function DynamicFlatNode(item, level, expandable, isLoading) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (isLoading === void 0) { isLoading = false; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
    return DynamicFlatNode;
}());

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
var DynamicDatabase = /** @class */ (function () {
    function DynamicDatabase() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    DynamicDatabase.prototype.initialData = function () {
        return this.rootLevelNodes.map(function (name) { return new DynamicFlatNode(name, 0, true); });
    };
    DynamicDatabase.prototype.getChildren = function (node) {
        return this.dataMap.get(node);
    };
    DynamicDatabase.prototype.isExpandable = function (node) {
        return this.dataMap.has(node);
    };
    return DynamicDatabase;
}());

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var DynamicDataSource = /** @class */ (function () {
    function DynamicDataSource(treeControl, database) {
        this.treeControl = treeControl;
        this.database = database;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(DynamicDataSource.prototype, "data", {
        get: function () { return this.dataChange.value; },
        set: function (value) {
            this.treeControl.dataNodes = value;
            this.dataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    DynamicDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this.treeControl.expansionModel.onChange.subscribe(function (change) {
            if (change.added ||
                change.removed) {
                _this.handleTreeControl(change);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(collectionViewer.viewChange, this.dataChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.data; }));
    };
    /** Handle expand/collapse behaviors */
    DynamicDataSource.prototype.handleTreeControl = function (change) {
        var _this = this;
        if (change.added) {
            change.added.forEach(function (node) { return _this.toggleNode(node, true); });
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(function (node) { return _this.toggleNode(node, false); });
        }
    };
    /**
     * Toggle the node, remove from display list
     */
    DynamicDataSource.prototype.toggleNode = function (node, expand) {
        var _this = this;
        var children = this.database.getChildren(node.item);
        var index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(function () {
            var _a;
            if (expand) {
                var nodes = children.map(function (name) {
                    return new DynamicFlatNode(name, node.level + 1, _this.database.isExpandable(name));
                });
                (_a = _this.data).splice.apply(_a, [index + 1, 0].concat(nodes));
            }
            else {
                var count = 0;
                for (var i = index + 1; i < _this.data.length
                    && _this.data[i].level > node.level; i++, count++) { }
                _this.data.splice(index + 1, count);
            }
            // notify the change
            _this.dataChange.next(_this.data);
            node.isLoading = false;
        }, 1000);
    };
    DynamicDataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"],
            DynamicDatabase])
    ], DynamicDataSource);
    return DynamicDataSource;
}());

var DynamicDataTreeComponent = /** @class */ (function () {
    function DynamicDataTreeComponent(database) {
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
    DynamicDataTreeComponent.prototype.ngOnInit = function () {
    };
    DynamicDataTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-data-tree',
            template: __webpack_require__(/*! ./dynamic-data-tree.component.html */ "./src/assets/examples/material/dynamic-data-tree/dynamic-data-tree.component.html"),
            providers: [DynamicDatabase],
            styles: [__webpack_require__(/*! ./dynamic-data-tree.component.scss */ "./src/assets/examples/material/dynamic-data-tree/dynamic-data-tree.component.scss")]
        }),
        __metadata("design:paramtypes", [DynamicDatabase])
    ], DynamicDataTreeComponent);
    return DynamicDataTreeComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/dynamic-grid/dynamic-grid.component.html":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/dynamic-grid/dynamic-grid.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n    {{tile.text}}\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/assets/examples/material/dynamic-grid/dynamic-grid.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/dynamic-grid/dynamic-grid.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2R5bmFtaWMtZ3JpZC9keW5hbWljLWdyaWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/dynamic-grid/dynamic-grid.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/dynamic-grid/dynamic-grid.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DynamicGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicGridComponent", function() { return DynamicGridComponent; });
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

var DynamicGridComponent = /** @class */ (function () {
    function DynamicGridComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    DynamicGridComponent.prototype.ngOnInit = function () {
    };
    DynamicGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-grid',
            template: __webpack_require__(/*! ./dynamic-grid.component.html */ "./src/assets/examples/material/dynamic-grid/dynamic-grid.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-grid.component.scss */ "./src/assets/examples/material/dynamic-grid/dynamic-grid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicGridComponent);
    return DynamicGridComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/dynamic-tab-group/dynamic-tab-group.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/dynamic-tab-group/dynamic-tab-group.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <span class=\"example-input-label\"> Selected tab index: </span>\n    <mat-form-field>\n      <input matInput type=\"number\" [formControl]=\"selected\">\n    </mat-form-field>\n  </div>\n  \n  <div>\n    <button mat-raised-button\n            class=\"example-add-tab-button\"\n            (click)=\"addTab(selectAfterAdding.checked)\">\n      Add new tab\n    </button>\n    <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n  </div>\n  \n  <mat-tab-group [selectedIndex]=\"selected.value\"\n                 (selectedIndexChange)=\"selected.setValue($event)\">\n    <mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">\n      Contents for {{tab}} tab\n  \n      <button mat-raised-button\n              class=\"example-delete-tab-button\"\n              [disabled]=\"tabs.length === 1\"\n              (click)=\"removeTab(index)\">\n        Delete Tab\n      </button>\n    </mat-tab>\n  </mat-tab-group>\n  "

/***/ }),

/***/ "./src/assets/examples/material/dynamic-tab-group/dynamic-tab-group.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/dynamic-tab-group/dynamic-tab-group.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9keW5hbWljLXRhYi1ncm91cC9keW5hbWljLXRhYi1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvZHluYW1pYy10YWItZ3JvdXAvZHluYW1pYy10YWItZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1pbnB1dC1sYWJlbCxcbi5leGFtcGxlLWFkZC10YWItYnV0dG9uLFxuLmV4YW1wbGUtZGVsZXRlLXRhYi1idXR0b24ge1xuICBtYXJnaW46IDhweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/dynamic-tab-group/dynamic-tab-group.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/dynamic-tab-group/dynamic-tab-group.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DynamicTabGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicTabGroupComponent", function() { return DynamicTabGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicTabGroupComponent = /** @class */ (function () {
    function DynamicTabGroupComponent() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
    }
    DynamicTabGroupComponent.prototype.ngOnInit = function () {
    };
    DynamicTabGroupComponent.prototype.addTab = function (selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    };
    DynamicTabGroupComponent.prototype.removeTab = function (index) {
        this.tabs.splice(index, 1);
    };
    DynamicTabGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamic-tab-group',
            template: __webpack_require__(/*! ./dynamic-tab-group.component.html */ "./src/assets/examples/material/dynamic-tab-group/dynamic-tab-group.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-tab-group.component.scss */ "./src/assets/examples/material/dynamic-tab-group/dynamic-tab-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicTabGroupComponent);
    return DynamicTabGroupComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/error-form-field/error-form-field.component.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/error-form-field/error-form-field.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/error-form-field/error-form-field.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/error-form-field/error-form-field.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9lcnJvci1mb3JtLWZpZWxkL2Vycm9yLWZvcm0tZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvZXJyb3ItZm9ybS1maWVsZC9lcnJvci1mb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/error-form-field/error-form-field.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/error-form-field/error-form-field.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ErrorFormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorFormFieldComponent", function() { return ErrorFormFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorFormFieldComponent = /** @class */ (function () {
    function ErrorFormFieldComponent() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
    }
    ErrorFormFieldComponent.prototype.ngOnInit = function () { };
    ErrorFormFieldComponent.prototype.getErrorMessage = function () {
        return this.email.hasError("required")
            ? "You must enter a value"
            : this.email.hasError("email")
                ? "Not a valid email"
                : "";
    };
    ErrorFormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-error-form-field",
            template: __webpack_require__(/*! ./error-form-field.component.html */ "./src/assets/examples/material/error-form-field/error-form-field.component.html"),
            styles: [__webpack_require__(/*! ./error-form-field.component.scss */ "./src/assets/examples/material/error-form-field/error-form-field.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorFormFieldComponent);
    return ErrorFormFieldComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/error-input/error-input.component.html":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/error-input/error-input.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/error-input/error-input.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/error-input/error-input.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9lcnJvci1pbnB1dC9lcnJvci1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvZXJyb3ItaW5wdXQvZXJyb3ItaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/error-input/error-input.component.ts":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/error-input/error-input.component.ts ***!
  \***************************************************************************/
/*! exports provided: MyErrorStateMatcher, ErrorInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInputComponent", function() { return ErrorInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ErrorInputComponent = /** @class */ (function () {
    function ErrorInputComponent() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ErrorInputComponent.prototype.ngOnInit = function () {
    };
    ErrorInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-input',
            template: __webpack_require__(/*! ./error-input.component.html */ "./src/assets/examples/material/error-input/error-input.component.html"),
            styles: [__webpack_require__(/*! ./error-input.component.scss */ "./src/assets/examples/material/error-input/error-input.component.scss")]
        })
    ], ErrorInputComponent);
    return ErrorInputComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/error-message-input/error-message-input.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/error-message-input/error-message-input.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/error-message-input/error-message-input.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/error-message-input/error-message-input.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9lcnJvci1tZXNzYWdlLWlucHV0L2Vycm9yLW1lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Vycm9yLW1lc3NhZ2UtaW5wdXQvZXJyb3ItbWVzc2FnZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/error-message-input/error-message-input.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/error-message-input/error-message-input.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ErrorMessageInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageInputComponent", function() { return ErrorMessageInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorMessageInputComponent = /** @class */ (function () {
    function ErrorMessageInputComponent() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
    }
    ErrorMessageInputComponent.prototype.ngOnInit = function () {
    };
    ErrorMessageInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-message-input',
            template: __webpack_require__(/*! ./error-message-input.component.html */ "./src/assets/examples/material/error-message-input/error-message-input.component.html"),
            styles: [__webpack_require__(/*! ./error-message-input.component.scss */ "./src/assets/examples/material/error-message-input/error-message-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorMessageInputComponent);
    return ErrorMessageInputComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/error-select/error-select.component.html":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/error-select/error-select.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Choose one</mat-label>\n  <mat-select [formControl]=\"selected\" [errorStateMatcher]=\"matcher\">\n    <mat-option>Clear</mat-option>\n    <mat-option value=\"valid\">Valid option</mat-option>\n    <mat-option value=\"invalid\">Invalid option</mat-option>\n  </mat-select>\n  <mat-hint>Errors appear instantly!</mat-hint>\n  <mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error>\n  <mat-error *ngIf=\"selected.hasError('pattern') && !selected.hasError('required')\">\n    Your selection is invalid\n  </mat-error>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field class=\"demo-full-width\">\n  <mat-label>Choose one</mat-label>\n  <select matNativeControl [formControl]=\"nativeSelectFormControl\" [errorStateMatcher]=\"matcher\">\n    <option value=\"\"></option>\n    <option value=\"valid\" selected>Valid option</option>\n    <option value=\"invalid\">Invalid option</option>\n  </select>\n  <mat-error *ngIf=\"nativeSelectFormControl.hasError('required')\">You must make a selection</mat-error>\n  <mat-error *ngIf=\"nativeSelectFormControl.hasError('pattern') && !nativeSelectFormControl.hasError('required')\">\n    Your selection is invalid\n  </mat-error>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/error-select/error-select.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/error-select/error-select.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Vycm9yLXNlbGVjdC9lcnJvci1zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/error-select/error-select.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/error-select/error-select.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MyErrorStateMatcher, ErrorSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorSelectComponent", function() { return ErrorSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ErrorSelectComponent = /** @class */ (function () {
    function ErrorSelectComponent() {
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('valid', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('valid'),
        ]);
        this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('valid', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('valid'),
        ]);
        this.nativeSelectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('valid', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ErrorSelectComponent.prototype.ngOnInit = function () {
    };
    ErrorSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-select',
            template: __webpack_require__(/*! ./error-select.component.html */ "./src/assets/examples/material/error-select/error-select.component.html"),
            styles: [__webpack_require__(/*! ./error-select.component.scss */ "./src/assets/examples/material/error-select/error-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorSelectComponent);
    return ErrorSelectComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/error-stepper/error-stepper.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/error-stepper/error-stepper.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper linear #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" errorMessage=\"Name is required.\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" errorMessage=\"Address is required.\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./src/assets/examples/material/error-stepper/error-stepper.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/error-stepper/error-stepper.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Vycm9yLXN0ZXBwZXIvZXJyb3Itc3RlcHBlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/error-stepper/error-stepper.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/error-stepper/error-stepper.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ErrorStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStepperComponent", function() { return ErrorStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorStepperComponent = /** @class */ (function () {
    function ErrorStepperComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ErrorStepperComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ErrorStepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-stepper',
            template: __webpack_require__(/*! ./error-stepper.component.html */ "./src/assets/examples/material/error-stepper/error-stepper.component.html"),
            providers: [{
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"], useValue: { showError: true }
                }],
            styles: [__webpack_require__(/*! ./error-stepper.component.scss */ "./src/assets/examples/material/error-stepper/error-stepper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ErrorStepperComponent);
    return ErrorStepperComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/escape-backdrop-sidenav/escape-backdrop-sidenav.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/examples/material/escape-backdrop-sidenav/escape-backdrop-sidenav.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\">\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\n    <p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.open()\">Open</button></p>\n    <p>Closed due to: {{reason}}</p>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/assets/examples/material/escape-backdrop-sidenav/escape-backdrop-sidenav.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/examples/material/escape-backdrop-sidenav/escape-backdrop-sidenav.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2VzY2FwZS1iYWNrZHJvcC1zaWRlbmF2L2VzY2FwZS1iYWNrZHJvcC1zaWRlbmF2LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/escape-backdrop-sidenav/escape-backdrop-sidenav.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/assets/examples/material/escape-backdrop-sidenav/escape-backdrop-sidenav.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EscapeBackdropSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapeBackdropSidenavComponent", function() { return EscapeBackdropSidenavComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EscapeBackdropSidenavComponent = /** @class */ (function () {
    function EscapeBackdropSidenavComponent() {
        this.reason = '';
    }
    EscapeBackdropSidenavComponent.prototype.ngOnInit = function () {
    };
    EscapeBackdropSidenavComponent.prototype.close = function (reason) {
        this.reason = reason;
        this.sidenav.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenav"])
    ], EscapeBackdropSidenavComponent.prototype, "sidenav", void 0);
    EscapeBackdropSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-escape-backdrop-sidenav',
            template: __webpack_require__(/*! ./escape-backdrop-sidenav.component.html */ "./src/assets/examples/material/escape-backdrop-sidenav/escape-backdrop-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./escape-backdrop-sidenav.component.scss */ "./src/assets/examples/material/escape-backdrop-sidenav/escape-backdrop-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EscapeBackdropSidenavComponent);
    return EscapeBackdropSidenavComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/event-datepicker/event-datepicker.component.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/event-datepicker/event-datepicker.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Input & change events\"\n         (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n\n<div class=\"example-events\">\n  <div *ngFor=\"let e of events\">{{e}}</div>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/event-datepicker/event-datepicker.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/event-datepicker/event-datepicker.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-events {\n  width: 400px;\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9ldmVudC1kYXRlcGlja2VyL2V2ZW50LWRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9ldmVudC1kYXRlcGlja2VyL2V2ZW50LWRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1ldmVudHMge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/event-datepicker/event-datepicker.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/event-datepicker/event-datepicker.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EventDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDatepickerComponent", function() { return EventDatepickerComponent; });
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

var EventDatepickerComponent = /** @class */ (function () {
    function EventDatepickerComponent() {
        this.events = [];
    }
    EventDatepickerComponent.prototype.ngOnInit = function () {
    };
    EventDatepickerComponent.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    EventDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-datepicker',
            template: __webpack_require__(/*! ./event-datepicker.component.html */ "./src/assets/examples/material/event-datepicker/event-datepicker.component.html"),
            styles: [__webpack_require__(/*! ./event-datepicker.component.scss */ "./src/assets/examples/material/event-datepicker/event-datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventDatepickerComponent);
    return EventDatepickerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/feature-select/feature-select.component.html":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/feature-select/feature-select.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>mat select</h4>\n<mat-form-field>\n  <mat-label>Favorite animal</mat-label>\n  <mat-select [formControl]=\"animalControl\" required>\n    <mat-option>--</mat-option>\n    <mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\n      {{animal.name}}\n    </mat-option>\n  </mat-select>\n  <mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\n  <mat-hint>{{animalControl.value?.sound}}</mat-hint>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car (required)</mat-label>\n  <select matNativeControl required [formControl]=\"selectFormControl\">\n    <option label=\"--select something --\"></option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n  <mat-error *ngIf=\"selectFormControl.hasError('required')\">\n    This field is required\n  </mat-error>\n  <mat-hint>You can pick up your favorite car here</mat-hint>\n</mat-form-field>\n\n"

/***/ }),

/***/ "./src/assets/examples/material/feature-select/feature-select.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/feature-select/feature-select.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2ZlYXR1cmUtc2VsZWN0L2ZlYXR1cmUtc2VsZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/feature-select/feature-select.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/feature-select/feature-select.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FeatureSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureSelectComponent", function() { return FeatureSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeatureSelectComponent = /** @class */ (function () {
    function FeatureSelectComponent() {
        this.animalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
    FeatureSelectComponent.prototype.ngOnInit = function () {
    };
    FeatureSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature-select',
            template: __webpack_require__(/*! ./feature-select.component.html */ "./src/assets/examples/material/feature-select/feature-select.component.html"),
            styles: [__webpack_require__(/*! ./feature-select.component.scss */ "./src/assets/examples/material/feature-select/feature-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureSelectComponent);
    return FeatureSelectComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/filter-autocomplete/filter-autocomplete.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/filter-autocomplete/filter-autocomplete.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/filter-autocomplete/filter-autocomplete.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/filter-autocomplete/filter-autocomplete.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9maWx0ZXItYXV0b2NvbXBsZXRlL2ZpbHRlci1hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2ZpbHRlci1hdXRvY29tcGxldGUvZmlsdGVyLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/filter-autocomplete/filter-autocomplete.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/filter-autocomplete/filter-autocomplete.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FilterAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterAutocompleteComponent", function() { return FilterAutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterAutocompleteComponent = /** @class */ (function () {
    function FilterAutocompleteComponent() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
    }
    FilterAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return _this._filter(value); }));
    };
    FilterAutocompleteComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    FilterAutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-autocomplete',
            template: __webpack_require__(/*! ./filter-autocomplete.component.html */ "./src/assets/examples/material/filter-autocomplete/filter-autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./filter-autocomplete.component.scss */ "./src/assets/examples/material/filter-autocomplete/filter-autocomplete.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterAutocompleteComponent);
    return FilterAutocompleteComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/filter-datepicker/filter-datepicker.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/filter-datepicker/filter-datepicker.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/filter-datepicker/filter-datepicker.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/filter-datepicker/filter-datepicker.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2ZpbHRlci1kYXRlcGlja2VyL2ZpbHRlci1kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/filter-datepicker/filter-datepicker.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/filter-datepicker/filter-datepicker.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FilterDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDatepickerComponent", function() { return FilterDatepickerComponent; });
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

var FilterDatepickerComponent = /** @class */ (function () {
    function FilterDatepickerComponent() {
        this.myFilter = function (d) {
            var day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    FilterDatepickerComponent.prototype.ngOnInit = function () {
    };
    FilterDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-datepicker',
            template: __webpack_require__(/*! ./filter-datepicker.component.html */ "./src/assets/examples/material/filter-datepicker/filter-datepicker.component.html"),
            styles: [__webpack_require__(/*! ./filter-datepicker.component.scss */ "./src/assets/examples/material/filter-datepicker/filter-datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterDatepickerComponent);
    return FilterDatepickerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/filter-table/filter-table.component.html":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/filter-table/filter-table.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/assets/examples/material/filter-table/filter-table.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/filter-table/filter-table.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\ntable {\n  width: 100%; }\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9maWx0ZXItdGFibGUvZmlsdGVyLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNJLFdBQVcsRUFBQTtBQUdiO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2ZpbHRlci10YWJsZS9maWx0ZXItdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/filter-table/filter-table.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/filter-table/filter-table.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FilterTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTableComponent", function() { return FilterTableComponent; });
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


var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var FilterTableComponent = /** @class */ (function () {
    function FilterTableComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    FilterTableComponent.prototype.ngOnInit = function () {
    };
    FilterTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    FilterTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-table',
            template: __webpack_require__(/*! ./filter-table.component.html */ "./src/assets/examples/material/filter-table/filter-table.component.html"),
            styles: [__webpack_require__(/*! ./filter-table.component.scss */ "./src/assets/examples/material/filter-table/filter-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterTableComponent);
    return FilterTableComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/fixed-sidenav/fixed-sidenav.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/fixed-sidenav/fixed-sidenav.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n  <mat-toolbar class=\"example-header\" style=\"display: none;\">Header</mat-toolbar>\n\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav\n      #sidenav\n      mode=\"side\"\n      opened\n      class=\"example-sidenav\"\n      [fixedInViewport]=\"options.value.fixed\"\n      [fixedTopGap]=\"options.value.top\"\n      [fixedBottomGap]=\"options.value.bottom\"\n    >\n      {{ options.value.fixed ? \"Fixed\" : \"Non-fixed\" }} Sidenav\n    </mat-sidenav>\n\n    <mat-sidenav-content [formGroup]=\"options\">\n      <p><mat-checkbox formControlName=\"fixed\">Fixed</mat-checkbox></p>\n      <p>\n        <mat-form-field>\n          <input\n            matInput\n            type=\"number\"\n            formControlName=\"top\"\n            placeholder=\"Top gap\"\n          />\n        </mat-form-field>\n      </p>\n      <p>\n        <mat-form-field>\n          <input\n            matInput\n            type=\"number\"\n            formControlName=\"bottom\"\n            placeholder=\"Bottom gap\"\n          />\n        </mat-form-field>\n      </p>\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n  <mat-toolbar class=\"example-footer\" style=\"display: none;\">Footer</mat-toolbar>\n</ng-container>\n"

/***/ }),

/***/ "./src/assets/examples/material/fixed-sidenav/fixed-sidenav.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/fixed-sidenav/fixed-sidenav.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0; }\n\n.example-sidenav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5); }\n\n.example-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n.example-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9maXhlZC1zaWRlbmF2L2ZpeGVkLXNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUSxFQUFBOztBQUdWO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVEsRUFBQTs7QUFHVjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2ZpeGVkLXNpZGVuYXYvZml4ZWQtc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjBweDtcbiAgICBib3R0b206IDYwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2lkZW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/fixed-sidenav/fixed-sidenav.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/fixed-sidenav/fixed-sidenav.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FixedSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSidenavComponent", function() { return FixedSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FixedSidenavComponent = /** @class */ (function () {
    function FixedSidenavComponent(fb) {
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0
        });
    }
    FixedSidenavComponent.prototype.ngOnInit = function () {
    };
    FixedSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fixed-sidenav',
            template: __webpack_require__(/*! ./fixed-sidenav.component.html */ "./src/assets/examples/material/fixed-sidenav/fixed-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./fixed-sidenav.component.scss */ "./src/assets/examples/material/fixed-sidenav/fixed-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FixedSidenavComponent);
    return FixedSidenavComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/flat-tree/flat-tree.component.html":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/flat-tree/flat-tree.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <!-- This is the tree node template for leaf nodes -->\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n      <!-- use a disabled button to provide padding for tree leaf -->\n      <button mat-icon-button disabled></button>\n      {{node.name}}\n    </mat-tree-node>\n    <!-- This is the tree node template for expandable nodes -->\n    <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n      <button mat-icon-button matTreeNodeToggle\n              [attr.aria-label]=\"'toggle ' + node.name\">\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      {{node.name}}\n    </mat-tree-node>\n  </mat-tree>\n  "

/***/ }),

/***/ "./src/assets/examples/material/flat-tree/flat-tree.component.scss":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/flat-tree/flat-tree.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2ZsYXQtdHJlZS9mbGF0LXRyZWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/flat-tree/flat-tree.component.ts":
/*!***********************************************************************!*\
  !*** ./src/assets/examples/material/flat-tree/flat-tree.component.ts ***!
  \***********************************************************************/
/*! exports provided: FlatTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatTreeComponent", function() { return FlatTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TREE_DATA = [
    {
        name: 'Fruit',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussel sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
];
var FlatTreeComponent = /** @class */ (function () {
    function FlatTreeComponent() {
        this.transformer = function (node, level) {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](function (node) { return node.level; }, function (node) { return node.expandable; });
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.hasChild = function (_, node) { return node.expandable; };
        this.dataSource.data = TREE_DATA;
    }
    FlatTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flat-tree',
            template: __webpack_require__(/*! ./flat-tree.component.html */ "./src/assets/examples/material/flat-tree/flat-tree.component.html"),
            styles: [__webpack_require__(/*! ./flat-tree.component.scss */ "./src/assets/examples/material/flat-tree/flat-tree.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FlatTreeComponent);
    return FlatTreeComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/footer-table/footer-table.component.html":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/footer-table/footer-table.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\n  <!-- Item Column -->\n  <ng-container matColumnDef=\"item\">\n    <th mat-header-cell *matHeaderCellDef> Item </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n    <td mat-footer-cell *matFooterCellDef> Total </td>\n  </ng-container>\n\n  <!-- Cost Column -->\n  <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/assets/examples/material/footer-table/footer-table.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/footer-table/footer-table.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\ntr.mat-footer-row {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9mb290ZXItdGFibGUvZm9vdGVyLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUdiO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9mb290ZXItdGFibGUvZm9vdGVyLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0ci5tYXQtZm9vdGVyLXJvdyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/footer-table/footer-table.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/footer-table/footer-table.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FooterTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterTableComponent", function() { return FooterTableComponent; });
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

var FooterTableComponent = /** @class */ (function () {
    function FooterTableComponent() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    FooterTableComponent.prototype.getTotalCost = function () {
        return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    FooterTableComponent.prototype.ngOnInit = function () {
    };
    FooterTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-table',
            template: __webpack_require__(/*! ./footer-table.component.html */ "./src/assets/examples/material/footer-table/footer-table.component.html"),
            styles: [__webpack_require__(/*! ./footer-table.component.scss */ "./src/assets/examples/material/footer-table/footer-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterTableComponent);
    return FooterTableComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/form-input/form-input.component.html":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/form-input/form-input.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n  </mat-form-field>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"First name\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\n    </mat-form-field></td>\n  </tr></table>\n\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address 2\"></textarea>\n    </mat-form-field>\n  </p>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"City\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"State\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/form-input/form-input.component.scss":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/form-input/form-input.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\ntd {\n  padding-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWlucHV0L2Zvcm0taW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1pbnB1dC9mb3JtLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdGQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/form-input/form-input.component.ts":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/form-input/form-input.component.ts ***!
  \*************************************************************************/
/*! exports provided: FormInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputComponent", function() { return FormInputComponent; });
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

var FormInputComponent = /** @class */ (function () {
    function FormInputComponent() {
    }
    FormInputComponent.prototype.ngOnInit = function () {
    };
    FormInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-input',
            template: __webpack_require__(/*! ./form-input.component.html */ "./src/assets/examples/material/form-input/form-input.component.html"),
            styles: [__webpack_require__(/*! ./form-input.component.scss */ "./src/assets/examples/material/form-input/form-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormInputComponent);
    return FormInputComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/form-select/form-select.component.html":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/form-select/form-select.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <h4>mat-select</h4>\n  <mat-form-field>\n    <mat-label>Favorite food</mat-label>\n    <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\n      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n        {{food.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <p> Selected food: {{selectedValue}} </p>\n  <h4>native html select</h4>\n  <mat-form-field>\n    <mat-label>Favorite car</mat-label>\n    <select matNativeControl [(ngModel)]=\"selectedCar\" name=\"car\">\n      <option value=\"\" selected></option>\n      <option *ngFor=\"let car of cars\" [value]=\"car.value\">\n        {{car.viewValue}}\n      </option>\n    </select>\n  </mat-form-field>\n  <p> Selected car: {{selectedCar}} </p>\n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/form-select/form-select.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/form-select/form-select.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2Zvcm0tc2VsZWN0L2Zvcm0tc2VsZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/form-select/form-select.component.ts":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/form-select/form-select.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSelectComponent", function() { return FormSelectComponent; });
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

var FormSelectComponent = /** @class */ (function () {
    function FormSelectComponent() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' }
        ];
    }
    FormSelectComponent.prototype.ngOnInit = function () {
    };
    FormSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-select',
            template: __webpack_require__(/*! ./form-select.component.html */ "./src/assets/examples/material/form-select/form-select.component.html"),
            styles: [__webpack_require__(/*! ./form-select.component.scss */ "./src/assets/examples/material/form-select/form-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormSelectComponent);
    return FormSelectComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/highlight-first-autocomplete/highlight-first-autocomplete.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/assets/examples/material/highlight-first-autocomplete/highlight-first-autocomplete.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/highlight-first-autocomplete/highlight-first-autocomplete.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/assets/examples/material/highlight-first-autocomplete/highlight-first-autocomplete.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9oaWdobGlnaHQtZmlyc3QtYXV0b2NvbXBsZXRlL2hpZ2hsaWdodC1maXJzdC1hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2hpZ2hsaWdodC1maXJzdC1hdXRvY29tcGxldGUvaGlnaGxpZ2h0LWZpcnN0LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/highlight-first-autocomplete/highlight-first-autocomplete.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/examples/material/highlight-first-autocomplete/highlight-first-autocomplete.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: HighlightFirstAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightFirstAutocompleteComponent", function() { return HighlightFirstAutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HighlightFirstAutocompleteComponent = /** @class */ (function () {
    function HighlightFirstAutocompleteComponent() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
    }
    HighlightFirstAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return _this._filter(value); }));
    };
    HighlightFirstAutocompleteComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
    };
    HighlightFirstAutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-highlight-first-autocomplete',
            template: __webpack_require__(/*! ./highlight-first-autocomplete.component.html */ "./src/assets/examples/material/highlight-first-autocomplete/highlight-first-autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./highlight-first-autocomplete.component.scss */ "./src/assets/examples/material/highlight-first-autocomplete/highlight-first-autocomplete.component.scss")]
        })
    ], HighlightFirstAutocompleteComponent);
    return HighlightFirstAutocompleteComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/hints-form-field/hints-form-field.component.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/hints-form-field/hints-form-field.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\n    <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select me\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/hints-form-field/hints-form-field.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/hints-form-field/hints-form-field.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9oaW50cy1mb3JtLWZpZWxkL2hpbnRzLWZvcm0tZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvaGludHMtZm9ybS1maWVsZC9oaW50cy1mb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/hints-form-field/hints-form-field.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/hints-form-field/hints-form-field.component.ts ***!
  \*************************************************************************************/
/*! exports provided: HintsFormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintsFormFieldComponent", function() { return HintsFormFieldComponent; });
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

var HintsFormFieldComponent = /** @class */ (function () {
    function HintsFormFieldComponent() {
    }
    HintsFormFieldComponent.prototype.ngOnInit = function () {
    };
    HintsFormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hints-form-field',
            template: __webpack_require__(/*! ./hints-form-field.component.html */ "./src/assets/examples/material/hints-form-field/hints-form-field.component.html"),
            styles: [__webpack_require__(/*! ./hints-form-field.component.scss */ "./src/assets/examples/material/hints-form-field/hints-form-field.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HintsFormFieldComponent);
    return HintsFormFieldComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/hints-input/hints-input.component.html":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/hints-input/hints-input.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput #message maxlength=\"256\" placeholder=\"Message\">\n    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n  </mat-form-field>\n  \n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/hints-input/hints-input.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/hints-input/hints-input.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9oaW50cy1pbnB1dC9oaW50cy1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvaGludHMtaW5wdXQvaGludHMtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/hints-input/hints-input.component.ts":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/hints-input/hints-input.component.ts ***!
  \***************************************************************************/
/*! exports provided: HintsInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintsInputComponent", function() { return HintsInputComponent; });
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

var HintsInputComponent = /** @class */ (function () {
    function HintsInputComponent() {
    }
    HintsInputComponent.prototype.ngOnInit = function () {
    };
    HintsInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hints-input',
            template: __webpack_require__(/*! ./hints-input.component.html */ "./src/assets/examples/material/hints-input/hints-input.component.html"),
            styles: [__webpack_require__(/*! ./hints-input.component.scss */ "./src/assets/examples/material/hints-input/hints-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HintsInputComponent);
    return HintsInputComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/icon-menu/icon-menu.component.html":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/icon-menu/icon-menu.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voice mail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/assets/examples/material/icon-menu/icon-menu.component.scss":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/icon-menu/icon-menu.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2ljb24tbWVudS9pY29uLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/icon-menu/icon-menu.component.ts":
/*!***********************************************************************!*\
  !*** ./src/assets/examples/material/icon-menu/icon-menu.component.ts ***!
  \***********************************************************************/
/*! exports provided: IconMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconMenuComponent", function() { return IconMenuComponent; });
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

var IconMenuComponent = /** @class */ (function () {
    function IconMenuComponent() {
    }
    IconMenuComponent.prototype.ngOnInit = function () {
    };
    IconMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icon-menu',
            template: __webpack_require__(/*! ./icon-menu.component.html */ "./src/assets/examples/material/icon-menu/icon-menu.component.html"),
            styles: [__webpack_require__(/*! ./icon-menu.component.scss */ "./src/assets/examples/material/icon-menu/icon-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IconMenuComponent);
    return IconMenuComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/indeterminate-bar/indeterminate-bar.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/indeterminate-bar/indeterminate-bar.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n<!-- mode can be query -->"

/***/ }),

/***/ "./src/assets/examples/material/indeterminate-bar/indeterminate-bar.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/indeterminate-bar/indeterminate-bar.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL2luZGV0ZXJtaW5hdGUtYmFyL2luZGV0ZXJtaW5hdGUtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/indeterminate-bar/indeterminate-bar.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/indeterminate-bar/indeterminate-bar.component.ts ***!
  \***************************************************************************************/
/*! exports provided: IndeterminateBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndeterminateBarComponent", function() { return IndeterminateBarComponent; });
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

var IndeterminateBarComponent = /** @class */ (function () {
    function IndeterminateBarComponent() {
    }
    IndeterminateBarComponent.prototype.ngOnInit = function () {
    };
    IndeterminateBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-indeterminate-bar',
            template: __webpack_require__(/*! ./indeterminate-bar.component.html */ "./src/assets/examples/material/indeterminate-bar/indeterminate-bar.component.html"),
            styles: [__webpack_require__(/*! ./indeterminate-bar.component.scss */ "./src/assets/examples/material/indeterminate-bar/indeterminate-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndeterminateBarComponent);
    return IndeterminateBarComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/index.ts":
/*!***********************************************!*\
  !*** ./src/assets/examples/material/index.ts ***!
  \***********************************************/
/*! exports provided: MATERIAL_EXAMPLE_COMPONENT_MAP, MATERIAL_EXAMPLE_COMPONENTS, MATERIAL_EXAMPLE_COMPONENT_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_EXAMPLE_COMPONENT_MAP", function() { return MATERIAL_EXAMPLE_COMPONENT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_EXAMPLE_COMPONENTS", function() { return MATERIAL_EXAMPLE_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_EXAMPLE_COMPONENT_LIST", function() { return MATERIAL_EXAMPLE_COMPONENT_LIST; });
/* harmony import */ var _custom_snackbar_custom_snackbar_overview_custom_snackbar_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-snackbar/custom-snackbar-overview/custom-snackbar-overview.component */ "./src/assets/examples/material/custom-snackbar/custom-snackbar-overview/custom-snackbar-overview.component.ts");
/* harmony import */ var _custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-snackbar/custom-snackbar.component */ "./src/assets/examples/material/custom-snackbar/custom-snackbar.component.ts");
/* harmony import */ var _basic_snackbar_basic_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-snackbar/basic-snackbar.component */ "./src/assets/examples/material/basic-snackbar/basic-snackbar.component.ts");
/* harmony import */ var _scrollable_dialog_scrollable_dialog_overview_scrollable_dialog_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component */ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component.ts");
/* harmony import */ var _scrollable_dialog_scrollable_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollable-dialog/scrollable-dialog.component */ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog.component.ts");
/* harmony import */ var _data_dialog_data_dialog_overview_data_dialog_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-dialog/data-dialog-overview/data-dialog-overview.component */ "./src/assets/examples/material/data-dialog/data-dialog-overview/data-dialog-overview.component.ts");
/* harmony import */ var _basic_dialog_basic_dialog_overview_basic_dialog_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-dialog/basic-dialog-overview/basic-dialog-overview.component */ "./src/assets/examples/material/basic-dialog/basic-dialog-overview/basic-dialog-overview.component.ts");
/* harmony import */ var _basic_dialog_basic_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic-dialog/basic-dialog.component */ "./src/assets/examples/material/basic-dialog/basic-dialog.component.ts");
/* harmony import */ var _bottom_sheet_bottom_sheet_overview_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bottom-sheet/bottom-sheet-overview/bottom-sheet-overview.component */ "./src/assets/examples/material/bottom-sheet/bottom-sheet-overview/bottom-sheet-overview.component.ts");
/* harmony import */ var _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bottom-sheet/bottom-sheet.component */ "./src/assets/examples/material/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var _footer_table_footer_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer-table/footer-table.component */ "./src/assets/examples/material/footer-table/footer-table.component.ts");
/* harmony import */ var _pagination_table_pagination_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagination-table/pagination-table.component */ "./src/assets/examples/material/pagination-table/pagination-table.component.ts");
/* harmony import */ var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basic-table/basic-table.component */ "./src/assets/examples/material/basic-table/basic-table.component.ts");
/* harmony import */ var _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./table-sorting/table-sorting.component */ "./src/assets/examples/material/table-sorting/table-sorting.component.ts");
/* harmony import */ var _basic_sort_header_basic_sort_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./basic-sort-header/basic-sort-header.component */ "./src/assets/examples/material/basic-sort-header/basic-sort-header.component.ts");
/* harmony import */ var _custom_paginator_custom_paginator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./custom-paginator/custom-paginator.component */ "./src/assets/examples/material/custom-paginator/custom-paginator.component.ts");
/* harmony import */ var _basic_paginator_basic_paginator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./basic-paginator/basic-paginator.component */ "./src/assets/examples/material/basic-paginator/basic-paginator.component.ts");
/* harmony import */ var _auto_hide_tooltip_auto_hide_tooltip_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auto-hide-tooltip/auto-hide-tooltip.component */ "./src/assets/examples/material/auto-hide-tooltip/auto-hide-tooltip.component.ts");
/* harmony import */ var _custom_position_tooltip_custom_position_tooltip_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./custom-position-tooltip/custom-position-tooltip.component */ "./src/assets/examples/material/custom-position-tooltip/custom-position-tooltip.component.ts");
/* harmony import */ var _basic_tooltip_basic_tooltip_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./basic-tooltip/basic-tooltip.component */ "./src/assets/examples/material/basic-tooltip/basic-tooltip.component.ts");
/* harmony import */ var _custom_bar_custom_bar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./custom-bar/custom-bar.component */ "./src/assets/examples/material/custom-bar/custom-bar.component.ts");
/* harmony import */ var _basic_bar_basic_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./basic-bar/basic-bar.component */ "./src/assets/examples/material/basic-bar/basic-bar.component.ts");
/* harmony import */ var _custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./custom-spinner/custom-spinner.component */ "./src/assets/examples/material/custom-spinner/custom-spinner.component.ts");
/* harmony import */ var _basic_spinner_basic_spinner_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./basic-spinner/basic-spinner.component */ "./src/assets/examples/material/basic-spinner/basic-spinner.component.ts");
/* harmony import */ var _basic_icon_basic_icon_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./basic-icon/basic-icon.component */ "./src/assets/examples/material/basic-icon/basic-icon.component.ts");
/* harmony import */ var _input_chip_input_chip_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./input-chip/input-chip.component */ "./src/assets/examples/material/input-chip/input-chip.component.ts");
/* harmony import */ var _autocomplete_chip_autocomplete_chip_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./autocomplete-chip/autocomplete-chip.component */ "./src/assets/examples/material/autocomplete-chip/autocomplete-chip.component.ts");
/* harmony import */ var _basic_chip_basic_chip_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./basic-chip/basic-chip.component */ "./src/assets/examples/material/basic-chip/basic-chip.component.ts");
/* harmony import */ var _basic_badge_basic_badge_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./basic-badge/basic-badge.component */ "./src/assets/examples/material/basic-badge/basic-badge.component.ts");
/* harmony import */ var _basic_button_toggle_basic_button_toggle_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./basic-button-toggle/basic-button-toggle.component */ "./src/assets/examples/material/basic-button-toggle/basic-button-toggle.component.ts");
/* harmony import */ var _button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./button-toggle/button-toggle.component */ "./src/assets/examples/material/button-toggle/button-toggle.component.ts");
/* harmony import */ var _checkbox_tree_checkbox_tree_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./checkbox-tree/checkbox-tree.component */ "./src/assets/examples/material/checkbox-tree/checkbox-tree.component.ts");
/* harmony import */ var _nested_tree_nested_tree_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./nested-tree/nested-tree.component */ "./src/assets/examples/material/nested-tree/nested-tree.component.ts");
/* harmony import */ var _custom_tab_group_custom_tab_group_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./custom-tab-group/custom-tab-group.component */ "./src/assets/examples/material/custom-tab-group/custom-tab-group.component.ts");
/* harmony import */ var _animation_tab_group_animation_tab_group_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./animation-tab-group/animation-tab-group.component */ "./src/assets/examples/material/animation-tab-group/animation-tab-group.component.ts");
/* harmony import */ var _basic_tab_group_basic_tab_group_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./basic-tab-group/basic-tab-group.component */ "./src/assets/examples/material/basic-tab-group/basic-tab-group.component.ts");
/* harmony import */ var _customized_stepper_customized_stepper_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./customized-stepper/customized-stepper.component */ "./src/assets/examples/material/customized-stepper/customized-stepper.component.ts");
/* harmony import */ var _vertical_stepper_vertical_stepper_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./vertical-stepper/vertical-stepper.component */ "./src/assets/examples/material/vertical-stepper/vertical-stepper.component.ts");
/* harmony import */ var _basic_stepper_basic_stepper_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./basic-stepper/basic-stepper.component */ "./src/assets/examples/material/basic-stepper/basic-stepper.component.ts");
/* harmony import */ var _basic_grid_basic_grid_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./basic-grid/basic-grid.component */ "./src/assets/examples/material/basic-grid/basic-grid.component.ts");
/* harmony import */ var _accordin_expansion_panel_accordin_expansion_panel_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./accordin-expansion-panel/accordin-expansion-panel.component */ "./src/assets/examples/material/accordin-expansion-panel/accordin-expansion-panel.component.ts");
/* harmony import */ var _basic_divider_basic_divider_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./basic-divider/basic-divider.component */ "./src/assets/examples/material/basic-divider/basic-divider.component.ts");
/* harmony import */ var _multi_section_card_multi_section_card_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./multi-section-card/multi-section-card.component */ "./src/assets/examples/material/multi-section-card/multi-section-card.component.ts");
/* harmony import */ var _basic_card_basic_card_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./basic-card/basic-card.component */ "./src/assets/examples/material/basic-card/basic-card.component.ts");
/* harmony import */ var _basic_toolbar_basic_toolbar_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./basic-toolbar/basic-toolbar.component */ "./src/assets/examples/material/basic-toolbar/basic-toolbar.component.ts");
/* harmony import */ var _fixed_sidenav_fixed_sidenav_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./fixed-sidenav/fixed-sidenav.component */ "./src/assets/examples/material/fixed-sidenav/fixed-sidenav.component.ts");
/* harmony import */ var _autoresize_sidenav_autoresize_sidenav_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./autoresize-sidenav/autoresize-sidenav.component */ "./src/assets/examples/material/autoresize-sidenav/autoresize-sidenav.component.ts");
/* harmony import */ var _escape_backdrop_sidenav_escape_backdrop_sidenav_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./escape-backdrop-sidenav/escape-backdrop-sidenav.component */ "./src/assets/examples/material/escape-backdrop-sidenav/escape-backdrop-sidenav.component.ts");
/* harmony import */ var _configurable_sidenav_configurable_sidenav_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./configurable-sidenav/configurable-sidenav.component */ "./src/assets/examples/material/configurable-sidenav/configurable-sidenav.component.ts");
/* harmony import */ var _open_close_sidenav_open_close_sidenav_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./open-close-sidenav/open-close-sidenav.component */ "./src/assets/examples/material/open-close-sidenav/open-close-sidenav.component.ts");
/* harmony import */ var _two_sidenav_two_sidenav_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./two-sidenav/two-sidenav.component */ "./src/assets/examples/material/two-sidenav/two-sidenav.component.ts");
/* harmony import */ var _basic_sidenav_basic_sidenav_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./basic-sidenav/basic-sidenav.component */ "./src/assets/examples/material/basic-sidenav/basic-sidenav.component.ts");
/* harmony import */ var _icon_menu_icon_menu_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./icon-menu/icon-menu.component */ "./src/assets/examples/material/icon-menu/icon-menu.component.ts");
/* harmony import */ var _basic_menu_basic_menu_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./basic-menu/basic-menu.component */ "./src/assets/examples/material/basic-menu/basic-menu.component.ts");
/* harmony import */ var _configurable_toggle_configurable_toggle_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./configurable-toggle/configurable-toggle.component */ "./src/assets/examples/material/configurable-toggle/configurable-toggle.component.ts");
/* harmony import */ var _basic_toggle_basic_toggle_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./basic-toggle/basic-toggle.component */ "./src/assets/examples/material/basic-toggle/basic-toggle.component.ts");
/* harmony import */ var _basic_slider_basic_slider_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./basic-slider/basic-slider.component */ "./src/assets/examples/material/basic-slider/basic-slider.component.ts");
/* harmony import */ var _error_select_error_select_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./error-select/error-select.component */ "./src/assets/examples/material/error-select/error-select.component.ts");
/* harmony import */ var _rippleless_select_rippleless_select_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./rippleless-select/rippleless-select.component */ "./src/assets/examples/material/rippleless-select/rippleless-select.component.ts");
/* harmony import */ var _reset_select_reset_select_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./reset-select/reset-select.component */ "./src/assets/examples/material/reset-select/reset-select.component.ts");
/* harmony import */ var _disabled_select_disabled_select_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./disabled-select/disabled-select.component */ "./src/assets/examples/material/disabled-select/disabled-select.component.ts");
/* harmony import */ var _feature_select_feature_select_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./feature-select/feature-select.component */ "./src/assets/examples/material/feature-select/feature-select.component.ts");
/* harmony import */ var _form_select_form_select_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./form-select/form-select.component */ "./src/assets/examples/material/form-select/form-select.component.ts");
/* harmony import */ var _basic_select_basic_select_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./basic-select/basic-select.component */ "./src/assets/examples/material/basic-select/basic-select.component.ts");
/* harmony import */ var _basic_radio_basic_radio_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./basic-radio/basic-radio.component */ "./src/assets/examples/material/basic-radio/basic-radio.component.ts");
/* harmony import */ var _suffix_prefix_input_suffix_prefix_input_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./suffix-prefix-input/suffix-prefix-input.component */ "./src/assets/examples/material/suffix-prefix-input/suffix-prefix-input.component.ts");
/* harmony import */ var _hints_input_hints_input_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./hints-input/hints-input.component */ "./src/assets/examples/material/hints-input/hints-input.component.ts");
/* harmony import */ var _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./form-input/form-input.component */ "./src/assets/examples/material/form-input/form-input.component.ts");
/* harmony import */ var _clear_button_input_clear_button_input_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./clear-button-input/clear-button-input.component */ "./src/assets/examples/material/clear-button-input/clear-button-input.component.ts");
/* harmony import */ var _auto_resizing_texarea_auto_resizing_texarea_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./auto-resizing-texarea/auto-resizing-texarea.component */ "./src/assets/examples/material/auto-resizing-texarea/auto-resizing-texarea.component.ts");
/* harmony import */ var _error_input_error_input_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./error-input/error-input.component */ "./src/assets/examples/material/error-input/error-input.component.ts");
/* harmony import */ var _basic_input_basic_input_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./basic-input/basic-input.component */ "./src/assets/examples/material/basic-input/basic-input.component.ts");
/* harmony import */ var _hints_form_field_hints_form_field_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./hints-form-field/hints-form-field.component */ "./src/assets/examples/material/hints-form-field/hints-form-field.component.ts");
/* harmony import */ var _appearance_form_field_appearance_form_field_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./appearance-form-field/appearance-form-field.component */ "./src/assets/examples/material/appearance-form-field/appearance-form-field.component.ts");
/* harmony import */ var _custom_datepicker_custom_datepicker_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./custom-datepicker/custom-datepicker.component */ "./src/assets/examples/material/custom-datepicker/custom-datepicker.component.ts");
/* harmony import */ var _different_locale_datepicker_different_locale_datepicker_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./different-locale-datepicker/different-locale-datepicker.component */ "./src/assets/examples/material/different-locale-datepicker/different-locale-datepicker.component.ts");
/* harmony import */ var _disabled_datepicker_disabled_datepicker_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./disabled-datepicker/disabled-datepicker.component */ "./src/assets/examples/material/disabled-datepicker/disabled-datepicker.component.ts");
/* harmony import */ var _event_datepicker_event_datepicker_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./event-datepicker/event-datepicker.component */ "./src/assets/examples/material/event-datepicker/event-datepicker.component.ts");
/* harmony import */ var _filter_datepicker_filter_datepicker_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./filter-datepicker/filter-datepicker.component */ "./src/assets/examples/material/filter-datepicker/filter-datepicker.component.ts");
/* harmony import */ var _min_max_datepicker_min_max_datepicker_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./min-max-datepicker/min-max-datepicker.component */ "./src/assets/examples/material/min-max-datepicker/min-max-datepicker.component.ts");
/* harmony import */ var _basic_datepicker_basic_datepicker_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./basic-datepicker/basic-datepicker.component */ "./src/assets/examples/material/basic-datepicker/basic-datepicker.component.ts");
/* harmony import */ var _configurable_checkbox_configurable_checkbox_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./configurable-checkbox/configurable-checkbox.component */ "./src/assets/examples/material/configurable-checkbox/configurable-checkbox.component.ts");
/* harmony import */ var _basic_checkbox_basic_checkbox_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./basic-checkbox/basic-checkbox.component */ "./src/assets/examples/material/basic-checkbox/basic-checkbox.component.ts");
/* harmony import */ var _highlight_first_autocomplete_highlight_first_autocomplete_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./highlight-first-autocomplete/highlight-first-autocomplete.component */ "./src/assets/examples/material/highlight-first-autocomplete/highlight-first-autocomplete.component.ts");
/* harmony import */ var _filter_autocomplete_filter_autocomplete_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./filter-autocomplete/filter-autocomplete.component */ "./src/assets/examples/material/filter-autocomplete/filter-autocomplete.component.ts");
/* harmony import */ var _button_examples_button_examples_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./button-examples/button-examples.component */ "./src/assets/examples/material/button-examples/button-examples.component.ts");
/* harmony import */ var _autocomplete_overview_autocomplete_overview_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./autocomplete-overview/autocomplete-overview.component */ "./src/assets/examples/material/autocomplete-overview/autocomplete-overview.component.ts");
/* harmony import */ var _simple_autocomplete_simple_autocomplete_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./simple-autocomplete/simple-autocomplete.component */ "./src/assets/examples/material/simple-autocomplete/simple-autocomplete.component.ts");
/* harmony import */ var _display_value_autocomplete_display_value_autocomplete_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./display-value-autocomplete/display-value-autocomplete.component */ "./src/assets/examples/material/display-value-autocomplete/display-value-autocomplete.component.ts");
/* harmony import */ var _option_group_autocomplete_option_group_autocomplete_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./option-group-autocomplete/option-group-autocomplete.component */ "./src/assets/examples/material/option-group-autocomplete/option-group-autocomplete.component.ts");
/* harmony import */ var _start_date_datepicker_start_date_datepicker_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./start-date-datepicker/start-date-datepicker.component */ "./src/assets/examples/material/start-date-datepicker/start-date-datepicker.component.ts");
/* harmony import */ var _selected_value_datepicker_selected_value_datepicker_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./selected-value-datepicker/selected-value-datepicker.component */ "./src/assets/examples/material/selected-value-datepicker/selected-value-datepicker.component.ts");
/* harmony import */ var _touch_datepicker_touch_datepicker_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./touch-datepicker/touch-datepicker.component */ "./src/assets/examples/material/touch-datepicker/touch-datepicker.component.ts");
/* harmony import */ var _open_method_datepicker_open_method_datepicker_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./open-method-datepicker/open-method-datepicker.component */ "./src/assets/examples/material/open-method-datepicker/open-method-datepicker.component.ts");
/* harmony import */ var _moment_js_datepicker_moment_js_datepicker_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./moment-js-datepicker/moment-js-datepicker.component */ "./src/assets/examples/material/moment-js-datepicker/moment-js-datepicker.component.ts");
/* harmony import */ var _simple_form_field_simple_form_field_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./simple-form-field/simple-form-field.component */ "./src/assets/examples/material/simple-form-field/simple-form-field.component.ts");
/* harmony import */ var _label_form_field_label_form_field_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./label-form-field/label-form-field.component */ "./src/assets/examples/material/label-form-field/label-form-field.component.ts");
/* harmony import */ var _error_form_field_error_form_field_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./error-form-field/error-form-field.component */ "./src/assets/examples/material/error-form-field/error-form-field.component.ts");
/* harmony import */ var _prefix_suffix_form_field_prefix_suffix_form_field_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./prefix-suffix-form-field/prefix-suffix-form-field.component */ "./src/assets/examples/material/prefix-suffix-form-field/prefix-suffix-form-field.component.ts");
/* harmony import */ var _theming_form_field_theming_form_field_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./theming-form-field/theming-form-field.component */ "./src/assets/examples/material/theming-form-field/theming-form-field.component.ts");
/* harmony import */ var _error_message_input_error_message_input_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./error-message-input/error-message-input.component */ "./src/assets/examples/material/error-message-input/error-message-input.component.ts");
/* harmony import */ var _ngmodel_radio_ngmodel_radio_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./ngmodel-radio/ngmodel-radio.component */ "./src/assets/examples/material/ngmodel-radio/ngmodel-radio.component.ts");
/* harmony import */ var _two_way_binding_select_two_way_binding_select_component__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./two-way-binding-select/two-way-binding-select.component */ "./src/assets/examples/material/two-way-binding-select/two-way-binding-select.component.ts");
/* harmony import */ var _option_group_select_option_group_select_component__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./option-group-select/option-group-select.component */ "./src/assets/examples/material/option-group-select/option-group-select.component.ts");
/* harmony import */ var _multiple_select_multiple_select_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./multiple-select/multiple-select.component */ "./src/assets/examples/material/multiple-select/multiple-select.component.ts");
/* harmony import */ var _trigger_select_trigger_select_component__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./trigger-select/trigger-select.component */ "./src/assets/examples/material/trigger-select/trigger-select.component.ts");
/* harmony import */ var _custom_panel_select_custom_panel_select_component__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./custom-panel-select/custom-panel-select.component */ "./src/assets/examples/material/custom-panel-select/custom-panel-select.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./slider/slider.component */ "./src/assets/examples/material/slider/slider.component.ts");
/* harmony import */ var _nested_menu_nested_menu_component__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./nested-menu/nested-menu.component */ "./src/assets/examples/material/nested-menu/nested-menu.component.ts");
/* harmony import */ var _drawer_sidenav_drawer_sidenav_component__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./drawer-sidenav/drawer-sidenav.component */ "./src/assets/examples/material/drawer-sidenav/drawer-sidenav.component.ts");
/* harmony import */ var _responsive_sidenav_responsive_sidenav_component__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./responsive-sidenav/responsive-sidenav.component */ "./src/assets/examples/material/responsive-sidenav/responsive-sidenav.component.ts");
/* harmony import */ var _multi_row_toolbar_multi_row_toolbar_component__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./multi-row-toolbar/multi-row-toolbar.component */ "./src/assets/examples/material/multi-row-toolbar/multi-row-toolbar.component.ts");
/* harmony import */ var _basic_expansion_panel_basic_expansion_panel_component__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./basic-expansion-panel/basic-expansion-panel.component */ "./src/assets/examples/material/basic-expansion-panel/basic-expansion-panel.component.ts");
/* harmony import */ var _dynamic_grid_dynamic_grid_component__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./dynamic-grid/dynamic-grid.component */ "./src/assets/examples/material/dynamic-grid/dynamic-grid.component.ts");
/* harmony import */ var _basic_list_basic_list_component__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./basic-list/basic-list.component */ "./src/assets/examples/material/basic-list/basic-list.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/assets/examples/material/section-list/section-list.component.ts");
/* harmony import */ var _error_stepper_error_stepper_component__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./error-stepper/error-stepper.component */ "./src/assets/examples/material/error-stepper/error-stepper.component.ts");
/* harmony import */ var _align_tab_group_align_tab_group_component__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./align-tab-group/align-tab-group.component */ "./src/assets/examples/material/align-tab-group/align-tab-group.component.ts");
/* harmony import */ var _dynamic_tab_group_dynamic_tab_group_component__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./dynamic-tab-group/dynamic-tab-group.component */ "./src/assets/examples/material/dynamic-tab-group/dynamic-tab-group.component.ts");
/* harmony import */ var _nav_tab_group_nav_tab_group_component__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./nav-tab-group/nav-tab-group.component */ "./src/assets/examples/material/nav-tab-group/nav-tab-group.component.ts");
/* harmony import */ var _flat_tree_flat_tree_component__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./flat-tree/flat-tree.component */ "./src/assets/examples/material/flat-tree/flat-tree.component.ts");
/* harmony import */ var _dynamic_data_tree_dynamic_data_tree_component__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./dynamic-data-tree/dynamic-data-tree.component */ "./src/assets/examples/material/dynamic-data-tree/dynamic-data-tree.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/assets/examples/material/buttons/buttons.component.ts");
/* harmony import */ var _stacked_chip_stacked_chip_component__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./stacked-chip/stacked-chip.component */ "./src/assets/examples/material/stacked-chip/stacked-chip.component.ts");
/* harmony import */ var _svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./svg-icon/svg-icon.component */ "./src/assets/examples/material/svg-icon/svg-icon.component.ts");
/* harmony import */ var _indeterminate_bar_indeterminate_bar_component__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./indeterminate-bar/indeterminate-bar.component */ "./src/assets/examples/material/indeterminate-bar/indeterminate-bar.component.ts");
/* harmony import */ var _custom_ripples_custom_ripples_component__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./custom-ripples/custom-ripples.component */ "./src/assets/examples/material/custom-ripples/custom-ripples.component.ts");
/* harmony import */ var _custom_class_tooltip_custom_class_tooltip_component__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./custom-class-tooltip/custom-class-tooltip.component */ "./src/assets/examples/material/custom-class-tooltip/custom-class-tooltip.component.ts");
/* harmony import */ var _delay_tooltip_delay_tooltip_component__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./delay-tooltip/delay-tooltip.component */ "./src/assets/examples/material/delay-tooltip/delay-tooltip.component.ts");
/* harmony import */ var _disabled_tooltip_disabled_tooltip_component__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./disabled-tooltip/disabled-tooltip.component */ "./src/assets/examples/material/disabled-tooltip/disabled-tooltip.component.ts");
/* harmony import */ var _manual_hide_tooltip_manual_hide_tooltip_component__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./manual-hide-tooltip/manual-hide-tooltip.component */ "./src/assets/examples/material/manual-hide-tooltip/manual-hide-tooltip.component.ts");
/* harmony import */ var _changing_tooltip_changing_tooltip_component__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./changing-tooltip/changing-tooltip.component */ "./src/assets/examples/material/changing-tooltip/changing-tooltip.component.ts");
/* harmony import */ var _sorting_table_sorting_table_component__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./sorting-table/sorting-table.component */ "./src/assets/examples/material/sorting-table/sorting-table.component.ts");
/* harmony import */ var _selection_table_selection_table_component__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./selection-table/selection-table.component */ "./src/assets/examples/material/selection-table/selection-table.component.ts");
/* harmony import */ var _sticky_header_table_sticky_header_table_component__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./sticky-header-table/sticky-header-table.component */ "./src/assets/examples/material/sticky-header-table/sticky-header-table.component.ts");
/* harmony import */ var _sticky_footer_table_sticky_footer_table_component__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./sticky-footer-table/sticky-footer-table.component */ "./src/assets/examples/material/sticky-footer-table/sticky-footer-table.component.ts");
/* harmony import */ var _sticky_column_table_sticky_column_table_component__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./sticky-column-table/sticky-column-table.component */ "./src/assets/examples/material/sticky-column-table/sticky-column-table.component.ts");
/* harmony import */ var _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./filter-table/filter-table.component */ "./src/assets/examples/material/filter-table/filter-table.component.ts");
/* harmony import */ var _data_dialog_data_dialog_component__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./data-dialog/data-dialog.component */ "./src/assets/examples/material/data-dialog/data-dialog.component.ts");
/* harmony import */ var _custom_loading_buttons_custom_loading_buttons_component__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./custom-loading-buttons/custom-loading-buttons.component */ "./src/assets/examples/material/custom-loading-buttons/custom-loading-buttons.component.ts");












































































































































// ng g c ../assets/examples/hints-form-field --skip-import
var MATERIAL_EXAMPLE_COMPONENT_MAP = {
    'buttons': [
        'buttons',
        'custom-loading-buttons'
    ],
    'button-toggle': [
        'basic-button-toggle',
        'button-toggle'
    ],
    'autocomplete': [
        'autocomplete-overview',
        'simple-autocomplete',
        'filter-autocomplete',
        'display-value-autocomplete',
        'highlight-first-autocomplete',
        'option-group-autocomplete'
    ],
    'checkbox': [
        'basic-checkbox',
        'configurable-checkbox'
    ],
    'datepicker': [
        'basic-datepicker',
        'start-date-datepicker',
        'selected-value-datepicker',
        'min-max-datepicker',
        'filter-datepicker',
        'event-datepicker',
        'disabled-datepicker',
        'touch-datepicker',
        'open-method-datepicker',
        'different-locale-datepicker',
        'moment-js-datepicker',
        'custom-datepicker',
    ],
    'form-field': [
        'simple-form-field',
        'label-form-field',
        'appearance-form-field',
        'hints-form-field',
        'error-form-field',
        'prefix-suffix-form-field',
        'theming-form-field',
    ],
    'input-field': [
        'basic-input',
        'auto-resizing-texarea',
        'clear-button-input',
        'error-input',
        'error-message-input',
        'form-input',
        'hints-input',
        'suffix-prefix-input',
    ],
    'radio-button': [
        'basic-radio',
        'ngmodel-radio',
    ],
    'select': [
        'basic-select',
        'two-way-binding-select',
        'form-select',
        'feature-select',
        'disabled-select',
        'reset-select',
        'option-group-select',
        'multiple-select',
        'trigger-select',
        'rippleless-select',
        'custom-panel-select',
        'error-select'
    ],
    'slider': [
        'basic-slider',
        'configurable-slider'
    ],
    'slider-toggle': [
        'basic-toggle',
        'configurable-toggle'
    ],
    'menu': [
        'basic-menu',
        'nested-menu',
        'icon-menu',
    ],
    'sidenav': [
        'basic-sidenav',
        'drawer-sidenav',
        'two-sidenav',
        'open-close-sidenav',
        'configurable-sidenav',
        'escape-backdrop-sidenav',
        'autoresize-sidenav',
        'fixed-sidenav',
        'responsive-sidenav',
    ],
    'toolbar': [
        'basic-toolbar',
        'multi-row-toolbar'
    ],
    'card': [
        'basic-card',
        'multi-section-card'
    ],
    'divider': [
        'basic-divider'
    ],
    'expansion-panel': [
        'basic-expansion-panel',
        'accordin-expansion-panel',
    ],
    'grid': [
        'basic-grid',
        'dynamic-grid'
    ],
    'list': [
        'basic-list',
        'section-list'
    ],
    'stepper': [
        'basic-stepper',
        'vertical-stepper',
        'error-stepper',
        'customized-stepper'
    ],
    'tab-group': [
        'basic-tab-group',
        'align-tab-group',
        'animation-tab-group',
        'dynamic-tab-group',
        'nav-tab-group',
        'custom-tab-group',
    ],
    'tree': [
        'flat-tree',
        'nested-tree',
        'checkbox-tree',
        'dynamic-data-tree'
    ],
    'badge': [
        'basic-badge'
    ],
    'chips': [
        'basic-chip',
        'autocomplete-chip',
        'input-chip',
        'stacked-chip'
    ],
    'icons': [
        'basic-icon',
        'svg-icon'
    ],
    'progress-spinner': [
        'basic-spinner',
        'custom-spinner'
    ],
    'progress-bar': [
        'basic-bar',
        'custom-bar',
        'indeterminate-bar'
    ],
    'ripples': [
        'custom-ripples'
    ],
    'tooltip': [
        'basic-tooltip',
        'custom-position-tooltip',
        'custom-class-tooltip',
        'delay-tooltip',
        'disabled-tooltip',
        'manual-hide-tooltip',
        'changing-tooltip',
        'auto-hide-tooltip'
    ],
    'paginator': [
        'basic-paginator',
        'custom-paginator'
    ],
    'sort-header': [
        'basic-sort-header',
        'table-sorting'
    ],
    'table': [
        'basic-table',
        'pagination-table',
        'sorting-table',
        'filter-table',
        'selection-table',
        'footer-table',
        'sticky-header-table',
        'sticky-footer-table',
        'sticky-column-table',
    ],
    'bottom-sheet': [
        'bottom-sheet'
    ],
    'dialog': [
        'basic-dialog',
        'data-dialog',
        'scrollable-dialog'
    ],
    'snackbar': [
        'basic-snackbar',
        'custom-snackbar'
    ]
};
var MATERIAL_EXAMPLE_COMPONENTS = {
    'autocomplete-overview': {
        title: 'Autocomplete overview',
        component: _autocomplete_overview_autocomplete_overview_component__WEBPACK_IMPORTED_MODULE_86__["AutocompleteOverviewComponent"]
    },
    'simple-autocomplete': {
        title: 'Simple autocomplete',
        component: _simple_autocomplete_simple_autocomplete_component__WEBPACK_IMPORTED_MODULE_87__["SimpleAutocompleteComponent"]
    },
    'filter-autocomplete': {
        title: 'Filter autocomplete',
        component: _filter_autocomplete_filter_autocomplete_component__WEBPACK_IMPORTED_MODULE_84__["FilterAutocompleteComponent"]
    },
    'display-value-autocomplete': {
        title: 'Display value autocomplete',
        component: _display_value_autocomplete_display_value_autocomplete_component__WEBPACK_IMPORTED_MODULE_88__["DisplayValueAutocompleteComponent"]
    },
    'highlight-first-autocomplete': {
        title: 'Highlight the first autocomplete option',
        component: _highlight_first_autocomplete_highlight_first_autocomplete_component__WEBPACK_IMPORTED_MODULE_83__["HighlightFirstAutocompleteComponent"]
    },
    'option-group-autocomplete': {
        title: 'Option groups autocomplete',
        component: _option_group_autocomplete_option_group_autocomplete_component__WEBPACK_IMPORTED_MODULE_89__["OptionGroupAutocompleteComponent"]
    },
    'basic-checkbox': {
        title: 'Basic checkboxes',
        component: _basic_checkbox_basic_checkbox_component__WEBPACK_IMPORTED_MODULE_82__["BasicCheckboxComponent"]
    },
    'configurable-checkbox': {
        title: 'Configurable checkboxes',
        component: _configurable_checkbox_configurable_checkbox_component__WEBPACK_IMPORTED_MODULE_81__["ConfigurableCheckboxComponent"]
    },
    'basic-datepicker': {
        title: 'Basic datepicker',
        component: _basic_datepicker_basic_datepicker_component__WEBPACK_IMPORTED_MODULE_80__["BasicDatepickerComponent"]
    },
    'start-date-datepicker': {
        title: 'Datepicker with starting date',
        component: _start_date_datepicker_start_date_datepicker_component__WEBPACK_IMPORTED_MODULE_90__["StartDateDatepickerComponent"]
    },
    'selected-value-datepicker': {
        title: 'Datepicker with selected date',
        component: _selected_value_datepicker_selected_value_datepicker_component__WEBPACK_IMPORTED_MODULE_91__["SelectedValueDatepickerComponent"]
    },
    'min-max-datepicker': {
        title: 'Datepicker with minimum and maximum date',
        component: _min_max_datepicker_min_max_datepicker_component__WEBPACK_IMPORTED_MODULE_79__["MinMaxDatepickerComponent"]
    },
    'filter-datepicker': {
        title: 'Datepicker with filtered date',
        component: _filter_datepicker_filter_datepicker_component__WEBPACK_IMPORTED_MODULE_78__["FilterDatepickerComponent"]
    },
    'event-datepicker': {
        title: 'Datepicker input and change event',
        component: _event_datepicker_event_datepicker_component__WEBPACK_IMPORTED_MODULE_77__["EventDatepickerComponent"]
    },
    'disabled-datepicker': {
        title: 'Disabled datepicker',
        component: _disabled_datepicker_disabled_datepicker_component__WEBPACK_IMPORTED_MODULE_76__["DisabledDatepickerComponent"]
    },
    'touch-datepicker': {
        title: 'Disabled with touh UI',
        component: _touch_datepicker_touch_datepicker_component__WEBPACK_IMPORTED_MODULE_92__["TouchDatepickerComponent"]
    },
    'open-method-datepicker': {
        title: 'Datepicker open method',
        component: _open_method_datepicker_open_method_datepicker_component__WEBPACK_IMPORTED_MODULE_93__["OpenMethodDatepickerComponent"]
    },
    'different-locale-datepicker': {
        title: 'Datepicker with different locale',
        component: _different_locale_datepicker_different_locale_datepicker_component__WEBPACK_IMPORTED_MODULE_75__["DifferentLocaleDatepickerComponent"]
    },
    'moment-js-datepicker': {
        title: 'Datepicker that uses Moment.js dates',
        component: _moment_js_datepicker_moment_js_datepicker_component__WEBPACK_IMPORTED_MODULE_94__["MomentJsDatepickerComponent"]
    },
    'custom-datepicker': {
        title: 'Datepicker with custom formats',
        component: _custom_datepicker_custom_datepicker_component__WEBPACK_IMPORTED_MODULE_74__["CustomDatepickerComponent"]
    },
    'simple-form-field': {
        title: 'Simple form field',
        component: _simple_form_field_simple_form_field_component__WEBPACK_IMPORTED_MODULE_95__["SimpleFormFieldComponent"]
    },
    'label-form-field': {
        title: 'Form field with label',
        component: _label_form_field_label_form_field_component__WEBPACK_IMPORTED_MODULE_96__["LabelFormFieldComponent"]
    },
    'appearance-form-field': {
        title: 'Form field appearance variants',
        component: _appearance_form_field_appearance_form_field_component__WEBPACK_IMPORTED_MODULE_73__["AppearanceFormFieldComponent"]
    },
    'hints-form-field': {
        title: 'Form field with hints',
        component: _hints_form_field_hints_form_field_component__WEBPACK_IMPORTED_MODULE_72__["HintsFormFieldComponent"]
    },
    'error-form-field': {
        title: 'Form field with error messages',
        component: _error_form_field_error_form_field_component__WEBPACK_IMPORTED_MODULE_97__["ErrorFormFieldComponent"]
    },
    'prefix-suffix-form-field': {
        title: 'Form field with prefix & suffix',
        component: _prefix_suffix_form_field_prefix_suffix_form_field_component__WEBPACK_IMPORTED_MODULE_98__["PrefixSuffixFormFieldComponent"]
    },
    'theming-form-field': {
        title: 'Form field theming',
        component: _theming_form_field_theming_form_field_component__WEBPACK_IMPORTED_MODULE_99__["ThemingFormFieldComponent"]
    },
    // 'telephone-form-field': {
    //   title: 'Form field with custom telephone number input control',
    //   component: TelephoneFormFieldComponent
    // },
    'basic-input': {
        title: 'Basic Inputs',
        component: _basic_input_basic_input_component__WEBPACK_IMPORTED_MODULE_71__["BasicInputComponent"]
    },
    'error-input': {
        title: 'Input with a custom ErrorStateMatcher',
        component: _error_input_error_input_component__WEBPACK_IMPORTED_MODULE_70__["ErrorInputComponent"]
    },
    'auto-resizing-texarea': {
        title: 'Auto-resizing textarea',
        component: _auto_resizing_texarea_auto_resizing_texarea_component__WEBPACK_IMPORTED_MODULE_69__["AutoResizingTexareaComponent"]
    },
    'clear-button-input': {
        title: 'Input with a clear button',
        component: _clear_button_input_clear_button_input_component__WEBPACK_IMPORTED_MODULE_68__["ClearButtonInputComponent"]
    },
    'error-message-input': {
        title: 'Input with error messages',
        component: _error_message_input_error_message_input_component__WEBPACK_IMPORTED_MODULE_100__["ErrorMessageInputComponent"]
    },
    'form-input': {
        title: 'Inputs in a form',
        component: _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_67__["FormInputComponent"]
    },
    'hints-input': {
        title: 'Input with hints',
        component: _hints_input_hints_input_component__WEBPACK_IMPORTED_MODULE_66__["HintsInputComponent"]
    },
    'suffix-prefix-input': {
        title: 'Inputs with prefixes and suffixes',
        component: _suffix_prefix_input_suffix_prefix_input_component__WEBPACK_IMPORTED_MODULE_65__["SuffixPrefixInputComponent"]
    },
    'basic-radio': {
        title: 'Basic radios',
        component: _basic_radio_basic_radio_component__WEBPACK_IMPORTED_MODULE_64__["BasicRadioComponent"]
    },
    'ngmodel-radio': {
        title: 'Radios with ngMode',
        component: _ngmodel_radio_ngmodel_radio_component__WEBPACK_IMPORTED_MODULE_101__["NgmodelRadioComponent"]
    },
    'basic-select': {
        title: 'Basic select',
        component: _basic_select_basic_select_component__WEBPACK_IMPORTED_MODULE_63__["BasicSelectComponent"]
    },
    'two-way-binding-select': {
        title: 'Select with 2-way value binding',
        component: _two_way_binding_select_two_way_binding_select_component__WEBPACK_IMPORTED_MODULE_102__["TwoWayBindingSelectComponent"]
    },
    'form-select': {
        title: 'Select in a form',
        component: _form_select_form_select_component__WEBPACK_IMPORTED_MODULE_62__["FormSelectComponent"]
    },
    'feature-select': {
        title: 'Select with form field features',
        component: _feature_select_feature_select_component__WEBPACK_IMPORTED_MODULE_61__["FeatureSelectComponent"]
    },
    'disabled-select': {
        title: 'Disabled select',
        component: _disabled_select_disabled_select_component__WEBPACK_IMPORTED_MODULE_60__["DisabledSelectComponent"]
    },
    'reset-select': {
        title: 'Select with reset option',
        component: _reset_select_reset_select_component__WEBPACK_IMPORTED_MODULE_59__["ResetSelectComponent"]
    },
    'option-group-select': {
        title: 'Select with option groups',
        component: _option_group_select_option_group_select_component__WEBPACK_IMPORTED_MODULE_103__["OptionGroupSelectComponent"]
    },
    'multiple-select': {
        title: 'Select with multiple selection',
        component: _multiple_select_multiple_select_component__WEBPACK_IMPORTED_MODULE_104__["MultipleSelectComponent"]
    },
    'trigger-select': {
        title: 'Select with custom trigger text',
        component: _trigger_select_trigger_select_component__WEBPACK_IMPORTED_MODULE_105__["TriggerSelectComponent"]
    },
    'rippleless-select': {
        title: 'Select with no option ripple',
        component: _rippleless_select_rippleless_select_component__WEBPACK_IMPORTED_MODULE_58__["RipplelessSelectComponent"]
    },
    'custom-panel-select': {
        title: 'Select with custom panel styling',
        component: _custom_panel_select_custom_panel_select_component__WEBPACK_IMPORTED_MODULE_106__["CustomPanelSelectComponent"]
    },
    'error-select': {
        title: 'Select with a custom ErrorStateMatcher',
        component: _error_select_error_select_component__WEBPACK_IMPORTED_MODULE_57__["ErrorSelectComponent"]
    },
    'configurable-slider': {
        title: 'Configurable slider',
        component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_107__["SliderComponent"]
    },
    'basic-slider': {
        title: 'Basic slider',
        component: _basic_slider_basic_slider_component__WEBPACK_IMPORTED_MODULE_56__["BasicSliderComponent"]
    },
    'basic-toggle': {
        title: 'Basic slide-toggle',
        component: _basic_toggle_basic_toggle_component__WEBPACK_IMPORTED_MODULE_55__["BasicToggleComponent"]
    },
    'configurable-toggle': {
        title: 'Configurable slide-toggle',
        component: _configurable_toggle_configurable_toggle_component__WEBPACK_IMPORTED_MODULE_54__["ConfigurableToggleComponent"]
    },
    'basic-menu': {
        title: 'Basic menu',
        component: _basic_menu_basic_menu_component__WEBPACK_IMPORTED_MODULE_53__["BasicMenuComponent"]
    },
    'nested-menu': {
        title: 'Nested menu',
        component: _nested_menu_nested_menu_component__WEBPACK_IMPORTED_MODULE_108__["NestedMenuComponent"]
    },
    'icon-menu': {
        title: 'Menu with icons',
        component: _icon_menu_icon_menu_component__WEBPACK_IMPORTED_MODULE_52__["IconMenuComponent"]
    },
    'basic-sidenav': {
        title: 'Basic sidenav',
        component: _basic_sidenav_basic_sidenav_component__WEBPACK_IMPORTED_MODULE_51__["BasicSidenavComponent"]
    },
    'drawer-sidenav': {
        title: 'Basic drawer',
        component: _drawer_sidenav_drawer_sidenav_component__WEBPACK_IMPORTED_MODULE_109__["DrawerSidenavComponent"]
    },
    'two-sidenav': {
        title: 'Implicit main content with two sidenavs',
        component: _two_sidenav_two_sidenav_component__WEBPACK_IMPORTED_MODULE_50__["TwoSidenavComponent"]
    },
    'open-close-sidenav': {
        title: 'Sidenav open & close behavior',
        component: _open_close_sidenav_open_close_sidenav_component__WEBPACK_IMPORTED_MODULE_49__["OpenCloseSidenavComponent"]
    },
    'configurable-sidenav': {
        title: 'Sidenav with configurable mode',
        component: _configurable_sidenav_configurable_sidenav_component__WEBPACK_IMPORTED_MODULE_48__["ConfigurableSidenavComponent"]
    },
    'escape-backdrop-sidenav': {
        title: 'Sidenav with custom escape and backdrop click behavior',
        component: _escape_backdrop_sidenav_escape_backdrop_sidenav_component__WEBPACK_IMPORTED_MODULE_47__["EscapeBackdropSidenavComponent"]
    },
    'autoresize-sidenav': {
        title: 'Autosize sidenav',
        component: _autoresize_sidenav_autoresize_sidenav_component__WEBPACK_IMPORTED_MODULE_46__["AutoresizeSidenavComponent"]
    },
    'fixed-sidenav': {
        title: 'Fixed sidenav',
        component: _fixed_sidenav_fixed_sidenav_component__WEBPACK_IMPORTED_MODULE_45__["FixedSidenavComponent"]
    },
    'responsive-sidenav': {
        title: 'Responsive sidenav',
        component: _responsive_sidenav_responsive_sidenav_component__WEBPACK_IMPORTED_MODULE_110__["ResponsiveSidenavComponent"]
    },
    'basic-toolbar': {
        title: 'Basic toolbar',
        component: _basic_toolbar_basic_toolbar_component__WEBPACK_IMPORTED_MODULE_44__["BasicToolbarComponent"]
    },
    'multi-row-toolbar': {
        title: 'Multi-row toolbar',
        component: _multi_row_toolbar_multi_row_toolbar_component__WEBPACK_IMPORTED_MODULE_111__["MultiRowToolbarComponent"]
    },
    'basic-card': {
        title: 'Basic card',
        component: _basic_card_basic_card_component__WEBPACK_IMPORTED_MODULE_43__["BasicCardComponent"]
    },
    'multi-section-card': {
        title: 'Card with multiple sections',
        component: _multi_section_card_multi_section_card_component__WEBPACK_IMPORTED_MODULE_42__["MultiSectionCardComponent"]
    },
    'basic-divider': {
        title: 'Basic divider',
        component: _basic_divider_basic_divider_component__WEBPACK_IMPORTED_MODULE_41__["BasicDividerComponent"]
    },
    'basic-expansion-panel': {
        title: 'Basic expansion panel',
        component: _basic_expansion_panel_basic_expansion_panel_component__WEBPACK_IMPORTED_MODULE_112__["BasicExpansionPanelComponent"]
    },
    'accordin-expansion-panel': {
        title: 'Expansion panel as accordion',
        component: _accordin_expansion_panel_accordin_expansion_panel_component__WEBPACK_IMPORTED_MODULE_40__["AccordinExpansionPanelComponent"]
    },
    'basic-grid': {
        title: 'Basic grid',
        component: _basic_grid_basic_grid_component__WEBPACK_IMPORTED_MODULE_39__["BasicGridComponent"]
    },
    'dynamic-grid': {
        title: 'Dynamic grid',
        component: _dynamic_grid_dynamic_grid_component__WEBPACK_IMPORTED_MODULE_113__["DynamicGridComponent"]
    },
    'basic-list': {
        title: 'Basic list',
        component: _basic_list_basic_list_component__WEBPACK_IMPORTED_MODULE_114__["BasicListComponent"]
    },
    'section-list': {
        title: 'List with sections',
        component: _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_115__["SectionListComponent"]
    },
    'basic-stepper': {
        title: 'Stepper overview',
        component: _basic_stepper_basic_stepper_component__WEBPACK_IMPORTED_MODULE_38__["BasicStepperComponent"]
    },
    'vertical-stepper': {
        title: 'Vertical stepper',
        component: _vertical_stepper_vertical_stepper_component__WEBPACK_IMPORTED_MODULE_37__["VerticalStepperComponent"]
    },
    'error-stepper': {
        title: 'Stepper that displays errors in the steps',
        component: _error_stepper_error_stepper_component__WEBPACK_IMPORTED_MODULE_116__["ErrorStepperComponent"]
    },
    'customized-stepper': {
        title: 'Stepper with customized states',
        component: _customized_stepper_customized_stepper_component__WEBPACK_IMPORTED_MODULE_36__["CustomizedStepperComponent"]
    },
    'basic-tab-group': {
        title: 'Basic use of the tab group',
        component: _basic_tab_group_basic_tab_group_component__WEBPACK_IMPORTED_MODULE_35__["BasicTabGroupComponent"]
    },
    'align-tab-group': {
        title: 'Tab group with aligned labels',
        component: _align_tab_group_align_tab_group_component__WEBPACK_IMPORTED_MODULE_117__["AlignTabGroupComponent"]
    },
    'animation-tab-group': {
        title: 'Tab group animations',
        component: _animation_tab_group_animation_tab_group_component__WEBPACK_IMPORTED_MODULE_34__["AnimationTabGroupComponent"]
    },
    'dynamic-tab-group': {
        title: 'Tab group with dynamically changing tabs',
        component: _dynamic_tab_group_dynamic_tab_group_component__WEBPACK_IMPORTED_MODULE_118__["DynamicTabGroupComponent"]
    },
    'nav-tab-group': {
        title: 'Basic use of the tab nav bar',
        component: _nav_tab_group_nav_tab_group_component__WEBPACK_IMPORTED_MODULE_119__["NavTabGroupComponent"]
    },
    'custom-tab-group': {
        title: 'Customizing the theme options on the tab group',
        component: _custom_tab_group_custom_tab_group_component__WEBPACK_IMPORTED_MODULE_33__["CustomTabGroupComponent"]
    },
    'flat-tree': {
        title: 'Tree with flat nodes',
        component: _flat_tree_flat_tree_component__WEBPACK_IMPORTED_MODULE_120__["FlatTreeComponent"]
    },
    'nested-tree': {
        title: 'Tree with nested nodes',
        component: _nested_tree_nested_tree_component__WEBPACK_IMPORTED_MODULE_32__["NestedTreeComponent"]
    },
    'checkbox-tree': {
        title: 'Tree with checkboxes',
        component: _checkbox_tree_checkbox_tree_component__WEBPACK_IMPORTED_MODULE_31__["CheckboxTreeComponent"]
    },
    'dynamic-data-tree': {
        title: 'Tree with dynamic data',
        component: _dynamic_data_tree_dynamic_data_tree_component__WEBPACK_IMPORTED_MODULE_121__["DynamicDataTreeComponent"]
    },
    'buttons': {
        title: 'Various buttons',
        component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_122__["ButtonsComponent"]
    },
    'custom-loading-buttons': {
        title: 'Loading buttons',
        component: _custom_loading_buttons_custom_loading_buttons_component__WEBPACK_IMPORTED_MODULE_139__["CustomLoadingButtonsComponent"]
    },
    'button-toggle': {
        title: 'Exclusive selection',
        component: _button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_30__["ButtonToggleComponent"]
    },
    'basic-button-toggle': {
        title: 'Basic button toggle',
        component: _basic_button_toggle_basic_button_toggle_component__WEBPACK_IMPORTED_MODULE_29__["BasicButtonToggleComponent"]
    },
    'basic-badge': {
        title: 'Badge overview',
        component: _basic_badge_basic_badge_component__WEBPACK_IMPORTED_MODULE_28__["BasicBadgeComponent"]
    },
    'basic-chip': {
        title: 'Basic chips',
        component: _basic_chip_basic_chip_component__WEBPACK_IMPORTED_MODULE_27__["BasicChipComponent"]
    },
    'autocomplete-chip': {
        title: 'Chips Autocomplete',
        component: _autocomplete_chip_autocomplete_chip_component__WEBPACK_IMPORTED_MODULE_26__["AutocompleteChipComponent"]
    },
    'input-chip': {
        title: 'Chips with input',
        component: _input_chip_input_chip_component__WEBPACK_IMPORTED_MODULE_25__["InputChipComponent"]
    },
    'stacked-chip': {
        title: 'Stacked chips',
        component: _stacked_chip_stacked_chip_component__WEBPACK_IMPORTED_MODULE_123__["StackedChipComponent"]
    },
    'basic-icon': {
        title: 'Basic icon',
        component: _basic_icon_basic_icon_component__WEBPACK_IMPORTED_MODULE_24__["BasicIconComponent"]
    },
    'svg-icon': {
        title: 'SVG icon',
        component: _svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_124__["SvgIconComponent"]
    },
    'basic-spinner': {
        title: 'Basic spinner',
        component: _basic_spinner_basic_spinner_component__WEBPACK_IMPORTED_MODULE_23__["BasicSpinnerComponent"]
    },
    'custom-spinner': {
        title: 'Configurable progress spinner',
        component: _custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_22__["CustomSpinnerComponent"]
    },
    'basic-bar': {
        title: 'Determinate progress-bar',
        component: _basic_bar_basic_bar_component__WEBPACK_IMPORTED_MODULE_21__["BasicBarComponent"]
    },
    'custom-bar': {
        title: 'Configurable progress-bar',
        component: _custom_bar_custom_bar_component__WEBPACK_IMPORTED_MODULE_20__["CustomBarComponent"]
    },
    'indeterminate-bar': {
        title: 'Indeterminate progress-bar',
        component: _indeterminate_bar_indeterminate_bar_component__WEBPACK_IMPORTED_MODULE_125__["IndeterminateBarComponent"]
    },
    'custom-ripples': {
        title: 'MatRipple basic usage',
        component: _custom_ripples_custom_ripples_component__WEBPACK_IMPORTED_MODULE_126__["CustomRipplesComponent"]
    },
    'basic-tooltip': {
        title: 'Basic tooltip',
        component: _basic_tooltip_basic_tooltip_component__WEBPACK_IMPORTED_MODULE_19__["BasicTooltipComponent"]
    },
    'custom-position-tooltip': {
        title: 'Tooltip with a custom position',
        component: _custom_position_tooltip_custom_position_tooltip_component__WEBPACK_IMPORTED_MODULE_18__["CustomPositionTooltipComponent"]
    },
    'custom-class-tooltip': {
        title: 'Tooltip that can have a custom class applied',
        component: _custom_class_tooltip_custom_class_tooltip_component__WEBPACK_IMPORTED_MODULE_127__["CustomClassTooltipComponent"]
    },
    'delay-tooltip': {
        title: 'Tooltip with a show and hide delay',
        component: _delay_tooltip_delay_tooltip_component__WEBPACK_IMPORTED_MODULE_128__["DelayTooltipComponent"]
    },
    'disabled-tooltip': {
        title: 'Tooltip that can be disabled',
        component: _disabled_tooltip_disabled_tooltip_component__WEBPACK_IMPORTED_MODULE_129__["DisabledTooltipComponent"]
    },
    'manual-hide-tooltip': {
        title: 'Tooltip that can be manually shown/hidden',
        component: _manual_hide_tooltip_manual_hide_tooltip_component__WEBPACK_IMPORTED_MODULE_130__["ManualHideTooltipComponent"]
    },
    'changing-tooltip': {
        title: 'Tooltip with a changing message',
        component: _changing_tooltip_changing_tooltip_component__WEBPACK_IMPORTED_MODULE_131__["ChangingTooltipComponent"]
    },
    'auto-hide-tooltip': {
        title: 'Tooltip that demonstrates auto-hiding when it clips out of its scrolling container',
        component: _auto_hide_tooltip_auto_hide_tooltip_component__WEBPACK_IMPORTED_MODULE_17__["AutoHideTooltipComponent"]
    },
    'basic-paginator': {
        title: 'Paginator',
        component: _basic_paginator_basic_paginator_component__WEBPACK_IMPORTED_MODULE_16__["BasicPaginatorComponent"]
    },
    'custom-paginator': {
        title: 'Configurable paginator',
        component: _custom_paginator_custom_paginator_component__WEBPACK_IMPORTED_MODULE_15__["CustomPaginatorComponent"]
    },
    'basic-sort-header': {
        title: 'Sorting overview',
        component: _basic_sort_header_basic_sort_header_component__WEBPACK_IMPORTED_MODULE_14__["BasicSortHeaderComponent"]
    },
    'table-sorting': {
        title: 'Table with sorting',
        component: _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_13__["TableSortingComponent"]
    },
    'basic-table': {
        title: 'Basic use of `<table mat-table>`',
        component: _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_12__["BasicTableComponent"]
    },
    'pagination-table': {
        title: 'Table with pagination',
        component: _pagination_table_pagination_table_component__WEBPACK_IMPORTED_MODULE_11__["PaginationTableComponent"]
    },
    'sorting-table': {
        title: 'Table with sorting',
        component: _sorting_table_sorting_table_component__WEBPACK_IMPORTED_MODULE_132__["SortingTableComponent"]
    },
    'filter-table': {
        title: 'Table with filtering',
        component: _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_137__["FilterTableComponent"]
    },
    'selection-table': {
        title: 'Table with selection',
        component: _selection_table_selection_table_component__WEBPACK_IMPORTED_MODULE_133__["SelectionTableComponent"]
    },
    'footer-table': {
        title: 'Footer row table',
        component: _footer_table_footer_table_component__WEBPACK_IMPORTED_MODULE_10__["FooterTableComponent"]
    },
    'sticky-header-table': {
        title: 'Table with sticky header',
        component: _sticky_header_table_sticky_header_table_component__WEBPACK_IMPORTED_MODULE_134__["StickyHeaderTableComponent"]
    },
    'sticky-footer-table': {
        title: 'Table with sticky footer',
        component: _sticky_footer_table_sticky_footer_table_component__WEBPACK_IMPORTED_MODULE_135__["StickyFooterTableComponent"]
    },
    'sticky-column-table': {
        title: 'Table with sticky columns',
        component: _sticky_column_table_sticky_column_table_component__WEBPACK_IMPORTED_MODULE_136__["StickyColumnTableComponent"]
    },
    'bottom-sheet': {
        title: 'Bottom Sheet Overview',
        component: _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_9__["BottomSheetComponent"]
    },
    'basic-dialog': {
        title: 'Dialog Overview',
        component: _basic_dialog_basic_dialog_component__WEBPACK_IMPORTED_MODULE_7__["BasicDialogComponent"]
    },
    'data-dialog': {
        title: 'Injecting data when opening a dialog',
        component: _data_dialog_data_dialog_component__WEBPACK_IMPORTED_MODULE_138__["DataDialogComponent"]
    },
    'scrollable-dialog': {
        title: 'Dialog with header, scrollable content and actions',
        component: _scrollable_dialog_scrollable_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ScrollableDialogComponent"]
    },
    'basic-snackbar': {
        title: 'Basic snack-bar',
        component: _basic_snackbar_basic_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["BasicSnackbarComponent"]
    },
    'custom-snackbar': {
        title: 'Snack-bar with a custom component',
        component: _custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_1__["CustomSnackbarComponent"]
    },
};
var MATERIAL_EXAMPLE_COMPONENT_LIST = [
    _button_examples_button_examples_component__WEBPACK_IMPORTED_MODULE_85__["ButtonExamplesComponent"],
    _autocomplete_overview_autocomplete_overview_component__WEBPACK_IMPORTED_MODULE_86__["AutocompleteOverviewComponent"],
    _simple_autocomplete_simple_autocomplete_component__WEBPACK_IMPORTED_MODULE_87__["SimpleAutocompleteComponent"],
    _filter_autocomplete_filter_autocomplete_component__WEBPACK_IMPORTED_MODULE_84__["FilterAutocompleteComponent"],
    _display_value_autocomplete_display_value_autocomplete_component__WEBPACK_IMPORTED_MODULE_88__["DisplayValueAutocompleteComponent"],
    _highlight_first_autocomplete_highlight_first_autocomplete_component__WEBPACK_IMPORTED_MODULE_83__["HighlightFirstAutocompleteComponent"],
    _option_group_autocomplete_option_group_autocomplete_component__WEBPACK_IMPORTED_MODULE_89__["OptionGroupAutocompleteComponent"],
    _basic_checkbox_basic_checkbox_component__WEBPACK_IMPORTED_MODULE_82__["BasicCheckboxComponent"],
    _configurable_checkbox_configurable_checkbox_component__WEBPACK_IMPORTED_MODULE_81__["ConfigurableCheckboxComponent"],
    _basic_datepicker_basic_datepicker_component__WEBPACK_IMPORTED_MODULE_80__["BasicDatepickerComponent"],
    _start_date_datepicker_start_date_datepicker_component__WEBPACK_IMPORTED_MODULE_90__["StartDateDatepickerComponent"],
    _selected_value_datepicker_selected_value_datepicker_component__WEBPACK_IMPORTED_MODULE_91__["SelectedValueDatepickerComponent"],
    _min_max_datepicker_min_max_datepicker_component__WEBPACK_IMPORTED_MODULE_79__["MinMaxDatepickerComponent"],
    _filter_datepicker_filter_datepicker_component__WEBPACK_IMPORTED_MODULE_78__["FilterDatepickerComponent"],
    _event_datepicker_event_datepicker_component__WEBPACK_IMPORTED_MODULE_77__["EventDatepickerComponent"],
    _disabled_datepicker_disabled_datepicker_component__WEBPACK_IMPORTED_MODULE_76__["DisabledDatepickerComponent"],
    _touch_datepicker_touch_datepicker_component__WEBPACK_IMPORTED_MODULE_92__["TouchDatepickerComponent"],
    _open_method_datepicker_open_method_datepicker_component__WEBPACK_IMPORTED_MODULE_93__["OpenMethodDatepickerComponent"],
    _different_locale_datepicker_different_locale_datepicker_component__WEBPACK_IMPORTED_MODULE_75__["DifferentLocaleDatepickerComponent"],
    _moment_js_datepicker_moment_js_datepicker_component__WEBPACK_IMPORTED_MODULE_94__["MomentJsDatepickerComponent"],
    _custom_datepicker_custom_datepicker_component__WEBPACK_IMPORTED_MODULE_74__["CustomDatepickerComponent"],
    _simple_form_field_simple_form_field_component__WEBPACK_IMPORTED_MODULE_95__["SimpleFormFieldComponent"],
    _label_form_field_label_form_field_component__WEBPACK_IMPORTED_MODULE_96__["LabelFormFieldComponent"],
    _appearance_form_field_appearance_form_field_component__WEBPACK_IMPORTED_MODULE_73__["AppearanceFormFieldComponent"],
    _hints_form_field_hints_form_field_component__WEBPACK_IMPORTED_MODULE_72__["HintsFormFieldComponent"],
    _error_form_field_error_form_field_component__WEBPACK_IMPORTED_MODULE_97__["ErrorFormFieldComponent"],
    _prefix_suffix_form_field_prefix_suffix_form_field_component__WEBPACK_IMPORTED_MODULE_98__["PrefixSuffixFormFieldComponent"],
    _theming_form_field_theming_form_field_component__WEBPACK_IMPORTED_MODULE_99__["ThemingFormFieldComponent"],
    _basic_input_basic_input_component__WEBPACK_IMPORTED_MODULE_71__["BasicInputComponent"],
    _error_input_error_input_component__WEBPACK_IMPORTED_MODULE_70__["ErrorInputComponent"],
    _auto_resizing_texarea_auto_resizing_texarea_component__WEBPACK_IMPORTED_MODULE_69__["AutoResizingTexareaComponent"],
    _clear_button_input_clear_button_input_component__WEBPACK_IMPORTED_MODULE_68__["ClearButtonInputComponent"],
    _error_message_input_error_message_input_component__WEBPACK_IMPORTED_MODULE_100__["ErrorMessageInputComponent"],
    _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_67__["FormInputComponent"],
    _hints_input_hints_input_component__WEBPACK_IMPORTED_MODULE_66__["HintsInputComponent"],
    _suffix_prefix_input_suffix_prefix_input_component__WEBPACK_IMPORTED_MODULE_65__["SuffixPrefixInputComponent"],
    _basic_radio_basic_radio_component__WEBPACK_IMPORTED_MODULE_64__["BasicRadioComponent"],
    _ngmodel_radio_ngmodel_radio_component__WEBPACK_IMPORTED_MODULE_101__["NgmodelRadioComponent"],
    _basic_select_basic_select_component__WEBPACK_IMPORTED_MODULE_63__["BasicSelectComponent"],
    _two_way_binding_select_two_way_binding_select_component__WEBPACK_IMPORTED_MODULE_102__["TwoWayBindingSelectComponent"],
    _form_select_form_select_component__WEBPACK_IMPORTED_MODULE_62__["FormSelectComponent"],
    _feature_select_feature_select_component__WEBPACK_IMPORTED_MODULE_61__["FeatureSelectComponent"],
    _disabled_select_disabled_select_component__WEBPACK_IMPORTED_MODULE_60__["DisabledSelectComponent"],
    _reset_select_reset_select_component__WEBPACK_IMPORTED_MODULE_59__["ResetSelectComponent"],
    _option_group_select_option_group_select_component__WEBPACK_IMPORTED_MODULE_103__["OptionGroupSelectComponent"],
    _multiple_select_multiple_select_component__WEBPACK_IMPORTED_MODULE_104__["MultipleSelectComponent"],
    _trigger_select_trigger_select_component__WEBPACK_IMPORTED_MODULE_105__["TriggerSelectComponent"],
    _rippleless_select_rippleless_select_component__WEBPACK_IMPORTED_MODULE_58__["RipplelessSelectComponent"],
    _custom_panel_select_custom_panel_select_component__WEBPACK_IMPORTED_MODULE_106__["CustomPanelSelectComponent"],
    _error_select_error_select_component__WEBPACK_IMPORTED_MODULE_57__["ErrorSelectComponent"],
    _slider_slider_component__WEBPACK_IMPORTED_MODULE_107__["SliderComponent"],
    _basic_slider_basic_slider_component__WEBPACK_IMPORTED_MODULE_56__["BasicSliderComponent"],
    _basic_toggle_basic_toggle_component__WEBPACK_IMPORTED_MODULE_55__["BasicToggleComponent"],
    _configurable_toggle_configurable_toggle_component__WEBPACK_IMPORTED_MODULE_54__["ConfigurableToggleComponent"],
    _basic_menu_basic_menu_component__WEBPACK_IMPORTED_MODULE_53__["BasicMenuComponent"],
    _nested_menu_nested_menu_component__WEBPACK_IMPORTED_MODULE_108__["NestedMenuComponent"],
    _icon_menu_icon_menu_component__WEBPACK_IMPORTED_MODULE_52__["IconMenuComponent"],
    _basic_sidenav_basic_sidenav_component__WEBPACK_IMPORTED_MODULE_51__["BasicSidenavComponent"],
    _drawer_sidenav_drawer_sidenav_component__WEBPACK_IMPORTED_MODULE_109__["DrawerSidenavComponent"],
    _two_sidenav_two_sidenav_component__WEBPACK_IMPORTED_MODULE_50__["TwoSidenavComponent"],
    _open_close_sidenav_open_close_sidenav_component__WEBPACK_IMPORTED_MODULE_49__["OpenCloseSidenavComponent"],
    _configurable_sidenav_configurable_sidenav_component__WEBPACK_IMPORTED_MODULE_48__["ConfigurableSidenavComponent"],
    _escape_backdrop_sidenav_escape_backdrop_sidenav_component__WEBPACK_IMPORTED_MODULE_47__["EscapeBackdropSidenavComponent"],
    _autoresize_sidenav_autoresize_sidenav_component__WEBPACK_IMPORTED_MODULE_46__["AutoresizeSidenavComponent"],
    _fixed_sidenav_fixed_sidenav_component__WEBPACK_IMPORTED_MODULE_45__["FixedSidenavComponent"],
    _responsive_sidenav_responsive_sidenav_component__WEBPACK_IMPORTED_MODULE_110__["ResponsiveSidenavComponent"],
    _basic_toolbar_basic_toolbar_component__WEBPACK_IMPORTED_MODULE_44__["BasicToolbarComponent"],
    _multi_row_toolbar_multi_row_toolbar_component__WEBPACK_IMPORTED_MODULE_111__["MultiRowToolbarComponent"],
    _basic_card_basic_card_component__WEBPACK_IMPORTED_MODULE_43__["BasicCardComponent"],
    _multi_section_card_multi_section_card_component__WEBPACK_IMPORTED_MODULE_42__["MultiSectionCardComponent"],
    _basic_sidenav_basic_sidenav_component__WEBPACK_IMPORTED_MODULE_51__["BasicSidenavComponent"],
    _basic_expansion_panel_basic_expansion_panel_component__WEBPACK_IMPORTED_MODULE_112__["BasicExpansionPanelComponent"],
    _accordin_expansion_panel_accordin_expansion_panel_component__WEBPACK_IMPORTED_MODULE_40__["AccordinExpansionPanelComponent"],
    _basic_grid_basic_grid_component__WEBPACK_IMPORTED_MODULE_39__["BasicGridComponent"],
    _dynamic_grid_dynamic_grid_component__WEBPACK_IMPORTED_MODULE_113__["DynamicGridComponent"],
    _basic_list_basic_list_component__WEBPACK_IMPORTED_MODULE_114__["BasicListComponent"],
    _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_115__["SectionListComponent"],
    _basic_stepper_basic_stepper_component__WEBPACK_IMPORTED_MODULE_38__["BasicStepperComponent"],
    _vertical_stepper_vertical_stepper_component__WEBPACK_IMPORTED_MODULE_37__["VerticalStepperComponent"],
    _error_stepper_error_stepper_component__WEBPACK_IMPORTED_MODULE_116__["ErrorStepperComponent"],
    _customized_stepper_customized_stepper_component__WEBPACK_IMPORTED_MODULE_36__["CustomizedStepperComponent"],
    _basic_tab_group_basic_tab_group_component__WEBPACK_IMPORTED_MODULE_35__["BasicTabGroupComponent"],
    _align_tab_group_align_tab_group_component__WEBPACK_IMPORTED_MODULE_117__["AlignTabGroupComponent"],
    _animation_tab_group_animation_tab_group_component__WEBPACK_IMPORTED_MODULE_34__["AnimationTabGroupComponent"],
    _dynamic_tab_group_dynamic_tab_group_component__WEBPACK_IMPORTED_MODULE_118__["DynamicTabGroupComponent"],
    _nav_tab_group_nav_tab_group_component__WEBPACK_IMPORTED_MODULE_119__["NavTabGroupComponent"],
    _custom_tab_group_custom_tab_group_component__WEBPACK_IMPORTED_MODULE_33__["CustomTabGroupComponent"],
    _flat_tree_flat_tree_component__WEBPACK_IMPORTED_MODULE_120__["FlatTreeComponent"],
    _nested_tree_nested_tree_component__WEBPACK_IMPORTED_MODULE_32__["NestedTreeComponent"],
    _checkbox_tree_checkbox_tree_component__WEBPACK_IMPORTED_MODULE_31__["CheckboxTreeComponent"],
    _dynamic_data_tree_dynamic_data_tree_component__WEBPACK_IMPORTED_MODULE_121__["DynamicDataTreeComponent"],
    _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_122__["ButtonsComponent"],
    _custom_loading_buttons_custom_loading_buttons_component__WEBPACK_IMPORTED_MODULE_139__["CustomLoadingButtonsComponent"],
    _button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_30__["ButtonToggleComponent"],
    _basic_button_toggle_basic_button_toggle_component__WEBPACK_IMPORTED_MODULE_29__["BasicButtonToggleComponent"],
    _basic_badge_basic_badge_component__WEBPACK_IMPORTED_MODULE_28__["BasicBadgeComponent"],
    _basic_chip_basic_chip_component__WEBPACK_IMPORTED_MODULE_27__["BasicChipComponent"],
    _autocomplete_chip_autocomplete_chip_component__WEBPACK_IMPORTED_MODULE_26__["AutocompleteChipComponent"],
    _input_chip_input_chip_component__WEBPACK_IMPORTED_MODULE_25__["InputChipComponent"],
    _stacked_chip_stacked_chip_component__WEBPACK_IMPORTED_MODULE_123__["StackedChipComponent"],
    _basic_icon_basic_icon_component__WEBPACK_IMPORTED_MODULE_24__["BasicIconComponent"],
    _svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_124__["SvgIconComponent"],
    _basic_spinner_basic_spinner_component__WEBPACK_IMPORTED_MODULE_23__["BasicSpinnerComponent"],
    _custom_spinner_custom_spinner_component__WEBPACK_IMPORTED_MODULE_22__["CustomSpinnerComponent"],
    _basic_bar_basic_bar_component__WEBPACK_IMPORTED_MODULE_21__["BasicBarComponent"],
    _custom_bar_custom_bar_component__WEBPACK_IMPORTED_MODULE_20__["CustomBarComponent"],
    _indeterminate_bar_indeterminate_bar_component__WEBPACK_IMPORTED_MODULE_125__["IndeterminateBarComponent"],
    _custom_ripples_custom_ripples_component__WEBPACK_IMPORTED_MODULE_126__["CustomRipplesComponent"],
    _basic_tooltip_basic_tooltip_component__WEBPACK_IMPORTED_MODULE_19__["BasicTooltipComponent"],
    _custom_position_tooltip_custom_position_tooltip_component__WEBPACK_IMPORTED_MODULE_18__["CustomPositionTooltipComponent"],
    _custom_class_tooltip_custom_class_tooltip_component__WEBPACK_IMPORTED_MODULE_127__["CustomClassTooltipComponent"],
    _delay_tooltip_delay_tooltip_component__WEBPACK_IMPORTED_MODULE_128__["DelayTooltipComponent"],
    _disabled_tooltip_disabled_tooltip_component__WEBPACK_IMPORTED_MODULE_129__["DisabledTooltipComponent"],
    _manual_hide_tooltip_manual_hide_tooltip_component__WEBPACK_IMPORTED_MODULE_130__["ManualHideTooltipComponent"],
    _changing_tooltip_changing_tooltip_component__WEBPACK_IMPORTED_MODULE_131__["ChangingTooltipComponent"],
    _auto_hide_tooltip_auto_hide_tooltip_component__WEBPACK_IMPORTED_MODULE_17__["AutoHideTooltipComponent"],
    _basic_paginator_basic_paginator_component__WEBPACK_IMPORTED_MODULE_16__["BasicPaginatorComponent"],
    _custom_paginator_custom_paginator_component__WEBPACK_IMPORTED_MODULE_15__["CustomPaginatorComponent"],
    _basic_sort_header_basic_sort_header_component__WEBPACK_IMPORTED_MODULE_14__["BasicSortHeaderComponent"],
    _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_13__["TableSortingComponent"],
    _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_12__["BasicTableComponent"],
    _pagination_table_pagination_table_component__WEBPACK_IMPORTED_MODULE_11__["PaginationTableComponent"],
    _sorting_table_sorting_table_component__WEBPACK_IMPORTED_MODULE_132__["SortingTableComponent"],
    _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_137__["FilterTableComponent"],
    _selection_table_selection_table_component__WEBPACK_IMPORTED_MODULE_133__["SelectionTableComponent"],
    _footer_table_footer_table_component__WEBPACK_IMPORTED_MODULE_10__["FooterTableComponent"],
    _sticky_header_table_sticky_header_table_component__WEBPACK_IMPORTED_MODULE_134__["StickyHeaderTableComponent"],
    _sticky_footer_table_sticky_footer_table_component__WEBPACK_IMPORTED_MODULE_135__["StickyFooterTableComponent"],
    _sticky_column_table_sticky_column_table_component__WEBPACK_IMPORTED_MODULE_136__["StickyColumnTableComponent"],
    _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_9__["BottomSheetComponent"],
    _bottom_sheet_bottom_sheet_overview_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_8__["BottomSheetOverviewComponent"],
    _basic_dialog_basic_dialog_component__WEBPACK_IMPORTED_MODULE_7__["BasicDialogComponent"],
    _basic_dialog_basic_dialog_overview_basic_dialog_overview_component__WEBPACK_IMPORTED_MODULE_6__["BasicDialogOverviewComponent"],
    _data_dialog_data_dialog_component__WEBPACK_IMPORTED_MODULE_138__["DataDialogComponent"],
    _data_dialog_data_dialog_overview_data_dialog_overview_component__WEBPACK_IMPORTED_MODULE_5__["DataDialogOverviewComponent"],
    _scrollable_dialog_scrollable_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ScrollableDialogComponent"],
    _scrollable_dialog_scrollable_dialog_overview_scrollable_dialog_overview_component__WEBPACK_IMPORTED_MODULE_3__["ScrollableDialogOverviewComponent"],
    _basic_snackbar_basic_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["BasicSnackbarComponent"],
    _custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_1__["CustomSnackbarComponent"],
    _basic_divider_basic_divider_component__WEBPACK_IMPORTED_MODULE_41__["BasicDividerComponent"],
    _custom_snackbar_custom_snackbar_overview_custom_snackbar_overview_component__WEBPACK_IMPORTED_MODULE_0__["CustomSnackbarOverviewComponent"]
];


/***/ }),

/***/ "./src/assets/examples/material/input-chip/input-chip.component.html":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/input-chip/input-chip.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-chip-list\">\n    <mat-chip-list #chipList aria-label=\"Fruit selection\">\n      <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\"\n               [removable]=\"removable\" (removed)=\"remove(fruit)\">\n        <span>{{fruit.name}}</span>\n        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n      </mat-chip>\n      <input placeholder=\"New fruit...\"\n             [matChipInputFor]=\"chipList\"\n             [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n             [matChipInputAddOnBlur]=\"addOnBlur\"\n             (matChipInputTokenEnd)=\"add($event)\">\n    </mat-chip-list>\n  </mat-form-field>\n  "

/***/ }),

/***/ "./src/assets/examples/material/input-chip/input-chip.component.scss":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/input-chip/input-chip.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-chip-list {\n  width: 100%; }\n\n.mat-chip:not(.mat-basic-chip) {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC1jaGlwL2lucHV0LWNoaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC1jaGlwL2lucHV0LWNoaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jaGlwLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tYXQtY2hpcDpub3QoLm1hdC1iYXNpYy1jaGlwKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/input-chip/input-chip.component.ts":
/*!*************************************************************************!*\
  !*** ./src/assets/examples/material/input-chip/input-chip.component.ts ***!
  \*************************************************************************/
/*! exports provided: InputChipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputChipComponent", function() { return InputChipComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InputChipComponent = /** @class */ (function () {
    function InputChipComponent() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' },
        ];
    }
    InputChipComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    InputChipComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    InputChipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-chip',
            template: __webpack_require__(/*! ./input-chip.component.html */ "./src/assets/examples/material/input-chip/input-chip.component.html"),
            styles: [__webpack_require__(/*! ./input-chip.component.scss */ "./src/assets/examples/material/input-chip/input-chip.component.scss")]
        })
    ], InputChipComponent);
    return InputChipComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/label-form-field/label-form-field.component.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/label-form-field/label-form-field.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <form class=\"example-container\" [formGroup]=\"options\">\n    <mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group formControlName=\"floatLabel\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n        <mat-radio-button value=\"never\">Never</mat-radio-button>\n      </mat-radio-group>\n    </div>\n  </form>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <input matInput placeholder=\"Simple placeholder\" required>\n  </mat-form-field>\n\n  <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n    <mat-label>Both a label and a placeholder</mat-label>\n    <input matInput placeholder=\"Simple placeholder\">\n  </mat-form-field>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <mat-select required>\n      <mat-option>-- None --</mat-option>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/label-form-field/label-form-field.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/label-form-field/label-form-field.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.example-container form {\n  margin-bottom: 20px; }\n\n.example-container form > * {\n  margin: 5px 0; }\n\n.example-container .mat-radio-button {\n  margin: 0 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9sYWJlbC1mb3JtLWZpZWxkL2xhYmVsLWZvcm0tZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvbGFiZWwtZm9ybS1maWVsZC9sYWJlbC1mb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1jb250YWluZXIgZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtY29udGFpbmVyIGZvcm0gPiAqIHtcbiAgICBtYXJnaW46IDVweCAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1jb250YWluZXIgLm1hdC1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbjogMCAxMnB4O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/label-form-field/label-form-field.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/label-form-field/label-form-field.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LabelFormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelFormFieldComponent", function() { return LabelFormFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LabelFormFieldComponent = /** @class */ (function () {
    function LabelFormFieldComponent(fb) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    LabelFormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-label-form-field',
            template: __webpack_require__(/*! ./label-form-field.component.html */ "./src/assets/examples/material/label-form-field/label-form-field.component.html"),
            styles: [__webpack_require__(/*! ./label-form-field.component.scss */ "./src/assets/examples/material/label-form-field/label-form-field.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LabelFormFieldComponent);
    return LabelFormFieldComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/manual-hide-tooltip/manual-hide-tooltip.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/manual-hide-tooltip/manual-hide-tooltip.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>"

/***/ }),

/***/ "./src/assets/examples/material/manual-hide-tooltip/manual-hide-tooltip.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/manual-hide-tooltip/manual-hide-tooltip.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-action-button {\n  margin-top: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9tYW51YWwtaGlkZS10b29sdGlwL21hbnVhbC1oaWRlLXRvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL21hbnVhbC1oaWRlLXRvb2x0aXAvbWFudWFsLWhpZGUtdG9vbHRpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWFjdGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/manual-hide-tooltip/manual-hide-tooltip.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/manual-hide-tooltip/manual-hide-tooltip.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ManualHideTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualHideTooltipComponent", function() { return ManualHideTooltipComponent; });
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

var ManualHideTooltipComponent = /** @class */ (function () {
    function ManualHideTooltipComponent() {
    }
    ManualHideTooltipComponent.prototype.ngOnInit = function () {
    };
    ManualHideTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manual-hide-tooltip',
            template: __webpack_require__(/*! ./manual-hide-tooltip.component.html */ "./src/assets/examples/material/manual-hide-tooltip/manual-hide-tooltip.component.html"),
            styles: [__webpack_require__(/*! ./manual-hide-tooltip.component.scss */ "./src/assets/examples/material/manual-hide-tooltip/manual-hide-tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManualHideTooltipComponent);
    return ManualHideTooltipComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/material-examples.module.ts":
/*!******************************************************************!*\
  !*** ./src/assets/examples/material/material-examples.module.ts ***!
  \******************************************************************/
/*! exports provided: MaterialExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialExamplesModule", function() { return MaterialExamplesModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/assets/examples/material/index.ts");
/* harmony import */ var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/shared-material.module */ "./src/app/shared/shared-material.module.ts");
/* harmony import */ var app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialExamplesModule = /** @class */ (function () {
    function MaterialExamplesModule() {
    }
    MaterialExamplesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: ___WEBPACK_IMPORTED_MODULE_3__["MATERIAL_EXAMPLE_COMPONENT_LIST"].slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
                app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__["SharedMaterialModule"]
            ],
            exports: ___WEBPACK_IMPORTED_MODULE_3__["MATERIAL_EXAMPLE_COMPONENT_LIST"].slice(),
            entryComponents: ___WEBPACK_IMPORTED_MODULE_3__["MATERIAL_EXAMPLE_COMPONENT_LIST"].slice()
        })
    ], MaterialExamplesModule);
    return MaterialExamplesModule;
}());



/***/ }),

/***/ "./src/assets/examples/material/min-max-datepicker/min-max-datepicker.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/min-max-datepicker/min-max-datepicker.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-full-width\">\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/min-max-datepicker/min-max-datepicker.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/min-max-datepicker/min-max-datepicker.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL21pbi1tYXgtZGF0ZXBpY2tlci9taW4tbWF4LWRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/min-max-datepicker/min-max-datepicker.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/min-max-datepicker/min-max-datepicker.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MinMaxDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinMaxDatepickerComponent", function() { return MinMaxDatepickerComponent; });
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

var MinMaxDatepickerComponent = /** @class */ (function () {
    function MinMaxDatepickerComponent() {
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
    }
    MinMaxDatepickerComponent.prototype.ngOnInit = function () {
    };
    MinMaxDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-min-max-datepicker',
            template: __webpack_require__(/*! ./min-max-datepicker.component.html */ "./src/assets/examples/material/min-max-datepicker/min-max-datepicker.component.html"),
            styles: [__webpack_require__(/*! ./min-max-datepicker.component.scss */ "./src/assets/examples/material/min-max-datepicker/min-max-datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MinMaxDatepickerComponent);
    return MinMaxDatepickerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/moment-js-datepicker/moment-js-datepicker.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/assets/examples/material/moment-js-datepicker/moment-js-datepicker.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/moment-js-datepicker/moment-js-datepicker.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/assets/examples/material/moment-js-datepicker/moment-js-datepicker.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL21vbWVudC1qcy1kYXRlcGlja2VyL21vbWVudC1qcy1kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/moment-js-datepicker/moment-js-datepicker.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/moment-js-datepicker/moment-js-datepicker.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MomentJsDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentJsDatepickerComponent", function() { return MomentJsDatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

// tslint:disable-next-line:no-duplicate-imports
var moment = moment__WEBPACK_IMPORTED_MODULE_4__;
var MomentJsDatepickerComponent = /** @class */ (function () {
    function MomentJsDatepickerComponent() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment([2017, 0, 1]));
    }
    MomentJsDatepickerComponent.prototype.ngOnInit = function () {
    };
    MomentJsDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moment-js-datepicker',
            template: __webpack_require__(/*! ./moment-js-datepicker.component.html */ "./src/assets/examples/material/moment-js-datepicker/moment-js-datepicker.component.html"),
            providers: [
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MAT_MOMENT_DATE_FORMATS"] },
            ],
            styles: [__webpack_require__(/*! ./moment-js-datepicker.component.scss */ "./src/assets/examples/material/moment-js-datepicker/moment-js-datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MomentJsDatepickerComponent);
    return MomentJsDatepickerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/multi-row-toolbar/multi-row-toolbar.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/multi-row-toolbar/multi-row-toolbar.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/assets/examples/material/multi-row-toolbar/multi-row-toolbar.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/multi-row-toolbar/multi-row-toolbar.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9tdWx0aS1yb3ctdG9vbGJhci9tdWx0aS1yb3ctdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9tdWx0aS1yb3ctdG9vbGJhci9tdWx0aS1yb3ctdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xuICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/multi-row-toolbar/multi-row-toolbar.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/multi-row-toolbar/multi-row-toolbar.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MultiRowToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiRowToolbarComponent", function() { return MultiRowToolbarComponent; });
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

var MultiRowToolbarComponent = /** @class */ (function () {
    function MultiRowToolbarComponent() {
    }
    MultiRowToolbarComponent.prototype.ngOnInit = function () {
    };
    MultiRowToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multi-row-toolbar',
            template: __webpack_require__(/*! ./multi-row-toolbar.component.html */ "./src/assets/examples/material/multi-row-toolbar/multi-row-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./multi-row-toolbar.component.scss */ "./src/assets/examples/material/multi-row-toolbar/multi-row-toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiRowToolbarComponent);
    return MultiRowToolbarComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/multi-section-card/multi-section-card.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/multi-section-card/multi-section-card.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/assets/examples/material/multi-section-card/multi-section-card.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/multi-section-card/multi-section-card.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9tdWx0aS1zZWN0aW9uLWNhcmQvbXVsdGktc2VjdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvbXVsdGktc2VjdGlvbi1jYXJkL211bHRpLXNlY3Rpb24tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/multi-section-card/multi-section-card.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/multi-section-card/multi-section-card.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MultiSectionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSectionCardComponent", function() { return MultiSectionCardComponent; });
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

var MultiSectionCardComponent = /** @class */ (function () {
    function MultiSectionCardComponent() {
    }
    MultiSectionCardComponent.prototype.ngOnInit = function () {
    };
    MultiSectionCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multi-section-card',
            template: __webpack_require__(/*! ./multi-section-card.component.html */ "./src/assets/examples/material/multi-section-card/multi-section-card.component.html"),
            styles: [__webpack_require__(/*! ./multi-section-card.component.scss */ "./src/assets/examples/material/multi-section-card/multi-section-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiSectionCardComponent);
    return MultiSectionCardComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/multiple-select/multiple-select.component.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/multiple-select/multiple-select.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  multiple-select works!\n</p>\n<mat-form-field>\n  <mat-label>Toppings</mat-label>\n  <mat-select [formControl]=\"toppings\" multiple>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/multiple-select/multiple-select.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/multiple-select/multiple-select.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL211bHRpcGxlLXNlbGVjdC9tdWx0aXBsZS1zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/multiple-select/multiple-select.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/multiple-select/multiple-select.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MultipleSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleSelectComponent", function() { return MultipleSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultipleSelectComponent = /** @class */ (function () {
    function MultipleSelectComponent() {
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    MultipleSelectComponent.prototype.ngOnInit = function () {
    };
    MultipleSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiple-select',
            template: __webpack_require__(/*! ./multiple-select.component.html */ "./src/assets/examples/material/multiple-select/multiple-select.component.html"),
            styles: [__webpack_require__(/*! ./multiple-select.component.scss */ "./src/assets/examples/material/multiple-select/multiple-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultipleSelectComponent);
    return MultipleSelectComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/nav-tab-group/nav-tab-group.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/nav-tab-group/nav-tab-group.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button\n        class=\"example-action-button\"\n        (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n\n<nav mat-tab-nav-bar [backgroundColor]=\"background\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n"

/***/ }),

/***/ "./src/assets/examples/material/nav-tab-group/nav-tab-group.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/nav-tab-group/nav-tab-group.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-action-button {\n  margin-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9uYXYtdGFiLWdyb3VwL25hdi10YWItZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL25hdi10YWItZ3JvdXAvbmF2LXRhYi1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWFjdGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/nav-tab-group/nav-tab-group.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/nav-tab-group/nav-tab-group.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NavTabGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTabGroupComponent", function() { return NavTabGroupComponent; });
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

var NavTabGroupComponent = /** @class */ (function () {
    function NavTabGroupComponent() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = '';
    }
    NavTabGroupComponent.prototype.toggleBackground = function () {
        this.background = this.background ? '' : 'primary';
    };
    NavTabGroupComponent.prototype.ngOnInit = function () {
    };
    NavTabGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-tab-group',
            template: __webpack_require__(/*! ./nav-tab-group.component.html */ "./src/assets/examples/material/nav-tab-group/nav-tab-group.component.html"),
            styles: [__webpack_require__(/*! ./nav-tab-group.component.scss */ "./src/assets/examples/material/nav-tab-group/nav-tab-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavTabGroupComponent);
    return NavTabGroupComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/nested-menu/nested-menu.component.html":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/nested-menu/nested-menu.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\n\n<mat-menu #animals=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n</mat-menu>\n\n<mat-menu #vertebrates=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n  <button mat-menu-item>Birds</button>\n  <button mat-menu-item>Mammals</button>\n</mat-menu>\n\n<mat-menu #invertebrates=\"matMenu\">\n  <button mat-menu-item>Insects</button>\n  <button mat-menu-item>Molluscs</button>\n  <button mat-menu-item>Crustaceans</button>\n  <button mat-menu-item>Corals</button>\n  <button mat-menu-item>Arachnids</button>\n  <button mat-menu-item>Velvet worms</button>\n  <button mat-menu-item>Horseshoe crabs</button>\n</mat-menu>\n\n<mat-menu #fish=\"matMenu\">\n  <button mat-menu-item>Baikal oilfish</button>\n  <button mat-menu-item>Bala shark</button>\n  <button mat-menu-item>Ballan wrasse</button>\n  <button mat-menu-item>Bamboo shark</button>\n  <button mat-menu-item>Banded killifish</button>\n</mat-menu>\n\n<mat-menu #amphibians=\"matMenu\">\n  <button mat-menu-item>Sonoran desert toad</button>\n  <button mat-menu-item>Western toad</button>\n  <button mat-menu-item>Arroyo toad</button>\n  <button mat-menu-item>Yosemite toad</button>\n</mat-menu>\n\n<mat-menu #reptiles=\"matMenu\">\n  <button mat-menu-item>Banded Day Gecko</button>\n  <button mat-menu-item>Banded Gila Monster</button>\n  <button mat-menu-item>Black Tree Monitor</button>\n  <button mat-menu-item>Blue Spiny Lizard</button>\n  <button mat-menu-item disabled>Velociraptor</button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/assets/examples/material/nested-menu/nested-menu.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/nested-menu/nested-menu.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL25lc3RlZC1tZW51L25lc3RlZC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/nested-menu/nested-menu.component.ts":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/nested-menu/nested-menu.component.ts ***!
  \***************************************************************************/
/*! exports provided: NestedMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedMenuComponent", function() { return NestedMenuComponent; });
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

var NestedMenuComponent = /** @class */ (function () {
    function NestedMenuComponent() {
    }
    NestedMenuComponent.prototype.ngOnInit = function () {
    };
    NestedMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nested-menu',
            template: __webpack_require__(/*! ./nested-menu.component.html */ "./src/assets/examples/material/nested-menu/nested-menu.component.html"),
            styles: [__webpack_require__(/*! ./nested-menu.component.scss */ "./src/assets/examples/material/nested-menu/nested-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NestedMenuComponent);
    return NestedMenuComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/nested-tree/nested-tree.component.html":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/nested-tree/nested-tree.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n    <!-- This is the tree node template for leaf nodes -->\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n      <li class=\"mat-tree-node\">\n        <!-- use a disabled button to provide padding for tree leaf -->\n        <button mat-icon-button disabled></button>\n        {{node.name}}\n      </li>\n    </mat-tree-node>\n    <!-- This is the tree node template for expandable nodes -->\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\n      <li>\n        <div class=\"mat-tree-node\">\n          <button mat-icon-button matTreeNodeToggle\n                  [attr.aria-label]=\"'toggle ' + node.name\">\n            <mat-icon class=\"mat-icon-rtl-mirror\">\n              {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n            </mat-icon>\n          </button>\n          {{node.name}}\n        </div>\n        <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n          <ng-container matTreeNodeOutlet></ng-container>\n        </ul>\n      </li>\n    </mat-nested-tree-node>\n  </mat-tree>\n  "

/***/ }),

/***/ "./src/assets/examples/material/nested-tree/nested-tree.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/nested-tree/nested-tree.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-invisible {\n  display: none; }\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9uZXN0ZWQtdHJlZS9uZXN0ZWQtdHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQTs7QUFHZjs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvbmVzdGVkLXRyZWUvbmVzdGVkLXRyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10cmVlLWludmlzaWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtdHJlZSB1bCxcbiAgLmV4YW1wbGUtdHJlZSBsaSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/nested-tree/nested-tree.component.ts":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/nested-tree/nested-tree.component.ts ***!
  \***************************************************************************/
/*! exports provided: NestedTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedTreeComponent", function() { return NestedTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TREE_DATA = [
    {
        name: 'Fruit',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussel sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
];
var NestedTreeComponent = /** @class */ (function () {
    function NestedTreeComponent() {
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) { return node.children; });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNestedDataSource"]();
        this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
        this.dataSource.data = TREE_DATA;
    }
    NestedTreeComponent.prototype.ngOnInit = function () {
    };
    NestedTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nested-tree',
            template: __webpack_require__(/*! ./nested-tree.component.html */ "./src/assets/examples/material/nested-tree/nested-tree.component.html"),
            styles: [__webpack_require__(/*! ./nested-tree.component.scss */ "./src/assets/examples/material/nested-tree/nested-tree.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NestedTreeComponent);
    return NestedTreeComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/ngmodel-radio/ngmodel-radio.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/ngmodel-radio/ngmodel-radio.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n    {{season}}\n  </mat-radio-button>\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/ngmodel-radio/ngmodel-radio.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/ngmodel-radio/ngmodel-radio.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0; }\n\n.example-radio-button {\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9uZ21vZGVsLXJhZGlvL25nbW9kZWwtcmFkaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9uZ21vZGVsLXJhZGlvL25nbW9kZWwtcmFkaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/ngmodel-radio/ngmodel-radio.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/ngmodel-radio/ngmodel-radio.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NgmodelRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgmodelRadioComponent", function() { return NgmodelRadioComponent; });
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

var NgmodelRadioComponent = /** @class */ (function () {
    function NgmodelRadioComponent() {
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
    NgmodelRadioComponent.prototype.ngOnInit = function () {
    };
    NgmodelRadioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngmodel-radio',
            template: __webpack_require__(/*! ./ngmodel-radio.component.html */ "./src/assets/examples/material/ngmodel-radio/ngmodel-radio.component.html"),
            styles: [__webpack_require__(/*! ./ngmodel-radio.component.scss */ "./src/assets/examples/material/ngmodel-radio/ngmodel-radio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NgmodelRadioComponent);
    return NgmodelRadioComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/open-close-sidenav/open-close-sidenav.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/open-close-sidenav/open-close-sidenav.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\"\n               (closed)=\"events.push('close!')\">\n    Sidenav content\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox></p>\n    <p><button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button></p>\n    <p>Events:</p>\n    <div class=\"example-events\">\n      <div *ngFor=\"let e of events\">{{e}}</div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/assets/examples/material/open-close-sidenav/open-close-sidenav.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/open-close-sidenav/open-close-sidenav.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-events {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9vcGVuLWNsb3NlLXNpZGVuYXYvb3Blbi1jbG9zZS1zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFFO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9vcGVuLWNsb3NlLXNpZGVuYXYvb3Blbi1jbG9zZS1zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gdG9wOiAwO1xuICAgIC8vIGJvdHRvbTogMDtcbiAgICAvLyBsZWZ0OiAwO1xuICAgIC8vIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1ldmVudHMge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/open-close-sidenav/open-close-sidenav.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/open-close-sidenav/open-close-sidenav.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OpenCloseSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCloseSidenavComponent", function() { return OpenCloseSidenavComponent; });
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

var OpenCloseSidenavComponent = /** @class */ (function () {
    function OpenCloseSidenavComponent() {
        this.events = [];
    }
    OpenCloseSidenavComponent.prototype.ngOnInit = function () {
    };
    OpenCloseSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-close-sidenav',
            template: __webpack_require__(/*! ./open-close-sidenav.component.html */ "./src/assets/examples/material/open-close-sidenav/open-close-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./open-close-sidenav.component.scss */ "./src/assets/examples/material/open-close-sidenav/open-close-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OpenCloseSidenavComponent);
    return OpenCloseSidenavComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/open-method-datepicker/open-method-datepicker.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/examples/material/open-method-datepicker/open-method-datepicker.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>\n"

/***/ }),

/***/ "./src/assets/examples/material/open-method-datepicker/open-method-datepicker.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/assets/examples/material/open-method-datepicker/open-method-datepicker.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  margin-right: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9vcGVuLW1ldGhvZC1kYXRlcGlja2VyL29wZW4tbWV0aG9kLWRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL29wZW4tbWV0aG9kLWRhdGVwaWNrZXIvb3Blbi1tZXRob2QtZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/open-method-datepicker/open-method-datepicker.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/open-method-datepicker/open-method-datepicker.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: OpenMethodDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenMethodDatepickerComponent", function() { return OpenMethodDatepickerComponent; });
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

var OpenMethodDatepickerComponent = /** @class */ (function () {
    function OpenMethodDatepickerComponent() {
    }
    OpenMethodDatepickerComponent.prototype.ngOnInit = function () {
    };
    OpenMethodDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-method-datepicker',
            template: __webpack_require__(/*! ./open-method-datepicker.component.html */ "./src/assets/examples/material/open-method-datepicker/open-method-datepicker.component.html"),
            styles: [__webpack_require__(/*! ./open-method-datepicker.component.scss */ "./src/assets/examples/material/open-method-datepicker/open-method-datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OpenMethodDatepickerComponent);
    return OpenMethodDatepickerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/option-group-autocomplete/option-group-autocomplete.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/examples/material/option-group-autocomplete/option-group-autocomplete.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/option-group-autocomplete/option-group-autocomplete.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/examples/material/option-group-autocomplete/option-group-autocomplete.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL29wdGlvbi1ncm91cC1hdXRvY29tcGxldGUvb3B0aW9uLWdyb3VwLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/option-group-autocomplete/option-group-autocomplete.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/examples/material/option-group-autocomplete/option-group-autocomplete.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: _filter, OptionGroupAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_filter", function() { return _filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionGroupAutocompleteComponent", function() { return OptionGroupAutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var _filter = function (opt, value) {
    var filterValue = value.toLowerCase();
    return opt.filter(function (item) { return item.toLowerCase().indexOf(filterValue) === 0; });
};
var OptionGroupAutocompleteComponent = /** @class */ (function () {
    function OptionGroupAutocompleteComponent(fb) {
        this.fb = fb;
        this.stateForm = this.fb.group({
            stateGroup: '',
        });
        this.stateGroups = [{
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
            }, {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut']
            }, {
                letter: 'D',
                names: ['Delaware']
            }, {
                letter: 'F',
                names: ['Florida']
            }, {
                letter: 'G',
                names: ['Georgia']
            }, {
                letter: 'H',
                names: ['Hawaii']
            }, {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
            }, {
                letter: 'K',
                names: ['Kansas', 'Kentucky']
            }, {
                letter: 'L',
                names: ['Louisiana']
            }, {
                letter: 'M',
                names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
                    'Minnesota', 'Mississippi', 'Missouri', 'Montana']
            }, {
                letter: 'N',
                names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                    'New Mexico', 'New York', 'North Carolina', 'North Dakota']
            }, {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon']
            }, {
                letter: 'P',
                names: ['Pennsylvania']
            }, {
                letter: 'R',
                names: ['Rhode Island']
            }, {
                letter: 'S',
                names: ['South Carolina', 'South Dakota']
            }, {
                letter: 'T',
                names: ['Tennessee', 'Texas']
            }, {
                letter: 'U',
                names: ['Utah']
            }, {
                letter: 'V',
                names: ['Vermont', 'Virginia']
            }, {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
            }];
    }
    OptionGroupAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return _this._filterGroup(value); }));
    };
    OptionGroupAutocompleteComponent.prototype._filterGroup = function (value) {
        if (value) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: _filter(group.names, value) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    OptionGroupAutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-option-group-autocomplete',
            template: __webpack_require__(/*! ./option-group-autocomplete.component.html */ "./src/assets/examples/material/option-group-autocomplete/option-group-autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./option-group-autocomplete.component.scss */ "./src/assets/examples/material/option-group-autocomplete/option-group-autocomplete.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], OptionGroupAutocompleteComponent);
    return OptionGroupAutocompleteComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/option-group-select/option-group-select.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/option-group-select/option-group-select.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/option-group-select/option-group-select.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/option-group-select/option-group-select.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL29wdGlvbi1ncm91cC1zZWxlY3Qvb3B0aW9uLWdyb3VwLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/option-group-select/option-group-select.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/option-group-select/option-group-select.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OptionGroupSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionGroupSelectComponent", function() { return OptionGroupSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionGroupSelectComponent = /** @class */ (function () {
    function OptionGroupSelectComponent() {
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
    }
    OptionGroupSelectComponent.prototype.ngOnInit = function () {
    };
    OptionGroupSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-option-group-select',
            template: __webpack_require__(/*! ./option-group-select.component.html */ "./src/assets/examples/material/option-group-select/option-group-select.component.html"),
            styles: [__webpack_require__(/*! ./option-group-select.component.scss */ "./src/assets/examples/material/option-group-select/option-group-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OptionGroupSelectComponent);
    return OptionGroupSelectComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/pagination-table/pagination-table.component.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/pagination-table/pagination-table.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/pagination-table/pagination-table.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/pagination-table/pagination-table.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0aW9uLXRhYmxlL3BhZ2luYXRpb24tdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0aW9uLXRhYmxlL3BhZ2luYXRpb24tdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/pagination-table/pagination-table.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/pagination-table/pagination-table.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PaginationTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationTableComponent", function() { return PaginationTableComponent; });
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


var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
var PaginationTableComponent = /** @class */ (function () {
    function PaginationTableComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    PaginationTableComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], PaginationTableComponent.prototype, "paginator", void 0);
    PaginationTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination-table',
            template: __webpack_require__(/*! ./pagination-table.component.html */ "./src/assets/examples/material/pagination-table/pagination-table.component.html"),
            styles: [__webpack_require__(/*! ./pagination-table.component.scss */ "./src/assets/examples/material/pagination-table/pagination-table.component.scss")]
        })
    ], PaginationTableComponent);
    return PaginationTableComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/prefix-suffix-form-field/prefix-suffix-form-field.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/examples/material/prefix-suffix-form-field/prefix-suffix-form-field.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\">\n    <span matPrefix>$&nbsp;</span>\n    <span matSuffix>.00</span>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/prefix-suffix-form-field/prefix-suffix-form-field.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/examples/material/prefix-suffix-form-field/prefix-suffix-form-field.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.example-right-align {\n  text-align: right; }\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none; }\n\ninput.example-right-align {\n  -moz-appearance: textfield; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9wcmVmaXgtc3VmZml4LWZvcm0tZmllbGQvcHJlZml4LXN1ZmZpeC1mb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjs7RUFFRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3ByZWZpeC1zdWZmaXgtZm9ybS1maWVsZC9wcmVmaXgtc3VmZml4LWZvcm0tZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICBcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/prefix-suffix-form-field/prefix-suffix-form-field.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/examples/material/prefix-suffix-form-field/prefix-suffix-form-field.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PrefixSuffixFormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixSuffixFormFieldComponent", function() { return PrefixSuffixFormFieldComponent; });
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

var PrefixSuffixFormFieldComponent = /** @class */ (function () {
    function PrefixSuffixFormFieldComponent() {
        this.hide = true;
    }
    PrefixSuffixFormFieldComponent.prototype.ngOnInit = function () {
    };
    PrefixSuffixFormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prefix-suffix-form-field',
            template: __webpack_require__(/*! ./prefix-suffix-form-field.component.html */ "./src/assets/examples/material/prefix-suffix-form-field/prefix-suffix-form-field.component.html"),
            styles: [__webpack_require__(/*! ./prefix-suffix-form-field.component.scss */ "./src/assets/examples/material/prefix-suffix-form-field/prefix-suffix-form-field.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrefixSuffixFormFieldComponent);
    return PrefixSuffixFormFieldComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/reset-select/reset-select.component.html":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/reset-select/reset-select.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/reset-select/reset-select.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/reset-select/reset-select.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3Jlc2V0LXNlbGVjdC9yZXNldC1zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/reset-select/reset-select.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/reset-select/reset-select.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ResetSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetSelectComponent", function() { return ResetSelectComponent; });
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

var ResetSelectComponent = /** @class */ (function () {
    function ResetSelectComponent() {
        this.states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
            'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
            'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
    }
    ResetSelectComponent.prototype.ngOnInit = function () {
    };
    ResetSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-select',
            template: __webpack_require__(/*! ./reset-select.component.html */ "./src/assets/examples/material/reset-select/reset-select.component.html"),
            styles: [__webpack_require__(/*! ./reset-select.component.scss */ "./src/assets/examples/material/reset-select/reset-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetSelectComponent);
    return ResetSelectComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/responsive-sidenav/responsive-sidenav.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/responsive-sidenav/responsive-sidenav.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">Responsive App</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <p *ngFor=\"let content of fillerContent\">{{content}}</p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/assets/examples/material/responsive-sidenav/responsive-sidenav.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/responsive-sidenav/responsive-sidenav.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2; }\n\nh1.example-app-name {\n  margin-left: 8px; }\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1; }\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9yZXNwb25zaXZlLXNpZGVuYXYvcmVzcG9uc2l2ZS1zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9yZXNwb25zaXZlLXNpZGVuYXYvcmVzcG9uc2l2ZS1zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQVF4QjtFQUNFLGVBQWU7RUFDZiw4RUFBQTtFQUNBLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFOzRGQ1B3RjtFRFN4RixPQUFPLEVBQUE7O0FBR1Q7RUFDRTtpRUNSNkQ7RURVN0QsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvcmVzcG9uc2l2ZS1zaWRlbmF2L3Jlc3BvbnNpdmUtc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyB0b3A6IDA7XG4gICAgLy8gYm90dG9tOiAwO1xuICAgIC8vIGxlZnQ6IDA7XG4gICAgLy8gcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgXG4gIGgxLmV4YW1wbGUtYXBwLW5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXG4gICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cbiAgICBmbGV4OiAxO1xuICB9XG4gIFxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXG4gICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cbiAgICBmbGV4OiAxIDAgYXV0bztcbiAgfVxuICAiLCIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gIHotaW5kZXg6IDI7IH1cblxuaDEuZXhhbXBsZS1hcHAtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7IH1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXG4gICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cbiAgZmxleDogMTsgfVxuXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gIGZsZXg6IDEgMCBhdXRvOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/responsive-sidenav/responsive-sidenav.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/responsive-sidenav/responsive-sidenav.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ResponsiveSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveSidenavComponent", function() { return ResponsiveSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResponsiveSidenavComponent = /** @class */ (function () {
    function ResponsiveSidenavComponent(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 10 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array.from({ length: 5 }, function () { return "my content"; });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ResponsiveSidenavComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    ResponsiveSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responsive-sidenav',
            template: __webpack_require__(/*! ./responsive-sidenav.component.html */ "./src/assets/examples/material/responsive-sidenav/responsive-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./responsive-sidenav.component.scss */ "./src/assets/examples/material/responsive-sidenav/responsive-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]])
    ], ResponsiveSidenavComponent);
    return ResponsiveSidenavComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/rippleless-select/rippleless-select.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/rippleless-select/rippleless-select.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-label>Select an option</mat-label>\n  <mat-select disableRipple>\n    <mat-option value=\"1\">Option 1</mat-option>\n    <mat-option value=\"2\">Option 2</mat-option>\n    <mat-option value=\"3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/rippleless-select/rippleless-select.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/rippleless-select/rippleless-select.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3JpcHBsZWxlc3Mtc2VsZWN0L3JpcHBsZWxlc3Mtc2VsZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/rippleless-select/rippleless-select.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/rippleless-select/rippleless-select.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RipplelessSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RipplelessSelectComponent", function() { return RipplelessSelectComponent; });
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

var RipplelessSelectComponent = /** @class */ (function () {
    function RipplelessSelectComponent() {
    }
    RipplelessSelectComponent.prototype.ngOnInit = function () {
    };
    RipplelessSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rippleless-select',
            template: __webpack_require__(/*! ./rippleless-select.component.html */ "./src/assets/examples/material/rippleless-select/rippleless-select.component.html"),
            styles: [__webpack_require__(/*! ./rippleless-select.component.scss */ "./src/assets/examples/material/rippleless-select/rippleless-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RipplelessSelectComponent);
    return RipplelessSelectComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/assets/examples/material/scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Develop across all platforms</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n  <h3>Speed &amp; Performance</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge\n    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>\n\n  <h3>Incredible tooling</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with\n    your own components and use a wide array of existing components. Get immediate Angular-specific\n    help and feedback with nearly every IDE and editor. All this comes together so you can focus\n    on building amazing apps rather than trying to make the code work.</p>\n\n  <h3>Loved by millions</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable\n    infrastructure that supports Google's largest applications.</p>\n\n  <h3>What is Angular?</h3>\n\n  <p>Angular is a platform that makes it easy to build applications with the web. Angular\n    combines declarative templates, dependency injection, end to end tooling, and integrated\n    best practices to solve development challenges. Angular empowers developers to build\n    applications that live on the web, mobile, or the desktop</p>\n\n  <h3>Architecture overview</h3>\n\n  <p>Angular is a platform and framework for building client applications in HTML and TypeScript.\n  Angular is itself written in TypeScript. It implements core and optional functionality as a\n  set of TypeScript libraries that you import into your apps.</p>\n\n  <p>The basic building blocks of an Angular application are NgModules, which provide a compilation\n  context for components. NgModules collect related code into functional sets; an Angular app is\n  defined by a set of NgModules. An app always has at least a root module that enables\n  bootstrapping, and typically has many more feature modules.</p>\n\n  <p>Components define views, which are sets of screen elements that Angular can choose among and\n  modify according to your program logic and data. Every app has at least a root component.</p>\n\n  <p>Components use services, which provide specific functionality not directly related to views.\n  Service providers can be injected into components as dependencies, making your code modular,\n  reusable, and efficient.</p>\n\n  <p>Both components and services are simply classes, with decorators that mark their type and\n  provide metadata that tells Angular how to use them.</p>\n\n  <p>The metadata for a component class associates it with a template that defines a view. A\n  template combines ordinary HTML with Angular directives and binding markup that allow Angular\n  to modify the HTML before rendering it for display.</p>\n\n  <p>The metadata for a service class provides the information Angular needs to make it available\n  to components through Dependency Injection (DI).</p>\n\n  <p>An app's components typically define many views, arranged hierarchically. Angular provides\n  the Router service to help you define navigation paths among views. The router provides\n  sophisticated in-browser navigational capabilities.</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/assets/examples/material/scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3Njcm9sbGFibGUtZGlhbG9nL3Njcm9sbGFibGUtZGlhbG9nLW92ZXJ2aWV3L3Njcm9sbGFibGUtZGlhbG9nLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/assets/examples/material/scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ScrollableDialogOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableDialogOverviewComponent", function() { return ScrollableDialogOverviewComponent; });
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

var ScrollableDialogOverviewComponent = /** @class */ (function () {
    function ScrollableDialogOverviewComponent() {
    }
    ScrollableDialogOverviewComponent.prototype.ngOnInit = function () {
    };
    ScrollableDialogOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scrollable-dialog-overview',
            template: __webpack_require__(/*! ./scrollable-dialog-overview.component.html */ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component.html"),
            styles: [__webpack_require__(/*! ./scrollable-dialog-overview.component.scss */ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ScrollableDialogOverviewComponent);
    return ScrollableDialogOverviewComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/scrollable-dialog/scrollable-dialog.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n"

/***/ }),

/***/ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/scrollable-dialog/scrollable-dialog.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3Njcm9sbGFibGUtZGlhbG9nL3Njcm9sbGFibGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/scrollable-dialog/scrollable-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ScrollableDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableDialogComponent", function() { return ScrollableDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scrollable_dialog_overview_scrollable_dialog_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollable-dialog-overview/scrollable-dialog-overview.component */ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog-overview/scrollable-dialog-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrollableDialogComponent = /** @class */ (function () {
    function ScrollableDialogComponent(dialog) {
        this.dialog = dialog;
    }
    ScrollableDialogComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_scrollable_dialog_overview_scrollable_dialog_overview_component__WEBPACK_IMPORTED_MODULE_2__["ScrollableDialogOverviewComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log(`Dialog result: ${result}`);
        });
    };
    ScrollableDialogComponent.prototype.ngOnInit = function () {
    };
    ScrollableDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scrollable-dialog',
            template: __webpack_require__(/*! ./scrollable-dialog.component.html */ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog.component.html"),
            styles: [__webpack_require__(/*! ./scrollable-dialog.component.scss */ "./src/assets/examples/material/scrollable-dialog/scrollable-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], ScrollableDialogComponent);
    return ScrollableDialogComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/section-list/section-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/section-list/section-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>{{folder.name}}</h4>\n    <p mat-line> {{folder.updated | date}} </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <h4 mat-line>{{note.name}}</h4>\n    <p mat-line> {{note.updated | date}} </p>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/assets/examples/material/section-list/section-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/section-list/section-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zZWN0aW9uLWxpc3Qvc2VjdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zZWN0aW9uLWxpc3Qvc2VjdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0LWljb24ge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/section-list/section-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/section-list/section-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListComponent", function() { return SectionListComponent; });
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

var SectionListComponent = /** @class */ (function () {
    function SectionListComponent() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
    SectionListComponent.prototype.ngOnInit = function () {
    };
    SectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-list',
            template: __webpack_require__(/*! ./section-list.component.html */ "./src/assets/examples/material/section-list/section-list.component.html"),
            styles: [__webpack_require__(/*! ./section-list.component.scss */ "./src/assets/examples/material/section-list/section-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/selected-value-datepicker/selected-value-datepicker.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/examples/material/selected-value-datepicker/selected-value-datepicker.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\"\n         [formControl]=\"serializedDate\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n  <mat-datepicker #picker3></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/selected-value-datepicker/selected-value-datepicker.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/examples/material/selected-value-datepicker/selected-value-datepicker.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  margin-right: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3RlZC12YWx1ZS1kYXRlcGlja2VyL3NlbGVjdGVkLXZhbHVlLWRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3NlbGVjdGVkLXZhbHVlLWRhdGVwaWNrZXIvc2VsZWN0ZWQtdmFsdWUtZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/selected-value-datepicker/selected-value-datepicker.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/examples/material/selected-value-datepicker/selected-value-datepicker.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SelectedValueDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedValueDatepickerComponent", function() { return SelectedValueDatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectedValueDatepickerComponent = /** @class */ (function () {
    function SelectedValueDatepickerComponent() {
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((new Date()).toISOString());
    }
    SelectedValueDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-selected-value-datepicker',
            template: __webpack_require__(/*! ./selected-value-datepicker.component.html */ "./src/assets/examples/material/selected-value-datepicker/selected-value-datepicker.component.html"),
            styles: [__webpack_require__(/*! ./selected-value-datepicker.component.scss */ "./src/assets/examples/material/selected-value-datepicker/selected-value-datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectedValueDatepickerComponent);
    return SelectedValueDatepickerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/selection-table/selection-table.component.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/selection-table/selection-table.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Checkbox Column -->\n  <ng-container matColumnDef=\"select\">\n    <th mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\">\n      </mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\">\n      </mat-checkbox>\n    </td>\n  </ng-container>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n      (click)=\"selection.toggle(row)\">\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/assets/examples/material/selection-table/selection-table.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/selection-table/selection-table.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Rpb24tdGFibGUvc2VsZWN0aW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0aW9uLXRhYmxlL3NlbGVjdGlvbi10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/selection-table/selection-table.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/selection-table/selection-table.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SelectionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionTableComponent", function() { return SelectionTableComponent; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var SelectionTableComponent = /** @class */ (function () {
    function SelectionTableComponent() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    SelectionTableComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    SelectionTableComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    /** The label for the checkbox on the passed row */
    SelectionTableComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.position + 1);
    };
    SelectionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selection-table',
            template: __webpack_require__(/*! ./selection-table.component.html */ "./src/assets/examples/material/selection-table/selection-table.component.html"),
            styles: [__webpack_require__(/*! ./selection-table.component.scss */ "./src/assets/examples/material/selection-table/selection-table.component.scss")]
        })
    ], SelectionTableComponent);
    return SelectionTableComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/simple-autocomplete/simple-autocomplete.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/simple-autocomplete/simple-autocomplete.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/simple-autocomplete/simple-autocomplete.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/simple-autocomplete/simple-autocomplete.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zaW1wbGUtYXV0b2NvbXBsZXRlL3NpbXBsZS1hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3NpbXBsZS1hdXRvY29tcGxldGUvc2ltcGxlLWF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/simple-autocomplete/simple-autocomplete.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/simple-autocomplete/simple-autocomplete.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SimpleAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleAutocompleteComponent", function() { return SimpleAutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleAutocompleteComponent = /** @class */ (function () {
    function SimpleAutocompleteComponent() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
    }
    SimpleAutocompleteComponent.prototype.ngOnInit = function () {
    };
    SimpleAutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simple-autocomplete',
            template: __webpack_require__(/*! ./simple-autocomplete.component.html */ "./src/assets/examples/material/simple-autocomplete/simple-autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./simple-autocomplete.component.scss */ "./src/assets/examples/material/simple-autocomplete/simple-autocomplete.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleAutocompleteComponent);
    return SimpleAutocompleteComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/simple-form-field/simple-form-field.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/simple-form-field/simple-form-field.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Input\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Textarea\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/simple-form-field/simple-form-field.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/simple-form-field/simple-form-field.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zaW1wbGUtZm9ybS1maWVsZC9zaW1wbGUtZm9ybS1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zaW1wbGUtZm9ybS1maWVsZC9zaW1wbGUtZm9ybS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/simple-form-field/simple-form-field.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/simple-form-field/simple-form-field.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SimpleFormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFormFieldComponent", function() { return SimpleFormFieldComponent; });
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

var SimpleFormFieldComponent = /** @class */ (function () {
    function SimpleFormFieldComponent() {
    }
    SimpleFormFieldComponent.prototype.ngOnInit = function () {
    };
    SimpleFormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simple-form-field',
            template: __webpack_require__(/*! ./simple-form-field.component.html */ "./src/assets/examples/material/simple-form-field/simple-form-field.component.html"),
            styles: [__webpack_require__(/*! ./simple-form-field.component.scss */ "./src/assets/examples/material/simple-form-field/simple-form-field.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleFormFieldComponent);
    return SimpleFormFieldComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/slider/slider.component.html":
/*!*******************************************************************!*\
  !*** ./src/assets/examples/material/slider/slider.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n        Auto ticks\n      </mat-checkbox>\n      <mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\n        <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <mat-slider\n        class=\"example-margin\"\n        [disabled]=\"disabled\"\n        [invert]=\"invert\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [step]=\"step\"\n        [thumbLabel]=\"thumbLabel\"\n        [tickInterval]=\"tickInterval\"\n        [(ngModel)]=\"value\"\n        [vertical]=\"vertical\">\n    </mat-slider>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/assets/examples/material/slider/slider.component.scss":
/*!*******************************************************************!*\
  !*** ./src/assets/examples/material/slider/slider.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 10px; }\n\n.mat-slider-horizontal {\n  width: 300px; }\n\n.mat-slider-vertical {\n  height: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWgyIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1tYXJnaW4ge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuICBcbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG4gIFxuICAubWF0LXNsaWRlci12ZXJ0aWNhbCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/slider/slider.component.ts":
/*!*****************************************************************!*\
  !*** ./src/assets/examples/material/slider/slider.component.ts ***!
  \*****************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
    }
    Object.defineProperty(SliderComponent.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: function (value) {
            this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/assets/examples/material/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/assets/examples/material/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/sorting-table/sorting-table.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/sorting-table/sorting-table.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/assets/examples/material/sorting-table/sorting-table.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/sorting-table/sorting-table.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zb3J0aW5nLXRhYmxlL3NvcnRpbmctdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zb3J0aW5nLXRhYmxlL3NvcnRpbmctdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/sorting-table/sorting-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/sorting-table/sorting-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SortingTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingTableComponent", function() { return SortingTableComponent; });
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


var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var SortingTableComponent = /** @class */ (function () {
    function SortingTableComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    SortingTableComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SortingTableComponent.prototype, "sort", void 0);
    SortingTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sorting-table',
            template: __webpack_require__(/*! ./sorting-table.component.html */ "./src/assets/examples/material/sorting-table/sorting-table.component.html"),
            styles: [__webpack_require__(/*! ./sorting-table.component.scss */ "./src/assets/examples/material/sorting-table/sorting-table.component.scss")]
        })
    ], SortingTableComponent);
    return SortingTableComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/stacked-chip/stacked-chip.component.html":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/stacked-chip/stacked-chip.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\n    <mat-chip *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n      {{chip.name}}\n    </mat-chip>\n  </mat-chip-list>\n  "

/***/ }),

/***/ "./src/assets/examples/material/stacked-chip/stacked-chip.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/stacked-chip/stacked-chip.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-chip {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zdGFja2VkLWNoaXAvc3RhY2tlZC1jaGlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zdGFja2VkLWNoaXAvc3RhY2tlZC1jaGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNoaXAge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/stacked-chip/stacked-chip.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/stacked-chip/stacked-chip.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StackedChipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackedChipComponent", function() { return StackedChipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StackedChipComponent = /** @class */ (function () {
    function StackedChipComponent() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    StackedChipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stacked-chip',
            template: __webpack_require__(/*! ./stacked-chip.component.html */ "./src/assets/examples/material/stacked-chip/stacked-chip.component.html"),
            styles: [__webpack_require__(/*! ./stacked-chip.component.scss */ "./src/assets/examples/material/stacked-chip/stacked-chip.component.scss")]
        })
    ], StackedChipComponent);
    return StackedChipComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/start-date-datepicker/start-date-datepicker.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/start-date-datepicker/start-date-datepicker.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/start-date-datepicker/start-date-datepicker.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/start-date-datepicker/start-date-datepicker.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3N0YXJ0LWRhdGUtZGF0ZXBpY2tlci9zdGFydC1kYXRlLWRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/material/start-date-datepicker/start-date-datepicker.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/examples/material/start-date-datepicker/start-date-datepicker.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: StartDateDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartDateDatepickerComponent", function() { return StartDateDatepickerComponent; });
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

var StartDateDatepickerComponent = /** @class */ (function () {
    function StartDateDatepickerComponent() {
        this.startDate = new Date(1990, 0, 1);
    }
    StartDateDatepickerComponent.prototype.ngOnInit = function () {
    };
    StartDateDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start-date-datepicker',
            template: __webpack_require__(/*! ./start-date-datepicker.component.html */ "./src/assets/examples/material/start-date-datepicker/start-date-datepicker.component.html"),
            styles: [__webpack_require__(/*! ./start-date-datepicker.component.scss */ "./src/assets/examples/material/start-date-datepicker/start-date-datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StartDateDatepickerComponent);
    return StartDateDatepickerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/sticky-column-table/sticky-column-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/sticky-column-table/sticky-column-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\" sticky>\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <!-- Star Column -->\n    <ng-container matColumnDef=\"star\" stickyEnd>\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-icon>more_vert</mat-icon>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/sticky-column-table/sticky-column-table.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/sticky-column-table/sticky-column-table.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  height: 400px;\n  width: 550px;\n  overflow: auto; }\n\ntable {\n  width: 800px; }\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px; }\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px; }\n\n.mat-table-sticky:first-child {\n  border-right: 1px solid #e0e0e0; }\n\n.mat-table-sticky:last-child {\n  border-left: 1px solid #e0e0e0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zdGlja3ktY29sdW1uLXRhYmxlL3N0aWNreS1jb2x1bW4tdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsK0JBQStCLEVBQUE7O0FBR2pDO0VBQ0UsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zdGlja3ktY29sdW1uLXRhYmxlL3N0aWNreS1jb2x1bW4tdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDU1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICB9XG4gIFxuICB0ZC5tYXQtY29sdW1uLXN0YXIge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxuICBcbiAgdGgubWF0LWNvbHVtbi1wb3NpdGlvbiwgdGQubWF0LWNvbHVtbi1wb3NpdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIH1cbiAgXG4gIC5tYXQtdGFibGUtc3RpY2t5OmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xuICB9XG4gIFxuICAubWF0LXRhYmxlLXN0aWNreTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGUwZTA7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/sticky-column-table/sticky-column-table.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/sticky-column-table/sticky-column-table.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StickyColumnTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyColumnTableComponent", function() { return StickyColumnTableComponent; });
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

var ELEMENT_DATA = [
    { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
    { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
    { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
    { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
    { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
    { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
    { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
    { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
    { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
    { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
];
var StickyColumnTableComponent = /** @class */ (function () {
    function StickyColumnTableComponent() {
        this.displayedColumns = [
            "name",
            "position",
            "weight",
            "symbol",
            "position",
            "weight",
            "symbol",
            "star"
        ];
        this.dataSource = ELEMENT_DATA;
    }
    StickyColumnTableComponent.prototype.ngOnInit = function () { };
    StickyColumnTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sticky-column-table",
            template: __webpack_require__(/*! ./sticky-column-table.component.html */ "./src/assets/examples/material/sticky-column-table/sticky-column-table.component.html"),
            styles: [__webpack_require__(/*! ./sticky-column-table.component.scss */ "./src/assets/examples/material/sticky-column-table/sticky-column-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StickyColumnTableComponent);
    return StickyColumnTableComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/sticky-footer-table/sticky-footer-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/sticky-footer-table/sticky-footer-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"transactions\">\n    <!-- Item Column -->\n    <ng-container matColumnDef=\"item\">\n      <th mat-header-cell *matHeaderCellDef> Item </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n      <td mat-footer-cell *matFooterCellDef> Total </td>\n    </ng-container>\n\n    <!-- Cost Column -->\n    <ng-container matColumnDef=\"cost\">\n      <th mat-header-cell *matHeaderCellDef> Cost </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n      <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/assets/examples/material/sticky-footer-table/sticky-footer-table.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/sticky-footer-table/sticky-footer-table.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  height: 270px;\n  overflow: auto; }\n\ntable {\n  width: 100%; }\n\ntr.mat-footer-row {\n  font-weight: bold; }\n\n.mat-table-sticky {\n  border-top: 1px solid #e0e0e0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zdGlja3ktZm9vdGVyLXRhYmxlL3N0aWNreS1mb290ZXItdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvZXhhbXBsZXMvbWF0ZXJpYWwvc3RpY2t5LWZvb3Rlci10YWJsZS9zdGlja3ktZm9vdGVyLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRyLm1hdC1mb290ZXItcm93IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLm1hdC10YWJsZS1zdGlja3kge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/sticky-footer-table/sticky-footer-table.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/sticky-footer-table/sticky-footer-table.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StickyFooterTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyFooterTableComponent", function() { return StickyFooterTableComponent; });
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

var StickyFooterTableComponent = /** @class */ (function () {
    function StickyFooterTableComponent() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    StickyFooterTableComponent.prototype.getTotalCost = function () {
        return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    StickyFooterTableComponent.prototype.ngOnInit = function () {
    };
    StickyFooterTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sticky-footer-table',
            template: __webpack_require__(/*! ./sticky-footer-table.component.html */ "./src/assets/examples/material/sticky-footer-table/sticky-footer-table.component.html"),
            styles: [__webpack_require__(/*! ./sticky-footer-table.component.scss */ "./src/assets/examples/material/sticky-footer-table/sticky-footer-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StickyFooterTableComponent);
    return StickyFooterTableComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/sticky-header-table/sticky-header-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/sticky-header-table/sticky-header-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/assets/examples/material/sticky-header-table/sticky-header-table.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/sticky-header-table/sticky-header-table.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  height: 400px;\n  overflow: auto; }\n\ntable {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zdGlja3ktaGVhZGVyLXRhYmxlL3N0aWNreS1oZWFkZXItdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3N0aWNreS1oZWFkZXItdGFibGUvc3RpY2t5LWhlYWRlci10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/assets/examples/material/sticky-header-table/sticky-header-table.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/sticky-header-table/sticky-header-table.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StickyHeaderTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyHeaderTableComponent", function() { return StickyHeaderTableComponent; });
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

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var StickyHeaderTableComponent = /** @class */ (function () {
    function StickyHeaderTableComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    StickyHeaderTableComponent.prototype.ngOnInit = function () {
    };
    StickyHeaderTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sticky-header-table',
            template: __webpack_require__(/*! ./sticky-header-table.component.html */ "./src/assets/examples/material/sticky-header-table/sticky-header-table.component.html"),
            styles: [__webpack_require__(/*! ./sticky-header-table.component.scss */ "./src/assets/examples/material/sticky-header-table/sticky-header-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StickyHeaderTableComponent);
    return StickyHeaderTableComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/suffix-prefix-input/suffix-prefix-input.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/suffix-prefix-input/suffix-prefix-input.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n\n  <mat-form-field class=\"example-full-width\">\n    <span matPrefix>+1 &nbsp;</span>\n    <input type=\"tel\" matInput placeholder=\"Telephone\">\n    <mat-icon matSuffix>mode_edit</mat-icon>\n  </mat-form-field>\n  \n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/suffix-prefix-input/suffix-prefix-input.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/assets/examples/material/suffix-prefix-input/suffix-prefix-input.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC9zdWZmaXgtcHJlZml4LWlucHV0L3N1ZmZpeC1wcmVmaXgtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3N1ZmZpeC1wcmVmaXgtaW5wdXQvc3VmZml4LXByZWZpeC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/suffix-prefix-input/suffix-prefix-input.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/suffix-prefix-input/suffix-prefix-input.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SuffixPrefixInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuffixPrefixInputComponent", function() { return SuffixPrefixInputComponent; });
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

var SuffixPrefixInputComponent = /** @class */ (function () {
    function SuffixPrefixInputComponent() {
    }
    SuffixPrefixInputComponent.prototype.ngOnInit = function () {
    };
    SuffixPrefixInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suffix-prefix-input',
            template: __webpack_require__(/*! ./suffix-prefix-input.component.html */ "./src/assets/examples/material/suffix-prefix-input/suffix-prefix-input.component.html"),
            styles: [__webpack_require__(/*! ./suffix-prefix-input.component.scss */ "./src/assets/examples/material/suffix-prefix-input/suffix-prefix-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuffixPrefixInputComponent);
    return SuffixPrefixInputComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/svg-icon/svg-icon.component.html":
/*!***********************************************************************!*\
  !*** ./src/assets/examples/material/svg-icon/svg-icon.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n"

/***/ }),

/***/ "./src/assets/examples/material/svg-icon/svg-icon.component.scss":
/*!***********************************************************************!*\
  !*** ./src/assets/examples/material/svg-icon/svg-icon.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3N2Zy1pY29uL3N2Zy1pY29uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/svg-icon/svg-icon.component.ts":
/*!*********************************************************************!*\
  !*** ./src/assets/examples/material/svg-icon/svg-icon.component.ts ***!
  \*********************************************************************/
/*! exports provided: SvgIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconComponent", function() { return SvgIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SvgIconComponent = /** @class */ (function () {
    function SvgIconComponent(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('./assets/images/svgIconExample.svg'));
    }
    SvgIconComponent.prototype.ngOnInit = function () {
    };
    SvgIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-svg-icon',
            template: __webpack_require__(/*! ./svg-icon.component.html */ "./src/assets/examples/material/svg-icon/svg-icon.component.html"),
            styles: [__webpack_require__(/*! ./svg-icon.component.scss */ "./src/assets/examples/material/svg-icon/svg-icon.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SvgIconComponent);
    return SvgIconComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/table-sorting/table-sorting.component.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/table-sorting/table-sorting.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/assets/examples/material/table-sorting/table-sorting.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/table-sorting/table-sorting.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC90YWJsZS1zb3J0aW5nL3RhYmxlLXNvcnRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC90YWJsZS1zb3J0aW5nL3RhYmxlLXNvcnRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/assets/examples/material/table-sorting/table-sorting.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/examples/material/table-sorting/table-sorting.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TableSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSortingComponent", function() { return TableSortingComponent; });
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


var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var TableSortingComponent = /** @class */ (function () {
    function TableSortingComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    TableSortingComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TableSortingComponent.prototype, "sort", void 0);
    TableSortingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-sorting',
            template: __webpack_require__(/*! ./table-sorting.component.html */ "./src/assets/examples/material/table-sorting/table-sorting.component.html"),
            styles: [__webpack_require__(/*! ./table-sorting.component.scss */ "./src/assets/examples/material/table-sorting/table-sorting.component.scss")]
        })
    ], TableSortingComponent);
    return TableSortingComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/theming-form-field/theming-form-field.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/theming-form-field/theming-form-field.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\">\n  <mat-form-field [color]=\"options.value.color\">\n    <mat-select placeholder=\"Color\" formControlName=\"color\">\n      <mat-option value=\"primary\">Primary</mat-option>\n      <mat-option value=\"accent\">Accent</mat-option>\n      <mat-option value=\"warn\">Warn</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field [color]=\"options.value.color\">\n    <input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\n    <mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/examples/material/theming-form-field/theming-form-field.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/assets/examples/material/theming-form-field/theming-form-field.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC90aGVtaW5nLWZvcm0tZmllbGQvdGhlbWluZy1mb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3RoZW1pbmctZm9ybS1maWVsZC90aGVtaW5nLWZvcm0tZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/theming-form-field/theming-form-field.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/examples/material/theming-form-field/theming-form-field.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ThemingFormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingFormFieldComponent", function() { return ThemingFormFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemingFormFieldComponent = /** @class */ (function () {
    function ThemingFormFieldComponent(fb) {
        this.options = fb.group({
            color: 'primary',
            fontSize: [16, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10)],
        });
    }
    ThemingFormFieldComponent.prototype.getFontSize = function () {
        return Math.max(10, this.options.value.fontSize);
    };
    ThemingFormFieldComponent.prototype.ngOnInit = function () {
    };
    ThemingFormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-theming-form-field',
            template: __webpack_require__(/*! ./theming-form-field.component.html */ "./src/assets/examples/material/theming-form-field/theming-form-field.component.html"),
            styles: [__webpack_require__(/*! ./theming-form-field.component.scss */ "./src/assets/examples/material/theming-form-field/theming-form-field.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ThemingFormFieldComponent);
    return ThemingFormFieldComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/touch-datepicker/touch-datepicker.component.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/touch-datepicker/touch-datepicker.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker touchUi #picker></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/touch-datepicker/touch-datepicker.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/touch-datepicker/touch-datepicker.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3RvdWNoLWRhdGVwaWNrZXIvdG91Y2gtZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/touch-datepicker/touch-datepicker.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/touch-datepicker/touch-datepicker.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TouchDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchDatepickerComponent", function() { return TouchDatepickerComponent; });
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

var TouchDatepickerComponent = /** @class */ (function () {
    function TouchDatepickerComponent() {
    }
    TouchDatepickerComponent.prototype.ngOnInit = function () {
    };
    TouchDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-touch-datepicker',
            template: __webpack_require__(/*! ./touch-datepicker.component.html */ "./src/assets/examples/material/touch-datepicker/touch-datepicker.component.html"),
            styles: [__webpack_require__(/*! ./touch-datepicker.component.scss */ "./src/assets/examples/material/touch-datepicker/touch-datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TouchDatepickerComponent);
    return TouchDatepickerComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/trigger-select/trigger-select.component.html":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/trigger-select/trigger-select.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n    <mat-select-trigger>\n      {{toppings.value ? toppings.value[0] : ''}}\n      <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">\n        (+{{toppings.value.length - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})\n      </span>\n    </mat-select-trigger>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/examples/material/trigger-select/trigger-select.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/assets/examples/material/trigger-select/trigger-select.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9tYXRlcmlhbC90cmlnZ2VyLXNlbGVjdC90cmlnZ2VyLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3RyaWdnZXItc2VsZWN0L3RyaWdnZXItc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYWRkaXRpb25hbC1zZWxlY3Rpb24ge1xuICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/assets/examples/material/trigger-select/trigger-select.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/assets/examples/material/trigger-select/trigger-select.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TriggerSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggerSelectComponent", function() { return TriggerSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TriggerSelectComponent = /** @class */ (function () {
    function TriggerSelectComponent() {
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    TriggerSelectComponent.prototype.ngOnInit = function () {
    };
    TriggerSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trigger-select',
            template: __webpack_require__(/*! ./trigger-select.component.html */ "./src/assets/examples/material/trigger-select/trigger-select.component.html"),
            styles: [__webpack_require__(/*! ./trigger-select.component.scss */ "./src/assets/examples/material/trigger-select/trigger-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TriggerSelectComponent);
    return TriggerSelectComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/two-sidenav/two-sidenav.component.html":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/two-sidenav/two-sidenav.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\n    <mat-sidenav opened mode=\"side\">Start content</mat-sidenav>\n    <mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>\n    Implicit main content\n  </mat-sidenav-container>\n"

/***/ }),

/***/ "./src/assets/examples/material/two-sidenav/two-sidenav.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/assets/examples/material/two-sidenav/two-sidenav.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3R3by1zaWRlbmF2L3R3by1zaWRlbmF2LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/assets/examples/material/two-sidenav/two-sidenav.component.ts":
/*!***************************************************************************!*\
  !*** ./src/assets/examples/material/two-sidenav/two-sidenav.component.ts ***!
  \***************************************************************************/
/*! exports provided: TwoSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoSidenavComponent", function() { return TwoSidenavComponent; });
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

var TwoSidenavComponent = /** @class */ (function () {
    function TwoSidenavComponent() {
    }
    TwoSidenavComponent.prototype.ngOnInit = function () {
    };
    TwoSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-two-sidenav',
            template: __webpack_require__(/*! ./two-sidenav.component.html */ "./src/assets/examples/material/two-sidenav/two-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./two-sidenav.component.scss */ "./src/assets/examples/material/two-sidenav/two-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TwoSidenavComponent);
    return TwoSidenavComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/two-way-binding-select/two-way-binding-select.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/examples/material/two-way-binding-select/two-way-binding-select.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  two-way-binding-select works!\n</p>\n<mat-form-field>\n  <mat-label>Select an option</mat-label>\n  <mat-select [(value)]=\"selected\">\n    <mat-option>None</mat-option>\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\">Option 2</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<p>You selected: {{selected}}</p>\n"

/***/ }),

/***/ "./src/assets/examples/material/two-way-binding-select/two-way-binding-select.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/assets/examples/material/two-way-binding-select/two-way-binding-select.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3R3by13YXktYmluZGluZy1zZWxlY3QvdHdvLXdheS1iaW5kaW5nLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/two-way-binding-select/two-way-binding-select.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/examples/material/two-way-binding-select/two-way-binding-select.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TwoWayBindingSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoWayBindingSelectComponent", function() { return TwoWayBindingSelectComponent; });
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

var TwoWayBindingSelectComponent = /** @class */ (function () {
    function TwoWayBindingSelectComponent() {
        this.selected = 'option2';
    }
    TwoWayBindingSelectComponent.prototype.ngOnInit = function () {
    };
    TwoWayBindingSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-two-way-binding-select',
            template: __webpack_require__(/*! ./two-way-binding-select.component.html */ "./src/assets/examples/material/two-way-binding-select/two-way-binding-select.component.html"),
            styles: [__webpack_require__(/*! ./two-way-binding-select.component.scss */ "./src/assets/examples/material/two-way-binding-select/two-way-binding-select.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TwoWayBindingSelectComponent);
    return TwoWayBindingSelectComponent;
}());



/***/ }),

/***/ "./src/assets/examples/material/vertical-stepper/vertical-stepper.component.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/vertical-stepper/vertical-stepper.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n</button>\n<mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>\n"

/***/ }),

/***/ "./src/assets/examples/material/vertical-stepper/vertical-stepper.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/assets/examples/material/vertical-stepper/vertical-stepper.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL21hdGVyaWFsL3ZlcnRpY2FsLXN0ZXBwZXIvdmVydGljYWwtc3RlcHBlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/material/vertical-stepper/vertical-stepper.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/examples/material/vertical-stepper/vertical-stepper.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VerticalStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalStepperComponent", function() { return VerticalStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerticalStepperComponent = /** @class */ (function () {
    function VerticalStepperComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    VerticalStepperComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    VerticalStepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vertical-stepper',
            template: __webpack_require__(/*! ./vertical-stepper.component.html */ "./src/assets/examples/material/vertical-stepper/vertical-stepper.component.html"),
            styles: [__webpack_require__(/*! ./vertical-stepper.component.scss */ "./src/assets/examples/material/vertical-stepper/vertical-stepper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], VerticalStepperComponent);
    return VerticalStepperComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-material-example-view-material-example-view-module.js.map