import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ColorDirective } from './shared/directive/color.directive';
import { ActiveDirective } from './shared/directive/active.directive';

import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';

import { AppRouting } from './app.routing'; 

import { PanierService } from './shared/services/panier.service';

import { HttpClientModule } from '@angular/common/http';

import { CocktailsModule } from './cocktails-container/cocktails.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorDirective,
    ActiveDirective,
    PanierComponent,
    IngredientsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    CocktailsModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
