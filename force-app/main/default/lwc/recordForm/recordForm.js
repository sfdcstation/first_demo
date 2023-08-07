import { LightningElement,api,wire } from 'lwc';
import ACCOUNT_OBJECT from  '@salesforce/schema/Account'
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import RATING_FIELD from '@salesforce/schema/Account.Rating'


export default class RecordForm extends LightningElement {
@api recordId;
 objectName =ACCOUNT_OBJECT;

 @wire (getRecord,{recordId:'$recordId',fields:[NAME_FIELD,TYPE_FIELD]}) record;

 get name()
 {
    
    return getFieldValue(this.record.data,NAME_FIELD);
 }
 get type()
 {
    
    return getFieldValue(this.record.data,TYPE_FIELD);
 }

 get rating()
 {
    
    return getFieldValue(this.record.data,RATING_FIELD);
 }

}