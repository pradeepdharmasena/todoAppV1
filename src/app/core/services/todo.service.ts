import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppUser } from 'src/app/models/AppUser';
import { AppUserApiService } from './api/app-user-api.service';
import { TodoApiService } from './api/todo-api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private todoApiService : TodoApiService) { 
  }

  public getToDoList() : Observable<any>{

      return this.todoApiService.getToDoList();
  }
}
