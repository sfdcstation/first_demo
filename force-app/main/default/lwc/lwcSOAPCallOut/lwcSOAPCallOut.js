/* eslint-disable no-console */
import { LightningElement,wire,api,track } from 'lwc';
import getSum from '@salesforce/apex/soapcallouts.getSum';
import getSub from '@salesforce/apex/soapcallouts.getSub';
import getMul from '@salesforce/apex/soapcallouts.getMul';

export default class LwcSOAPCallOut extends LightningElement
 {
    @track inp1 = 0;
    @track inp2 = 0;
    @track result = 0;
    @track error;
    handleChange(event) {
        console.log('label values --->>' + event.target.label);
 
        if (event.target.label === 'Input 1') {
            this.inp1 = event.target.value;
        }
        if (event.target.label === 'Input 2') {
            this.inp2 = event.target.value;
        }
    }
    handleSum(event) {
        getSum({
                val1: this.inp1,
                val2: this.inp2
            })
            .then(result => {
                this.result = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.result = undefined;
            });
 
    }
    handleSub(event) {
        getSub({
                val1: this.inp1,
                val2: this.inp2
            })
            .then(result => {
                this.result = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.result = undefined;
            });
    }
 
    handleMul(event) {
        getMul({
                val1: this.inp1,
                val2: this.inp2
            })
            .then(result => {
                this.result = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.result = undefined;
            });
    }

}