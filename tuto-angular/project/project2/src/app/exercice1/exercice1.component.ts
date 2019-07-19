import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  linkPict = "https://sd-cdn.fr/wp-content/uploads/2016/02/simpsons-live.jpg";
  jeTest = "OoO";

  alert() {
    alert('whouou !');
  }
  constructor() { }

  ngOnInit() {
  }

}
