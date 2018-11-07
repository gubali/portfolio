import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeComponentComponent } from './custome-component.component';

describe('CustomeComponentComponent', () => {
  let component: CustomeComponentComponent;
  let fixture: ComponentFixture<CustomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
