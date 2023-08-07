import { LightningElement } from 'lwc';

export default class ChildRendered extends LightningElement {
    renderedCallback(){
        console.log('Yes I am in child component');
      }
}