import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { QuestionPage } from '../pages/question/question';
import { DetailsPage } from '../pages/details/details';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

// Import Firebase / environment config and initialise
import * as firebase from 'firebase';
//import { environment } from '../environments/environment';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';

//firebase.initializeApp(environment.firebase);

var config = {
    apiKey: "AIzaSyBn2tpdmMAeu2uHwLOW1EFjugMolkrnwSs",
    authDomain: "studentapp-5c54c.firebaseapp.com",
    databaseURL: "https://studentapp-5c54c.firebaseio.com",
    projectId: "studentapp-5c54c",
    storageBucket: "studentapp-5c54c.appspot.com",
    messagingSenderId: "103000883165"
  };
  firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    QuestionPage,
    DetailsPage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    QuestionPage,
    DetailsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FirebaseProvider
  ]
})
export class AppModule {}