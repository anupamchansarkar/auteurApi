(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-utilities-utilities-module"],{

/***/ "./src/app/views/utilities/border/border.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/utilities/border/border.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout plain overflow-hidden pb-8\">\n  <div class=\"header blue\"></div>\n  \n  <div class=\"content\">\n    <div class=\"content-header blue p-24\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n      <h1 class=\"text-white m-0 px-24\">Border utility classes</h1>\n    </div>\n\n    <div class=\"content-body p-24\">\n      <mat-card>\n        <div fxLayout=\"row wrap\" class=\"mb-24\">\n          <div class=\"height-80px width-80px border light-gray mr-16\"></div>\n          <div>\n            <pre><code [egretHighlight]=\"\n              '<div class=&quot;border&quot;></div>'\n            \"></code></pre>\n          </div>\n        </div>\n        <div fxLayout=\"row wrap\" class=\"mb-24\">\n          <div class=\"height-80px width-80px border-top mr-16 light-gray\"></div>\n          <div>\n            <pre><code [egretHighlight]=\"\n              '<div class=&quot;border-top&quot;></div>'\n            \"></code></pre>\n          </div>\n        </div>\n\n        <div fxLayout=\"row wrap\" class=\"mb-24\">\n          <div class=\"height-80px width-80px border-right mr-16 light-gray\"></div>\n          <div>\n            <pre><code [egretHighlight]=\"\n              '<div class=&quot;border-right&quot;></div>'\n            \"></code></pre>\n          </div>\n        </div>\n        <div fxLayout=\"row wrap\" class=\"mb-24\">\n          <div class=\"height-80px width-80px border-bottom mr-16 light-gray\"></div>\n          <div>\n            <pre><code [egretHighlight]=\"\n              '<div class=&quot;border-bottom&quot;></div>'\n            \"></code></pre>\n          </div>\n        </div>\n        <div fxLayout=\"row wrap\" class=\"mb-24\">\n          <div class=\"height-80px width-80px border-left mr-16 light-gray\"></div>\n          <div>\n            <pre><code [egretHighlight]=\"\n              '<div class=&quot;border-left&quot;></div>'\n            \"></code></pre>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/utilities/border/border.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/utilities/border/border.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3V0aWxpdGllcy9ib3JkZXIvYm9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/utilities/border/border.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/utilities/border/border.component.ts ***!
  \************************************************************/
/*! exports provided: BorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderComponent", function() { return BorderComponent; });
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

var BorderComponent = /** @class */ (function () {
    function BorderComponent() {
    }
    BorderComponent.prototype.ngOnInit = function () {
    };
    BorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-border',
            template: __webpack_require__(/*! ./border.component.html */ "./src/app/views/utilities/border/border.component.html"),
            styles: [__webpack_require__(/*! ./border.component.scss */ "./src/app/views/utilities/border/border.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BorderComponent);
    return BorderComponent;
}());



/***/ }),

/***/ "./src/app/views/utilities/colors/colors.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/utilities/colors/colors.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-8\">\n  <div fxLayout=\"row wrap\">\n    <div *ngFor=\"let c of (colors | keyvalue)\" fxFlex=\"50\">\n      <div class=\"m-8 mat-elevation-z1 rounded overflow-hidden\">\n          <div\n          style=\"height: 64px\"\n          class=\"{{ c.key }}-{{ shade.key }} {{ c.key }}-{{ shade.key }}-fg px-16 py-24\"\n          *ngFor=\"let shade of (c.value | keyvalue)\"\n        >\n          <span>BG Color Class .{{ c.key }}-{{ shade.key }}</span>\n          <span class=\"float-right\">Text Color Class .{{ c.key }}-{{ shade.key }}-fg</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/utilities/colors/colors.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/utilities/colors/colors.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3V0aWxpdGllcy9jb2xvcnMvY29sb3JzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/utilities/colors/colors.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/utilities/colors/colors.component.ts ***!
  \************************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
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

var ColorsComponent = /** @class */ (function () {
    function ColorsComponent() {
        this.colors = {
            "red": {
                "100": "#ffcdd2",
                "200": "#ef9a9a",
                "300": "#e57373",
                "400": "#ef5350",
                "500": "#f44336",
                "600": "#e53935",
                "700": "#d32f2f",
                "800": "#c62828",
                "900": "#b71c1c",
                "A100": "#ff8a80",
                "A200": "#ff5252",
                "A400": "#ff1744",
                "A700": "#d50000"
            },
            "pink": {
                "100": "#f8bbd0",
                "200": "#f48fb1",
                "300": "#f06292",
                "400": "#ec407a",
                "500": "#e91e63",
                "600": "#d81b60",
                "700": "#c2185b",
                "800": "#ad1457",
                "900": "#880e4f",
                "A100": "#ff80ab",
                "A200": "#ff4081",
                "A400": "#f50057",
                "A700": "#c51162"
            },
            "purple": {
                "100": "#e1bee7",
                "200": "#ce93d8",
                "300": "#ba68c8",
                "400": "#ab47bc",
                "500": "#9c27b0",
                "600": "#8e24aa",
                "700": "#7b1fa2",
                "800": "#6a1b9a",
                "900": "#4a148c",
                "A100": "#ea80fc",
                "A200": "#e040fb",
                "A400": "#d500f9",
                "A700": "#aa00ff"
            },
            "deep-purple": {
                "100": "#d1c4e9",
                "200": "#b39ddb",
                "300": "#9575cd",
                "400": "#7e57c2",
                "500": "#673ab7",
                "600": "#5e35b1",
                "700": "#512da8",
                "800": "#4527a0",
                "900": "#311b92",
                "A100": "#b388ff",
                "A200": "#7c4dff",
                "A400": "#651fff",
                "A700": "#6200ea"
            },
            "indigo": {
                "100": "#c5cae9",
                "200": "#9fa8da",
                "300": "#7986cb",
                "400": "#5c6bc0",
                "500": "#3f51b5",
                "600": "#3949ab",
                "700": "#303f9f",
                "800": "#283593",
                "900": "#1a237e",
                "A100": "#8c9eff",
                "A200": "#536dfe",
                "A400": "#3d5afe",
                "A700": "#304ffe"
            },
            "blue": {
                "100": "#bbdefb",
                "200": "#90caf9",
                "300": "#64b5f6",
                "400": "#42a5f5",
                "500": "#2196f3",
                "600": "#1e88e5",
                "700": "#1976d2",
                "800": "#1565c0",
                "900": "#0d47a1",
                "A100": "#82b1ff",
                "A200": "#448aff",
                "A400": "#2979ff",
                "A700": "#2962ff"
            },
            "light-blue": {
                "100": "#b3e5fc",
                "200": "#81d4fa",
                "300": "#4fc3f7",
                "400": "#29b6f6",
                "500": "#03a9f4",
                "600": "#039be5",
                "700": "#0288d1",
                "800": "#0277bd",
                "900": "#01579b",
                "A100": "#80d8ff",
                "A200": "#40c4ff",
                "A400": "#00b0ff",
                "A700": "#0091ea"
            },
            "dark-blue": {
                "100": "#b3e5fc",
                "200": "#81d4fa",
                "300": "#4fc3f7",
                "400": "#29b6f6",
                "500": "#03a9f4",
                "600": "#039be5",
                "700": "#0288d1",
                "800": "#0277bd",
                "900": "#01579b",
                "A100": "#80d8ff",
                "A200": "#40c4ff",
                "A400": "#00b0ff",
                "A700": "#0091ea"
            },
            "cyan": {
                "100": "#b2ebf2",
                "200": "#80deea",
                "300": "#4dd0e1",
                "400": "#26c6da",
                "500": "#00bcd4",
                "600": "#00acc1",
                "700": "#0097a7",
                "800": "#00838f",
                "900": "#006064",
                "A100": "#84ffff",
                "A200": "#18ffff",
                "A400": "#00e5ff",
                "A700": "#00b8d4"
            },
            "teal": {
                "100": "#b2dfdb",
                "200": "#80cbc4",
                "300": "#4db6ac",
                "400": "#26a69a",
                "500": "#009688",
                "600": "#00897b",
                "700": "#00796b",
                "800": "#00695c",
                "900": "#004d40",
                "A100": "#a7ffeb",
                "A200": "#64ffda",
                "A400": "#1de9b6",
                "A700": "#00bfa5"
            },
            "green": {
                "100": "#c8e6c9",
                "200": "#a5d6a7",
                "300": "#81c784",
                "400": "#66bb6a",
                "500": "#4caf50",
                "600": "#43a047",
                "700": "#388e3c",
                "800": "#2e7d32",
                "900": "#1b5e20",
                "A100": "#b9f6ca",
                "A200": "#69f0ae",
                "A400": "#00e676",
                "A700": "#00c853"
            },
            "light-green": {
                "100": "#dcedc8",
                "200": "#c5e1a5",
                "300": "#aed581",
                "400": "#9ccc65",
                "500": "#8bc34a",
                "600": "#7cb342",
                "700": "#689f38",
                "800": "#558b2f",
                "900": "#33691e",
                "A100": "#ccff90",
                "A200": "#b2ff59",
                "A400": "#76ff03",
                "A700": "#64dd17"
            },
            "lime": {
                "100": "#f0f4c3",
                "200": "#e6ee9c",
                "300": "#dce775",
                "400": "#d4e157",
                "500": "#cddc39",
                "600": "#c0ca33",
                "700": "#afb42b",
                "800": "#9e9d24",
                "900": "#827717",
                "A100": "#f4ff81",
                "A200": "#eeff41",
                "A400": "#c6ff00",
                "A700": "#aeea00"
            },
            "yellow": {
                "100": "#fff9c4",
                "200": "#fff59d",
                "300": "#fff176",
                "400": "#ffee58",
                "500": "#ffeb3b",
                "600": "#fdd835",
                "700": "#fbc02d",
                "800": "#f9a825",
                "900": "#f57f17",
                "A100": "#ffff8d",
                "A200": "#ffff00",
                "A400": "#ffea00",
                "A700": "#ffd600"
            },
            "amber": {
                "100": "#ffecb3",
                "200": "#ffe082",
                "300": "#ffd54f",
                "400": "#ffca28",
                "500": "#ffc107",
                "600": "#ffb300",
                "700": "#ffa000",
                "800": "#ff8f00",
                "900": "#ff6f00",
                "A100": "#ffe57f",
                "A200": "#ffd740",
                "A400": "#ffc400",
                "A700": "#ffab00"
            },
            "orange": {
                "100": "#ffe0b2",
                "200": "#ffcc80",
                "300": "#ffb74d",
                "400": "#ffa726",
                "500": "#ff9800",
                "600": "#fb8c00",
                "700": "#f57c00",
                "800": "#ef6c00",
                "900": "#e65100",
                "A100": "#ffd180",
                "A200": "#ffab40",
                "A400": "#ff9100",
                "A700": "#ff6d00"
            },
            "deep-orange": {
                "100": "#ffccbc",
                "200": "#ffab91",
                "300": "#ff8a65",
                "400": "#ff7043",
                "500": "#ff5722",
                "600": "#f4511e",
                "700": "#e64a19",
                "800": "#d84315",
                "900": "#bf360c",
                "A100": "#ff9e80",
                "A200": "#ff6e40",
                "A400": "#ff3d00",
                "A700": "#dd2c00"
            },
            "brown": {
                "100": "#d7ccc8",
                "200": "#bcaaa4",
                "300": "#a1887f",
                "400": "#8d6e63",
                "500": "#795548",
                "600": "#6d4c41",
                "700": "#5d4037",
                "800": "#4e342e",
                "900": "#3e2723"
            },
            "grey": {
                "100": "#f5f5f5",
                "200": "#eeeeee",
                "300": "#e0e0e0",
                "400": "#bdbdbd",
                "500": "#9e9e9e",
                "600": "#757575",
                "700": "#616161",
                "800": "#424242",
                "900": "#212121"
            },
            "blue-grey": {
                "100": "#cfd8dc",
                "200": "#b0bec5",
                "300": "#90a4ae",
                "400": "#78909c",
                "500": "#607d8b",
                "600": "#546e7a",
                "700": "#455a64",
                "800": "#37474f",
                "900": "#263238"
            },
            "black": {
                "100": "#ffccbc",
                "200": "#ffab91",
                "300": "#ff8a65",
                "400": "#ff7043",
                "500": "#ff5722",
                "600": "#f4511e",
                "700": "#e64a19",
                "800": "#d84315",
                "900": "#bf360c",
                "A100": "#ff9e80",
                "A200": "#ff6e40",
                "A400": "#ff3d00",
                "A700": "#dd2c00"
            },
            "white": {
                "100": "#cfd8dc",
                "200": "#b0bec5",
                "300": "#90a4ae",
                "400": "#78909c",
                "500": "#607d8b",
                "600": "#546e7a",
                "700": "#455a64",
                "800": "#37474f",
                "900": "#263238"
            }
        };
    }
    ColorsComponent.prototype.ngOnInit = function () {
        // console.log(Object.keys(this.colors).length)
    };
    ColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/views/utilities/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ./colors.component.scss */ "./src/app/views/utilities/colors/colors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/views/utilities/spacing/spacing.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/utilities/spacing/spacing.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout plain overflow-hidden pb-8\">\n  <div class=\"header blue\"></div>\n  \n  <div class=\"content\">\n    <div class=\"content-header blue p-24\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n      <h1 class=\"text-white m-0\">Spacing Helper Classes</h1>\n    </div>\n\n    <div class=\"content-body\">\n          <mat-tab-group>\n              <mat-tab label=\"Margins\">\n                <div class=\"p-24\">\n                    <h4>Non Directional</h4>\n                    <mat-card class=\"mt-16 mx-0 mb-32\">\n                        \n                      <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                        <div fxFlex=\"100px\">.m-{{m}}</div>\n                        <div fxFlex>\n                          <pre><code [egretHighlight]=\"'<div class=&quot;m-'+m+'&quot;>margin '+m+'px</div>'\"></code></pre>\n                        </div>\n                      </div>\n                    </mat-card>\n\n                    <h4>Margin auto </h4>\n                    <mat-card class=\"mt-16 mx-0 mb-32\">\n                      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                        <div fxFlex=\"100px\">.m-auto</div>\n                        <div fxFlex>\n                            <pre><code [egretHighlight]=\"\n                              '<div class=&quot;m-auto&quot;>Margin auto</div>'\n                            \"></code></pre>\n                        </div>\n                      </div>\n                      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                        <div fxFlex=\"100px\">.mx-auto</div>\n                        <div fxFlex>\n                              <pre><code [egretHighlight]=\"\n                                '<div class=&quot;mx-auto&quot;>Margin left auto & Margin right auto</div>'\n                              \"></code></pre>\n                          </div>\n                        </div>\n                        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                          <div fxFlex=\"100px\">.my-auto</div>\n                          <div fxFlex>\n                                <pre><code [egretHighlight]=\"\n                                  '<div class=&quot;my-auto&quot;>Margin top auto & Margin bottom auto</div>'\n                                \"></code></pre>\n                            </div>\n                          </div>\n                    </mat-card>\n\n                    <h4>Directional <span class=\"text-muted\">(Horizontal)</span></h4>\n                    <mat-card class=\"mt-16 mx-0 mb-32\">\n                      <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                        <div fxFlex=\"100px\">.mx-{{m}}</div>\n                        <div fxFlex>\n                            <pre><code [egretHighlight]=\"\n                              '<div class=&quot;mx-'+m+'&quot;>Margin left '+m+'px & Margin right '+m+'px</div>'\n                            \"></code></pre>\n                        </div>\n                      </div>\n                    </mat-card>\n\n                    <h4>Directional <span class=\"text-muted\">(Verticle)</span></h4>\n                    <mat-card class=\"mt-16 mx-0 mb-32\">\n                      <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                        <div fxFlex=\"100px\">.my-{{m}}</div>\n                        <div fxFlex>\n                            <pre><code [egretHighlight]=\"\n                              '<div class=&quot;my-'+m+'&quot;>Margin top '+m+'px & Margin bottom '+m+'px</div>'\n                            \"></code></pre>\n                        </div>\n                      </div>\n                    </mat-card>\n\n                    <h4>Directional <span class=\"text-muted\">(margin top)</span></h4>\n                    <mat-card class=\"mt-16 mx-0 mb-32\">\n                      <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                        <div fxFlex=\"100px\">.mt-{{m}}</div>\n                        <div fxFlex>\n                            <pre><code [egretHighlight]=\"'<div class=&quot;mt-'+m+'&quot;>margin top '+m+'px</div>'\"></code></pre>\n                        </div>\n                      </div>\n                    </mat-card>\n\n                    \n\n                    <h4>Directional <span class=\"text-muted\">(margin right)</span></h4>\n                    <mat-card class=\"mt-16 mx-0 mb-32\">\n                      <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                        <div fxFlex=\"100px\">.mr-{{m}}</div>\n                        <div fxFlex>\n                            <pre><code [egretHighlight]=\"'<div class=&quot;mr-'+m+'&quot;>Margin right '+m+'px</div>'\"></code></pre>\n                        </div>\n                      </div>\n                    </mat-card>\n\n                    <h4>Directional <span class=\"text-muted\">(margin bottom)</span></h4>\n                    <mat-card class=\"mt-16 mx-0 mb-32\">\n                      <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                        <div fxFlex=\"100px\">.mb-{{m}}</div>\n                        <div fxFlex>\n                            <pre><code [egretHighlight]=\"'<div class=&quot;mb-'+m+'&quot;>Margin bottom '+m+'px</div>'\"></code></pre>\n                        </div>\n                      </div>\n                    </mat-card>\n\n                    <h4>Directional <span class=\"text-muted\">(margin left)</span></h4>\n                    <mat-card class=\"mt-16 mx-0 mb-32\">\n                      <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                        <div fxFlex=\"100px\">.ml-{{m}}</div>\n                        <div fxFlex>\n                            <pre><code [egretHighlight]=\"'<div class=&quot;ml-'+m+'&quot;>Margin left '+m+'px</div>'\"></code></pre>\n                        </div>\n                      </div>\n                    </mat-card>\n                </div>\n              </mat-tab>\n              <mat-tab label=\"Paddings\">\n                <div class=\"p-24\">\n                  <h4>Non Directional</h4>\n                  <mat-card class=\"mt-16 mx-0 mb-32\">\n                      \n                    <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                      <div fxFlex=\"100px\">.p-{{m}}</div>\n                      <div fxFlex>\n                        <pre><code [egretHighlight]=\"'<div class=&quot;p-'+m+'&quot;>Padding '+m+'px</div>'\"></code></pre>\n                      </div>\n                    </div>\n                  </mat-card>\n\n                  \n\n                  <h4>Directional <span class=\"text-muted\">(Horizontal)</span></h4>\n                  <mat-card class=\"mt-16 mx-0 mb-32\">\n                    <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                      <div fxFlex=\"100px\">.px-{{m}}</div>\n                      <div fxFlex>\n                          <pre><code [egretHighlight]=\"\n                            '<div class=&quot;px-'+m+'&quot;>Padding left '+m+'px & Padding right '+m+'px</div>'\n                          \"></code></pre>\n                      </div>\n                    </div>\n                  </mat-card>\n\n                  <h4>Directional <span class=\"text-muted\">(Verticle)</span></h4>\n                  <mat-card class=\"mt-16 mx-0 mb-32\">\n                    <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                      <div fxFlex=\"100px\">.py-{{m}}</div>\n                      <div fxFlex>\n                          <pre><code [egretHighlight]=\"\n                            '<div class=&quot;py-'+m+'&quot;>Padding top '+m+'px & Padding bottom '+m+'px</div>'\n                          \"></code></pre>\n                      </div>\n                    </div>\n                  </mat-card>\n\n                  <h4>Directional <span class=\"text-muted\">(Padding top)</span></h4>\n                  <mat-card class=\"mt-16 mx-0 mb-32\">\n                    <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                      <div fxFlex=\"100px\">.pt-{{m}}</div>\n                      <div fxFlex>\n                          <pre><code [egretHighlight]=\"'<div class=&quot;pt-'+m+'&quot;>Padding top '+m+'px</div>'\"></code></pre>\n                      </div>\n                    </div>\n                  </mat-card>\n\n                  \n\n                  <h4>Directional <span class=\"text-muted\">(Padding right)</span></h4>\n                  <mat-card class=\"mt-16 mx-0 mb-32\">\n                    <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                      <div fxFlex=\"100px\">.pr-{{m}}</div>\n                      <div fxFlex>\n                          <pre><code [egretHighlight]=\"'<div class=&quot;pr-'+m+'&quot;>Padding right '+m+'px</div>'\"></code></pre>\n                      </div>\n                    </div>\n                  </mat-card>\n\n                  <h4>Directional <span class=\"text-muted\">(Padding bottom)</span></h4>\n                  <mat-card class=\"mt-16 mx-0 mb-32\">\n                    <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                      <div fxFlex=\"100px\">.pb-{{m}}</div>\n                      <div fxFlex>\n                          <pre><code [egretHighlight]=\"'<div class=&quot;pb-'+m+'&quot;>Padding bottom '+m+'px</div>'\"></code></pre>\n                      </div>\n                    </div>\n                  </mat-card>\n\n                  <h4>Directional <span class=\"text-muted\">(Padding left)</span></h4>\n                  <mat-card class=\"mt-16 mx-0 mb-32\">\n                    <div *ngFor=\"let m of spacings\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" class=\"mb-32\">\n                      <div fxFlex=\"100px\">.pl-{{m}}</div>\n                      <div fxFlex>\n                          <pre><code [egretHighlight]=\"'<div class=&quot;pl-'+m+'&quot;>Padding left '+m+'px</div>'\"></code></pre>\n                      </div>\n                    </div>\n                  </mat-card>\n              </div>\n              </mat-tab>\n          </mat-tab-group>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/utilities/spacing/spacing.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/utilities/spacing/spacing.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3V0aWxpdGllcy9zcGFjaW5nL3NwYWNpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/utilities/spacing/spacing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/utilities/spacing/spacing.component.ts ***!
  \**************************************************************/
/*! exports provided: SpacingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacingComponent", function() { return SpacingComponent; });
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

var SpacingComponent = /** @class */ (function () {
    function SpacingComponent() {
        this.spacings = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48];
        this.test = '<span class="m-0">test</span>';
    }
    SpacingComponent.prototype.ngOnInit = function () {
    };
    SpacingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spacing',
            template: __webpack_require__(/*! ./spacing.component.html */ "./src/app/views/utilities/spacing/spacing.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./spacing.component.scss */ "./src/app/views/utilities/spacing/spacing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpacingComponent);
    return SpacingComponent;
}());



/***/ }),

/***/ "./src/app/views/utilities/typography/typography.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/utilities/typography/typography.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout plain overflow-hidden pb-8\">\n  <div class=\"header blue\"></div>\n  \n  <div class=\"content\">\n    <div class=\"content-header blue p-24\" fxLayout=\"row wrap\" fxLayoutAlign=\"start stre\">\n      <h1 class=\"text-white m-0\">Typography</h1>\n    </div>\n\n    <div class=\"content-body\">\n          <mat-tab-group>\n              <mat-tab label=\"Headings\">\n                <div class=\"p-24\">\n                  <mat-card>\n                    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"mb-24\">\n                      <span class=\"mat-display-1 my-0 mr-16\">Display 1</span>\n                      <div>\n                          <pre><code [egretHighlight]=\"\n                            '<span class=&quot;mat-display-1&quot;></span>'\n                          \"></code></pre>\n                        </div>\n                    </div>\n                    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"mb-24\">\n                        <span class=\"mat-display-2 my-0 mr-16\">Display 2</span>\n                        <div>\n                            <pre><code [egretHighlight]=\"\n                              '<span class=&quot;mat-display-2&quot;></span>'\n                            \"></code></pre>\n                          </div>\n                    </div>\n                    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"mb-24\">\n                        <span class=\"mat-display-3 my-0 mr-16\">Display 3</span>\n                        <div>\n                            <pre><code [egretHighlight]=\"\n                              '<span class=&quot;mat-display-3&quot;></span>'\n                            \"></code></pre>\n                          </div>\n                    </div>\n                    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"mb-24\">\n                        <span class=\"mat-display-4 my-0 mr-16\">Display 4</span>\n                        <div>\n                            <pre><code [egretHighlight]=\"\n                              '<span class=&quot;mat-display-4&quot;></span>'\n                            \"></code></pre>\n                          </div>\n                    </div>\n                    \n                  </mat-card>\n                </div>\n              </mat-tab>\n              <mat-tab label=\"Second\"> Content 2 </mat-tab>\n              <mat-tab label=\"Third\"> Content 3 </mat-tab>\n          </mat-tab-group>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/utilities/typography/typography.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/utilities/typography/typography.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3V0aWxpdGllcy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/utilities/typography/typography.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/utilities/typography/typography.component.ts ***!
  \********************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/views/utilities/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/views/utilities/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/views/utilities/utilities-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/utilities/utilities-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UtilitiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesRoutingModule", function() { return UtilitiesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _spacing_spacing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spacing/spacing.component */ "./src/app/views/utilities/spacing/spacing.component.ts");
/* harmony import */ var _border_border_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./border/border.component */ "./src/app/views/utilities/border/border.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/views/utilities/typography/typography.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/views/utilities/colors/colors.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'spacing',
        component: _spacing_spacing_component__WEBPACK_IMPORTED_MODULE_2__["SpacingComponent"]
    },
    {
        path: 'border',
        component: _border_border_component__WEBPACK_IMPORTED_MODULE_3__["BorderComponent"]
    },
    {
        path: 'color',
        component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"]
    },
    {
        path: 'typography',
        component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__["TypographyComponent"]
    }
];
var UtilitiesRoutingModule = /** @class */ (function () {
    function UtilitiesRoutingModule() {
    }
    UtilitiesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UtilitiesRoutingModule);
    return UtilitiesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/utilities/utilities.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/utilities/utilities.module.ts ***!
  \*****************************************************/
/*! exports provided: UtilitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesModule", function() { return UtilitiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utilities_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities-routing.module */ "./src/app/views/utilities/utilities-routing.module.ts");
/* harmony import */ var _spacing_spacing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spacing/spacing.component */ "./src/app/views/utilities/spacing/spacing.component.ts");
/* harmony import */ var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/shared-material.module */ "./src/app/shared/shared-material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _border_border_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./border/border.component */ "./src/app/views/utilities/border/border.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/views/utilities/typography/typography.component.ts");
/* harmony import */ var app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/views/utilities/colors/colors.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { HighlightModule } from 'ngx-highlightjs';








var UtilitiesModule = /** @class */ (function () {
    function UtilitiesModule() {
    }
    UtilitiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_spacing_spacing_component__WEBPACK_IMPORTED_MODULE_3__["SpacingComponent"], _border_border_component__WEBPACK_IMPORTED_MODULE_6__["BorderComponent"], _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__["TypographyComponent"], _colors_colors_component__WEBPACK_IMPORTED_MODULE_9__["ColorsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__["SharedMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                _utilities_routing_module__WEBPACK_IMPORTED_MODULE_2__["UtilitiesRoutingModule"]
            ]
        })
    ], UtilitiesModule);
    return UtilitiesModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-utilities-utilities-module.js.map