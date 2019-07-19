import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceVisitsComponent } from './device-visits.component';

describe('DeviceVisitsComponent', () => {
  let component: DeviceVisitsComponent;
  let fixture: ComponentFixture<DeviceVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
