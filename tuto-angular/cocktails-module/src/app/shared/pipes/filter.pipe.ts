import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../models/cocktails.model';
import { CocktailService } from '../services/cocktail.service';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cocktails: Cocktail[], search: string): Cocktail[] | null {
    if ((!search.length)) {
      return cocktails;
    } else {
      return cocktails.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    }
  }

}
