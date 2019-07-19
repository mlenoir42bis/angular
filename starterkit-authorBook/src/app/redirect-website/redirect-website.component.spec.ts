import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectWebsiteComponent } from './redirect-website.component';

describe('RedirectWebsiteComponent', () => {
  let component: RedirectWebsiteComponent;
  let fixture: ComponentFixture<RedirectWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
