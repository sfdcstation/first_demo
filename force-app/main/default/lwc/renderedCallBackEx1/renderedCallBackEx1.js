import { LightningElement,track } from 'lwc';

export default class RenderedCallBackEx1 extends LightningElement 
{

   properties;
   hasRendered = true;
    renderedCallback() {
        //guarding code inside the renderedCallback using boolean property
        if (this.hasRendered) {
            this.properties = 'set by renderedCallback';
            console.log('properties ' + this.properties);
            this.hasRendered = false;
        }
    }

    handleButtonClick() {
        this.properties = 'set by buttonClick';
    }
}