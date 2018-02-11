import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
    selector: 'page-player',
    templateUrl: 'player.html',
})
export class PlayerPage {

    video_id: any;
    videoUrl: SafeResourceUrl;
    isLike: boolean = false;
    isDislike: boolean = false;

    constructor(
        public sanitizer: DomSanitizer,
        public youtube: YoutubeVideoPlayer,
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.video_id = this.navParams.get('videoId') || '7cUByBa60Bw';
        let dangerousVideoUrl = 'https://www.youtube.com/embed/' + this.video_id + '?autoplay=1&rel=0&showinfo=0&start=10';
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
    }

    setLike(): void {
        console.log("setLike");
        this.isLike = true;
        setTimeout(() => {
            this.isLike = false;
        }, 1000);
    }

    setDislike(): void {
        console.log("setDislike");
        this.isDislike = true;
        setTimeout(() => {
            this.isDislike = false;
        }, 1000);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PlayerPage');
    }

    watch_on_youtube( video_id ) {
        this.youtube.openVideo( video_id );
    }

}