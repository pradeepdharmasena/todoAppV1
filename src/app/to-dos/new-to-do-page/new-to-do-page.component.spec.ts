import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToDoPageComponent } from './new-to-do-page.component';

describe('NewToDoPageComponent', () => {
  let component: NewToDoPageComponent;
  let fixture: ComponentFixture<NewToDoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewToDoPageComponent]
    });
    fixture = TestBed.createComponent(NewToDoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
