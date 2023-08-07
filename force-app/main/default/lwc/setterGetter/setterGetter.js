import { LightningElement,api } from 'lwc';

export default class SetterGetter extends LightningElement {
    myfruit;
    @api get fruitName() {
        
        return this._fruitName;
    }
    set fruitName(value) {
       // this.setAttribute('fruitName', value);
        this._fruitName = value;
     if(this._fruitName!==undefined)
        this.handleValueChange(value);
    }
    handleValueChange(value) {
        console.log(value);
        this.myfruit='My favourite fruit is '+this._fruitName ;
        //do something
    }

}