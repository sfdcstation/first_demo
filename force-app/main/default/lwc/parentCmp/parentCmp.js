import { LightningElement, track } from 'lwc';

export default class ParentCmp extends LightningElement {
    @track parentMessage='This is Parent Message'
changeHandler(event)
{
    this.parentMessage=event.target.value;
}
}