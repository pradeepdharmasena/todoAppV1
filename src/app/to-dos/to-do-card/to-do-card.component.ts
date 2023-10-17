import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Models/ToDo';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.scss']
})
export class ToDoCardComponent implements OnInit{

  @Input() todo!: Todo;

  constructor(private _router: Router) { }

  ngOnInit(){
    
  }

  public loadViewer():void{
    console.log("click on dev")
    this._router.navigate(['todo'])
  }

  loadEditor(){
    console.log("load editor")
    this._router.navigate(['edit'])
  }

  

}
