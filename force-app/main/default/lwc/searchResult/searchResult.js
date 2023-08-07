/* eslint-disable no-alert */
/* eslint-disable no-console */
import { LightningElement,track,wire } from 'lwc';
import findContacts from '@salesforce/apex/ContactRecordSearch.findContacts';
const columns = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];
export default class SearchResult extends LightningElement
{
    @track searchRecord='';
    @track columns = columns;

    @wire(findContacts,{searchRecord:'$searchRecord'}) contacts;
    handlelookupChange(event)
    {
        this.searchRecord=event.detail;
       // console.log('$$$$'+this.searchRecord);
       // console.log('######'+JSON.stringify(this.contacts.data));
    }
}