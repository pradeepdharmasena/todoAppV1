import { Injectable } from '@angular/core';
import { AppUser } from 'src/app/models/AppUser';
import { AppUserApiService } from './api/app-user-api.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  private appUser: AppUser = new AppUser;
  constructor(private appUserApiService : AppUserApiService) { 
  }

  public getAppUser(email:string) : Observable<any>{
    if(this.appUser.id !== 0){
      return of(this.appUser);
    }
      return this.appUserApiService.getAppUser(email);
  }
}
