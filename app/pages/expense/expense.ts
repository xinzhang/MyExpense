import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ExpenseDetailsPage} from '../expense-details/expense-details';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  templateUrl: 'build/pages/expense/expense.html'
})
export class ExpensePage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  expenseitems: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, navParams: NavParams, private af: AngularFire) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      // this.items.push({
      //   title: 'Item ' + i,
      //   note: 'This is item #' + i,
      //   icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      // });
    }
    //https://xzexpenses.firebaseio.com/abcdef/expenses
    this.expenseitems = this.af.database.list('/abcdef/expenses');
    
  }

  itemTapped(event, item) {
    this.navCtrl.push(ExpenseDetailsPage, {
      item: item
    });
  }
}
