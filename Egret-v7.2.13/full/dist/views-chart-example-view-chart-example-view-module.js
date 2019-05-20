(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chart-example-view-chart-example-view-module"],{

/***/ "./src/app/views/chart-example-view/chart-example-view-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/chart-example-view/chart-example-view-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ChartExampleViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartExampleViewRoutingModule", function() { return ChartExampleViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chart_example_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-example-view.component */ "./src/app/views/chart-example-view/chart-example-view.component.ts");
/* harmony import */ var app_shared_components_example_viewer_template_example_viewer_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/example-viewer-template/example-viewer-template.component */ "./src/app/shared/components/example-viewer-template/example-viewer-template.component.ts");
/* harmony import */ var assets_examples_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/examples/chart */ "./src/assets/examples/chart/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: ":id",
        component: _chart_example_view_component__WEBPACK_IMPORTED_MODULE_2__["ChartExampleViewComponent"],
        children: [
            {
                path: "",
                component: app_shared_components_example_viewer_template_example_viewer_template_component__WEBPACK_IMPORTED_MODULE_3__["EgretExampleViewerTemplateComponent"],
                data: {
                    map: assets_examples_chart__WEBPACK_IMPORTED_MODULE_4__["CHART_EXAMPLE_COMPONENT_MAP"],
                    components: assets_examples_chart__WEBPACK_IMPORTED_MODULE_4__["CHART_EXAMPLE_COMPONENTS"],
                    path: "assets/examples/chart/"
                }
            }
        ],
        data: { title: "Chart", breadcrumb: "Chart" }
    }
];
var ChartExampleViewRoutingModule = /** @class */ (function () {
    function ChartExampleViewRoutingModule() {
    }
    ChartExampleViewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChartExampleViewRoutingModule);
    return ChartExampleViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/chart-example-view/chart-example-view.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/chart-example-view/chart-example-view.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/views/chart-example-view/chart-example-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/chart-example-view/chart-example-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChartExampleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartExampleViewComponent", function() { return ChartExampleViewComponent; });
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

var ChartExampleViewComponent = /** @class */ (function () {
    function ChartExampleViewComponent() {
    }
    ChartExampleViewComponent.prototype.ngOnInit = function () {
    };
    ChartExampleViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart-example-view',
            template: __webpack_require__(/*! ./chart-example-view.component.html */ "./src/app/views/chart-example-view/chart-example-view.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ChartExampleViewComponent);
    return ChartExampleViewComponent;
}());



/***/ }),

/***/ "./src/app/views/chart-example-view/chart-example-view.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/chart-example-view/chart-example-view.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChartExampleViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartExampleViewModule", function() { return ChartExampleViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chart_example_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-example-view-routing.module */ "./src/app/views/chart-example-view/chart-example-view-routing.module.ts");
/* harmony import */ var _chart_example_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart-example-view.component */ "./src/app/views/chart-example-view/chart-example-view.component.ts");
/* harmony import */ var assets_examples_chart_chart_examples_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/examples/chart/chart-examples.module */ "./src/assets/examples/chart/chart-examples.module.ts");
/* harmony import */ var app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChartExampleViewModule = /** @class */ (function () {
    function ChartExampleViewModule() {
    }
    ChartExampleViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_chart_example_view_component__WEBPACK_IMPORTED_MODULE_3__["ChartExampleViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                assets_examples_chart_chart_examples_module__WEBPACK_IMPORTED_MODULE_4__["ChartExamplesModule"],
                app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
                _chart_example_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChartExampleViewRoutingModule"]
            ]
        })
    ], ChartExampleViewModule);
    return ChartExampleViewModule;
}());



/***/ }),

/***/ "./src/assets/examples/chart/chart-examples.module.ts":
/*!************************************************************!*\
  !*** ./src/assets/examples/chart/chart-examples.module.ts ***!
  \************************************************************/
/*! exports provided: ChartExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartExamplesModule", function() { return ChartExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/assets/examples/chart/index.ts");
/* harmony import */ var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared-material.module */ "./src/app/shared/shared-material.module.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChartExamplesModule = /** @class */ (function () {
    function ChartExamplesModule() {
    }
    ChartExamplesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: ___WEBPACK_IMPORTED_MODULE_2__["CHART_EXAMPLE_COMPONENT_LIST"].slice(),
            imports: [
                ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__["SharedMaterialModule"]
            ],
            exports: ___WEBPACK_IMPORTED_MODULE_2__["CHART_EXAMPLE_COMPONENT_LIST"].slice(),
            entryComponents: ___WEBPACK_IMPORTED_MODULE_2__["CHART_EXAMPLE_COMPONENT_LIST"].slice()
        })
    ], ChartExamplesModule);
    return ChartExamplesModule;
}());



/***/ }),

/***/ "./src/assets/examples/chart/echart-bar/echart-bar.component.html":
/*!************************************************************************!*\
  !*** ./src/assets/examples/chart/echart-bar/echart-bar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mb-16\">Bar chart with zoom option</h3>\n<div echarts [options]=\"zoomBarOptions\" style=\"height: 400px\"></div>\n<div class=\"m-24\">\n    <mat-divider></mat-divider>\n</div>\n\n<h3 class=\"mb-16\">Bar chart with multiple series option</h3>\n<div echarts [options]=\"multipleSeriesBasicOptions\" style=\"height: 600px\"></div>\n<div class=\"m-24\">\n    <mat-divider></mat-divider>\n</div>\n\n<h3 class=\"mb-16\">Cluster bar chart with rotation</h3>\n<div echarts [options]=\"clusteredVBarOptions\" style=\"height: 400px\"></div>\n<div class=\"m-24\">\n    <mat-divider></mat-divider>\n</div>\n\n<h3 class=\"mb-16\">Middle bar chart</h3>\n<div echarts [options]=\"middleBarOption\" style=\"height: 400px\"></div>"

/***/ }),

/***/ "./src/assets/examples/chart/echart-bar/echart-bar.component.scss":
/*!************************************************************************!*\
  !*** ./src/assets/examples/chart/echart-bar/echart-bar.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL2NoYXJ0L2VjaGFydC1iYXIvZWNoYXJ0LWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/chart/echart-bar/echart-bar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/examples/chart/echart-bar/echart-bar.component.ts ***!
  \**********************************************************************/
/*! exports provided: EchartBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartBarComponent", function() { return EchartBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartBarComponent = /** @class */ (function () {
    function EchartBarComponent() {
        this.dataAxis = [
            "mango",
            "banana",
            "jack",
            "sparrow",
            "clara",
            "smith",
            "john",
            "doe",
            "naem",
            "hridoy",
            "ricky",
            "fahim",
            "sandy",
            "savage",
            "slow",
            "snow",
            "kashmir",
            "great wall",
            "godzilla",
            "genious"
        ];
        this.data = [
            220,
            182,
            191,
            234,
            290,
            330,
            310,
            123,
            442,
            321,
            90,
            149,
            210,
            122,
            133,
            334,
            198,
            123,
            125,
            220
        ];
        this.yMax = 500;
        this.dataShadow = [];
        this.zoomBarOptions = {
            // title: {
            //   text: "Bar Chart with Zoom Option",
            //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
            // },
            color: ['rgba(15, 21, 77, 0.8)', 'rgba(246,107,191, 0.8)', '#03A9F4', '#FFC107', 'rgba(15, 21, 77, 0.6)', '#9C27BB', 'rgba(15, 21, 77, 0.4)', 'rgba(146, 213, 249, 0.8)', '#9C27B0'],
            xAxis: {
                data: this.dataAxis,
                axisLabel: {
                    inside: true,
                    position: 'insideBottom',
                    align: 'left',
                    rotate: 90,
                    textStyle: {
                        color: "#fff"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: "#999"
                    }
                }
            },
            dataZoom: [
                {
                    type: "inside"
                }
            ],
            series: [
                {
                    // For shadow
                    type: "bar",
                    itemStyle: {
                        normal: { color: "rgba(0,0,0,0.05)" }
                    },
                    barGap: "-100%",
                    barCategoryGap: "40%",
                    data: this.dataShadow,
                    animation: false
                },
                {
                    type: "bar",
                    itemStyle: {
                        normal: {
                            color: new echarts__WEBPACK_IMPORTED_MODULE_1__["graphic"].LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: "#83bff6" },
                                { offset: 0.5, color: "#188df0" },
                                { offset: 1, color: "#03A9F4" }
                            ])
                        },
                        emphasis: {
                            color: new echarts__WEBPACK_IMPORTED_MODULE_1__["graphic"].LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: "#2378f7" },
                                { offset: 0.7, color: "#2378f7" },
                                { offset: 1, color: "#83bff6" }
                            ])
                        }
                    },
                    data: this.data
                }
            ]
        };
        // ================================================
        this.labelOption = {
            normal: {
                show: true,
                position: 'insideBottom',
                distance: 5,
                align: 'left',
                verticalAlign: 'middle',
                rotate: 90,
                formatter: '{c}  {name|{a}}',
                fontSize: 16,
                rich: {
                    name: {
                        textBorderColor: '#fff'
                    }
                }
            }
        };
        this.clusteredVBarOptions = {
            color: ['rgba(15, 21, 77, 0.8)', 'rgba(246,107,191, 0.8)', '#03A9F4', '#FFC107', 'rgba(15, 21, 77, 0.6)', '#9C27BB', 'rgba(15, 21, 77, 0.4)', 'rgba(146, 213, 249, 0.8)', '#9C27B0'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Forest', 'Steppe', 'Desert', 'Wetland']
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    axisTick: { show: false },
                    data: ['2012', '2013', '2014', '2015', '2016']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Forest',
                    type: 'bar',
                    barGap: 0,
                    label: this.labelOption,
                    data: [320, 332, 301, 334, 390]
                },
                {
                    name: 'Steppe',
                    type: 'bar',
                    label: this.labelOption,
                    data: [220, 182, 191, 234, 290]
                },
                {
                    name: 'Desert',
                    type: 'bar',
                    label: this.labelOption,
                    data: [150, 232, 201, 154, 190]
                },
                {
                    name: 'Wetland',
                    type: 'bar',
                    label: this.labelOption,
                    data: [98, 77, 101, 99, 40]
                }
            ]
        };
        // ====================================================
        this.middleBarOption = {
            color: ['rgba(15, 21, 77, 0.8)', 'rgba(15, 21, 77, 0.5)', '#03A9F4', '#FFC107', 'rgba(15, 21, 77, 0.6)', '#9C27BB', 'rgba(15, 21, 77, 0.4)', 'rgba(146, 213, 249, 0.8)', '#9C27B0'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Mango', 'Banana', 'Litchi']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'value'
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    axisTick: { show: false },
                    data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007']
                }
            ],
            series: [
                {
                    name: 'Fruits',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [200, 170, 240, 244, 200, 220, 210]
                },
                {
                    name: 'Production',
                    type: 'bar',
                    stack: 'Loss',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data: [320, 302, 341, 374, 390, 450, 420]
                },
                {
                    name: 'Loss',
                    type: 'bar',
                    stack: 'Loss',
                    label: {
                        normal: {
                            show: true,
                            position: 'left'
                        }
                    },
                    data: [-120, -132, -101, -134, -190, -230, -210]
                }
            ]
        };
        // ================ multiple series basic char =============================
        this.multipleSeriesBasicOptions = {
            color: ['rgba(15, 21, 77, 0.8)', 'rgba(15, 21, 77, 0.5)', '#03A9F4', '#FFC107', 'rgba(15, 21, 77, 0.8)', 'rgba(171,42,205,0.7)', 'rgba(15, 21, 77, 0.4)', 'rgba(146, 213, 249, 0.8)', 'rgba(255,212,7,0.7)'],
            legend: {
                padding: [20, 0, 0, 0]
            },
            tooltip: {},
            dataset: {
                source: [
                    ['product', '2012', '2013', '2014', '2015'],
                    ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
                    ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
                    ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
                ]
            },
            xAxis: [
                { type: 'category', gridIndex: 0 },
                { type: 'category', gridIndex: 1 }
            ],
            yAxis: [
                { gridIndex: 0 },
                { gridIndex: 1 }
            ],
            grid: [
                { bottom: '55%' },
                { top: '55%' }
            ],
            series: [
                // These series are in the first grid.
                { type: 'bar', seriesLayoutBy: 'row' },
                { type: 'bar', seriesLayoutBy: 'row' },
                { type: 'bar', seriesLayoutBy: 'row' },
                // These series are in the second grid.
                { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
                { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
                { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
                { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
            ]
        };
    }
    EchartBarComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.data.length; i++) {
            this.dataShadow.push(this.yMax);
        }
    };
    EchartBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-echart-bar",
            template: __webpack_require__(/*! ./echart-bar.component.html */ "./src/assets/examples/chart/echart-bar/echart-bar.component.html"),
            styles: [__webpack_require__(/*! ./echart-bar.component.scss */ "./src/assets/examples/chart/echart-bar/echart-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EchartBarComponent);
    return EchartBarComponent;
}());



/***/ }),

/***/ "./src/assets/examples/chart/echart-heatmap/echart-heatmap.component.html":
/*!********************************************************************************!*\
  !*** ./src/assets/examples/chart/echart-heatmap/echart-heatmap.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mb-16\">Heatmap on Cartesian</h3>\n<div echarts [options]=\"heatMapOptions\" style=\"height: 400px\"></div>\n<div class=\"m-24\">\n    <mat-divider></mat-divider>\n</div>\n\n<h3 class=\"mb-16\">Heatmap - 2w Data</h3>\n<div echarts [options]=\"heatMap2wOptions\" style=\"height: 600px\"></div>"

/***/ }),

/***/ "./src/assets/examples/chart/echart-heatmap/echart-heatmap.component.scss":
/*!********************************************************************************!*\
  !*** ./src/assets/examples/chart/echart-heatmap/echart-heatmap.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fsdfsdfsd {\n  color: #c23531;\n  color: #2f4554 \";\\a     #61a0a8;color:#d48265;color:#91c7ae;color:#749f83;color:#ca8622;color:#bda29a;color:#6e7074\", \"#546570\", \"#c4ccd3\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnVwYW0vRGVza3RvcC9FZ3JldC12Ny4yLjEzL2Z1bGwvc3JjL2Fzc2V0cy9leGFtcGxlcy9jaGFydC9lY2hhcnQtaGVhdG1hcC9lY2hhcnQtaGVhdG1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7RUFDZCwwSUFDa0gsRUFBQSIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL2NoYXJ0L2VjaGFydC1oZWF0bWFwL2VjaGFydC1oZWF0bWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZzZGZzZGZzZCB7XG4gICAgXG4gICAgY29sb3I6ICNjMjM1MzE7XG4gICAgY29sb3I6IzJmNDU1NCc7XG4gICAgIzYxYTBhODtjb2xvcjojZDQ4MjY1O2NvbG9yOiM5MWM3YWU7Y29sb3I6Izc0OWY4Mztjb2xvcjojY2E4NjIyO2NvbG9yOiNiZGEyOWE7Y29sb3I6IzZlNzA3NCcsICcjNTQ2NTcwJywgJyNjNGNjZDMnXG59Il19 */"

/***/ }),

/***/ "./src/assets/examples/chart/echart-heatmap/echart-heatmap.component.ts":
/*!******************************************************************************!*\
  !*** ./src/assets/examples/chart/echart-heatmap/echart-heatmap.component.ts ***!
  \******************************************************************************/
/*! exports provided: EchartHeatmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartHeatmapComponent", function() { return EchartHeatmapComponent; });
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

var EchartHeatmapComponent = /** @class */ (function () {
    function EchartHeatmapComponent() {
        this.hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
            '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p',
            '6p', '7p', '8p', '9p', '10p', '11p'];
        this.days = ['Saturday', 'Friday', 'Thursday',
            'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
        this.data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];
    }
    EchartHeatmapComponent.prototype.ngOnInit = function () {
        this.data = this.data.map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });
        this.heatMapOptions = {
            tooltip: {
                position: 'top'
            },
            animation: false,
            grid: {
                height: '70%',
                // width: '90%',
                y: '10%'
            },
            xAxis: {
                type: 'category',
                data: this.hours,
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                type: 'category',
                data: this.days,
                splitArea: {
                    show: true
                }
            },
            visualMap: {
                min: 0,
                max: 10,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '0'
            },
            series: [{
                    name: 'Punch Card',
                    type: 'heatmap',
                    data: this.data,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
        };
        this.loadHeatMap2wData();
    };
    // ======================= heatmap 2w data ==========================
    EchartHeatmapComponent.prototype.loadHeatMap2wData = function () {
        var noise = this.getNoiseHelper();
        var xData = [];
        var yData = [];
        noise.seed(Math.random());
        function generateData(theta, min, max) {
            var data = [];
            for (var i = 0; i <= 200; i++) {
                for (var j = 0; j <= 100; j++) {
                    // var x = (max - min) * i / 200 + min;
                    // var y = (max - min) * j / 100 + min;
                    data.push([i, j, noise.perlin2(i / 40, j / 20) + 0.5]);
                    // data.push([i, j, normalDist(theta, x) * normalDist(theta, y)]);
                }
                xData.push(i);
            }
            for (var j = 0; j < 100; j++) {
                yData.push(j);
            }
            return data;
        }
        var data = generateData(2, -5, 5);
        this.heatMap2wOptions = {
            tooltip: {},
            grid: {
                height: '100%'
            },
            xAxis: {
                type: 'category',
                data: xData
            },
            yAxis: {
                type: 'category',
                data: yData
            },
            visualMap: {
                min: 0,
                max: 1,
                calculable: true,
                realtime: false,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
            series: [{
                    name: 'Gaussian',
                    type: 'heatmap',
                    data: data,
                    itemStyle: {
                        emphasis: {
                            borderColor: '#333',
                            borderWidth: 1
                        }
                    },
                    progressive: 1000,
                    animation: false
                }]
        };
    };
    ///////////////////////////////////////////////////////////////////////////
    // Simplex and perlin noise helper from https://github.com/josephg/noisejs
    ///////////////////////////////////////////////////////////////////////////
    EchartHeatmapComponent.prototype.getNoiseHelper = function (global) {
        var module = {};
        function Grad(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        Grad.prototype.dot2 = function (x, y) {
            return this.x * x + this.y * y;
        };
        Grad.prototype.dot3 = function (x, y, z) {
            return this.x * x + this.y * y + this.z * z;
        };
        var grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0),
            new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1),
            new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];
        var p = [151, 160, 137, 91, 90, 15,
            131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
            190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
            88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
            77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
            102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
            135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
            5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
            223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
            129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
            251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
            49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
            138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
        // To remove the need for index wrapping, double the permutation table length
        var perm = new Array(512);
        var gradP = new Array(512);
        // This isn't a very good seeding function, but it works ok. It supports 2^16
        // different seed values. Write something better if you need more seeds.
        module.seed = function (seed) {
            if (seed > 0 && seed < 1) {
                // Scale the seed out
                seed *= 65536;
            }
            seed = Math.floor(seed);
            if (seed < 256) {
                seed |= seed << 8;
            }
            for (var i = 0; i < 256; i++) {
                var v;
                if (i & 1) {
                    v = p[i] ^ (seed & 255);
                }
                else {
                    v = p[i] ^ ((seed >> 8) & 255);
                }
                perm[i] = perm[i + 256] = v;
                gradP[i] = gradP[i + 256] = grad3[v % 12];
            }
        };
        module.seed(0);
        /*
        for(var i=0; i<256; i++) {
          perm[i] = perm[i + 256] = p[i];
          gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
        }*/
        // Skewing and unskewing factors for 2, 3, and 4 dimensions
        var F2 = 0.5 * (Math.sqrt(3) - 1);
        var G2 = (3 - Math.sqrt(3)) / 6;
        var F3 = 1 / 3;
        var G3 = 1 / 6;
        // 2D simplex noise
        module.simplex2 = function (xin, yin) {
            var n0, n1, n2; // Noise contributions from the three corners
            // Skew the input space to determine which simplex cell we're in
            var s = (xin + yin) * F2; // Hairy factor for 2D
            var i = Math.floor(xin + s);
            var j = Math.floor(yin + s);
            var t = (i + j) * G2;
            var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
            var y0 = yin - j + t;
            // For the 2D case, the simplex shape is an equilateral triangle.
            // Determine which simplex we are in.
            var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
            if (x0 > y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
                i1 = 1;
                j1 = 0;
            }
            else { // upper triangle, YX order: (0,0)->(0,1)->(1,1)
                i1 = 0;
                j1 = 1;
            }
            // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
            // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
            // c = (3-sqrt(3))/6
            var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
            var y1 = y0 - j1 + G2;
            var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
            var y2 = y0 - 1 + 2 * G2;
            // Work out the hashed gradient indices of the three simplex corners
            i &= 255;
            j &= 255;
            var gi0 = gradP[i + perm[j]];
            var gi1 = gradP[i + i1 + perm[j + j1]];
            var gi2 = gradP[i + 1 + perm[j + 1]];
            // Calculate the contribution from the three corners
            var t0 = 0.5 - x0 * x0 - y0 * y0;
            if (t0 < 0) {
                n0 = 0;
            }
            else {
                t0 *= t0;
                n0 = t0 * t0 * gi0.dot2(x0, y0); // (x,y) of grad3 used for 2D gradient
            }
            var t1 = 0.5 - x1 * x1 - y1 * y1;
            if (t1 < 0) {
                n1 = 0;
            }
            else {
                t1 *= t1;
                n1 = t1 * t1 * gi1.dot2(x1, y1);
            }
            var t2 = 0.5 - x2 * x2 - y2 * y2;
            if (t2 < 0) {
                n2 = 0;
            }
            else {
                t2 *= t2;
                n2 = t2 * t2 * gi2.dot2(x2, y2);
            }
            // Add contributions from each corner to get the final noise value.
            // The result is scaled to return values in the interval [-1,1].
            return 70 * (n0 + n1 + n2);
        };
        // 3D simplex noise
        module.simplex3 = function (xin, yin, zin) {
            var n0, n1, n2, n3; // Noise contributions from the four corners
            // Skew the input space to determine which simplex cell we're in
            var s = (xin + yin + zin) * F3; // Hairy factor for 2D
            var i = Math.floor(xin + s);
            var j = Math.floor(yin + s);
            var k = Math.floor(zin + s);
            var t = (i + j + k) * G3;
            var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
            var y0 = yin - j + t;
            var z0 = zin - k + t;
            // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
            // Determine which simplex we are in.
            var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
            var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
            if (x0 >= y0) {
                if (y0 >= z0) {
                    i1 = 1;
                    j1 = 0;
                    k1 = 0;
                    i2 = 1;
                    j2 = 1;
                    k2 = 0;
                }
                else if (x0 >= z0) {
                    i1 = 1;
                    j1 = 0;
                    k1 = 0;
                    i2 = 1;
                    j2 = 0;
                    k2 = 1;
                }
                else {
                    i1 = 0;
                    j1 = 0;
                    k1 = 1;
                    i2 = 1;
                    j2 = 0;
                    k2 = 1;
                }
            }
            else {
                if (y0 < z0) {
                    i1 = 0;
                    j1 = 0;
                    k1 = 1;
                    i2 = 0;
                    j2 = 1;
                    k2 = 1;
                }
                else if (x0 < z0) {
                    i1 = 0;
                    j1 = 1;
                    k1 = 0;
                    i2 = 0;
                    j2 = 1;
                    k2 = 1;
                }
                else {
                    i1 = 0;
                    j1 = 1;
                    k1 = 0;
                    i2 = 1;
                    j2 = 1;
                    k2 = 0;
                }
            }
            // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
            // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
            // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
            // c = 1/6.
            var x1 = x0 - i1 + G3; // Offsets for second corner
            var y1 = y0 - j1 + G3;
            var z1 = z0 - k1 + G3;
            var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
            var y2 = y0 - j2 + 2 * G3;
            var z2 = z0 - k2 + 2 * G3;
            var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
            var y3 = y0 - 1 + 3 * G3;
            var z3 = z0 - 1 + 3 * G3;
            // Work out the hashed gradient indices of the four simplex corners
            i &= 255;
            j &= 255;
            k &= 255;
            var gi0 = gradP[i + perm[j + perm[k]]];
            var gi1 = gradP[i + i1 + perm[j + j1 + perm[k + k1]]];
            var gi2 = gradP[i + i2 + perm[j + j2 + perm[k + k2]]];
            var gi3 = gradP[i + 1 + perm[j + 1 + perm[k + 1]]];
            // Calculate the contribution from the four corners
            var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
            if (t0 < 0) {
                n0 = 0;
            }
            else {
                t0 *= t0;
                n0 = t0 * t0 * gi0.dot3(x0, y0, z0); // (x,y) of grad3 used for 2D gradient
            }
            var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
            if (t1 < 0) {
                n1 = 0;
            }
            else {
                t1 *= t1;
                n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
            }
            var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
            if (t2 < 0) {
                n2 = 0;
            }
            else {
                t2 *= t2;
                n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
            }
            var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
            if (t3 < 0) {
                n3 = 0;
            }
            else {
                t3 *= t3;
                n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
            }
            // Add contributions from each corner to get the final noise value.
            // The result is scaled to return values in the interval [-1,1].
            return 32 * (n0 + n1 + n2 + n3);
        };
        // ##### Perlin noise stuff
        function fade(t) {
            return t * t * t * (t * (t * 6 - 15) + 10);
        }
        function lerp(a, b, t) {
            return (1 - t) * a + t * b;
        }
        // 2D Perlin Noise
        module.perlin2 = function (x, y) {
            // Find unit grid cell containing point
            var X = Math.floor(x), Y = Math.floor(y);
            // Get relative xy coordinates of point within that cell
            x = x - X;
            y = y - Y;
            // Wrap the integer cells at 255 (smaller integer period can be introduced here)
            X = X & 255;
            Y = Y & 255;
            // Calculate noise contributions from each of the four corners
            var n00 = gradP[X + perm[Y]].dot2(x, y);
            var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
            var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
            var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
            // Compute the fade curve value for x
            var u = fade(x);
            // Interpolate the four results
            return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
        };
        // 3D Perlin Noise
        module.perlin3 = function (x, y, z) {
            // Find unit grid cell containing point
            var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
            // Get relative xyz coordinates of point within that cell
            x = x - X;
            y = y - Y;
            z = z - Z;
            // Wrap the integer cells at 255 (smaller integer period can be introduced here)
            X = X & 255;
            Y = Y & 255;
            Z = Z & 255;
            // Calculate noise contributions from each of the eight corners
            var n000 = gradP[X + perm[Y + perm[Z]]].dot3(x, y, z);
            var n001 = gradP[X + perm[Y + perm[Z + 1]]].dot3(x, y, z - 1);
            var n010 = gradP[X + perm[Y + 1 + perm[Z]]].dot3(x, y - 1, z);
            var n011 = gradP[X + perm[Y + 1 + perm[Z + 1]]].dot3(x, y - 1, z - 1);
            var n100 = gradP[X + 1 + perm[Y + perm[Z]]].dot3(x - 1, y, z);
            var n101 = gradP[X + 1 + perm[Y + perm[Z + 1]]].dot3(x - 1, y, z - 1);
            var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z]]].dot3(x - 1, y - 1, z);
            var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z + 1]]].dot3(x - 1, y - 1, z - 1);
            // Compute the fade curve value for x, y, z
            var u = fade(x);
            var v = fade(y);
            var w = fade(z);
            // Interpolate
            return lerp(lerp(lerp(n000, n100, u), lerp(n001, n101, u), w), lerp(lerp(n010, n110, u), lerp(n011, n111, u), w), v);
        };
        return module;
    };
    EchartHeatmapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-echart-heatmap',
            template: __webpack_require__(/*! ./echart-heatmap.component.html */ "./src/assets/examples/chart/echart-heatmap/echart-heatmap.component.html"),
            styles: [__webpack_require__(/*! ./echart-heatmap.component.scss */ "./src/assets/examples/chart/echart-heatmap/echart-heatmap.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EchartHeatmapComponent);
    return EchartHeatmapComponent;
}());



/***/ }),

/***/ "./src/assets/examples/chart/echart-pie/echart-pie.component.html":
/*!************************************************************************!*\
  !*** ./src/assets/examples/chart/echart-pie/echart-pie.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mb-16\">Basic Pie Chart</h3>\n<div echarts [options]=\"pieOptions\" style=\"height: 400px\"></div>\n<div class=\"m-24\"><mat-divider></mat-divider></div>\n\n<h3 class=\"mb-16\">Nightingale's Rose Diagram</h3>\n<div echarts [options]=\"customPieOptions\" style=\"height: 400px\"></div>\n<div class=\"m-24\"><mat-divider></mat-divider></div>\n\n<h3 class=\"mb-16\">Doughnut Pie</h3>\n<div echarts [options]=\"doughNutPieOptions\" style=\"height: 400px\"></div>\n<div class=\"m-24\"><mat-divider></mat-divider></div>\n\n<h3 class=\"mb-16\">Nested Pie</h3>\n<div echarts [options]=\"nestedPieOptions\" style=\"height: 400px\"></div>"

/***/ }),

/***/ "./src/assets/examples/chart/echart-pie/echart-pie.component.scss":
/*!************************************************************************!*\
  !*** ./src/assets/examples/chart/echart-pie/echart-pie.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL2NoYXJ0L2VjaGFydC1waWUvZWNoYXJ0LXBpZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/assets/examples/chart/echart-pie/echart-pie.component.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/examples/chart/echart-pie/echart-pie.component.ts ***!
  \**********************************************************************/
/*! exports provided: EchartPieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartPieComponent", function() { return EchartPieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EchartPieComponent = /** @class */ (function () {
    function EchartPieComponent() {
        this.pieOptions = {
            backgroundColor: '#ffffff',
            // title: {
            //     text: 'Basic Pie',
            //     left: 'center',
            //     top: 10,
            //     textStyle: {
            //         color: '#000000',
            //     }
            // },
            grid: {
                left: "3%",
                right: "4%",
                top: "3%",
                containLabel: true
            },
            color: [
                "rgba(15, 21, 77, .6)",
                // "rgba(244, 67, 54, .7)",
                "rgba(15, 21, 77, 0.7)",
                "rgba(15, 21, 77, 0.8)"
            ],
            tooltip: {
                show: false,
                trigger: "item",
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            xAxis: [
                {
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: "Sessions",
                    type: "pie",
                    radius: ["0%", "65%"],
                    center: ["50%", "50%"],
                    avoidLabelOverlap: false,
                    hoverOffset: 5,
                    stillShowZeroSum: false,
                    label: {
                        normal: {
                            show: false,
                            // position: "center",
                            textStyle: {
                                fontSize: "13",
                                fontWeight: "normal"
                            },
                            formatter: "{a}"
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: "15",
                                fontWeight: "normal",
                                color: "rgba(15, 21, 77, 1)"
                            },
                            formatter: "{b} \n{c} ({d}%)"
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 335,
                            name: "Direct"
                        },
                        {
                            value: 310,
                            name: "Search Eng."
                        },
                        { value: 148, name: "Social" }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                }
            ]
        };
        this.doughNutPieOptions = {
            backgroundColor: '#ffffff',
            // title: {
            //     text: 'Doughnut Pie',
            //     left: 'center',
            //     top: 20,
            //     textStyle: {
            //         color: '#000000'
            //     }
            // },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            color: [
                "rgba(15, 21, 77, .6)",
                // "rgba(244, 67, 54, .7)",
                "rgba(15, 21, 77, 0.7)",
                "rgba(15, 21, 77, 0.8)"
            ],
            tooltip: {
                show: false,
                trigger: "item",
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            xAxis: [
                {
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: "Sessions",
                    type: "pie",
                    radius: ["45%", "65%"],
                    center: ["50%", "50%"],
                    avoidLabelOverlap: false,
                    hoverOffset: 5,
                    stillShowZeroSum: false,
                    label: {
                        normal: {
                            show: false,
                            // position: "center",
                            textStyle: {
                                fontSize: "13",
                                fontWeight: "normal"
                            },
                            formatter: "{a}"
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: "15",
                                fontWeight: "normal",
                                color: "rgba(15, 21, 77, 1)"
                            },
                            formatter: "{b} \n{c} ({d}%)"
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 335,
                            name: "Direct"
                        },
                        {
                            value: 310,
                            name: "Search Eng."
                        },
                        { value: 148, name: "Social" }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                }
            ]
        };
        this.customPieOptions = {
            backgroundColor: '#ffffff',
            color: ['#3CB2EF', '#71F6F9', '#FFDB5C', '#FFAE8B', '#E062AE', '#2C3162', '#6F7394', '#FFFFFF', '#F44336'],
            // title: {
            //     text: 'Customized Pie',
            //     left: 'center',
            //     top: 20,
            //     textStyle: {
            //         color: '#ccc'
            //     }
            // },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: 'Production',
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: 'Potato' },
                        { value: 310, name: 'Mango' },
                        { value: 274, name: 'Banana' },
                        { value: 235, name: 'Strawberry' },
                        { value: 400, name: 'Jackfruit' }
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(0 , 0, 0, 0.87)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(0 , 0, 0, 0.87)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#2C3162',
                        }
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };
        this.nestedPieOptions = {
            //   title: {
            //     text: 'Nested Pie',
            //     left: 'center',
            //     top: 0,
            //     textStyle: {
            //         color: '#000000'
            //     }
            // },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['rgba(15, 21, 77, 0.8)', 'rgba(246,107,191, 0.8)', '#03A9F4', '#FFC107', 'rgba(15, 21, 77, 0.6)', '#9C27BB', 'rgba(15, 21, 77, 0.4)', 'rgba(146, 213, 249, 0.8)', '#9C27B0'],
            legend: {
                textStyle: {
                    color: 'rgba(0,0,0,0.87)'
                },
                orient: 'horizontal',
                x: 'left',
                data: ['Banana', 'Mango', 'Jackfruit', 'Pineapple', 'Strawberry', 'Respberry', 'Blackberry', 'Litchi', 'Guava', 'Watermelon']
            },
            series: [
                {
                    name: 'Inner Pie',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data: [
                        { value: 335, name: 'Banana', selected: true },
                        { value: 679, name: 'Mango' },
                        { value: 1548, name: 'Jackfrui' }
                    ],
                    itemStyle: {
                        normal: {
                        // shadowBlur: 200,
                        // shadowColor: 'rgba(15, 21, 77, 0.5)'
                        }
                    },
                },
                {
                    name: 'Outer Pie',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: 'rgba(0,0,0,0.67)',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: 'rgba(0,0,0,0.67)',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: 'rgba(0,0,0,0.67)',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#ccc',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        { value: 335, name: 'Orange' },
                        { value: 310, name: 'Banana' },
                        { value: 234, name: 'Litchi' },
                        { value: 135, name: 'Dragon fruit' },
                        { value: 1048, name: 'Pineapple' },
                        { value: 251, name: 'Mango' },
                        { value: 147, name: 'Apricot' },
                        { value: 102, name: 'Avocado' }
                    ],
                    itemStyle: {
                        normal: {
                        // shadowBlur: 200,
                        // shadowColor: 'rgba(15, 21, 77, 0.5)'
                        }
                    },
                }
            ]
        };
    }
    EchartPieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-echart-pie',
            template: __webpack_require__(/*! ./echart-pie.component.html */ "./src/assets/examples/chart/echart-pie/echart-pie.component.html"),
            styles: [__webpack_require__(/*! ./echart-pie.component.scss */ "./src/assets/examples/chart/echart-pie/echart-pie.component.scss")]
        })
    ], EchartPieComponent);
    return EchartPieComponent;
}());



/***/ }),

/***/ "./src/assets/examples/chart/echart-radar/echart-radar.component.html":
/*!****************************************************************************!*\
  !*** ./src/assets/examples/chart/echart-radar/echart-radar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mb-16\">Proportion of Browsers</h3>\n<div echarts [options]=\"fancyRadar\" style=\"height: 400px\"></div>\n<div class=\"m-24\">\n    <mat-divider></mat-divider>\n</div>\n\n<h3 class=\"mb-16\">AQI Radar Chart</h3>\n<div echarts [options]=\"aquiRadar\" style=\"height: 600px\"></div>"

/***/ }),

/***/ "./src/assets/examples/chart/echart-radar/echart-radar.component.scss":
/*!****************************************************************************!*\
  !*** ./src/assets/examples/chart/echart-radar/echart-radar.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXNzZXRzL2V4YW1wbGVzL2NoYXJ0L2VjaGFydC1yYWRhci9lY2hhcnQtcmFkYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/assets/examples/chart/echart-radar/echart-radar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/assets/examples/chart/echart-radar/echart-radar.component.ts ***!
  \**************************************************************************/
/*! exports provided: EchartRadarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartRadarComponent", function() { return EchartRadarComponent; });
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

var EchartRadarComponent = /** @class */ (function () {
    function EchartRadarComponent() {
    }
    EchartRadarComponent.prototype.ngOnInit = function () {
        this.loadAQIRadarData();
        this.loadFancyRadarData();
    };
    EchartRadarComponent.prototype.loadFancyRadarData = function () {
        this.fancyRadar = {
            // title: {
            //     text: 'Proportion Radar',
            //     subtext: 'Proportion of Browsers',
            //     top: 10,
            //     left: 10
            // },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(0,0,250,0.2)'
            },
            legend: {
                type: 'scroll',
                bottom: 10,
                data: (function () {
                    var list = [];
                    for (var i = 1; i <= 28; i++) {
                        list.push(i + 2000 + '');
                    }
                    return list;
                })()
            },
            visualMap: {
                top: 'middle',
                right: 10,
                color: ['rgba(15, 21, 77, 0.8)', '#03A9F4'],
                calculable: true
            },
            radar: {
                name: {
                    textStyle: {
                        color: 'rgba(0,0,0,0.87)'
                    }
                },
                indicator: [
                    { text: 'IE8-', max: 400 },
                    { text: 'IE9+', max: 400 },
                    { text: 'Safari', max: 400 },
                    { text: 'Firefox', max: 400 },
                    { text: 'Chrome', max: 400 }
                ]
            },
            series: (function () {
                var series = [];
                for (var i = 1; i <= 28; i++) {
                    series.push({
                        name: 'Hridoy',
                        type: 'radar',
                        symbol: 'none',
                        lineStyle: {
                            width: 1
                        },
                        emphasis: {
                            areaStyle: {
                                color: '#FFC107'
                            }
                        },
                        data: [
                            {
                                value: [
                                    (40 - i) * 10,
                                    (38 - i) * 4 + 60,
                                    i * 5 + 10,
                                    i * 9,
                                    i * i / 2
                                ],
                                name: i + 2000 + ''
                            }
                        ]
                    });
                }
                return series;
            })()
        };
    };
    EchartRadarComponent.prototype.loadAQIRadarData = function () {
        // Schema:
        // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
        var dataBJ = [
            [55, 9, 56, 0.46, 18, 6, 1],
            [25, 11, 21, 0.65, 34, 9, 2],
            [56, 7, 63, 0.3, 14, 5, 3],
            [33, 7, 29, 0.33, 16, 6, 4],
            [42, 24, 44, 0.76, 40, 16, 5],
            [82, 58, 90, 1.77, 68, 33, 6],
            [74, 49, 77, 1.46, 48, 27, 7],
            [78, 55, 80, 1.29, 59, 29, 8],
            [267, 216, 280, 4.8, 108, 64, 9],
            [185, 127, 216, 2.52, 61, 27, 10],
            [39, 19, 38, 0.57, 31, 15, 11],
            [41, 11, 40, 0.43, 21, 7, 12],
            [64, 38, 74, 1.04, 46, 22, 13],
            [108, 79, 120, 1.7, 75, 41, 14],
            [108, 63, 116, 1.48, 44, 26, 15],
            [33, 6, 29, 0.34, 13, 5, 16],
            [94, 66, 110, 1.54, 62, 31, 17],
            [186, 142, 192, 3.88, 93, 79, 18],
            [57, 31, 54, 0.96, 32, 14, 19],
            [22, 8, 17, 0.48, 23, 10, 20],
            [39, 15, 36, 0.61, 29, 13, 21],
            [94, 69, 114, 2.08, 73, 39, 22],
            [99, 73, 110, 2.43, 76, 48, 23],
            [31, 12, 30, 0.5, 32, 16, 24],
            [42, 27, 43, 1, 53, 22, 25],
            [154, 117, 157, 3.05, 92, 58, 26],
            [234, 185, 230, 4.09, 123, 69, 27],
            [160, 120, 186, 2.77, 91, 50, 28],
            [134, 96, 165, 2.76, 83, 41, 29],
            [52, 24, 60, 1.03, 50, 21, 30],
            [46, 5, 49, 0.28, 10, 6, 31]
        ];
        var dataGZ = [
            [26, 37, 27, 1.163, 27, 13, 1],
            [85, 62, 71, 1.195, 60, 8, 2],
            [78, 38, 74, 1.363, 37, 7, 3],
            [21, 21, 36, 0.634, 40, 9, 4],
            [41, 42, 46, 0.915, 81, 13, 5],
            [56, 52, 69, 1.067, 92, 16, 6],
            [64, 30, 28, 0.924, 51, 2, 7],
            [55, 48, 74, 1.236, 75, 26, 8],
            [76, 85, 113, 1.237, 114, 27, 9],
            [91, 81, 104, 1.041, 56, 40, 10],
            [84, 39, 60, 0.964, 25, 11, 11],
            [64, 51, 101, 0.862, 58, 23, 12],
            [70, 69, 120, 1.198, 65, 36, 13],
            [77, 105, 178, 2.549, 64, 16, 14],
            [109, 68, 87, 0.996, 74, 29, 15],
            [73, 68, 97, 0.905, 51, 34, 16],
            [54, 27, 47, 0.592, 53, 12, 17],
            [51, 61, 97, 0.811, 65, 19, 18],
            [91, 71, 121, 1.374, 43, 18, 19],
            [73, 102, 182, 2.787, 44, 19, 20],
            [73, 50, 76, 0.717, 31, 20, 21],
            [84, 94, 140, 2.238, 68, 18, 22],
            [93, 77, 104, 1.165, 53, 7, 23],
            [99, 130, 227, 3.97, 55, 15, 24],
            [146, 84, 139, 1.094, 40, 17, 25],
            [113, 108, 137, 1.481, 48, 15, 26],
            [81, 48, 62, 1.619, 26, 3, 27],
            [56, 48, 68, 1.336, 37, 9, 28],
            [82, 92, 174, 3.29, 0, 13, 29],
            [106, 116, 188, 3.628, 101, 16, 30],
            [118, 50, 0, 1.383, 76, 11, 31]
        ];
        var dataSH = [
            [91, 45, 125, 0.82, 34, 23, 1],
            [65, 27, 78, 0.86, 45, 29, 2],
            [83, 60, 84, 1.09, 73, 27, 3],
            [109, 81, 121, 1.28, 68, 51, 4],
            [106, 77, 114, 1.07, 55, 51, 5],
            [109, 81, 121, 1.28, 68, 51, 6],
            [106, 77, 114, 1.07, 55, 51, 7],
            [89, 65, 78, 0.86, 51, 26, 8],
            [53, 33, 47, 0.64, 50, 17, 9],
            [80, 55, 80, 1.01, 75, 24, 10],
            [117, 81, 124, 1.03, 45, 24, 11],
            [99, 71, 142, 1.1, 62, 42, 12],
            [95, 69, 130, 1.28, 74, 50, 13],
            [116, 87, 131, 1.47, 84, 40, 14],
            [108, 80, 121, 1.3, 85, 37, 15],
            [134, 83, 167, 1.16, 57, 43, 16],
            [79, 43, 107, 1.05, 59, 37, 17],
            [71, 46, 89, 0.86, 64, 25, 18],
            [97, 71, 113, 1.17, 88, 31, 19],
            [84, 57, 91, 0.85, 55, 31, 20],
            [87, 63, 101, 0.9, 56, 41, 21],
            [104, 77, 119, 1.09, 73, 48, 22],
            [87, 62, 100, 1, 72, 28, 23],
            [168, 128, 172, 1.49, 97, 56, 24],
            [65, 45, 51, 0.74, 39, 17, 25],
            [39, 24, 38, 0.61, 47, 17, 26],
            [39, 24, 39, 0.59, 50, 19, 27],
            [93, 68, 96, 1.05, 79, 29, 28],
            [188, 143, 197, 1.66, 99, 51, 29],
            [174, 131, 174, 1.55, 108, 50, 30],
            [187, 143, 201, 1.39, 89, 53, 31]
        ];
        var lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5,
                color: "rgba(15, 21, 77, 0.8)"
            }
        };
        this.aquiRadar = {
            backgroundColor: '#ffffff',
            //   title: {
            //       text: 'AQI - Radar',
            //       left: 'center',
            //       textStyle: {
            //           color: '#eee'
            //       }
            //   },
            legend: {
                bottom: 5,
                data: ['Mango', 'Banana', 'Litchi'],
                itemGap: 20,
                textStyle: {
                    color: "rgba(0,0,0,, 0.87)",
                    fontSize: 14
                },
                selectedMode: 'single'
            },
            // visualMap: {
            //     show: true,
            //     min: 0,
            //     max: 20,
            //     dimension: 6,
            //     inRange: {
            //         colorLightness: [0.5, 0.8]
            //     }
            // },
            radar: {
                indicator: [
                    { name: 'AQI', max: 300 },
                    { name: 'PM2.5', max: 250 },
                    { name: 'PM10', max: 300 },
                    { name: 'CO', max: 5 },
                    { name: 'NO2', max: 200 },
                    { name: 'SO2', max: 100 }
                ],
                shape: 'circle',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: 'rgba(0, 0, 0, 0.87)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: 'Mango',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataBJ,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: 'rgba(15, 21, 77, 0.8)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.1
                        }
                    }
                },
                {
                    name: 'Banana',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataSH,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#FFC107'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.05
                        }
                    }
                },
                {
                    name: 'Litchi',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataGZ,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#03A9F4'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.05
                        }
                    }
                }
            ]
        };
    };
    EchartRadarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-echart-radar',
            template: __webpack_require__(/*! ./echart-radar.component.html */ "./src/assets/examples/chart/echart-radar/echart-radar.component.html"),
            styles: [__webpack_require__(/*! ./echart-radar.component.scss */ "./src/assets/examples/chart/echart-radar/echart-radar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EchartRadarComponent);
    return EchartRadarComponent;
}());



/***/ }),

/***/ "./src/assets/examples/chart/index.ts":
/*!********************************************!*\
  !*** ./src/assets/examples/chart/index.ts ***!
  \********************************************/
/*! exports provided: CHART_EXAMPLE_COMPONENT_MAP, CHART_EXAMPLE_COMPONENTS, CHART_EXAMPLE_COMPONENT_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHART_EXAMPLE_COMPONENT_MAP", function() { return CHART_EXAMPLE_COMPONENT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHART_EXAMPLE_COMPONENTS", function() { return CHART_EXAMPLE_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHART_EXAMPLE_COMPONENT_LIST", function() { return CHART_EXAMPLE_COMPONENT_LIST; });
/* harmony import */ var _echart_pie_echart_pie_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./echart-pie/echart-pie.component */ "./src/assets/examples/chart/echart-pie/echart-pie.component.ts");
/* harmony import */ var _echart_bar_echart_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echart-bar/echart-bar.component */ "./src/assets/examples/chart/echart-bar/echart-bar.component.ts");
/* harmony import */ var _echart_heatmap_echart_heatmap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./echart-heatmap/echart-heatmap.component */ "./src/assets/examples/chart/echart-heatmap/echart-heatmap.component.ts");
/* harmony import */ var _echart_radar_echart_radar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./echart-radar/echart-radar.component */ "./src/assets/examples/chart/echart-radar/echart-radar.component.ts");




// ng g c ../assets/examples/chart/ --skip-import
var CHART_EXAMPLE_COMPONENT_MAP = {
    'pie': [
        'echart-pie',
    ],
    'bar': [
        'echart-bar'
    ],
    'heatmap': [
        'echart-heatmap'
    ],
    'radar': [
        'echart-radar'
    ]
};
var CHART_EXAMPLE_COMPONENTS = {
    'echart-pie': {
        title: 'Echart Pie',
        component: _echart_pie_echart_pie_component__WEBPACK_IMPORTED_MODULE_0__["EchartPieComponent"]
    },
    'echart-bar': {
        title: 'Echart Bar',
        component: _echart_bar_echart_bar_component__WEBPACK_IMPORTED_MODULE_1__["EchartBarComponent"]
    },
    'echart-heatmap': {
        title: 'Echart Heatmap',
        component: _echart_heatmap_echart_heatmap_component__WEBPACK_IMPORTED_MODULE_2__["EchartHeatmapComponent"]
    },
    'echart-radar': {
        title: 'Echart Radar',
        component: _echart_radar_echart_radar_component__WEBPACK_IMPORTED_MODULE_3__["EchartRadarComponent"]
    },
};
var CHART_EXAMPLE_COMPONENT_LIST = [
    _echart_pie_echart_pie_component__WEBPACK_IMPORTED_MODULE_0__["EchartPieComponent"],
    _echart_bar_echart_bar_component__WEBPACK_IMPORTED_MODULE_1__["EchartBarComponent"],
    _echart_heatmap_echart_heatmap_component__WEBPACK_IMPORTED_MODULE_2__["EchartHeatmapComponent"],
    _echart_radar_echart_radar_component__WEBPACK_IMPORTED_MODULE_3__["EchartRadarComponent"]
];


/***/ })

}]);
//# sourceMappingURL=views-chart-example-view-chart-example-view-module.js.map