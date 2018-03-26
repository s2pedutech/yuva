import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { FirebaseListObservable } from 'angularfire2/database';
import { QuestionPage } from '../question/question';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//grid : Array<any> = [];
grid: any;
mydata: any;
dailydata: Array<any> = [];
  constructor(public nav: NavController,public data: FirebaseProvider) {
 

//this.data.getTodaysQuestions();
 
  this.data.loadData().subscribe(k => {
   this.grid = k;
    console.log(this.grid);
});
this.dailydata = this.data.getTodaysQuestions();
console.log(this.dailydata);

/*
this.data.getTodaysQuestions().subscribe(k => {
console.log(k);
});
this.data.getTodaysQuestions().subscribe(k => {
    console.log(k);
    k.map(c=>{
    console.log(c);
    })
});*/
  }
   OpenDetailsPage(rowdata) {
    console.log(rowdata);
    
    
    this.nav.push(QuestionPage);
  }


}
