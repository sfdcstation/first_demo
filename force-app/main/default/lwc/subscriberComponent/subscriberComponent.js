import { LightningElement, wire } from "lwc";

//1. Import all the named imports

import {
  subscribe,
  unsubscribe,
  MessageContext
} from "lightning/messageService";
import ACCOUNT_CHANNEL from "@salesforce/messageChannel/AccountDataMessageChannel__c";

export default class SubscriberComponent extends LightningElement {
  //2. Wiring MessageContext to a property
  @wire(MessageContext)
  messageContext;

  receivedMessage;
  subscription = null;
  //3. Handling the user input
  handleSubscribe() {
    console.log("in handle subscribes");
    /*if (this.subscription) {
      return;
    }*/

    //4. Subscribing to the message channel
    this.subscription = subscribe(
      this.messageContext,
      ACCOUNT_CHANNEL,
      (message) => {
        this.handleMessage(message);
      }
    );
  }

  handleMessage(message) {
      alert('&&&&&&&');
    this.receivedMessage = message.name;
    
      alert('****'+this.receivedMessage);
  }
  connectedCallback() {
    this.handleSubscribe();
}

  handleUnsubscribe() {
    console.log("in handle unsubscribe");

    unsubscribe(this.subscription);
    this.subscription = null;
  }

  handleClear() {
    this.receivedMessage = null;
  }
}