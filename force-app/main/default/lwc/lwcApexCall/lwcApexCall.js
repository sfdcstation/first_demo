import { LightningElement, wire,track } from 'lwc';
import getContactList from '@salesforce/apex/LWCContact.getContactList'


export default class LwcApexCall extends LightningElement 
{
  @track flag=false;
  @track buttonLevel='Show'
  @wire(getContactList) contactList;
  @track contactName="ContactName is:"
 
  handleContact(evt)
  {
    const label  = evt.target.label; 
    if(label ==='Show')
    {
        this.buttonLevel='Hide'
        this.flag= true;
    } else if (label ==='Hide')
    {
        this.buttonLevel='Show'
        this.flag= false;
    }
  }
}