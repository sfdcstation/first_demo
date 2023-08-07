import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LmyLWC extends LightningElement {
    handleSuccess() {
        const showSuccess = new ShowToastEvent({
            title: 'Success!!',
            message: 'This is Success message.',
            variant: 'Success',
        });
        this.dispatchEvent(showSuccess);
    }
    
    handleError() {
        const showError = new ShowToastEvent({
            title: 'Error!!',
            message: 'This is Error message.',
            variant: 'error',
        });
        this.dispatchEvent(showError);
    }

    handleWarning() {
        const showWarning = new ShowToastEvent({
            title: 'Warning!!',
            message: 'This is Warning message.',
            variant: 'warning',
        });
        this.dispatchEvent(showWarning);
    }

    handleInfo() {
        const showInfo = new ShowToastEvent({
            title: 'Info!!',
            message: 'This is Info message.',
            variant: 'info',
        });
        this.dispatchEvent(showInfo);
    } 

}