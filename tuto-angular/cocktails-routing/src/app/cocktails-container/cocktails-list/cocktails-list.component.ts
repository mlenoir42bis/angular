import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktails.model';
import { CocktailService } from '../../shared/services/cocktail.service'

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[];
  public activeCocktail: number = 0;

  constructor(private cocktailService:CocktailService) { }

  ngOnInit() {
    this.cocktailService.cocktails.subscribe ( (cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
    });
  }

}
