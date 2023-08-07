/* eslint-disable no-console */
/* eslint-disable no-unreachable */
import { LightningElement,track,wire } from 'lwc';
import getContactRecord from '@salesforce/apex/CheckBoxEx1.getContactRecord';


export default class CheckBoxEx1 extends LightningElement {
    @track value=[] ;
    @track contactRec=[];

    //@track contactOptions;
    @wire(getContactRecord)
    myCOntactRecords({ error, data }) {
      if (data) 
      {
        this.contactRec = data;
        this.error = undefined;
      } else if (error) {
        this.error = error;
        this.contactRec = undefined;
      }
    }

  get contactOptions()
  {
    let alist = [];
   // this.contactRec.forEach(function(element) 
   for(let i=0;i<this.contactRec.length;i++)
   {
      alist.push({ label: this.contactRec[i]["Name"], value: this.contactRec[i]["Name"] });
    }
    return alist;

  }
       
   
    get selectedValues() {
        return this.value.join(',');
    }
    
    handleChange(event)
    {
    this.value=event.detail.value;
    console.log('++++++'+this.value);
   }

}