import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-visits-bounce',
  templateUrl: './visits-bounce.component.html',
  styleUrls: ['./visits-bounce.component.css']
})
export class VisitsBounceComponent implements OnInit {


  details: any;

  rating="";
  followers="";
  votant="";

  constructor(
    private router: Router, 
    private http: HttpClient
  ) { }


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
        this.rating = this.details.rating;
        this.followers = this.details.followers;
        this.votant = this.details.votes;
        console.log(response);
        return response;
    }, err => {
        throw err;
    });
  }

}
