import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { AuthanitcationService } from 'src/app/core/services/authanitcation.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {


  constructor(private authanitcationService : AuthanitcationService) {
  
    
  }
   
  signInForm = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  public validateAppUser() {
    
    const email = this.signInForm.value.email as string;
    const password = this.signInForm.value.password as string;
    console.log("validate triggered", email, password);
    this.authanitcationService.getAuthToken(email, password)
      .subscribe({
        next:(res)=>{
          console.log( "response : ", res)
        },
        error:(err)=>{
          console.log("error : ", err)
        },
        complete: ()=>{

        }
      });
  }

}
