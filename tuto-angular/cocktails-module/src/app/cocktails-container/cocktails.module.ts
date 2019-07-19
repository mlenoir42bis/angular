import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktails-details/cocktails-details.component';
import { CocktailsContainerComponent } from './cocktails-container.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { FilterPipe } from '../shared/pipes/filter.pipe'

import { cocktailsRouting } from './cocktails.routing';

@NgModule ({
    declarations: [
        CocktailsListComponent,
        CocktailsDetailsComponent,
        CocktailsContainerComponent,
        CocktailEditComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        cocktailsRouting
    ],
    providers: [],
    exports: []
})
export class CocktailsModule {}