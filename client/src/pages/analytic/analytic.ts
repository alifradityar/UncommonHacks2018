import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LivePage } from '../live/live';
import { HomePage } from '../home/home';
import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-analytic',
  templateUrl: 'analytic.html'
})
export class AnalyticPage {

  constructor(public navCtrl: NavController) {
  }

  setPage(val: String) {
    if (val == 'live') {
      this.navCtrl.setRoot(LivePage, {}, {animate: false});
    }
    if (val == 'setting') {
      this.navCtrl.setRoot(SettingPage, {}, {animate: false});
    }
    if (val == 'creator') {
      this.navCtrl.setRoot(HomePage, {}, {animate: false});
    }
  }

}
