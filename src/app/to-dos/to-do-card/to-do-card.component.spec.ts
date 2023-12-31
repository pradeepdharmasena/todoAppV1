import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCardComponent } from './to-do-card.component';

describe('ToDoCardComponent', () => {
  let component: ToDoCardComponent;
  let fixture: ComponentFixture<ToDoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoCardComponent]
    });
    fixture = TestBed.createComponent(ToDoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
