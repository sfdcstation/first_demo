import { LightningElement } from 'lwc';

export default class RenderedCallBackEx3 extends LightningElement {
    showInfo = false;
    showInputFielVal = false;
    buttonLabel;

    buttonClicked(event)
    {
        let buttonLabel = event.currentTarget.dataset.id;
        console.log('@@@@@'+buttonLabel);
        this.showInfo = true;
        this.showInputFielVal = true;
        this.template.querySelector('.input1').value = buttonLabel + ' is Clicked';
    }
    /*renderedCallback()
    {
        if(this.showInputFielVal)
        {
            this.template.querySelector('.input1').value = this.buttonLabel + ' is Clicked';
            this.showInputFielVal = false;
        }
    }*/

}