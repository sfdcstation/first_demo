import { LightningElement } from 'lwc';

export default class ParentRenderedCallback extends LightningElement {
    renderedCallback(){
        console.log('Yes I am in parent component');
      }
}