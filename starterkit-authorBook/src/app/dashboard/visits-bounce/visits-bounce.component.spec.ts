import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsBounceComponent } from './visits-bounce.component';

describe('VisitsBounceComponent', () => {
  let component: VisitsBounceComponent;
  let fixture: ComponentFixture<VisitsBounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitsBounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitsBounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
