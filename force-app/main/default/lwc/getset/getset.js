import { LightningElement } from 'lwc';
import myName1 from './getset1';

export default class Getset extends LightningElement
{
firstName='Piku';
lastName='Pakhira';

   

    get myName()
    {
 return `${this.firstName} ${this.lastName}`.toUpperCase();
    }

    fullName=myName1('Priyankar','Pakhira');
}