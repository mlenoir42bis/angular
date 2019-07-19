import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-website',
  templateUrl: './redirect-website.component.html',
  styleUrls: ['./redirect-website.component.css']
})
export class RedirectWebsiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href='http://neovel.io';
  }

}
