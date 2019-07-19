import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router"

import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms'

import { NgForm } from '@angular/forms';  

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';

import dataLanguage from './languages';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  constructor(
    private router: Router, 
    private http: HttpClient,
    private modalService: NgbModal,
    private modalService2: NgbModal
  ) { }

  closeResult : string;
  buttonClicked = "";
  details : any;
  detailsChapterContent : any;
  languages = dataLanguage;
  chapterName = '';
  chapterNumber = '';
  chapterVolume = '';
  chapterContent = '';
  language = '';

  ngOnInit() {

    let token = localStorage.getItem('access_token');
    let chapterId = localStorage.getItem('chapterId');

    if (chapterId != 'null') {
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
      });

      let urlGet = 'http://52.35.224.101:8888/V1/chapter?chapterId=' + chapterId;

      let resultGet = this.http.get(urlGet, {headers: headers, observe: 'response' })
      .subscribe(response => {
          this.details = response.body;
          this.language = this.details.language;
          this.chapterName = this.details.chapterName;
          this.chapterNumber = this.details.chapterNumber;
          this.chapterVolume = this.details.chapterVolume;
          console.log(response);
          return response;
      }, err => {
          throw err;
      });

      let url = 'http://52.35.224.101:8888/V5/downloadByChapterId?chapterId=' + chapterId;

      let resultDetails = this.http.get(url, {headers: headers, observe: 'response' })
      .subscribe(response => {
          this.detailsChapterContent = response.body
          this.chapterContent = this.detailsChapterContent.chapterContent;
          return response;
      }, err => {
          throw err;
      });
    }

  }

  onSubmit(form : NgForm): void {
    console.log("submit");
    console.log(form.value);

    const token = localStorage.getItem('access_token');
    const chapterId = localStorage.getItem('chapterId');
    const bookId = localStorage.getItem('bookId');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    });

    if (chapterId == 'null') {
      console.log("Création chapitre");
      /* Creation chapitre */
      let body = JSON.stringify(
        {
          bookId: bookId,
          chapterName: form.value.chapterName,
          chapterVolume: form.value.chapterVolume,
          chapterNumber: form.value.chapterNumber,
          language: form.value.language,
          chapterContent: form.value.chapterContent
        }
      );

      let url = 'http://52.35.224.101:8888/V1/postChapterWithContent';
  
      let result = this.http.post(url, body, {headers: headers, observe: 'response' })
      .subscribe(response => {
          console.log(response);
          localStorage.setItem('chapterId', response.body['chapterId']);
          return response;
      }, err => { 
          console.log(err);
          throw err;
      });
      
    }
    else {
      /* update chapitre */
      console.log("update chapitre");

      let body = JSON.stringify(
        {
          chapterId: chapterId,
          chapterName: form.value.chapterName,
          chapterVolume: form.value.chapterVolume,
          chapterNumber: form.value.chapterNumber,
          language: form.value.language
        }
      );

      let url = 'http://52.35.224.101:8888/V1/chapter';
  
      let result = this.http.put(url, body, {headers: headers, observe: 'response' })
      .subscribe(response => {
          console.log(response);
          return response;
      }, err => { 
          console.log(err);
          throw err;
      });

      let bodyChapter = JSON.stringify(
        {
          chapterId: chapterId,
          chapterContent: form.value.chapterContent
        }
      );
      
      console.log(body);

      let urlChapter = 'http://52.35.224.101:8888/V2/updateChapterContent';
  
      let resultChapterContent = this.http.post(urlChapter, bodyChapter, {headers: headers, observe: 'response' })
      .subscribe(response => {
          console.log(response);
          return response;
      }, err => { 
          console.log(err);
          throw err;
      });
    }

    if (this.buttonClicked == "saveQuit") {
      //rechargement de page y compris sidebar / topbar / content page
      //window.location.reload();
      //retour vers la page precedente
      window.history.back();
    }

  }
  save () {
    this.buttonClicked = "save";
  }
  saveQuit () {
    this.buttonClicked = "saveQuit";
  }
  delete() {
    console.log("delete");

    let urlDelete = 'http://52.35.224.101:8888/V1/chapter?chapterId=' + localStorage.getItem('chapterId');

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      });

    let resultDelete = this.http.delete(urlDelete, {headers: headers, observe: 'response' })
    .subscribe(response => {
        window.history.back();
        return response;
    }, err => {
        throw err;
    });

  }
  open2(content) {
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
}
