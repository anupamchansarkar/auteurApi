(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-others-others-module"],{

/***/ "./src/app/views/others/app-blank/app-blank.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/others/app-blank/app-blank.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL290aGVycy9hcHAtYmxhbmsvYXBwLWJsYW5rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/others/app-blank/app-blank.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/others/app-blank/app-blank.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"m-333\">\n  This is a blank component.\n</p>\n"

/***/ }),

/***/ "./src/app/views/others/app-blank/app-blank.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/others/app-blank/app-blank.component.ts ***!
  \***************************************************************/
/*! exports provided: AppBlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBlankComponent", function() { return AppBlankComponent; });
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

var AppBlankComponent = /** @class */ (function () {
    function AppBlankComponent() {
    }
    AppBlankComponent.prototype.ngOnInit = function () {
    };
    AppBlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./app-blank.component.html */ "./src/app/views/others/app-blank/app-blank.component.html"),
            styles: [__webpack_require__(/*! ./app-blank.component.css */ "./src/app/views/others/app-blank/app-blank.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppBlankComponent);
    return AppBlankComponent;
}());



/***/ }),

/***/ "./src/app/views/others/app-gallery/app-gallery.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/others/app-gallery/app-gallery.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL290aGVycy9hcHAtZ2FsbGVyeS9hcHAtZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/others/app-gallery/app-gallery.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/others/app-gallery/app-gallery.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"m-0\">\n    <div class=\"card-title-text\">Media gallery</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content class=\"p-0\">\n    <mat-grid-list cols=\"3\" rowHeight=\"1:1\" class=\"app-gallery\">\n      <!-- Gallery item -->\n      <mat-grid-tile *ngFor=\"let photo of photos\">\n        <img [src]=\"photo.url\" alt=\"\">\n        <!-- item detail, show on hover -->\n        <div class=\"gallery-control-wrap\">\n          <div class=\"gallery-control\">\n            <h4 class=\"photo-detail fz-1\" [fxHide.lt-sm]=\"true\">{{photo.name}}</h4>\n            <span fxFlex></span>\n            <button mat-icon-button [matMenuTriggerFor]=\"photoMenu\" class=\"\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #photoMenu=\"matMenu\">\n                <button mat-menu-item><mat-icon>send</mat-icon>Send as attachment</button>\n                <button mat-menu-item><mat-icon>favorite</mat-icon>Favorite</button>\n                <button mat-menu-item><mat-icon>delete</mat-icon>Delete</button>\n            </mat-menu>\n          </div>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/views/others/app-gallery/app-gallery.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/others/app-gallery/app-gallery.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGalleryComponent", function() { return AppGalleryComponent; });
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

var AppGalleryComponent = /** @class */ (function () {
    function AppGalleryComponent() {
        this.photos = [{
                name: 'Photo 1',
                url: 'assets/images/sq-10.jpg'
            }, {
                name: 'Photo 2',
                url: 'assets/images/sq-16.jpg'
            }, {
                name: 'Photo 3',
                url: 'assets/images/sq-15.jpg'
            }, {
                name: 'Photo 4',
                url: 'assets/images/sq-17.jpg'
            }, {
                name: 'Photo 5',
                url: 'assets/images/sq-13.jpg'
            }, {
                name: 'Photo 6',
                url: 'assets/images/sq-12.jpg'
            }, {
                name: 'Photo 7',
                url: 'assets/images/sq-11.jpg'
            }, {
                name: 'Photo 8',
                url: 'assets/images/sq-10.jpg'
            }];
    }
    AppGalleryComponent.prototype.ngOnInit = function () {
    };
    AppGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./app-gallery.component.html */ "./src/app/views/others/app-gallery/app-gallery.component.html"),
            styles: [__webpack_require__(/*! ./app-gallery.component.css */ "./src/app/views/others/app-gallery/app-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppGalleryComponent);
    return AppGalleryComponent;
}());



/***/ }),

/***/ "./src/app/views/others/app-pricing/app-pricing.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/others/app-pricing/app-pricing.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL290aGVycy9hcHAtcHJpY2luZy9hcHAtcHJpY2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/others/app-pricing/app-pricing.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/others/app-pricing/app-pricing.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Plans and Pricing</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <mat-slide-toggle [(ngModel)]=\"isAnnualSelected\" color=\"primary\" class=\"mb-1\">Get upto 10% discount annually</mat-slide-toggle>\n\n    <div fxLayout=\"row wrap\">\n      <!-- Pricing box -->\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\n        <mat-card class=\"plan-pricing text-center p-0\">\n          <mat-card-title class=\"light-gray\">\n            <div class=\"card-title-text\">\n              <div class=\"\">Developer</div>\n              <div class=\"text-sm text-muted\">For New Developers</div>\n            </div>\n            <mat-divider></mat-divider>\n          </mat-card-title>\n          <mat-card-content>\n            <h1><strong>FREE</strong></h1>\n            <mat-list dense class=\"mb-1\">\n              <mat-list-item>10GB of Bandwidth</mat-list-item>\n              <mat-list-item>Max 50 connection</mat-list-item>\n              <mat-list-item>512MB RAM</mat-list-item>\n              <mat-list-item class=\"text-muted\">Unlimited access</mat-list-item>\n              <mat-list-item class=\"text-muted\">Unlimited User</mat-list-item>\n              <mat-list-item class=\"text-muted\">Data analytics</mat-list-item>\n            </mat-list>\n            <button mat-raised-button class=\"mat-accent\">Choose</button>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <!-- Pricing box -->\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\n        <mat-card class=\"plan-pricing text-center p-0\">\n          <mat-card-title class=\"mat-bg-primary\">\n            <div class=\"card-title-text\">\n              <div class=\"\">Starter</div>\n              <div class=\"text-sm text-muted-white\">For Professional Developers</div>\n            </div>\n            <mat-divider></mat-divider>\n          </mat-card-title>\n          <mat-card-content>\n            <h1>\n              <strong>$ \n              <span *ngIf=\"!isAnnualSelected\">{{30}} /Mo</span>\n              <span *ngIf=\"isAnnualSelected\">{{30 * 12 * .9}} /Yr</span>\n              </strong>\n            </h1>\n            <mat-list dense class=\"mb-1\">\n              <mat-list-item>100GB of Bandwidth</mat-list-item>\n              <mat-list-item>Max 500 connection</mat-list-item>\n              <mat-list-item>1GB RAM</mat-list-item>\n              <mat-list-item>Unlimited access</mat-list-item>\n              <mat-list-item class=\"text-muted\">Unlimited User</mat-list-item>\n              <mat-list-item class=\"text-muted\">Data analytics</mat-list-item>\n            </mat-list>\n            <button mat-raised-button class=\"mat-accent\">Choose</button>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <!-- Pricing box -->\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\n        <mat-card class=\"plan-pricing text-center p-0\">\n          <mat-card-title class=\"light-gray\">\n            <div class=\"card-title-text\">\n              <div class=\"\">Business</div>\n              <div class=\"text-sm text-muted\">For Small Businesses</div>\n            </div>\n            <mat-divider></mat-divider>\n          </mat-card-title>\n          <mat-card-content>\n            <h1>\n              <strong>$ \n              <span *ngIf=\"!isAnnualSelected\">{{60}} /Mo</span>\n              <span *ngIf=\"isAnnualSelected\">{{60 * 12 * .9}} /Yr</span>\n              </strong>\n            </h1>\n            <mat-list dense class=\"mb-1\">\n              <mat-list-item>100GB of Bandwidth</mat-list-item>\n              <mat-list-item>Max 1500 connection</mat-list-item>\n              <mat-list-item>2GB RAM</mat-list-item>\n              <mat-list-item>Unlimited access</mat-list-item>\n              <mat-list-item>Unlimited User</mat-list-item>\n              <mat-list-item class=\"text-muted\">Data analytics</mat-list-item>\n            </mat-list>\n            <button mat-raised-button class=\"mat-accent\">Choose</button>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <!-- Pricing box -->\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\n        <mat-card class=\"plan-pricing text-center p-0\">\n          <mat-card-title class=\"light-gray\">\n            <div class=\"card-title-text\">\n              <div class=\"\">Enterprise</div>\n              <div class=\"text-sm text-muted\">For Large companies</div>\n            </div>\n            <mat-divider></mat-divider>\n          </mat-card-title>\n          <mat-card-content>\n            <h1>\n              <strong>$ \n              <span *ngIf=\"!isAnnualSelected\">{{160}} /Mo</span>\n              <span *ngIf=\"isAnnualSelected\">{{160 * 12 * .9}} /Yr</span>\n              </strong>\n            </h1>\n            <mat-list dense class=\"mb-1\">\n              <mat-list-item>1000GB of Bandwidth</mat-list-item>\n              <mat-list-item>Max 5000 connection</mat-list-item>\n              <mat-list-item>8GB RAM</mat-list-item>\n              <mat-list-item>Unlimited access</mat-list-item>\n              <mat-list-item>Unlimited User</mat-list-item>\n              <mat-list-item>Data analytics</mat-list-item>\n            </mat-list>\n            <button mat-raised-button class=\"mat-accent\">Choose</button>\n          </mat-card-content>\n        </mat-card>\n      </div>\n\n    </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/views/others/app-pricing/app-pricing.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/others/app-pricing/app-pricing.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppPricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPricingComponent", function() { return AppPricingComponent; });
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

var AppPricingComponent = /** @class */ (function () {
    function AppPricingComponent() {
        this.isAnnualSelected = false;
    }
    AppPricingComponent.prototype.ngOnInit = function () {
    };
    AppPricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./app-pricing.component.html */ "./src/app/views/others/app-pricing/app-pricing.component.html"),
            styles: [__webpack_require__(/*! ./app-pricing.component.css */ "./src/app/views/others/app-pricing/app-pricing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppPricingComponent);
    return AppPricingComponent;
}());



/***/ }),

/***/ "./src/app/views/others/app-users/app-users.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/others/app-users/app-users.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL290aGVycy9hcHAtdXNlcnMvYXBwLXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/others/app-users/app-users.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/others/app-users/app-users.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n  <div\n  *ngFor=\"let user of users\" \n  fxFlex=\"100\"\n  fxFlex.gt-sm=\"33\"\n  fxFlex.sm=\"50\">\n    <mat-card class=\"user-card p-0\">\n      <mat-card-title>\n        <div class=\"card-title-text\">\n          <a href=\"\" class=\"toolbar-avatar md mr-1\"><img [src]=\"user.photo\" alt=\"\"></a>\n          <span>{{user.name}}</span>\n          <span fxFlex></span>\n          <button mat-icon-button [matMenuTriggerFor]=\"userMenu\" class=\"\">\n              <mat-icon class=\"\">more_vert</mat-icon>\n          </button>\n          <mat-menu #userMenu=\"matMenu\">\n              <button mat-menu-item>Follow</button>\n              <button mat-menu-item>Message</button>\n              <button mat-menu-item>Block</button>\n              <button mat-menu-item>Delete</button>\n          </mat-menu>\n        </div>\n        <mat-divider></mat-divider>\n      </mat-card-title>\n      <mat-card-content>\n        <!-- user detail lines-->\n        <div class=\"user-details\">\n          <p><mat-icon class=\"text-muted\">card_membership</mat-icon>{{user.membership}}</p>\n          <p><mat-icon class=\"text-muted\">date_range</mat-icon>Member since {{user.registered | date}}</p>\n          <p><mat-icon class=\"text-muted\">phone</mat-icon>{{user.phone}}</p>\n          <p><mat-icon class=\"text-muted\">location_on</mat-icon>{{user.address}}</p>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/others/app-users/app-users.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/others/app-users/app-users.component.ts ***!
  \***************************************************************/
/*! exports provided: AppUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUsersComponent", function() { return AppUsersComponent; });
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

var AppUsersComponent = /** @class */ (function () {
    function AppUsersComponent() {
        this.users = [
            {
                'name': 'Snow Benton',
                'membership': 'Paid Member',
                'phone': '+1 (956) 486-2327',
                'photo': 'assets/images/face-1.jpg',
                'address': '329 Dictum Court, Minnesota',
                'registered': '2016-07-09'
            },
            {
                'name': 'Kay Sellers',
                'membership': 'Paid Member',
                'phone': '+1 (929) 406-3172',
                'photo': 'assets/images/face-2.jpg',
                'address': '893 Garden Place, American Samoa',
                'registered': '2017-02-16'
            },
            {
                'name': 'Robert Middleton',
                'membership': 'Paid Member',
                'phone': '+1 (995) 451-2205',
                'photo': 'assets/images/face-3.jpg',
                'address': '301 Hazel Court, West Virginia',
                'registered': '2017-01-22'
            },
            {
                'name': 'Delaney Randall',
                'membership': 'Paid Member',
                'phone': '+1 (922) 599-2410',
                'photo': 'assets/images/face-4.jpg',
                'address': '128 Kensington Walk, Ohio',
                'registered': '2016-12-08'
            },
            {
                'name': 'Melendez Lawrence',
                'membership': 'Paid Member',
                'phone': '+1 (824) 589-2029',
                'photo': 'assets/images/face-5.jpg',
                'address': '370 Lincoln Avenue, Florida',
                'registered': '2015-03-29'
            },
            {
                'name': 'Galloway Fitzpatrick',
                'membership': 'Paid Member',
                'phone': '+1 (907) 477-2375',
                'photo': 'assets/images/face-6.jpg',
                'address': '296 Stuyvesant Avenue, Iowa',
                'registered': '2015-12-12'
            },
            {
                'name': 'Watson Joyce',
                'membership': 'Paid Member',
                'phone': '+1 (982) 500-3137',
                'photo': 'assets/images/face-7.jpg',
                'address': '224 Visitation Place, Illinois',
                'registered': '2015-08-19'
            },
            {
                'name': 'Ada Kidd',
                'membership': 'Paid Member',
                'phone': '+1 (832) 531-2385',
                'photo': 'assets/images/face-1.jpg',
                'address': '230 Oxford Street, South Dakota',
                'registered': '2016-08-11'
            },
            {
                'name': 'Raquel Mcintyre',
                'membership': 'Paid Member',
                'phone': '+1 (996) 443-2102',
                'photo': 'assets/images/face-2.jpg',
                'address': '393 Sullivan Street, Palau',
                'registered': '2014-09-03'
            },
            {
                'name': 'Juliette Hunter',
                'membership': 'Paid Member',
                'phone': '+1 (876) 568-2964',
                'photo': 'assets/images/face-3.jpg',
                'address': '191 Stryker Court, New Jersey',
                'registered': '2017-01-18'
            },
            {
                'name': 'Workman Floyd',
                'membership': 'Paid Member',
                'phone': '+1 (996) 481-2712',
                'photo': 'assets/images/face-4.jpg',
                'address': '350 Imlay Street, Utah',
                'registered': '2017-05-01'
            },
            {
                'name': 'Amanda Bean',
                'membership': 'Paid Member',
                'phone': '+1 (894) 512-3907',
                'photo': 'assets/images/face-5.jpg',
                'address': '254 Stockton Street, Vermont',
                'registered': '2014-08-30'
            }
        ];
    }
    AppUsersComponent.prototype.ngOnInit = function () {
    };
    AppUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./app-users.component.html */ "./src/app/views/others/app-users/app-users.component.html"),
            styles: [__webpack_require__(/*! ./app-users.component.css */ "./src/app/views/others/app-users/app-users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppUsersComponent);
    return AppUsersComponent;
}());



/***/ }),

/***/ "./src/app/views/others/nested1/nested1.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/others/nested1/nested1.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nested1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/others/nested1/nested1.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/others/nested1/nested1.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL290aGVycy9uZXN0ZWQxL25lc3RlZDEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/others/nested1/nested1.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/others/nested1/nested1.component.ts ***!
  \***********************************************************/
/*! exports provided: Nested1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nested1Component", function() { return Nested1Component; });
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

var Nested1Component = /** @class */ (function () {
    function Nested1Component() {
    }
    Nested1Component.prototype.ngOnInit = function () {
    };
    Nested1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nested1',
            template: __webpack_require__(/*! ./nested1.component.html */ "./src/app/views/others/nested1/nested1.component.html"),
            styles: [__webpack_require__(/*! ./nested1.component.scss */ "./src/app/views/others/nested1/nested1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Nested1Component);
    return Nested1Component;
}());



/***/ }),

/***/ "./src/app/views/others/nested2/nested2.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/others/nested2/nested2.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nested2 works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/others/nested2/nested2.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/others/nested2/nested2.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL290aGVycy9uZXN0ZWQyL25lc3RlZDIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/others/nested2/nested2.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/others/nested2/nested2.component.ts ***!
  \***********************************************************/
/*! exports provided: Nested2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nested2Component", function() { return Nested2Component; });
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

var Nested2Component = /** @class */ (function () {
    function Nested2Component() {
    }
    Nested2Component.prototype.ngOnInit = function () {
    };
    Nested2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nested2',
            template: __webpack_require__(/*! ./nested2.component.html */ "./src/app/views/others/nested2/nested2.component.html"),
            styles: [__webpack_require__(/*! ./nested2.component.scss */ "./src/app/views/others/nested2/nested2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Nested2Component);
    return Nested2Component;
}());



/***/ }),

/***/ "./src/app/views/others/nested3/nested3.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/others/nested3/nested3.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p routerLink=\"/others/n1\">\n  nested3 works!\n</p>\n\n<button (click)=\"go()\">go</button>\n"

/***/ }),

/***/ "./src/app/views/others/nested3/nested3.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/others/nested3/nested3.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL290aGVycy9uZXN0ZWQzL25lc3RlZDMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/others/nested3/nested3.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/others/nested3/nested3.component.ts ***!
  \***********************************************************/
/*! exports provided: Nested3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nested3Component", function() { return Nested3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Nested3Component = /** @class */ (function () {
    function Nested3Component(r) {
        this.r = r;
    }
    Nested3Component.prototype.ngOnInit = function () {
    };
    Nested3Component.prototype.go = function () {
        this.r.navigate(['/dashboard']);
    };
    Nested3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nested3',
            template: __webpack_require__(/*! ./nested3.component.html */ "./src/app/views/others/nested3/nested3.component.html"),
            styles: [__webpack_require__(/*! ./nested3.component.scss */ "./src/app/views/others/nested3/nested3.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Nested3Component);
    return Nested3Component;
}());



/***/ }),

/***/ "./src/app/views/others/others.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/others/others.module.ts ***!
  \***********************************************/
/*! exports provided: OthersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersModule", function() { return OthersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_gallery_app_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-gallery/app-gallery.component */ "./src/app/views/others/app-gallery/app-gallery.component.ts");
/* harmony import */ var _app_pricing_app_pricing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-pricing/app-pricing.component */ "./src/app/views/others/app-pricing/app-pricing.component.ts");
/* harmony import */ var _app_users_app_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-users/app-users.component */ "./src/app/views/others/app-users/app-users.component.ts");
/* harmony import */ var _app_blank_app_blank_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-blank/app-blank.component */ "./src/app/views/others/app-blank/app-blank.component.ts");
/* harmony import */ var _others_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./others.routing */ "./src/app/views/others/others.routing.ts");
/* harmony import */ var _nested1_nested1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nested1/nested1.component */ "./src/app/views/others/nested1/nested1.component.ts");
/* harmony import */ var _nested2_nested2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nested2/nested2.component */ "./src/app/views/others/nested2/nested2.component.ts");
/* harmony import */ var _nested3_nested3_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nested3/nested3.component */ "./src/app/views/others/nested3/nested3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var OthersModule = /** @class */ (function () {
    function OthersModule() {
    }
    OthersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_others_routing__WEBPACK_IMPORTED_MODULE_14__["OthersRoutes"])
            ],
            declarations: [
                _app_gallery_app_gallery_component__WEBPACK_IMPORTED_MODULE_10__["AppGalleryComponent"],
                _app_pricing_app_pricing_component__WEBPACK_IMPORTED_MODULE_11__["AppPricingComponent"],
                _app_users_app_users_component__WEBPACK_IMPORTED_MODULE_12__["AppUsersComponent"],
                _app_blank_app_blank_component__WEBPACK_IMPORTED_MODULE_13__["AppBlankComponent"], _nested1_nested1_component__WEBPACK_IMPORTED_MODULE_15__["Nested1Component"], _nested2_nested2_component__WEBPACK_IMPORTED_MODULE_16__["Nested2Component"], _nested3_nested3_component__WEBPACK_IMPORTED_MODULE_17__["Nested3Component"]
            ]
        })
    ], OthersModule);
    return OthersModule;
}());



/***/ }),

/***/ "./src/app/views/others/others.routing.ts":
/*!************************************************!*\
  !*** ./src/app/views/others/others.routing.ts ***!
  \************************************************/
/*! exports provided: OthersRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersRoutes", function() { return OthersRoutes; });
/* harmony import */ var _app_gallery_app_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-gallery/app-gallery.component */ "./src/app/views/others/app-gallery/app-gallery.component.ts");
/* harmony import */ var _app_pricing_app_pricing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-pricing/app-pricing.component */ "./src/app/views/others/app-pricing/app-pricing.component.ts");
/* harmony import */ var _app_users_app_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-users/app-users.component */ "./src/app/views/others/app-users/app-users.component.ts");
/* harmony import */ var _app_blank_app_blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-blank/app-blank.component */ "./src/app/views/others/app-blank/app-blank.component.ts");
/* harmony import */ var _nested1_nested1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nested1/nested1.component */ "./src/app/views/others/nested1/nested1.component.ts");
/* harmony import */ var _nested2_nested2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nested2/nested2.component */ "./src/app/views/others/nested2/nested2.component.ts");
/* harmony import */ var _nested3_nested3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested3/nested3.component */ "./src/app/views/others/nested3/nested3.component.ts");







var OthersRoutes = [
    {
        path: '',
        children: [{
                path: 'gallery',
                component: _app_gallery_app_gallery_component__WEBPACK_IMPORTED_MODULE_0__["AppGalleryComponent"],
                data: { title: 'Gallery', breadcrumb: 'GALLERY' }
            }, {
                path: 'pricing',
                component: _app_pricing_app_pricing_component__WEBPACK_IMPORTED_MODULE_1__["AppPricingComponent"],
                data: { title: 'Pricing', breadcrumb: 'PRICINGS' }
            }, {
                path: 'users',
                component: _app_users_app_users_component__WEBPACK_IMPORTED_MODULE_2__["AppUsersComponent"],
                data: { title: 'Users', breadcrumb: 'USERS' }
            }, {
                path: 'blank',
                component: _app_blank_app_blank_component__WEBPACK_IMPORTED_MODULE_3__["AppBlankComponent"],
                data: { title: 'Blank', breadcrumb: 'BLANK' }
            }, {
                path: 'n1',
                component: _nested1_nested1_component__WEBPACK_IMPORTED_MODULE_4__["Nested1Component"],
                data: { title: '1', breadcrumb: '1' }
            }, {
                path: 'n1/n2',
                component: _nested2_nested2_component__WEBPACK_IMPORTED_MODULE_5__["Nested2Component"],
                data: { title: '2', breadcrumb: '2' }
            }, {
                path: 'n1/n3',
                component: _nested3_nested3_component__WEBPACK_IMPORTED_MODULE_6__["Nested3Component"],
                data: { title: '3', breadcrumb: '3' }
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=views-others-others-module.js.map