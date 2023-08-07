import { LightningElement ,track} from 'lwc';
export default class ExploreDataBinding extends LightningElement 
{
@track message="hello world"

handlemessage(event)
{
this.message=event.target.value
// eslint-disable-next-line no-console
console.log('------------------------------------');
// eslint-disable-next-line no-console
console.log(this.message);
// eslint-disable-next-line no-console
console.log('------------------------------------');
}
}