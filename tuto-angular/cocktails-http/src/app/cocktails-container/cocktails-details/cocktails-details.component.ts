import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktails.model';
import {Ingredient } from '../../shared/models/ingredients.model';
import { CocktailService } from '../../shared/services/cocktail.service'
import { PanierService } from '../../shared/services/panier.service'

import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
  public cocktail: Cocktail;
  public index: number;

  constructor(private activatedRoute: ActivatedRoute ,private cocktailService:CocktailService, private panierService: PanierService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params: Params) => {
      if (params.index) {
        this.index = params.index;
       }
      else {
        this.index = 0;
      }
      this.cocktailService.getCocktail(this.index).subscribe( (cocktail: Cocktail) => {
        this.cocktail = cocktail;
      });
    });
  }

  addPanier(ingredient: Ingredient[]) : void {
    this.panierService.addIngredients(ingredient);
  }

  getUrl(): string[] {
    return ['/cocktails', this.index + '', 'edit']
  }
}
