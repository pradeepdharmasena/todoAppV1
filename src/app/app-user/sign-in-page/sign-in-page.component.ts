import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppUserService } from 'src/app/core/services/app-user.service';
import { AuthanitcationService } from 'src/app/core/services/authanitcation.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit, OnDestroy {

  public errorOccurd : boolean = false;
  public signInFormSubscription: Subscription = new Subscription;

  signInForm = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  constructor(
    private authanitcationService : AuthanitcationService, 
    private router: Router,
    private appUserService: AppUserService,
    private loadingService : LoadingService ) {}



  ngOnInit(): void {
    this.signInFormSubscription = this.signInForm.valueChanges.subscribe({
      next: ()=>{
        this.errorOccurd = false;
      }
    })
  }

  ngOnDestroy(): void {
    this.signInFormSubscription.unsubscribe();
  }
  
  public validateAppUser() {
    this.loadingService.showLoader();
    const email = this.signInForm.value.email as string;
    const password = this.signInForm.value.password as string;
    console.log("validate triggered", email, password);
    this.authanitcationService.getAuthToken(email, password)
      .subscribe({
        next:(res)=>{
          
          console.log( "response : ", res)
          this.updateAppUser();
        },
        error:(err)=>{
          console.log("error : ", err)
          this.errorOccurd = true;
          this.loadingService.hideLoader()
        },
        complete: ()=>{

        }
      });
  }

  public updateAppUser(){
    const email = this.signInForm.value.email as string;
    this.appUserService.getAppUser(email).subscribe({
      next: (res) =>{
        console.log("User : ", res)
        history.pushState({}, '', './home');
        this.router.navigate(['./home'])
      },
      error : (error)=>{
        this.loadingService.hideLoader()
        console.log("User : ", error)
        this.errorOccurd = true
      },
      complete : () =>{
        this.loadingService.hideLoader()
        console.log("User : completed")
      }
    })
  }
}
