/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { LightningElement,track } from 'lwc';

export default class InpurwithQuerySelector extends LightningElement {
    @track inp;  
  
    handleClick(event)
    {
       // console.log(event.target.label);
        this.inp =this.template.querySelector("lightning-input").value;
        //this.name=inp.value;
        console.log(this.inp);
    }
}