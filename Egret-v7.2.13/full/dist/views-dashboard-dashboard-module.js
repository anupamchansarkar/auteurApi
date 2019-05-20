(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./src/app/views/dashboard/analytics/analytics.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/dashboard/analytics/analytics.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- First row -->\n<mat-card\n  class=\"p-0\"\n  [@animate]=\"{ value: '*', params: { y: '50px', delay: '300ms' } }\"\n>\n  <div fxLayout=\"row wrap\">\n    <div\n      fxFlex=\"50\"\n      fxFlex.gt-sm=\"20\"\n      fxFlex.sm=\"50\"\n    >\n      <div class=\"text-center pt-1 pb-1 border-right-light\">\n        <mat-icon class=\"text-green\">show_chart</mat-icon>\n        <h4 class=\"m-0 \">5040</h4>\n        <small class=\"m-0 \">Page views</small>\n      </div>\n    </div>\n    <div\n      fxFlex=\"50\"\n      fxFlex.gt-sm=\"20\"\n      fxFlex.sm=\"50\"\n    >\n      <div class=\"text-center pt-1 pb-1 border-right-light\">\n        <mat-icon class=\"text-blue\">cloud_download</mat-icon>\n        <h4 class=\"m-0 \">1200</h4>\n        <small class=\"m-0 \">Downloads</small>\n      </div>\n    </div>\n    <div\n      fxFlex=\"50\"\n      fxFlex.gt-sm=\"20\"\n      fxFlex.sm=\"50\"\n    >\n      <div class=\"text-center pt-1 pb-1 border-right-light\">\n        <mat-icon class=\"text-green\">comment</mat-icon>\n        <h4 class=\"m-0 \">16420</h4>\n        <small class=\"m-0 \">Comments</small>\n      </div>\n    </div>\n    <div\n      fxFlex=\"50\"\n      fxFlex.gt-sm=\"20\"\n      fxFlex.sm=\"50\"\n    >\n      <div class=\"text-center pt-1 pb-1 border-right-light\">\n        <mat-icon class=\"text-blue\">person</mat-icon>\n        <h4 class=\"m-0 \">3010</h4>\n        <small class=\"m-0 \">Profile views</small>\n      </div>\n    </div>\n    <div\n      fxFlex=\"50\"\n      fxFlex.gt-sm=\"20\"\n      fxFlex.sm=\"50\"\n    >\n      <div class=\"text-center pt-1 pb-1\">\n        <mat-icon class=\"text-red\">favorite</mat-icon>\n        <h4 class=\"m-0 \">4070</h4>\n        <small class=\"m-0 \">Likes</small>\n      </div>\n    </div>\n  </div>\n</mat-card>\n<!--/ End first row -->\n\n<!-- 2nd, 3rd row -->\n<div fxLayout=\"row wrap\">\n  <div\n    fxFlex=\"100\"\n    fxFlex.gt-sm=\"66.67\"\n    fxFlex.sm=\"50\"\n    [@animate]=\"{ value: '*', params: { y: '50px', delay: '600ms' } }\"\n  >\n    <mat-card class=\"p-0 \">\n      <mat-tab-group>\n        <mat-tab label=\"TRAFFIC VS SALES\">\n          <div\n            echarts\n            [options]=\"trafficVsSaleOptions\"\n            [merge]=\"trafficVsSale\"\n            [autoResize]=\"true\"\n            style=\"height: 255px;\"\n          ></div>\n        </mat-tab>\n        <mat-tab label=\"Sessions\">\n          <div\n            echarts\n            [options]=\"sessionOptions\"\n            [merge]=\"sessions\"\n            [autoResize]=\"true\"\n            style=\"height: 255px;\"\n          ></div>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card>\n  </div>\n  <!--/ End tab -->\n\n  <!-- Donut chart -->\n  <div\n    fxFlex=\"100\"\n    fxFlex.gt-sm=\"33.33\"\n    fxFlex.sm=\"50\"\n    [@animate]=\"{ value: '*', params: { y: '50px', delay: '400ms' } }\"\n  >\n    <mat-card class=\"p-0 \">\n      <p class=\" ml-1 mt-1\">TRAFFIC SOURCES</p>\n      <div\n        echarts\n        [options]=\"trafficSourcesChart\"\n        [autoResize]=\"true\"\n        style=\"height: 250px;\"\n      ></div>\n    </mat-card>\n  </div>\n  <!--/ End donut chart -->\n  <!--/ End 2nd row -->\n\n  <!-- 3rd row, 1st column -->\n  <div\n    fxFlex=\"100\"\n    fxFlex.gt-sm=\"33.33\"\n    fxFlex.sm=\"50\"\n    [@animate]=\"{ value: '*', params: { y: '50px', delay: '800ms' } }\"\n  >\n    <mat-card class=\"\">\n      <p class=\"\">7 DAY TRAFFIC</p>\n      <div\n        echarts\n        [options]=\"dailyTrafficChartBar\"\n        [autoResize]=\"true\"\n        style=\"height: 250px;\"\n      ></div>\n    </mat-card>\n\n    <mat-card\n      class=\"p-0\"\n    >\n      <mat-card-title class=\"mb-1\">\n        <div class=\"card-title-text\">\n          <span class=\"font-weight-normal\">Top Campaign Performance</span>\n\n          <span fxFlex></span>\n          <button\n            class=\"card-control\"\n            mat-icon-button\n            [matMenuTriggerFor]=\"menu2\"\n          >\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #menu2=\"matMenu\">\n            <button mat-menu-item>\n              <mat-icon>settings</mat-icon>\n              <span>Campaign Settings</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>do_not_disturb</mat-icon>\n              <span>Disable All Campaigns</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>close</mat-icon>\n              <span>Remove panel</span>\n            </button>\n          </mat-menu>\n        </div>\n        <mat-divider></mat-divider>\n      </mat-card-title>\n      <mat-card-content>\n        <div class=\"mb-1\">\n          <p class=\"m-0\">\n            Facebook <span class=\"text-muted\">| 9.8 | 90%</span>\n          </p>\n          <mat-progress-bar\n            color=\"warn\"\n            mode=\"determinate\"\n            [value]=\"90\"\n            class=\"rounded\"\n            style=\"height: 6px\"\n          >\n          </mat-progress-bar>\n        </div>\n        <div class=\"mb-1\">\n          <p class=\"m-0 text-13\">\n            Google AdSense <span class=\"text-muted\">| 8.3 | 80%</span>\n          </p>\n          <mat-progress-bar\n            class=\"\"\n            color=\"primary\"\n            mode=\"determinate\"\n            [value]=\"80\"\n            class=\"rounded\"\n            style=\"height: 6px\"\n          >\n          </mat-progress-bar>\n        </div>\n        <div class=\"mb-1\">\n          <p class=\"m-0 text-13\">\n            Twitter <span class=\"text-muted\">| 5.8 | 60%</span>\n          </p>\n          <mat-progress-bar\n            class=\"\"\n            color=\"accent\"\n            mode=\"determinate\"\n            [value]=\"60\"\n            class=\"rounded\"\n            style=\"height: 6px\"\n          >\n          </mat-progress-bar>\n        </div>\n        <div class=\"\">\n          <p class=\"m-0 text-13\">\n            LinkedIn <span class=\"text-muted\">| 4.8 | 40%</span>\n          </p>\n          <mat-progress-bar\n            class=\"\"\n            color=\"warn\"\n            mode=\"determinate\"\n            [value]=\"40\"\n            class=\"rounded\"\n            style=\"height: 6px\"\n          >\n          </mat-progress-bar>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <!--/ End 3rd row, 1st column -->\n\n  <!-- 3rd row, 2nd column -->\n  <div\n    fxFlex=\"100\"\n    fxFlex.gt-sm=\"66.67\"\n    fxFlex.sm=\"50\"\n    [@animate]=\"{ value: '*', params: { y: '50px', delay: '1000ms' } }\"\n  >\n    <div fxLayout=\"row wrap\">\n      <div fxFlex=\"100\"\n      fxFlex.gt-sm=\"50\">\n        <mat-card class=\"p-0\">\n          <div fxLayout=\"row wrap\">\n            <div fxFlex=\"40\" class=\"p-1\">\n              <p class=\"\">TRAFFIC</p>\n              <p class=\"text-24 text-green font-weight-bold mb-0\">\n                27% <span class=\"material-icons\">arrow_drop_up</span>\n              </p>\n              <p class=\"text-muted m-0\">This Week</p>\n            </div>\n            <div fxFlex=\"60\">\n              <div\n                echarts\n                [options]=\"trafficGrowthChart\"\n                [autoResize]=\"true\"\n                style=\"height: 150px; right: -1px\"\n              ></div>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n      <div fxFlex=\"100\"\n      fxFlex.gt-sm=\"50\">\n        <mat-card class=\"p-0\">\n          <div fxLayout=\"row wrap\">\n            <div fxFlex=\"40\" class=\"p-1\">\n              <p class=\"\">Bounce Rate</p>\n              <p class=\"text-24 text-red font-weight-bold mb-0\">\n                20% <span class=\"material-icons\">arrow_drop_up</span>\n              </p>\n              <p class=\"text-muted m-0\">This Week</p>\n            </div>\n            <div fxFlex=\"60\">\n              <div\n                echarts\n                [options]=\"bounceRateGrowthChart\"\n                [autoResize]=\"true\"\n                style=\"height: 150px; right: -1px\"\n              ></div>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n\n    <mat-card\n      class=\"p-0 \"\n      [@animate]=\"{ value: '*', params: { scale: '.9', delay: '300ms' } }\"\n    >\n      <mat-table [dataSource]=\"countryTrafficStats\" matSort>\n        <ng-container matColumnDef=\"country\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\n            Country\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"id\">\n            <span class=\"flag-icon {{ row.flag }}\"></span>\n            {{ row.country }}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"visitor\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\n            Visitor\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"progress\">\n            {{ row.visitor }}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"pageView\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\n            Page View\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"name\">\n            {{ row.pageView }}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"download\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\n            Download\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"color\">\n            {{ row.download }}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"bounceRate\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\n            Bounce Rate\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"color\">\n            {{ row.bounceRate }}\n          </mat-cell>\n        </ng-container>\n\n        <!-- <ng-container matColumnDef=\"action\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> \n              <button mat-button><mat-icon>keyboard_arrow_right</mat-icon></button>\n            </mat-cell>\n          </ng-container> -->\n\n        <mat-header-row\n          *matHeaderRowDef=\"[\n            'country',\n            'visitor',\n            'pageView',\n            'download',\n            'bounceRate'\n          ]\"\n        ></mat-header-row>\n        <mat-row\n          *matRowDef=\"\n            let row;\n            columns: [\n              'country',\n              'visitor',\n              'pageView',\n              'download',\n              'bounceRate'\n            ]\n          \"\n        >\n        </mat-row>\n      </mat-table>\n    </mat-card>\n  </div>\n  <!--/ End 3rd row, 2nd column -->\n</div>\n"

/***/ }),

/***/ "./src/app/views/dashboard/analytics/analytics.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/dashboard/analytics/analytics.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/dashboard/analytics/analytics.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/dashboard/analytics/analytics.component.ts ***!
  \******************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngAfterViewInit = function () { };
    AnalyticsComponent.prototype.ngOnInit = function () {
        this.initTrafficVsSaleChart();
        this.initSessionsChart();
        this.dailyTrafficChartBar = {
            legend: {
                show: false
            },
            grid: {
                left: "8px",
                right: "8px",
                bottom: "0",
                top: "0",
                containLabel: true
            },
            tooltip: {
                show: true,
                backgroundColor: "rgba(0, 0, 0, .8)"
            },
            xAxis: [
                {
                    type: "category",
                    // data: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    data: ["1", "2", "3", "4", "5", "6", "7"],
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: "#fff"
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    axisLabel: {
                        show: false,
                        formatter: "${value}"
                    },
                    min: 0,
                    max: 100000,
                    interval: 25000,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        interval: "auto"
                    }
                }
            ],
            series: [
                {
                    name: "Online",
                    data: [35000, 69000, 22500, 60000, 50000, 50000, 30000],
                    label: { show: true, color: "#10174c", position: "top" },
                    type: "bar",
                    barWidth: "12",
                    color: "#10174c",
                    smooth: true,
                    itemStyle: {
                        barBorderRadius: 10
                    }
                }
            ]
        };
        this.trafficSourcesChart = {
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
                    radius: ["55%", "85%"],
                    center: ["50%", "50%"],
                    avoidLabelOverlap: false,
                    hoverOffset: 5,
                    stillShowZeroSum: false,
                    label: {
                        normal: {
                            show: false,
                            position: "center",
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
        this.countryTrafficStats = [
            {
                country: "US",
                visitor: 14040,
                pageView: 10000,
                download: 1000,
                bounceRate: 30,
                flag: "flag-icon-us"
            },
            {
                country: "India",
                visitor: 12500,
                pageView: 10000,
                download: 1000,
                bounceRate: 45,
                flag: "flag-icon-in"
            },
            {
                country: "UK",
                visitor: 11000,
                pageView: 10000,
                download: 1000,
                bounceRate: 50,
                flag: "flag-icon-gb"
            },
            {
                country: "Brazil",
                visitor: 4000,
                pageView: 10000,
                download: 1000,
                bounceRate: 30,
                flag: "flag-icon-br"
            },
            {
                country: "Spain",
                visitor: 4000,
                pageView: 10000,
                download: 1000,
                bounceRate: 45,
                flag: "flag-icon-es"
            },
            {
                country: "Mexico",
                visitor: 4000,
                pageView: 10000,
                download: 1000,
                bounceRate: 70,
                flag: "flag-icon-mx"
            },
            {
                country: "Russia",
                visitor: 4000,
                pageView: 10000,
                download: 1000,
                bounceRate: 40,
                flag: "flag-icon-ru"
            }
        ];
        this.trafficGrowthChart = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    animation: true
                }
            },
            grid: {
                left: "0",
                top: "0",
                right: "0",
                bottom: "0"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["0", "1", "2", "3", "4"],
                axisLabel: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        show: false
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                min: 0,
                max: 200,
                interval: 50,
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: "Visit",
                    type: "line",
                    smooth: false,
                    data: [0, 40, 140, 90, 160],
                    symbolSize: 8,
                    showSymbol: false,
                    lineStyle: {
                        opacity: 0,
                        width: 0
                    },
                    itemStyle: {
                        borderColor: "rgba(233, 31, 99, 0.4)"
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(15, 21, 77, 1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(15, 21, 77, 0.6)"
                                    }
                                ]
                            }
                        }
                    }
                }
            ]
        };
        this.bounceRateGrowthChart = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    animation: true
                }
            },
            grid: {
                left: "0",
                top: "0",
                right: "0",
                bottom: "0"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["0", "1", "2", "3", "4"],
                axisLabel: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        show: false
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                min: 0,
                max: 200,
                interval: 50,
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: "Bounce Rate",
                    type: "line",
                    smooth: false,
                    data: [0, 20, 90, 120, 190],
                    symbolSize: 8,
                    showSymbol: false,
                    lineStyle: {
                        opacity: 0,
                        width: 0
                    },
                    itemStyle: {
                        borderColor: "rgba(233, 31, 99, 0.4)"
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(244, 67, 54, 1)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(244, 67, 54, .4)"
                                    }
                                ]
                            }
                        }
                    }
                }
            ]
        };
    };
    AnalyticsComponent.prototype.initTrafficVsSaleChart = function () {
        this.trafficVsSaleOptions = {
            tooltip: {
                show: true,
                trigger: "axis",
                backgroundColor: "#fff",
                extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); color: #444",
                axisPointer: {
                    type: "line",
                    animation: true
                }
            },
            grid: {
                top: "10%",
                left: "80px",
                right: "30px",
                bottom: "60"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15"
                ],
                axisLabel: {
                    show: true,
                    margin: 20,
                    color: "#888"
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        show: false
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    margin: 30,
                    color: "#888"
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed"
                    }
                }
            },
            series: [
                {
                    name: "Online",
                    label: { show: false, color: "#0168c1" },
                    type: "bar",
                    barGap: 0,
                    color: "rgba(16, 23, 76, .4)",
                    smooth: true
                },
                {
                    name: "Offline",
                    label: { show: false, color: "#639" },
                    type: "bar",
                    color: "rgba(16, 23, 76, .8)",
                    smooth: true
                }
            ]
        };
        this.trafficData = [
            1400,
            1350,
            950,
            1150,
            950,
            1260,
            930,
            1450,
            1150,
            1400,
            1350,
            950,
            1150,
            950,
            1260
        ];
        this.saleData = [
            500,
            700,
            350,
            840,
            750,
            800,
            700,
            500,
            700,
            650,
            104,
            750,
            800,
            700,
            500
        ];
        this.trafficVsSale = {
            series: [
                {
                    data: this.trafficData
                },
                {
                    data: this.saleData
                }
            ]
        };
    };
    AnalyticsComponent.prototype.initSessionsChart = function () {
        this.sessionOptions = {
            tooltip: {
                show: true,
                trigger: "axis",
                backgroundColor: "#fff",
                extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); color: #444",
                axisPointer: {
                    type: "line",
                    animation: true
                }
            },
            grid: {
                top: "10%",
                left: "60",
                right: "15",
                bottom: "60"
            },
            xAxis: {
                type: "category",
                data: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30"
                ],
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    margin: 30,
                    color: "#888"
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    margin: 20,
                    color: "#888"
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed"
                    }
                }
            },
            series: [
                {
                    data: [],
                    type: "line",
                    name: "User",
                    smooth: true,
                    color: "#10174c",
                    lineStyle: {
                        opacity: 1,
                        width: 3
                    },
                    itemStyle: {
                        opacity: 0
                    },
                    emphasis: {
                        itemStyle: {
                            color: "rgba(16, 23, 76, 1)",
                            borderColor: "rgba(16, 23, 76, .4)",
                            opacity: 1,
                            borderWidth: 8
                        },
                        label: {
                            show: false,
                            backgroundColor: "#fff"
                        }
                    }
                }
            ]
        };
        this.sessionsData = [
            140,
            135,
            95,
            115,
            95,
            126,
            93,
            145,
            115,
            140,
            135,
            95,
            115,
            95,
            126,
            125,
            145,
            115,
            140,
            135,
            95,
            115,
            95,
            126,
            93,
            145,
            115,
            140,
            135,
            95
        ];
        this.sessions = {
            series: [
                {
                    data: this.sessionsData
                }
            ]
        };
    };
    AnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-analytics",
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/views/dashboard/analytics/analytics.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            styles: [__webpack_require__(/*! ./analytics.component.scss */ "./src/app/views/dashboard/analytics/analytics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/cryptocurrency/cryptocurrency.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/dashboard/cryptocurrency/cryptocurrency.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\" [@animate]=\"{ value: '*', params: { scale: '.9', delay: '200ms' } }\">\n  <div fxLayout=\"row wrap\">\n      <div\n          fxFlex=\"100\"\n          fxFlex.gt-sm=\"20\"\n          fxFlex.sm=\"50\"\n      >\n          <div class=\"text-center pt-1 pb-1 border-right-light\">\n              <mat-icon class=\"text-blue\">account_balance_wallet</mat-icon>\n              <h4 class=\"m-0\">5040</h4>\n              <small class=\"m-0 text-muted\">Bitcoin Balance</small>\n          </div>\n      </div>\n      <div\n          fxFlex=\"100\"\n          fxFlex.gt-sm=\"20\"\n          fxFlex.sm=\"50\"\n      >\n          <div class=\"text-center pt-1 pb-1 border-right-light\">\n              <mat-icon class=\"text-orange\">attach_money</mat-icon>\n              <h4 class=\"m-0 \">1200</h4>\n              <small class=\"m-0 text-muted\">USD Balance</small>\n          </div>\n      </div>\n      <div\n          fxFlex=\"100\"\n          fxFlex.gt-sm=\"20\"\n          fxFlex.sm=\"50\"\n      >\n          <div class=\"text-center pt-1 pb-1 border-right-light\">\n              <mat-icon class=\"text-blue\">business_center</mat-icon>\n              <h4 class=\"m-0 \">16420</h4>\n              <small class=\"m-0 text-muted\">Invesment</small>\n          </div>\n      </div>\n      <div\n          fxFlex=\"100\"\n          fxFlex.gt-sm=\"20\"\n          fxFlex.sm=\"50\"\n      >\n          <div class=\"text-center pt-1 pb-1 border-right-light\">\n              <mat-icon class=\"text-blue\">add</mat-icon>\n              <h4 class=\"m-0 \">3010</h4>\n              <small class=\"m-0 text-muted\">Profit</small>\n          </div>\n      </div>\n      <div\n          fxFlex=\"100\"\n          fxFlex.gt-sm=\"20\"\n          fxFlex.sm=\"50\"\n      >\n          <div class=\"text-center pt-1 pb-1\">\n              <mat-icon class=\"text-orange\">compare_arrows</mat-icon>\n              <h4 class=\"m-0 \">270</h4>\n              <small class=\"m-0 text-muted\">Transactions</small>\n          </div>\n      </div>\n  </div>\n</mat-card>\n\n\n\n\n<div fxLayout=\"row wrap\">\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"66.67\" fxFlex.sm=\"50\" \n  [@animate]=\"{value:'*',params:{delay:'400ms',scale:'.9'}}\">\n  <mat-card>\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n      <h6 class=\"m-0\">Bitcoin vs Ethereum </h6>\n      <span fxFlex></span>\n      <button mat-icon-button [matMenuTriggerFor]=\"chartMenu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #chartMenu=\"matMenu\">\n        <button mat-menu-item>\n          <span>Last 7 days</span>\n        </button>\n        <button mat-menu-item>\n          <span>Last 30 days</span>\n        </button>\n      </mat-menu>\n    </div>\n\n    <div echarts [options]=\"cryptoChart\" [autoResize]=\"true\" style=\"height: 340px;\"></div>\n  </mat-card>\n  </div>\n\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" [@animate]=\"{value:'*',params:{delay:'400ms',scale:'.9'}}\">\n    <div class=\"m-333\">\n        <mat-accordion multi=\"false\">\n            <mat-expansion-panel expanded=\"true\">\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  BTC\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <div class=\"border-bottom pb-1 mb-1\">\n                  <div fxLyout=\"row wrap\" class=\"text-blue font-weight-bold\">\n                      <span>BTC vs USD</span>\n                      <span fxFlex></span>\n                      <span>8897.45</span>\n                    </div>\n                    <div fxLyout=\"row wrap\" class=\"text-muted\">\n                      <small>24 hour change</small>\n                      <span fxFlex></span>\n                      <small class=\"text-green\">530(+3.73%)</small>\n                    </div>\n              </div>\n              <div class=\"border-bottom pb-1 mb-1\">\n                  <div fxLyout=\"row wrap\" class=\"text-blue font-weight-bold\">\n                      <span>BTC vs EUR</span>\n                      <span fxFlex></span>\n                      <span>3829.23</span>\n                    </div>\n                    <div fxLyout=\"row wrap\" class=\"text-muted\">\n                      <small>24 hour change</small>\n                      <span fxFlex></span>\n                      <small class=\"text-red\">430(-1.43%)</small>\n                    </div>\n              </div>\n              <div class=\"\">\n                  <div fxLyout=\"row wrap\" class=\"text-blue font-weight-bold\">\n                      <span>BTC vs GBP</span>\n                      <span fxFlex></span>\n                      <span>5836.79</span>\n                    </div>\n                    <div fxLyout=\"row wrap\" class=\"text-muted\">\n                      <small>24 hour change</small>\n                      <span fxFlex></span>\n                      <small class=\"text-green\">210(+2.23%)</small>\n                    </div>\n              </div>\n\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  ETH\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n\n              <div class=\"border-bottom pb-1 mb-1\">\n                  <div fxLyout=\"row wrap\" class=\"text-blue font-weight-bold\">\n                      <span>ETH vs USD</span>\n                      <span fxFlex></span>\n                      <span>8897.45</span>\n                    </div>\n                    <div fxLyout=\"row wrap\" class=\"text-muted\">\n                      <small>24 hour change</small>\n                      <span fxFlex></span>\n                      <small class=\"text-green\">530(+3.73%)</small>\n                    </div>\n              </div>\n              <div class=\"border-bottom pb-1 mb-1\">\n                  <div fxLyout=\"row wrap\" class=\"text-blue font-weight-bold\">\n                      <span>ETH vs EUR</span>\n                      <span fxFlex></span>\n                      <span>3829.23</span>\n                    </div>\n                    <div fxLyout=\"row wrap\" class=\"text-muted\">\n                      <small>24 hour change</small>\n                      <span fxFlex></span>\n                      <small class=\"text-red\">430(-1.43%)</small>\n                    </div>\n              </div>\n              <div class=\"\">\n                  <div fxLyout=\"row wrap\" class=\"text-blue font-weight-bold\">\n                      <span>ETH vs GBP</span>\n                      <span fxFlex></span>\n                      <span>5836.79</span>\n                    </div>\n                    <div fxLyout=\"row wrap\" class=\"text-muted\">\n                      <small>24 hour change</small>\n                      <span fxFlex></span>\n                      <small class=\"text-green\">210(+2.23%)</small>\n                    </div>\n              </div>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    LTC\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n  \n                <div class=\"border-bottom pb-1 mb-1\">\n                    <div fxLyout=\"row wrap\" class=\"text-blue font-weight-bold\">\n                        <span>LTC vs USD</span>\n                        <span fxFlex></span>\n                        <span>8897.45</span>\n                      </div>\n                      <div fxLyout=\"row wrap\" class=\"text-muted\">\n                        <small>24 hour change</small>\n                        <span fxFlex></span>\n                        <small class=\"text-green\">530(+3.73%)</small>\n                      </div>\n                </div>\n                <div class=\"border-bottom pb-1 mb-1\">\n                    <div fxLyout=\"row wrap\" class=\"text-blue font-weight-bold\">\n                        <span>LTC vs EUR</span>\n                        <span fxFlex></span>\n                        <span>3829.23</span>\n                      </div>\n                      <div fxLyout=\"row wrap\" class=\"text-muted\">\n                        <small>24 hour change</small>\n                        <span fxFlex></span>\n                        <small class=\"text-red\">430(-1.43%)</small>\n                      </div>\n                </div>\n                <div class=\"\">\n                    <div fxLyout=\"row wrap\" class=\"text-blue font-weight-bold\">\n                        <span>LTC vs GBP</span>\n                        <span fxFlex></span>\n                        <span>5836.79</span>\n                      </div>\n                      <div fxLyout=\"row wrap\" class=\"text-muted\">\n                        <small>24 hour change</small>\n                        <span fxFlex></span>\n                        <small class=\"text-green\">210(+2.23%)</small>\n                      </div>\n                </div>\n              </mat-expansion-panel>\n          </mat-accordion>\n    </div>\n \n    <!-- <mat-card>\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n            <h6 class=\"m-0\">Balance </h6>\n          </div>\n        <div echarts [options]=\"cryptoDonutChart\" [autoResize]=\"true\" style=\"height: 318px;\"></div>\n    </mat-card> -->\n  </div>\n</div>\n\n<!-- COIN ROW -->\n\n<div fxLayout=\"row wrap\" [@animate]=\"{value:'*',params:{delay:'600ms',scale:'.9'}}\">\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\" >\n    <mat-card class=\"rounded-circle\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n      <img class=\"avatar-md rounded-circle\" src=\"assets/images/cryptocurrencies/BTC.png\" alt=\"\">\n      <span style=\"width: 20px\"></span>\n      <div>\n        <p class=\"m-0 text-14 text-muted line-height-1\">Bitcoin</p>\n        <span class=\"text-18 font-weight-bold text-green\">$254 <span class=\"material-icons mat-icon-18\">arrow_drop_up</span></span>\n      </div>\n    </mat-card>\n  </div>\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\" >\n    <mat-card class=\"rounded-circle\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n      <img class=\"avatar-md rounded-circle\" src=\"assets/images/cryptocurrencies/ETH.png\" alt=\"\">\n      <span style=\"width: 20px\"></span>\n      <div>\n        <p class=\"m-0 text-14 text-muted line-height-1\">Ethereum</p>\n        <span class=\"text-18 font-weight-bold text-red\">$64 <span class=\"material-icons mat-icon-18\">arrow_drop_down</span></span>\n      </div>\n    </mat-card>\n  </div>\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\" >\n    <mat-card class=\"rounded-circle\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n      <img class=\"avatar-md rounded-circle\" src=\"assets/images/cryptocurrencies/LTC.png\" alt=\"\">\n      <span style=\"width: 20px\"></span>\n      <div>\n        <p class=\"m-0 text-14 text-muted line-height-1\">Litecoin</p>\n        <span class=\"text-18 font-weight-bold text-green\">$45 <span class=\"material-icons mat-icon-18\">arrow_drop_up</span></span>\n      </div>\n    </mat-card>\n  </div>\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\" >\n    <mat-card class=\"rounded-circle\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n      <img class=\"avatar-md rounded-circle\" src=\"assets/images/cryptocurrencies/BTS.png\" alt=\"\">\n      <span style=\"width: 20px\"></span>\n      <div>\n        <p class=\"m-0 text-14 text-muted line-height-1\">BTS</p>\n        <span class=\"text-18 font-weight-bold text-red\">$10 <span class=\"material-icons mat-icon-18\">arrow_drop_down</span></span>\n      </div>\n    </mat-card>\n  </div>\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\" >\n    <mat-card class=\"rounded-circle\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n      <img class=\"avatar-md rounded-circle\" src=\"assets/images/cryptocurrencies/CNX.png\" alt=\"\">\n      <span style=\"width: 20px\"></span>\n      <div>\n        <p class=\"m-0 text-14 text-muted line-height-1\">CNX</p>\n        <span class=\"text-18 font-weight-bold text-green\">$80 <span class=\"material-icons mat-icon-18\">arrow_drop_up</span></span>\n      </div>\n    </mat-card>\n  </div>\n</div>\n<!--/ COIN ROW -->\n\n<!-- Table row -->\n<div fxLayout=\"row wrap\" [@animate]=\"{value:'*',params:{delay:'800ms',scale:'.9'}}\">\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"66.67\">\n      <mat-card class=\"p-0 \">\n          <h6 class=\"pl-1 pt-1 m-0 \">Active Trades</h6>\n          <ngx-datatable\n          class=\"material ml-0 mr-0\"\n          [rows]=\"activeTrades\"\n          [columnMode]=\"'flex'\"\n          [headerHeight]=\"50\"\n          [footerHeight]=\"0\"\n          [rowHeight]=\"'auto'\">\n          \n          <ngx-datatable-column name=\"Currency\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n                  <img [src]=\"row.icon\" alt=\"\" class=\"avatar-xs mr-05\">\n                  {{ row?.currency }}\n              </div>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Balance\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row?.balance}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Buying Rate\" [flexGrow]=\"1\">\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                    {{row?.buyingRate}}\n              </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Current Rate\" [flexGrow]=\"1\">\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                        {{row?.currentRate}}\n                  </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Action\" [flexGrow]=\"1\">\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                        <button mat-stroked-button color=\"primary\">Close</button>\n                  </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>    \n      </mat-card>\n  </div>\n\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33.33\">\n      <mat-card class=\"p-0 \">\n          <h6 class=\"ml-1 mt-1\">Trending Currencies</h6>\n          <ngx-datatable\n          class=\"material ml-0 mr-0\"\n          [rows]=\"trendingCurrencies\"\n          [columnMode]=\"'flex'\"\n          [headerHeight]=\"50\"\n          [footerHeight]=\"0\"\n          [rowHeight]=\"'auto'\">\n          \n          <ngx-datatable-column name=\"Currency\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                {{ row?.currency }}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Balance\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row?.rate}}\n            </ng-template>\n          </ngx-datatable-column>\n          \n          <ngx-datatable-column name=\"Action\" [flexGrow]=\"1\">\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                        <button mat-stroked-button color=\"warn\">Buy</button>\n                  </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>    \n      </mat-card>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/dashboard/cryptocurrency/cryptocurrency.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/dashboard/cryptocurrency/cryptocurrency.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9jcnlwdG9jdXJyZW5jeS9jcnlwdG9jdXJyZW5jeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/dashboard/cryptocurrency/cryptocurrency.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/dashboard/cryptocurrency/cryptocurrency.component.ts ***!
  \****************************************************************************/
/*! exports provided: CryptocurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptocurrencyComponent", function() { return CryptocurrencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CryptocurrencyComponent = /** @class */ (function () {
    function CryptocurrencyComponent() {
    }
    CryptocurrencyComponent.prototype.ngOnInit = function () {
        this.cryptoChart = {
            tooltip: {
                show: true,
                trigger: "axis",
                backgroundColor: "#fff",
                extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); color: #444",
                axisPointer: {
                    type: "line",
                    animation: true
                }
            },
            grid: {
                top: "10%",
                left: "60",
                right: "20",
                bottom: "60"
            },
            xAxis: {
                type: "category",
                data: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30"
                ],
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    margin: 30,
                    color: "#888"
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    margin: 20,
                    color: "#888"
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed"
                    }
                }
            },
            series: [
                {
                    data: [
                        640,
                        1040,
                        840,
                        1240,
                        1040,
                        1440,
                        1240,
                        1640,
                        1440,
                        1840,
                        1640,
                        2040,
                        1840,
                        2240,
                        2040,
                        2440,
                        2240,
                        2640,
                        2440,
                        2840,
                        2640,
                        3040,
                        2840,
                        3240,
                        3040,
                        3440,
                        3240,
                        3640,
                        3440,
                        3840
                    ],
                    type: "line",
                    name: "Bitcoin",
                    smooth: true,
                    color: "#42A5F5",
                    lineStyle: {
                        opacity: 1,
                        width: 3
                    },
                    itemStyle: {
                        opacity: 0
                    },
                    emphasis: {
                        itemStyle: {
                            color: "#42A5F5",
                            borderColor: "rgba(3, 169, 244, .4)",
                            opacity: 1,
                            borderWidth: 8
                        },
                        label: {
                            show: false,
                            backgroundColor: "#fff"
                        }
                    }
                },
                {
                    data: [
                        240,
                        640,
                        440,
                        840,
                        640,
                        1040,
                        840,
                        1240,
                        1040,
                        1440,
                        1240,
                        1640,
                        1440,
                        1840,
                        1640,
                        2040,
                        1840,
                        2240,
                        2040,
                        2440,
                        2240,
                        2640,
                        2440,
                        2840,
                        2640,
                        3040,
                        2840,
                        3240,
                        3040,
                        3440
                    ],
                    type: "line",
                    name: "Ethereum (ETH)",
                    smooth: true,
                    color: "rgba(0, 0, 0, .3)",
                    lineStyle: {
                        opacity: 1,
                        width: 3
                    },
                    itemStyle: {
                        opacity: 0
                    },
                    emphasis: {
                        itemStyle: {
                            color: "rgba(0, 0, 0, .5)",
                            borderColor: "rgba(0, 0, 0, .2)",
                            opacity: 1,
                            borderWidth: 8
                        },
                        label: {
                            show: false,
                            backgroundColor: "#fff"
                        }
                    }
                }
            ]
        };
        this.cryptoDonutChart = {
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            color: ["#03A9F4", "#039BE5", "#fcc02e"],
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
                    radius: ["65%", "85%"],
                    center: ["50%", "50%"],
                    avoidLabelOverlap: false,
                    hoverOffset: 5,
                    stillShowZeroSum: false,
                    label: {
                        normal: {
                            show: false,
                            position: "center",
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
                                color: "rgba(0, 0, 0, 0.8)"
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
        this.activeTrades = [
            {
                icon: "assets/images/cryptocurrencies/BTC.png",
                currency: "Bitcoin",
                balance: 3000,
                buyingRate: 450,
                currentRate: 450,
                profitLoss: 400,
                lastPrice: 300
            },
            {
                icon: "assets/images/cryptocurrencies/ADA.png",
                currency: "Bitcoin",
                balance: 3000,
                buyingRate: 450,
                currentRate: 450,
                profitLoss: 400,
                lastPrice: 300
            },
            {
                icon: "assets/images/cryptocurrencies/LTC.png",
                currency: "Bitcoin",
                balance: 3000,
                buyingRate: 450,
                currentRate: 450,
                profitLoss: 400,
                lastPrice: 300
            },
            {
                icon: "assets/images/cryptocurrencies/AE.png",
                currency: "Bitcoin",
                balance: 3000,
                buyingRate: 450,
                currentRate: 450,
                profitLoss: 400,
                lastPrice: 300
            }
        ];
        this.trendingCurrencies = [
            {
                currency: "Bitcoin",
                rate: 3800
            },
            {
                currency: "Bitcoin",
                rate: 3800
            },
            {
                currency: "Bitcoin",
                rate: 3800
            },
            {
                currency: "Bitcoin",
                rate: 3800
            }
        ];
    };
    CryptocurrencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-cryptocurrency",
            template: __webpack_require__(/*! ./cryptocurrency.component.html */ "./src/app/views/dashboard/cryptocurrency/cryptocurrency.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            styles: [__webpack_require__(/*! ./cryptocurrency.component.scss */ "./src/app/views/dashboard/cryptocurrency/cryptocurrency.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CryptocurrencyComponent);
    return CryptocurrencyComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-dark/dashboard-dark.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-dark/dashboard-dark.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Dashboard card row -->\n<mat-card\n  class=\"p-0 dark-blue\"\n  [@animate]=\"{ value: '*', params: { opacity: '0', y: '40px', delay: '200ms' } }\"\n>\n  <div fxLayout=\"row wrap\">\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\">\n      <div class=\"text-center pt-1 pb-1 border-right-light\">\n        <mat-icon class=\"text-pink\">show_chart</mat-icon>\n        <h4 class=\"m-0 text-white\">5040</h4>\n        <small class=\"m-0 text-white\">Page views</small>\n      </div>\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\">\n      <div class=\"text-center pt-1 pb-1 border-right-light\">\n        <mat-icon class=\"text-yellow\">cloud_download</mat-icon>\n        <h4 class=\"m-0 text-white\">1200</h4>\n        <small class=\"m-0 text-white\">Downloads</small>\n      </div>\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\">\n      <div class=\"text-center pt-1 pb-1 border-right-light\">\n        <mat-icon class=\"text-pink\">comment</mat-icon>\n        <h4 class=\"m-0 text-white\">16420</h4>\n        <small class=\"m-0 text-white\">Comments</small>\n      </div>\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\">\n      <div class=\"text-center pt-1 pb-1 border-right-light\">\n        <mat-icon class=\"text-white\">person</mat-icon>\n        <h4 class=\"m-0 text-white\">3010</h4>\n        <small class=\"m-0 text-white\">Profile views</small>\n      </div>\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.sm=\"50\">\n      <div class=\"text-center pt-1 pb-1\">\n        <mat-icon class=\"text-pink\">favorite</mat-icon>\n        <h4 class=\"m-0 text-white\">4070</h4>\n        <small class=\"m-0 text-white\">Likes</small>\n      </div>\n    </div>\n  </div>\n</mat-card>\n\n<div fxLayout=\"row wrap\">\n  <div\n    fxFlex=\"100\"\n    fxFlex.gt-sm=\"33.33\"\n    fxFlex.sm=\"50\"\n    [@animate]=\"{ value: '*', params: { opacity: '0', y: '40px', delay: '250ms' } }\"\n  >\n    <mat-card class=\"p-0 dark-blue\">\n      <p class=\"text-white ml-1 mt-1\">TRAFFIC VS SALES</p>\n      <div\n        echarts\n        [options]=\"monthlyTrafficChartBar\"\n        [autoResize]=\"true\"\n        style=\"height: 216px;\"\n      ></div>\n    </mat-card>\n  </div>\n\n  <div\n    fxFlex=\"100\"\n    fxFlex.gt-sm=\"33.33\"\n    fxFlex.sm=\"50\"\n    [@animate]=\"{ value: '*', params: { opacity: '0', y: '40px', delay: '300ms' } }\"\n  >\n    <mat-card class=\"dark-blue\">\n      <p class=\"text-white\">7 DAY TRAFFIC</p>\n      <div\n        echarts\n        [options]=\"dailyTrafficChartBar\"\n        [autoResize]=\"true\"\n        style=\"height: 200px;\"\n      ></div>\n    </mat-card>\n  </div>\n\n  <div\n    fxFlex=\"100\"\n    fxFlex.gt-sm=\"33.33\"\n    fxFlex.sm=\"50\"\n    [@animate]=\"{ value: '*', params: { opacity: '0', y: '40px', delay: '350ms' } }\"\n  >\n    <mat-card class=\"p-0 dark-blue\">\n      <p class=\"text-white ml-1 mt-1\">TRAFFIC SOURCES</p>\n      <div\n        echarts\n        [options]=\"dailyBandwithUsage\"\n        [autoResize]=\"true\"\n        style=\"height: 216px;\"\n      ></div>\n    </mat-card>\n  </div>\n\n  <div\n    fxFlex=\"100\"\n    fxFlex.gt-sm=\"60\"\n    fxFlex.sm=\"50\"\n    [@animate]=\"{ value: '*', params: { opacity: '0', y: '40px', delay: '400ms' } }\"\n  >\n    <mat-card\n      class=\"p-0 dark-blue\"\n    >\n      <mat-table [dataSource]=\"countryTrafficStats\" matSort>\n        <ng-container matColumnDef=\"country\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\n            Country\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"id\">\n            <span class=\"flag-icon {{ row.flag }}\"></span>\n            {{ row.country }}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"visitor\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\n            Visitor\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"progress\">\n            {{ row.visitor }}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"pageView\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\n            Page View\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"name\">\n            {{ row.pageView }}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"download\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\n            Download\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"color\">\n            {{ row.download }}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"bounceRate\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>\n            Bounce Rate\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"color\">\n            {{ row.bounceRate }}\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row\n          *matHeaderRowDef=\"[\n            'country',\n            'visitor',\n            'pageView',\n            'download',\n            'bounceRate'\n          ]\"\n        ></mat-header-row>\n        <mat-row\n          *matRowDef=\"\n            let row;\n            columns: [\n              'country',\n              'visitor',\n              'pageView',\n              'download',\n              'bounceRate'\n            ]\n          \"\n        >\n        </mat-row>\n      </mat-table>\n    </mat-card>\n  </div>\n  <div\n    fxFlex=\"100\"\n    fxFlex.gt-sm=\"40\"\n    fxFlex.sm=\"50\"\n    [@animate]=\"{ value: '*', params: { opacity: '0', y: '40px', delay: '450ms' } }\"\n  >\n    <mat-card class=\"p-0 dark-blue\">\n      <div fxLayout=\"row wrap\">\n        <div fxFlex=\"40\" class=\"p-1\">\n          <p class=\"text-white\">TRAFFIC</p>\n          <p class=\"text-24 text-green font-weight-bold mb-0\">\n            27% <span class=\"material-icons\">arrow_drop_up</span>\n          </p>\n          <p class=\"text-white m-0\">This Week</p>\n        </div>\n        <div fxFlex=\"60\">\n          <div\n            echarts\n            [options]=\"trafficGrowthChart\"\n            [autoResize]=\"true\"\n            style=\"height: 150px; right: -1px\"\n          ></div>\n        </div>\n      </div>\n    </mat-card>\n    <mat-card\n      class=\"p-0 dark-blue\"\n      [@animate]=\"{ value: '*', params: { opacity: '0', y: '40px', delay: '500ms' } }\"\n    >\n      <mat-card-title class=\"mb-1\">\n        <div class=\"card-title-text\">\n          <span class=\"font-weight-normal text-white\"\n            >Top Campaign Performance</span\n          >\n\n          <span fxFlex></span>\n          <button\n            class=\"card-control\"\n            mat-icon-button\n            [matMenuTriggerFor]=\"menu2\"\n          >\n            <mat-icon class=\"text-white\">more_vert</mat-icon>\n          </button>\n          <mat-menu #menu2=\"matMenu\">\n            <button mat-menu-item>\n              <mat-icon>settings</mat-icon>\n              <span>Campaign Settings</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>do_not_disturb</mat-icon>\n              <span>Disable All Campaigns</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>close</mat-icon>\n              <span>Remove panel</span>\n            </button>\n          </mat-menu>\n        </div>\n        <mat-divider></mat-divider>\n      </mat-card-title>\n      <mat-card-content>\n        <div class=\"mb-1\">\n          <p class=\"m-0 text-white\">\n            Facebook <span class=\"\">| 9.8 | 90%</span>\n          </p>\n          <mat-progress-bar\n            color=\"accent\"\n            mode=\"determinate\"\n            [value]=\"90\"\n            class=\"rounded\"\n            style=\"height: 6px\"\n          >\n          </mat-progress-bar>\n        </div>\n        <div class=\"mb-1\">\n          <p class=\"m-0 text-13 text-white\">\n            Google AdSense <span class=\"text-white\">| 8.3 | 80%</span>\n          </p>\n          <mat-progress-bar\n            class=\"\"\n            color=\"warn\"\n            mode=\"determinate\"\n            [value]=\"80\"\n            class=\"rounded\"\n            style=\"height: 6px\"\n          >\n          </mat-progress-bar>\n        </div>\n        <div class=\"mb-1\">\n          <p class=\"m-0 text-13 text-white\">\n            Twitter <span class=\"text-white\">| 5.8 | 60%</span>\n          </p>\n          <mat-progress-bar\n            class=\"\"\n            color=\"accent\"\n            mode=\"determinate\"\n            [value]=\"60\"\n            class=\"rounded\"\n            style=\"height: 6px\"\n          >\n          </mat-progress-bar>\n        </div>\n        <div class=\"\">\n          <p class=\"m-0 text-13 text-white\">\n            LinkedIn <span class=\"text-white\">| 4.8 | 40%</span>\n          </p>\n          <mat-progress-bar\n            class=\"\"\n            color=\"warn\"\n            mode=\"determinate\"\n            [value]=\"40\"\n            class=\"rounded\"\n            style=\"height: 6px\"\n          >\n          </mat-progress-bar>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-dark/dashboard-dark.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-dark/dashboard-dark.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQtZGFyay9kYXNoYm9hcmQtZGFyay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-dark/dashboard-dark.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-dark/dashboard-dark.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardDarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDarkComponent", function() { return DashboardDarkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardDarkComponent = /** @class */ (function () {
    function DashboardDarkComponent(layout, scack) {
        this.layout = layout;
        this.scack = scack;
        this.countryTrafficStats = [
            {
                country: "US",
                visitor: 14040,
                pageView: 10000,
                download: 1000,
                bounceRate: 30,
                flag: "flag-icon-us"
            },
            {
                country: "India",
                visitor: 12500,
                pageView: 10000,
                download: 1000,
                bounceRate: 45,
                flag: "flag-icon-in"
            },
            {
                country: "UK",
                visitor: 11000,
                pageView: 10000,
                download: 1000,
                bounceRate: 50,
                flag: "flag-icon-gb"
            },
            {
                country: "Brazil",
                visitor: 4000,
                pageView: 10000,
                download: 1000,
                bounceRate: 30,
                flag: "flag-icon-br"
            },
            {
                country: "Spain",
                visitor: 4000,
                pageView: 10000,
                download: 1000,
                bounceRate: 45,
                flag: "flag-icon-es"
            },
            {
                country: "Mexico",
                visitor: 4000,
                pageView: 10000,
                download: 1000,
                bounceRate: 70,
                flag: "flag-icon-mx"
            },
            {
                country: "Russia",
                visitor: 4000,
                pageView: 10000,
                download: 1000,
                bounceRate: 40,
                flag: "flag-icon-ru"
            }
        ];
    }
    DashboardDarkComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.layout.publishLayoutChange({ sidebarColor: 'dark-blue', topbarColor: 'dark-blue' });
            _this.scack.open('Layout option changed to {sidebarColor: "dark-blue", topbarColor: "dark-blue"};', 'OK', { duration: 6000 });
        });
        this.dailyTrafficChartBar = {
            legend: {
                show: false
            },
            grid: {
                left: "8px",
                right: "8px",
                bottom: "0",
                top: "0",
                containLabel: true
            },
            tooltip: {
                show: true,
                backgroundColor: "rgba(0, 0, 0, .8)"
            },
            xAxis: [
                {
                    type: "category",
                    // data: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    data: ["1", "2", "3", "4", "5", "6", "7"],
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: "#fff"
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    axisLabel: {
                        show: false,
                        formatter: "${value}"
                    },
                    min: 0,
                    max: 100000,
                    interval: 25000,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        interval: "auto"
                    }
                }
            ],
            series: [
                {
                    name: "Online",
                    data: [35000, 69000, 22500, 60000, 50000, 50000, 30000],
                    label: { show: false, color: "#0168c1" },
                    type: "bar",
                    barWidth: "8",
                    color: "#f6be1a",
                    smooth: true,
                    itemStyle: {
                        barBorderRadius: 10
                    }
                }
            ]
        };
        this.monthlyTrafficChartBar = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    animation: true
                }
            },
            grid: {
                left: "0",
                top: "4%",
                right: "0",
                bottom: "0"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sept",
                    "Oct",
                    "Nov",
                    "Dec"
                ],
                axisLabel: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        show: false
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                min: 0,
                max: 200,
                interval: 50,
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: "Visit",
                    type: "line",
                    smooth: true,
                    data: [
                        140,
                        135,
                        95,
                        115,
                        95,
                        126,
                        93,
                        145,
                        115,
                        140,
                        135,
                        95,
                        115,
                        95,
                        126,
                        125,
                        145,
                        115,
                        140,
                        135,
                        95,
                        115,
                        95,
                        126,
                        93,
                        145,
                        115,
                        140,
                        135,
                        95
                    ],
                    symbolSize: 8,
                    showSymbol: false,
                    lineStyle: {
                        opacity: 0,
                        width: 0
                    },
                    itemStyle: {
                        borderColor: "#f6be1a"
                    },
                    areaStyle: {
                        color: "#f6be1a",
                        opacity: 1
                    }
                },
                {
                    name: "Sales",
                    type: "line",
                    smooth: true,
                    data: [
                        50,
                        70,
                        65,
                        84,
                        75,
                        80,
                        70,
                        50,
                        70,
                        65,
                        104,
                        75,
                        80,
                        70,
                        50,
                        70,
                        65,
                        94,
                        75,
                        80,
                        70,
                        50,
                        70,
                        65,
                        86,
                        75,
                        80,
                        70,
                        50,
                        70
                    ],
                    symbolSize: 8,
                    showSymbol: false,
                    lineStyle: {
                        opacity: 0,
                        width: 0
                    },
                    itemStyle: {
                        borderColor: "#e91f63"
                    },
                    areaStyle: {
                        color: "#e91f63",
                        opacity: 1
                    }
                }
            ]
        };
        this.dailyBandwithUsage = {
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            color: ["#fcc02e", "#e91f63", "#f44336"],
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
                    radius: ["50%", "85%"],
                    center: ["50%", "50%"],
                    avoidLabelOverlap: false,
                    hoverOffset: 5,
                    stillShowZeroSum: false,
                    label: {
                        normal: {
                            show: false,
                            position: "center",
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
                                color: "white"
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
        this.trafficGrowthChart = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    animation: true
                }
            },
            grid: {
                left: "0",
                top: "0",
                right: "0",
                bottom: "0"
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                ],
                axisLabel: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        show: false
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: "value",
                min: 0,
                max: 200,
                interval: 50,
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: "Visit",
                    type: "line",
                    smooth: false,
                    data: [0, 40, 140, 90, 160],
                    symbolSize: 8,
                    showSymbol: false,
                    lineStyle: {
                        opacity: 0,
                        width: 0
                    },
                    itemStyle: {
                        borderColor: "#fcc02e"
                    },
                    areaStyle: {
                        color: '#f44336',
                        opacity: 1
                    }
                }
            ]
        };
    };
    DashboardDarkComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        setTimeout(function () {
            _this.layout.publishLayoutChange({ sidebarColor: 'white', topbarColor: 'white' });
            _this.scack.open('Layout option changed {sidebarColor: "white", topbarColor: "white"};', 'OK', { duration: 6000 });
        });
    };
    DashboardDarkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-dark',
            template: __webpack_require__(/*! ./dashboard-dark.component.html */ "./src/app/views/dashboard/dashboard-dark/dashboard-dark.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            styles: [__webpack_require__(/*! ./dashboard-dark.component.scss */ "./src/app/views/dashboard/dashboard-dark/dashboard-dark.component.scss")]
        }),
        __metadata("design:paramtypes", [app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], DashboardDarkComponent);
    return DashboardDarkComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/views/dashboard/dashboard.routing.ts");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/views/dashboard/analytics/analytics.component.ts");
/* harmony import */ var _dashboard_dark_dashboard_dark_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-dark/dashboard-dark.component */ "./src/app/views/dashboard/dashboard-dark/dashboard-dark.component.ts");
/* harmony import */ var _cryptocurrency_cryptocurrency_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cryptocurrency/cryptocurrency.component */ "./src/app/views/dashboard/cryptocurrency/cryptocurrency.component.ts");
/* harmony import */ var _default_dashboard_default_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./default-dashboard/default-dashboard.component */ "./src/app/views/dashboard/default-dashboard/default-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_9__["DashboardRoutes"])
            ],
            declarations: [_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_10__["AnalyticsComponent"], _dashboard_dark_dashboard_dark_component__WEBPACK_IMPORTED_MODULE_11__["DashboardDarkComponent"], _cryptocurrency_cryptocurrency_component__WEBPACK_IMPORTED_MODULE_12__["CryptocurrencyComponent"], _default_dashboard_default_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DefaultDashboardComponent"]],
            exports: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.routing.ts ***!
  \******************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/views/dashboard/analytics/analytics.component.ts");
/* harmony import */ var _dashboard_dark_dashboard_dark_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-dark/dashboard-dark.component */ "./src/app/views/dashboard/dashboard-dark/dashboard-dark.component.ts");
/* harmony import */ var _cryptocurrency_cryptocurrency_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cryptocurrency/cryptocurrency.component */ "./src/app/views/dashboard/cryptocurrency/cryptocurrency.component.ts");
/* harmony import */ var _default_dashboard_default_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-dashboard/default-dashboard.component */ "./src/app/views/dashboard/default-dashboard/default-dashboard.component.ts");




var DashboardRoutes = [
    {
        path: "default",
        component: _default_dashboard_default_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DefaultDashboardComponent"],
        data: { title: "Default", breadcrumb: "Default" }
    },
    {
        path: "analytics",
        component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_0__["AnalyticsComponent"],
        data: { title: "Analytics", breadcrumb: "Analytics" }
    },
    {
        path: "crypto",
        component: _cryptocurrency_cryptocurrency_component__WEBPACK_IMPORTED_MODULE_2__["CryptocurrencyComponent"],
        data: { title: "Cryptocurrency", breadcrumb: "Cryptocurrency" }
    },
    {
        path: "dark",
        component: _dashboard_dark_dashboard_dark_component__WEBPACK_IMPORTED_MODULE_1__["DashboardDarkComponent"],
        data: { title: "Dark Cards", breadcrumb: "Dark Cards" }
    }
];


/***/ }),

/***/ "./src/app/views/dashboard/default-dashboard/default-dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/views/dashboard/default-dashboard/default-dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Dashboard card row -->\n<div fxLayout=\"row wrap\">\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" [@animate]=\"{value:'*',params:{scale:'.9',delay:'300ms'}}\">\n    <mat-card>\n      <mat-card-title fxLayoutAlign=\"start center\">\n        <small class=\"text-muted\">Total Sales</small>\n        <span fxFlex></span>\n        <mat-chip\n        class=\"icon-chip\" \n        color=\"primary\" \n        selected=\"true\"><mat-icon>trending_up</mat-icon>20%</mat-chip>\n      </mat-card-title>\n      <mat-card-content>\n        <h3 class=\"m-0 font-normal\">22,450</h3>\n        <small class=\"text-muted\">Monthly</small>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" [@animate]=\"{value:'*',params:{delay:'300ms',scale:'.9'}}\">\n    <mat-card>\n      <mat-card-title>\n        <small class=\"text-muted\">Revenue</small>\n        <span fxFlex></span>\n        <mat-chip\n        class=\"icon-chip\" \n        color=\"accent\" \n        selected=\"true\"><mat-icon>trending_up</mat-icon>10%</mat-chip>\n      </mat-card-title>\n      <mat-card-content>\n        <h3 class=\"m-0 font-normal\">377,670</h3>\n        <small class=\"text-muted\">Monthly</small>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" [@animate]=\"{value:'*',params:{delay:'300ms',scale:'.9'}}\">\n    <mat-card>\n      <mat-card-title>\n        <small class=\"text-muted\">Traffic</small>\n        <span fxFlex></span>\n        <mat-chip\n        class=\"icon-chip\" \n        color=\"accent\" \n        selected=\"true\"><mat-icon>trending_up</mat-icon>9%</mat-chip>\n      </mat-card-title>\n      <mat-card-content>\n        <h3 class=\"m-0 font-normal\">54,845</h3>\n        <small class=\"text-muted\">Monthly</small>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" [@animate]=\"{value:'*',params:{delay:'300ms',scale:'.9'}}\">\n    <mat-card>\n      <mat-card-title>\n        <small class=\"text-muted\">New User</small>\n        <span fxFlex></span>\n        <mat-chip\n        class=\"icon-chip\" \n        color=\"warn\" \n        selected=\"true\"><mat-icon>trending_down</mat-icon>2%</mat-chip>\n      </mat-card-title>\n      <mat-card-content>\n        <h3 class=\"m-0 font-normal\">245</h3>\n        <small class=\"text-muted\">Monthly</small>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n\n<!-- Fullwidth chart -->\n<div fxLayout=\"row wrap\" [@animate]=\"{value:'*',params:{y:'25px',delay:'300ms'}}\">\n  <div fxFlex=\"100\">\n    <mat-card class=\"default\">\n      <mat-card-title class=\"\">\n        <span>Orders</span>\n        <span fxFlex></span>\n      </mat-card-title>\n      <mat-card-subtitle>Orders vs New user registrations</mat-card-subtitle>\n      <mat-card-content class=\"p-0\" [style.height]=\"'240px'\">\n        <canvas \n          height=\"240\"\n          baseChart \n          class=\"chart m-0\"\n          [datasets]=\"lineChartSteppedData\"\n          [labels]=\"lineChartLabels\"\n          [options]=\"lineChartOptions\"\n          [colors]=\"lineChartColors\"\n          [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType\"></canvas>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n\n<div fxLayout=\"row wrap\">\n  <!-- Gallery and chart column -->\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"33.33\" fxLayout=\"column\">\n    <mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{delay:'300ms',scale:'.9'}}\">\n      <div fxLayout=\"row wrap\" class=\"doughnut-grid text-center\">\n          <div fxFlex=\"50\" class=\"doughnut-grid-item light-mat-gray\">\n            <canvas \n            height=\"120\"\n            baseChart\n            class=\"chart\"\n            [data]=\"doughnutChartData1\"\n            [options]=\"doughnutOptions\"\n            [labels]=\"doughnutLabels\"\n            [colors]=\"doughnutChartColors1\"\n            [chartType]=\"doughnutChartType\"></canvas>\n            <small>Space: {{data1}}/{{total1}} GB</small>\n        </div>\n        <div fxFlex=\"50\" class=\"doughnut-grid-item\">\n          <canvas \n            height=\"120\" \n            baseChart \n            class=\"chart\"\n            [data]=\"doughnutChartData2\"\n            [options]=\"doughnutOptions\"\n            [labels]=\"doughnutLabels\"\n            [colors]=\"doughnutChartColors2\"\n            [chartType]=\"doughnutChartType\"></canvas>\n            <small>Tasks: 8/12</small>\n      </div>\n      <div fxFlex=\"50\" class=\"doughnut-grid-item\">\n        <canvas \n          height=\"120\" \n          baseChart \n          class=\"chart\"\n          [data]=\"doughnutChartData1\"\n          [options]=\"doughnutOptions\"\n          [labels]=\"doughnutLabels\"\n          [colors]=\"doughnutChartColors2\"\n          [chartType]=\"doughnutChartType\"></canvas>\n          <small>Tickets: 15/40</small>\n      </div>\n      <div fxFlex=\"50\" class=\"doughnut-grid-item light-mat-gray\">\n        <canvas \n        height=\"120\" \n        baseChart \n        class=\"chart\"\n        [data]=\"doughnutChartData2\"\n        [options]=\"doughnutOptions\"\n        [labels]=\"doughnutLabels\"\n        [colors]=\"doughnutChartColors1\"\n        [chartType]=\"doughnutChartType\"></canvas>\n        <small>Stock: 1600/2000</small>\n      </div>\n    </div>\n    </mat-card>\n\n    <mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{scale:'.9',delay:'300ms'}}\">\n      <mat-card-title class=\"\">\n        <div class=\"card-title-text\">\n          <span>Top Campaign Performance</span>\n          <span fxFlex></span>\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu2\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #menu2=\"matMenu\">\n            <button mat-menu-item>\n              <mat-icon>settings</mat-icon>\n              <span>Campaign Settings</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>do_not_disturb</mat-icon>\n              <span>Disable All Campaigns</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>close</mat-icon>\n              <span>Remove panel</span>\n            </button>\n          </mat-menu>\n        </div>\n        <mat-divider></mat-divider>\n      </mat-card-title>\n      <mat-card-content>\n       <div class=\"mb-1\">\n        <p class=\"mb-05 text-muted\">Facebook Campaign</p>\n        <mat-progress-bar\n        class=\"\"\n        color=\"primary\"\n        mode=\"determinate\"\n        [value]=\"90\">\n        </mat-progress-bar>\n       </div>\n       <div class=\"mb-1\">\n        <p class=\"mb-05 text-muted\">Google AdSense</p>\n        <mat-progress-bar\n        class=\"\"\n        color=\"primary\"\n        mode=\"determinate\"\n        [value]=\"80\">\n        </mat-progress-bar>\n       </div>\n       <div class=\"mb-1\">\n        <p class=\"mb-05 text-muted\">Twitter Campaign</p>\n        <mat-progress-bar\n        class=\"\"\n        color=\"accent\"\n        mode=\"determinate\"\n        [value]=\"60\">\n        </mat-progress-bar>\n       </div>\n       <div class=\"mb-1\">\n        <p class=\"mb-05 text-muted\">LinkedIn Campaign</p>\n        <mat-progress-bar\n        class=\"\"\n        color=\"warn\"\n        mode=\"determinate\"\n        [value]=\"40\">\n        </mat-progress-bar>\n       </div>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card class=\"default\">\n      <mat-card-content class=\"p-0\">\n        <mat-grid-list cols=\"3\" rowHeight=\"1:1\" class=\"app-gallery\">\n          <!-- Gallery item -->\n          <mat-grid-tile *ngFor=\"let photo of photos\">\n            <img [src]=\"photo.url\" alt=\"\">\n            <!-- item detail, show on hover -->\n            <div class=\"gallery-control-wrap\">\n              <div class=\"gallery-control\">\n                <h4 class=\"photo-detail fz-1\" [fxHide.lt-sm]=\"true\">{{photo.name}}</h4>\n                <span fxFlex></span>\n                <button mat-icon-button [matMenuTriggerFor]=\"photoMenu\" class=\"\">\n                  <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #photoMenu=\"matMenu\">\n                  <button mat-menu-item><mat-icon>send</mat-icon>Send as attachment</button>\n                  <button mat-menu-item><mat-icon>favorite</mat-icon>Favorite</button>\n                  <button mat-menu-item><mat-icon>delete</mat-icon>Delete</button>\n                </mat-menu>\n              </div>\n            </div>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <!-- ticket and project table column -->\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"66.66\" fxLayout=\"column wrap\">\n    <mat-card class=\"default\" [@animate]=\"{value:'*',params:{delay:'300ms',y:'50px'}}\">\n      <mat-card-title>Recent Tickets</mat-card-title>\n      <mat-card-content class=\"p-0\">\n        <mat-list class=\"compact-list mb-1\">\n          <mat-list-item class=\"\" *ngFor=\"let t of tickets\">\n            <img mat-list-avatar class=\"mr-1\" [src]=\"t.img\" alt=\"\">\n            <div fxLayout=\"row\" fxFlex=\"100\">\n              <h6 class=\"m-0 mr-1\">{{t.name}}</h6>\n              <span fxFlex></span>\n              <div fxFlex=\"40\">{{t.text | excerpt:20 }}</div>\n              <span fxFlex></span>\n              <small class=\"text-muted mr-1\">{{ t.date | relativeTime}}</small>\n            </div>\n            <mat-chip mat-sm-chip [color]=\"'warn'\" [selected]=\"t.isOpen\">{{t.isOpen ? 'active' : 'closed'}}</mat-chip>\n          </mat-list-item>\n        </mat-list>\n        <div class=\"text-center\">\n          <button mat-button class=\"full-width\">View all</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\n      <mat-card-content class=\"p-0\">\n        <ngx-datatable\n          class=\"material ml-0 mr-0\"\n          [rows]=\"projects\"\n          [columnMode]=\"'flex'\"\n          [headerHeight]=\"50\"\n          [footerHeight]=\"0\"\n          [rowHeight]=\"'auto'\">\n          <ngx-datatable-column name=\"Sprints\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{ row?.name }}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Manager\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{ row?.user }}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Progress\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <mat-progress-bar\n                class=\"\"\n                color=\"primary\"\n                mode=\"determinate\"\n                [value]=\"row.progress\">\n              </mat-progress-bar>\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n        <div class=\"text-center\">\n          <button mat-button class=\"full-width\">View all</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    <!-- Users Row -->\n    <div fxLayout=\"row wrap\">\n      <div\n      *ngFor=\"let user of users\" \n      fxFlex=\"100\"\n      fxFlex.gt-sm=\"50\">\n        <mat-card class=\"user-card p-0\">\n          <mat-card-title class=\"mat-bg-primary\">\n            <div class=\"card-title-text\">\n              <a href=\"\" class=\"toolbar-avatar md mr-1\"><img [src]=\"user.photo\" alt=\"\"></a>\n              <span>{{user.name}}</span>\n              <span fxFlex></span>\n              <button mat-icon-button [matMenuTriggerFor]=\"userMenu\" class=\"\">\n                  <mat-icon class=\"\">more_vert</mat-icon>\n              </button>\n              <mat-menu #userMenu=\"matMenu\">\n                  <button mat-menu-item>Follow</button>\n                  <button mat-menu-item>Message</button>\n                  <button mat-menu-item>Block</button>\n                  <button mat-menu-item>Delete</button>\n              </mat-menu>\n            </div>\n            <mat-divider></mat-divider>\n          </mat-card-title>\n          <mat-card-content>\n            <!-- user detail lines-->\n            <div class=\"user-details\">\n              <p><mat-icon class=\"text-muted\">card_membership</mat-icon>{{user.membership}}</p>\n              <p><mat-icon class=\"text-muted\">date_range</mat-icon>Member since {{user.registered | date}}</p>\n              <p><mat-icon class=\"text-muted\">location_on</mat-icon>{{user.address}}</p>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n    <!-- End Users Row -->\n  </div>\n  <!-- End tables and users column -->\n</div>\n"

/***/ }),

/***/ "./src/app/views/dashboard/default-dashboard/default-dashboard.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/dashboard/default-dashboard/default-dashboard.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kZWZhdWx0LWRhc2hib2FyZC9kZWZhdWx0LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/dashboard/default-dashboard/default-dashboard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/dashboard/default-dashboard/default-dashboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DefaultDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultDashboardComponent", function() { return DefaultDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultDashboardComponent = /** @class */ (function () {
    function DefaultDashboardComponent() {
        this.lineChartSteppedData = [{
                data: [1, 8, 4, 8, 2, 2, 9],
                label: 'Order',
                borderWidth: 0,
                fill: true,
            }, {
                data: [6, 2, 9, 3, 8, 2, 1],
                label: 'New client',
                borderWidth: 1,
                fill: true,
            }];
        this.lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];
        /*
        * Full width Chart Options
        */
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            },
            scales: {
                xAxes: [{
                        display: false,
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        display: false,
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(3, 169, 244, 0.5)',
                borderColor: 'rgba(0,0,0,0)',
                pointBackgroundColor: 'rgba(3, 169, 244, 0.4)',
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: 'rgba(3, 169, 244, 1)',
                pointHoverBorderColor: 'rgba(148,159,177,0)'
            }, {
                backgroundColor: 'rgba(0, 0, 0, .08)',
                borderColor: 'rgba(0,0,0,0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0.06)',
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
                pointHoverBorderColor: 'rgba(0, 0, 0, 0)'
            }];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        // Chart grid options
        this.doughnutChartColors1 = [{
                backgroundColor: ['#fff', 'rgba(0, 0, 0, .24)',]
            }];
        this.doughnutChartColors2 = [{
                backgroundColor: ['rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .15)',]
            }];
        this.total1 = 500;
        this.data1 = 200;
        this.doughnutChartData1 = [this.data1, (this.total1 - this.data1)];
        this.total2 = 600;
        this.data2 = 400;
        this.doughnutChartData2 = [this.data2, (this.total2 - this.data2)];
        this.doughnutLabels = ['Spent', 'Remaining'];
        this.doughnutChartType = 'doughnut';
        this.doughnutOptions = {
            cutoutPercentage: 85,
            responsive: true,
            legend: {
                display: false,
                position: 'bottom'
            },
            elements: {
                arc: {
                    borderWidth: 0,
                }
            },
            tooltips: {
                enabled: true
            }
        };
        this.photos = [{
                name: 'Photo 1',
                url: 'assets/images/sq-15.jpg'
            }, {
                name: 'Photo 2',
                url: 'assets/images/sq-8.jpg'
            }, {
                name: 'Photo 3',
                url: 'assets/images/sq-9.jpg'
            }, {
                name: 'Photo 4',
                url: 'assets/images/sq-10.jpg'
            }, {
                name: 'Photo 5',
                url: 'assets/images/sq-11.jpg'
            }, {
                name: 'Photo 6',
                url: 'assets/images/sq-12.jpg'
            }];
        this.tickets = [{
                img: 'assets/images/face-1.jpg',
                name: 'Mike Dake',
                text: 'Excerpt pipe is used.',
                date: new Date('07/12/2017'),
                isOpen: true
            }, {
                img: 'assets/images/face-5.jpg',
                name: 'Jhone Doe',
                text: 'My dashboard is not working.',
                date: new Date('07/7/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-3.jpg',
                name: 'Jhonson lee',
                text: 'Fix stock issue',
                date: new Date('04/10/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-4.jpg',
                name: 'Mikie Jyni',
                text: 'Renew my subscription.',
                date: new Date('07/7/2017'),
                isOpen: false
            }];
        // users
        this.users = [
            {
                "name": "Snow Benton",
                "membership": "Paid Member",
                "phone": "+1 (956) 486-2327",
                "photo": "assets/images/face-4.jpg",
                "address": "329 Dictum Court, Minnesota",
                "registered": "2016-07-09"
            },
            {
                "name": "Kay Sellers",
                "membership": "Paid Member",
                "phone": "+1 (929) 406-3172",
                "photo": "assets/images/face-2.jpg",
                "address": "893 Garden Place, American Samoa",
                "registered": "2017-02-16"
            }
        ];
        this.projects = [{
                name: 'User Story',
                user: 'Watson Joyce',
                progress: 100,
                leader: 'Snow Benton'
            }, {
                name: 'Design Data Model',
                user: 'Morris Adams',
                progress: 30,
                leader: 'Watson Joyce'
            }, {
                name: 'Develop CR Algorithm',
                user: 'Jhone Doe',
                progress: 70,
                leader: 'Ada Kidd'
            }, {
                name: 'Payment Module',
                user: 'Ada Kidd',
                progress: 50,
                leader: 'Snow Benton'
            }, {
                name: 'Discount Module',
                user: 'Workman Floyd',
                progress: 50,
                leader: 'Robert Middleton'
            }];
    }
    DefaultDashboardComponent.prototype.ngOnInit = function () { };
    DefaultDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default-dashboard',
            template: __webpack_require__(/*! ./default-dashboard.component.html */ "./src/app/views/dashboard/default-dashboard/default-dashboard.component.html"),
            animations: app_shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
            styles: [__webpack_require__(/*! ./default-dashboard.component.scss */ "./src/app/views/dashboard/default-dashboard/default-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultDashboardComponent);
    return DefaultDashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map