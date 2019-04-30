import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {DialogFullscreenComponent} from '../dialog/dialog-fullscreen/dialog-fullscreen.component';
import {AppService} from '../service/app.service';
import {DialogWindowedComponent} from '../dialog/dialog-windowed/dialog-windowed.component';

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
                const dataFromDialog = data['data'];
                this.textFromFullScreen = dataFromDialog;
            });
    }

    async showWindowed() {
        const windowedSize = new DialogWindowedComponent(this.appService);
        const modal = await windowedSize.showDialog({ dataFromHome: this.textFromWindow });
        modal.onDidDismiss()
            .then((data) => {
                const dataFromDialog = data['data'];
                this.textFromWindow = dataFromDialog;
            });
    }
}
