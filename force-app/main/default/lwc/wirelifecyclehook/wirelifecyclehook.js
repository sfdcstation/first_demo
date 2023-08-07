import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/contactController.getContactList';
export default class Wirelifecyclehook extends LightningElement
{

    @wire(getContactList)
    myContacts;
    contactdata;
   
 

    @wire(getContactList)
    wiredContacts({ error, data }) {
        if (data) {
            //console.log('&&&'+data);
            this.contactdata=data;
           // console.log('&&&!!!'+JSON.stringify(contactdata));
        } else if (error) {
            console.log('****'+error);
        }
    }




    constructor() {
        super();
        console.log('In Constructor...');
        console.log(this.myContacts);
        console.log(this.contactdata);
        
        // attempting anything as below will throw error
        //console.log(JSON.stringify(this.myContacts.data));
    }

    connectedCallback() {
        console.log('In ConnectedCallback()...');
        console.log(JSON.stringify(this.myContacts.data));
        console.log(JSON.stringify(this.contactdata));
    }

    renderedCallback() {
        console.log('In renderedCallback()...');
        console.log(JSON.stringify(this.myContacts.data));
        console.log(JSON.stringify(this.contactdata));
    }

    /* my custom function, will use it later */
    get jsonData() {
        //return JSON.stringify(this.myContacts.data);
          return JSON.stringify(this.contactdata);
    }



}