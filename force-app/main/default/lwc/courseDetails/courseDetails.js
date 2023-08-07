import { LightningElement,api } from 'lwc';

export default class CourseDetails extends LightningElement
 {
@api courseDetailInfo={courseNames:'SFDCLWC',courseFee:'5000'};
@api displayCourseInfo=false;

}