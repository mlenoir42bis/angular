import * as $ from 'jquery';

import * as CryptoJS from 'crypto-js';

import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';

import { RedirectWebsiteComponent } from './redirect-website/redirect-website.component'
import { RedirectFAQComponent } from './redirect-faq/redirect-faq.component'
import { RedirectEmailComponent } from './redirect-email/redirect-email.component';
import { ChapterComponent } from './chapter/chapter.component';

import { BookDetailsComponent } from './dashboard/book-details/book-details.component';
import { VisitsBounceComponent } from './dashboard/visits-bounce/visits-bounce.component';
import { CommentsComponent } from './dashboard/comments/comments.component';
import { DeviceVisitsComponent } from './dashboard/device-visits/device-visits.component';
import { VisitorsComponent } from './dashboard/visitors/visitors.component';



import { QuillModule } from 'ngx-quill';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TagInputModule } from 'ngx-chips';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    ProfileComponent,
    DashboardComponent,
    BookComponent,
    RedirectWebsiteComponent,
    RedirectFAQComponent,
    RedirectEmailComponent,
    ChapterComponent,
    BookDetailsComponent,
    VisitsBounceComponent,
    CommentsComponent,
    DeviceVisitsComponent,
    VisitorsComponent,
  ],
  imports: [
    NgxChartsModule,
    NgxDatatableModule,
    TagInputModule,
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule,
    BrowserModule,
    QuillModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    RouterModule.forRoot(Approutes, { useHash: false }),
    PerfectScrollbarModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0' })
  ],
  providers: [
    NgbActiveModal,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
