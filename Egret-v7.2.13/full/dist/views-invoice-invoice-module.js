(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-invoice-invoice-module"],{

/***/ "./src/app/views/invoice/invoice-details/invoice-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/invoice/invoice-details/invoice-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Edit Invoice -->\n<mat-card *ngIf=\"showEditOption\">\n  <form [formGroup]=\"invoiceForm\" (ngSubmit)=\"saveInvoice()\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n      <button\n        mat-button\n        type=\"button\"\n        class=\"ml-1 mr-1\"\n        *ngIf=\"!isLoading\"\n        (click)=\"showEditOption = !showEditOption\"\n      >\n        Cancel\n      </button>\n\n      <button-loading\n        [loadingText]=\"'Saving...'\"\n        color=\"primary\"\n        [type]=\"'submit'\"\n        [loading]=\"isLoading\"\n        >Save</button-loading\n      >\n    </div>\n\n    <!-- order details -->\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" class=\"order-info\">\n      <div fxLayout=\"column\" fxFlex=\"33.33%\">\n        <h4><strong>Order Info</strong></h4>\n        <p>Order Number</p>\n        <mat-form-field>\n          <input\n            formControlName=\"orderNo\"\n            matInput\n            required\n            placeholder=\"Order No.\"\n          />\n        </mat-form-field>\n      </div>\n\n      <div fxLayout=\"column\" fxFlex=\"33.33%\" fxLayoutGap=\"20px\">\n        <div>\n          <mat-radio-group\n            formControlName=\"status\"\n            fxLayout=\"column\"\n            fxLayoutAlign=\"end end\"\n            fxLayoutGap=\"5px\"\n            required\n          >\n            <mat-radio-button labelPosition=\"before\" value=\"pending\"\n              >Pending</mat-radio-button\n            >\n            <mat-radio-button labelPosition=\"before\" value=\"processing\"\n              >Processing</mat-radio-button\n            >\n            <mat-radio-button labelPosition=\"before\" value=\"delivered\"\n              >Delivered</mat-radio-button\n            >\n          </mat-radio-group>\n        </div>\n\n        <div>\n          <p class=\"align-right\">Order Date</p>\n          <mat-form-field fxFill>\n            <input\n              matInput\n              [matDatepicker]=\"picker\"\n              required\n              placeholder=\"Choose a date\"\n              formControlName=\"date\"\n            />\n            <mat-datepicker-toggle\n              matSuffix\n              [for]=\"picker\"\n            ></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <!-- end of order details -->\n\n    <mat-divider></mat-divider>\n\n    <!-- billing details -->\n    <div\n      class=\"billing-address\"\n      fxLayout=\"row wrap\"\n      fxLayoutAlign=\"space-between center\"\n    >\n      <!-- seller -->\n      <div\n        formGroupName=\"seller\"\n        fxLayout=\"column\"\n        fxLayoutGap=\"20px\"\n        fxFlex=\"33.33%\"\n      >\n        <h4><strong>Bill From</strong></h4>\n        <mat-form-field>\n          <input\n            formControlName=\"name\"\n            matInput\n            required\n            placeholder=\"Name of Seller\"\n          />\n        </mat-form-field>\n        <mat-form-field>\n          <textarea\n            formControlName=\"address\"\n            matInput\n            required\n            matTextareaAutosize\n            placeholder=\"Address of Seller\"\n          ></textarea>\n        </mat-form-field>\n      </div>\n\n      <!-- buyer -->\n      <div\n        formGroupName=\"buyer\"\n        fxLayout=\"column\"\n        fxLayoutAlign=\"center end\"\n        fxLayoutGap=\"20px\"\n        fxFlex=\"33.33%\"\n      >\n        <h4><strong>Bill To</strong></h4>\n        <mat-form-field fxFill>\n          <input\n            formControlName=\"name\"\n            matInput\n            required\n            placeholder=\"Name of Buyer\"\n          />\n        </mat-form-field>\n        <mat-form-field fxFill>\n          <textarea\n            formControlName=\"address\"\n            matInput\n            required\n            matTextareaAutosize\n            placeholder=\"Address of Buyer\"\n          ></textarea>\n        </mat-form-field>\n      </div>\n    </div>\n    <!-- end of billing details -->\n\n    <!-- item form table -->\n    <div formArrayName=\"item\" class=\"item-form-list\" fxLayout=\"column\">\n      <div\n        class=\"item-form-list-head-line\"\n        fxLayout=\"row\"\n        fxLayoutAlign=\"space-around center\"\n      >\n        <p>#</p>\n        <p>Item Name</p>\n        <p>Unit Price</p>\n        <p>Unit</p>\n        <p>Cost</p>\n        <p></p>\n      </div>\n\n      <div\n        *ngFor=\"let item of invoiceItemFormArray.controls; let i = index\"\n        [formGroup]=\"item\"\n        class=\"form-rows\"\n        fxLayout=\"row\"\n        fxLayoutAlign=\"space-around center\"\n      >\n        <span>{{ i + 1 }}</span>\n        <mat-form-field>\n          <input\n            formControlName=\"name\"\n            matInput\n            placeholder=\"Item Name\"\n            #name\n            required\n          />\n        </mat-form-field>\n        <mat-form-field>\n          <input\n            type=\"number\"\n            formControlName=\"price\"\n            matInput\n            placeholder=\"Item Price\"\n            #price\n            required\n          />\n        </mat-form-field>\n        <mat-form-field>\n          <input\n            type=\"number\"\n            formControlName=\"unit\"\n            matInput\n            placeholder=\"Item Unit\"\n            #unit\n            required\n          />\n        </mat-form-field>\n        <span>{{ unit.value * price.value }}</span>\n        <button mat-button type=\"button\" (click)=\"deleteItemFromInvoice(i)\">\n          Delete\n        </button>\n      </div>\n      <!-- end of item form table -->\n\n      <!-- add item button -->\n      <div class=\"add-button\">\n        <button mat-button type=\"button\" (click)=\"addNewItem(emptyFormObject)\">\n          Add Item\n        </button>\n      </div>\n    </div>\n\n    <!-- total cost of item form -->\n    <div\n      class=\"form-total-cost\"\n      fxLayout=\"column\"\n      fxLayoutAlign=\"center end\"\n      fxLayoutGap=\"10px\"\n    >\n      <!-- sub total -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <span>Sub Total:</span>\n        <span>{{ currency }}{{ cost }}</span>\n      </div>\n\n      <!-- vat -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <span>Vat(%):</span>\n        <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"end center\">\n          <mat-form-field>\n            <input\n              type=\"number\"\n              formControlName=\"vat\"\n              matInput\n              placeholder=\"vat\"\n              required\n            />\n          </mat-form-field>\n          <span>{{ currency }}{{ vat }}</span>\n        </div>\n      </div>\n\n      <!-- grand total -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <h5><strong>Grand Total: </strong></h5>\n        <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"end center\">\n          <mat-form-field>\n            <input\n              formControlName=\"currency\"\n              matInput\n              placeholder=\"currency\"\n              required\n            />\n          </mat-form-field>\n          <h5>\n            <strong>{{ currency }}{{ cost + vat }}</strong>\n          </h5>\n        </div>\n      </div>\n    </div>\n    <!-- end of total cost -->\n  </form>\n</mat-card>\n<!-- end of edit invoice -->\n<!-- =================================================== -->\n\n<!-- =================================================== -->\n<!-- invoice details -->\n<mat-card *ngIf=\"!showEditOption\" class=\"invoice-details\">\n  <div fxLayout=\"row\">\n    <button mat-icon-button routerLink=\"/invoice/list\">\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n    <span fxFlex></span>\n\n    <button\n      mat-flat-button\n      color=\"primary\"\n      class=\"ml-1 mr-1\"\n      (click)=\"showEditOption = !showEditOption\"\n    >\n      Edit Invoice\n    </button>\n    <button mat-flat-button color=\"accent\" (click)=\"print()\">\n      Print Invoice\n    </button>\n  </div>\n  <div id=\"print-area\">\n    <!-- order details -->\n    <div class=\"order-info\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n      <div>\n        <h4><strong>Order Info</strong></h4>\n        <p>Order Number</p>\n        <p># {{ invoice?.orderNo }}</p>\n      </div>\n\n      <div>\n        <p><strong>Order status: </strong> {{ invoice?.status }}</p>\n        <p><strong>Order date: </strong> {{ invoice?.date | date }}</p>\n      </div>\n    </div>\n    <!-- end of order details -->\n\n    <mat-divider></mat-divider>\n\n    <!-- billing details -->\n    <div class=\"billing-address\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n      <!-- seller -->\n      <div>\n        <h4><strong>Bill From</strong></h4>\n        <p>{{ invoice?.seller?.name }}</p>\n        <p>{{ invoice?.seller?.address }}</p>\n      </div>\n\n      <!-- buyer -->\n      <div>\n        <h4><strong>Bill To</strong></h4>\n        <p>{{ invoice?.buyer?.name }}</p>\n        <p>{{ invoice?.buyer?.address }}</p>\n      </div>\n    </div>\n    <!-- end of billing details -->\n\n    <!-- item table -->\n    <div class=\"item-table\">\n      <mat-table [dataSource]=\"invoice.item\" class=\"mat-elevation-z4\" #table>\n        <!-- Number Column -->\n        <ng-container matColumnDef=\"{{ itemTableColumn[0] }}\">\n          <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n          <mat-cell *matCellDef=\"let element; let i = index\">\n            {{ i + 1 }}\n          </mat-cell>\n        </ng-container>\n\n        <!-- Item Name Column -->\n        <ng-container matColumnDef=\"{{ itemTableColumn[1] }}\">\n          <mat-header-cell *matHeaderCellDef>\n            {{ itemTableColumn[1] }}\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{ element.name }} </mat-cell>\n        </ng-container>\n\n        <!-- Unit price Column -->\n        <ng-container matColumnDef=\"{{ itemTableColumn[2] }}\">\n          <mat-header-cell *matHeaderCellDef>\n            {{ itemTableColumn[2] }}\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{ element.price }} </mat-cell>\n        </ng-container>\n\n        <!-- Unit Column -->\n        <ng-container matColumnDef=\"{{ itemTableColumn[3] }}\">\n          <mat-header-cell *matHeaderCellDef>\n            {{ itemTableColumn[3] }}\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{ element.unit }} </mat-cell>\n        </ng-container>\n\n        <!-- Cost column -->\n        <ng-container matColumnDef=\"{{ itemTableColumn[4] }}\">\n          <mat-header-cell *matHeaderCellDef>\n            {{ itemTableColumn[4] }}\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            {{ element.unit * element.price }}\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"itemTableColumn\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: itemTableColumn\"></mat-row>\n      </mat-table>\n    </div>\n    <!-- end of table -->\n\n    <!-- total cost -->\n    <div\n      class=\"total-cost\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"end\"\n      fxLayoutGap=\"50px\"\n    >\n      <div>\n        <p>Sub Total:</p>\n        <p>Vat:</p>\n        <h5><strong>Grand Total: </strong></h5>\n      </div>\n\n      <div>\n        <p>{{ currency }}{{ cost }}</p>\n        <p>{{ currency }}{{ vat.toFixed(2) }}</p>\n        <h5>\n          <strong>{{ currency }}{{ (cost + vat).toFixed(2) }}</strong>\n        </h5>\n      </div>\n    </div>\n    <!-- end of total cost -->\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/views/invoice/invoice-details/invoice-details.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/invoice/invoice-details/invoice-details.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2ludm9pY2UvaW52b2ljZS1kZXRhaWxzL2ludm9pY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/invoice/invoice-details/invoice-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/invoice/invoice-details/invoice-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: InvoiceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailsComponent", function() { return InvoiceDetailsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../invoice.service */ "./src/app/views/invoice/invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceDetailsComponent = /** @class */ (function () {
    function InvoiceDetailsComponent(fb, route, router, invoiceService, cdr) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.invoiceService = invoiceService;
        this.cdr = cdr;
        this.cost = 0;
        this.vat = 0;
        this.currency = '$';
        this.showEditOption = false;
        this.isLoading = false;
        this.invoice = {
            item: []
        };
        this.emptyFormObject = {
            name: "",
            price: null,
            unit: null
        };
        this.itemTableColumn = [
            "Number",
            "Item Name",
            "Unit Price",
            "Unit",
            "Cost"
        ];
    }
    InvoiceDetailsComponent.prototype.ngOnInit = function () {
        this.invocieId = this.route.snapshot.params["id"];
        if (this.invocieId) {
            this.getInvoice();
            this.showEditOption = false;
        }
        else {
            this.buildInvoiceForm();
            this.showEditOption = true;
        }
    };
    InvoiceDetailsComponent.prototype.getInvoice = function () {
        var _this = this;
        this.invoiceService.getInvoiceById(this.invocieId).subscribe(function (invoice) {
            _this.invoice = invoice;
            _this.buildInvoiceForm(_this.invoice);
            _this.calculateCost(_this.invoice);
            _this.cdr.markForCheck();
        });
    };
    InvoiceDetailsComponent.prototype.buildInvoiceForm = function (invoice) {
        var _this = this;
        this.invoiceForm = this.fb.group({
            id: [invoice ? invoice.id : ''],
            orderNo: [invoice ? invoice.orderNo : ''],
            status: invoice ? invoice.status : '',
            date: invoice ? new Date(invoice.date) : '',
            vat: invoice ? invoice.vat : 0,
            currency: invoice ? invoice.currency : '',
            seller: this.fb.group({
                name: [invoice ? invoice.seller.name : ''],
                address: [invoice ? invoice.seller.address : ''],
            }),
            buyer: this.fb.group({
                name: [invoice ? invoice.buyer.name : ''],
                address: [invoice ? invoice.buyer.address : ''],
            }),
            item: this.fb.array([])
        });
        this.invoice.item.forEach(function (i) {
            _this.addNewItem(i);
        });
        if (this.invoiceFormSub) {
            this.invoiceFormSub.unsubscribe();
        }
        this.invoiceFormSub = this.invoiceForm.valueChanges.subscribe(function (res) {
            _this.calculateCost(res);
        });
    };
    InvoiceDetailsComponent.prototype.calculateCost = function (invoice) {
        var _this = this;
        this.cost = 0;
        invoice.item.forEach(function (element) {
            _this.cost += element.unit * element.price;
        });
        this.vat = (invoice.vat * this.cost) / 100;
        this.currency = invoice.currency;
    };
    InvoiceDetailsComponent.prototype.addNewItem = function (item) {
        this.invoiceItemFormArray.push(this.fb.group({
            name: [item ? item.name : ''],
            price: [item ? item.price : ''],
            unit: [item ? item.unit : '']
        }));
    };
    InvoiceDetailsComponent.prototype.deleteItemFromInvoice = function (i) {
        this.invoiceItemFormArray.removeAt(i);
    };
    InvoiceDetailsComponent.prototype.saveInvoice = function () {
        var _this = this;
        if (this.invoiceForm.invalid) {
            return;
        }
        this.isLoading = true;
        this.invoiceService.saveInvoice(this.invoiceForm.value)
            .subscribe(function (res) {
            _this.invoice = _this.invoiceForm.value;
            _this.isLoading = false;
            _this.showEditOption = false;
            _this.cdr.markForCheck();
            if (res) {
                _this.router.navigateByUrl('/invoice/' + res.id);
            }
        });
    };
    InvoiceDetailsComponent.prototype.print = function () {
        window.print();
    };
    Object.defineProperty(InvoiceDetailsComponent.prototype, "invoiceItemFormArray", {
        get: function () {
            return this.invoiceForm.get("item");
        },
        enumerable: true,
        configurable: true
    });
    InvoiceDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-invoice-details",
            template: __webpack_require__(/*! ./invoice-details.component.html */ "./src/app/views/invoice/invoice-details/invoice-details.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./invoice-details.component.scss */ "./src/app/views/invoice/invoice-details/invoice-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], InvoiceDetailsComponent);
    return InvoiceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/invoice/invoice-list/invoice-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/invoice/invoice-list/invoice-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-033\">\n  <button\n    mat-raised-button\n    color=\"primary\"\n    [routerLink]=\"['/invoice/add']\"\n    routerLinkActive=\"router-link-active\"\n    style=\"margin-bottom: 10px;\"\n  >\n    Add Invoice\n  </button>\n  <mat-table [dataSource]=\"invoiceList\" class=\"mat-elevation-z4\" #table>\n    <!-- Number Column -->\n    <ng-container matColumnDef=\"{{ itemTableColumn[0] }}\">\n      <mat-header-cell *matHeaderCellDef>\n        {{ itemTableColumn[0] }}\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.orderNo }} </mat-cell>\n    </ng-container>\n\n    <!-- Bill from Column -->\n    <ng-container matColumnDef=\"{{ itemTableColumn[1] }}\">\n      <mat-header-cell *matHeaderCellDef>\n        {{ itemTableColumn[1] }}\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.seller.name }} </mat-cell>\n    </ng-container>\n\n    <!-- Bill to Column -->\n    <ng-container matColumnDef=\"{{ itemTableColumn[2] }}\">\n      <mat-header-cell *matHeaderCellDef>\n        {{ itemTableColumn[2] }}\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ element.buyer.name }} </mat-cell>\n    </ng-container>\n\n    <!-- Status Column -->\n    <ng-container matColumnDef=\"{{ itemTableColumn[3] }}\">\n      <mat-header-cell *matHeaderCellDef>\n        {{ itemTableColumn[3] }}\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" style=\"text-transform: capitalize;\">\n        {{ element.status }}\n      </mat-cell>\n    </ng-container>\n\n    <!-- Action column -->\n    <ng-container matColumnDef=\"{{ itemTableColumn[4] }}\">\n      <mat-header-cell *matHeaderCellDef>\n        {{ itemTableColumn[4] }}\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <button\n          mat-button\n          routerLink=\"/invoice/{{ row.id }}\"\n          routerLinkActive=\"router-link-active\"\n        >\n          View\n        </button>\n        <button mat-button (click)=\"deleteInvoiceById(row.id)\">Delete</button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"itemTableColumn\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: itemTableColumn\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "./src/app/views/invoice/invoice-list/invoice-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/invoice/invoice-list/invoice-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2ludm9pY2UvaW52b2ljZS1saXN0L2ludm9pY2UtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/invoice/invoice-list/invoice-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/invoice/invoice-list/invoice-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: InvoiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceListComponent", function() { return InvoiceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _invoice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../invoice.service */ "./src/app/views/invoice/invoice.service.ts");
/* harmony import */ var app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceListComponent = /** @class */ (function () {
    function InvoiceListComponent(invoiceService, confirmService, cdr) {
        this.invoiceService = invoiceService;
        this.confirmService = confirmService;
        this.cdr = cdr;
        this.itemTableColumn = [
            "Order No.",
            "Bill From",
            "Bill To",
            "Status",
            "Actions"
        ];
    }
    InvoiceListComponent.prototype.ngOnInit = function () {
        this.getInvoiceList();
    };
    InvoiceListComponent.prototype.getInvoiceList = function () {
        var _this = this;
        this.invoiceService.getInvoiceList()
            .subscribe(function (res) {
            _this.invoiceList = res;
            _this.cdr.detectChanges();
        });
    };
    InvoiceListComponent.prototype.deleteInvoiceById = function (id) {
        var _this = this;
        this.confirmService
            .confirm({ title: "Confirm", message: "Are you sure to delete?" })
            .subscribe(function (res) {
            if (res) {
                _this.invoiceService.deleteInvoice(id).subscribe(function (e) {
                    _this.getInvoiceList();
                });
                _this.itemTable.renderRows();
            }
            else
                return;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"])
    ], InvoiceListComponent.prototype, "itemTable", void 0);
    InvoiceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-invoice-list",
            template: __webpack_require__(/*! ./invoice-list.component.html */ "./src/app/views/invoice/invoice-list/invoice-list.component.html"),
            styles: [__webpack_require__(/*! ./invoice-list.component.scss */ "./src/app/views/invoice/invoice-list/invoice-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_invoice_service__WEBPACK_IMPORTED_MODULE_2__["InvoiceService"],
            app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__["AppConfirmService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], InvoiceListComponent);
    return InvoiceListComponent;
}());



/***/ }),

/***/ "./src/app/views/invoice/invoice-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/invoice/invoice-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: InvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function() { return InvoiceRoutingModule; });
/* harmony import */ var _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-list/invoice-list.component */ "./src/app/views/invoice/invoice-list/invoice-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-details/invoice-details.component */ "./src/app/views/invoice/invoice-details/invoice-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: "list",
        component: _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_0__["InvoiceListComponent"],
        pathMatch: "full"
    },
    {
        path: "add",
        component: _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceDetailsComponent"],
        pathMatch: "full"
    },
    {
        path: ":id",
        component: _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceDetailsComponent"],
        pathMatch: "full"
    }
];
var InvoiceRoutingModule = /** @class */ (function () {
    function InvoiceRoutingModule() {
    }
    InvoiceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InvoiceRoutingModule);
    return InvoiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/invoice/invoice.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/invoice/invoice.module.ts ***!
  \*************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-routing.module */ "./src/app/views/invoice/invoice-routing.module.ts");
/* harmony import */ var _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-list/invoice-list.component */ "./src/app/views/invoice/invoice-list/invoice-list.component.ts");
/* harmony import */ var _invoice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice.service */ "./src/app/views/invoice/invoice.service.ts");
/* harmony import */ var _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-details/invoice-details.component */ "./src/app/views/invoice/invoice-details/invoice-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/shared-material.module */ "./src/app/shared/shared-material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoiceRoutingModule"],
                app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_9__["SharedMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]
            ],
            declarations: [_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceListComponent"], _invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceDetailsComponent"]],
            providers: [_invoice_service__WEBPACK_IMPORTED_MODULE_4__["InvoiceService"]]
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ }),

/***/ "./src/app/views/invoice/invoice.service.ts":
/*!**************************************************!*\
  !*** ./src/app/views/invoice/invoice.service.ts ***!
  \**************************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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


var InvoiceService = /** @class */ (function () {
    function InvoiceService(http) {
        this.http = http;
    }
    InvoiceService.prototype.getInvoiceList = function () {
        return this.http.get('/api/invoices/');
    };
    InvoiceService.prototype.getInvoiceById = function (id) {
        return this.http.get('/api/invoices/' + id);
    };
    InvoiceService.prototype.saveInvoice = function (invoice) {
        if (invoice.id) {
            return this.http.put('/api/invoices/' + invoice.id, invoice);
        }
        else {
            invoice.id = (Math.random() * 1000000000).toString();
            return this.http.post('/api/invoices/', invoice);
        }
    };
    InvoiceService.prototype.deleteInvoice = function (id) {
        return this.http.delete('/api/invoices/' + id);
    };
    InvoiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ })

}]);
//# sourceMappingURL=views-invoice-invoice-module.js.map