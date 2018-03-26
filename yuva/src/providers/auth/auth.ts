import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase} from 'angularfire2/database';


// DON'T forget to import the Firebase node package!
import * as firebase from 'firebase';



@Injectable()
export class AuthProvider {

   public user : Observable<any>;


   constructor(public af: AngularFireDatabase)
   {
      firebase.auth().onAuthStateChanged((user) =>
      {
        if (user)
        {
          // User is signed in.
          console.log('User is signed in');
          
        }
        else
        {
          // No user is signed in.
          console.log('User is NOT signed in');
        }
      });
   }




   /**
    * Use Firebase Web API signInWithEmailAndPassword method
    * to authenticate user login attempt
    *
    * @method loginWithEmailAndPassword
    * @param email    {string}      User e-mail address
    * @param password {string}      E-mail account password
    * @return {Promise}
    */
    
    validateUser(mobile: string) : Promise
    {
        const studentsArray : any = firebase
         return this.af.list('/students').snapshotChanges().map(changes => {
         console.log(changes);
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    }
   loginWithEmailAndPassword(email : string,password  : string) : Promise
   {
      return new Promise((resolve, reject) =>
      {
         firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then((val : any) =>
         {
         console.log(val);
            resolve(val);
         })
         .catch((error : any) =>
         {
            reject(error);
         });
      });
   }
   
   async signupUser(email: string, user : any): Promise<User> {
    try {
    /* const newUser: User = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
*/
      await firebase
        .database()
        .ref(`/students`)
        .push(user);
      //return newUser;
    } catch (error) {
      throw error;
    }
  }



   /**
    * Log out with Firebase Web API signOut method
    *
    * @method logOut
    * @return {Promise}
    */
   logOut() : Promise
   {
      return new Promise((resolve, reject) =>
      {
        firebase
        .auth()
        .signOut()
        .then(() =>
        {
           resolve(true);
        })
        .catch((error : any) =>
        {
           reject(error);
        });
      });
   }

}
