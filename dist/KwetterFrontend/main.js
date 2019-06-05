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
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");








var routes = [
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: "profile/:username", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: "search/:searchQuery", component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"] },
    { path: "home", component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'KwetterFrontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_profile_profile_information_profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile-information/profile-information/profile-information.component */ "./src/app/components/profile/profile-information/profile-information/profile-information.component.ts");
/* harmony import */ var _components_profile_profile_information_profile_edit_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile-information/profile-edit/profile-edit/profile-edit.component */ "./src/app/components/profile/profile-information/profile-edit/profile-edit/profile-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_profile_profile_information_profile_kweets_profile_kweets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile-information/profile-kweets/profile-kweets.component */ "./src/app/components/profile/profile-information/profile-kweets/profile-kweets.component.ts");
/* harmony import */ var _components_profile_profile_information_profile_followers_profile_followers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile-information/profile-followers/profile-followers.component */ "./src/app/components/profile/profile-information/profile-followers/profile-followers.component.ts");
/* harmony import */ var _components_profile_profile_information_profile_following_profile_following_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile-information/profile-following/profile-following.component */ "./src/app/components/profile/profile-information/profile-following/profile-following.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_shared_kweet_view_kweet_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shared/kweet-view/kweet-view.component */ "./src/app/components/shared/kweet-view/kweet-view.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _components_profile_profile_information_profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_8__["ProfileInformationComponent"],
                _components_profile_profile_information_profile_edit_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProfileEditComponent"],
                _components_profile_profile_information_profile_kweets_profile_kweets_component__WEBPACK_IMPORTED_MODULE_11__["ProfileKweetsComponent"],
                _components_profile_profile_information_profile_followers_profile_followers_component__WEBPACK_IMPORTED_MODULE_12__["ProfileFollowersComponent"],
                _components_profile_profile_information_profile_following_profile_following_component__WEBPACK_IMPORTED_MODULE_13__["ProfileFollowingComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _components_shared_kweet_view_kweet_view_component__WEBPACK_IMPORTED_MODULE_15__["KweetViewComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__["NavigationComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.scrolling{\n    overflow-y: scroll;\n    position: relative;\n    height: calc(100vh - 55px);\n}\n\ndiv.scrolling::-webkit-scrollbar { \n    width: 0 !important \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5zY3JvbGxpbmd7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcbn1cblxuZGl2LnNjcm9sbGluZzo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container scrolling\" (scroll)=\"loadMoreKweets($event)\">\n  <app-kweet-view [kweets]=\"kweets\"></app-kweet-view>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_kweet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/kweet.service */ "./src/app/services/kweet.service.ts");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(kweetService, socketService, authService) {
        this.kweetService = kweetService;
        this.socketService = socketService;
        this.authService = authService;
        this.resultPage = 1;
        this.resultSize = 10;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kweetService.getDashboard(this.resultPage, this.resultSize).then(function (data) {
            _this.resultPage++;
            _this.kweets = data;
        }).catch(function (error) {
            console.log(error);
        });
        this.socketService.createWebsocket(this.authService.getUsernameFromToken()).then(function (data) {
            data.onmessage = function (event) {
                _this.kweets.unshift(JSON.parse(event.data));
                console.log(event.data);
                console.log(_this.kweets);
            };
        });
    };
    DashboardComponent.prototype.loadMoreKweets = function (event) {
        var _this = this;
        var top = event.target.scrollTop;
        var height = event.target.scrollHeight;
        var offset = event.target.offsetHeight;
        if (top > height - offset - 1) {
            this.kweetService.getDashboard(this.resultPage, this.resultSize).then(function (data) {
                _this.resultPage++;
                _this.kweets = _this.kweets.concat(data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DashboardComponent.prototype, "loadMoreKweets", null);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_kweet_service__WEBPACK_IMPORTED_MODULE_2__["KweetService"], src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

;


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.login-container{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nform.login-form{\r\n  width: 340px;\r\n  padding: 20px;\r\n  background-color: white;\r\n  border-radius: 20px;\r\n  position: relative;\r\n}\r\n\r\na.register-link{\r\n  position: absolute;\r\n  padding: 15px;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1QsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmxvZ2luLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ubG9naW4tZm9ybXtcclxuICB3aWR0aDogMzQwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuYS5yZWdpc3Rlci1saW5re1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"login-container\">\n        <form class=\"login-form\">\n            <h3>Login</h3>\n            <div class=\"form-group\">\n                <label for=\"username\">Username:</label>\n                <input #username type=\"text\" name=\"username\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password:</label>\n                <input #password type=\"password\" name=\"password\" class=\"form-control\">\n            </div>\n            <div>\n                <button name=\"submit\" type=\"button\" class=\"btn btn-info btn-md\" (click)=\"login(username.value, password.value)\">Login</button> \n            </div>\n            <a class=\"register-link\" routerLink=\"/register\">No account? Register here</a>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, authService) {
        this.loginService = loginService;
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.login = function (username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loginService.login(username, password).then(function () {
                            if (_this.authService.isAuthorised()) {
                                _this.router.navigate(["/profile/" + username]);
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.nav-container{\n    width: 100%;\n    height: 50px;\n    position: fixed;\n    border-bottom: 1px solid rgba(0,0,0,0.25);\n    background-color: white;\n    top: 0;\n    display: flex;\n}\n\nli.menu-item{\n    display: flex;\n    list-style: none;\n    float: left;\n    height: 50px;\n    cursor: pointer;\n}\n\nli.menu-item a{\n    padding: 15px 10px 0px 10px;\n    font-size: 13px;\n    font-weight: bold;\n    height: 50px;\n    line-height: 1;\n    color: #66757f;\n    text-decoration: none;\n}\n\nli.menu-item a.active{\n    border-bottom: 2px solid #1c94e0;\n    color: #1c94e0;\n}\n\nli.menu-item a:hover{\n    border-bottom: 2px solid #1c94e0;\n    color: #1c94e0;\n}\n\ninput.search-input{\n    background-color: #f5f8fa;\n    border-radius: 21px;\n    border: 1px solid #e6ecf0;\n    box-sizing: border-box;\n    color: #14171a;\n    display: block;\n    font-size: 12px;\n    height: 32px;\n    line-height: 16px;\n    padding: 8px 32px 8px 12px;\n    transition: all .2s ease-in-out;\n    width: 100%;\n}\n\nform.search-form{\n    height: 33px;\n    font-size: 12px;\n    width: 50%;\n    margin: auto;\n}\n\ninput.btn-authenticate{\n    margin-top:5px;\n    height: 40px;\n    margin-right: 15px;\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUV6QixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5uYXYtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmxpLm1lbnUtaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGkubWVudS1pdGVtIGF7XG4gICAgcGFkZGluZzogMTVweCAxMHB4IDBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICM2Njc1N2Y7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5saS5tZW51LWl0ZW0gYS5hY3RpdmV7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYzk0ZTA7XG4gICAgY29sb3I6ICMxYzk0ZTA7XG59XG5cbmxpLm1lbnUtaXRlbSBhOmhvdmVye1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWM5NGUwO1xuICAgIGNvbG9yOiAjMWM5NGUwO1xufVxuXG5pbnB1dC5zZWFyY2gtaW5wdXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmVjZjA7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6ICMxNDE3MWE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBwYWRkaW5nOiA4cHggMzJweCA4cHggMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5mb3JtLnNlYXJjaC1mb3Jte1xuICAgIGhlaWdodDogMzNweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbmlucHV0LmJ0bi1hdXRoZW50aWNhdGV7XG4gICAgbWFyZ2luLXRvcDo1cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container\">\n  <div class=\"navigation-buttons\">\n    <ul>\n      <li class=\"menu-item align-items-center\"><a routerLinkActive=\"active\" routerLink=\"/home\">Dashboard</a></li>\n      <li class=\"menu-item align-items-center\"><a routerLinkActive=\"active\" routerLink=\"/profile/{{username}}\">Profile</a></li>\n    </ul>\n  </div>\n  <form class=\"search-form\" (keyup.enter)=\"search(searchQuery.value)\">  \n    <input #searchQuery class=\"search-input\" placeholder=\"Search Kwetter\" />\n  </form>\n  <input *ngIf=\"isLoggedIn(); else loginButton\" class=\"btn btn-authenticate btn-primary\" type=\"button\" value=\"Logout\" (click)=\"logout()\" />\n  <ng-template #loginButton><input class=\"btn btn-authenticate btn-primary\" type=\"button\" value=\"Login\" routerLink=\"/login\" /></ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.username = this.authService.getUsernameFromToken();
    };
    NavigationComponent.prototype.isLoggedIn = function () {
        return this.authService.isAuthorised();
    };
    NavigationComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(["/login"]);
    };
    NavigationComponent.prototype.search = function (searchQuery) {
        if (searchQuery) {
            this.router.navigate(["/search/" + searchQuery]);
        }
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-edit/profile-edit/profile-edit.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-edit/profile-edit/profile-edit.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-picture{\n    width: 100%;\n    border: 1px solid black;\n    border-radius: 50%;\n}\n\n.profile-btn{\n    width: 100%;\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtaW5mb3JtYXRpb24vcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWluZm9ybWF0aW9uL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZS1waWN0dXJle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnByb2ZpbGUtYnRue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-edit/profile-edit/profile-edit.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-edit/profile-edit/profile-edit.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"profile\">\n    <div>\n        <img id=\"profile-picture\"\n          src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBgO_ed2rAuqV9Txlfdgr4tLk_MgyqRZODx8wTl92NCNX0Pqd\" alt=\"profile-picture\" />\n        <h1>{{profile.username}}</h1>\n        <form [formGroup]=\"editProfileForm\" (ngSubmit)=\"editProfile()\">\n            <div class=\"form-group\">\n                <label for=\"bio\" class=\"text-info\">Bio:</label>\n                <input #bio type=\"text\" name=\"bio\" class=\"form-control\" formControlName=\"bio\"/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"location\" class=\"text-info\">Location:</label>\n                <input #location type=\"text\" name=\"location\" class=\"form-control\" formControlName=\"location\"/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"site\" class=\"text-info\">Site:</label>\n                <input #site type=\"text\" name=\"site\" class=\"form-control\" formControlName=\"site\"/>\n            </div>\n            <div class=\"form-group\">\n                <input name=\"submit\" type=\"submit\" class=\"profile-btn btn btn-primary\" value=\"Save changes\" />\n            </div>\n        </form>\n      </div>\n      \n</ng-container>"

/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-edit/profile-edit/profile-edit.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-edit/profile-edit/profile-edit.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent(profileService) {
        this.profileService = profileService;
        this.changeEditMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProfileEditComponent.prototype.ngOnInit = function () {
        this.editProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.profile.bio),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.profile.location),
            site: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.profile.website)
        });
    };
    ProfileEditComponent.prototype.editProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.profileService.editProfile(this.profile.username, this.editProfileForm.get("bio").value, this.editProfileForm.get("location").value, this.editProfileForm.get("site").value).then(function (data) {
                            _this.profile = data;
                            _this.changeEditMethod.emit({ value: false, profile: _this.profile });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileEditComponent.prototype, "profile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileEditComponent.prototype, "changeEditMethod", void 0);
    ProfileEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-edit',
            template: __webpack_require__(/*! ./profile-edit.component.html */ "./src/app/components/profile/profile-information/profile-edit/profile-edit/profile-edit.component.html"),
            styles: [__webpack_require__(/*! ./profile-edit.component.css */ "./src/app/components/profile/profile-information/profile-edit/profile-edit/profile-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], ProfileEditComponent);
    return ProfileEditComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-followers/profile-followers.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-followers/profile-followers.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-header{\n    width: 100%;\n    height: 75px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.follow-body{\n    padding: 10px;\n}\n\n.follow-body img{\n    width: 70px;\n    border-radius: 50%;\n    margin-top: -45px;\n}\n\n.follow-body p{\n    display: inline-block;\n    margin: 0 0 0 15px;;\n    font-size: 20px;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtaW5mb3JtYXRpb24vcHJvZmlsZS1mb2xsb3dlcnMvcHJvZmlsZS1mb2xsb3dlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWluZm9ybWF0aW9uL3Byb2ZpbGUtZm9sbG93ZXJzL3Byb2ZpbGUtZm9sbG93ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtaGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzVweDtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmZvbGxvdy1ib2R5e1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mb2xsb3ctYm9keSBpbWd7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi10b3A6IC00NXB4O1xufVxuXG4uZm9sbG93LWJvZHkgcHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwIDAgMCAxNXB4OztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-followers/profile-followers.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-followers/profile-followers.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngFor=\"let follower of followers\">\n    <div class=\"col-md-6\">\n      <div class=\"card follow-card\">\n        <img class=\"image-header\" src=\"http://www.dierenafbeeldingen.com/data/media/32/aap.jpg\" alt=\"profile-banner-picture\"/>\n        <div class=\"follow-body\">\n          <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBgO_ed2rAuqV9Txlfdgr4tLk_MgyqRZODx8wTl92NCNX0Pqd\" alt=\"profile-picture\"/>\n          <p>{{follower.username}}</p>\n        </div>\n      </div>\n    </div>  \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-followers/profile-followers.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-followers/profile-followers.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProfileFollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFollowersComponent", function() { return ProfileFollowersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");



var ProfileFollowersComponent = /** @class */ (function () {
    function ProfileFollowersComponent(profileService) {
        this.profileService = profileService;
    }
    ProfileFollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getFollowers(this.profile.username).then(function (data) {
            _this.followers = data;
        }).catch(function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileFollowersComponent.prototype, "profile", void 0);
    ProfileFollowersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-followers',
            template: __webpack_require__(/*! ./profile-followers.component.html */ "./src/app/components/profile/profile-information/profile-followers/profile-followers.component.html"),
            styles: [__webpack_require__(/*! ./profile-followers.component.css */ "./src/app/components/profile/profile-information/profile-followers/profile-followers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], ProfileFollowersComponent);
    return ProfileFollowersComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-following/profile-following.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-following/profile-following.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-header{\n    width: 100%;\n    height: 75px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.follow-body{\n    padding: 10px;\n}\n\n.follow-body img{\n    width: 70px;\n    border-radius: 50%;\n    margin-top: -45px;\n}\n\n.follow-body p{\n    display: inline-block;\n    margin: 0 0 0 15px;;\n    font-size: 20px;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtaW5mb3JtYXRpb24vcHJvZmlsZS1mb2xsb3dpbmcvcHJvZmlsZS1mb2xsb3dpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWluZm9ybWF0aW9uL3Byb2ZpbGUtZm9sbG93aW5nL3Byb2ZpbGUtZm9sbG93aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtaGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzVweDtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmZvbGxvdy1ib2R5e1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mb2xsb3ctYm9keSBpbWd7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi10b3A6IC00NXB4O1xufVxuXG4uZm9sbG93LWJvZHkgcHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwIDAgMCAxNXB4OztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-following/profile-following.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-following/profile-following.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngFor=\"let follower of following\">\n    <div class=\"col-md-6\">\n      <div class=\"card follow-card\">\n        <img class=\"image-header\" src=\"http://www.dierenafbeeldingen.com/data/media/32/aap.jpg\" alt=\"profile-banner-picture\"/>\n        <div class=\"follow-body\">\n          <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBgO_ed2rAuqV9Txlfdgr4tLk_MgyqRZODx8wTl92NCNX0Pqd\" alt=\"profile-picture\"/>\n          <p>{{follower.username}}</p>\n        </div>\n      </div>\n    </div>  \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-following/profile-following.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-following/profile-following.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProfileFollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFollowingComponent", function() { return ProfileFollowingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");



var ProfileFollowingComponent = /** @class */ (function () {
    function ProfileFollowingComponent(profileService) {
        this.profileService = profileService;
    }
    ProfileFollowingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getFollowing(this.profile.username).then(function (data) {
            console.log(data);
            _this.following = data;
        }).catch(function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileFollowingComponent.prototype, "profile", void 0);
    ProfileFollowingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-following',
            template: __webpack_require__(/*! ./profile-following.component.html */ "./src/app/components/profile/profile-information/profile-following/profile-following.component.html"),
            styles: [__webpack_require__(/*! ./profile-following.component.css */ "./src/app/components/profile/profile-information/profile-following/profile-following.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], ProfileFollowingComponent);
    return ProfileFollowingComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-information/profile-information.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-information/profile-information.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-picture{\n    width: 100%;\n    border: 1px solid black;\n    border-radius: 50%;\n}\n\n.profile-label{\n    width: 100%;\n    margin: 0;\n    margin-top: 10px;\n}\n\n.profile-btn{\n    width: 100%;\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtaW5mb3JtYXRpb24vcHJvZmlsZS1pbmZvcm1hdGlvbi9wcm9maWxlLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWluZm9ybWF0aW9uL3Byb2ZpbGUtaW5mb3JtYXRpb24vcHJvZmlsZS1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2ZpbGUtcGljdHVyZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wcm9maWxlLWxhYmVse1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucHJvZmlsZS1idG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-information/profile-information.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-information/profile-information.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img id=\"profile-picture\"\n    src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBgO_ed2rAuqV9Txlfdgr4tLk_MgyqRZODx8wTl92NCNX0Pqd\" alt=\"profile-picture\" />\n  <h1>{{profile.username}}</h1>\n  <label class=\"text-info profile-label\">Bio:</label>\n  {{profile.bio}}\n  <label class=\"text-info profile-label\">Location:</label>\n  {{profile.location}}\n  <label class=\"text-info profile-label\">Website:</label>\n  {{profile.website}}\n  <!-- <button name=\"submit\" type=\"button\" class=\"profile-btn btn btn-primary\" (click)=\"editProfile()\">Edit Profile</button> -->\n\n  <div *ngIf=\"isSelf;else followButton\">\n    <button name=\"submit\" type=\"button\" class=\"profile-btn btn btn-primary\" (click)=\"editProfile()\">Edit Profile</button>\n  </div>\n\n  <ng-template #followButton>\n    <div *ngIf=\"isFollowing; else unFollowButton\">\n        <button name=\"submit\" type=\"button\" class=\"profile-btn btn btn-primary\" (click)=\"unFollowUser()\">Unfollow</button>\n    </div>\n\n    <ng-template #unFollowButton>\n        <button name=\"submit\" type=\"button\" class=\"profile-btn btn btn-primary\" (click)=\"followUser()\">Follow</button>\n    </ng-template>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-information/profile-information.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-information/profile-information.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ProfileInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformationComponent", function() { return ProfileInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");



var ProfileInformationComponent = /** @class */ (function () {
    function ProfileInformationComponent(profileService) {
        this.profileService = profileService;
        this.changeEditMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProfileInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.profile);
        this.profileService.isFollowing(this.profile.username).then(function (data) {
            _this.isFollowing = data;
        }).catch(function (error) {
            console.log(error);
        });
    };
    ProfileInformationComponent.prototype.editProfile = function () {
        this.changeEditMethod.emit({ value: true });
    };
    ProfileInformationComponent.prototype.followUser = function () {
        var _this = this;
        this.profileService.followUser(this.profile.username).then(function (data) {
            console.log(data);
            _this.isFollowing = true;
        }).catch(function (error) {
            console.log(error);
        });
    };
    ProfileInformationComponent.prototype.unFollowUser = function () {
        var _this = this;
        this.profileService.unFollowUser(this.profile.username).then(function (data) {
            _this.isFollowing = false;
            console.log(data);
        }).catch(function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileInformationComponent.prototype, "profile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileInformationComponent.prototype, "isSelf", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileInformationComponent.prototype, "changeEditMethod", void 0);
    ProfileInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-information',
            template: __webpack_require__(/*! ./profile-information.component.html */ "./src/app/components/profile/profile-information/profile-information/profile-information.component.html"),
            styles: [__webpack_require__(/*! ./profile-information.component.css */ "./src/app/components/profile/profile-information/profile-information/profile-information.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], ProfileInformationComponent);
    return ProfileInformationComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-kweets/profile-kweets.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-kweets/profile-kweets.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWluZm9ybWF0aW9uL3Byb2ZpbGUta3dlZXRzL3Byb2ZpbGUta3dlZXRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-kweets/profile-kweets.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-kweets/profile-kweets.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-kweet-view [kweets]=\"kweets\"></app-kweet-view>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile-information/profile-kweets/profile-kweets.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/profile/profile-information/profile-kweets/profile-kweets.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProfileKweetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileKweetsComponent", function() { return ProfileKweetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_kweet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/kweet.service */ "./src/app/services/kweet.service.ts");




var ProfileKweetsComponent = /** @class */ (function () {
    function ProfileKweetsComponent(profileService, kweetService) {
        this.profileService = profileService;
        this.kweetService = kweetService;
    }
    ProfileKweetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.profile) {
            this.profileService.getUserKweets(this.profile.username).then(function (data) {
                console.log(data);
                _this.kweets = data;
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileKweetsComponent.prototype, "profile", void 0);
    ProfileKweetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-kweets',
            template: __webpack_require__(/*! ./profile-kweets.component.html */ "./src/app/components/profile/profile-information/profile-kweets/profile-kweets.component.html"),
            styles: [__webpack_require__(/*! ./profile-kweets.component.css */ "./src/app/components/profile/profile-information/profile-kweets/profile-kweets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], src_app_services_kweet_service__WEBPACK_IMPORTED_MODULE_3__["KweetService"]])
    ], ProfileKweetsComponent);
    return ProfileKweetsComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-navigation{\n    width: 100%;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(0,0,0,0.25);\n    background-color: white;\n    padding: 0;\n}\n\n.nested-component{\n    width: 100%;\n}\n\ndiv.profile-wrapper{\n    width: 100%;\n}\n\nli.profile-nav-item{\n    height: 40px;\n    display: flex;\n    float: left;\n}\n\na.profile-nav-link{\n    height: 40px;\n    text-decoration: none;\n    line-height: 1;\n    font-size: 14px;\n    padding: 13px 5px 13px 5px;\n    color: #66757f;\n    font-weight: bold;\n}\n\na.profile-nav-link:hover{\n    border-bottom: 2px solid #1c94e0;\n    color: #1c94e0;\n}\n\na.profile-nav-link.active{\n    border-bottom: 2px solid #1c94e0;\n    color: #1c94e0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2ZpbGUtbmF2aWdhdGlvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm5lc3RlZC1jb21wb25lbnR7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdi5wcm9maWxlLXdyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmxpLnByb2ZpbGUtbmF2LWl0ZW17XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbmEucHJvZmlsZS1uYXYtbGlua3tcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxM3B4IDVweCAxM3B4IDVweDtcbiAgICBjb2xvcjogIzY2NzU3ZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuYS5wcm9maWxlLW5hdi1saW5rOmhvdmVye1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWM5NGUwO1xuICAgIGNvbG9yOiAjMWM5NGUwO1xufVxuXG5hLnByb2ZpbGUtbmF2LWxpbmsuYWN0aXZle1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWM5NGUwO1xuICAgIGNvbG9yOiAjMWM5NGUwO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div id=\"profile-information\" class=\"row justify-content-center align-items-center\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n                <div *ngIf=\"isEditing;else profileInformation\">\n                    <app-profile-edit (changeEditMethod)=\"setEdit($event)\" [profile]=\"profile\"></app-profile-edit>\n                </div>\n                \n                <ng-template #profileInformation><app-profile-information (changeEditMethod)=\"setEdit($event)\" [isSelf]=\"isSelf\" *ngIf=\"profile\" [profile]=\"profile\"></app-profile-information></ng-template>\n                  \n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-9\">\n            <div class=\"row col-md-12\" >\n              <ul id=\"profile-navigation\">\n                <li class=\"profile-nav-item\">\n                  <a [ngClass]=\"{'active' : navIndex === 0 }\" class=\"profile-nav-link\" (click)=\"setNavIndex(0)\">Kweets</a>\n                </li>\n                <li class=\"profile-nav-item\">\n                  <a [ngClass]=\"{'active' : navIndex === 1 }\" class=\"profile-nav-link\" (click)=\"setNavIndex(1)\">Following</a>\n                </li>\n                <li class=\"profile-nav-item\">\n                  <a [ngClass]=\"{'active' : navIndex === 2 }\" class=\"profile-nav-link\" (click)=\"setNavIndex(2)\">Followers</a>\n                </li>\n              </ul>\n              <ng-container *ngIf=\"profile\">\n                <div [ngSwitch]=\"navIndex\" class=\"profile-wrapper\">\n                  <app-profile-kweets *ngSwitchCase=\"0\" [profile]=\"profile\"></app-profile-kweets>\n                  <app-profile-following *ngSwitchCase=\"1\" [profile]=\"profile\"></app-profile-following>\n                  <app-profile-followers *ngSwitchCase=\"2\" [profile]=\"profile\"></app-profile-followers>\n                </div>\n              </ng-container>\n            </div>\n        </div>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, route, authService) {
        this.profileService = profileService;
        this.route = route;
        this.authService = authService;
        this.navIndex = 0;
        this.isEditing = false;
        this.isSelf = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var paramUsername = this.route.snapshot.paramMap.get("username");
        if (paramUsername === this.authService.getUsernameFromToken()) {
            this.isSelf = true;
        }
        this.profileService.getUser(paramUsername).then(function (data) {
            _this.profile = data;
        }).catch(function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.setNavIndex = function (index) {
        this.navIndex = index;
        console.log(index);
    };
    ProfileComponent.prototype.setEdit = function (data) {
        if (data.profile) {
            this.profile = data.profile;
        }
        this.isEditing = data.value;
        console.log(data.value);
        console.log(this.isEditing);
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.register-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n  \nform.register-form{\n    width: 380px;\n    padding: 20px;\n    background-color: white;\n    border-radius: 20px;\n    position: relative;\n}\n  \na.login-link{\n    position: absolute;\n    padding: 15px;\n    bottom: 0;\n    right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBQ1QsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnJlZ2lzdGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4gIFxuZm9ybS5yZWdpc3Rlci1mb3Jte1xuICAgIHdpZHRoOiAzODBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5hLmxvZ2luLWxpbmt7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"register-container\">\n        <form class=\"register-form\">\n            <h3>Register</h3>\n            <div class=\"form-group\">\n                <label for=\"username\">Username:</label>\n                <input #username type=\"text\" name=\"username\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password:</label>\n                <input #password type=\"password\" name=\"password\" class=\"form-control\">\n            </div>\n            <div>\n                <button name=\"submit\" type=\"button\" class=\"btn btn-info btn-md\" (click)=\"register(username.value, password.value)\">Register</button> \n            </div>\n            <a class=\"login-link\" routerLink=\"/login\">Already have a account? Login here</a>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.register(username, password).then(function () {
                            if (_this.authService.isAuthorised()) {
                                _this.router.navigate(["/profile/" + username]);
                            }
                        }).catch(function (error) {
                            console.log(error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.scrolling{\n    overflow-y: scroll;\n    position: relative;\n    height: calc(100vh - 55px);\n}\n\ndiv.scrolling::-webkit-scrollbar { \n    width: 0 !important \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5zY3JvbGxpbmd7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcbn1cblxuZGl2LnNjcm9sbGluZzo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container scrolling\" (scroll)=\"loadMoreResults($event)\">\n  <app-kweet-view [kweets]=\"kweets\"></app-kweet-view>\n</div>\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_kweet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/kweet.service */ "./src/app/services/kweet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(kweetService, route) {
        this.kweetService = kweetService;
        this.route = route;
        this.resultPage = 1;
        this.resultSize = 10;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchQuery = this.route.snapshot.paramMap.get("searchQuery");
        this.kweetService.getSearchResult(this.searchQuery, this.resultPage, this.resultSize).then(function (data) {
            console.log(data);
            _this.resultPage++;
            _this.kweets = data;
        }).catch(function (error) {
            console.log(error);
        });
    };
    SearchComponent.prototype.loadMoreResults = function (event) {
        var _this = this;
        var top = event.target.scrollTop;
        var height = event.target.scrollHeight;
        var offset = event.target.offsetHeight;
        if (top > height - offset - 1) {
            this.kweetService.getSearchResult(this.searchQuery, this.resultPage, this.resultSize).then(function (data) {
                _this.resultPage++;
                _this.kweets = _this.kweets.concat(data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SearchComponent.prototype, "loadMoreResults", null);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_kweet_service__WEBPACK_IMPORTED_MODULE_2__["KweetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/kweet-view/kweet-view.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/shared/kweet-view/kweet-view.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#post-kweet-form{\n    width: 100%;\n    padding: 10px 5px;\n    background-color: white;\n}\n\n#post-kweet-form div{\n    display: inline-block;\n}\n\n#post-kweet-form div input{\n    width: 100%;\n    height: 40px;\n}\n\n#post-kweet-form div input[type=text]{\n    border-radius: 10px;\n}\n\n#post-kweet-form div input[type=button]{\n    margin-top: -5px;\n}\n\n.kweet-card{\n    margin-top: 10px;\n}\n\n.kweet-card-header{\n    display: flex;\n}\n\n.kweet-author-picture{\n    width: 100%;\n    border-radius: 50px;\n}\n\n/* .kweet-author-name{\n    display: inline-block;\n    font-size: 28px;\n    font-weight: bold;\n    margin: 0px 0px 0px 15px;\n    align-self: center;\n} */\n\n.kweet-author-name{\n    font-size: 20px;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQva3dlZXQtdmlldy9rd2VldC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7OztHQU1HOztBQUVIO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2t3ZWV0LXZpZXcva3dlZXQtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bvc3Qta3dlZXQtZm9ybXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI3Bvc3Qta3dlZXQtZm9ybSBkaXZ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jcG9zdC1rd2VldC1mb3JtIGRpdiBpbnB1dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbiNwb3N0LWt3ZWV0LWZvcm0gZGl2IGlucHV0W3R5cGU9dGV4dF17XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3Bvc3Qta3dlZXQtZm9ybSBkaXYgaW5wdXRbdHlwZT1idXR0b25de1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5rd2VldC1jYXJke1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5rd2VldC1jYXJkLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ua3dlZXQtYXV0aG9yLXBpY3R1cmV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLyogLmt3ZWV0LWF1dGhvci1uYW1le1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAxNXB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn0gKi9cblxuLmt3ZWV0LWF1dGhvci1uYW1le1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/shared/kweet-view/kweet-view.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/kweet-view/kweet-view.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form id=\"post-kweet-form\">\n        <div class=\"col-md-10\">\n          <input #message class=\"form-control\" name=\"message\" type=\"text\" placeholder=\"What's happening\" />\n        </div>\n        <div class=\"col-md-2\">\n          <input type=\"button\" class=\"btn btn-primary\" value=\"Post\" (click)=\"postKweet(message.value)\"/>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"kweet-container col-md-12\">\n      <div *ngFor=\"let kweet of kweets\">\n        <div>\n          <div class=\"card kweet-card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n              <div class=\"col-md-1\">\n                  <img class=\"kweet-author-picture\"\n                  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBgO_ed2rAuqV9Txlfdgr4tLk_MgyqRZODx8wTl92NCNX0Pqd\" alt=\"author-picture\" />\n              </div>\n              <div class=\"col-md-11\">\n                <p class=\"kweet-author-name\">\n                  {{kweet.username}}\n                </p>\n                  {{kweet.message}}\n              </div>\n              </div>  \n            </div>\n          </div>\n        </div>  \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/kweet-view/kweet-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/kweet-view/kweet-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: KweetViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KweetViewComponent", function() { return KweetViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");



var KweetViewComponent = /** @class */ (function () {
    function KweetViewComponent(profileService) {
        this.profileService = profileService;
    }
    KweetViewComponent.prototype.ngOnInit = function () {
    };
    KweetViewComponent.prototype.postKweet = function (message) {
        var _this = this;
        this.profileService.postKweet(message).then(function (data) {
            console.log(data);
            _this.kweets.unshift(data);
        }).catch(function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], KweetViewComponent.prototype, "kweets", void 0);
    KweetViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kweet-view',
            template: __webpack_require__(/*! ./kweet-view.component.html */ "./src/app/components/shared/kweet-view/kweet-view.component.html"),
            styles: [__webpack_require__(/*! ./kweet-view.component.css */ "./src/app/components/shared/kweet-view/kweet-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], KweetViewComponent);
    return KweetViewComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.isAuthorised = function () {
        if (localStorage.getItem("token") !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.getUsernameFromToken = function () {
        var base64Url = localStorage.getItem("token").split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var data = JSON.parse(window.atob(base64));
        return data.sub;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("token");
    };
    AuthService.prototype.login = function (username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestData = {
                            username: username,
                            password: password,
                        };
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return _this.http.post("http://localhost:8080/Kwetter/api/v1/authentication/login", requestData, {
                                    responseType: "json",
                                    observe: "response"
                                }).subscribe(function (response) {
                                    localStorage.setItem('token', response.headers.get("Authorization"));
                                    resolve();
                                }, function (error) {
                                    reject(error);
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.register = function (username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestData = {
                            username: username,
                            password: password,
                        };
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.post("http://localhost:8080/Kwetter/api/v1/authentication/register", requestData, {
                                    responseType: "json",
                                    observe: "response",
                                }).subscribe(function (response) {
                                    localStorage.setItem('token', response.headers.get("Authorization"));
                                    resolve();
                                }, function (error) {
                                    reject(error);
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/kweet.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/kweet.service.ts ***!
  \*******************************************/
/*! exports provided: KweetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KweetService", function() { return KweetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var KweetService = /** @class */ (function () {
    function KweetService(http) {
        this.http = http;
    }
    KweetService.prototype.getDashboard = function (resultPage, resultSize) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            return _this.http.get("http://localhost:8080/Kwetter/api/v1/kweet/getDashboard?resultPage=" + resultPage + "&resultSize=" + resultSize, {
                                responseType: "json",
                                observe: "response",
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                    'Authorization': localStorage.getItem('token')
                                })
                            }).subscribe(function (response) {
                                resolve(response.body);
                            }, function (error) {
                                reject(error);
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KweetService.prototype.getSearchResult = function (searchQuery, resultPage, resultSize) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this.http.get("http://localhost:8080/Kwetter/api/v1/kweet/search/" + searchQuery + "?resultPage=" + resultPage + "&resultSize=" + resultSize, {
                                responseType: "json",
                                observe: "response",
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                    'Authorization': localStorage.getItem('token')
                                })
                            }).subscribe(function (response) {
                                resolve(response.body);
                            }, function (error) {
                                reject(error);
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KweetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], KweetService);
    return KweetService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestData = {
                            username: username,
                            password: password,
                        };
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return _this.http.post("http://localhost:8080/Kwetter/api/v1/authentication/login", requestData, {
                                    responseType: "json",
                                    observe: "response"
                                }).subscribe(function (response) {
                                    localStorage.setItem('token', response.headers.get("Authorization"));
                                    resolve();
                                }, function (error) {
                                    reject(error);
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




var ProfileService = /** @class */ (function () {
    function ProfileService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ProfileService.prototype.getUser = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            return _this.http.get("http://localhost:8080/Kwetter/api/v1/user/getUserByName/" + username, {
                                responseType: "json",
                                observe: "response",
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                    'Authorization': localStorage.getItem('token')
                                })
                            }).subscribe(function (response) {
                                resolve(response.body);
                            }, function (error) {
                                reject(error);
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileService.prototype.editProfile = function (username, bio, location, site) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestData = {
                            username: username,
                            bio: bio,
                            location: location,
                            website: site
                        };
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return _this.http.patch("http://localhost:8080/Kwetter/api/v1/user/editUser", requestData, {
                                    responseType: "json",
                                    observe: "response",
                                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                        'Authorization': localStorage.getItem('token')
                                    })
                                }).subscribe(function (response) {
                                    resolve(response.body);
                                }, function (error) {
                                    reject(error);
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileService.prototype.getUserKweets = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            return _this.http.get("http://localhost:8080/Kwetter/api/v1/kweet/getAllKweets/" + username, {
                                responseType: "json",
                                observe: "response",
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                    'Authorization': localStorage.getItem('token')
                                })
                            }).subscribe(function (response) {
                                resolve(response.body);
                            }, function (error) {
                                reject(error);
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileService.prototype.postKweet = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestData = {
                            message: message
                        };
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                return _this.http.post("http://localhost:8080/Kwetter/api/v1/kweet/post", requestData, {
                                    responseType: "json",
                                    observe: "response",
                                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                        'Authorization': localStorage.getItem('token')
                                    })
                                }).subscribe(function (response) {
                                    resolve(response.body);
                                }, function (error) {
                                    reject(error);
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileService.prototype.getFollowers = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            return _this.http.get("http://localhost:8080/Kwetter/api/v1/user/getFollowers/" + username, {
                                responseType: "json",
                                observe: "response",
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                    'Authorization': localStorage.getItem('token')
                                })
                            }).subscribe(function (response) {
                                resolve(response.body);
                            }, function (error) {
                                reject(error);
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileService.prototype.getFollowing = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            return _this.http.get("http://localhost:8080/Kwetter/api/v1/user/getFollowing/" + username, {
                                responseType: "json",
                                observe: "response",
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                    'Authorization': localStorage.getItem('token')
                                })
                            }).subscribe(function (response) {
                                resolve(response.body);
                            }, function (error) {
                                reject(error);
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileService.prototype.followUser = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            return _this.http.post("http://localhost:8080/Kwetter/api/v1/user/followUser/" + username, null, {
                                observe: "response",
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                    'Authorization': localStorage.getItem('token')
                                })
                            }).subscribe(function (response) {
                                resolve(response);
                            }, function (error) {
                                reject(error);
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileService.prototype.unFollowUser = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            return _this.http.post("http://localhost:8080/Kwetter/api/v1/user/unFollowUser/" + username, null, {
                                observe: "response",
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                    'Authorization': localStorage.getItem('token')
                                })
                            }).subscribe(function (response) {
                                resolve(response);
                            }, function (error) {
                                reject(error);
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileService.prototype.isFollowing = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            return _this.http.get("http://localhost:8080/Kwetter/api/v1/user/isFollowing/" + username, {
                                observe: "response",
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                    'Authorization': localStorage.getItem('token')
                                })
                            }).subscribe(function (response) {
                                resolve(response.body);
                            }, function (error) {
                                reject(error);
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.createWebsocket = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, new WebSocket("ws://localhost:8080/Kwetter/kweets/" + username)];
                    case 1:
                        _a.socket = _b.sent();
                        return [2 /*return*/, this.socket];
                }
            });
        });
    };
    SocketService.prototype.postKweet = function (kweet) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.socket.send(JSON.stringify(kweet));
                return [2 /*return*/];
            });
        });
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocketService);
    return SocketService;
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

module.exports = __webpack_require__(/*! C:\Users\Frank\Documents\fontys\Jaar 3\Semester 6\JEA\Kwetter-microservices\kwetter-frontend-service\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map