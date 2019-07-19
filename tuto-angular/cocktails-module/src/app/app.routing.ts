import { Route, RouterModule } from '@angular/router';

import { PanierComponent } from './panier/panier.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { CocktailsDetailsComponent } from './cocktails-container/cocktails-details/cocktails-details.component';

import { CocktailEditComponent } from './cocktails-container/cocktail-edit/cocktail-edit.component';

const APP_ROUTE: Route[] = [
    {path: '', redirectTo: 'cocktails', pathMatch: 'full'},
    {path: 'panier', component: PanierComponent},
]

export const AppRouting = RouterModule.forRoot(APP_ROUTE);