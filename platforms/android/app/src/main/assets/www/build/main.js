webpackJsonp([6],{

<<<<<<< HEAD
/***/ 100:
=======
/***/ 102:
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        if (!this.todoList) {
            this.todoList = [];
        }
        this.todoItem = "";
    }
    AddPage.prototype.save = function () {
        if (this.todoItem != "") {
            this.todoList.push(this.todoItem);
            localStorage.setItem("todos", JSON.stringify(this.todoList));
            this.navCtrl.pop();
        }
    };
    AddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPage');
        console.log(this.todoList);
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\add\add.html"*/'<!--\n\n  Generated template for the AddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Adicionar Item</ion-title>\n\n  </ion-navbar>\n\n  <ion-buttons end>\n\n      <button (click)="save()"><ion-icon name="checkmark"></ion-icon></button>\n\n  </ion-buttons>\n\n</ion-header>\n\n\n\n<ion-content padding class="add">\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label floating>Novo Item</ion-label>\n\n            <ion-input type="text" [(ngModel)]="todoItem"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\add\add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ }),

<<<<<<< HEAD
/***/ 101:
=======
/***/ 103:
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnotacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
<<<<<<< HEAD
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viagem_viagem__ = __webpack_require__(42);
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
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
 * Generated class for the AnotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnotacaoPage = /** @class */ (function () {
    function AnotacaoPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viagens = localStorage.getItem('viagens');
        this.viagens = JSON.parse(this.viagens);
        this.indexViagem = localStorage.getItem('indexViagem');
        this.indexAnotacao = localStorage.getItem('indexAnotacao');
        console.log(this.indexViagem);
        this.viagem = this.viagens[this.indexViagem];
        console.log(this.viagens);
        this.anotacao = this.viagens[this.indexViagem].anotacoes[this.indexAnotacao];
        console.log(this.anotacao);
    }
    AnotacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnotacaoPage');
    };
    AnotacaoPage.prototype.apagarAnotacao = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Apagar Anotação!',
            message: 'Você deseja mesmo apagar essa anotação?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Apagar',
                    handler: function () {
                        _this.viagens[_this.indexViagem].anotacoes.splice('indexAnotacao', 1);
                        localStorage.setItem("viagens", JSON.stringify(_this.viagens));
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    AnotacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-anotacao',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV4\caderneta\caderneta-master\src\pages\anotacao\anotacao.html"*/'<!--\n\n  Generated template for the AnotacaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Anotação</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <div padding>\n\n        <button ion-button block (click) = "apagarAnotacao()">Apagar anotação</button>\n\n    </div>\n\n    <ion-label><b>Data:</b></ion-label>\n\n    <ion-label>{{anotacao.data}}</ion-label>\n\n    <ion-label><b>Hora:</b></ion-label>\n\n    <ion-label>{{anotacao.hora}}</ion-label>\n\n    <ion-label><b>Coordenadas:</b></ion-label>\n\n    <ion-label>{{anotacao.coordenada}}</ion-label>\n\n    <ion-label><b>Texto:</b></ion-label>\n\n    <ion-label>{{anotacao.texto}}</ion-label>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV4\caderneta\caderneta-master\src\pages\anotacao\anotacao.html"*/,
=======
            selector: 'page-anotacao',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\anotacao\anotacao.html"*/'<!--\n\n  Generated template for the AnotacaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Anotação</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <div padding>\n\n        <button ion-button block (click) = "apagarAnotacao()">Apagar anotação</button>\n\n    </div>\n\n    <ion-label><b>Data:</b></ion-label>\n\n    <ion-label>{{anotacao.data}}</ion-label>\n\n    <ion-label><b>Hora:</b></ion-label>\n\n    <ion-label>{{anotacao.hora}}</ion-label>\n\n    <ion-label><b>Coordenadas:</b></ion-label>\n\n    <ion-label>{{anotacao.coordenada}}</ion-label>\n\n    <ion-label><b>Texto:</b></ion-label>\n\n    <ion-label>{{anotacao.texto}}</ion-label>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\anotacao\anotacao.html"*/,
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AnotacaoPage);
    return AnotacaoPage;
}());

//# sourceMappingURL=anotacao.js.map

/***/ }),

<<<<<<< HEAD
/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroViagemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CadastroViagemPage = /** @class */ (function () {
    function CadastroViagemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cadastroForm = {
            titulo: "",
            data: "",
            cidade: "",
            partida: "",
            retorno: "",
            observacoes: "",
            anotacoes: []
        };
        this.cadastroForm = {
            titulo: '',
            data: '',
            cidade: '',
            partida: '',
            retorno: '',
            observacoes: '',
            anotacoes: []
        };
    }
    CadastroViagemPage.prototype.setData = function (titulo, data, cidade, partidaData, partidaHora, retornoData, retornoHora, observacoes) {
        var cadastroForm = {
            titulo: '',
            data: '',
            cidade: '',
            partidaData: '',
            partidaHora: '',
            retornoData: '',
            retornoHora: '',
            observacoes: ''
        };
        cadastroForm.titulo = titulo;
        cadastroForm.data = data;
        cadastroForm.cidade = cidade;
        cadastroForm.partidaData = partidaData;
        cadastroForm.partidaHora = partidaHora;
        cadastroForm.retornoData = retornoData;
        cadastroForm.retornoHora = retornoHora;
        cadastroForm.observacoes = observacoes;
    };
    CadastroViagemPage.prototype.logForm = function () {
        console.log(this.cadastroForm);
        console.log(this.viagens);
        this.viagens = localStorage.getItem('viagens');
        console.log(this.viagens);
        this.viagens = JSON.parse(this.viagens);
        this.viagens.push(this.cadastroForm);
        console.log(this.viagens);
        localStorage.setItem("viagens", JSON.stringify(this.viagens));
    };
    CadastroViagemPage.prototype.getData = function () {
        return localStorage.getItem("viagens");
    };
    CadastroViagemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroViagemPage');
    };
    CadastroViagemPage.prototype.goHome = function () {
        this.navCtrl.pop();
    };
    CadastroViagemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-viagem',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV4\caderneta\caderneta-master\src\pages\cadastro-viagem\cadastro-viagem.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>cadastro da viagem</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h1>Criar viagem</h1>\n\n    <form (ngSubmit)="logForm()">\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Título</ion-label>\n\n        <ion-input type="text"  [(ngModel)]="cadastroForm.titulo"  name="titulo"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Data</ion-label>\n\n        <ion-datetime displayFormat = "DD MMM YYYY" [(ngModel)]="cadastroForm.data" name="data"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Cidade</ion-label>\n\n        <ion-input type="text" [(ngModel)]="cadastroForm.cidade" name="cidade"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Data de partida</ion-label>\n\n        <ion-datetime displayFormat = "DD MMM YYYY" [(ngModel)]="cadastroForm.partidaData" name="partidaData"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Hora de partida</ion-label>\n\n        <ion-datetime displayFormat="h:mm A" [(ngModel)]="cadastroForm.partidaHora" name="partidaHora"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Data de retorno</ion-label>\n\n        <ion-datetime displayFormat = "DD MMM YYYY" [(ngModel)]="cadastroForm.retornoData" name="retornoData"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Hora de retorno</ion-label>\n\n        <ion-datetime displayFormat="h:mm A" [(ngModel)]="cadastroForm.retornoHora" name="retornoHora"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Observações</ion-label>\n\n        <ion-textarea rows = "5" cols = "20" type="text" [(ngModel)]="cadastroForm.observacoes" name="observacoes"></ion-textarea>\n\n      </ion-item>\n\n      <button ion-button block type="submit" (click) = "goHome()">Seguir</button>\n\n    \n\n    </form>\n\n    \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV4\caderneta\caderneta-master\src\pages\cadastro-viagem\cadastro-viagem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadastroViagemPage);
    return CadastroViagemPage;
}());

//# sourceMappingURL=cadastro-viagem.js.map

/***/ }),

/***/ 103:
=======
/***/ 104:
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroAnotacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
<<<<<<< HEAD
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viagem_viagem__ = __webpack_require__(42);
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
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
 * Generated class for the CadastroAnotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroAnotacaoPage = /** @class */ (function () {
    function CadastroAnotacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cadastroForm = {
            data: "",
            hora: "",
            coordenadas: "",
            texto: "",
            imagem: ""
        };
        this.cadastroForm = {
            data: "",
            hora: "",
            coordenadas: "",
            texto: "",
            imagem: "",
        };
        this.viagens = localStorage.getItem('viagens');
    }
    CadastroAnotacaoPage.prototype.setData = function (data, hora, coordenadas, texto) {
        var cadastroForm = {
            data: "",
            hora: "",
            coordenadas: "",
            texto: "",
            imagem: "",
        };
        cadastroForm.data = data;
        cadastroForm.hora = hora;
        cadastroForm.coordenadas = coordenadas;
        cadastroForm.texto = texto;
    };
    CadastroAnotacaoPage.prototype.logForm = function () {
        this.viagens = localStorage.getItem('viagens');
        this.viagens = JSON.parse(this.viagens);
        this.viagens[localStorage.getItem("indexViagem")].anotacoes.push(this.cadastroForm);
        localStorage.setItem("viagens", JSON.stringify(this.viagens));
    };
    CadastroAnotacaoPage.prototype.getData = function () {
        return localStorage.getItem("viagens");
    };
    CadastroAnotacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroAnotacaoPage');
    };
    CadastroAnotacaoPage.prototype.goViagem = function () {
        this.navCtrl.pop();
    };
    CadastroAnotacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-cadastro-anotacao',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV4\caderneta\caderneta-master\src\pages\cadastro-anotacao\cadastro-anotacao.html"*/'<!--\n\n  Generated template for the CadastroAnotacaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>cadastro-anotacao</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="logForm()">\n\n      \n\n        <ion-item>\n\n          <ion-label floating>Data</ion-label>\n\n          <ion-datetime displayFormat = "DD MMM YYYY" [(ngModel)]="cadastroForm.data" name="data"></ion-datetime>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n          <ion-label floating>Hora</ion-label>\n\n          <ion-datetime displayFormat="h:mm A" pickerFormat = "h mm a" [(ngModel)]="cadastroForm.hora" name="hora"></ion-datetime>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n          <ion-label floating>Coordenadas</ion-label>\n\n          <ion-input type="text" [(ngModel)]="cadastroForm.coordendas" name="coordenadas"></ion-input>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n          <ion-label floating>Texto</ion-label>\n\n          <ion-textarea rows = "10" cols = "20" [(ngModel)]="cadastroForm.texto" name="texto"></ion-textarea>\n\n        </ion-item>\n\n  \n\n        <button ion-button block type="submit" (click) = "goViagem()">Seguir</button>\n\n      \n\n      </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV4\caderneta\caderneta-master\src\pages\cadastro-anotacao\cadastro-anotacao.html"*/,
=======
            selector: 'page-cadastro-anotacao',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\cadastro-anotacao\cadastro-anotacao.html"*/'<!--\n\n  Generated template for the CadastroAnotacaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>cadastro-anotacao</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="logForm()">\n\n      \n\n        <ion-item>\n\n          <ion-label floating>Data</ion-label>\n\n          <ion-datetime displayFormat = "DD MMM YYYY" [(ngModel)]="cadastroForm.data" name="data"></ion-datetime>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n          <ion-label floating>Hora</ion-label>\n\n          <ion-datetime displayFormat="h:mm A" pickerFormat = "h mm a" [(ngModel)]="cadastroForm.hora" name="hora"></ion-datetime>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n          <ion-label floating>Coordenadas</ion-label>\n\n          <ion-input type="text" [(ngModel)]="cadastroForm.coordendas" name="coordenadas"></ion-input>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n          <ion-label floating>Texto</ion-label>\n\n          <ion-textarea rows = "10" cols = "20" [(ngModel)]="cadastroForm.texto" name="texto"></ion-textarea>\n\n        </ion-item>\n\n  \n\n        <button ion-button block type="submit" (click) = "goViagem()">Seguir</button>\n\n      \n\n      </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\cadastro-anotacao\cadastro-anotacao.html"*/,
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadastroAnotacaoPage);
    return CadastroAnotacaoPage;
}());

//# sourceMappingURL=cadastro-anotacao.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_add__ = __webpack_require__(100);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(41);
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



<<<<<<< HEAD
var ChecklistPage = /** @class */ (function () {
    function ChecklistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        /*checklist: Array<string> = ['GPS','Oculos','Bússola'];
        newObj(){
          
        }*/
        this.todoList = JSON.parse(localStorage.getItem("todos"));
    }
    ChecklistPage.prototype.ionViewWillEnter = function () {
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        if (!this.todoList) {
            this.todoList = [''];
        }
=======
var CadastroViagemPage = /** @class */ (function () {
    function CadastroViagemPage(navCtrl, navParams, data, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.toast = toast;
        this.cadastroForm = {
            titulo: "",
            data: "",
            cidade: "",
            partida: "",
            retorno: "",
            observacoes: "",
            anotacoes: []
        };
        this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["b" /* viagem */]();
        this.cadastroForm = {
            titulo: '',
            data: '',
            cidade: '',
            partida: '',
            retorno: '',
            observacoes: '',
            anotacoes: []
        };
    }
    CadastroViagemPage.prototype.setData = function (titulo, data, cidade, partidaData, partidaHora, retornoData, retornoHora, observacoes) {
        var cadastroForm = {
            titulo: '',
            data: '',
            cidade: '',
            partidaData: '',
            partidaHora: '',
            retornoData: '',
            retornoHora: '',
            observacoes: ''
        };
        cadastroForm.titulo = titulo;
        cadastroForm.data = data;
        cadastroForm.cidade = cidade;
        cadastroForm.partidaData = partidaData;
        cadastroForm.partidaHora = partidaHora;
        cadastroForm.retornoData = retornoData;
        cadastroForm.retornoHora = retornoHora;
        cadastroForm.observacoes = observacoes;
    };
    CadastroViagemPage.prototype.logForm = function () {
        console.log(this.cadastroForm);
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
    };
    ChecklistPage.prototype.delete = function (index) {
        this.todoList.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(this.todoList));
    };
<<<<<<< HEAD
    ChecklistPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_add__["a" /* AddPage */]);
    };
    ChecklistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChecklistPage');
        console.log(this.todoList);
    };
    ChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checklist',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV4\caderneta\caderneta-master\src\pages\checklist\checklist.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Materiais Para Viagem</ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="add()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="todos">\n\n  <!--<ion-list id="items">\n\n\n\n    <ion-item>\n\n      <ion-label>{{checklist[0]}}</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>{{checklist[1]}}</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>{{checklist[2]}}</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>-->\n\n  <h6>Arraste para o lado para deletar</h6>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let todo of todoList; let i = index">\n\n      <ion-item>\n\n        <h2>{{ todo }}</h2>\n\n      </ion-item>\n\n      <ion-item-options>\n\n        <button danger (click)="delete(i)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Delete\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV4\caderneta\caderneta-master\src\pages\checklist\checklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChecklistPage);
    return ChecklistPage;
=======
    CadastroViagemPage.prototype.save = function () {
        var _this = this;
        this.saveViagem()
            .then(function () {
            _this.toast.create({ message: 'Viagem Salva.', duration: 3000, position: 'botton' }).present();
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao salvar viagem.', duration: 3000, position: 'botton' }).present();
        });
    };
    CadastroViagemPage.prototype.saveViagem = function () {
        if (this.key) {
            return this.data.update(this.key, this.model);
        }
        else {
            return this.data.insert(this.model);
        }
    };
    CadastroViagemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroViagemPage');
    };
    CadastroViagemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-viagem',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\cadastro-viagem\cadastro-viagem.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>cadastro da viagem</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h1>Criar viagem</h1>\n\n    <form (ngSubmit)="logForm()">\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Título</ion-label>\n\n        <ion-input type="text"  [(ngModel)]="model.titulo"  name="titulo"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Data</ion-label>\n\n        <ion-datetime displayFormat = "DD MMM YYYY" [(ngModel)]="model.data" name="data"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Cidade</ion-label>\n\n        <ion-input type="text" [(ngModel)]="model.cidade" name="cidade"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Data de partida</ion-label>\n\n        <ion-datetime displayFormat = "DD MMM YYYY" [(ngModel)]="model.partidaData" name="partidaData"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Hora de partida</ion-label>\n\n        <ion-datetime displayFormat="h:mm A" [(ngModel)]="model.partidaHora" name="partidaHora"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Data de retorno</ion-label>\n\n        <ion-datetime displayFormat = "DD MMM YYYY" [(ngModel)]="model.retornoData" name="retornoData"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Hora de retorno</ion-label>\n\n        <ion-datetime displayFormat="h:mm A" [(ngModel)]="model.retornoHora" name="retornoHora"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Observações</ion-label>\n\n        <ion-textarea rows = "5" cols = "20" type="text" [(ngModel)]="model.observacoes" name="observacoes"></ion-textarea>\n\n      </ion-item>\n\n      <button ion-button block (click) = "save()">Seguir</button>\n\n    \n\n    </form>\n\n    \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\cadastro-viagem\cadastro-viagem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* dataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], CadastroViagemPage);
    return CadastroViagemPage;
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
}());

//# sourceMappingURL=checklist.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViagemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_anotacao_cadastro_anotacao__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anotacao_anotacao__ = __webpack_require__(101);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_add__ = __webpack_require__(102);
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViagemPage = /** @class */ (function () {
    function ViagemPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viagens = localStorage.getItem('viagens');
        this.viagens = JSON.parse(this.viagens);
        this.indexViagem = localStorage.getItem('indexViagem');
        console.log(this.indexViagem);
        this.viagem = this.viagens[this.indexViagem];
        console.log(this.viagens);
        this.anotacoes = this.viagens[this.indexViagem].anotacoes;
    }
    ViagemPage.prototype.ionViewWillEnter = function () {
        this.viagens = JSON.parse(localStorage.getItem("viagens"));
        this.anotacoes = this.viagens[this.indexViagem].anotacoes;
    };
    ViagemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViagemPage');
        console.log(this.viagem);
    };
    ViagemPage.prototype.goCadastroAnotacaoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_anotacao_cadastro_anotacao__["a" /* CadastroAnotacaoPage */]);
    };
    ViagemPage.prototype.goAnotacaoPage = function (i) {
        localStorage.setItem("indexAnotacao", i);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__anotacao_anotacao__["a" /* AnotacaoPage */]);
    };
    ViagemPage.prototype.apagarViagem = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Apagar Viagem!',
            message: 'Você deseja mesmo apagar essa viagem?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Apagar',
                    handler: function () {
                        _this.viagens.splice(_this.indexViagem, 1);
                        localStorage.setItem("viagens", JSON.stringify(_this.viagens));
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    ViagemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-viagem',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV4\caderneta\caderneta-master\src\pages\viagem\viagem.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>{{viagem.titulo}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div padding>\n\n    <button ion-button block (click) = "apagarViagem()">Apagar viagem</button>\n\n  </div>\n\n\n\n  <ion-label><b>Título:</b></ion-label>\n\n  <ion-label>{{viagem.titulo}}</ion-label>\n\n  <ion-label><b>Data:</b></ion-label>\n\n  <ion-label>{{viagem.data}}</ion-label>\n\n  <ion-label><b>Cidade:</b></ion-label>\n\n  <ion-label>{{viagem.cidade}}</ion-label>\n\n  <ion-label><b>Data de partida:</b></ion-label>\n\n  <ion-label>{{viagem.partidaData}}</ion-label>\n\n  <ion-label><b>Hora de partida:</b></ion-label>\n\n  <ion-label>{{viagem.partidaHora}}</ion-label>\n\n  <ion-label><b>Data de retorno:</b></ion-label>\n\n  <ion-label>{{viagem.retornoData}}</ion-label>\n\n  <ion-label><b>Hora de retorno:</b></ion-label>\n\n  <ion-label>{{viagem.retornoHora}}</ion-label>\n\n  <ion-label><b>Observações:</b></ion-label>\n\n  <ion-label>{{viagem.observacoes}}</ion-label>\n\n\n\n  <div padding>\n\n    <button ion-button block (click)="goCadastroAnotacaoPage()">Criar anotação</button>\n\n  </div>\n\n\n\n  <div padding *ngFor = "let anotacao of anotacoes; let i = index">\n\n      <button ion-button block (click)="goAnotacaoPage(i)" >Anotacao {{ i + 1}}</button>\n\n  </div>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV4\caderneta\caderneta-master\src\pages\viagem\viagem.html"*/,
=======
            selector: 'page-checklist',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\checklist\checklist.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Materiais Para Viagem</ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="add()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="todos">\n\n  <!--<ion-list id="items">\n\n\n\n    <ion-item>\n\n      <ion-label>{{checklist[0]}}</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>{{checklist[1]}}</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>{{checklist[2]}}</ion-label>\n\n      <ion-checkbox></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>-->\n\n  <h6>Arraste para o lado para deletar</h6>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let todo of todoList; let i = index">\n\n      <ion-item>\n\n        <h2>{{ todo }}</h2>\n\n      </ion-item>\n\n      <ion-item-options>\n\n        <button danger (click)="delete(i)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Delete\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\checklist\checklist.html"*/,
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ViagemPage);
    return ViagemPage;
}());

//# sourceMappingURL=viagem.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add/add.module": [
<<<<<<< HEAD
		278,
		5
	],
	"../pages/anotacao/anotacao.module": [
		279,
		4
	],
	"../pages/cadastro-anotacao/cadastro-anotacao.module": [
		281,
		3
	],
	"../pages/cadastro-viagem/cadastro-viagem.module": [
		280,
		2
	],
	"../pages/checklist/checklist.module": [
		282,
		1
	],
	"../pages/viagem/viagem.module": [
		283,
=======
		280,
		5
	],
	"../pages/anotacao/anotacao.module": [
		281,
		4
	],
	"../pages/cadastro-anotacao/cadastro-anotacao.module": [
		282,
		3
	],
	"../pages/cadastro-viagem/cadastro-viagem.module": [
		283,
		2
	],
	"../pages/checklist/checklist.module": [
		284,
		1
	],
	"../pages/viagem/viagem.module": [
		285,
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

<<<<<<< HEAD
/***/ 199:
=======
/***/ 202:
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_viagem_cadastro_viagem__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viagem_viagem__ = __webpack_require__(105);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_viagem_cadastro_viagem__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viagem_viagem__ = __webpack_require__(42);
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




<<<<<<< HEAD
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vetor = [];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.viagens = JSON.parse(localStorage.getItem("viagens"));
        if (!this.viagens) {
            localStorage.setItem("viagens", JSON.stringify(this.vetor));
        }
        console.log(localStorage.getItem("viagens"));
=======

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, data, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.toast = toast;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.data.getAll()
            .then(function (result) {
            _this.viagens = result;
        });
        //console.log(this.viagens);
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
    };
    HomePage.prototype.goCadastroViagemPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_viagem_cadastro_viagem__["a" /* CadastroViagemPage */]);
    };
<<<<<<< HEAD
    HomePage.prototype.goViagemPage = function (i) {
        localStorage.setItem("indexViagem", i);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viagem_viagem__["a" /* ViagemPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        console.log(this.viagens);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV4\caderneta\caderneta-master\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>PÁGINA INICIAL</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div padding>\n\n    <button ion-button block (click)="goCadastroViagemPage()">Criar Viagem</button>\n\n  </div>\n\n\n\n  <div padding *ngFor = "let viagem of viagens; let i = index">\n\n      <button ion-button block (click)="goViagemPage(i)">{{viagem.titulo}}</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV4\caderneta\caderneta-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
=======
    HomePage.prototype.goViagemPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viagem_viagem__["a" /* ViagemPage */], { key: item.key, viagem: item.viagem });
        console.log(item);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad HomePage');
        //console.log(this.viagens);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>PÁGINA INICIAL</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div padding>\n\n    <button ion-button block (click)="goCadastroViagemPage()">Criar Viagem</button>\n\n  </div>\n\n\n\n  <div padding *ngFor = "let viagem of viagens; let i = index">\n\n      <button ion-button block (click)="goViagemPage(viagem)">{{viagem.viagem.titulo}}</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* dataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

<<<<<<< HEAD
/***/ 200:
=======
/***/ 203:
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var dataProvider = /** @class */ (function () {
    function dataProvider() {
    }
    dataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], dataProvider);
    return dataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< HEAD
/***/ 224:
=======
/***/ 226:
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_viagem_viagem__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_anotacao_cadastro_anotacao__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_anotacao_anotacao__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data_data__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cadastro_viagem_cadastro_viagem__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_checklist_checklist__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_add_add__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__ = __webpack_require__(277);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_viagem_viagem__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_anotacao_cadastro_anotacao__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_anotacao_anotacao__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_viagem_cadastro_viagem__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_checklist_checklist__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_add_add__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_data_data__ = __webpack_require__(41);
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















<<<<<<< HEAD
=======

>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastro_viagem_cadastro_viagem__["a" /* CadastroViagemPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_viagem_viagem__["a" /* ViagemPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_anotacao_cadastro_anotacao__["a" /* CadastroAnotacaoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_anotacao_anotacao__["a" /* AnotacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/anotacao/anotacao.module#AnotacaoPageModule', name: 'AnotacaoPage', segment: 'anotacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-anotacao/cadastro-anotacao.module#CadastroAnotacaoPageModule', name: 'CadastroAnotacaoPage', segment: 'cadastro-anotacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-viagem/cadastro-viagem.module#CadastroViagemPageModule', name: 'CadastroViagemPage', segment: 'cadastro-viagem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checklist/checklist.module#ChecklistPageModule', name: 'ChecklistPage', segment: 'checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viagem/viagem.module#ViagemPageModule', name: 'ViagemPage', segment: 'viagem', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastro_viagem_cadastro_viagem__["a" /* CadastroViagemPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_viagem_viagem__["a" /* ViagemPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_anotacao_cadastro_anotacao__["a" /* CadastroAnotacaoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_anotacao_anotacao__["a" /* AnotacaoPage */]
            ],
            providers: [
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_10__providers_data_data__["a" /* dataProvider */]
=======
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_17__providers_data_data__["a" /* dataProvider */]
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 268:
=======
/***/ 271:
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_checklist_checklist__ = __webpack_require__(104);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_checklist_checklist__ = __webpack_require__(106);
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dataProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Página Inicial', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Materiais Para Viagem', component: __WEBPACK_IMPORTED_MODULE_6__pages_checklist_checklist__["a" /* ChecklistPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\app\app.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* dataProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* dataProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

<<<<<<< HEAD
/***/ 276:
=======
/***/ 279:
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

<<<<<<< HEAD
/***/ })

},[201]);
=======
/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return viagem; });
/* unused harmony export viagensList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var dataProvider = /** @class */ (function () {
    function dataProvider(storage, datepipe) {
        this.storage = storage;
        this.datepipe = datepipe;
    }
    dataProvider.prototype.insert = function (viagem) {
        var key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
        return this.save(key, viagem);
    };
    dataProvider.prototype.update = function (key, viagem) {
        return this.save(key, viagem);
    };
    dataProvider.prototype.save = function (key, viagem) {
        return this.storage.set(key, viagem);
    };
    dataProvider.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    dataProvider.prototype.getAll = function () {
        var viagens = [];
        return this.storage.forEach(function (value, key, iterationNumber) {
            var viagem = new viagensList();
            viagem.key = key;
            viagem.viagem = value;
            viagens.push(viagem);
        })
            .then(function () {
            return Promise.resolve(viagens);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    dataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]])
    ], dataProvider);
    return dataProvider;
}());

var viagem = /** @class */ (function () {
    function viagem() {
    }
    return viagem;
}());

var viagensList = /** @class */ (function () {
    function viagensList() {
    }
    return viagensList;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViagemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_anotacao_cadastro_anotacao__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anotacao_anotacao__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViagemPage = /** @class */ (function () {
    function ViagemPage(navCtrl, navParams, alertCtrl, data, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.data = data;
        this.toast = toast;
    }
    ViagemPage.prototype.ionViewWillEnter = function () {
        this.model = this.navParams.data.viagem;
        this.key = this.navParams.data.key;
        console.log(this.model);
    };
    ViagemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViagemPage');
    };
    ViagemPage.prototype.goCadastroAnotacaoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_anotacao_cadastro_anotacao__["a" /* CadastroAnotacaoPage */]);
    };
    ViagemPage.prototype.goAnotacaoPage = function (i) {
        localStorage.setItem("indexAnotacao", i);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__anotacao_anotacao__["a" /* AnotacaoPage */]);
    };
    ViagemPage.prototype.apagarViagem = function (k) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Apagar Viagem!',
            message: 'Você deseja mesmo apagar essa viagem?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Apagar',
                    handler: function () {
                        _this.removeContact(k);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    ViagemPage.prototype.removeContact = function (key) {
        this.data.remove(key);
    };
    ViagemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viagem',template:/*ion-inline-start:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\viagem\viagem.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{model?.titulo}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div padding>\n\n    <button ion-button block (click) = "apagarViagem(key)">Apagar viagem</button>\n\n  </div>\n\n\n\n  <ion-label><b>Título:</b></ion-label>\n\n  <ion-label>{{model?.titulo}}</ion-label>\n\n  <ion-label><b>Data:</b></ion-label>\n\n  <ion-label>{{model?.data}}</ion-label>\n\n  <ion-label><b>Cidade:</b></ion-label>\n\n  <ion-label>{{model?.cidade}}</ion-label>\n\n  <ion-label><b>Data de partida:</b></ion-label>\n\n  <ion-label>{{model?.partidaData}}</ion-label>\n\n  <ion-label><b>Hora de partida:</b></ion-label>\n\n  <ion-label>{{model?.partidaHora}}</ion-label>\n\n  <ion-label><b>Data de retorno:</b></ion-label>\n\n  <ion-label>{{model?.retornoData}}</ion-label>\n\n  <ion-label><b>Hora de retorno:</b></ion-label>\n\n  <ion-label>{{model?.retornoHora}}</ion-label>\n\n  <ion-label><b>Observações:</b></ion-label>\n\n  <ion-label>{{model?.observacoes}}</ion-label>\n\n\n\n  <div padding>\n\n    <button ion-button block (click)="goCadastroAnotacaoPage()">Criar anotação</button>\n\n  </div>\n\n\n\n  <div padding *ngFor = "let anotacao of anotacoes; let i = index">\n\n      <button ion-button block (click)="goAnotacaoPage(i)" >Anotacao {{ i + 1}}</button>\n\n  </div>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Familia Oliveira\projeto\cadernetaV5\caderneta\caderneta-master\src\pages\viagem\viagem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* dataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ViagemPage);
    return ViagemPage;
}());

//# sourceMappingURL=viagem.js.map

/***/ })

},[203]);
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
//# sourceMappingURL=main.js.map