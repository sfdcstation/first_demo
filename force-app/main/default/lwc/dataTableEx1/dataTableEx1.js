import { LightningElement, wire,track } from 'lwc';
import getContactdataTable from '@salesforce/apex/datatableex1.getContactdataTable';


const columns = [
    { label: 'Name', fieldName: 'Name',sortable: true },
    { label: 'Email', fieldName: 'Email', type: 'url' },
    { label: 'Phone', fieldName: 'Phone' },
];

export default class DataTableEx1 extends LightningElement 
{
  
    @track contactCoulmns=columns;
    contactdatatable;
    selectedContact=[];
    showflag=false;
       
    @wire(getContactdataTable)
contactdata({error,data}) {
        if (data) {
            this.contactdatatable = data;
      //alert(this.contactdatatable);
            //alert(JSON.stringify(this.contactdatatable, null, '\t'));
        } else if (error) {
            this.error = error;
        }
    }
    handleclick()
    {
     
        this.selectedContact=this.template.querySelector('lightning-datatable').getSelectedRows();
            if(this.selectedContact.length>0)
            {
            this.showflag=true;
            }
        
    }

}