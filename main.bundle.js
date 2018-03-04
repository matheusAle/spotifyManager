webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__solicitar_acesso_solicitar_acesso_component__ = __webpack_require__("../../../../../src/app/solicitar-acesso/solicitar-acesso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/dashboard/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_user_pane_user_pane_component__ = __webpack_require__("../../../../../src/app/dashboard/user-pane/user-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_playlist_view_playlist_view_component__ = __webpack_require__("../../../../../src/app/dashboard/playlist-view/playlist-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__spotify_service__ = __webpack_require__("../../../../../src/app/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_routes__ = __webpack_require__("../../../../../src/app/routes.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__router_guard__ = __webpack_require__("../../../../../src/app/router-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__musica_manager_service__ = __webpack_require__("../../../../../src/app/musica-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__musica_preview_service__ = __webpack_require__("../../../../../src/app/musica-preview.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__solicitar_acesso_solicitar_acesso_component__["a" /* SolicitarAcessoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_user_pane_user_pane_component__["a" /* UserPaneComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_playlist_view_playlist_view_component__["a" /* PlaylistViewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__callback_callback_component__["a" /* CallbackComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__routes_routes__["a" /* ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_16_ng2_dnd__["a" /* DndModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__router_guard__["a" /* RouterGuard */],
                __WEBPACK_IMPORTED_MODULE_11__spotify_service__["a" /* SpotifyService */],
                __WEBPACK_IMPORTED_MODULE_17__musica_manager_service__["a" /* MusicaManager */],
                __WEBPACK_IMPORTED_MODULE_18__musica_preview_service__["a" /* MusicaPreviewService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__dashboard_playlist_view_playlist_view_component__["a" /* PlaylistViewComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-spinner></mat-spinner>\r\n  <section class=\"mat-typography\">\r\n    <h3 class=\"mat-display-1\">{{ msg_status }}...</h3>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 100px auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center; }\n  .container section {\n    margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spotify_service__ = __webpack_require__("../../../../../src/app/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(api, router) {
        this.api = api;
        this.router = router;
        this.msg_status = 'lendo os dados';
    }
    CallbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.lerOsParamentrosDaUrl(window.location.href);
        this.api.pegarInformacoesDoUsuario()
            .then(function (resp) {
            _this.msg_status = 'carregando suas playlists';
            _this.api.carregarPlaylists()
                .then(function (resp) {
                console.log(['info', _this.api.access, _this.api.usuario]);
                _this.router.navigate(['/painel']);
            })
                .catch(function (m) { return _this.msg_status = m; });
        })
            .catch(function (m) { return _this.msg_status = m; });
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-callback',
            template: __webpack_require__("../../../../../src/app/callback/callback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/callback/callback.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__spotify_service__["a" /* SpotifyService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <button mat-icon-button (click)=\"drawer.toggle()\"><mat-icon>menu</mat-icon></button>\r\n  <h1>Spotify Manager</h1>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container>\r\n  \r\n  <!-- navegação do usuario. Contem as informações pessoais e uma lista com as playlists do mesmo -->\r\n  <mat-sidenav mode=\"side\" [opened]=\"true\" #drawer>\r\n    <app-user-pane></app-user-pane>\r\n  </mat-sidenav>\r\n  \r\n  <mat-sidenav-content dnd-droppable (onDropSuccess)=\"dropEvent($event)\" [dropZones]=\"['user-pane-item']\">\r\n    <div #playlistsContainer id=\"playlistsContainer\"></div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav-container {\n  height: 91vh;\n  box-sizing: border-box; }\n\nmat-sidenav-content {\n  padding: 20px 0 20px 20px;\n  box-sizing: border-box;\n  position: relative;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  overflow-x: auto;\n  overflow-y: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spotify_service__ = __webpack_require__("../../../../../src/app/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist_view_playlist_view_component__ = __webpack_require__("../../../../../src/app/dashboard/playlist-view/playlist-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(api, resolver, injector, snackBar) {
        this.api = api;
        this.resolver = resolver;
        this.injector = injector;
        this.snackBar = snackBar;
        this.playlistsAbertas = new Map();
        // let id: string = val[1].id // pega o id da playlist do spotify definida como id do container html.
        // if (this.playlistsAbertas.has(id)) {
        //   this.snackBar.open('Está playlist já está aberta!',null , {duration: 2000});
        // } else {
        //   this.criarPlaylistView(val[1].id)
        // }
    }
    /**
     * Cria uma nova view de playlist.
     * {@link https://netbasal.com/dynamically-creating-components-with-angular-a7346f4a982d}
     * */
    DashboardComponent.prototype.criarPlaylistView = function (playlistId) {
        var _this = this;
        var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__playlist_view_playlist_view_component__["a" /* PlaylistViewComponent */]);
        var novaView = this.containerPlaylist.createComponent(factory);
        novaView.instance.carregarPlaylist(playlistId);
        novaView.instance.destruir.subscribe(function (data) {
            _this.playlistsAbertas.get(data).destroy();
            _this.playlistsAbertas.delete(data);
        });
        this.playlistsAbertas.set(playlistId, novaView);
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.dropEvent = function (event) {
        if (this.playlistsAbertas.has(event.dragData)) {
            this.snackBar.open('Está playlist já está aberta!', null, { duration: 1500 });
        }
        else {
            this.criarPlaylistView(event.dragData);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('playlistsContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */] }),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "containerPlaylist", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__spotify_service__["a" /* SpotifyService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSnackBar */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/playlist-view/playlist-view.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  \r\n  <div class=\"pre-loader\" *ngIf=\"playlist == undefined; else card\" >\r\n      <mat-spinner></mat-spinner>\r\n      <h3 mat-subheader>{{ load_status }}</h3>\r\n  </div>\r\n  \r\n  <ng-template #card>\r\n    <mat-card-header>\r\n      \r\n      <button class=\"mat-flat-button close-btn\" (click)=\"close($event)\"><mat-icon>close</mat-icon></button>\r\n      <img mat-card-avatar src=\"assets/icon-user.png\">\r\n      <mat-card-title>{{ playlist.name }}</mat-card-title>\r\n      <mat-card-subtitle> {{ playlist.tracks_total }} musicas</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-actions>\r\n    \r\n    </mat-card-actions>\r\n    <mat-card-content>\r\n      <h3 matSubheader>Músicas</h3>\r\n      <mat-list dnd-sortable-container [sortableData]=\"playlist.tracks\" >\r\n        <mat-list-item\r\n          *ngFor=\"let musica of playlist.tracks; let i = index\"\r\n          dnd-sortable\r\n          [sortableIndex]=\"i\"\r\n          (onDragStart)=\"mg.dropInitEvent(musica, playlist.name, i)\"\r\n          (onDropSuccess)=\"mg.dropEndEvent(musica, playlist.name, i)\"\r\n        >\r\n\r\n          <mat-icon matListIcon (click)=\"previewService.preview(musica.preview_url)\">\r\n            <svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <path d=\"M8 5v14l11-7z\"/>\r\n              <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\r\n            </svg>\r\n            </mat-icon>\r\n          <h4 mat-line>{{ musica.artists_name }}, {{ musica.album_name }}</h4>\r\n          <p mat-line>{{ musica.name }}</p>\r\n        </mat-list-item>\r\n      </mat-list>\r\n    </mat-card-content>\r\n  </ng-template>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/playlist-view/playlist-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n  position: relative;\n  min-width: 400px;\n  max-width: 400px;\n  min-height: 95%;\n  max-height: 95%;\n  margin-right: 16px;\n  overflow-y: auto; }\n  mat-card .pre-loader {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    margin-top: 50px;\n    text-align: center;\n    font-size: 20px; }\n  mat-card .play-preview {\n    cursor: pointer; }\n  mat-card .close-btn {\n    position: absolute;\n    top: 24px;\n    right: 0; }\n  mat-card svg {\n    fill: currentColor; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/playlist-view/playlist-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spotify_service__ = __webpack_require__("../../../../../src/app/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__musica_manager_service__ = __webpack_require__("../../../../../src/app/musica-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__musica_preview_service__ = __webpack_require__("../../../../../src/app/musica-preview.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistViewComponent = /** @class */ (function () {
    function PlaylistViewComponent(api, mg, previewService) {
        this.api = api;
        this.mg = mg;
        this.previewService = previewService;
        this.destruir = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.load_status = 'carregando playlist';
        this.dndMusica = {};
    }
    PlaylistViewComponent.prototype.carregarPlaylist = function (id) {
        var _this = this;
        this.api.carregarMusicas(this.api.getPlaylistById(id))
            .then(function (playlist) {
            _this.playlist = playlist;
        })
            .catch(function (err) {
            _this.playlist = undefined;
            _this.load_status = err;
        });
    };
    PlaylistViewComponent.prototype.ngOnInit = function () { };
    PlaylistViewComponent.prototype.close = function (event) {
        this.destruir.emit(this.playlist.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PlaylistViewComponent.prototype, "destruir", void 0);
    PlaylistViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-playlist-view',
            template: __webpack_require__("../../../../../src/app/dashboard/playlist-view/playlist-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/playlist-view/playlist-view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__spotify_service__["a" /* SpotifyService */], __WEBPACK_IMPORTED_MODULE_2__musica_manager_service__["a" /* MusicaManager */], __WEBPACK_IMPORTED_MODULE_3__musica_preview_service__["a" /* MusicaPreviewService */]])
    ], PlaylistViewComponent);
    return PlaylistViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/dashboard/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toolbar',
            template: __webpack_require__("../../../../../src/app/dashboard/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/user-pane/user-pane.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container mat-typography\">\r\n\r\n  <div class=\"card-user\">\r\n    <div class=\"perfil-image\">\r\n      <img [src]=\"api.usuario.prifile_image || 'assets/icon-user.png'\">\r\n    </div>\r\n    <div class=\"perfil-info\">\r\n      <h4>{{ api.usuario.display_name || api.usuario.id }}</h4>\r\n      <h5> {{ api.usuario.email }}</h5>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"playlists\">\r\n    <mat-divider></mat-divider>\r\n    <h3 mat-subheader>Suas Playlists</h3>\r\n    \r\n    <mat-nav-list >\r\n        <mat-list-item\r\n          *ngFor=\"let p of playlists\"\r\n          dnd-draggable\r\n          [dragEnabled]=\"true\"\r\n          [dragData]=\"p.id\"\r\n          [disableRipple]=\"true\"\r\n          [dropZones]=\"['user-pane-item']\"\r\n        >\r\n          <img mat-list-icon [src]=\"p.image_url\">\r\n          <a matLine>{{ p.name }}</a>\r\n        </mat-list-item>\r\n    </mat-nav-list>\r\n    \r\n    <div>\r\n      <audio [src]=\"previewService.url\" autoplay controls></audio>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/user-pane/user-pane.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 300px; }\n  .container .card-user {\n    box-sizing: border-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: start;\n        align-items: start;\n    padding: 20px 20px 10px;\n    width: 300px;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/user-bg.png")) + "); }\n    .container .card-user img {\n      width: 70px;\n      border-radius: 100%; }\n    .container .card-user .perfil-info h4 {\n      font-size: 25px;\n      margin-bottom: 5px; }\n    .container .card-user .perfil-info h5 {\n      font-size: 16px;\n      margin-bottom: 0; }\n  .container .playlists h3 {\n    margin-top: 20px;\n    padding-bottom: 5px;\n    margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/user-pane/user-pane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spotify_service__ = __webpack_require__("../../../../../src/app/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__musica_preview_service__ = __webpack_require__("../../../../../src/app/musica-preview.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPaneComponent = /** @class */ (function () {
    function UserPaneComponent(api, previewService) {
        this.api = api;
        this.previewService = previewService;
        this.playlists = [];
        var p = api.usuario.playlists;
        var int = p.keys();
        var key;
        do {
            key = int.next();
            var get = p.get(key.value);
            if (get != undefined && get != null)
                this.playlists.push(get);
        } while (!key.done);
    }
    UserPaneComponent.prototype.ngOnInit = function () {
    };
    UserPaneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-pane',
            template: __webpack_require__("../../../../../src/app/dashboard/user-pane/user-pane.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/user-pane/user-pane.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__spotify_service__["a" /* SpotifyService */], __WEBPACK_IMPORTED_MODULE_2__musica_preview_service__["a" /* MusicaPreviewService */]])
    ], UserPaneComponent);
    return UserPaneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["F" /* MatTooltipModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["F" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/musica-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicaManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spotify_service__ = __webpack_require__("../../../../../src/app/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Serviço responsavel por manipular as respostas aos eventos
 * de drag and drop de musicas em playlist
 * */
var MusicaManager = /** @class */ (function () {
    function MusicaManager(spotifyService) {
        this.spotifyService = spotifyService;
        this.musicaSendoCarregada = {};
    }
    /**
     * Metodo chamado quando o usuario começar a arastar um musica.
     * Esse metodo controi o objeto para o atributo dndMusica
     * */
    MusicaManager.prototype.dropInitEvent = function (musica, playlist, index) {
        this.musicaSendoCarregada = musica;
        this.musicaSendoCarregada.playlist_drag = playlist;
        this.musicaSendoCarregada.start_index = index;
    };
    /**
     * Metodo chamado quado o usuario soltar uma musica na playlist
     * */
    MusicaManager.prototype.dropEndEvent = function (musica, playlist, index) {
        this.musicaSendoCarregada.playlist_drop = playlist;
        this.musicaSendoCarregada.new_index = index;
        /*console.log({
          playlist_atual: this.musicaSendoCarregada.name,
          musica_carregada: this.musicaSendoCarregada
        })*/
        this.determinarAcao(this.musicaSendoCarregada);
        this.musicaSendoCarregada = {};
    };
    /**
     * <p>Determina que ações deve ser tomada após o evento de drop de uma musica.</p>
     * <p>Se os atributo playlist_drag e playlist_drop forem iguais,
     * então a musica será reordenada dentro da playlist_drag.</p>
     * <p>Se estes atributos forem diferentes, subentende-se que a musica foi arastada da
     * playlist_drag para a playlist_drop. A aplicação removerá a musica da playlist_drag
     * e adicionará à musica na playlist_drop.</p>
     * */
    MusicaManager.prototype.determinarAcao = function (musica) {
        // se a musica for largada na mesma playlist que começou a ser arrastada
        if (musica.playlist_drag == musica.playlist_drop) {
            this.reordenarMusica(musica.playlist_drag, musica.start_index, musica.new_index, musica.id);
        }
        else {
            this.removerMusicaDaPlaylist(musica.playlist_drag, musica.id);
            this.adicionarMusicaNaPlaylist(musica.playlist_drop, musica.id, musica.new_index);
        }
    };
    MusicaManager.prototype.reordenarMusica = function (playlist, oldIndex, newindex, musicaID) {
        console.log(['reordenar', arguments]);
    };
    MusicaManager.prototype.removerMusicaDaPlaylist = function (playlist_drag, id) {
        console.log(['remover', arguments]);
    };
    MusicaManager.prototype.adicionarMusicaNaPlaylist = function (playlist_drag, id, new_index) {
        console.log(['adicionar', arguments]);
    };
    MusicaManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__spotify_service__["a" /* SpotifyService */]])
    ], MusicaManager);
    return MusicaManager;
}());



/***/ }),

/***/ "../../../../../src/app/musica-preview.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicaPreviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MusicaPreviewService = /** @class */ (function () {
    function MusicaPreviewService() {
        this.url = '';
    }
    MusicaPreviewService.prototype.preview = function (url) {
        console.log(url);
        this.url = url;
    };
    MusicaPreviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], MusicaPreviewService);
    return MusicaPreviewService;
}());



/***/ }),

/***/ "../../../../../src/app/router-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spotify_service__ = __webpack_require__("../../../../../src/app/spotify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouterGuard = /** @class */ (function () {
    function RouterGuard(api) {
        this.api = api;
    }
    RouterGuard.prototype.canActivate = function (route, state) {
        return !this.api.usuarioValido();
    };
    RouterGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__spotify_service__["a" /* SpotifyService */]])
    ], RouterGuard);
    return RouterGuard;
}());



/***/ }),

/***/ "../../../../../src/app/routes.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__solicitar_acesso_solicitar_acesso_component__ = __webpack_require__("../../../../../src/app/solicitar-acesso/solicitar-acesso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_guard__ = __webpack_require__("../../../../../src/app/router-guard.ts");




var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__solicitar_acesso_solicitar_acesso_component__["a" /* SolicitarAcessoComponent */], },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_0__callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'painel', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__router_guard__["a" /* RouterGuard */]] }
];


/***/ }),

/***/ "../../../../../src/app/shared/Access.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Access; });
/**
 * Classe modelo para as credenciais de acesso da api do spotify
 * */
var Access = /** @class */ (function () {
    function Access(args) {
        return Object.assign(this, args);
    }
    return Access;
}());



/***/ }),

/***/ "../../../../../src/app/shared/musica.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Musica; });
var Musica = /** @class */ (function () {
    function Musica(args) {
        return Object.assign(this, args);
    }
    return Musica;
}());



/***/ }),

/***/ "../../../../../src/app/shared/playlist.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playlist; });
var Playlist = /** @class */ (function () {
    function Playlist(args) {
        this.tracks = new Array();
        return Object.assign(this, args);
    }
    return Playlist;
}());



/***/ }),

/***/ "../../../../../src/app/shared/usuario.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(arg) {
        this.playlists = new Map();
        return Object.assign(this, arg);
    }
    return Usuario;
}());



/***/ }),

/***/ "../../../../../src/app/solicitar-acesso/solicitar-acesso.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <section class=\"mat-typography\">\r\n    <h1 class=\" mat-display-3 headline\">Spotify Manager</h1>\r\n    <h2 class=\"title mat-display-2\">Gerencie suas playlists de maneira unica.</h2>\r\n    <p>Nosso app ajuda você a:</p>\r\n\r\n    <ul>\r\n      <li>\r\n        Ordernar suas playlists do Spotify apenas clicando e arrastando.\r\n      </li>\r\n      <li>\r\n        Adicionar e remover musicas de suas playlists.\r\n      </li>\r\n      <li>\r\n        Crie paylists de maneira rapida e facil.\r\n      </li>\r\n    </ul>\r\n\r\n    <p>\r\n      para começar basta nos dar acesso as suas informações do spotify.\r\n    </p>\r\n    <button\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      (click)=\"conectar()\"\r\n    >Click aqui para começar</button>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/solicitar-acesso/solicitar-acesso.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 30px 10% 10%; }\n  .container ul {\n    margin-top: 10px;\n    margin-bottom: 15px; }\n    .container ul li {\n      margin-left: 15px; }\n  .container button {\n    margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solicitar-acesso/solicitar-acesso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitarAcessoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spotify_service__ = __webpack_require__("../../../../../src/app/spotify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SolicitarAcessoComponent = /** @class */ (function () {
    function SolicitarAcessoComponent(spotifyService) {
        this.spotifyService = spotifyService;
        if (!__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production)
            this.conectar();
    }
    SolicitarAcessoComponent.prototype.conectar = function () {
        this.spotifyService.solicitarAcesso();
    };
    SolicitarAcessoComponent.prototype.ngOnInit = function () {
    };
    SolicitarAcessoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-solicitar-acesso',
            template: __webpack_require__("../../../../../src/app/solicitar-acesso/solicitar-acesso.component.html"),
            styles: [__webpack_require__("../../../../../src/app/solicitar-acesso/solicitar-acesso.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__spotify_service__["a" /* SpotifyService */]])
    ], SolicitarAcessoComponent);
    return SolicitarAcessoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/spotify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_Access_model__ = __webpack_require__("../../../../../src/app/shared/Access.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_usuario_model__ = __webpack_require__("../../../../../src/app/shared/usuario.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_playlist_model__ = __webpack_require__("../../../../../src/app/shared/playlist.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_musica_model__ = __webpack_require__("../../../../../src/app/shared/musica.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Classe que gerencia a comunicação do app com a API do spotify.
 *
 * */
var SpotifyService = /** @class */ (function () {
    function SpotifyService(connection, router) {
        this.connection = connection;
        this.router = router;
        this.access = new __WEBPACK_IMPORTED_MODULE_4__shared_Access_model__["a" /* Access */](null);
        var host = window.location.protocol + '//' + window.location.host;
        // se o app estiver rodando no github pages
        if (host.indexOf('github') != -1) {
            host = host.concat('/spotifyManager');
        }
        __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].redirect_uri = host.concat('/callback');
    }
    SpotifyService.prototype.solicitarAcesso = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].spotifyOAuthUrl + "?client_id=" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].client_id + "&redirect_uri=" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].redirect_uri + "&scope=" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].scope + "&response_type=token";
        window.location.href = encodeURI(url);
    };
    SpotifyService.prototype.pegarInformacoesDoUsuario = function () {
        var _this = this;
        if (this.headers == undefined) {
            this.headers = {
                headers: {
                    'Authorization': this.access.token_type + " " + this.access.access_token
                }
            };
        }
        return new Promise(function (resolve, reject) {
            _this.connection.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].spotify_api + "/me", _this.headers)
                .toPromise()
                .then(function (resp) {
                if (!!resp.error) {
                    console.log('spotify.service: ' + resp);
                    reject('Erro, para continuar você precisa nos dar acesso as suas informações!');
                }
                _this.usuario = new __WEBPACK_IMPORTED_MODULE_6__shared_usuario_model__["a" /* Usuario */]({
                    display_name: resp.display_name,
                    email: resp.email,
                    id: resp.id,
                    profile_image: resp.images[0] == undefined ? undefined : resp.images[0].url
                });
                resolve(_this.usuario);
            });
        });
    };
    /**
     * Carrega a lista de playlists do usuario.
     *
     * Este metodo recebe como paramentro uma string.
     * Este paramentro não deve ser passado durante a invocação do mentodo, pois,
     * ele é usado internamente para carregar as demais paginas de playlists do usuario
     *
     * @param url Url? da prozima pagina de playlists do usuario.
     *
     * @return Pomise que busca e salva as playlists do usuario.
     * */
    SpotifyService.prototype.carregarPlaylists = function (url) {
        var _this = this;
        //faz a soliciração para a primeira pagina de playlists para o usuario caso um urm expecifica não tenha sido solicitada
        var req_url = !!!url ? __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].spotify_api + "/me/playlists" : url;
        return new Promise(function (resolve, reject) {
            _this.connection.get(req_url, _this.headers)
                .toPromise()
                .then(function (resp) {
                // caso seja retornado um erro pela plataforma do spotify
                if (!!resp.error) {
                    console.log(['spotify.service: ', resp]);
                    reject('Erro ao ler as suas playlists');
                }
                // caso exista mais paginas de playlists
                if (resp.next != null) {
                    _this.carregarPlaylists(resp.next).then(function (r) {
                        _this.salvarPlayLists(r);
                        resolve(resp);
                    });
                }
                else {
                    _this.salvarPlayLists(resp);
                    resolve(resp);
                }
            });
        });
    };
    /**
     * Carrega as musicas da playlist informado.
     *
     * Obs.: O paramentro <i>tracks_url</i>  não deve ser informado, pois ele é
     * de uso interno do serviço.
     * @param playlist da playlist que deseja carregar as musicas.
     * @param tracks_url (Opcional) url da pagina de musicas.
     * */
    SpotifyService.prototype.carregarMusicas = function (playlist, tracks_url) {
        var _this = this;
        // filtra apenas os campos necessarios para o funcionamento da aplicação
        var fields = 'items(track(album.name,artists.name,name,id,preview_url)),next';
        return new Promise(function (resolve, reject) {
            _this.connection.get(playlist.tracks_url + "?" + fields, _this.headers)
                .toPromise()
                .then(function (resp) {
                // caso seja retornado um erro pela plataforma do spotify
                if (!!resp.error) {
                    console.log(['spotify.service: ', resp]);
                    reject('Erro ao ler as músicas');
                }
                // caso exista mais paginas de playlists
                if (resp.items.next != null) {
                    _this.carregarMusicas(playlist, resp.items.next).then(function (r) {
                        _this.salvarMusicas(r, playlist);
                        resolve(resp);
                    });
                }
                else {
                    _this.salvarMusicas(resp, playlist);
                    resolve(playlist);
                }
            });
        });
    };
    /**
     * Lê os paramentros da url e os trasforma em um objeto do tipo Access.
     * */
    SpotifyService.prototype.lerOsParamentrosDaUrl = function (url) {
        url = url.split('#')[1]; // pega os parametros na url
        for (var _i = 0, _a = url.split('&'); _i < _a.length; _i++) {
            var param = _a[_i];
            var data = param.split('=');
            this.access[data[0]] = data[1];
        }
    };
    SpotifyService.prototype.getPlaylistById = function (id) {
        return this.usuario.playlists.get(id);
    };
    SpotifyService.prototype.salvarPlayLists = function (data) {
        for (var _i = 0, _a = data.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.collaborative || item.owner.id == this.usuario.id) {
                this.usuario.playlists.set(item.id, new __WEBPACK_IMPORTED_MODULE_7__shared_playlist_model__["a" /* Playlist */]({
                    name: item.name,
                    id: item.id,
                    image_url: item.images[2] == undefined ? undefined : item.images[2].url,
                    tracks_url: item.tracks.href,
                    tracks_total: item.total
                }));
            }
        }
    };
    SpotifyService.prototype.salvarMusicas = function (resp, playlist) {
        var playlist_tracks = playlist.tracks;
        for (var _i = 0, _a = resp.items; _i < _a.length; _i++) {
            var item = _a[_i];
            playlist_tracks.push(new __WEBPACK_IMPORTED_MODULE_8__shared_musica_model__["a" /* Musica */]({
                album_name: item.track.album.name,
                artists_name: item.track.artists[0].name,
                id: item.track.id,
                name: item.track.name,
                preview_url: item.track.preview_url
            }));
        }
    };
    SpotifyService.prototype.usuarioValido = function () {
        if (this.access.access_token == undefined) {
            this.router.navigate(['']);
        }
        return this.access.access_token == undefined;
    };
    SpotifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SpotifyService);
    return SpotifyService;
}());



/***/ }),

/***/ "../../../../../src/assets/user-bg.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "user-bg.40507f219cd4c007528d.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    redirect_uri: '',
    scope: 'user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public playlist-read-collaborative',
    spotifyOAuthUrl: 'https://accounts.spotify.com/authorize',
    client_id: '01d159793e8f43fbad69100d83af067c',
    spotify_api: 'https://api.spotify.com/v1',
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map