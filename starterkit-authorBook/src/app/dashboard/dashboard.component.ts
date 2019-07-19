import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  msg = "";
  ngOnInit() {

    let bookId = localStorage.getItem('bookId');

    if (bookId == 'null') {
      this.msg = "no book selected"
    }

  }

}
