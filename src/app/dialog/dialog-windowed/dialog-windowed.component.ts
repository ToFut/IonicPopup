import { Component, OnInit } from '@angular/core';
import {BaseDialog} from '../base-dialog';
import {AppService} from '../../service/app.service';
@Component({
  selector: 'app-dialog-windowed',
  templateUrl: './dialog-windowed.component.html',
  styleUrls: ['./dialog-windowed.component.scss'],
})
export class DialogWindowedComponent extends BaseDialog {
  constructor(private appService: AppService) {
    super();
  }

  protected getComponent() {
    return DialogWindowedComponent;
  }

  protected getCssClass() {
    return 'modal-dialog-windowed';
  }

  protected getModalCtrl() {
    return this.appService.getModalCtrl();
  }

}
