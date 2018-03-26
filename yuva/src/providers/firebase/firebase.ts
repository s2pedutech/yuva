import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

questions: Array<any> = [];
  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }
loadEventData() {
    return this.afd.list('/events').valueChanges();
  }
  loadData() {
    return this.afd.list('/Questions/q/p005').valueChanges();
  }
  
  loadCollegeData() {
    return this.afd.list('/register/college').valueChanges();
  }
  loadBranchData() {
    return this.afd.list('/register/brn').valueChanges();
  }
  loadStreamData() {
    return this.afd.list('/register/str').valueChanges();
  }
  getTodaysQuestions(){
    var today = new Date();
   
    var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var day = "";
var month = "";
if(dd < 10)
{
    day = "0" + dd;
}
else
{
    day = "" + dd;
}

if(mm < 10)
{
    month = "0" + mm;
}
else
{
    month = "" + mm;
}
    var d= day + month +  yyyy;
     console.log(d);
   // d = "01032018";
    var fbstring = "/Daily/" + d;
    console.log(fbstring);
    var qstring = "/Questions/q/";
   
   
    return this.afd.list(fbstring).valueChanges().map(changes => {
    console.log(changes);
    return changes.map(m => { 
        //for each m, get actual questions from fb
        console.log(m);
        
            console.log(m);
            console.log(this.qstring);
            var str = qstring + m;
            console.log(str);

             this.afd.list(str).valueChanges().subscribe(l => {
            console.log(l);
return l;
});

        
    });
});
    console.log("hello");
    //return this.afd.list(fbstring).valueChanges().pipe(map(m => qstring + m)).pipe(map(x => this.afd.list(str).valueChanges()));
     console.log(this.questions);
        
       
        
   
  }
  
  
}
