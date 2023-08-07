/* eslint-disable no-alert */
/* eslint-disable no-console */
import { LightningElement,track } from 'lwc';

export default class LwcLookup1 extends LightningElement 
{
@track searchVal;

handleChange(event)
{
   
    this.searchVal=event.target.value;
    console.log('+++++'+this.searchVal);
    const searchEvent=new CustomEvent('changelookup',{detail: this.searchVal});
    this.dispatchEvent(searchEvent);
    
}

}