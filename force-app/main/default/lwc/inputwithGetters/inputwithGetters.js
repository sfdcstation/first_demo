import { LightningElement,track } from 'lwc';

export default class InputwithGetters extends LightningElement
 {
@track name;
nameChange(event) {

    if(event.target.name==='myInput')
    
    this.name= event.target.value;
    // eslint-disable-next-line no-console
    console.log('++++++'+this.name);
    
    }

    get userName()

{

return `${this.name}`.toUpperCase();

}

}