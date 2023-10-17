import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthanticationApiService {

  constructor(private http : HttpClient) { }

 public getToken( email: string,  pw:string){
  let params = new HttpParams();
  // Begin assigning parameters
  params = params.append('email', email);
  params = params.append('pw', pw);
  
  return this.http.get("https://localhost:7299/api/auth", {params:params})
  //return this.http.get("https://localhost:7299/api/auth?email=a%40g.com&pw=123")
 }
}
