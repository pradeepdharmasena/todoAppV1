import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoVeiwPageComponent } from './to-do-veiw-page.component';

describe('ToDoVeiwPageComponent', () => {
  let component: ToDoVeiwPageComponent;
  let fixture: ComponentFixture<ToDoVeiwPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoVeiwPageComponent]
    });
    fixture = TestBed.createComponent(ToDoVeiwPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
