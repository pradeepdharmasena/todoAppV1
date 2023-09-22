import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {

   
  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

}
