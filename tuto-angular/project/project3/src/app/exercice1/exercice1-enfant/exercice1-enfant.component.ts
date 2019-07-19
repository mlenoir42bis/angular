import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Output('incr') public incr: EventEmitter<null> = new EventEmitter<null>();
  @Output('decr') public decr: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.incr.emit();
  }
  decrement(){
    this.decr.emit();
  }
}
