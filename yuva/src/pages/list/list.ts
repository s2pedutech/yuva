import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { FirebaseProvider } from '../../providers/firebase/firebase';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  events: Array<any>;
    grid: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public data: FirebaseProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    
    this.data.loadEventData().subscribe(k => {
   this.grid = k;
    console.log(this.grid);
});
    
    /*this.events = [{
		"src": "assets/imgs/logo.png",
		"title": "Amazon",
        "bg": "",
        "descrpition": "hiii",
        "date": "22/22/12"
        
	},
	{
		"src": "assets/imgs/amazon.png",
		"title": "HCL",
        "bg": "",
        "descrpition": "hiii",
        "date": "22/22/12"
	}
]*/
    
   /* this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
    
    
    
    
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }
}
