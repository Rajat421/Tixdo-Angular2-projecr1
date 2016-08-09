import { Component } from '@angular/core';
import {RegistrationForm} from './ui/registration-form'
import {UserService} from  './services/user-service'
import {NgForm} from '@angular/forms'

@Component({

  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: [''],
  directives:[RegistrationForm],
  providers:[UserService,NgForm]

})
export class AppComponent {
  title = 'app works!';
}
