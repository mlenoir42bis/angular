import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectEmailComponent } from './redirect-email.component';

describe('RedirectEmailComponent', () => {
  let component: RedirectEmailComponent;
  let fixture: ComponentFixture<RedirectEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
