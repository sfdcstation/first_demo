import { LightningElement } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';

export default class Lwcforloopinhtml extends LightningElement {
    contacts=[
        {
            id:100,
            Name:'Piku',
            skill:'sfdc'

        },
        {
            id:101,
            Name:'Took',
            skill:'MDM'

        },


    ]
}