import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/ToDo';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    let todo1 = new Todo();
    todo1.Title = "complete the training report. complete the training report"
    todo1.Description = "Throughout the internship, I encountered a myriad of challenges that called for problem-solving and logical thinking. These aspects are foundational in the realm of software engineering. I will reflect on the practical application of these skills, sharing specific examples from my work. Whether it was debugging intricate code, devising efficient algorithms, or optimizing database queries"
    todo1.CreatedDate = new Date( 2023, 10, 2);
    todo1.Priority = 1;

    let todo2 = new Todo();

    todo2.Title = "complete the todo frontend"
    todo2.Description = "use angular"
    todo2.CreatedDate = new Date( 2023, 10, 2);

    this.todoList.push(todo1);
    this.todoList.push(todo2);
    this.todoList.push(todo1);
    this.todoList.push(todo2);
    this.todoList.push(todo1);
    this.todoList.push(todo2);
    this.todoList.push(todo1);
    this.todoList.push(todo2);
  }

  public todoList: Todo[] = new Array<Todo>;
  

  public HomePageComponent(){
    
  }


}
