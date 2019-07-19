import {  Injectable, Component } from '@angular/core';

import { Router } from "@angular/router"
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor( private router: Router, private http: HttpClient) {}

    ngOnInit() {
      
    }

  errBool = false;
  errMsg = '';

  username = new FormControl('');
  password = new FormControl('');

  onSubmit () {

    this.errBool = false;
    this.errMsg = '';

    let hash = CryptoJS.SHA1(this.password.value);
    let password = CryptoJS.enc.Hex.stringify(hash);

    let url = 'http://52.35.224.101:8888/oauth/token';

    const body = "username=" + this.username.value + "&password=" + password + "&grant_type=password";

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

        this.errBool = true;
        this.errMsg = err.error.error_description;

        throw err;
    });


  }

}
