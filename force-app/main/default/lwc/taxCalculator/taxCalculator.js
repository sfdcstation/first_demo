import { LightningElement,track } from 'lwc';

export default class TaxCalculator extends LightningElement {
    @track amount;
    @track percentage;
    

    handleChange(event)
    {
        
        const field=event.target.name;
        if(field==='amount')
        {
            this.amount=event.target.value;
        }
        if(field==='percent')
        {
            this.percentage=event.target.value;
        }
        
        if(this.amount!==undefined && this.percentage!==undefined)
        {
        this.template.querySelector('c-tax-calculation').calculation(this.amount,this.percentage);
        }
  
    }
}