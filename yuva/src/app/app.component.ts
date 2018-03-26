import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import page components and authentication provider
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { QuestionPage } from '../pages/question/question';
import { DetailsPage } from '../pages/details/details';


import { AuthProvider } from '../providers/auth/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;


   /**
    * Set the root page for the application
    */
   public rootPage: any = ListPage;



   /**
    * Define the pages for the application
    */
   private pages: Array<{title: string, component: any}>;



   constructor(public platform      : Platform,
               public statusBar     : StatusBar,
               public splashScreen  : SplashScreen,
               private _AUTH        : AuthProvider)
   {
      this.initializeApp();


      // Populate pages for the application
      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Drives', component: ListPage },
        { title: 'Logout', component: LoginPage }
      ];
   }




   /**
    * Initialise the application
    * @method initializeApp
    * return {none}
    */
   initializeApp() : void
   {
      this.platform
      .ready()
      .then(() =>
      {
         // Okay, so the platform is ready and our plugins are available.
         // Here you can do any higher level native things you might need.
         this.statusBar.styleDefault();
         this.splashScreen.hide();
      });
   }




   /**
    * Open a page from the sidemenu
    * @method openPage
    * @param page   {object}      The name of the page component to open
    * return {none}
    */
   openPage(page : any) : void
   {
      // Ensure we can log out of Firebase and reset the root page
      if(page == 'Logout')
      {
         this._AUTH.logOut()
         .then((data : any) =>
         {
            this.nav.setRoot(page.component);
         })
         .catch((error : any) =>
         {
            console.dir(error);
         });
      }

      // Otherwise reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      else
      {
         this.nav.setRoot(page.component);
      }
   }
}
