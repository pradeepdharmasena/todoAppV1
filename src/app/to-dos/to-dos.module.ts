import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from '@angular/router';
import { NewToDoPageComponent } from './new-to-do-page/new-to-do-page.component';
import { ToDoCardComponent } from './to-do-card/to-do-card.component';
import { ToDoVeiwPageComponent } from './to-do-veiw-page/to-do-veiw-page.component';



@NgModule({
    declarations: [
        HomePageComponent,
        NewToDoPageComponent,
        ToDoCardComponent,
        ToDoVeiwPageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class ToDosModule { }
