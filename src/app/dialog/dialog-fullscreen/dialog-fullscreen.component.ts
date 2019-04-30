import {Component, Input} from '@angular/core';
import {BaseDialog} from '../base-dialog';
import {AppService} from '../../service/app.service';

@Component({
  selector: 'app-dialog-fullscreen',
  templateUrl: './dialog-fullscreen.component.html',
  styleUrls: ['./dialog-fullscreen.component.scss'],
})
export class DialogFullscreenComponent extends BaseDialog {
  @Input() dataFromHome: string;
  textInput: string;

  public constructor(public appService: AppService/*, public cssName: string*/) {
    super();
  }

  protected getModalCtrl() {
    return this.appService.getModalCtrl();
  }

  protected getComponent() {
    return DialogFullscreenComponent;
  }

  protected getCssClass() {
    return 'modal-dialog-fullsize';
  }
}
