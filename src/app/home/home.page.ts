import {Component, OnInit} from '@angular/core';
import {DialogFullscreenComponent} from '../dialog/dialog-fullscreen/dialog-fullscreen.component';
import {AppService} from '../service/app.service';
import {DialogWindowedComponent} from '../dialog/dialog-windowed/dialog-windowed.component';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    textFromWindow: string;
    textFromFullScreen: string;

    constructor(public appService: AppService) {
    }
    async showFullScreen() {
        const fullSize = new DialogFullscreenComponent(this.appService);
        const modal = await fullSize.showDialog({ dataFromHome: this.textFromFullScreen });
        modal.onDidDismiss()
            .then((data) => {
                this.textFromFullScreen = data['data'];
            });
    }

    async showWindowed() {
        const windowedSize = new DialogWindowedComponent(this.appService);
        const modal = await windowedSize.showDialog({ dataFromHome: this.textFromWindow });
        modal.onDidDismiss()
            .then((data) => {
                this.textFromWindow = data['data'];
            });
    }

}
