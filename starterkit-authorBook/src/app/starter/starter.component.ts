import { Component, AfterViewInit,ViewEncapsulation } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';

import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';

import { Router } from "@angular/router"

import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms'

import { NgForm } from '@angular/forms';  

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { RequestOptions } from '@angular/http';

import { BookFilterPipe } from './book-filter.pipe';

@Component({
  templateUrl: './starter.component.html',
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #009efb;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
    `
  ]
})
export class StarterComponent implements AfterViewInit {
  closeResult : string;
  arr : any;

  constructor(
    private modalService: NgbModal,
    private modalService2: NgbModal,
    private router: Router, 
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getBooks();
  }
  
  addHero(val) {   
  }

  redirectBook(bookId) {
    localStorage.setItem('bookId', bookId);
    this.router.navigate(['/book']);
  }

  addChapter(bookId) {
    localStorage.setItem('bookId', bookId);
    localStorage.setItem('chapterId', null);
    this.router.navigate(['/chapter']);
  }

  getBooks() {
    let url = 'http://52.35.224.101:8888/V1/books/owned';

    let token = localStorage.getItem('access_token');

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    });

    let result = this.http.get(url, {headers: headers, observe: 'response' })
    .subscribe(response => {
        this.arr = response.body;

        if (Object.keys(response.body).length > 0) {
          localStorage.setItem('bookId', this.arr[0]['id']);
        }
        /*
        if (Object.keys(response.body).length == 1) {
          this.router.navigate(['/dashboard']);
        }
        */
        return response;
    }, err => {
        throw err;
    });
  }

  delete(event) {
    let id = event.target.attributes.bookid.value
    let url = 'http://52.35.224.101:8888/V1/book/offline?bookId=' + id;

    let token = localStorage.getItem('access_token');

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      });

    let result = this.http.delete(url, {headers: headers, observe: 'response' })
    .subscribe(response => {
        this.getBooks();
        return response;
    }, err => {
        throw err;
    });

    this.router.navigate(['/starter'])
  }

  
  onSubmit(form : NgForm): void {
   
    let url = 'http://52.35.224.101:8888/V2/postNeovelBook';

    const body = JSON.stringify(
      {
        name: form.value.name 
      }
    );

    const token = localStorage.getItem('access_token');

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    });

    let result = this.http.post(url, body, {headers: headers, observe: 'response' })
    .subscribe(response => {
        localStorage.setItem('bookId', response.body['id']);
        this.router.navigate(['/book'])
        //rechargement de page y compris sidebar / topbar / content page
        window.location.reload();
        return response;
    }, err => { 
        throw err;
    });

  }

  open2(event, content) {
    event.stopPropagation();
    this.modalService.open(content, { centered: true }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngAfterViewInit() {}

}
