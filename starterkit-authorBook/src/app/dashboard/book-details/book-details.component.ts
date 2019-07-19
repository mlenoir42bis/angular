import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(
    private router: Router, 
    private http: HttpClient
  ) { }
  
  details: any;
  name = "";

  ngOnInit() {

    let token = localStorage.getItem('access_token');
    let bookId = localStorage.getItem('bookId');

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    });

    let url = 'http://52.35.224.101:8888/V1/book/details?bookId=' + bookId;

    let resultDetails = this.http.get(url, {headers: headers, observe: 'response' })
    .subscribe(response => {
        this.details = response.body;
        this.name = this.details.name
        return response;
    }, err => {
        throw err;
    });

  }

  addChapter() {
    localStorage.setItem('chapterId', null);
    this.router.navigate(['/chapter']);
  }

}
