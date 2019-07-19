import { RouterModule, Route } from '@angular/router';

import { CocktailsDetailsComponent } from './cocktails-details/cocktails-details.component';
import { CocktailsContainerComponent } from './cocktails-container.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';


const COCKTAILS_ROUTE: Route[] = [
    {path: 'cocktails', component: CocktailsContainerComponent, children: [
        { path: '', component: CocktailsDetailsComponent },
        { path: 'new', component: CocktailEditComponent },
        { path: ':index', component: CocktailsDetailsComponent },
        { path: ':index/edit', component: CocktailEditComponent }
    ]}
]

export const cocktailsRouting = RouterModule.forChild(COCKTAILS_ROUTE);