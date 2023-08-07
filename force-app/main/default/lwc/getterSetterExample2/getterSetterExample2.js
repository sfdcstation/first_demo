import { LightningElement,api } from 'lwc';

export default class GetterSetterExample2 extends LightningElement
{
 //Get method use to return greeting message.
 @api
 get greetingMessage(){
     console.log('GET Method Called');
     return this._greetingMessage;
 }

 //Set method use to setup greeting message in upper case.
 set greetingMessage(value){
     console.log('SET method Called');
    console.log('%%%%'+value);
     this._greetingMessage = value.toUpperCase();
 }

}