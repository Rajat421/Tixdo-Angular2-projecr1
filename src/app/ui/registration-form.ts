/**
 * Created by consultadd on 8/8/16.
 */
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import {User} from '../container'
import {UserService} from '../services/user-service'
import 'rxjs/Rx'
@Component({
  moduleId: module.id,
  selector: 'registration-form',
  templateUrl: 'registration.html',
  styleUrls: [],

})
export class RegistrationForm {
  constructor(private userservice:UserService) {
  }

  model:User = {MobileNo: '', Email: '', Password: ''}
  obj:string
  showOtpField :boolean =false

  registerUser(form:NgForm) {
    console.log(form.value);
    // {email: '...', password: '...'}
    // ...
  }

  sentMobileNo(mobileno) {
    this.userservice.sentMobileNo(mobileno).subscribe(data =>this.obj=JSON.stringify(data),err=>alert(err));

  }
  sentOtp(mobileno){
    this.userservice.sentOtp(mobileno).subscribe(data =>alert(JSON.stringify(data)),err=>alert(err));
    this.showOtpField= true;


  }
}
