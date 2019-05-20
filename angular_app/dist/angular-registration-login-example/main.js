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

/***/ "./src/app/_components/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_components/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_components/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_components/alert.component.html")
        }),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_components/index.ts":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_components/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_1__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_1__["fakeBackendProvider"]; });





/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.basicHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Basic NzExNjFlZjQ4ZmYyNjA5NWJhMTAzNDFhNjY0MDkyOGY6MTAxNjJjOTU4NTM5Njc1MzI5M2EzMzczYjJjYmM5ZjU="
        });
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/authentication/register", user, { headers: this.basicHeaders });
    };
    AuthenticationService.prototype.login = function (username, password) {
        var body = { scope: '*', grant_type: 'password', email: username, password: password };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/authentication/token", body, { headers: this.basicHeaders });
    };
    AuthenticationService.prototype.getUser = function (data) {
        var _this = this;
        var localHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': "Bearer " + data.access_token
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/user", { headers: localHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && data.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                var new_user = { first_name: user.user_details.first_name, last_name: user.user_details.last_name, id: user.user_details.id, access_token: data.access_token, email: user.user_details.email, folder_details: user.folder_details };
                localStorage.setItem('currentUser', JSON.stringify(new_user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getFolders = function (id, access_token) {
        var localheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': "Bearer " + access_token
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/folder/" + id, { headers: localheaders });
    };
    UserService.prototype.getScriptDetails = function (id, access_token) {
        var localheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': "Bearer " + access_token
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/script/" + id + "/details", { headers: localheaders });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'app', template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html") }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components */ "./src/app/_components/index.ts");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./folder */ "./src/app/folder/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _script_script_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./script/script.component */ "./src/app/script/script.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// used to create fake backend







;

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
                _folder__WEBPACK_IMPORTED_MODULE_10__["FolderComponent"],
                _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _script_script_component__WEBPACK_IMPORTED_MODULE_13__["ScriptComponent"]
            ],
            providers: [
                _helpers__WEBPACK_IMPORTED_MODULE_6__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder */ "./src/app/folder/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _script_script_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script/script.component */ "./src/app/script/script.component.ts");






var appRoutes = [
    { path: 'folder/:id', component: _folder__WEBPACK_IMPORTED_MODULE_1__["FolderComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: '', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'script/:id', component: _script_script_component__WEBPACK_IMPORTED_MODULE_5__["ScriptComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    // otherwise redirect to login
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/folder/folder.component.html":
/*!**********************************************!*\
  !*** ./src/app/folder/folder.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/folder/folder.component.ts":
/*!********************************************!*\
  !*** ./src/app/folder/folder.component.ts ***!
  \********************************************/
/*! exports provided: FolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderComponent", function() { return FolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var FolderComponent = /** @class */ (function () {
    function FolderComponent(userService, route, router, alertService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.loading = false;
        this.users = [];
        this.fileToUpload = null;
    }
    FolderComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, localStorage.getItem('currentUser')];
                    case 1:
                        _a.currentUser = _b.sent();
                        this.currentUser = JSON.parse(this.currentUser);
                        this.folderId = this.route.snapshot.params.id;
                        return [4 /*yield*/, this.userService.getFolders(this.folderId, this.currentUser.access_token)
                                .subscribe(function (data) {
                                _this.folderData = data;
                                _this.loading = true;
                            }, function (error) {
                                _this.alertService.error(error);
                                _this.loading = false;
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FolderComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    FolderComponent.prototype.getFolder = function (folderName) {
        if (folderName == 'Scripts') {
            this.router.navigate(['/folder', this.currentUser.folder_details.Scripts]);
            this.ngOnInit();
            this.loading = false;
        }
        else {
            this.router.navigate(['/folder', this.currentUser.folder_details.Archive]);
            this.ngOnInit();
            this.loading = false;
        }
    };
    FolderComponent.prototype.selectDocument = function (script) {
        this.router.navigate(['script', script.id]);
    };
    FolderComponent.prototype.goHome = function () {
        this.router.navigate(['/folder', this.currentUser.folder_details.Scripts]);
        this.ngOnInit();
        this.loading = false;
    };
    FolderComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        this.router.navigate([""]);
    };
    FolderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./folder.component.html */ "./src/app/folder/folder.component.html") }),
        __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], FolderComponent);
    return FolderComponent;
}());



/***/ }),

/***/ "./src/app/folder/index.ts":
/*!*********************************!*\
  !*** ./src/app/folder/index.ts ***!
  \*********************************/
/*! exports provided: FolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _folder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder.component */ "./src/app/folder/folder.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FolderComponent", function() { return _folder_component__WEBPACK_IMPORTED_MODULE_0__["FolderComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"seciton-left\">\n        <div class=\"section-left-content\">\n          <h1 class=\"text-36 font-weight-light\">Don't have an account?</h1>\n          <p class=\"mb-24 text-small\">Stop wasting time and money. It's free!</p>\n          <button mat-flat-button color=\"accent\" [routerLink]=\"register\">Sign Up</button>\n        </div>\n      </div>\n      \n      \n      <div class=\"form-holder height-100vh mat-elevation-z4\" [perfectScrollbar]=\"{}\">\n        <form\n          [formGroup]=\"signupForm\"\n          class=\"signup-form\"\n          fxLayout=\"column\"\n          (ngSubmit)=\"onSubmit()\"\n        >\n          <!-- headline -->\n          <div class=\"form-headline text-center mb-32\">\n            <h1 class=\"font-weight-light\">Sign in to your account</h1>\n          </div>\n          <div class=\"mb-48\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n            <img\n              width=\"200px\"\n              src=\"assets/images/illustrations/breaking_barriers.svg\"\n              alt=\"\"\n            />\n          </div>\n      \n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input\n              matInput\n              formControlName=\"email\"\n              type=\"email\"\n              name=\"email\"\n              placeholder=\"Email\"\n            />\n          </mat-form-field>\n      \n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>Password</mat-label>\n            <input\n              matInput\n              formControlName=\"password\"\n              type=\"password\"\n              name=\"password\"\n              placeholder=\"********\"\n            />\n          </mat-form-field>\n      \n        \n          <button  mat-raised-button color=\"primary\">Signin</button>\n          <mat-divider class=\"my-32\"></mat-divider>\n      \n          <!-- <div class=\"mb-24\" fxLayout=\"column\" fxLayoutGap=\"16px\">\n            <button mat-raised-button color=\"warn\" type=\"button\">\n              Signin with Auth0\n            </button>\n            <button mat-raised-button color=\"warn\" type=\"button\">Firebase Signin</button>\n          </div>\n      \n          <div class=\"text-center\">\n            <a\n              [routerLink]=\"'/sessions/signup2'\"\n              class=\"mat-color-primary text-center full-width\"\n              >Sign up</a\n            >\n          </div> -->\n        </form>\n      </div>\n      \n\n<!--\n\n                                    <form class=\"kt-login-v1__form kt-form\" action=\"\" autocomplete=\"on\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                                        <div class=\"form-group\">\n                                            <input class=\"form-control\" type=\"text\" formControlName=\"username\" placeholder=\"Email\" name=\"username\" autocomplete=\"on\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\n                                            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                                                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input class=\"form-control\" formControlName=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\" autocomplete=\"on\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                            </div>\n                                        </div>\n                                        <div>\n                                            <div *ngIf=\"submitted && loginError\" style=\"font-size:80%; color:#fd397a;\">Invalid username or password</div>\n                                        </div>\n                                        <div class=\"kt-login-v1__actions\">\n                                            <a href=\"#\" class=\"kt-login-v1__forgot\">\n                                                Forgot Password ?\n                                            </a>\n                                            <button type=\"submit\" class=\"btn btn-pill btn-elevate\">Sign In</button>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n    \n-->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.loginError = false;
        // redirect to folder if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loginForm = this.formBuilder.group({
                            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                        });
                        // get return url from route parameters or default to '/'
                        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                        _a = this;
                        return [4 /*yield*/, localStorage.getItem('currentUser')];
                    case 1:
                        _a.appData = _b.sent();
                        if (this.appData) {
                            this.router.navigate(['folder']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        this.loginError = false;
                        // stop here if form is invalid
                        if (this.loginForm.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.authenticationService.login(this.f.username.value, this.f.password.value)
                                .subscribe(function (data) {
                                _this.getUser(data);
                            }, function (error) {
                                _this.loginError = true;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.getUser = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationService.getUser(data)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                            .subscribe(function (data) {
                            _this.router.navigate(['folder', data.folder_details.Scripts]);
                        }, function (error) {
                            _this.loginError = true;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image: url(./assets/media/misc/Background_Script.jpg); height: 100%;\" class=\"kt-login-v1--enabled kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-page--loading\">     \n    <!--begin::Page Custom Styles(used by this page) -->\n\t\t<div class=\"kt-grid kt-grid--ver kt-grid--root\">\n                <div class=\"kt-grid__item  kt-grid__item--fluid kt-grid kt-grid--hor kt-login-v1\" id=\"kt_login_v1\">\n    \n                    <!--begin::Item-->\n                    <div class=\"kt-grid__item\">\n    \n                        <!--begin::Heade-->\n                        <div class=\"kt-login-v1__head\">\n                            <div class=\"kt-login-v1__logo\">\n                                <a href=\"#\">\n                                    <img width=\"300\"  src=\"./assets/media/logos/ScriptMaestro_SBug.png\" alt=\"\" />\n                                </a>\n                            </div>\n                            <div class=\"kt-login-v1__signup\">\n                                <h4 class=\"kt-login-v1__heading\">Already have an account?</h4>\n                                <a routerLink=\"/login\">Login</a>\n                            </div>\n                        </div>\n    \n                        <!--begin::Head-->\n                    </div>\n    \n                    <!--end::Item-->\n    \n                    <!--begin::Item-->\n                    <div class=\"kt-grid__item  kt-grid kt-grid--ver  kt-grid__item--fluid\">\n    \n                        <!--begin::Body-->\n                        <div class=\"kt-login-v1__body\">\n    \n                            <!--begin::Section-->\n                            <div class=\"kt-login-v1__section\">\n                                <div class=\"kt-login-v1__info\">\n                                    <h3 class=\"kt-login-v1__intro\">\"Learn the rules like a pro, so you can break them like an artist!\"</h3>\n                                    <p style=\"text-align:right\">-Pablo Picasso</p>\n                                </div>\n                            </div>\n    \n                            <!--begin::Section-->\n    \n                            <!--begin::Separator-->\n                            <div class=\"kt-login-v1__seaprator\"></div>\n    \n                            <!--end::Separator-->\n    \n                            <!--begin::Wrapper-->\n                            <div class=\"kt-login-v1__wrapper\">\n                                <div class=\"kt-login-v1__container\">\n                                    <h3 class=\"kt-login-v1__title\">\n                                        Register\n                                    </h3>\n\n                                    <!--begin::Form-->\n                                    <form class=\"kt-login-v1__form kt-form\" action=\"\" autocomplete=\"on\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                                        <div class=\"form-group\">\n                                            <input class=\"form-control\" type=\"text\" formControlName=\"email\" placeholder=\"Email\" name=\"email\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input class=\"form-control\" formControlName=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input class=\"form-control\" type=\"text\" formControlName=\"first_name\" placeholder=\"First Name\" name=\"first_name\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': submitted && f.first_name.errors }\">\n                                            <div *ngIf=\"submitted && f.first_name.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.first_name.errors.required\">First Name is required</div>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input class=\"form-control\" type=\"text\" formControlName=\"last_name\" placeholder=\"Last Name\" name=\"last_name\" autocomplete=\"off\" [ngClass]=\"{ 'is-invalid': submitted && f.last_name.errors }\">\n                                            <div *ngIf=\"submitted && f.last_name.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.last_name.errors.required\">Last Name is required</div>\n                                            </div>\n                                        </div>\n                                        <div>\n                                            <div *ngIf=\"submitted && registrationError\" style=\"font-size:80%; color:#fd397a;\">{{errorMessage}}</div>\n                                        </div>\n                                        <div class=\"kt-login-v1__actions\">\n                                            <a href=\"#\" class=\"kt-login-v1__forgot\">\n                                                Forgot Password ?\n                                            </a>\n                                            <button type=\"submit\" class=\"btn btn-pill btn-elevate\">Register</button>\n                                        </div>\n                                    </form>\n    \n                                </div>\n                            </div>\n    \n                            <!--end::Wrapper-->\n                        </div>\n    \n                        <!--begin::Body-->\n                    </div>\n    \n                    <!--end::Item-->\n    \n                    <!--begin::Item-->\n                    <div class=\"kt-grid__item\">\n                        <div class=\"kt-login-v1__footer\">\n                            <div class=\"kt-login-v1__menu\">\n                                <a href=\"#\">Privacy</a>\n                                <a href=\"#\">Legal</a>\n                                <a href=\"#\">Contact</a>\n                            </div>\n                            <div class=\"kt-login-v1__copyright\">\n                                <a href=\"#\">&copy; 2019 ScriptMaestro</a>\n                            </div>\n                        </div>\n                    </div>\n    \n                    <!--end::Item-->\n                </div>\n            </div>\n    \n\n        </div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.registrationError = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.authenticationService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.registrationError = true;
            _this.errorMessage = error.error;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/script/script.component.css":
/*!*********************************************!*\
  !*** ./src/app/script/script.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmlwdC9zY3JpcHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/script/script.component.html":
/*!**********************************************!*\
  !*** ./src/app/script/script.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" class=\"kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-page--loading\">\n\n\t\t<!-- begin:: Header Mobile -->\n\t\t<div id=\"kt_header_mobile\" class=\"kt-header-mobile  kt-header-mobile--fixed \">\n\t\t\t<div class=\"kt-header-mobile__logo\">\n\t\t\t\t<a href=\"\">\n\t\t\t\t\t<img width=\"200\"  src=\"./assets/media/logos/ScriptMaestro_SBug.png\"  />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"kt-header-mobile__toolbar\">\n\t\t\t\t<button class=\"kt-header-mobile__toolbar-toggler kt-header-mobile__toolbar-toggler--left\" id=\"kt_aside_mobile_toggler\"><span></span></button>\n\t\t\t\t<button class=\"kt-header-mobile__toolbar-toggler\" id=\"kt_header_mobile_toggler\"><span></span></button>\n\t\t\t\t<button class=\"kt-header-mobile__toolbar-topbar-toggler\" id=\"kt_header_mobile_topbar_toggler\"><i class=\"flaticon-more\"></i></button>\n\t\t\t</div>\n\t\t</div>\n        <!-- end:: Header Mobile -->\n\n        <!-- begin:: Root -->\n        <div class=\"kt-grid kt-grid--hor kt-grid--root\">\n\n            <!-- begin:: Page -->\n            <div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page\">\n\n                <!-- begin:: Aside -->\n                <button class=\"kt-aside-close \" id=\"kt_aside_close_btn\"><i class=\"la la-close\"></i></button>\n                <div class=\"kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop\" id=\"kt_aside\">\n\n                    <!-- begin::Aside Brand -->\n                    <div class=\"kt-aside__brand kt-grid__item \" id=\"kt_aside_brand\">\n                        <div class=\"kt-aside__brand-logo\">\n                            <a role=\"button\" (click)=\"goHome()\">\n                                <img width=\"200\"  src=\"./assets/media/logos/ScriptMaestro_SBug.png\"  />\n                            </a>\n                        </div>\n                        <div class=\"kt-aside__brand-tools\">\n                            <button class=\"kt-aside__brand-aside-toggler kt-aside__brand-aside-toggler--left\" id=\"kt_aside_toggler\"><span></span></button>\n                        </div>\n                    </div>\n                    <!-- end:: Aside Brand -->\n\n                    <!-- begin:: Aside Menu -->\n                    <div class=\"kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid\" id=\"kt_aside_menu_wrapper\">\n                        <div id=\"kt_aside_menu\" class=\"kt-aside-menu \" data-ktmenu-vertical=\"1\" data-ktmenu-scroll=\"1\" data-ktmenu-dropdown-timeout=\"2500\">\n                            <ul class=\"kt-menu__nav \">\n                                <div class=\"kt-menu__item  kt-menu__item--submenu\" aria-haspopup=\"true\" data-ktmenu-submenu-toggle=\"hover\"><a role=\"button\" (click)=\"getFolder('Scripts')\" class=\"kt-menu__link kt-menu__toggle\"><span class=\"kt-menu__link-text\">Scripts</span></a>\n                                </div>\n                            </ul>\n                            <ul class=\"kt-menu__nav \">\n                                <div class=\"kt-menu__item  kt-menu__item--submenu\" aria-haspopup=\"true\" data-ktmenu-submenu-toggle=\"hover\"><a role=\"button\" (click)=\"getFolder('Archive')\" class=\"kt-menu__link kt-menu__toggle\"><span class=\"kt-menu__link-text\">Archive</span></a>\n                                </div>\n                            </ul>\n                        </div>\n                    </div>\n                    <!-- end:: Aside Menu -->\n                </div>\n                <!-- end:: Aside -->\n\n                <!-- begin:: Wrapper -->\n                <div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper\" id=\"kt_wrapper\">\n\n                    <!-- begin:: Header -->\n                    <div id=\"kt_header\" class=\"kt-header kt-grid__item  kt-header--fixed \">\n\n                        <!-- begin:: Header Menu -->\n                        <button class=\"kt-header-menu-wrapper-close\" id=\"kt_header_menu_mobile_close_btn\"><i class=\"la la-close\"></i></button>\n                        <div class=\"kt-header-menu-wrapper\" id=\"kt_header_menu_wrapper\">\n                        </div>\n                        <!-- end:: Header Menu -->\n\n                        <!-- begin:: Header Topbar -->\n                        <div class=\"kt-header__topbar\">\n                            <!--begin:: Languages -->\n                            <div class=\"kt-header__topbar-item kt-header__topbar-item--langs\">\n                                <div class=\"kt-header__topbar-wrapper\" data-toggle=\"dropdown\" data-offset=\"10px,0px\">\n                                    <span class=\"kt-header__topbar-icon\">\n                                        <img class=\"\" src=\"./assets/media/flags/020-flag.svg\" alt=\"\" />\n                                    </span>\n                                </div>\n                                <div class=\"dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround\">\n                                    <ul class=\"kt-nav kt-margin-t-10 kt-margin-b-10\">\n                                        <li class=\"kt-nav__item kt-nav__item--active\">\n                                            <a href=\"#\" class=\"kt-nav__link\">\n                                                <span class=\"kt-nav__link-icon\"><img src=\"./assets/media/flags/020-flag.svg\" alt=\"\" /></span>\n                                                <span class=\"kt-nav__link-text\">English</span>\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <!--end:: Languages -->\n\n                            <!--begin: User Bar -->\n                            <div class=\"kt-header__topbar-item kt-header__topbar-item--user\">\n                                <div class=\"kt-header__topbar-wrapper\" data-toggle=\"dropdown\" data-offset=\"0px, 0px\">\n                                    <div class=\"kt-header__topbar-user\">\n                                        <span class=\"kt-header__topbar-welcome kt-hidden-mobile\">Hi,</span>\n                                        <span class=\"kt-header__topbar-username kt-hidden-mobile\">{{currentUser.first_name}}</span>\n                                        <img alt=\"Pic\" src=\"./assets/media/users/300_25.png\" />\n\n                                        <!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) -->\n                                        <span class=\"kt-badge kt-badge--username kt-badge--lg kt-badge--brand kt-hidden kt-badge--bold\">S</span>\n                                    </div>\n                                </div>\n                                <div class=\"dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-sm\">\n                                    <div class=\"kt-user-card kt-margin-b-40 kt-margin-b-30-tablet-and-mobile\" style=\"background-image: url(./assets/media/misc/head_bg_sm.jpg)\">\n                                        <div class=\"kt-user-card__wrapper\">\n                                            <div class=\"kt-user-card__pic\">\n                                                <img alt=\"Pic\" src=\"./assets/media/users/300_25.png\" />\n                                            </div>\n                                            <div class=\"kt-user-card__details\">\n                                                <div class=\"kt-user-card__name\">{{currentUser.first_name}} {{currentUser.last_name}}</div>\n                                                </div>\n                                            </div>\n                                    </div>\n                                    <ul class=\"kt-nav kt-margin-b-10\">\n                                        <li class=\"kt-nav__item\">\n                                            <a href=\"profile.html\" class=\"kt-nav__link\">\n                                                <span class=\"kt-nav__link-icon\"><i class=\"flaticon2-calendar-3\"></i></span>\n                                                <span class=\"kt-nav__link-text\">My Profile</span>\n                                            </a>\n                                        </li>\n                                        <li class=\"kt-nav__item kt-nav__item--custom kt-margin-t-15\">\n                                            <div class=\"btn btn-pill btn-elevate\" (click)=\"logout()\">Sign out</div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end:: Header Topbar -->\n                    </div>\n                    <!-- end:: Header -->\n                    <div class=\"\" id=\"kt_content\">\n                        <div class=\"row\">\n                            <div class=\"col-xl\">\n    \n                                <!--begin::Portlet-->\n                                <div class=\"kt-portlet kt-portlet--height-fluid\">\n                                    <div class=\"kt-portlet__head\">\n                                        <div class=\"kt-portlet__head-label\">\n                                            <h3 class=\"kt-portlet__head-title\">Script Detail</h3>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!--begin::Row-->\n\t\t\t\t\t\t\t      <div class=\"row\">\n                      <!--begin::Portlet-->\n                      <div class=\"col-lg-6 col-xl-4 order-lg-1 order-xl-1\">\n  \n                      <!--begin::Portlet-->\n                      <div class=\"kt-portlet kt-portlet--height-fluid\">\n                        <div class=\"kt-portlet__head  kt-portlet__head--noborder\">\n                          <div class=\"kt-portlet__head-label\">\n                            <h3 class=\"kt-portlet__head-title\">Dialog to Scene Description</h3>\n                          </div>\n                        </div>\n                        <div class=\"kt-portlet__body kt-portlet__body--fluid\">\n                          <div class=\"kt-widget-21\">\n                            <div class=\"kt-widget-21__title\">\n                              <div class=\"kt-widget-21__label\">Ratio: {{ratio}}</div>\n                              <img src=\"./assets/media/misc/iconbox_bg.png\" class=\"kt-widget-21__bg\" alt=\"bg\" />\n                            </div>\n                            <div class=\"kt-widget-21__data\">\n  \n                              <!--Doc: For the chart legend bullet colors can be changed with state helper classes: kt-bg-success, kt-bg-info, kt-bg-danger. Refer: components/custom/colors.html -->\n                              <div class=\"kt-widget-21__legends\">\n                                <div class=\"kt-widget-21__legend\">\n                                  <i class=\"kt-bg-success\"></i>\n                                  <span>Dialogs: <span id=\"yours\">{{scriptScores.dialog_ratio.yours}}</span></span>\n                                </div>\n                                <div class=\"kt-widget-21__legend\">\n                                  <i class=\"kt-bg-warning\"></i>\n                                  <span>Scenes: <span id=\"standard\">{{scriptScores.dialog_ratio.standard}}</span></span>\n                                </div>\n                              </div>\n                              <div class=\"kt-widget-21__chart\">\n                                <div class=\"kt-widget-21__stat\">{{ratio}}</div>\n                                <canvas id=\"kt_widget_technologies_chart_2\" style=\"height: 110px; width: 110px;\"></canvas><script src=\"javascript/dashboard.js\"></script>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!--end::Portlet-->\n                    </div>\n                    <!--begin::Portlet-->\n                    <div class=\"col-lg-6 col-xl-4 order-lg-1 order-xl-1\">\n  \n                        <!--begin::Portlet-->\n                        <div class=\"kt-portlet kt-portlet--height-fluid\">\n                          <div class=\"kt-portlet__head  kt-portlet__head--noborder\">\n                            <div class=\"kt-portlet__head-label\">\n                              <h3 class=\"kt-portlet__head-title\">Average Scene Length</h3>\n                            </div>\n                          </div>\n                          <div class=\"kt-portlet__body kt-portlet__body--fluid\">\n                            <div class=\"kt-widget-21\">\n                              <div class=\"kt-widget-21__title\">\n                                <div class=\"kt-widget-21__label\">Scene Length: {{scriptScores.avg_scene_length}}</div>\n                                <img src=\"./assets/media/misc/iconbox_bg.png\" class=\"kt-widget-21__bg\" alt=\"bg\" />\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <!--end::Portlet-->\n                      </div>\n                      <!--begin::Portlet-->\n                      <div class=\"col-lg-6 col-xl-4 order-lg-1 order-xl-1\">\n  \n                          <!--begin::Portlet-->\n                          <div class=\"kt-portlet kt-portlet--height-fluid\">\n                            <div class=\"kt-portlet__head  kt-portlet__head--noborder\">\n                              <div class=\"kt-portlet__head-label\">\n                                <h3 class=\"kt-portlet__head-title\">Page Count</h3>\n                              </div>\n                            </div>\n                            <div class=\"kt-portlet__body kt-portlet__body--fluid\">\n                              <div class=\"kt-widget-21\">\n                                <div class=\"kt-widget-21__title\">\n                                  <div class=\"kt-widget-21__label\">Total Pages: {{scriptScores.pages}}</div>\n                                  <img src=\"./assets/media/misc/iconbox_bg.png\" class=\"kt-widget-21__bg\" alt=\"bg\" />\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <!--end::Portlet-->\n                        </div>\n                  </div>\n                </div>\n                <!-- end:: Wrapper -->\n            </div>\n            <!-- end:: Page -->\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/script/script.component.ts":
/*!********************************************!*\
  !*** ./src/app/script/script.component.ts ***!
  \********************************************/
/*! exports provided: ScriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptComponent", function() { return ScriptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ScriptComponent = /** @class */ (function () {
    function ScriptComponent(router, userService, alertService, route) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.route = route;
        this.loading = false;
    }
    ScriptComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, localStorage.getItem('currentUser')];
                    case 1:
                        _a.currentUser = _b.sent();
                        this.currentUser = JSON.parse(this.currentUser);
                        // get folder scripts
                        this.scriptId = this.route.snapshot.params.id;
                        return [4 /*yield*/, this.userService.getScriptDetails(this.scriptId, this.currentUser.access_token)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                                .subscribe(function (data) {
                                _this.scriptScores = data;
                                _this.ratio = "150%";
                                _this.loading = true;
                            }, function (error) {
                                _this.alertService.error(error);
                                _this.loading = false;
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScriptComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        this.router.navigate([""]);
    };
    ScriptComponent.prototype.getFolder = function (folderName) {
        if (folderName == 'Scripts') {
            this.router.navigate(['/folder', this.currentUser.folder_details.Scripts]);
            this.ngOnInit();
            this.loading = false;
        }
        else {
            this.router.navigate(['/folder', this.currentUser.folder_details.Archive]);
            this.ngOnInit();
            this.loading = false;
        }
    };
    ScriptComponent.prototype.goHome = function () {
        this.router.navigate(['/folder', this.currentUser.folder_details.Scripts]);
    };
    ScriptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-script',
            template: __webpack_require__(/*! ./script.component.html */ "./src/app/script/script.component.html"),
            styles: [__webpack_require__(/*! ./script.component.css */ "./src/app/script/script.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ScriptComponent);
    return ScriptComponent;
}());



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
    production: false,
    apiUrl: 'http://vm.auteur.com'
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

module.exports = __webpack_require__(/*! /Users/anupam/mycode/auteurApi/angular_app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map