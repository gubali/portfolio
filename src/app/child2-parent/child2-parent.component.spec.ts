import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2ParentComponent } from './child2-parent.component';

describe('Child2ParentComponent', () => {
  let component: Child2ParentComponent;
  let fixture: ComponentFixture<Child2ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
