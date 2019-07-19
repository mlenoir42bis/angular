import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-email',
  templateUrl: './redirect-email.component.html',
  styleUrls: ['./redirect-email.component.css']
})
export class RedirectEmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        window.location.href='mailto:app.neovel@gmail.com';
  }

}
