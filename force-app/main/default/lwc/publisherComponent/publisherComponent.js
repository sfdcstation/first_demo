import { LightningElement,wire } from 'lwc';

//1. Importinting the Named imports

import{publish,MessageContext} from 'lightning/messageService';
import ACCOUNT_CHANNEL from '@salesforce/messageChannel/AccountDataMessageChannel__c';

export default class PublisherComponent extends LightningElement {
//2. Wiring the message context to a property

@wire(MessageContext) messageContext;

//3.Handling the user input, ex. some buuton events
handleClick()
{
    alert('handlepublish');
    let message = {name: 'This is a test message'};
    alert('++++'+JSON.stringify(message));
  
    //4. Publishing the message
publish(this.messageContext,ACCOUNT_CHANNEL,message);


}



}