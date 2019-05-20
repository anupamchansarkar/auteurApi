(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-forms-forms-module"],{

/***/ "./src/app/views/forms/basic-form/basic-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/forms/basic-form/basic-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Zvcm1zL2Jhc2ljLWZvcm0vYmFzaWMtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/forms/basic-form/basic-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/forms/basic-form/basic-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n    <mat-card-title class=\"\">\n        <div class=\"card-title-text\">Form validation</div>\n        <mat-divider></mat-divider>\n    </mat-card-title>\n    <mat-card-content>\n        <form [formGroup]=\"basicForm\">\n            <div fxLayout=\"row wrap\">\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                            <input\n                            matInput\n                            name=\"username\"\n                            formControlName=\"username\"\n                            placeholder=\"Username (Min Length: 4, Max Length: 9)\"\n                            value=\"\">\n                        </mat-form-field>\n                        <small \n                        *ngIf=\"basicForm.controls['username'].hasError('minlength') && basicForm.controls['username'].touched\" \n                        class=\"form-error-msg\"> Username require at least {{basicForm.controls['username'].errors.minlength.requiredLength}} characters </small>\n                        <small \n                        *ngIf=\"basicForm.controls['username'].hasError('maxlength') && basicForm.controls['username'].touched\" \n                        class=\"form-error-msg\"> Username can not contain more than {{basicForm.controls['username'].errors.maxlength.requiredLength}} characters </small>\n                    </div>\n\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                            <input\n                            matInput\n                            name=\"firstname\"\n                            formControlName=\"firstname\"\n                            placeholder=\"First name\"\n                            value=\"\">\n                        </mat-form-field>\n                        <small \n                        *ngIf=\"basicForm.controls['firstname'].hasError('required') && basicForm.controls['firstname'].touched\" \n                        class=\"form-error-msg\"> First name is required </small>\n                    </div>\n\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                        <input\n                            matInput\n                            type=\"email\"\n                            name=\"email\"\n                            formControlName=\"email\"\n                            placeholder=\"Your Email\"\n                            value=\"\">\n                        </mat-form-field>\n                        <small \n                        *ngIf=\"basicForm.controls['email'].hasError('required') && basicForm.controls['email'].touched\" \n                        class=\"form-error-msg\"> Email is required </small>\n                        <small \n                        *ngIf=\"basicForm.controls['email'].hasError('email') && basicForm.controls['email'].touched\" \n                        class=\"form-error-msg\"> Invaild email address </small>\n                    </div>\n\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                        <input\n                            matInput\n                            name=\"website\"\n                            formControlName=\"website\"\n                            placeholder=\"Your Website (http://mhrafi.com)\"\n                            value=\"\">\n                        </mat-form-field>\n                        <small \n                        *ngIf=\"basicForm.controls['website'].hasError('url') && basicForm.controls['website'].touched\" \n                        class=\"form-error-msg\"> Invaild web address </small>\n                    </div>\n\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                            <input \n                            matInput\n                            name=\"date\"\n                            formControlName=\"date\"\n                            placeholder=\"Date\" \n                            [matDatepicker]=\"appDatepicker\">\n                            \n                            <mat-datepicker-toggle matSuffix [for]=\"appDatepicker\"></mat-datepicker-toggle>\n                        </mat-form-field>\n                        <mat-datepicker #appDatepicker></mat-datepicker>\n                    </div>\n                </div>\n\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                            <input \n                            matInput\n                            name=\"cardno\"\n                            formControlName=\"cardno\"\n                            placeholder=\"Credit card number\">\n                        </mat-form-field>\n                        <small \n                        *ngIf=\"basicForm.controls['cardno'].hasError('creditCard') && basicForm.controls['cardno'].touched\" \n                        class=\"form-error-msg\"> Invaild card number </small>\n                    </div>\n\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                            <input \n                            matInput\n                            name=\"phone\"\n                            formControlName=\"phone\"\n                            placeholder=\"Phone number\">\n                        </mat-form-field>\n                        <small \n                        *ngIf=\"basicForm.controls['phone'].hasError('phone') && basicForm.controls['phone'].touched\" \n                        class=\"form-error-msg\"> Invaild phone number </small>\n                    </div>\n\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                        <input \n                            type=\"password\"\n                            name=\"password\"\n                            matInput\n                            formControlName=\"password\"\n                            placeholder=\"Password\" \n                            value=\"\">\n                        </mat-form-field>\n                        <small \n                        *ngIf=\"basicForm.controls['password'].hasError('required') && basicForm.controls['password'].touched\" \n                        class=\"form-error-msg\"> Password is required </small>\n                    </div>\n\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                        <input\n                            type=\"password\"\n                            name=\"confirmPassword\"\n                            matInput\n                            appEqualValidator=\"password\"\n                            formControlName=\"confirmPassword\"\n                            placeholder=\"Confirm Password\"\n                            value=\"\">\n                        </mat-form-field>\n                        <small \n                        *ngIf=\"basicForm.controls['confirmPassword'].hasError('equalTo')\" \n                        class=\"form-error-msg\"> Password mismatch </small>\n                    </div>\n\n                    <div class=\"pb-1\">\n                        <Label>Gender*</Label>\n                        <mat-radio-group \n                        name=\"gender\" \n                        formControlName=\"gender\">\n                            <mat-radio-button value=\"male\">Male</mat-radio-button>\n                            <mat-radio-button value=\"female\">Female</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    \n                    <div class=\"pb-1 pt-05\">\n                        <mat-checkbox\n                        name=\"agreed\"\n                        formControlName=\"agreed\" \n                        class=\"pb-1\">I have read and agree to the terms of service.</mat-checkbox>\n\n                        <small \n                            *ngIf=\"basicForm.controls['agreed'].hasError('agreed') && basicForm.controls['agreed'].touched\" \n                            class=\"form-error-msg\"> You must agree to the terms and conditions </small>\n                    </div>\n                </div>\n            </div>\n            <button \n            mat-raised-button \n            color=\"primary\" \n            [disabled]=\"basicForm.invalid\">Submit</button>\n        </form>\n    </mat-card-content>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/views/forms/basic-form/basic-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/forms/basic-form/basic-form.component.ts ***!
  \****************************************************************/
/*! exports provided: BasicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormComponent", function() { return BasicFormComponent; });
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



var BasicFormComponent = /** @class */ (function () {
    function BasicFormComponent() {
        this.formData = {};
        this.console = console;
    }
    BasicFormComponent.prototype.ngOnInit = function () {
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].equalTo(password));
        this.basicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(9)
            ]),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ]),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].url),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            cardno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].creditCard
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].phone('BD')),
            password: password,
            confirmPassword: confirmPassword,
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            agreed: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function (control) {
                var agreed = control.value;
                if (!agreed) {
                    return { agreed: true };
                }
                return null;
            })
        });
    };
    BasicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-form',
            template: __webpack_require__(/*! ./basic-form.component.html */ "./src/app/views/forms/basic-form/basic-form.component.html"),
            styles: [__webpack_require__(/*! ./basic-form.component.css */ "./src/app/views/forms/basic-form/basic-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicFormComponent);
    return BasicFormComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/file-upload/file-upload.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/forms/file-upload/file-upload.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Zvcm1zL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/forms/file-upload/file-upload.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/forms/file-upload/file-upload.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">File upload</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n      <div class=\"mb-1\">\n        <p>Multiple</p>\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n\n        <p>Single</p>\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n      </div>\n\n      <div class=\"mb-1\">\n        <div ng2FileDrop\n        [ngClass]=\"{'dz-file-over': hasBaseDropZoneOver}\"\n        (fileOver)=\"fileOverBase($event)\"\n        [uploader]=\"uploader\"\n        class=\"fileupload-drop-zone mb-24\">\n        Drop file here\n        </div>\n      </div>\n\n      <table class=\"default-table mat-box-shadow mb-24\" style=\"width: 100%\">\n        <thead>\n        <tr>\n            <th width=\"30%\">Name</th>\n            <th>Size</th>\n            <th>Progress</th>\n            <th>Status</th>\n            <th>Actions</th>\n        </tr>\n        </thead>\n        <tbody *ngIf=\"uploader.queue.length; else tableNoData\">\n        <tr *ngFor=\"let item of uploader.queue\">\n            <td>{{ item?.file?.name }}</td>\n            <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n            <td>\n                <div class=\"progress\" style=\"margin-bottom: 0;\">\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                    <mat-progress-bar\n                      class=\"\"\n                      color=\"primary\"\n                      mode=\"determinate\"\n                      [value]=\"item.progress\">\n                    </mat-progress-bar>\n                </div>\n            </td>\n            <td class=\"\">\n                <mat-icon *ngIf=\"item.isSuccess\" color=\"primary\">check</mat-icon>\n                <mat-icon *ngIf=\"item.isCancel\" color=\"accent\">cancel</mat-icon>\n                <mat-icon *ngIf=\"item.isError\" color=\"warn\">error</mat-icon>\n            </td>\n            <td nowrap>\n                <button \n                mat-raised-button\n                color=\"primary\"\n                class=\"mx-4\"\n                (click)=\"item.upload()\"\n                [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">Upload</button>\n                <button \n                mat-raised-button\n                color=\"accent\"\n                class=\"mx-4\"\n                (click)=\"item.cancel()\"\n                [disabled]=\"!item.isUploading\">Cancel</button>\n\n                <button \n                mat-raised-button\n                color=\"warn\"\n                class=\"mx-4\"\n                (click)=\"item.remove()\">Remove</button>\n            </td>\n        </tr>\n        </tbody>\n        <ng-template #tableNoData>\n          <p [ngStyle]=\"{padding: '0 1.2rem'}\">Queue is empty</p>\n        </ng-template>\n    </table>\n\n\n      <div>\n        <p>Queue progress:</p>\n        <div class=\"progress mb-1\" >\n            <mat-progress-bar\n              class=\"\"\n              color=\"primary\"\n              mode=\"determinate\"\n              [value]=\"uploader.progress\">\n            </mat-progress-bar>\n        </div>\n\n      <button \n      mat-raised-button\n      color=\"primary\"\n      class=\"mx-4\"\n      (click)=\"uploader.uploadAll()\"\n      [disabled]=\"!uploader.getNotUploadedItems().length\">Upload all</button>\n\n      <button \n      mat-raised-button\n      color=\"accent\"\n      class=\"mx-4\"\n      (click)=\"uploader.cancelAll()\"\n      [disabled]=\"!uploader.isUploading\">Cancel all</button>\n\n      <button \n      mat-raised-button\n      color=\"warn\"\n      class=\"mx-4\"\n      (click)=\"uploader.clearQueue()\"\n      [disabled]=\"!uploader.queue.length\">Remove all</button>\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/views/forms/file-upload/file-upload.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/forms/file-upload/file-upload.component.ts ***!
  \******************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: 'https://evening-anchorage-315.herokuapp.com/api/' });
        this.hasBaseDropZoneOver = false;
        this.console = console;
    }
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    FileUploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/views/forms/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.css */ "./src/app/views/forms/file-upload/file-upload.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/forms.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/forms/forms.module.ts ***!
  \*********************************************/
/*! exports provided: AppFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFormsModule", function() { return AppFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic-form/basic-form.component */ "./src/app/views/forms/basic-form/basic-form.component.ts");
/* harmony import */ var _rich_text_editor_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rich-text-editor/rich-text-editor.component */ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/views/forms/file-upload/file-upload.component.ts");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms.routing */ "./src/app/views/forms/forms.routing.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/views/forms/wizard/wizard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppFormsModule = /** @class */ (function () {
    function AppFormsModule() {
    }
    AppFormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_forms_routing__WEBPACK_IMPORTED_MODULE_12__["FormsRoutes"])
            ],
            declarations: [_basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_9__["BasicFormComponent"], _rich_text_editor_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_10__["RichTextEditorComponent"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__["FileUploadComponent"], _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_13__["WizardComponent"]]
        })
    ], AppFormsModule);
    return AppFormsModule;
}());



/***/ }),

/***/ "./src/app/views/forms/forms.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/views/forms/forms.routing.ts ***!
  \**********************************************/
/*! exports provided: FormsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutes", function() { return FormsRoutes; });
/* harmony import */ var _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-form/basic-form.component */ "./src/app/views/forms/basic-form/basic-form.component.ts");
/* harmony import */ var _rich_text_editor_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rich-text-editor/rich-text-editor.component */ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/views/forms/file-upload/file-upload.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/views/forms/wizard/wizard.component.ts");




var FormsRoutes = [
    {
        path: '',
        children: [{
                path: 'basic',
                component: _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_0__["BasicFormComponent"],
                data: { title: 'Basic', breadcrumb: 'BASIC' }
            }, {
                path: 'editor',
                component: _rich_text_editor_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_1__["RichTextEditorComponent"],
                data: { title: 'Editor', breadcrumb: 'EDITOR' }
            }, {
                path: 'upload',
                component: _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__["FileUploadComponent"],
                data: { title: 'Upload', breadcrumb: 'UPLOAD' }
            }, {
                path: 'wizard',
                component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__["WizardComponent"],
                data: { title: 'Wizard', breadcrumb: 'WIZARD' }
            }]
    }
];


/***/ }),

/***/ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/views/forms/rich-text-editor/rich-text-editor.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Zvcm1zL3JpY2gtdGV4dC1lZGl0b3IvcmljaC10ZXh0LWVkaXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/forms/rich-text-editor/rich-text-editor.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  \n  <mat-card-content class=\"p-0\">\n    <quill-editor \n    theme=\"snow\" \n    [(ngModel)]=\"editorData\" \n    (onContentChanged)=\"onContentChanged()\" \n    onSelectionChanged=\"onSelectionChanged()\"></quill-editor>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/forms/rich-text-editor/rich-text-editor.component.ts ***!
  \****************************************************************************/
/*! exports provided: RichTextEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextEditorComponent", function() { return RichTextEditorComponent; });
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

var RichTextEditorComponent = /** @class */ (function () {
    function RichTextEditorComponent() {
        this.editorData = "<h1>Egret | Angular material admin</h1>\n  <p><a href=\"http://devegret.com\" target=\"_blank\"><strong>DevEgret</strong></a></p>\n  <p><br></p><p><strong >Lorem Ipsum</strong>\n  <span>&nbsp;is simply dummy text of the printing and typesetting industry. \n  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a \n  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span></p>";
    }
    RichTextEditorComponent.prototype.ngOnInit = function () {
    };
    RichTextEditorComponent.prototype.onContentChanged = function () { };
    RichTextEditorComponent.prototype.onSelectionChanged = function () { };
    RichTextEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rich-text-editor',
            template: __webpack_require__(/*! ./rich-text-editor.component.html */ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.html"),
            styles: [__webpack_require__(/*! ./rich-text-editor.component.css */ "./src/app/views/forms/rich-text-editor/rich-text-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RichTextEditorComponent);
    return RichTextEditorComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/wizard/wizard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/forms/wizard/wizard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Zvcm1zL3dpemFyZC93aXphcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/forms/wizard/wizard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/forms/wizard/wizard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Horizontal</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <mat-horizontal-stepper [linear]=\"true\">\n      <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n          <ng-template matStepLabel>Fill out your name</ng-template>\n          <mat-form-field class=\"pt-1 pb-1\">\n            <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n          </mat-form-field>\n          <div>\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"secondFormGroup\">\n        <form [formGroup]=\"secondFormGroup\">\n          <ng-template matStepLabel>Fill out your address</ng-template>\n          <mat-form-field class=\"pt-1 pb-1\">\n            <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n          </mat-form-field>\n          <div fxLayout=\"row\">\n            <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n            <span fxFlex=\"8px\"></span>\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Done</ng-template>\n        <div>\n          <mat-icon class=\"pt-1\" [style.fontSize]=\"'36px'\">check</mat-icon>\n        </div>\n        <div class=\"pb-1 mb-1\"> You Are Done.</div>\n        <div fxLayout=\"row\">\n          <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n          <span fxFlex=\"8px\"></span>\n          <button mat-raised-button color=\"primary\" (click)=\"submit()\">Submit</button>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Verticle</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <mat-vertical-stepper [linear]=\"true\">\n      <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n          <ng-template matStepLabel>Fill out your name</ng-template>\n          <mat-form-field>\n            <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n          </mat-form-field>\n          <div>\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"secondFormGroup\">\n        <form [formGroup]=\"secondFormGroup\">\n          <ng-template matStepLabel>Fill out your address</ng-template>\n          <mat-form-field>\n            <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n          </mat-form-field>\n          <div fxLayout=\"row\">\n            <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n            <span fxFlex=\"8px\"></span>\n            <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Done</ng-template>\n        <div>\n          <mat-icon class=\"pt-1\" [style.fontSize]=\"'36px'\">check</mat-icon>\n        </div>\n        <div class=\"pb-1 mb-1\"> You Are Done.</div>\n        <div>\n          <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n        </div>\n      </mat-step>\n    </mat-vertical-stepper>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/views/forms/wizard/wizard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/forms/wizard/wizard.component.ts ***!
  \********************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
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


var WizardComponent = /** @class */ (function () {
    function WizardComponent(fb) {
        this.fb = fb;
    }
    WizardComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this.fb.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this.fb.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    WizardComponent.prototype.submit = function () {
        console.log(this.firstFormGroup.value);
        console.log(this.secondFormGroup.value);
    };
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/views/forms/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.css */ "./src/app/views/forms/wizard/wizard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-forms-forms-module.js.map