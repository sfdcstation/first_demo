/* eslint-disable no-console */
/* eslint-disable no-alert */
import { LightningElement,track } from 'lwc';

export default class LwcTreeGrid extends LightningElement { 
    @track data = [];
    @track selectrow;
    @track currentExpanded = ['123556', '123556-A'];
    @track selectedRows;
   
    @track columns = [
        {
            type: 'text',
            fieldName: 'accountName',
            label: 'Account Name'
        },
        {
            type: 'number',
            fieldName: 'employees',
            label: 'Employees'
        },
        {
            type: 'phone',
            fieldName: 'phone',
            label: 'Phone Number'
        }
       
    ];


     data= [
            
            {
                "name": "123556",
                "accountName": "Acme Corporation",
                "employees": 10000,
                "phone": "837-555-1212",
                "accountOwner": "http://example.com/john-doe",
                "accountOwnerName": "John Doe",            
                "_children": [
                    {
                        "name": "123556-A",
                        "accountName": "Acme Corporation (Bay Area)",
                        "employees": 3000,
                        "phone": "837-555-1212",
                        "accountOwner": "http://example.com/john-doe",
                        "accountOwnerName": "John Doe",
                        "_children": [
                            {
                                "name": "123556-A-A",
                                "accountName": "Acme Corporation (Oakland)",
                                "employees": 745,
                                "phone": "837-555-1212",
                                "accountOwner": "http://example.com/john-doe",
                                "accountOwnerName": "John Doe"
                            }
                        ]
                    }
                ]
            },
        ];


      
      //  selectedRows=this.template.querySelector('lightning-tree-grid').getSelectedRows();
        
  
   

}