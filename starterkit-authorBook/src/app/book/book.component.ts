import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router"

import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms'

import { NgForm } from '@angular/forms';  

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

import dataTags from './tags';
import dataGenres from './genres';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  details : any;
  detailsChapter : any;

  myFormGenre:FormGroup;
  myFormTag:FormGroup;

  disabled=false;
  showFilter=false;
  limitSelection=false;
  genres = dataGenres;
  selectedItemsGenre:any=[];
  tags = dataTags;
  selectedItemsTag:any=[];
  dropdownSettings:any=[];

  itemsAuthor:any=[];
  itemsTranslator:any=[];

  description="";
  name=""; 

  constructor(    
    private router: Router, 
    private http: HttpClient,
    private fb: FormBuilder
  ) { }


  isObject(item) {
    return (typeof item === "object" && !Array.isArray(item) && item !== null);
  }
  returnBody(items) {
    let data = [];
    for (var item of items) {
      if (this.isObject(item)){
        data.push(item.name);
      }else {
        data.push(item);
      }
    }
    return data;
  }

  putAuthor() {
    let data = this.returnBody(this.itemsAuthor);
    let body = JSON.stringify(
      {
        id: localStorage.getItem('bookId'),
        authors: data
      }
    );

    let url = 'http://52.35.224.101:8888/V1/book/details';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
    });

    let result = this.http.put(url, body, {headers: headers, observe: 'response' })
    .subscribe(response => {
        return response;
    }, err => { 
        throw err;
    });
  }
  onAddAuthor(event) {
    this.putAuthor();
  }
  onRemoveAuthor(event) {
    this.putAuthor();
  }

  putTranslator() {
    let data = this.returnBody(this.itemsTranslator);
    let body = JSON.stringify(
      {
        id: localStorage.getItem('bookId'),
        translators: data
      }
    );

    let url = 'http://52.35.224.101:8888/V1/book/details';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
    });

    let result = this.http.put(url, body, {headers: headers, observe: 'response' })
    .subscribe(response => {
        return response;
    }, err => { 
        throw err;
    });
  }

  onRemoveTranslator(event) {
    this.putTranslator();
  }
  onAddTranslator(event) {
    this.putTranslator();
  }

  putGenre() {
    let body = JSON.stringify(
      {
        id: localStorage.getItem('bookId'),
        genre: this.selectedItemsGenre
      }
    );

    let url = 'http://52.35.224.101:8888/V1/book/details';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
    });

    let result = this.http.put(url, body, {headers: headers, observe: 'response' })
    .subscribe(response => {
        return response;
    }, err => { 
        throw err;
    });
  }
  onItemDeselectGenre(item:any) {
    this.putGenre();
  }
  onItemSelectGenre(item:any) {
    this.putGenre();
  }
 
  putTag() {
    let body = JSON.stringify(
      {
        id: localStorage.getItem('bookId'),
        tags: this.selectedItemsTag
      }
    );

    let url = 'http://52.35.224.101:8888/V1/book/details';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
    });

    let result = this.http.put(url, body, {headers: headers, observe: 'response' })
    .subscribe(response => {
        return response;
    }, err => { 
        throw err;
    });
  }
  onItemSelectTag(item:any) {
    this.putTag();    
  }
  onItemDeselectTag(item:any) {
    this.putTag();
  }

  setMultiselect() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      allowSearchFilter: true,
      searchPlaceholderText: 'Search'
    }

    this.myFormGenre = new FormGroup({
      genre: new FormControl()
    });
    this.myFormTag = new FormGroup({
      tag: new FormControl()
    });
  }

  ngOnInit() {
    this.setMultiselect();
    
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
        this.selectedItemsGenre = this.details.genre;
        this.selectedItemsTag = this.details.tags;
        this.itemsTranslator = this.details.translators;
        this.itemsAuthor = this.details.authors;
        this.description = this.details.bookDescription;
        this.name = this.details.name;
        return response;
    }, err => {
        throw err;
    });

    url = 'http://52.35.224.101:8888/V6/chapters?bookId=' + bookId + '&language=ALL';

    let resultDetailsChapter = this.http.get(url, {headers: headers, observe: 'response' })
    .subscribe(response => {
        this.detailsChapter = response.body;
        return response;
    }, err => {
        throw err;
    });

  }

  addChapter() {
    localStorage.setItem('chapterId', null);
    this.router.navigate(['/chapter'])
  }

  updateChapter(chapterId) {
    localStorage.setItem('chapterId', chapterId);
    this.router.navigate(['/chapter'])
  }

  focusOutDescription(event) {

    let body = JSON.stringify(
      {
        id: localStorage.getItem('bookId'),
        bookDescription: event.target.value
      }
    );
    
    let url = 'http://52.35.224.101:8888/V1/book/details';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
    });

    let result = this.http.put(url, body, {headers: headers, observe: 'response' })
    .subscribe(response => {
        return response;
    }, err => { 
        throw err;
    });
  }
}
