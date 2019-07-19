import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-faq',
  templateUrl: './redirect-faq.component.html',
  styleUrls: ['./redirect-faq.component.css']
})
export class RedirectFAQComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href='https://www.marceaulenoir.fr';
  }

}
