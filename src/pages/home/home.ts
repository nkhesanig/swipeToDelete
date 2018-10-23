import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list = [
    "khensani",
    "fresy",
    "musa",
    "andani"
  ];
  constructor(public navCtrl: NavController) {

  }

  delete(i){
    this.list.splice(i,1);
  }

}
