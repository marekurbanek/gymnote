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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workouts/workouts.component */ "./src/app/workouts/workouts.component.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");





var routes = [
    { path: 'home', component: _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_3__["WorkoutsComponent"] },
    { path: 'workouts', component: _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_3__["WorkoutsComponent"] },
    { path: 'login', component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar navbar-dark bg-dark \">\n    <a class=\"navbar-brand\" href=\"/\">GymN</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/workouts']\">My Note</a>\n        </li>\n      </ul>\n    </div>\n    <button *ngIf='!usersService.isLoggedIn()' class=\"btn btn-outline-success\" [routerLink]=\"['/login']\" type=\"button\">Login</button>\n    <button *ngIf='usersService.isLoggedIn()' class=\"btn btn-outline-success\" (click)='!usersService.logout()' type=\"button\">Logout</button>  \n  </nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/users.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(usersService) {
        this.usersService = usersService;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workouts/workouts.component */ "./src/app/workouts/workouts.component.ts");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _workouts_workout_workout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./workouts/workout/workout.component */ "./src/app/workouts/workout/workout.component.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./token.interceptor.service */ "./src/app/token.interceptor.service.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_6__["WorkoutsComponent"],
                _workouts_workout_workout_component__WEBPACK_IMPORTED_MODULE_17__["WorkoutComponent"],
                _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_6__["AddWorkoutComponent"],
                _workouts_workout_workout_component__WEBPACK_IMPORTED_MODULE_17__["AddExerciseComponent"],
                _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"]
            ],
            entryComponents: [_workouts_workouts_component__WEBPACK_IMPORTED_MODULE_6__["AddWorkoutComponent"], _workouts_workout_workout_component__WEBPACK_IMPORTED_MODULE_17__["AddExerciseComponent"]],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["TokenInterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3 mt-4\">\n    <h2 *ngIf='!isRegistering'>Login form</h2>\n    <h2 *ngIf='isRegistering'>Register form</h2>\n    <form [formGroup]='loginForm'>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input  formControlName='username' \n                type=\"text\" \n                class=\"form-control\" \n                id=\"username\"\n                [ngClass]=\"{'is-invalid': (loginForm.get('username').touched || \n                                          loginForm.get('username').dirty) && \n                                          !loginForm.get('username').valid }\"\n                placeholder=\"Enter username\">\n        <span class=\"invalid-feedback\">\n          <span *ngIf=\"loginForm.get('username').errors?.required\">\n            Please enter username.\n          </span>\n          <span *ngIf=\"loginForm.get('username').errors?.minlength\">\n            Username has to be at least 3 characters long.\n          </span>\n        </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input  formControlName='password' \n                type=\"password\" \n                class=\"form-control\"\n                id=\"password\"\n                [ngClass]=\"{'is-invalid':  (loginForm.get('password').touched || \n                           loginForm.get('password').dirty) && \n                           !loginForm.get('password').valid }\"\n                placeholder=\"Password\">\n        <span class=\"invalid-feedback\">\n            <span *ngIf=\"loginForm.get('password').errors?.required\">\n              Please enter password.\n            </span>\n            <span *ngIf=\"loginForm.get('password').errors?.minlength\">\n              Password has to be at least 3 characters long.\n            </span>\n          </span>\n      </div>\n      <button *ngIf='!isRegistering' [disabled]='!loginForm.valid' (click)='loginUser()' type=\"submit\" class=\"btn btn-primary\">Login</button>\n      <button *ngIf='isRegistering' [disabled]='!loginForm.valid' (click)='registerUser()' type=\"submit\" class=\"btn btn-primary\">Register</button>\n    </form>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3 mt-3\">\n    <div class=\"float-right\">\n      {{ isRegistering ? \"Allready have an account\" : \"Don't have an account?\" }}\n      <button *ngIf='!isRegistering' (click)='toggleRegister()' class=\"btn btn-outline-success\" type=\"button\">Register\n        here</button>\n      <button *ngIf='isRegistering' (click)='toggleRegister()' class=\"btn btn-outline-success\" type=\"button\">Login here</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(usersService, router, fb) {
        this.usersService = usersService;
        this.router = router;
        this.fb = fb;
        this.isRegistering = false;
    }
    LoginComponent.prototype.registerUser = function () {
        var _this = this;
        var user = this.loginForm.value;
        this.usersService.register(user).subscribe(function (res) {
            if (res.error) {
                _this.errorMessage = res.error.errorMessage;
            }
            else {
                _this.authSuccess(res);
            }
        });
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var user = this.loginForm.value;
        this.usersService.login(user).subscribe(function (res) {
            if (res.error) {
                _this.errorMessage = res.error.errorMessage;
            }
            else {
                _this.authSuccess(res);
            }
        });
    };
    LoginComponent.prototype.authSuccess = function (res) {
        localStorage.setItem('token', res.token.toString());
        this.usersService.logoutAfterTokenExpire(res.expirationTime);
        this.usersService.setUser({ username: res.username, userId: res.userId });
        this.errorMessage = '';
        this.router.navigate(['/doctors']);
    };
    LoginComponent.prototype.toggleRegister = function () {
        this.isRegistering = !this.isRegistering;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]]
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/token.interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token.interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService() {
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var token = localStorage.getItem('token') ? localStorage.getItem('token') : 'null';
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: token
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UsersService = /** @class */ (function () {
    function UsersService(http, router) {
        this.http = http;
        this.router = router;
        this.usersUrl = '/users';
    }
    UsersService.prototype.register = function (user) {
        var url = this.usersUrl + "/register";
        return this.http.post(url, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    UsersService.prototype.login = function (user) {
        var url = this.usersUrl + "/login";
        return this.http.post(url, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    UsersService.prototype.setUser = function (user) {
        this.username = user.username;
        this.userId = user.userId;
    };
    UsersService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.username = '';
        this.userId = null;
        this.router.navigate(['/doctors']);
        location.reload();
    };
    UsersService.prototype.isLoggedIn = function () {
        return !!localStorage.getItem('token');
    };
    UsersService.prototype.logoutAfterTokenExpire = function (expirationTime) {
        // TODO: Expiration Time should be passed and processed as exp Date
        var expTimeMs = expirationTime * 1000;
        setTimeout(this.logout, expTimeMs);
    };
    UsersService.prototype.getUserData = function () {
        return {
            username: this.username,
            userId: this.userId
        };
    };
    UsersService.prototype.fetchUserData = function () {
        var url = this.usersUrl + "/data";
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    UsersService.prototype.handleError = function (err) {
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(err);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/workouts.service.ts":
/*!*************************************!*\
  !*** ./src/app/workouts.service.ts ***!
  \*************************************/
/*! exports provided: WorkoutsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsService", function() { return WorkoutsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var WorkoutsService = /** @class */ (function () {
    function WorkoutsService(http) {
        this.http = http;
        this.workoutsUrl = '/workouts';
        this.exercisesUrl = '/exercises';
        this.setsUrl = '/sets';
    }
    WorkoutsService.prototype.getWorkoutData = function () {
        return this.http.get(this.workoutsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsService.prototype.addWorkout = function (workoutName) {
        return this.http.post(this.workoutsUrl, { name: workoutName })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsService.prototype.addExercise = function (name, workoutId) {
        return this.http.post(this.exercisesUrl, { name: name, workoutId: workoutId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsService.prototype.addSet = function (weight, repetitions, exerciseId) {
        return this.http.post(this.setsUrl, { weight: weight, repetitions: repetitions, exerciseId: exerciseId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsService.prototype.removeWorkout = function (workoutId) {
        return this.http.delete(this.workoutsUrl + "/" + workoutId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsService.prototype.handleError = function (err) {
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err.error.errorMessage);
    };
    WorkoutsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], WorkoutsService);
    return WorkoutsService;
}());



/***/ }),

/***/ "./src/app/workouts/workout/workout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/workouts/workout/workout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentWorkout.exercises.length > 0\" class=\"Exercises\">\n  <div class=\"Exercise\" *ngFor=\"let exercise of currentWorkout.exercises\">\n    <h6 class=\"text-center font-weight-bold\">{{exercise.name}}</h6>\n\n    <div class=\"row\">\n      <div class=\"col-10\">\n        <table mat-table [dataSource]=\"exercise.runs\" class=\"mat-elevation-z8\">\n          <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef> Set </th>\n            <td mat-cell *matCellDef=\"let element; let i = index\"> {{i + 1}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"repetitions\">\n            <th mat-header-cell *matHeaderCellDef> Reps </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.repetitions}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"weight\">\n            <th mat-header-cell *matHeaderCellDef> Weight </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <div *ngIf=\"showingNewSet === exercise.id\" class=\"example-container\">\n          <div class=\"row mt-3\">\n            <div class=\"col-5\">\n              <mat-form-field style=\"width: 100px;\">\n                <input [(ngModel)]=\"weight\" matInput placeholder=\"Weight\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-5\">\n              <mat-form-field style=\"width: 100px;\">\n                <input [(ngModel)]=\"repetitions\" matInput placeholder=\"Reps\">\n              </mat-form-field>\n            </div>\n            <div class=\"col-2\">\n              <button (click)=\"saveNewSet(exercise.id)\" mat-raised-button>\n                  <mat-icon class=\"icon-big\">save</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-2\">\n        <button (click)=\"toggleNewSet(exercise.id)\" mat-mini-fab class=\"mb-3\">\n          <mat-icon class=\"icon-big\">add_circle_outline</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"toggleEdit(exercise.id)\">\n          <mat-icon class=\"icon-big\">edit</mat-icon>\n        </button>\n\n      </div>\n\n    </div>\n  </div>\n\n  \n</div>\n<button mat-raised-button color=\"primary\" (click)=\"showAddExercise()\">Add new exercise</button>\n<button mat-raised-button color=\"warn\" *ngIf=\"showingEdit\" (click)=\"removeWorkout(currentWorkout.id)\">Remove Workout</button>\n"

/***/ }),

/***/ "./src/app/workouts/workout/workout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/workouts/workout/workout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.Exercise {\n  margin: 1rem 0;\n  margin-bottom: 2rem; }\n\n.icon-big {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya291dHMvd29ya291dC9DOlxcd29ya3NwYWNlc1xcenp6XFxneW1ub3RlL3NyY1xcYXBwXFx3b3Jrb3V0c1xcd29ya291dFxcd29ya291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93b3Jrb3V0cy93b3Jrb3V0L3dvcmtvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5FeGVyY2lzZSB7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmljb24tYmlnIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMilcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/workouts/workout/workout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/workouts/workout/workout.component.ts ***!
  \*******************************************************/
/*! exports provided: WorkoutComponent, AddExerciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutComponent", function() { return WorkoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExerciseComponent", function() { return AddExerciseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workouts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../workouts.service */ "./src/app/workouts.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var WorkoutComponent = /** @class */ (function () {
    function WorkoutComponent(workoutsService, dialog) {
        this.workoutsService = workoutsService;
        this.dialog = dialog;
        this.dataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayedColumns = ['id', 'repetitions', 'weight'];
    }
    WorkoutComponent.prototype.ngOnInit = function () {
        this.currentWorkout = this.workout;
    };
    WorkoutComponent.prototype.addExercise = function (name) {
        var _this = this;
        this.workoutsService.addExercise(name, this.workout.id).subscribe(function () {
            _this.getNewData();
        });
    };
    WorkoutComponent.prototype.getNewData = function () {
        this.dataChanged.emit(true);
    };
    WorkoutComponent.prototype.toggleNewSet = function (exId) {
        if (exId === this.showingNewSet) {
            this.showingNewSet = null;
        }
        else {
            this.showingNewSet = exId;
        }
    };
    WorkoutComponent.prototype.toggleEdit = function (exId) {
        if (exId === this.showingEdit) {
            this.showingEdit = null;
        }
        else {
            this.showingEdit = exId;
        }
    };
    WorkoutComponent.prototype.saveNewSet = function (exId) {
        var _this = this;
        this.workoutsService.addSet(this.weight, this.repetitions, exId).subscribe(function () {
            _this.getNewData();
        });
    };
    WorkoutComponent.prototype.showAddExercise = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddExerciseComponent, {
            width: '250px',
            data: { newExerciseName: this.newExerciseName }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.addExercise(result);
            }
        });
    };
    WorkoutComponent.prototype.removeWorkout = function (wId) {
        var _this = this;
        this.workoutsService.removeWorkout(wId).subscribe(function () {
            _this.getNewData();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorkoutComponent.prototype, "workout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorkoutComponent.prototype, "dataChanged", void 0);
    WorkoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workout',
            template: __webpack_require__(/*! ./workout.component.html */ "./src/app/workouts/workout/workout.component.html"),
            styles: [__webpack_require__(/*! ./workout.component.scss */ "./src/app/workouts/workout/workout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_workouts_service__WEBPACK_IMPORTED_MODULE_2__["WorkoutsService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], WorkoutComponent);
    return WorkoutComponent;
}());

var AddExerciseComponent = /** @class */ (function () {
    function AddExerciseComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddExerciseComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddExerciseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-exercise-component',
            template: "\n  <h1 mat-dialog-title>Add new exercise</h1>\n  <div mat-dialog-content>\n    <p>Enter new exercise name</p>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"newExerciseName\">\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button [mat-dialog-close]=\"newExerciseName\" cdkFocusInitial>Add</button>\n  </div>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddExerciseComponent);
    return AddExerciseComponent;
}());



/***/ }),

/***/ "./src/app/workouts/workouts.component.html":
/*!**************************************************!*\
  !*** ./src/app/workouts/workouts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n  <mat-expansion-panel *ngFor=\"let workout of workouts; let i = index\" (opened)=\"setOpenedWorkout(i)\" (closed)=\"setOpenedWorkout(null)\" [expanded]=\"i === openedWorkoutIndex\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        {{workout.name}}\n      </mat-panel-title>\n      <mat-panel-description>\n        {{workout.date}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <app-workout [workout]=\"workout\" (dataChanged)=\"getWorkouts()\"></app-workout>\n  </mat-expansion-panel>\n</mat-accordion>\n<button (click)=\"openAddWorkout()\" style=\"position: fixed; bottom: 10px; right: 10px;\" mat-fab>New</button>\n"

/***/ }),

/***/ "./src/app/workouts/workouts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/workouts/workouts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmtvdXRzL3dvcmtvdXRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/workouts/workouts.component.ts":
/*!************************************************!*\
  !*** ./src/app/workouts/workouts.component.ts ***!
  \************************************************/
/*! exports provided: WorkoutsComponent, AddWorkoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsComponent", function() { return WorkoutsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorkoutComponent", function() { return AddWorkoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _workouts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workouts.service */ "./src/app/workouts.service.ts");




var WorkoutsComponent = /** @class */ (function () {
    function WorkoutsComponent(dialog, workoutService) {
        this.dialog = dialog;
        this.workoutService = workoutService;
        this.panelOpenState = false;
        this.newWorkoutName = '';
    }
    WorkoutsComponent.prototype.ngOnInit = function () {
        this.getWorkouts();
    };
    WorkoutsComponent.prototype.getWorkouts = function () {
        var _this = this;
        this.workoutService.getWorkoutData().subscribe(function (workouts) {
            _this.workouts = workouts;
        });
    };
    WorkoutsComponent.prototype.openAddWorkout = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddWorkoutComponent, {
            width: '250px',
            data: { name: this.newWorkoutName }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.workoutService.addWorkout(result).subscribe(function () {
                    _this.getWorkouts();
                });
            }
        });
    };
    WorkoutsComponent.prototype.setOpenedWorkout = function (id) {
        this.openedWorkoutIndex = id;
    };
    WorkoutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workouts',
            template: __webpack_require__(/*! ./workouts.component.html */ "./src/app/workouts/workouts.component.html"),
            styles: [__webpack_require__(/*! ./workouts.component.scss */ "./src/app/workouts/workouts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _workouts_service__WEBPACK_IMPORTED_MODULE_3__["WorkoutsService"]])
    ], WorkoutsComponent);
    return WorkoutsComponent;
}());

var AddWorkoutComponent = /** @class */ (function () {
    function AddWorkoutComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddWorkoutComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddWorkoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview-example-dialog',
            template: "\n  <h1 mat-dialog-title>Enter workout title</h1>\n  <div mat-dialog-content>\n    <mat-form-field>\n      <input matInput name=\"newWorkoutName\" [(ngModel)]=\"newWorkoutName\" placeholder=\"Workout name\" >\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button [mat-dialog-close]=\"newWorkoutName\" cdkFocusInitial>Ok</button>\n  </div>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AddWorkoutComponent);
    return AddWorkoutComponent;
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
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! C:\workspaces\zzz\gymnote\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map