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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Wilivro';
        var path = localStorage.getItem('path');
        if (path) {
            localStorage.removeItem('path');
            this.router.navigate([path]);
        }
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_owl_carousel__ = __webpack_require__("../../../../ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projetos_projetos_component__ = __webpack_require__("../../../../../src/app/projetos/projetos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__projetos_projetos_component__["a" /* ProjetosComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_owl_carousel__["OwlModule"],
                __WEBPACK_IMPORTED_MODULE_10_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyB_IqTZfHLK-i9L-450YY60qPSxG5GwHBU'
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projetos_projetos_component__ = __webpack_require__("../../../../../src/app/projetos/projetos.component.ts");


var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__index_index_component__["a" /* IndexComponent */] },
    { path: 'projetos', component: __WEBPACK_IMPORTED_MODULE_1__projetos_projetos_component__["a" /* ProjetosComponent */] },
];


/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer .col-12 {\n  font-family: GothamLight;\n  font-size: 12px;\n  color: #1c303b;\n}\n\n#footer i.fa-facebook-official,\n#footer i.fa-youtube-play {\n  font-size: 30px;\n  cursor: pointer;\n  color: #1c303b;\n}\n\n#footer i.fa-facebook-official:hover {\n  color: #3b5998;\n}\n\n#footer i.fa-youtube-play:hover {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"footer\" class=\"py-3\">\n  <div class=\"container-fluid\">\n    <div class=\"container\">\n      <div class=\"col-12 text-center\">\n        <a href=\"https://www.facebook.com/WiLivro\" target=\"_blank\">\n          <i class=\"fa fa-facebook-official px-1\" aria-hidden=\"true\"></i>\n        </a>\n        <a href=\"https://www.youtube.com/user/videoswilivro\" target=\"_blank\">\n          <i class=\"fa fa-youtube-play px-1\" aria-hidden=\"true\"></i>\n        </a>\n      </div>\n      <div class=\"col-12 text-center\">\n        <i class=\"fa fa-copyright\" aria-hidden=\"true\"></i>\n        Wilivro | Todos os direitos reservados\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* CORES */\n\n.c-w {\n  color: var(--branca);\n  color: var(--branca);\n}\n\n/*posição do video*/\n\n#ct-video {\n  position: relative;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  height: 730px;\n  z-index: -1;\n}\n\n#ct-video .container {\n  height: 100%;\n  padding-top: 90px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: var(--branca);\n  color: var(--branca);\n}\n\n#ct-video .container h1 {\n  font-family: GothamXLight;\n  font-size: 65px;\n  text-align: center;\n}\n\n#ct-video .container div p {\n  font-family: GothamLight;\n  font-size: 24px;\n}\n\nvideo#bg-vid {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -1000;\n}\n\n.shadow {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(230, 190, 0, 0.35);\n  top: 0;\n  left: 0;\n  z-index: -100;\n}\n\n/* Section Sobre */\n\n#sobre h1 {\n  color: #1c303b;\n}\n\n#sobre p {\n  font-family: OpenSansLight;\n  font-size: 22px;\n  color: #1c303b;\n}\n\n#sobre img {\n  width: 115px;\n}\n\n/* section Produtos */\n\n#produtos .container-fluid {\n  background-color: var(--azul);\n  background-color: var(--azul);\n}\n\n#produtos h4 {\n  color: #e6b653;\n  --laranja: #fdc00f;\n  font-family: GothamBold;\n}\n\n#produtos p {\n  font-family: OpenSansLight;\n  font-size: 19px;\n  font-weight: 100;\n}\n\n#produtos button {\n  padding: 15px 50px;\n  background-color: #fdc00f;\n  border-bottom: 3px solid #d7a30d;\n  color: #1c303b;\n  font-family: OpenSansBold;\n  cursor: pointer;\n}\n\n#produtos button:hover {\n  background-color: #f4b500;\n  border-bottom: 3px solid #fdc00f;\n}\n\n#produtos button.off {\n  cursor: not-allowed;\n}\n\n.c-parallax {\n  position: relative;\n  box-sizing: border-box;\n  -webkit-transform-style: inherit;\n          transform-style: inherit;\n}\n\n/* Section Resultado */\n\n#resultado {\n  background: #1c303b;\n  background: url(" + __webpack_require__("../../../../../src/assets/img/criancas.jpg") + ") no-repeat;\n  background-size: cover;\n  background-position: 50%;\n  height: auto;\n}\n\n#resultado div.col-12,\n#resultado div.col-sm-4 {\n  color: #e6b653;\n  height: auto;\n  margin-left: -3px;\n}\n\n#resultado span.plus {\n  color: #fdc00f;\n  font-family: OpenSansLight;\n}\n\n#resultado span.cont {\n  color: var(--branca);\n  color: var(--branca);\n  font-family: OpenSansBold;\n}\n\n#resultado div.object {\n  font-family: OpenSansLight;\n}\n\n/* Section Clientes */\n\n#clientes {\n  background: #E7E6E3;\n}\n\n#clientes h1 {\n  color: #1c303b;\n}\n\n#clientes .owl-item,\n#clientes .owl-carousel.owl-loaded {\n  height: 150px;\n}\n\n#clientes .owl-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n}\n\n#clientes .owl-item:hover {\n  cursor: pointer;\n  -webkit-filter: grayscale(0%);\n  filter: grayscale(0%);\n}\n\n#clientes .owl-dots {\n  margin-top: -20px;\n}\n\n/* Section Interessado */\n\n#interessado {\n  background: rgb(204, 53, 53);\n  background: linear-gradient(to right, rgba(204, 53, 53, 1) 0%, rgba(212, 110, 110, 1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc3535', endColorstr='#d46e6e', GradientType=1);\n}\n\n#interessado p {\n  margin: 50px 0;\n  font-size: 22px;\n  color: var(--branca);\n  color: var(--branca);\n  font-family: GothamLight;\n}\n\n#interessado .input-group {\n  padding-bottom: 10px;\n}\n\n#interessado .input-group-addon .fa {\n  font-size: 30px;\n}\n\n#interessado .input-group-addon {\n  height: auto;\n  background: rgba(255, 255, 255, .75);\n  color: #828282;\n  border: 1px solid rgba(0, 0, 0, .15) !important;\n  border-right: none !important;\n}\n\n#interessado .input-group-addon:nth-of-type(1) {\n  width: 56px;\n  height: 58px;\n}\n\n#interessado .input-group-addon.bars {\n  width: 65px;\n}\n\n#interessado input,\n#interessado select {\n  height: 58px;\n  color: #636c72;\n  border: 1px solid rgba(0, 0, 0, .15) !important;\n  border-left: none !important;\n  font-family: GothamLight;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  background: rgba(255, 255, 255, .75);\n}\n\n#interessado textarea {\n  color: #828282;\n  border: 1px solid rgba(0, 0, 0, .15) !important;\n  font-family: GothamLight;\n  background: rgba(255, 255, 255, .75);\n  height: 126px;\n}\n\n#interessado button {\n  background-color: #fdc00f;\n  border-bottom: 3px solid #d7a30d;\n  color: #1c303b;\n  cursor: pointer;\n  font-family: GothamBold;\n  width: 100%;\n  padding: 15px 0;\n  height: 58px;\n  margin-top: 10px;\n}\n\n#interessado button:hover {\n  background-color: #f4b500;\n  border-bottom: 3px solid #fdc00f;\n}\n\n#interessado button.off {\n  cursor: not-allowed;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  transition: background-color 5000s ease-in-out 0s;\n}\n\n/* Section Wilivro mapa */\n\nagm-map {\n  height: 400px;\n}\n\n#wilivro {\n  overflow: hidden;\n}\n\n#wilivro .btn {\n  z-index: 12;\n  height: 150px;\n  background: #ebc77b;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n#wilivro .btn.active {\n  background: #e6b653;\n}\n\n#wilivro>.row>.btn:nth-of-type(1) {\n  border-right: 2px solid #e7e6e3;\n}\n\n#wilivro .btn p {\n  font-family: GothamLight;\n}\n\n.title {\n  font-family: GothamXLight;\n  color: var(--branca);\n  color: var(--branca);\n}\n\n/* Section Resultado Todas Resoluções */\n\n#resultado span.cont {\n  color: var(--branca);\n  color: var(--branca);\n  font-size: 80px;\n  height: 80px;\n  font-family: OpenSansBold;\n}\n\n/* CSS Smartphones */\n\n@media (max-width: 992px) {\n  #ct-video {\n    background: url(" + __webpack_require__("../../../../../src/assets/img/mob.png") + ") no-repeat;\n    background-size: auto 100%;\n    background-position: center;\n  }\n  #bg-vid {\n    display: none;\n  }\n  #ct-video .container h1 {\n    text-align: center;\n    font-family: GothamXLight;\n    font-size: 45px;\n  }\n  #ct-video .container div p {\n    font-family: GothamLight;\n    font-size: 20px;\n  }\n  /* Section Produtos */\n  #produtos h1 {\n    font-size: 33px;\n    margin-bottom: 50px;\n  }\n  #produto1,\n  #produto3 {\n    color: var(--branca);\n    color: var(--branca);\n  }\n  #produto2 {\n    background: var(--branca);\n    background: var(--branca);\n  }\n  .c-parallax {\n    width: 100%;\n    max-width: 100%;\n    -webkit-box-flex: 100%;\n        -ms-flex: 100%;\n            flex: 100%;\n    padding: 10%;\n    text-align: center;\n  }\n  /* Section Resultado */\n  #resultados>div {\n    margin-top: 40px;\n    font-size: 80px;\n  }\n  #resultado h1 {\n    font-size: 30px;\n  }\n  #resultados {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  #resultado div.object {\n    font-size: 20px;\n  }\n  /* Section Interessado */\n  #interessado h1 {\n    font-size: 30px;\n  }\n  .b-title {\n    border-bottom: 2px solid #e6b653;\n  }\n  #wilivro>.row>.btn:nth-of-type(1) {\n    border: none;\n    border-bottom: 2px solid #e7e6e3;\n  }\n  /* Final CSS Smartphones */\n}\n\n@media (min-width: 993px) {\n  #produto1,\n  #produto2,\n  #produto3 {\n    position: relative;\n    height: 505px;\n    padding: 150px 0;\n  }\n  #produto1 {\n    background: url(" + __webpack_require__("../../../../../src/assets/img/tablet1.png") + ") no-repeat;\n    background-size: 50%;\n    background-attachment: fixed;\n    background-position: 100% 50%;\n    color: var(--branca);\n    color: var(--branca);\n    background-color: var(--azul);\n    background-color: var(--azul);\n  }\n  #produto2 {\n    background: url(" + __webpack_require__("../../../../../src/assets/img/tablet2.png") + ") no-repeat;\n    background-size: 50%;\n    background-attachment: fixed;\n    background-position: 100% 50%;\n    color: var(--cinza-escuro);\n    color: var(--cinza-escuro);\n    background-color: var(--branca);\n    background-color: var(--branca);\n  }\n  #produto3 {\n    background: url(" + __webpack_require__("../../../../../src/assets/img/tablet3.png") + ") no-repeat;\n    background-size: 50%;\n    background-attachment: fixed;\n    background-position: 100% 50%;\n    color: var(--branca);\n    color: var(--branca);\n    background-color: var(--azul);\n    background-color: var(--azul);\n  }\n  /* Section Resultado */\n  #resultado div.col-4 {\n    color: #e6b653;\n    height: 308px;\n    margin-left: -3px;\n  }\n  #resultado span.plus {\n    color: #fdc00f;\n    font-size: 80px;\n    font-family: OpenSansLight;\n  }\n  #resultado div.object {\n    font-family: OpenSansLight;\n    font-size: 28px;\n  }\n  .c-parallax {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n  }\n  .title {\n    border-bottom: 2px solid #e6b653;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ct-video\">\n  <video autoplay loop id=\"bg-vid\">\n    <source src=\"assets/media/home.mp4\" type=\"video/mp4\">\n    <source src=\"assets/media/home.webm\" type=\"video/webm\">\n  </video>\n  <div class=\"shadow\"></div>\n  <div class=\"container\">\n    <div class=\"d-flex flex-column justify-content-center align-items-center \">\n      <h1>TRANSFORME A EDUCAÇÃO</h1>\n      <p class=\"col-10 text-center\">\n        Conheça as soluções Wilivro e junte-se as organizações que já estão inovando a educação com o uso da tecnologia\n      </p>\n    </div>\n  </div>\n</div>\n\n<section id=\"sobre\">\n  <div class=\"container-fluid px-0\">\n    <div class=\"d-flex flex-column justify-content-center align-items-center mt-4\">\n\n      <div class=\"col-12 text-center b-title\">\n        <h1 class=\"py-5 px-5 title d-inline-table\">SOBRE</h1>\n      </div>\n\n      <img class=\"my-4\" src=\"assets/img/icons/sobre.svg\" alt=\"\">\n      <p class=\"col-10 col-sm-10 col-md-8 col-lg-6 text-center mb-5\">\n        A tecnologia tem mudado a forma como produzimos, consumimos e nos comportamos. Por que não usá-la também para transformar\n        a maneira como aprendemos e ensinamos? Acreditamos que os novos recursos tecnológicos podem ajudar a transformar\n        a educação e é por isso que criamos diversas soluções para ajudar os alunos, professores, gestores de escolas e instituições\n        no processo de ensino-aprendizagem.\n      </p>\n    </div>\n  </div>\n</section>\n\n<section id=\"produtos\">\n  <div class=\"container-fluid px-0\">\n    <div class=\"col-12 text-center b-title\">\n      <h1 class=\"py-5 px-5 my-0 d-inline-table title\">SOLUÇÕES</h1>\n    </div>\n    <div id=\"produto1\" class=\"d-flex align-items-center\">\n      <div class=\"c-parallax col-lg-4 offset-lg-2\">\n        <h4>WIQUADRO</h4>\n        <p>\n          A plataforma que tem tudo o que sua escola precisa para inovar no ensino. O Wiquadro se adequa às necessidades de cada educador,\n          possibilitando hospedar conteúdos em qualquer formato (vídeos, textos, jogos), criar exercícios com correção automática\n          e emitir relatórios analíticos. O sistema disponibiliza ainda acesso personalizado para pais ou responsáveis e\n          gestores de escolas.\n        </p>\n        <a href=\"https://www.wiquadro.com.br\" target=\"_blank\">\n          <button class=\"btn\">SAIBA MAIS</button>\n        </a>\n      </div>\n    </div>\n\n    <div id=\"produto2\" class=\"d-flex align-items-center\">\n      <div class=\"c-parallax col-lg-4 offset-lg-2\">\n        <h4>WICURSOS</h4>\n        <p>\n          Seu conteúdo ou nosso conteúdo, você escolhe. Desenvolvemos cursos on-line ricos em elementos didáticos interativos que vão\n          desde animações, vídeos a jogos sobre os mais variados assuntos.\n        </p>\n        <button class=\"btn off\">SAIBA MAIS</button>\n      </div>\n    </div>\n\n    <div id=\"produto3\" class=\"d-flex align-items-center\">\n      <div class=\"c-parallax col-lg-4 offset-lg-2\">\n        <h4>WIGAMES</h4>\n        <p>\n          Acreditamos que é possível aprender se divertindo. Nossos games educativos desafiam e motivam os alunos criando um ambiente\n          de integração e aprendizagem. Traga sua ideia e vamos juntos criar poderosas ferramentas para engajar os alunos\n          na busca do conhecimento.\n        </p>\n        <a href=\"https://play.google.com/store/apps/developer?id=wigames\" target=\"_blank\">\n          <button class=\"btn\">SAIBA MAIS</button>\n        </a>\n      </div>\n    </div>\n\n\n  </div>\n</section>\n\n<section id=\"resultado\">\n  <div class=\"container-fluid px-0\">\n\n    <div class=\"col-12 text-center b-title\">\n      <h1 class=\"py-5 px-5 my-0 d-inline-table title\">RESULTADOS</h1>\n    </div>\n\n    <div id=\"resultados\" class=\"col-12 px-0 pt-4 pb-5\">\n      <div class=\"col-12 col-sm-4 px-0 d-inline-flex flex-column justify-content-center align-items-center\">\n        <div class=\"d-flex justify-content-center align-items-center\">\n          <span class=\"plus\">+</span>\n          <span class=\"cont d-flex justify-content-center align-items-center\" data-count-to=\"200000\">200.000</span>\n        </div>\n        <div class=\"object\">alunos alcançados</div>\n      </div>\n\n      <div class=\"col-12 col-sm-4 px-0 d-inline-flex flex-column justify-content-center align-items-center\">\n        <div class=\"d-flex justify-content-center align-items-center\">\n          <span class=\"plus\">+</span>\n          <span class=\"cont d-flex justify-content-center align-items-center\" data-count-to=\"500\">500</span>\n        </div>\n        <div class=\"object\">escolas beneficiadas</div>\n      </div>\n\n      <div class=\"col-12 col-sm-4 px-0 d-inline-flex flex-column justify-content-center align-items-center\">\n        <div class=\"d-flex justify-content-center align-items-center\">\n          <span class=\"plus\">+</span>\n          <span class=\"cont d-flex justify-content-center align-items-center\" data-count-to=\"300\">300</span>\n        </div>\n        <div class=\"object\">municípios beneficiados</div>\n      </div>\n\n    </div>\n  </div>\n</section>\n\n<section id=\"clientes\">\n  <div class=\"container-fluid px-0\">\n\n    <div class=\"col-12 text-center b-title\">\n      <h1 class=\"py-5 px-5 my-0 d-inline-table title\">CLIENTES</h1>\n    </div>\n\n    <div class=\"owl-carousel owl-theme\">\n      <div *ngFor=\"let image of images\" class=\"item\">\n        <a href=\"{{image.href}}\" target=\"_blank\">\n          <img class=\"px-3\" src=\"{{image.src}}\" alt=\"\">\n        </a>\n      </div>\n    </div>\n\n  </div>\n</section>\n\n<section id=\"wilivro\">\n  <div class=\"row col-12 mx-0 px-0\" style=\"z-index: 1;\">\n    <div class=\"btn unit active col-12 col-md-6 d-flex flex-column justify-content-around\" (mouseenter)=\"ngClickRJ($event)\">\n      <h1>RJ</h1>\n      <p>\n        Parque Tecnológico da Região Serrana\n        <br>Av. Afrânio de Melo Franco, 333\n        <br>Quintandinha - Petrópolis - RJ - Brasil\n        <br>+55 24 2248-7384\n      </p>\n    </div>\n    <div class=\"btn unit col-12 col-md-6 d-flex flex-column justify-content-around\" (mouseenter)=\"ngClickRN($event)\">\n      <h1>RN</h1>\n      <p>\n        Parque Tecnológico Metrópole Digital\n        <br>Rua Marise Bastier, 7\n        <br>Lagoa Nova - Natal - RN - Brasil\n        <br>+55 84 3301-2737\n      </p>\n    </div>\n  </div>\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [styles]=\"styles\" [scrollwheel]=\"scrollwheel\" [zoom]=\"zoom\" [styles]=\"styles\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"iconUrl\"></agm-marker>\n  </agm-map>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var on = true;
var PATH = "assets/img/home/clientes/";
var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;
var IndexComponent = (function () {
    function IndexComponent(titleService) {
        this.titleService = titleService;
        this.lat = -22.532491;
        this.lng = -43.209290;
        this.scrollwheel = false;
        this.zoom = 16;
        this.styles = [
            {
                elementType: "geometry",
                stylers: [{ color: "#1d2c4d" }]
            },
            {
                elementType: "labels.text.fill",
                stylers: [{ color: "#8ec3b9" }]
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{ color: "#1a3646" }]
            },
            {
                featureType: "administrative.country",
                elementType: "geometry.stroke",
                stylers: [{ color: "#4b6878" }]
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{ color: "#64779e" }]
            },
            {
                featureType: "administrative.province",
                elementType: "geometry.stroke",
                stylers: [{ color: "#4b6878" }]
            },
            {
                featureType: "landscape.man_made",
                elementType: "geometry.stroke",
                stylers: [{ color: "#334e87" }]
            },
            {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [{ color: "#023e58" }]
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#283d6a" }]
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6f9ba5" }]
            },
            {
                featureType: "poi",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#1d2c4d" }]
            },
            {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{ color: "#023e58" }]
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#3C7680" }]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#304a7d" }]
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#98a5be" }]
            },
            {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#1d2c4d" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#2c6675" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#255763" }]
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#b0d5ce" }]
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#023e58" }]
            },
            {
                featureType: "transit",
                elementType: "labels.text.fill",
                stylers: [{ color: "#98a5be" }]
            },
            {
                featureType: "transit",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#1d2c4d" }]
            },
            {
                featureType: "transit.line",
                elementType: "geometry.fill",
                stylers: [{ color: "#283d6a" }]
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{ color: "#3a4762" }]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#0e1626" }]
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#4e6d70" }]
            }
        ];
        this.images = [
            { src: PATH + "logo_assis.png", href: 'http://www.facbrasil.org.br/' },
            { src: PATH + "logo_ceara.png", href: 'http://www.stds.ce.gov.br/' },
            { src: PATH + "logo_piaui.png", href: 'http://www.seduc.pi.gov.br/' },
            { src: PATH + "logo_pro-cidadania.png", href: 'http://procidadania.org.br/web/' },
            { src: PATH + "logo-ensinart.png", href: 'http://ensinarteditora.com.br/' },
        ];
    }
    IndexComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    IndexComponent.prototype.ngOnInit = function () {
        this.iconUrl = 'assets/img/icons/markerRJ.svg';
        this.setTitle('Wilivro');
        this.resultados();
        this.habilitarFormSubmit();
    };
    IndexComponent.prototype.ngAfterViewInit = function () {
        var qtdClienteView = 5;
        if (isMobile) {
            qtdClienteView = 2;
        }
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: qtdClienteView,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    };
    IndexComponent.prototype.ngClickRN = function (el) {
        this.ngToggle(el);
        this.iconUrl = 'assets/img/icons/markerRN.svg';
        this.lat = -5.8237117;
        this.lng = -35.2080235;
    };
    IndexComponent.prototype.ngClickRJ = function (el) {
        this.ngToggle(el);
        this.iconUrl = 'assets/img/icons/markerRJ.svg';
        this.lat = -22.532491;
        this.lng = -43.209290;
    };
    IndexComponent.prototype.ngToggle = function (el) {
        $('.unit').toggleClass('active');
    };
    IndexComponent.prototype.habilitarFormSubmit = function () {
        var $contactForm = $('#contato');
        $contactForm.submit(function (e) {
            e.preventDefault();
            $.ajax({
                url: 'https://formspree.io/wilivro@wilivro.com.br',
                type: 'POST',
                data: $(this).serialize(),
                dataType: 'json',
                beforeSend: function () {
                    $contactForm.find('#msgForm').html('<div class="alert alert-info">Enviando mensagem</div>');
                    $contactForm[0].reset();
                },
                success: function (data) {
                    $contactForm.find('.alert-info').html('<div class="alert alert-success">Mensagem enviada!</div>').removeClass('alert alert-info');
                },
                error: function (err) {
                    console.log(err);
                    $contactForm.find('.alert-info').html('<div class="alert alert-danger">Ocorreu um erro ao enviar sua mensagem, tente novamente mais tarde.</div>').removeClass('alert alert-info');
                }
            });
        });
    };
    IndexComponent.prototype.contador = function (ele, count_to, timer, i) {
        if (i > count_to) {
            return;
        }
        ele.text(i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
        i += 1;
        /*console.log(timer);*/
        setTimeout(function () { this.contador(ele, count_to, timer, i); }, timer);
    };
    IndexComponent.prototype.resultados = function () {
        if (isMobile) {
            $('span.cont').map(function () {
                var total = $(this).attr('data-total');
                $(this).html(total);
            });
            return;
        }
        var _this = this;
        $(document).scroll(function () {
            if (window.scrollY > $('#sobre').offset().top - window.innerHeight / 2) {
                console.log('sobre');
            }
            if (!on)
                return;
            if (window.scrollY > $('#resultado').offset().top - window.innerHeight / 2) {
                var tempo_intervalo_1 = 5; //ms -> define a velocidade da animação
                var tempo_1 = 2000; //ms -> define o tempo total da animaçao
                $('span.cont').each(function () {
                    var count_to = parseInt($(this).data('countTo'));
                    var intervalos = tempo_1 / tempo_intervalo_1; //quantos passos de animação tem
                    var incremento = count_to / intervalos; //quanto cada contador deve aumentar
                    var valor = 0;
                    var el = $(this);
                    var timer = setInterval(function () {
                        if (valor >= count_to) {
                            valor = count_to;
                            clearInterval(timer);
                        }
                        var texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                        el.text(texto);
                        valor += incremento;
                    }, tempo_intervalo_1);
                });
                on = false;
            }
        });
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/index/index.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#menu {\n  position: absolute;\n  z-index: 10;\n  width: 100%;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) -10%, rgba(0, 0, 0, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000', GradientType=0);\n}\n\n#back {\n  position: fixed;\n  background: var(--cinza-escuro);\n  background: var(--cinza-escuro);\n  color: var(--branca);\n  color: var(--branca);\n  font-size: 40px;\n  border-radius: 100%;\n  width: 50px;\n  height: 50px;\n  bottom: 10px;\n  right: 10px;\n  z-index: 9;\n}\n\n#back.d-none {\n  display: none !important;\n}\n\n#back i {\n  position: relative;\n  top: -3px;\n  color: #fff;\n}\n\n#menu nav,\n#menu,\n#menu nav {\n  height: 115px;\n}\n\n#menu ul li a {\n  color: #fff;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n#menu #logo img,\n#menu #logo {\n  width: 170px;\n}\n\n#menu div#navbar-menu button {\n  color: #fff;\n  width: 175px;\n  border: 1px solid #fff;\n  font-weight: 600;\n  font-size: 13px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-family: OpenSansBold, Arial, sans-serif;\n}\n\n#menu div#navbar-menu button:hover {\n  background-color: rgba(0, 0, 0, .5);\n}\n\n/* CSS Smartphones */\n\n@media screen and (max-width: 992px) {\n  #btn-menu {\n    color: #fff;\n    font-size: 30px;\n  }\n  #navbar-menu ul,\n  #menu {\n    width: 100%;\n    background-color: #1c303b;\n  }\n  #navbar-menu ul {\n    margin-top: -15px;\n  }\n  #navbar-menu ul li {\n    text-align: center;\n    margin: 5px 0;\n  }\n  /* Final CSS Smartphones */\n}\n\n@media screen and (min-width: 993px) {\n  #navbar-menu,\n  #navbar-menu ul {\n    height: 100%;\n  }\n  #navbar-menu ul li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 0 20px;\n    box-sizing: border-box;\n    margin: 5px 10px;\n  }\n  #navbar-menu ul li:hover:not(.not) {\n    border-top: 5px solid #cb613f;\n    margin-top: 0;\n  }\n  #navbar-menu ul li:hover:not(.not) a {\n    color: #48ac97;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"menu\" class=\"container-fluid px-0\">\n  <nav class=\"navbar navbar-toggleable-md col-lg-10 offset-lg-1 py-0 px-0\">\n    <button id=\"btn-menu\" class=\"navbar-toggler navbar-toggler-right p-3 my-3 mt-4\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\"\n      aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i class=\"fa fa-bars color-b\" aria-hidden=\"true\"></i>\n    </button>\n    <a id=\"logo\" class=\"navbar-brand py-4 px-3 mt-2 ml-2\" routerLink=\"/\">\n      <img src=\"assets/img/icons/logo.svg\">\n    </a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n      <div class=\"mr-auto\"></div>\n      <div class=\"my-2 my-lg-0\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link linear\" pageScroll routerLink=\"/\" href=\"#sobre\">SOBRE</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link linear\" pageScroll routerLink=\"/\" href=\"#produtos\">SOLUÇÕES</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link linear\" pageScroll routerLink=\"/projetos\">PROJETOS</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link linear\" href=\"https://wiquadro.com.br\" target=\"_blank\">WIQUADRO</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link linear\" pageScroll routerLink=\"/\" href=\"#interessado\">CONTATO</a>\n          </li>\n          <li class=\"nav-item not\">\n            <a href=\"http://geralearning.wilivro.com.br/\" target=\"_blank\">\n              <button class=\"btn-outline-success my-2 my-sm-0 py-3 px-4 d-inline linear\" type=\"submit\">ÁREA DO ALUNO</button>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div id=\"back\" class=\"d-flex justify-content-center align-items-center d-none\">\n    <a pageScroll href=\"#menu\">\n      <i class=\"fa fa-angle-up\"></i>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
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

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        //Automatically collapsing Bootstrap navbar after navigation in a single page application
        $('.navbar-collapse a:not(.dropdown-toggle)').click(function () {
            $(this).parents('.navbar-collapse').collapse('hide');
        });
        this.buttomTop();
    };
    MenuComponent.prototype.buttomTop = function () {
        $(document).scroll(function () {
            if (window.scrollY > 500) {
                $('#back').removeClass('d-none');
            }
            else {
                $('#back').addClass('d-none');
            }
        });
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projetos/projetos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#projetos {\n  padding-top: 115px;\n  background: #1c303b;\n  background: url(\"/assets/img/projetos/topo.jpg\") no-repeat;\n  background-size: cover;\n  background-position: 50%;\n  min-height: 380px;\n}\n\n#projetos div.text-center {\n  font-size: 21px;\n  font-family: GothamLight;\n  padding: 20px;\n}\n\n#projetos>div.container-fluid {\n  color: var(--branca);\n  color: var(--branca);\n}\n\n.projeto-tema p {\n  font-size: 19px;\n  font-family: GothamLight;\n}\n\n.projeto-tema {\n  background: #1c303b;\n  background-size: cover;\n  background-position: 100% 50%;\n  min-height: 380px;\n  color: var(--branca);\n  color: var(--branca);\n}\n\n.projeto-tema img {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 10px;\n}\n\n.projeto-tema h1 {\n  color: #cb613f;\n  padding: 5px;\n  border: 1px solid #cb613f;\n  border-radius: 2px;\n  display: table;\n  font-family: GothamBold;\n}\n\n.projeto {\n  padding: 20px 15px;\n}\n\n.projeto img {\n  -webkit-filter: sepia(100%);\n  filter: sepia(100%);\n  transition: ease 0.5s all;\n}\n\n.projeto .d-flex:hover {\n  cursor: pointer;\n}\n\n.projeto .d-flex:hover img {\n  -webkit-filter: sepia(0%);\n  filter: sepia(0%);\n}\n\n.projeto .carousel-control-prev span,\n.projeto .carousel-control-next span {\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  background-size: 50% 50%;\n}\n\n.projeto .carousel-control-prev span {\n  background-position: 12px;\n}\n\n.projeto .carousel-control-next span {\n  background-position: 14px;\n}\n\n.projeto h4 {\n  font-size: 17px;\n  font-family: GothamBold;\n  margin-bottom: 5px;\n}\n\n.projeto h5 {\n  margin-bottom: 5px;\n  font-size: 14px;\n  font-family: OpenSans;\n}\n\n.c-black, .c-black:hover, \n.c-black:active, .c-black:focus {\n  text-decoration: none;\n  color: #000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projetos/projetos.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"projetos\" class=\"d-flex justify-content-center align-items-center\">\n    <div class=\"container-fluid\">\n      <div class=\"col-lg-8 offset-lg-2 text-center my-5\">\n        Desde 2003 temos participado de diversas iniciativas dos setores público e privado na área de educação.\n        <br> Os projetos que usam ou usaram tecnologia Wilivro abrangem o universo de centenas de escolas e instituições, espalhadas\n        por todo o Brasil. São mais de 200.000 crianças, jovens, adultos e idosos impactados pelo nosso trabalho.\n        <br> Conheça a seguir alguns dos projetos que usaram nossas soluções.\n      </div>\n      <p>\n  \n      </p>\n    </div>\n  </section>\n  \n  <section *ngFor=\"let projeto of todosProjetos\">\n    <div class=\"projeto-tema container-fluid d-flex px-0\" [ngStyle]=\"{ 'background-image': 'url(./assets/img/projetos/' + projeto.folder + '/bg.jpg)'}\">\n      <div class=\"d-flex align-items-center col-12\">\n        <div class=\"col-lg-6 offset-lg-1 my-5 \">\n          <img src=\"./assets/img/projetos/{{projeto.folder}}/icon.svg \">\n          <h1>{{projeto.nome}}</h1>\n          <p>{{projeto.desc}}</p>\n        </div>\n      </div>\n    </div>\n  \n    <!-- <div class=\"container-fluid d-md-block d-lg-block d-xs-none d-sm-none px-0 \"> -->\n    <div class=\"container-fluid d-block px-0 \">\n      <div class=\"d-flex justify-content-beteween align-items-center flex-wrap \">\n        <div class=\"projeto justify-content-center align-items-center col-md-6 col-lg-4 \" *ngFor=\"let projeto of projeto.projetos; \">\n          <div class=\"d-flex align-items-center col-md-12 col-lg-12 \">\n            <a class=\"d-flex align-items-center c-black\" href=\"{{projeto.href}}\" target=\"_blank\">\n            <div *ngIf=\"projeto.href != null; then thenTemplateProjeto else elseTemplateProjeto\">\n              Aqui nunca será mostrado\n            </div>\n  \n            <ng-template #thenTemplateProjeto>\n                <img src=\"{{projeto.src}}\" alt=\"{{projeto.local}} \">\n              </ng-template>\n              \n              <ng-template #elseTemplateProjeto>\n                <img src=\"{{projeto.src}}\" alt=\"{{projeto.local}} \">\n              </ng-template>\n              \n              <div>\n                <h4>{{projeto.nome}}</h4>\n                <!-- <h5>Participantes: {{projeto.participantes}}</h5> -->\n                <h5>Local: {{projeto.local}}</h5>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <!-- <div id=\"carouselProjetos \" class=\"projeto carousel slide d-md-none d-lg-none \" data-ride=\"carousel \">\n      <div class=\"carousel-inner \">\n        <div class=\"carousel-item justify-content-center align-items-center \" *ngFor=\"let projeto of projeto.projetos;let\n      i=index; let isFirst=f irst \" [class.active]=\"isFirst \">\n          <div class=\"d-flex justify-content-center align-items-center \">\n            <img src=\"{{this.PATH}}+{{projeto.folder}}+{{projeto.src}} \" alt=\"{{projeto.local}} \">\n            <div>\n              <h4>{{projeto.nome}}</h4>\n              <h5>Participantes: {{projeto.participantes}}</h5>\n              <h5>Local: {{projeto.local}}</h5>\n            </div>\n          </div>\n        </div>\n  \n      </div>\n      <a class=\"carousel-control-prev \" href=\"#carouselProjetos \" role=\"button \" data-slide=\"prev \">\n        <span class=\"btn-carrousel carousel-control-prev-icon \" aria-hidden=\"true \"></span>\n        <span class=\"sr-only \">Previous</span>\n      </a>\n      <a class=\"carousel-control-next \" href=\"#carouselProjetos \" role=\"button \" data-slide=\"next \">\n        <span class=\"btn-carrousel carousel-control-next-icon \" aria-hidden=\"true \"></span>\n        <span class=\"sr-only \">Next</span>\n      </a>\n    </div> -->\n  </section>\n  "

/***/ }),

/***/ "../../../../../src/app/projetos/projetos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosComponent; });
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

var PATH = "./assets/img/projetos/";
var ProjetosComponent = (function () {
    function ProjetosComponent() {
        this.todosProjetos = [
            {
                folder: 'fe',
                nome: 'Formação empreendedora',
                desc: "Objetiva proporcionar aos alunos do Ensino M\u00E9dio das escolas p\u00FAblicas, via internet e utilizando a tecnologia Wilivro, inclus\u00E3o digital, qualifica\u00E7\u00E3o em empreendedorismo e plano de neg\u00F3cio. Os alunos que apresentam os melhores planos recebem pr\u00EAmios e financiamento de microcr\u00E9dito para a montagem do pr\u00F3prio neg\u00F3cio.",
                projetos: [{
                        src: PATH + "fe/fe-emp-juvenil-ce.png",
                        nome: 'EMPREENDEDOR JUVENIL',
                        href: 'http://empreendedorjuvenil.stdsce.wilivro.com.br/',
                        participantes: 380,
                        local: 'Ceará'
                    }, {
                        src: PATH + "fe/fe-jovem-empreendedor-pe.png",
                        nome: 'JOVEM EMPREENDEDOR PE',
                        href: 'http://jeppe08.wilivro.com.br/',
                        participantes: 380,
                        local: 'Pernambuco'
                    },
                    {
                        src: PATH + "fe/fe-jovem-empreendedor-rn.png",
                        nome: 'JOVEM EMPREENDEDOR RN',
                        participantes: 380,
                        local: 'Rio Grande do Norte'
                    },
                    {
                        src: PATH + "fe/fe-juv-empreendedora-digital-pe.png",
                        nome: 'JUVENTUDE EMPREENDEDORA DIGITAL',
                        href: 'http://wilivro.github.io/site-juventudeempreendedoradigital',
                        participantes: 380,
                        local: 'Pernambuco'
                    },
                    {
                        src: PATH + "fe/fe-juventude-empreendedora-al.png",
                        nome: 'JUVENTUDE EMPREENDEDORA',
                        href: 'http://juventudeempreendedoraal.com.br/',
                        participantes: 420,
                        local: 'Alagoas'
                    },
                    {
                        src: PATH + "fe/fe-gestao-do-negocio.png",
                        nome: 'GESTÃO DO NEGÓCIO',
                        href: '#',
                        participantes: 420,
                        local: 'Alagoas'
                    },
                    {
                        src: PATH + "fe/fe-ed-finan.png",
                        nome: 'EDUCAÇÃO FINANCEIRA-DESENVOLVE',
                        href: '#',
                        participantes: 420,
                        local: 'Alagoas'
                    }]
            },
            {
                folder: 'fmt',
                nome: 'Formação para o mercado de trabalho',
                desc: "O programa visa promover a forma\u00E7\u00E3o socioeducativa em complementa\u00E7\u00E3o a forma\u00E7\u00E3o profissional, atrav\u00E9s do desenvolvimento das compet\u00EAncias n\u00E3o cognitivas para o trabalho e socioemocionais.",
                projetos: [{
                        src: PATH + "fmt/fmt-al.png",
                        nome: ' FORMAÇÃO PARA O MERCADO DE TRABALHO',
                        href: 'http://fmt.al.wilivro.com.br/',
                        participantes: 187,
                        local: 'Alagoas'
                    }, {
                        src: PATH + "fmt/fmt-bem-receber.png",
                        nome: 'BEM RECEBER',
                        href: 'http://bemreceber.wilivro.com.br/',
                        participantes: 2750,
                        local: 'Pernambuco'
                    },
                    {
                        src: PATH + "fmt/fmt-cepid-ades.png",
                        nome: 'CEPID - ADES',
                        href: 'http://cepid.ades.wilivro.com.br/',
                        participantes: 380,
                        local: 'Ceará'
                    },
                    {
                        src: PATH + "fmt/fmt-pi.png",
                        nome: 'FORMAÇÃO PARA O MERCADO DE TRABALHO',
                        participantes: 380,
                        href: 'http://www.fmt.pi.wilivro.com.br/',
                        local: 'Piauí'
                    },
                    {
                        src: PATH + "fmt/fmt-primeiro-passo.png",
                        nome: 'PRIMEIRO PASSO',
                        href: 'http://wilivro.github.io/site-primeiropassobolsista',
                        participantes: 420,
                        local: 'Ceará'
                    },
                    {
                        src: PATH + "fmt/fmt-renda-mais.png",
                        nome: 'RENDA MAIS',
                        participantes: 420,
                        local: 'Rio Grande do Norte'
                    },
                    {
                        src: PATH + "fmt/fmt-telecentros-ce.png",
                        nome: 'TELECENTROS',
                        href: 'http://telecentrostds.wilivro.com.br/',
                        participantes: 420,
                        local: 'Ceará'
                    },
                    {
                        src: PATH + "fmt/fmt-trab-nota-10.png",
                        nome: 'TRABALHADOR NOTA 10',
                        participantes: 420,
                        local: 'Rio Grande do Norte'
                    }]
            },
            {
                folder: 'lg',
                nome: 'Lógica para o ensino médio',
                desc: "Visa treinar e aprimorar a capacidade de pensar dos jovens do Ensino M\u00E9dio, ampliando o potencial para aprendizagem da Matem\u00E1tica, interpreta\u00E7\u00E3o de texto, compet\u00EAncia de tomada de decis\u00E3o no dia a dia e acesso ao mercado de trabalho. O conte\u00FAdo dos livros did\u00E1ticos e cursos on-line, foram desenvolvidos para auxiliar o aluno na obten\u00E7\u00E3o de melhor desempenho na prova do ENEM que prioriza na formula\u00E7\u00E3o de suas quest\u00F5es o racioc\u00EDnio l\u00F3gico. Em complementa\u00E7\u00E3o ao curso, s\u00E3o disponibilizadas Videoaulas contendo as resolu\u00E7\u00F5es das quest\u00F5es das provas do ENEM dos anos anteriores, numa vis\u00E3o de l\u00F3gica.",
                projetos: [{
                        src: PATH + "lg/lg-logitec-al.png",
                        nome: 'LOGITEC AL',
                        href: 'http://wilivro.github.io/site-logitec.al/',
                        participantes: 380,
                        local: 'Alagoas'
                    }, {
                        src: PATH + "lg/lg-logitec-pi.png",
                        nome: 'LOGITEC PI',
                        href: 'http://logicaseducpi.wilivro.com.br/',
                        participantes: 380,
                        local: 'Piauí'
                    }]
            },
            {
                folder: 'ept',
                nome: 'Educação para o trânsito',
                desc: "Devido aos Programas estabelecidos pelo Governo Estadual visando \u00E0 redu\u00E7\u00E3o de acidentes envolvendo motocicletas, este DETRAN, implantar\u00E1 programas educativos e preventivos que busquem a melhoria e seguran\u00E7a de todos que utilizam esses ve\u00EDculos, assim como promover a seguran\u00E7a daqueles que indiretamente s\u00E3o envolvidos em acidentes com motocicletas, prevalecendo os ideais da forma\u00E7\u00E3o cidad\u00E3 dos jovens e adolescentes, estudantes do ensino m\u00E9dio das escolas p\u00FAblicas do estado, futuros motoristas.",
                projetos: [{
                        src: PATH + "ept/ept-mototaxista.png",
                        nome: 'MOTOTAXISTA E MOTOFRETISTA',
                        href: 'http://motocidadaniape.com.br/',
                        participantes: 380,
                        local: 'Pernambuco'
                    }, {
                        src: PATH + "ept/ept-piloto-cidadao.png",
                        nome: 'PILOTO CIDADÃO',
                        href: 'http://pilotocidadaope.com.br/',
                        participantes: 380,
                        local: 'Pernambuco'
                    },
                    {
                        src: PATH + "ept/ept-taxista-amigo-pe.png",
                        nome: 'TAXISTA AMIGO',
                        href: 'http://taxistaamigope.wilivro.com.br/',
                        participantes: 420,
                        local: 'Pernambuco'
                    },
                    {
                        src: PATH + "ept/ept-educacao-no-transito.png",
                        nome: 'EDUCAÇÃO NO TRÂNSITO PARA MOTOCICLISTAS',
                        href: 'http://jogos.wilivro.com.br/',
                        participantes: 420,
                        local: 'Pernambuco'
                    }]
            },
            {
                folder: 're',
                nome: 'Reforço escolar',
                desc: "Programas de refor\u00E7o escolar para atender diferentes p\u00FAblicos e \u00E1reas, incluindo alfabetiza\u00E7\u00E3o para jovens e adultos com uso da tecnologia e prepara\u00E7\u00E3o de alunos do ensino fundamental para a Prova Brasil e outros exames de l\u00EDngua portuguesa e matem\u00E1tica.",
                projetos: [{
                        src: PATH + "re/re-alfabetizacao.png",
                        nome: 'ALFABETIZAÇÃO EJA',
                        participantes: 380,
                        local: 'Rio Grande do Norte'
                    }, {
                        src: PATH + "re/re-estuda-mais.png",
                        nome: 'ESTUDA MAIS - CLIC ESTUDE',
                        participantes: 380,
                        local: 'Alagoas'
                    }]
            },
            {
                folder: 'op',
                nome: 'Outros Projetos',
                desc: "Outros projetos que usam ou usaram a tecnologia Wilivro",
                projetos: [{
                        src: PATH + "op/op-alimentacao-saudavel.png",
                        nome: 'ALIMENTAÇÃO SAUDÁVEL ATN TICKET',
                        href: 'http://atn-ticket.com.br/',
                        participantes: 380,
                        local: 'Brasil'
                    }, {
                        src: PATH + "op/op-inclusao-digital.png",
                        nome: 'INCLUSÃO DIGITAL',
                        participantes: 380,
                        local: 'Pernambuco'
                    }, {
                        src: PATH + "op/op-inclusao-digital-al.png",
                        nome: 'INCLUSÃO DIGITAL SEBRAE',
                        href: 'http://bloglanhouseal.wilivro.com.br/',
                        participantes: 380,
                        local: 'Alagoas'
                    }, {
                        src: PATH + "op/op-olodum.png",
                        nome: 'ESCOLA OLODUM',
                        href: 'http://blogescolaolodum.wilivro.com.br/',
                        participantes: 380,
                        local: 'Bahia'
                    }, {
                        src: PATH + "op/op-projeto-esporte-cidadania.png",
                        nome: 'ESPORTE CIDADANIA',
                        href: 'http://projetoesportecidadaniafac.wilivro.com.br/',
                        participantes: 380,
                        local: 'Brasília'
                    }]
            },
        ];
    }
    ProjetosComponent.prototype.ngOnInit = function () {
    };
    ProjetosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projetos',
            template: __webpack_require__("../../../../../src/app/projetos/projetos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projetos/projetos.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ProjetosComponent);
    return ProjetosComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/img/criancas.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "criancas.ef35147c0efdddb49114.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/mob.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mob.87c280eb511a08230b63.png";

/***/ }),

/***/ "../../../../../src/assets/img/tablet1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tablet1.e4aed3d1377db133aba2.png";

/***/ }),

/***/ "../../../../../src/assets/img/tablet2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tablet2.e586b82c5576cd4b3f33.png";

/***/ }),

/***/ "../../../../../src/assets/img/tablet3.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tablet3.f6cb2d0797defb14b091.png";

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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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