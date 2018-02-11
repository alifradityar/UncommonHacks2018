import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LivePage } from '../live/live';
import { AnalyticPage } from '../analytic/analytic';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  
  form: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
  }

  _buildForm() {
    let group: any = {
      batterySaving: false,
      smsNotification: false
    };
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      // this.settings.merge(this.form.value);
    });
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});
  }

  ionViewWillEnter() {
     // Build an empty form for the template to render
     this.form = this.formBuilder.group({});

    // Build an empty form for the template to render
    this._buildForm();
  }

  setPage(val: String) {
    if (val == 'live') {
      this.navCtrl.setRoot(LivePage, {}, {animate: false});
    }
    if (val == 'analytic') {
      this.navCtrl.setRoot(AnalyticPage, {}, {animate: false});
    }
    if (val == 'creator') {
      this.navCtrl.setRoot(HomePage, {}, {animate: false});
    }
  }

}
