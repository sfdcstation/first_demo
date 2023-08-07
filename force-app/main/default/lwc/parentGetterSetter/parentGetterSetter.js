import { LightningElement } from 'lwc';

export default class ParentGetterSetter extends LightningElement 
{
    fieldValue;
    handleChange(event) {
        this.fieldValue = event.target.value;
    }
}