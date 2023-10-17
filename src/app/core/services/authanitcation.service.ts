import { Injectable } from '@angular/core';
import { AuthanticationApiService } from './api/authantication-api.service';
import { Observable, map, of } from 'rxjs';

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
          // Assuming the token is a string property in the response
          //this.authToken = response.token;
          console.log("token : ",  response)
          return this.authToken;
        })
      );
    }
  }
}

