import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { ChapterComponent } from './chapter/chapter.component';

import { RedirectWebsiteComponent } from './redirect-website/redirect-website.component'
import { RedirectFAQComponent } from './redirect-faq/redirect-faq.component'
import { RedirectEmailComponent } from './redirect-email/redirect-email.component'


export const Approutes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: '', redirectTo: '/authentication/login', pathMatch: 'full' },
      { path: 'signup', redirectTo: '/authentication/signup', pathMatch: 'full' },
      {
        path: 'authentication',
        loadChildren:
          './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/starter', pathMatch: 'full' },
      { path: 'profile', component : ProfileComponent },
      { path: 'book', component : BookComponent },
      { path: 'dashboard', component : DashboardComponent },
      { path: 'chapter', component : ChapterComponent },
      { path: 'redirectWebsite', component : RedirectWebsiteComponent },
      { path: 'redirectFAQ', component : RedirectFAQComponent },
      { path: 'redirectEmail', component : RedirectEmailComponent },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/authentication/404'
  }
];

/*
export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/starter', pathMatch: 'full' },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
*/