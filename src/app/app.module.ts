import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import{HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ViagemPage} from '../pages/viagem/viagem';
import {CadastroAnotacaoPage} from '../pages/cadastro-anotacao/cadastro-anotacao';
import {AnotacaoPage} from '../pages/anotacao/anotacao';
import {dataProvider} from '../providers/data/data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CadastroViagemPage} from '../pages/cadastro-viagem/cadastro-viagem';
import { ChecklistPage } from '../pages/checklist/checklist';
import { AddPage } from '../pages/add/add';
<<<<<<< HEAD
import { SQLite } from '@ionic-native/sqlite';
=======
import {IonicStorageModule} from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { dataProvider } from '../providers/data/data';
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroViagemPage,
    ViagemPage,
    ChecklistPage,
    AddPage,
    CadastroAnotacaoPage,
    AnotacaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroViagemPage,
    ViagemPage,
    ChecklistPage,
    AddPage,
    CadastroAnotacaoPage,
    AnotacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
<<<<<<< HEAD
    SQLite,
=======
    DatePipe,
>>>>>>> 5f5eba06cc7849a13c8125f5bfe9a1d35042f6c1
    dataProvider
  ]
})
export class AppModule {}
