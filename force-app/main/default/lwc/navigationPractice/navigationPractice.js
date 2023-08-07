import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavigationPractice extends NavigationMixin(LightningElement) 
{
    navigateToNewContactWithDefaults() {
        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Priyankar',
            LastName: 'Pakhira',
            LeadSource: 'Other'
        });

        console.log(defaultValues);

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues
            }
        });
    }

}