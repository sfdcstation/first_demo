import { LightningElement, track } from 'lwc';
import createAccountRecord from '@salesforce/apex/AccountCreationController.createAccountRecord';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UserModeExample extends LightningElement {
    @track accountName = '';
  @track accountType = '';
  @track phone = '';

  showToast(title, message, variant) {
    const event = new ShowToastEvent({
        title: title,
        message: message,
        variant: variant
    });
    this.dispatchEvent(event);
}

  handleAccountNameChange(event) {
    this.accountName = event.target.value;
  }
  handleAccountTypeChange(event) {
    this.accountType = event.target.value;
  }
  handlePhoneChange(event) {
    this.phone = event.target.value;
  }
 


  createAccount() {
    // Perform data validation if needed
    const accountData = {
      Name: this.accountName,
      Type: this.accountType,
      Phone: this.phone
     
    };
    createAccountRecord({accountData })
      .then((result) => {

        // Handle success
        this.message = result;
        this.error = undefined;
        if(this.message !== undefined)
        {
        console.log('Account created successfully: ', result);
        // Reset form fields after successful creation
        this.accountName = '';
        this.accountType = '';
        this.phone = '';
        this.showToast('Success!', 'A New Account Created', 'Success');
        }
        console.log(JSON.stringify(result));
        console.log("result", this.message);
      })
      .catch((error) => {
        // Handle error
        this.showToast('Something wrong','You dont have'+ error.body.message, 'error');
        console.error('Error creating account: ', error);
      });
  }
}
