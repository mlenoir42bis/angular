import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component'; 

import { BookFilterPipe } from './book-filter.pipe';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home Page',
      urls: [
        { title: 'Home', url: '/dashboard' },
        { title: 'Home Page' }
      ]
    },
    component: StarterComponent
  }
  
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [StarterComponent, BookFilterPipe]
})
export class StarterModule {}
