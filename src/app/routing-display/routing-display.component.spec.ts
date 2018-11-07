import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingDisplayComponent } from './routing-display.component';

describe('RoutingDisplayComponent', () => {
  let component: RoutingDisplayComponent;
  let fixture: ComponentFixture<RoutingDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
