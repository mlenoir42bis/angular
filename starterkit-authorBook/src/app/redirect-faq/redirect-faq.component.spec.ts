import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectFAQComponent } from './redirect-faq.component';

describe('RedirectFAQComponent', () => {
  let component: RedirectFAQComponent;
  let fixture: ComponentFixture<RedirectFAQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectFAQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
