import { LightningElement } from 'lwc';

export default class ErrorCallbackChild extends LightningElement {
    constructor(){
        super();
        console.log('constructor - child');
        throw 'woops error'
    }
    
    errorCallback(error, stack){
        console.log('errorcallback - child' + error );
        console.log(stack);
    }
}