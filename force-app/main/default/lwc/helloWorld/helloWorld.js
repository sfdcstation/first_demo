import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement
 {
@track name='World';
    handlechange(event)
    {
       this.name=event.target.value;
    }
}