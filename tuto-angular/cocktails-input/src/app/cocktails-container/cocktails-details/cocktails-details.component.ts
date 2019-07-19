import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../shared/cocktails.model';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
  @Input() cocktail: Cocktail;
 
  constructor() { }

  ngOnInit() {
  }

}
