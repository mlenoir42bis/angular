import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  public status : boolean = true;

  reverse() {
    this.status = !this.status;
  }
  constructor() { }

  ngOnInit() {
  }

}
