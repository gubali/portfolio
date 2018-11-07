import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemytestComponent } from './udemytest.component';

describe('UdemytestComponent', () => {
  let component: UdemytestComponent;
  let fixture: ComponentFixture<UdemytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdemytestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
