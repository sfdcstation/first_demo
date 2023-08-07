import { LightningElement, track } from 'lwc';

export default class DataBinding extends LightningElement {

    @track message='hello world'

    databindupd(event)
    {
     this.message=event.target.value;
    }
}