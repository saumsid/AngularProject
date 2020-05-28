import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics=['angular','react','vue'];
  public topichaserror=true;
  public submitted=false;
  
  userModel=new User('saum','saum@g',9604700487,'default','morning',true);


  constructor(private _enrollmentService:EnrollmentService)
  {

  }

  validationSelect(value)
{
if(value=='default'){
  this.topichaserror=true;
}
else
{
this.topichaserror=false;
}

}
onSubmit()
{
  this.submitted=true;
  this._enrollmentService.enroll(this.userModel)
  .subscribe(
    data=>console.log('success...!',data),
    error=>console.log('error...!',error)
  )
}

}
