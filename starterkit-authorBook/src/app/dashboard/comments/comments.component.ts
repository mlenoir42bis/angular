import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    let url = 'http://52.35.224.101:8888/V5/comments?bookId=' + localStorage.getItem('bookId');;

    let token = localStorage.getItem('access_token');

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    });

    let result = this.http.get(url, {headers: headers, observe: 'response' })
    .subscribe(response => {
        this.comments = response.body;
        this.comments.forEach(function(element) {

          let tab = [];
          let i = 0;
          while (i < element.rate) {
            tab.push("<i class='fas fa-star'></i>");
            i++;
          }
          element.rate = tab;
        });
        
        return response;
    }, err => {
        throw err;
    });
  }

}
