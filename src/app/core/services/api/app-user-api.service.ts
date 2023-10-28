import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppUserApiService {

  constructor(private http : HttpClient) { }


  public getAppUser( email: string){
    let params = new HttpParams();
    params = params.append('email', email);

    return this.http.get("https://localhost:7299/api/user/email", {params:params});
   }
}
