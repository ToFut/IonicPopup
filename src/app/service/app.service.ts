import { Injectable } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public modalCtrl: ModalController) { }

  getModalCtrl() {
    return this.modalCtrl;
  }

  closeAllDialogs() {
    // this.modalCtrl.dismissAll();
  }
}
