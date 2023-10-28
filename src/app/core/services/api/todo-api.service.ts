import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Todo } from 'src/app/models/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  
  constructor(private http : HttpClient) { }


  public getToDoList(){
    let auth_token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get("https://localhost:7299/api/todo", {headers :headers }).pipe(
      map((response: any) => {
        if (response && response.todos && response.todos.$values) {
          return response.todos.$values.map((item: any) => {
            const todo = new Todo();
            todo.Id = item.id;
            todo.Tittle = item.tittle;
            todo.Description = item.description;
            todo.Status = item.status;
            todo.CreatedDate = new Date(item.createdDate);
            todo.DuedDate = new Date(item.duedDate);
            todo.Multimedias = item.multimedias;

            return todo;
          });
        } else {
          // Handle error or return an empty array
          return [];
        }
      })
    );
   }
}
