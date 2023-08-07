import { LightningElement,api } from 'lwc';

export default class LwcDataTable extends LightningElement {
    @api contact;
    @api columns;
    @api selection;
    @api selectedContact;
    @api contactselection;
    @api AccountIdSelection;
    @api AccountIdSelections;
     columns = [
        { label: 'First Name', fieldName: 'FirstName' },
        { label: 'Last Name', fieldName: 'LastName' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        {api: 'AccountId',label: 'Account Id', fieldName: 'AccountId'},
        { label: 'email', fieldName: 'email', type: 'email' },
      
       
    ];

   getSelectedName(event)
    {
        alert('@@@@@@');
        
        //AccountIdSelection=event.detail.selectedRows[0].AccountId;
        this.selection=event.detail.selectedRows[0].AccountId;
        this.AccountIdSelections=event.detail.selectedRows[0].AccountId;
     // alert('&&&&&&&'+AccountIdSelection);
        alert('&&&&&&&'+event.detail.selectedRows[0].AccountId);
        //alert('&&&&&&&'+JSON.stringify(AccountIdSelection));
      
       
    }
}