import { Injectable } from '@angular/core';
import { AuthanticationApiService } from './api/authantication-api.service';
import { Observable, map, of } from 'rxjs';
import { AppUser } from 'src/app/models/AppUser';

@Injectable({
  providedIn: 'root'
})


export class AuthanitcationService {
  
  private authToken = '';

  constructor(private authanticationApiService: AuthanticationApiService) {}

  public getAuthToken(email: string, password: string): Observable<string> {
    if (this.authToken !== '') {
      return of(this.authToken);
    } else {
      return this.authanticationApiService.getToken(email, password).pipe(
        map((response: any) => {
          console.log("token : ",  response)
          this.authToken = response.token;
          localStorage.setItem("token", this.authToken);
          return this.authToken;
        })
      );
    }
  }

}

