import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthanitcationService {

  constructor() { }

  public  getAuthToken(email:string, password:string): string{
    return "";
  }
}
