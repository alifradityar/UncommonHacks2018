import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import {  NgZone } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureAudioOptions } from '@ionic-native/media-capture';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { LivePage } from '../live/live';
import { AnalyticPage } from '../analytic/analytic';
import { SettingPage } from '../setting/setting';

const endpoint = 'https://doritos.localtunnel.me/upload';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isListening: boolean = false;
  matches: Array<String>;
  bestMatch: String = "";
  pointA: number = 0;
  pointB: number = 0;
  shotA: number = 0;
  shotB: number = 0;
  passA: number = 0;
  passB: number = 0;

  constructor(public navCtrl: NavController, public speech: SpeechRecognition, private zone: NgZone, private mediaCapture: MediaCapture, private transfer: FileTransfer, private file: File) {
  }

  async hasPermission():Promise<boolean> {
    try {
      const permission = await this.speech.hasPermission();
      console.log(permission);

      return permission;
    } catch(e) {
      console.log(e);
    }
  }

  async getPermission():Promise<void> {
    try {
      this.speech.requestPermission();
    } catch(e) {
      console.log(e);
    }
  }

  record(): void {
    console.log('record action triggered');
    this.isListening = false;
    let options: CaptureAudioOptions = {limit: 1};
    this.mediaCapture.captureAudio(options)
      .then(
        (data: MediaFile[]) => {
          const target = data[0].fullPath;
          let options: FileUploadOptions = {
            fileKey: 'file',
            fileName: 'audio.m4a',
            headers: {}
         }
         console.log(target);
         const fileTransfer: FileTransferObject = this.transfer.create();
         
         fileTransfer.upload(target, endpoint, options)
          .then((data) => {
            // success
            console.log(data.response);
            var res = JSON.parse(data.response);
            this.pointA = res.pointA;
            this.pointB = res.pointB;
            this.shotA = res.shotA;
            this.shotB = res.shotB;
            this.passA = res.passA;
            this.passB = res.passB;
          }, (err) => {
            // error
            console.log(err);
          })

        },
        (err: CaptureError) => console.error(err)
      )
  }

  listen(): void {
    console.log('listen action triggered');
    if (this.isListening) {
      this.speech.stopListening();
      this.toggleListenMode();
      return;
    }

    this.toggleListenMode();
    let _this = this;

    this.speech.startListening()
      .subscribe(matches => {
        _this.zone.run(() => {
          _this.bestMatch = matches[0];
          _this.matches = matches;
        })
      }, error => console.error(error));

  }

  toggleListenMode():void {
    this.isListening = this.isListening ? false : true;
    console.log('listening mode is now : ' + this.isListening);
  }

  setPage(val: String) {
    if (val == 'live') {
      this.navCtrl.setRoot(LivePage, {}, {animate: false});
    }
    if (val == 'analytic') {
      this.navCtrl.setRoot(AnalyticPage, {}, {animate: false});
    }
    if (val == 'setting') {
      this.navCtrl.setRoot(SettingPage, {}, {animate: false});
    }
  }
  

}
