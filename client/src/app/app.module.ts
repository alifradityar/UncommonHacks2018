import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { MediaCapture } from '@ionic-native/media-capture';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LivePage } from '../pages/live/live';
import { AnalyticPage } from '../pages/analytic/analytic';
import { SettingPage } from '../pages/setting/setting';
import { PlayerPage } from '../pages/player/player';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LivePage,
    AnalyticPage,
    SettingPage,
    PlayerPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LivePage,
    AnalyticPage,
    SettingPage,
    PlayerPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    MediaCapture,
    FileTransfer,
    File,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
