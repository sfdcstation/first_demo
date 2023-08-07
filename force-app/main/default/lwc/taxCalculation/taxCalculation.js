import { LightningElement,api } from 'lwc';

export default class TaxCalculation extends LightningElement {
@api taxAmount;
    @api calculation(amount,percentage)
    {
this.taxAmount= (amount*percentage)/100;

    }

}