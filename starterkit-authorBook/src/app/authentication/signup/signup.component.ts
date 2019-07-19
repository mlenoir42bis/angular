import {  Injectable, Component } from '@angular/core';

import { Router } from "@angular/router"
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  constructor(private router: Router, private http: HttpClient) {}

  passwordbool = true;
  termbool = true; 
  errorMsgbool = false;
  errorMsg = '';
  requestMsgbool = false;
  requestMsg = '';

  email = new FormControl('');
  authorname = new FormControl('');
  password = new FormControl('');
  verifyPassword = new FormControl('');
  checkTerm = new FormControl('');

  eventVerifyPassword(event) {
    if (this.password.value == this.verifyPassword.value) {
      this.passwordbool = true;
    }else {
      this.passwordbool = false;
    }
  }
  eventCheckTerm(event) {
    if (this.checkTerm.value == true) {
      this.termbool = true;
    }
    else {
      this.termbool = false;
    }
  }

  onSubmit () {

    this.errorMsgbool = false;
    this.requestMsgbool = false;
    this.errorMsg = '';
    this.requestMsg = '';

    let errMsg = [];
    if (this.password.value !== this.verifyPassword.value) {
      errMsg.push('the password is not similar to the verification password');
    }
    else if (this.checkTerm.value !== true) {
      errMsg.push('Accept terms of use is mandatory');
      
    }
    if (errMsg.length > 0) {
      this.errorMsgbool = true;
      this.errorMsg = errMsg.join('\n'); 
    }
    else {

    

    let hash = CryptoJS.SHA1(this.password.value);
    let password = CryptoJS.enc.Hex.stringify(hash);

    let url = 'http://52.35.224.101:8888/V2/user';

    const body = JSON.stringify(
      {
        mail: this.email.value, 
        password: password,
        avatar: 'AvatarNeovel1', 
        name: this.authorname.value,
        tos: this.checkTerm.value
      }
    );

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let result = this.http.post(url, body, {headers: headers, observe: 'response' })
    .subscribe(response => {

        let hash = CryptoJS.SHA1(this.password.value);
        let password = CryptoJS.enc.Hex.stringify(hash);
    
        let url = 'http://52.35.224.101:8888/oauth/token';
    
        const body = "username=" + this.email.value + "&password=" + password + "&grant_type=password";
    
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic bmVvdmVsX2ludGVybmFsX2NsaWVudF9pZDpiYWkgeGlhb2NodW4=',
            'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token',
            'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
        });
    
        let result = this.http.post(url, body, {headers: headers, observe: 'response' })
        .subscribe(response => {
    
            localStorage.setItem('access_token', response.body['access_token']);
            localStorage.setItem('expires_in', response.body['expires_in']);
            localStorage.setItem('userId', response.body['userId']);
    
            this.router.navigate(['/starter']);
    
            return response;
        }, err => {
            throw err;
        });

        return response;
    }, err => {

        this.requestMsgbool = true;
        this.requestMsg = err.error.message;

        throw err;
    });


    }
  }

}
