import { LightningElement,track } from 'lwc';

export default class ExploreGetterSetter extends LightningElement 
{

@track capitalName;

capitalChange(event)
{
    this.message=event.target.value;
}

get message()
{
    return 'Give your Name';
}

set message(value)
{
    this.capitalName=value.toUpperCase();
}

}