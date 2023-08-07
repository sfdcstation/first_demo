import { LightningElement } from 'lwc';
import findContacts from '@salesforce/apex/contactController.findContacts';

export default class ImperativeExample1 extends LightningElement
 {
    searchKey = '';
    contacts;
    error;

    handleKeyChange(event) {
        this.searchKey = event.target.value;
    }

    handleSearch() {
        findContacts({ searchKey: this.searchKey })
            .then((result) => {
                this.contacts = result;
                console.log('&&&&'+this.contacts);
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.contacts = undefined;
            });
    }

}