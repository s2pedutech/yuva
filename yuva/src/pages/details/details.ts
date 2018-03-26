import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
selectedItem : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
     this.selectedItem = navParams.get('item');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
