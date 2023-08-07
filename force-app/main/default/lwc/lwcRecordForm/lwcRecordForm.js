import { LightningElement} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class LwcRecordForm extends LightningElement {
   
   fields = [NAME_FIELD, INDUSTRY_FIELD];
   handleSuccess(event) {
    const evt = new ShowToastEvent({
        title: "Account created",
        message: "Record ID: " + event.detail.id,
        variant: "success"
    });
    this.dispatchEvent(evt);
}
  // @api recordId
}