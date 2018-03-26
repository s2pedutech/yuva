import { Component } from '@angular/core';
import { IonicPage, NavController,   AlertController, Loading,
  LoadingController } from 'ionic-angular';
import {
   FormBuilder,
   FormGroup,
   Validators } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';
import { RegisterPage } from '../register/register';


// Import the HomePage component
import { ListPage } from '../list/list';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


   /**
    * Create reference for FormGroup object
    */
   public form : FormGroup;


   constructor(public navCtrl    : NavController,
               private _FB       : FormBuilder,
                   public loadingCtrl: LoadingController,

               public alertCtrl: AlertController,
               private _AUTH     : AuthProvider)
   {
      // Define FormGroup object using Angular's FormBuilder
      this.form = this._FB.group({
         'mobile'        : ['', Validators.required]
        
      });
   }




   /**
    * Log in using the loginWithEmailAndPassword method
    * from the AuthProvider service (supplying the email
    * and password FormControls from the template via the
    * FormBuilder object
    * @method logIn
    * @return {none}
    */
   logIn() : void
   {
      let mobile      : any = this.form.controls['mobile'].value,
      this._AUTH.loginWithEmailAndPassword("amdanifaisal@gmail.com", "123456")
      .then((auth : any) =>
      {
        //validate user with mob no
        this._AUTH.validateUser(mobile).subscribe(k =>{
        console.log(k);
        var m = k.filter(user =>{
        return user.mobile === mobile;
        })
        console.log(m);
        if(m.length === 0){
        console.log("error");
        
        }
        else {
      this.navCtrl.setRoot(ListPage);
    }

        
        });
        
         
      });
     
   }
   register(){
    this.navCtrl.push(RegisterPage);
    }
}