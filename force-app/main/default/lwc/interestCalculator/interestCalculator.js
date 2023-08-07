import { LightningElement,track } from 'lwc';

export default class InterestCalculator extends LightningElement
 {
@track amount;
@track interest;
@track totalInterest;

handlechange(event)
{
   const fieldName =event.target.name;

   if(fieldName==='Amount')
   {
      this.amount=event.target.value; 
   }

   if(fieldName==='Interest')
   {
      this.interest=event.target.value; 
   }
  this.totalInterest= this.template.querySelector('c-interest-calculation').calculate(this.amount,this.interest);

   
}
}