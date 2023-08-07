import { LightningElement } from 'lwc';

export default class ErrorCallbackParent extends LightningElement {

    errorCallback(error, stack){
        console.log('errorcallback -parent' + error );
        console.log(stack);
    }
}