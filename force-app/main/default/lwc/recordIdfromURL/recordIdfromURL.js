import { LightningElement,track,wire,api } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class RecordIdfromURL extends LightningElement {
     @api recordId='';
     @track recordId1;
     @wire(CurrentPageReference)
    currentPageReference; 

     recordIdFromState(){
        this.recordId1= JSON.stringify(this.currentPageReference.attributes.recordId);
        alert('!!!!!'+this.recordId1);
    }
}