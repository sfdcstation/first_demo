import { LightningElement } from 'lwc';

export default class RenderedCallBackEx2 extends LightningElement {
    properties = 'defaulted when component loads';
    
//Can we Access elements the component owns inside the renderedCallback() method in Lightning Web Component
//Yes, we can access the elements owned by component

    renderedCallback() 
    {
        
      let div= (this.template.querySelector('div')); // <div>First</div>
      console.log('^^^^^'+div);
     let button = this.template.querySelector('lightning-button');
     
     console.log('@@@@'+button);
        this.template.querySelector('span'); // null
        let div1= this.template.querySelectorAll('div'); // [<div>First</div>, <div>Second</div>]
        console.log('$$$$$'+div1);
    }

}