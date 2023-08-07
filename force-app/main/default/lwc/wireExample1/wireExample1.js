import { LightningElement,wire } from 'lwc';
import accounts from '@salesforce/apex/AccountController.getAccounts';
import { refreshApex } from '@salesforce/apex';
export default class WireExample1 extends LightningElement 
{
    lstAccount = [];
    strSearchText;
    search;
    @wire (accounts, {strName:'$strSearchText'})
    fetchAccount({error, data}){
        if(data){
            this.lstAccount = data; 
            console.log('****'+data);
            console.log('****'+JSON.stringify(this.lstAccount));
        }else if(error){
            console.log(error);
        }
        return refreshApex(this.lstAccount);
    };
    changeSearchText(event){
        //this.search=event.target.value;
        //console.log('****'+this.search);
        
        this.strSearchText = event.target.value;
        console.log('&&&&&'+this.strSearchText);
        
    }

}