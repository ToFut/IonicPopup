export abstract class BaseDialog {

    protected dataReturned: any;
    modal: any;
    protected abstract getComponent();
    protected abstract getModalCtrl();
    protected abstract getCssClass();
    dismissDialog() {
        this.getModalCtrl().dismiss(this.dataReturned);
    }

    async showDialog(dataPassed) {
        this.modal = await this.getModalCtrl().create({
            cssClass: this.getCssClass(),
            component: this.getComponent(),
            buttons: [  {
                text: 'CLOSE',
                role: 'cancel', // will always sort to be on the bottom
                handler: () => {
                    this.dismissDialog();
                }
            } ],
            componentProps: dataPassed,
        });
        this.modal.present();
        return this.modal;
    }
}
