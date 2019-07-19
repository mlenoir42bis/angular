import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter',
  pure: false
})
export class BookFilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    console.log('transforme');
    console.log(value);
    console.log(args.value);

    if (value === undefined || value === null) {
      return;
    }

    let nameBook;
    let nameSearch;
    let array = [];
    for (var i = 0; i < value.length; i++) {

      nameBook = value[i]['name'];
      nameSearch = args.value

      if (typeof nameSearch != undefined && nameSearch) {
        console.log('arg')
        console.log(nameBook)
        console.log(nameSearch)
        nameBook = nameBook.substring(0, nameSearch.length);
        if (nameBook == nameSearch) {
          console.log("egal : " + nameBook + ' ' + nameSearch);
          array.push(value[i]);
        }
      }
      else {
        array.push(value[i]);
      }

    }
  
  
    return array;
  }

}
