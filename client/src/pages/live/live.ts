import { Component } from '@angular/core';
import { Loading, LoadingController, NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../home/home';
import { AnalyticPage } from '../analytic/analytic';
import { SettingPage } from '../setting/setting';
import { PlayerPage } from '../player/player';

@Component({
  selector: 'page-live',
  templateUrl: 'live.html'
})
export class LivePage {
    constructor(public navCtrl: NavController) {}

  setPage(val: String) {
    if (val == 'analytic') {
      this.navCtrl.setRoot(AnalyticPage, {}, {animate: false});
    }
    if (val == 'setting') {
      this.navCtrl.setRoot(SettingPage, {}, {animate: false});
    }
    if (val == 'creator') {
      this.navCtrl.setRoot(HomePage, {}, {animate: false});
    }
  }

  goToVideo(videoId: String) {
    this.navCtrl.push(PlayerPage, {
        videoId: videoId,
    })
  }

}
