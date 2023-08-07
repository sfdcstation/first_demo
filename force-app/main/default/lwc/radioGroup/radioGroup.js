/* eslint-disable no-console */
import { LightningElement,track, wire } from 'lwc';
import getContacts from '@salesforce/apex/RadioGroup.getContacts';
export default class RadioGroup extends LightningElement
{
  @track value = '';
  @track contacts=[];
  @track error;
    
  @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
  get options()
  {
    let conlist=[];
    for(let i=0;i<this.contacts.length;i++)
    {
    
    conlist.push({ label: this.contacts[i]["Name"],value: this.contacts[i]["Name"]});  
  }
    return conlist;
  } 
  
  get selectedValues()
    {
    return this.value;
    }

    handleChange(event)
{
this.value=event.detail.value;
console.log('++++++'+this.value);
}

}