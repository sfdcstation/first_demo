import { LightningElement,track } from 'lwc';

export default class CourseCalculator extends LightningElement 
{
    courseName='Salesforce LWC';
   courseFees;
   numberofStudents;
  @track totalCourseFees;

  changeCourseFees(event)
  {
      this.courseFees=event.target.value;
      this.calculateCourseFees();
  }

  changeStudents(event)
  {
      this.numberofStudents=event.target.value;
      this.calculateCourseFees();
  }
    calculateCourseFees()
    {
      this.totalCourseFees=parseFloat(this.courseFees)*parseFloat(this.numberofStudents);
      // eslint-disable-next-line no-console
      console.log('total course fees'+this.totalCourseFees);
    }

}